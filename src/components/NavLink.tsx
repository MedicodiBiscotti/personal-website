"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type Props = {
  target: string;
  exact?: boolean;
  // if you do nested navs, then include a level to target a specific section of the path instead of startsWith.
};

function NavLink({ children, target, exact = true }: PropsWithChildren<Props>) {
  const pathname = usePathname();
  const activeClass = "bg-slate-200 dark:bg-slate-800";
  const hoverClass = "hover:bg-slate-200 dark:hover:bg-slate-800";
  const active = exact ? pathname === target : pathname.startsWith(target);

  return (
    <Link
      className={`inline-block h-full content-center px-3 transition duration-200 ${hoverClass} ${active ? activeClass : ""}`}
      href={target}
    >
      {children}
    </Link>
  );
}

export default NavLink;
