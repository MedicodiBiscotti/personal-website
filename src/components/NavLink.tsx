"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
  target: string;
  exact?: boolean;
  // if you do nested navs, then include a level to target a specific section of the path instead of startsWith.
};

function NavLink({ children, target, exact = true }: Props) {
  const pathname = usePathname();
  const activeClass = "bg-neutral-200/75 dark:bg-neutral-800/75";
  const hoverClass = "hover:bg-neutral-200/75 hover:dark:bg-neutral-800/75";
  const active = exact ? pathname === target : pathname.startsWith(target);

  return (
    <Link
      className={`inline-block h-full content-center px-3 ${hoverClass} ${active ? activeClass : ""}`}
      href={target}
    >
      {children}
    </Link>
  );
}

export default NavLink;
