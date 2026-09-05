"use client";

import {
  Children,
  cloneElement,
  FocusEvent,
  isValidElement,
  MouseEvent,
  PropsWithChildren,
} from "react";

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

  // We set ARIA label on the button, so we apply hidden to the children which are all just images.
  const hiddenChildren = Children.map(children, (child) =>
    isValidElement(child)
      ? // @ts-ignore
        cloneElement(child, { "aria-hidden": true })
      : child,
  );

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
        popoverTargetAction="show"
        className={`rounded-xl p-1 transition-[scale,filter] *:size-12 hover:drop-shadow-[0px_0px_4px] focus:drop-shadow-[0px_0px_4px] motion-safe:hover:scale-120 motion-safe:focus:scale-120 ${backgroundClass}`.trim()}
        onMouseEnter={showPopover}
        onFocus={showPopover}
      >
        {hiddenChildren}
      </button>
      <div
        id={`popover-${id}`}
        popover="auto"
        className="w-max rounded-3xl border-2 border-(--color) bg-slate-100 px-4 py-2 text-current [position-area:start_center] dark:border-(--dark) dark:bg-slate-900"
      >
        {description}
      </div>
    </>
  );
}
