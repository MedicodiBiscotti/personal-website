import { PropsWithChildren } from "react";

type Props = {
  background?: "light" | "dark" | "both";
};

function SkillIcon({ children, background }: PropsWithChildren<Props>) {
  const lightBackground = "bg-slate-400";
  const darkBackground = "dark:bg-slate-200";
  const darkReset = "dark:bg-transparent";

  let backgroundClass = "";
  switch (background) {
    case "light":
      backgroundClass = `${lightBackground} ${darkReset}`;
      break;
    case "dark":
      backgroundClass = darkBackground;
      break;
    case "both":
      backgroundClass = `${lightBackground} ${darkBackground}`;
      break;
  }

  return (
    <div
      className={`rounded-xl p-1 transition *:size-12 hover:scale-120 hover:drop-shadow-[0px_0px_4px] ${backgroundClass}`.trim()}
    >
      {children}
    </div>
  );
}

export default SkillIcon;
