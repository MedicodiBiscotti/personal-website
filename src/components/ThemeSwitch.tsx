"use client";

import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import React, { useLayoutEffect, useState } from "react";

type Theme = "light" | "dark" | null;

function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>();

  useLayoutEffect(() => {
    setTheme(localStorage.getItem("theme") as Theme);
  }, []);

  function updateTheme(newTheme: Theme) {
    setTheme(newTheme);
    if (newTheme) {
      localStorage.setItem("theme", newTheme);
    } else {
      localStorage.removeItem("theme");
      newTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    document.documentElement.dataset.theme = newTheme;
  }

  return (
    <div className="flex items-center rounded-full bg-neutral-200/75 dark:bg-slate-800/75">
      <div className="my-1 flex justify-items-center divide-x *:px-2">
        <button onClick={() => updateTheme("light")}>
          {/* bigger size, padding, and negative margin to make the background bigger. */}
          <SunIcon
            className={`-m-0.5 size-6 rounded-full p-0.5 transition duration-200 ${theme === "light" ? "bg-zinc-300 dark:bg-slate-600" : ""}`}
          />
        </button>
        <button onClick={() => updateTheme("dark")}>
          <MoonIcon
            className={`-m-0.5 size-6 rounded-full p-0.5 transition duration-200 ${theme === "dark" ? "bg-zinc-300 dark:bg-slate-600" : ""}`}
          />
        </button>
        <button onClick={() => updateTheme(null)}>
          <ComputerDesktopIcon
            className={`-m-0.5 size-6 rounded-full p-0.5 transition duration-200 ${theme === null ? "bg-zinc-300 dark:bg-slate-600" : ""}`}
          />
        </button>
      </div>
    </div>
  );
}

export default ThemeSwitch;
