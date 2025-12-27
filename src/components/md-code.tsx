import fs from "fs";
import { join } from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

const post = join(process.cwd(), "_posts", "code-example.md");

async function MdCode() {
  const file = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeHighlight)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeStringify)
    .process(fs.readFileSync(post, "utf-8"));

  return (
    <div
      className="prose dark:prose-invert prose-em:font-italic prose-em:not-italic"
      dangerouslySetInnerHTML={{ __html: file.value }}
    />
  );
}

export default MdCode;
