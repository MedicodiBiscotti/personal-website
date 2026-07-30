import React from "react";

function Header() {
  return (
    <header className="fixed inset-x-0 bg-neutral-100 dark:bg-neutral-900">
      <div className="mx-auto flex h-10 w-full max-w-4xl items-center justify-between px-4 sm:w-4/5">
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4">
          <a href="#contact">Contact</a>
          <button>Theme</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
