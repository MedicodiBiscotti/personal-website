import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";

function Footer() {
  return (
    <footer className="bg-neutral-300 py-2 text-center dark:bg-neutral-900">
      <h2 className="text-2xl">Contact me!</h2>
      <div className="mt-2 flex justify-center gap-6">
        <a href="mailto:kasperodahl@gmail.com">
          <EnvelopeIcon className="inline size-6" />
          <span className="ms-1 underline">kasperodahl@gmail.com</span>
        </a>
        <a
          href="https://www.linkedin.com/in/kasper-overgaard-dahl-5a478a237/"
          target="_blank"
        >
          <img
            src="/InBug-White.png"
            alt="LinkedIn"
            className="hidden h-6 dark:inline"
          />
          <img
            src="/InBug-Black.png"
            alt="LinkedIn"
            className="inline h-6 dark:hidden"
          />
          <span className="ms-1 underline">Kasper Overgaard Dahl</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
