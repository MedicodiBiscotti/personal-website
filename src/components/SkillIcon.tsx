import React from "react";

type Props = {
  children: React.ReactNode;
  background?: "light" | "dark" | "both";
};

function SkillIcon({ children, background }: Props) {
  const lightBackground = "bg-slate-400/50";
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
    <div className={`rounded-xl p-1 *:size-12 ${backgroundClass}`.trim()}>
      {children}
    </div>
  );
}

export default SkillIcon;
