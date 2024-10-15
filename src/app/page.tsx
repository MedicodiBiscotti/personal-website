import Code from "@/components/code";
import MdCode from "@/components/md-code";

export default function Home() {
  return (
    <div className="mx-auto w-1/3 bg-neutral-900/75 text-white">
      <div className="p-2">
        <h1 className="mb-2 text-6xl font-thin">Hello world</h1>
        <p className="my-2">
          Welcome to my <span className="font-italic">super awesome</span>{" "}
          website!
        </p>

        <Code
          language="python"
          code={`
            def main():
              print("You rock!")
          `}
        />

        <MdCode />
      </div>
    </div>
  );
}
