import * as fs from "node:fs/promises";
import { join } from "path";
import { cache } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeInferDescriptionMeta from "rehype-infer-description-meta";
import rehypeInferReadingTimeMeta from "rehype-infer-reading-time-meta";
import rehypeInferTitleMeta from "rehype-infer-title-meta";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { read } from "to-vfile";
import { unified } from "unified";
import { VFile } from "vfile";
import { matter } from "vfile-matter";

/*
3 strategies for getting posts:
1. slug = file name: O(1), simple, should be unique anyway.
2. meta data: O(n), not a problem with SSG, caching helps.
3. database: O(1) with indexing slug.
 */

const postsDirectory = "_posts";

export async function getPostBySlug(slug: string): Promise<VFile> {
  const path = join(postsDirectory, `${slug}.md`);
  return getPost(path);
}

export async function getAllPosts(): Promise<VFile[]> {
  const posts = await getAllPostFilenames();
  const paths = posts.map((post) => join(postsDirectory, post));
  return Promise.all(paths.map((path) => getPost(path)));
}

export async function getAllPostSlugs(): Promise<string[]> {
  // By metadata or files in the folder? Depends on how posts are fetched.

  // Metadata
  // const posts = await getAllPosts();
  // // @ts-ignore it's not undefined
  // return posts.map((post) => post.data.matter?.slug);

  // Filename
  const posts = await getAllPostFilenames();
  return posts.map((post) => post.replace(/\.mdx?$/, ""));
}

export function getAllPostFilenames(): Promise<string[]> {
  return fs.readdir(postsDirectory);
}

// Cached because it's called multiple times. Twice on the page, once for content and once for metadata. And to get all posts for overview and metadata.
export const getPost = cache(async (path: string): Promise<VFile> => {
  return unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(function () {
      return function (_, file) {
        matter(file);
      };
    })
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeHighlight)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeInferTitleMeta)
    .use(rehypeInferDescriptionMeta, { selector: "p" })
    .use(rehypeInferReadingTimeMeta)
    .use(rehypeStringify)
    .process(await read(path));
});
