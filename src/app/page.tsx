import Code from "@/components/code";

export default function Home() {
  return (
    <>
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
    </>
  );
}
