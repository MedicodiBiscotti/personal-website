import SkillContainer from "@/components/SkillContainer";
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
  // Use background or a monochrome icon (stroke = current) if the full color variant doesn't fit the site theme.
  return (
    <>
      <div className="grid grid-flow-col-dense gap-4">
        <SkillContainer
          title={"Frontend"}
          dark={true}
          style={{
            "--color": "var(--color-blue-400)",
            "--dark": "var(--color-indigo-300)",
          }}
        >
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
        </SkillContainer>

        <SkillContainer
          title={"Backend"}
          style={{ "--color": "var(--color-red-400)" }}
        >
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
        </SkillContainer>

        <SkillContainer
          title={"Databases"}
          style={{ "--color": "var(--color-purple-500" }}
        >
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
        </SkillContainer>
      </div>
    </>
  );
}

export default SkillsPage;
