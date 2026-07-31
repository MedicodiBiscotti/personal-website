import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function ThemeSwitch() {
  return (
    // For space between border, could simplify with no gap and px-2. But it would also have padding at start and end.
    <div className="flex justify-items-center gap-2 divide-x *:border-current [&>:not(:first-child)]:ps-2">
      <button>
        <SunIcon className="size-6" />
      </button>
      <button>
        <MoonIcon className="size-6" />
      </button>
      <button>
        <ComputerDesktopIcon className="size-6" />
      </button>
    </div>
  );
}

export default ThemeSwitch;
