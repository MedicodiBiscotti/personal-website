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

export default function SkillsPage() {
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
          <SkillIcon id="javascript" description="JavaScript">
            <Javascript />
          </SkillIcon>
          <SkillIcon id="typescript" description="TypeScript">
            <TypescriptIcon />
          </SkillIcon>
          <SkillIcon id="react" description="React">
            <_React />
          </SkillIcon>
          <SkillIcon id="nextjs" description="Next.js">
            <NextjsIcon />
          </SkillIcon>
          <SkillIcon id="svelte" description="Svelte">
            <SvelteIcon />
          </SkillIcon>
          <SkillIcon id="blazor" description="Blazor">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg"
              alt="Blazor"
            />
          </SkillIcon>
          <SkillIcon id="tailwind" description="Tailwind">
            <TailwindIcon />
          </SkillIcon>
          <SkillIcon id="bootstrap" description="Bootstrap">
            <Bootstrap />
          </SkillIcon>
          <SkillIcon id="vitest" description="Vitest">
            <Vitest />
          </SkillIcon>
          <SkillIcon id="playwright" description="Playwright">
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
          <SkillIcon id="java" description="Java" background="dark">
            <Java />
          </SkillIcon>
          <SkillIcon id="spring" description="Spring">
            <SpringIcon />
          </SkillIcon>
          <SkillIcon id="csharp" description="C#">
            <CSharp />
          </SkillIcon>
          <SkillIcon id="dotnet" description=".NET">
            <Dotnet />
          </SkillIcon>
          <SkillIcon id="swagger" description="Swagger">
            <Swagger />
          </SkillIcon>
          <SkillIcon id="graphql" description="GraphQL">
            <Graphql />
          </SkillIcon>
          <SkillIcon id="grpc" description="gRPC" background={"dark"}>
            <Grpc />
          </SkillIcon>
          <SkillIcon id="python" description="Python">
            <Python />
          </SkillIcon>
          <SkillIcon id="numpy" description="NumPy">
            <Numpy />
          </SkillIcon>
          <SkillIcon id="pandas" description="Pandas" background="dark">
            <PandasIcon />
          </SkillIcon>
          <SkillIcon id="jupyter" description="Jupyter" background="dark">
            <Jupyter />
          </SkillIcon>
          <SkillIcon id="php" description="PHP">
            <PhpAlt />
          </SkillIcon>
          <SkillIcon id="kafka" description="Apache Kafka">
            <KafkaIcon />
          </SkillIcon>
          <SkillIcon id="rabbitmq" description="RabbitMQ">
            <RabbitmqIcon />
          </SkillIcon>
          <SkillIcon id="camel" description="Apache Camel">
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
          <SkillIcon id="postgresql" description="PostgreSQL">
            <Postgresql />
          </SkillIcon>
          <SkillIcon id="sqlserver" description="SQL Server" background="light">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
              alt="SQL Server"
            />
          </SkillIcon>
          <SkillIcon id="mysql" description="MySQL" background="dark">
            <Mysql />
          </SkillIcon>
          <SkillIcon id="redis" description="Redis">
            <RedisIcon />
          </SkillIcon>
          <SkillIcon id="mongodb" description="MongoDB">
            <MongodbIcon />
          </SkillIcon>
          <SkillIcon id="neo4j" description="Neo4j" background="dark">
            <Neo4j />
          </SkillIcon>
          <SkillIcon id="hibernate" description="Hibernate">
            <Hibernate />
          </SkillIcon>
          <SkillIcon id="entityframework" description="Entity Framework">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/entityframeworkcore/entityframeworkcore-original.svg"
              alt="Entity Framework"
            />
          </SkillIcon>
          <SkillIcon id="flyway" description="Flyway">
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
          <SkillIcon id="windows" description="Windows">
            <MicrosoftWindowsIcon />
          </SkillIcon>
          <SkillIcon id="linux" description="Linux">
            <LinuxTux />
          </SkillIcon>
          <SkillIcon id="git" description="Git">
            <GitIcon />
          </SkillIcon>
          <SkillIcon id="github" description="GitHub">
            <GithubIcon />
          </SkillIcon>
          <SkillIcon id="azure" description="Azure">
            <MicrosoftAzure />
          </SkillIcon>
          <SkillIcon id="bitbucket" description="Bitbucket">
            <Bitbucket />
          </SkillIcon>
          <SkillIcon id="docker" description="Docker">
            <DockerIcon />
          </SkillIcon>
          <SkillIcon id="terraform" description="Terraform">
            <TerraformIcon />
          </SkillIcon>
          <SkillIcon id="grafana" description="Grafana">
            <Grafana />
          </SkillIcon>
          <SkillIcon id="flyio" description="Fly.io">
            <FlyIcon />
          </SkillIcon>
          <SkillIcon id="dependabot" description="Dependabot">
            <Dependabot />
          </SkillIcon>
          <SkillIcon id="bash" description="Bash">
            <BashIcon />
          </SkillIcon>
          <SkillIcon id="powershell" description="PowerShell">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg"
              alt="PowerShell"
            />
          </SkillIcon>
          <SkillIcon id="lua" description="Lua">
            <Lua />
          </SkillIcon>
          <SkillIcon id="neovim" description="Neovim">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg"
              alt="Neovim"
            />
          </SkillIcon>
          <SkillIcon id="vscode" description="Visual Studio Code">
            <VisualStudioCode />
          </SkillIcon>
          <SkillIcon id="jetbrains" description="Jetbrains">
            <JetbrainsIcon />
          </SkillIcon>
          <SkillIcon id="obsidian" description="Obsidian">
            <ObsidianIcon />
          </SkillIcon>
        </SkillContainer>
      </div>
    </>
  );
}
