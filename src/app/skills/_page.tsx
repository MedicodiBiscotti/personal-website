import SkillContainer from "@/components/SkillContainer";
import SkillIcon from "@/components/SkillIcon";
import {
  _React,
  ApacheCamel,
  BashIcon,
  Bitbucket,
  Bootstrap,
  CSharp,
  Dependabot,
  DockerIcon,
  Dotnet,
  FlyIcon,
  GitIcon,
  Grafana,
  Graphql,
  Grpc,
  Hibernate,
  Java,
  Javascript,
  JetbrainsIcon,
  Jupyter,
  Lua,
  MicrosoftAzure,
  MicrosoftWindowsIcon,
  MongodbIcon,
  Mysql,
  Neo4j,
  NextjsIcon,
  Numpy,
  ObsidianIcon,
  PandasIcon,
  Playwright,
  Postgresql,
  Python,
  RabbitmqIcon,
  RedisIcon,
  SpringIcon,
  SvelteIcon,
  Swagger,
  TailwindIcon,
  TerraformIcon,
  TypescriptIcon,
  VisualStudioCode,
  Vitest,
} from "@dev.icons/react";
import { GithubIcon, KafkaIcon, LinuxTux, PhpAlt } from "@dev.icons/react/mono";

function SkillsPage() {
  // Uses both https://devicons.io/ and https://devicon.dev/ for icons.
  // Use background or a monochrome icon (stroke = current) if the full color variant doesn't fit the site theme.
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
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
          dark={true}
          style={{
            "--color": "var(--color-red-500)",
            "--dark": "var(--color-red-400)",
          }}
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
            <Swagger />
          </SkillIcon>
          <SkillIcon>
            <Graphql />
          </SkillIcon>
          <SkillIcon background={"dark"}>
            <Grpc />
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
            <KafkaIcon />
          </SkillIcon>
          <SkillIcon>
            <RabbitmqIcon />
          </SkillIcon>
          <SkillIcon>
            <ApacheCamel />
          </SkillIcon>
        </SkillContainer>

        <SkillContainer
          title={"Databases"}
          dark={true}
          style={{
            "--color": "var(--color-purple-500)",
            "--dark": "var(--color-purple-400)",
          }}
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
          <SkillIcon>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Flyway_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
              alt="Flyway"
            />
          </SkillIcon>
        </SkillContainer>

        <SkillContainer
          title={"Tools"}
          dark={true}
          style={{
            "--color": "var(--color-green-500)",
            "--dark": "var(--color-green-400)",
          }}
        >
          <SkillIcon>
            <MicrosoftWindowsIcon />
          </SkillIcon>
          <SkillIcon>
            <LinuxTux />
          </SkillIcon>
          <SkillIcon>
            <GitIcon />
          </SkillIcon>
          <SkillIcon>
            <GithubIcon />
          </SkillIcon>
          <SkillIcon>
            <MicrosoftAzure />
          </SkillIcon>
          <SkillIcon>
            <Bitbucket />
          </SkillIcon>
          <SkillIcon>
            <DockerIcon />
          </SkillIcon>
          <SkillIcon>
            <TerraformIcon />
          </SkillIcon>
          <SkillIcon>
            <Grafana />
          </SkillIcon>
          <SkillIcon>
            <FlyIcon />
          </SkillIcon>
          <SkillIcon>
            <Dependabot />
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
          <SkillIcon>
            <Lua />
          </SkillIcon>
          <SkillIcon>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg"
              alt="Neovim"
            />
          </SkillIcon>
          <SkillIcon>
            <VisualStudioCode />
          </SkillIcon>
          <SkillIcon>
            <JetbrainsIcon />
          </SkillIcon>
          <SkillIcon>
            <ObsidianIcon />
          </SkillIcon>
        </SkillContainer>
      </div>
    </>
  );
}

export default SkillsPage;
