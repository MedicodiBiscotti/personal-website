import Code from "@/components/Code";
import FancyLink from "@/components/FancyLink";

export default function Home() {
  return (
    <div className="mt-16">
      {/*
        hljs adds semantic classes which are styled from themes.
        I only want a dark theme; even in light mode, code is on a dark background.
        But this part is not on a background, so hljs won't work.
        Can be manual spans or shikijs which allows specifying themes per block.
        */}
      <div className="text-center">
        <pre>
          <code className="font-mono">
            <span className="text-[#6f42c1] text-shadow-[0px_0px_5px] dark:text-[#dcbdfb]">
              hello
            </span>
            (); i.
            <span className="text-[#005cc5] text-shadow-[0px_0px_5px] dark:text-[#6cb6ff]">
              am
            </span>{" "}
            ===
            <span
              aria-hidden
              className={"animate-blink bg-current motion-reduce:hidden"}
            >
              0
            </span>
          </code>
        </pre>
        {/* 4xl - 6xl font size */}
        <h1 className="text-[clamp(2.25rem,calc(1.705rem+2.727vw),3.75rem)] leading-none font-extrabold">
          Kasper Dahl
        </h1>
      </div>
      <div className="mt-6 grid gap-8 md:grid-cols-[35%_1fr]">
        <img
          className="mx-auto block h-80 rounded-4xl object-cover object-top p-1 shadow-[1px_3px_6px_1px] shadow-blue-400 outline-3 outline-blue-400 transition-all duration-300 hover:scale-102 hover:shadow-[2px_4px_8px_2px] dark:shadow-indigo-300 dark:outline-indigo-300"
          src="/profile.jpg"
          alt="Picture of me"
        />
        <div className="flex flex-col gap-8 md:gap-0">
          {/* 2xl - 3xl font size */}
          <h2 className="text-[clamp(1.50rem,calc(1.364rem+0.682vw),1.88rem)] font-bold">
            I'm a software developer in the Copenhagen metropolitan area.
          </h2>
          <div className="flex grow items-center">
            <p className="text-xl">
              From simple CLI tools to distributed systems of microservices, I
              can help you build it, whether we're making something new or
              modernising legacy software.
            </p>
          </div>
        </div>
      </div>
      <p className={"mt-8 text-lg"}>
        As a full-stack developer, I work with all parts of an application;
        databases, APIs, frontend web UIs, and DevOps tools. See this{" "}
        <FancyLink href={"/skills/"}>overview of skills</FancyLink> for more
        details.
      </p>
      <p className="mt-8 text-lg md:text-center">
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
