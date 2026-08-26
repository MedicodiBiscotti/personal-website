import Link from "next/link";
import { ComponentProps } from "react";

function FancyLink({ className, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={`underline decoration-2 transition-[text-decoration-color] duration-400 not-hover:delay-[9999s] hover:decoration-purple-500 ${className ?? ""}`}
      {...props}
    />
  );
}

export default FancyLink;
