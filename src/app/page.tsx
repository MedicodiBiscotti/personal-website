import Code from "@/components/Code";
import hljs from "highlight.js/lib/common";

export default function Home() {
  return (
    <div className="mt-16">
      {/*
        hljs adds semantic classes which are styled from themes.
        I only want a dark theme; even in light mode, code is on a dark background.
        But this part is not on a background, so hljs won't work.
        Can be manual spans or shikijs which allows specifying themes per block.
        */}
      <pre>
        <code
          className="language-javascript font-mono"
          dangerouslySetInnerHTML={{
            __html: hljs.highlight("hello(); i.am ===", {
              language: "javascript",
            }).value,
          }}
        />
      </pre>
      <h1 className="mb-2 text-6xl font-thin">Kasper Dahl</h1>
      <div className="grid grid-cols-[33%_66%] gap-8">
        <img
          className="block h-[300px] w-full bg-neutral-600"
          alt="Picture of me"
        />
        <div className="flex flex-col">
          <p className="text-3xl font-bold">
            I'm a software developer in the Copenhagen metropolitan area.
          </p>
          <div className="flex grow items-center">
            <p className="text-xl">
              From simple CLI tools to distributed systems of microservices, I
              can help you build it, whether we're making something new or
              modernising legacy software.
            </p>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-xl">
        Welcome to my little corner of the internet, and...
      </p>
      <Code
        className="mx-auto w-max"
        language="js"
        code={`
          if (visitor.isHiring) {
            getInTouch(); // details below
          }
        `}
      />
    </div>
  );
}
