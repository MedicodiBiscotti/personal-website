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
import Link from "next/link";

function SkillsPage() {
  // Uses both https://devicons.io/ and https://devicon.dev/ for icons.
  // Use background or a monochrome icon (stroke = current) if the full color variant doesn't fit the site theme.
  return (
    <>
      <h1 className="text-center text-[clamp(2.25rem,calc(1.705rem+2.727vw),3.75rem)] leading-none font-bold">
        Skills
      </h1>
      <div className={"mt-6 [&_*+*]:mt-[1.2em]"}>
        <p>
          Hello, I'm a full-stack software developer, meaning I work with all
          parts of an application from the database and the backend to the UI in
          the frontend and everything in between including APIs, DevOps and CLI
          tools.
        </p>
        <p>
          As a backend developer, I have extensive experience working with Java
          and the Spring Boot framework as well as C# and .NET. I also work with
          the most popular SQL and No-SQL databases.
        </p>
        <p>
          As far as frontend goes, I mostly have experience with React. Either
          vanilla React or using a meta framework like NextJS, but I have also
          used Blazor for .NET applications. I also have some experience using
          Svelte, which I'm currently developing a game in.
        </p>
        <p>
          I have experience working with Docker to containerize applications so
          they can run anywhere. In fact, this website runs in a{" "}
          <Link className={"underline"} href={"/blog/technical-details/"}>
            ridiculously small Docker container
          </Link>
          .
        </p>
        <p>
          I love Git and have used all the major Git hosting providers (except
          GitLab, I'm coming for you one day) including their CI/CD pipelines to
          automate testing and deployment workflows.
        </p>
        <p>
          Additionally, I have some experience working with data science tools
          in Python, such as NumPy and Pandas, as well as creating NLP models
          with machine learning.
        </p>
        <p>
          I enjoy working with the terminal and have written CLI tools in
          Python, Bash and even Java. When I feel the inclination to make
          another CLI tool, I might try making it in Go because I am interested
          in learning that language.
        </p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <SkillContainer
          title={"Frontend"}
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
