import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function ThemeSwitch() {
  return (
    <div className="flex items-center rounded-full bg-neutral-200/75 dark:bg-neutral-800/75">
      <div className="my-1 flex justify-items-center divide-x *:border-current *:px-2">
        <button>
          <SunIcon className="size-5" />
        </button>
        <button>
          <MoonIcon className="size-5" />
        </button>
        <button>
          <ComputerDesktopIcon className="size-5" />
        </button>
      </div>
    </div>
  );
}

export default ThemeSwitch;
