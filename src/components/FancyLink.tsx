import Link from "next/link";
import { ComponentProps } from "react";

function FancyLink({ className, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={`animate-rainbow underline decoration-2 underline-offset-3 [animation-play-state:paused] motion-safe:hover:[animation-play-state:running] ${className ?? ""}`}
      {...props}
    />
  );
}

export default FancyLink;
