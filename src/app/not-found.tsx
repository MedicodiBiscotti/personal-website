import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page not found",
};

export default function NotFound() {
  return (
    <div className={"flex h-full flex-col items-center justify-center gap-4"}>
      <div className={"grid items-center *:px-8 md:grid-cols-2 md:divide-x"}>
        <h1 className={"text-center text-8xl font-extrabold md:text-end"}>
          404
        </h1>
        <p className={"text-center text-2xl md:text-start"}>Page not found</p>
      </div>
      <p className={"text-xl italic"}>You seem to have gotten lost.</p>
    </div>
  );
}
