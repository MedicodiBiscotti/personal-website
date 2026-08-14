import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";

function Footer() {
  return (
    <footer className="bg-neutral-100 py-2 text-center dark:bg-gray-950">
      <div className="mx-auto w-full max-w-4xl px-4 sm:w-4/5">
        <div
          id="contact"
          className="mt-2 grid grid-cols-[repeat(auto-fit,215px)] justify-center gap-x-6 gap-y-2 text-start"
        >
          <a
            href="mailto:kasperodahl@gmail.com"
            className="flex items-center gap-1"
          >
            <EnvelopeIcon className="inline size-6" />
            <span className="underline">kasperodahl@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kasper-overgaard-dahl-5a478a237/"
            target="_blank"
            className="flex items-center gap-1"
          >
            <img
              src="/LI-In-Bug.png"
              alt="LinkedIn"
              className="inline h-6 dark:hidden"
            />
            <img
              src="/InBug-White.png"
              alt="LinkedIn"
              className="hidden h-6 dark:inline"
            />
            <span className="underline">Kasper Overgaard Dahl</span>
          </a>
          <a
            href="https://github.com/MedicodiBiscotti"
            target="_blank"
            className="flex items-center gap-1"
          >
            <img
              src="/GitHub_Invertocat_Black.svg"
              alt="GitHub"
              className="inline h-6 dark:hidden"
            />
            <img
              src="/GitHub_Invertocat_White.svg"
              alt="GitHub"
              className="hidden h-6 dark:inline"
            />
            <span className="underline">MedicodiBiscotti</span>
          </a>
        </div>
        <small className="mx-auto">&copy; 2026 Kasper Overgaard Dahl</small>
      </div>
    </footer>
  );
}

export default Footer;
