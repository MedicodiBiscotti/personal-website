import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header
      id="top"
      className="fixed inset-x-0 bg-neutral-100 dark:bg-neutral-900"
    >
      <div className="mx-auto flex h-10 w-full max-w-4xl items-center justify-between px-4 sm:w-4/5">
        <nav>
          <ul className="flex gap-4">
            <li>
              {/* Can be #top to work when scrolled down normally, but makes the URL uglier.
              This is because Next preserves scroll position when navigating to the same page.
              Doesn't even need /# because Next sees it as a different page. */}
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4">
          <Link href="#contact">Contact</Link>
          <button>Theme</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
