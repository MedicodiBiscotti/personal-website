import dedent from "dedent";
import hljs from "highlight.js/lib/common";

type CodeProps = {
  code: string;
  language: string;
  className?: string;
};

export default function Code({ code, language, className }: CodeProps) {
  return (
    <pre
      className={`my-6 rounded-md bg-slate-800 px-4 py-3 dark:bg-black/50 ${className}`}
    >
      <code
        className={`hljs language-${language} text-sm`}
        dangerouslySetInnerHTML={{
          __html: hljs.highlight(dedent(code), { language: language }).value,
        }}
      />
    </pre>
  );
}
