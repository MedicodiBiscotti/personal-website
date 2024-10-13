export default function Home() {
  return (
    <div className="mx-auto w-1/3 bg-neutral-900/75 text-white">
      <div className="p-2">
        <h1 className="mb-2 text-6xl font-thin">Hello world</h1>
        <p>
          Welcome to my <span className="font-italic">super awesome</span>{" "}
          website!
        </p>
        <div className="rounded-md border border-slate-600 bg-slate-800">
          <pre>
            <code>print(&quot;You rock!&quot;)</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
