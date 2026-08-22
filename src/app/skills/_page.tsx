import SkillIcon from "@/components/SkillIcon";
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
  // Use background or a monochrome icon (stroke = current) if full color doesn't fit the site theme.
  return (
    <>
      <div className="grid grid-flow-col-dense gap-4">
        <div className="flex flex-col gap-2 rounded-3xl border-3 border-blue-400 bg-slate-200 px-4 pt-2 pb-4 shadow-sm shadow-blue-400 dark:border-indigo-300 dark:bg-slate-800/75 dark:shadow-indigo-300">
          <p className="text-sm text-blue-400 dark:text-indigo-300">Frontend</p>
          <div className="flex w-fit flex-wrap place-content-center gap-4 *:drop-shadow-blue-400 *:dark:drop-shadow-indigo-300">
            <SkillIcon>
              <Javascript />
            </SkillIcon>
            <SkillIcon>
              <TypescriptIcon />
            </SkillIcon>
            <SkillIcon>
              <_React />
            </SkillIcon>
            <SkillIcon>
              <NextjsIcon />
            </SkillIcon>
            <SkillIcon>
              <SvelteIcon />
            </SkillIcon>
            <SkillIcon>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg"
                alt="Blazor"
              />
            </SkillIcon>
            <SkillIcon>
              <TailwindIcon />
            </SkillIcon>
            <SkillIcon>
              <Bootstrap />
            </SkillIcon>
            <SkillIcon>
              <Vitest />
            </SkillIcon>
            <SkillIcon>
              <Playwright />
            </SkillIcon>
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-3xl border-3 border-red-400 bg-slate-200 px-4 pt-2 pb-4 shadow-sm shadow-red-400 dark:bg-slate-800/75">
          <p className="text-sm text-red-400">Backend</p>
          <div className="flex w-fit flex-wrap place-content-center gap-4 *:drop-shadow-red-400 dark:border-red-400">
            <SkillIcon background="dark">
              <Java />
            </SkillIcon>
            <SkillIcon>
              <SpringIcon />
            </SkillIcon>
            <SkillIcon>
              <CSharp />
            </SkillIcon>
            <SkillIcon>
              <Dotnet />
            </SkillIcon>
            <SkillIcon>
              <Python />
            </SkillIcon>
            <SkillIcon>
              <Numpy />
            </SkillIcon>
            <SkillIcon background="dark">
              <PandasIcon />
            </SkillIcon>
            <SkillIcon background="dark">
              <Jupyter />
            </SkillIcon>
            <SkillIcon>
              <PhpAlt />
            </SkillIcon>
            <SkillIcon>
              <BashIcon />
            </SkillIcon>
            <SkillIcon>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg"
                alt="PowerShell"
              />
            </SkillIcon>
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-3xl border-3 border-purple-500 bg-slate-200 px-4 pt-2 pb-4 shadow-sm shadow-purple-500 dark:bg-slate-800/75">
          <p className="text-sm text-purple-500">Databases</p>
          <div className="flex h-full w-fit flex-wrap place-content-center gap-4 *:drop-shadow-purple-500 dark:border-purple-500">
            <SkillIcon>
              <Postgresql />
            </SkillIcon>
            <SkillIcon background="light">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
                alt="SQL Server"
              />
            </SkillIcon>
            <SkillIcon background="dark">
              <Mysql />
            </SkillIcon>
            <SkillIcon>
              <RedisIcon />
            </SkillIcon>
            <SkillIcon>
              <MongodbIcon />
            </SkillIcon>
            <SkillIcon background="dark">
              <Neo4j />
            </SkillIcon>
            <SkillIcon>
              <Hibernate />
            </SkillIcon>
            <SkillIcon>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/entityframeworkcore/entityframeworkcore-original.svg"
                alt="Entity Framework"
              />
            </SkillIcon>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsPage;
