"use client";

import {
  Children,
  cloneElement,
  FocusEvent,
  isValidElement,
  MouseEvent,
  PropsWithChildren,
  useRef,
} from "react";

type Props = {
  id: string;
  name: string;
  description?: string;
  background?: "light" | "dark" | "both";
  className?: string;
};

/* className to override troublesome styles like unwanted ligatures.
   Could potentially refactor into separate components like icon and popover,
   and then use children in the popover to allow for the expressiveness of HTML
   to format the text content instead of a string property. */

export default function SkillIcon({
  children,
  id,
  name,
  description,
  background,
  className,
}: PropsWithChildren<Props>) {
  const btn = useRef(null);

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
  function showPopover() {
    // Could use either getElementById, React useRef, or popoverTargetElement.
    // Event can't be used if you want the popover to stay on mouse over, because event is relative.
    (
      (btn.current as unknown as HTMLButtonElement)
        .popoverTargetElement as HTMLElement
    ).showPopover({
      source: btn.current as unknown as HTMLButtonElement,
    });
  }

  // Manual hide event, so popovers are easier to dismiss now that descriptions take up more space and obscure the icons above them. Also just feels more natural.
  function hidePopover() {
    (
      (btn.current as unknown as HTMLButtonElement)
        .popoverTargetElement as HTMLElement
    ).hidePopover();
  }

  return (
    <>
      <button
        ref={btn}
        aria-label={name}
        id={id}
        popoverTarget={`popover-${id}`}
        popoverTargetAction="show"
        className={`rounded-xl p-1 transition-[scale,filter] *:size-12 hover:drop-shadow-[0px_0px_4px] focus:drop-shadow-[0px_0px_4px] motion-safe:hover:scale-120 motion-safe:focus:scale-120 ${backgroundClass}`.trim()}
        onMouseEnter={showPopover}
        onMouseLeave={hidePopover}
        onFocus={showPopover}
        onBlur={hidePopover}
      >
        {hiddenChildren}
      </button>
      <div
        id={`popover-${id}`}
        popover="auto"
        className={`w-max max-w-lg rounded-3xl border-2 border-(--color) bg-slate-100 px-4 py-2 text-current [position-area:start_center] dark:border-(--dark) dark:bg-slate-900 ${className}`}
        onMouseEnter={showPopover}
        onMouseLeave={hidePopover}
      >
        <p className="font-bold">{name}</p>
        <p>{description}</p>
      </div>
    </>
  );
}
