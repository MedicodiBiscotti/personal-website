import Code from "@/components/code";

export default function Home() {
  return (
    <>
      <p className="mt-6">Hello, I'm</p>
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
            getInTouch();
          }
        `}
      />
    </>
  );
}
