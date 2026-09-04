"use client";

import { FocusEvent, MouseEvent, PropsWithChildren } from "react";

type Props = {
  id: string;
  description: string;
  background?: "light" | "dark" | "both";
};

export default function SkillIcon({
  children,
  id,
  description,
  background,
}: PropsWithChildren<Props>) {
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

  // interestfor is not supported in Firefox yet, so we use JS mouse events to open on hover.
  // We can also target a touch and mouse differently using media queries.
  function showPopover(
    event: MouseEvent<HTMLButtonElement> | FocusEvent<HTMLButtonElement>,
  ) {
    (event.currentTarget.popoverTargetElement as HTMLElement).showPopover({
      source: event.currentTarget,
    });
  }

  return (
    <>
      <button
        aria-label={description}
        id={id}
        popoverTarget={`popover-${id}`}
        popoverTargetAction={"show"}
        className={`rounded-xl p-1 transition-[scale,filter] *:size-12 hover:drop-shadow-[0px_0px_4px] focus:drop-shadow-[0px_0px_4px] motion-safe:hover:scale-120 motion-safe:focus:scale-120 ${backgroundClass}`.trim()}
        onMouseEnter={showPopover}
        onFocus={showPopover}
      >
        {children}
      </button>
      <div
        id={`popover-${id}`}
        popover={"auto"}
        className={"w-max [position-area:start_center]"}
      >
        {description}
      </div>
    </>
  );
}
