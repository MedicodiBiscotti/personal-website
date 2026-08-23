import { CSSProperties, PropsWithChildren } from "react";

type Props = {
  title: string;
  style: CSSProperties & { "--color": string; "--dark"?: string };
};

function SkillContainer({ children, title, style }: PropsWithChildren<Props>) {
  const dark = Object.hasOwn(style, "--dark");
  return (
    <div
      className={`flex flex-col gap-2 rounded-3xl border-3 border-(--color) bg-slate-200 px-4 pt-2 pb-4 shadow-sm shadow-(color:--color) dark:bg-slate-800/75 ${dark ? "dark:border-(--dark) dark:shadow-(color:--dark)" : ""}`}
      style={style}
    >
      <p
        className={`text-sm text-(--color) ${dark ? "dark:text-(--dark)" : ""}`}
      >
        {title}
      </p>
      <div
        className={`flex w-fit grow flex-wrap place-content-center gap-4 *:drop-shadow-(color:--color) ${dark ? "*:dark:drop-shadow-(color:--dark)" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}

export default SkillContainer;
