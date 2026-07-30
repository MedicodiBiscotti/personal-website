import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";

function Footer() {
  return (
    <footer className="bg-neutral-100 py-2 text-center dark:bg-neutral-900">
      <div className="mx-auto w-full max-w-4xl px-4 sm:w-4/5">
        <h2 id="contact" className="text-2xl">
          Contact me!
        </h2>
        <div className="mt-2 grid grid-cols-[repeat(auto-fit,220px)] justify-center gap-x-6 gap-y-2 text-start">
          <a
            href="mailto:kasperodahl@gmail.com"
            className="flex w-max items-center gap-1"
          >
            <EnvelopeIcon className="inline size-6" />
            <span className="underline">kasperodahl@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kasper-overgaard-dahl-5a478a237/"
            target="_blank"
            className="flex w-max items-center gap-1"
          >
            <img
              src="/InBug-White.png"
              alt="LinkedIn"
              className="hidden h-6 dark:inline"
            />
            <img
              src="/LI-In-Bug.png"
              alt="LinkedIn"
              className="inline h-6 dark:hidden"
            />
            <span className="underline">Kasper Overgaard Dahl</span>
          </a>
        </div>
        <small className="mx-auto">&copy; 2026 Kasper Overgaard Dahl</small>
      </div>
    </footer>
  );
}

export default Footer;
