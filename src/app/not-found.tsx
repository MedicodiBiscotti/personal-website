import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page not found",
};

function NotFound() {
  return (
    <div className={"flex h-full flex-col items-center justify-center gap-4"}>
      <div
        className={
          "grid items-center text-center *:px-8 md:grid-cols-2 md:divide-x md:text-start"
        }
      >
        <h1 className={"text-8xl font-extrabold"}>404</h1>
        <p className={"text-2xl"}>Page not found</p>
      </div>
      <p className={"text-xl italic"}>You seem to have gotten lost.</p>
    </div>
  );
}

export default NotFound;
