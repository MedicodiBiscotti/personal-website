import {
  _React,
  BashIcon,
  Bootstrap,
  CSharp,
  Dotnet,
  Hibernate,
  Java,
  Javascript,
  Jupyter,
  MongodbIcon,
  Mysql,
  Neo4j,
  NextjsIcon,
  Numpy,
  PandasIcon,
  Playwright,
  Postgresql,
  Python,
  RedisIcon,
  SpringIcon,
  SvelteIcon,
  TailwindIcon,
  TypescriptIcon,
  Vitest,
} from "@dev.icons/react";
import { PhpAlt } from "@dev.icons/react/mono";

function SkillsPage() {
  // Uses both https://devicons.io/ and https://devicon.dev/ for icons.
  return (
    <>
      <div className="grid grid-flow-col-dense gap-4">
        <div className="flex w-fit flex-wrap place-content-center gap-6 rounded-3xl border-3 border-blue-400 p-4 dark:border-slate-400">
          <Javascript size={48} />
          <TypescriptIcon size={48} />
          <_React size={48} />
          <NextjsIcon size={48} />
          <SvelteIcon size={48} />
          <img
            className="size-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg"
            alt="Blazor"
          />
          <TailwindIcon size={48} />
          <Bootstrap size={48} />
          <Vitest size={48} />
          <Playwright size={48} />
        </div>
        <div className="flex w-fit flex-wrap place-content-center gap-6 rounded-3xl border-3 border-red-400 p-4 dark:border-red-400">
          <Java
            size={56}
            className="-m-1 rounded-xl bg-slate-200 p-1 dark:bg-slate-200"
          />
          <SpringIcon size={48} />
          <CSharp size={48} />
          <Dotnet size={48} />
          <Python size={48} />
          <Numpy size={48} />
          <PandasIcon size={48} />
          <Jupyter size={48} />
          <PhpAlt size={48} />
          <BashIcon size={48} />
        </div>
        <div className="flex w-fit flex-wrap place-content-center gap-6 rounded-3xl border-3 border-purple-500 p-4 dark:border-purple-500">
          <Postgresql size={48} />
          <img
            className="size-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
            alt="SQL Server"
          />
          <Mysql
            size={56}
            className="-m-1 rounded-xl bg-slate-200 p-1 dark:bg-slate-200"
          />
          <RedisIcon size={48} />
          <MongodbIcon size={48} />
          <Neo4j
            size={56}
            className="-m-1 rounded-xl bg-slate-200 p-1 dark:bg-slate-200"
          />
          <Hibernate size={48} />
        </div>
      </div>
    </>
  );
}

export default SkillsPage;
