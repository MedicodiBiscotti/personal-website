"use client";

import ThemeSwitch from "@/components/ThemeSwitch";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Header() {
  const pathname = usePathname();
  const activeClass = "bg-neutral-200/75 dark:bg-neutral-800/75";

  return (
    <header
      id="top"
      className="fixed inset-x-0 bg-neutral-100 dark:bg-neutral-900"
    >
      <div className="mx-auto flex h-10 w-full max-w-4xl items-stretch justify-between px-6 sm:w-4/5">
        <nav>
          {/* So many nested flexes just to fill height and center text */}
          <ul className="flex h-full">
            <li>
              {/* Can be #top to work when scrolled down normally, but makes the URL uglier.
              This is because Next preserves scroll position when navigating to the same page.
              Doesn't even need /# because Next sees it as a different page. */}
              <Link
                className={`inline-block h-full content-center px-3 hover:bg-neutral-200/75 hover:dark:bg-neutral-800/75 ${pathname === "/" ? activeClass : ""}`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`inline-block h-full content-center px-3 hover:bg-neutral-200/75 hover:dark:bg-neutral-800/75 ${pathname.startsWith("/blog/") ? activeClass : ""}`}
                href="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            className="inline-block h-full content-center px-3"
            href="#contact"
          >
            Contact
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}

export default Header;
