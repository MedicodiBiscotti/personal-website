"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MouseEvent, PropsWithChildren, useRef } from "react";

/**
 * Wrapper component for navigation for both desktop and mobile views. Reuses children. Unfortunately, this disconnects the ul and li as ul needs to be flex.
 * NavLinks also have responsive styling in their file.
 */
export default function Nav({ children }: PropsWithChildren) {
  const hamburger = useRef(null);

  function handleLinkClick(e: MouseEvent) {
    if (e.target instanceof HTMLAnchorElement) {
      if (hamburger.current) {
        (hamburger.current as HTMLDialogElement).close();
      }
    }
  }

  return (
    <nav>
      <div className="hidden sm:block">
        <ul className="flex">{children}</ul>
      </div>
      <div className="block sm:hidden">
        <button
          // @ts-ignore
          command="show-modal"
          commandfor="mobile-nav"
          aria-controls="mobile-nav"
          aria-expanded={false}
          aria-label="Open navigation"
          className="py-1"
        >
          <Bars3Icon className="size-8" />
        </button>
        {/* If the sidebar is display none when hidden we can't animate it in from the side (at least not in Firefox, but we can in Chrome). Same goes for the backdrop. */}
        <dialog
          ref={hamburger}
          id="mobile-nav"
          aria-label="Navigation"
          closedby="any"
          className="min-w-36 -translate-x-full bg-neutral-100 text-current shadow-sm transition-[translate,display,overlay] transition-discrete duration-700 backdrop:bg-transparent backdrop:transition-[background-color,display,overlay] backdrop:transition-discrete backdrop:duration-700 open:translate-x-0 open:backdrop:bg-black/25 motion-reduce:duration-0 motion-reduce:backdrop:duration-0 dark:bg-zinc-900 starting:open:-translate-x-full starting:open:backdrop:bg-transparent"
          onClick={handleLinkClick}
        >
          <button
            // @ts-ignore
            command="close"
            commandfor="mobile-nav"
            aria-controls="mobile-nav"
            aria-expanded={true}
            aria-label="Close navigation"
            className="w-full px-6 py-1"
          >
            <XMarkIcon className="size-8" />
          </button>
          <ul className="grid">{children}</ul>
        </dialog>
      </div>
    </nav>
  );
}
