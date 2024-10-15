import fs from "fs";
import { join } from "path";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

const post = join(process.cwd(), "_posts", "code-example.md");

async function MdCode() {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(fs.readFileSync(post, "utf-8"));
  return (
    <div
      className="prose prose-invert"
      dangerouslySetInnerHTML={{ __html: file.value }}
    />
  );
}

export default MdCode;
