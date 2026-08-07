import Code from "@/components/Code";

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
        <code className="font-mono">
          <span className="text-[#6f42c1] dark:text-[#dcbdfb]">hello</span>();
          i.
          <span className="text-[#005cc5] dark:text-[#6cb6ff]">am</span> ===
        </code>
      </pre>
      {/* 4xl - 6xl font size */}
      <h1 className="text-[clamp(2.25rem,calc(1.705rem+2.727vw),3.75rem)] font-extrabold leading-none">
        Kasper Dahl
      </h1>
      <div className="mt-6 grid gap-8 md:grid-cols-[33%_1fr]">
        <img
          className="block h-[300px] w-full bg-neutral-600"
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
      <p className="mt-8 text-xl md:text-center">
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
