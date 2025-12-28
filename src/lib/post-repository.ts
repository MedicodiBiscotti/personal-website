import * as fs from "node:fs/promises";
import { join } from "path";
import { cache } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeInferReadingTimeMeta from "rehype-infer-reading-time-meta";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkStringify from "remark-stringify";
import { read } from "to-vfile";
import { unified } from "unified";
import { matter } from "vfile-matter";

/*
3 strategies for getting posts:
1. slug = file name: O(1), simple, should be unique anyway.
2. meta data: O(n), not a problem with SSG, caching helps.
3. database: O(1) with indexing slug.
 */

const postsDirectory = "_posts";

// Cached because it's called twice in the page, once for content and once for metadata.
export const getPostBySlug = cache(async (slug: string) => {
  const path = join(postsDirectory, `${slug}.md`);
  return await getPost(path);
});

// Cached because it could be called multiple times if using strategy 2.
export const getAllPosts = cache(async () => {
  const posts = await fs.readdir(postsDirectory);
  return await Promise.all(posts.map((path) => getPost(path)));
});

export async function getAllPostMeta() {
  const posts = await fs.readdir(postsDirectory);
  return await Promise.all(posts.map((path) => getPostMeta(path)));
}

// Could be cached instead of the other functions.
async function getPost(path: string) {
  return await unified()
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
    .use(rehypeInferReadingTimeMeta)
    .use(rehypeStringify)
    .process(await read(path));
}

// No need for HTML processing here.
async function getPostMeta(path: string) {
  return await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(function () {
      return function (_, file) {
        matter(file);
      };
    })
    .use(remarkStringify)
    .process(await read(path));
}
