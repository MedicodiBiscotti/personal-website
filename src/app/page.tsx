import Code from "@/components/code";
import MdCode from "@/components/md-code";
import dedent from "dedent";
import hljs from "highlight.js/lib/common";

export default function Home() {
  const code = hljs.highlight('print("You rock!")', {
    language: "python",
  }).value;

  const htmlCode = dedent`
    <div>
      <p>Hello</p>
    </div>
  `;

  return (
    <div className="mx-auto w-1/3 bg-neutral-900/75 text-white">
      <div className="p-2">
        <h1 className="mb-2 text-6xl font-thin">Hello world</h1>
        <p className="my-2">
          Welcome to my <span className="font-italic">super awesome</span>{" "}
          website!
        </p>

        <div className="my-2 rounded-md border border-slate-600 bg-slate-800">
          <pre>
            <code
              className="language-python m-1"
              dangerouslySetInnerHTML={{ __html: code }}
            />
          </pre>
        </div>

        <div className="my-2 rounded-md border border-slate-600 bg-slate-800">
          <pre>
            <code
              className="language-html m-1"
              dangerouslySetInnerHTML={{
                __html: hljs.highlight(htmlCode, { language: "html" }).value,
              }}
            />
          </pre>
        </div>

        <div className="my-2 rounded-md border border-slate-600 bg-slate-800">
          <pre>
            <code className="language-html m-1">{htmlCode}</code>
          </pre>
        </div>

        <Code
          language="html"
          code={`
            <div>
              <p>Hello</p>
            </div>
          `}
        />

        <Code
          language="python"
          code={`
            def main():
              print("Hello")
          `}
        />

        <MdCode />
      </div>
    </div>
  );
}
