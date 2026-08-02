"use client";

import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import React, { useLayoutEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>();

  useLayoutEffect(() => {
    setTheme((localStorage.getItem("theme") ?? "system") as Theme);
  }, []);

  function updateTheme(newTheme: Theme) {
    localStorage.setItem("theme", newTheme);
    if (newTheme === "system") {
      document.documentElement.dataset.theme = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches
        ? "dark"
        : "light";
    } else {
      document.documentElement.dataset.theme = newTheme;
    }
    setTheme(newTheme);
  }

  return (
    <div className="flex items-center rounded-full bg-neutral-200/75 dark:bg-neutral-800/75">
      <div className="my-1 flex justify-items-center divide-x *:border-current *:px-2">
        <button onClick={() => updateTheme("light")}>
          {/* bigger size, padding, and negative margin to make the background bigger. */}
          <SunIcon
            className={`-m-0.5 size-6 rounded-full p-0.5 ${theme === "light" ? "bg-zinc-300 dark:bg-zinc-600" : ""}`}
          />
        </button>
        <button onClick={() => updateTheme("dark")}>
          <MoonIcon
            className={`-m-0.5 size-6 rounded-full p-0.5 ${theme === "dark" ? "bg-zinc-300 dark:bg-zinc-600" : ""}`}
          />
        </button>
        <button onClick={() => updateTheme("system")}>
          <ComputerDesktopIcon
            className={`-m-0.5 size-6 rounded-full p-0.5 ${theme === "system" ? "bg-zinc-300 dark:bg-zinc-600" : ""}`}
          />
        </button>
      </div>
    </div>
  );
}

export default ThemeSwitch;
