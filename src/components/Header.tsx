import NavLink from "@/components/NavLink";
import ThemeSwitch from "@/components/ThemeSwitch";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header
      id="top"
      className="fixed inset-x-0 bg-neutral-100 dark:bg-neutral-900"
    >
      <div className="mx-auto flex h-10 w-full max-w-6xl items-stretch justify-between px-6 sm:w-4/5">
        <nav>
          <ul className="flex h-full">
            <li>
              {/* Can be #top to work when scrolled down normally, but makes the URL uglier.
              This is because Next preserves scroll position when navigating to the same page.
              Doesn't even need /# because Next sees it as a different page. */}
              <NavLink target="/">Home</NavLink>
            </li>
            <li>
              <NavLink target="/blog" exact={false}>
                Blog
              </NavLink>
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
