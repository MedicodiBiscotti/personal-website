"use client";

import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import React, { useLayoutEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme | undefined>();

  useLayoutEffect(() => {
    setTheme(document.documentElement.dataset.theme as Theme);
  }, []);

  useLayoutEffect(() => {
    if (theme === "system") {
      document.documentElement.dataset.theme = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches
        ? "dark"
        : "light";
    } else {
      document.documentElement.dataset.theme = theme;
    }
  }, [theme]);

  return (
    <div className="flex items-center rounded-full bg-neutral-200/75 dark:bg-neutral-800/75">
      <div className="my-1 flex justify-items-center divide-x *:border-current *:px-2">
        <button onClick={() => setTheme("light")}>
          <SunIcon
            className={`size-5 ${theme === "light" ? "rounded-full bg-zinc-300 dark:bg-zinc-600" : ""}`}
          />
        </button>
        <button onClick={() => setTheme("dark")}>
          <MoonIcon
            className={`size-5 ${theme === "dark" ? "rounded-full bg-zinc-300 dark:bg-zinc-600" : ""}`}
          />
        </button>
        <button onClick={() => setTheme("system")}>
          <ComputerDesktopIcon
            className={`size-5 ${theme === "system" ? "rounded-full bg-zinc-300 dark:bg-zinc-600" : ""}`}
          />
        </button>
      </div>
    </div>
  );
}

export default ThemeSwitch;
