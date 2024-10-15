import dedent from "dedent";
import hljs from "highlight.js/lib/common";

type CodeProps = {
  code: string;
  language: string;
};

function Code({ code, language }: CodeProps) {
  return (
    <pre className="my-2 rounded-md bg-black/50 px-4 py-3">
      <code
        className={`hljs language-${language} text-sm`}
        dangerouslySetInnerHTML={{
          __html: hljs.highlight(dedent(code), { language: language }).value,
        }}
      />
    </pre>
  );
}

export default Code;
