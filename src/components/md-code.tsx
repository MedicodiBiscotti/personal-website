import fs from "fs";
import type { Metadata } from "next";
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
import { unified } from "unified";
import { matter } from "vfile-matter";

// getPost will be used twice, but execute only once
export const getPost = cache(async () => {
  const post = join(process.cwd(), "_posts", "code-example.md");
  const file = await unified()
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
    .process(fs.readFileSync(post, "utf-8"));
  return file;
});

export async function generateMetadata(): Promise<Metadata> {
  const file = await getPost();
  return {
    title: file.data.matter.title,
    description: "asdda",
  };
}

async function MdCode() {
  const file = await getPost();

  return (
    <div
      className="prose dark:prose-invert prose-em:font-italic prose-em:not-italic"
      dangerouslySetInnerHTML={{ __html: file.value }}
    />
  );
}

export default MdCode;
