// sort-imports-ignore
import "highlight.js/styles/github-dark-dimmed.min.css";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Kasper Overgaard Dahl - Software Developer",
  description:
    "Hi, I'm a Software developer located in the Copenhagen metropolitan area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-14 scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(!t)t=window.matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
        <title>Kasper Overgaard Dahl - Software Developer</title>
      </head>
      {/* TODO update Tailwind. heropattern is not compatible with v4, so get rid of it. */}
      <body className="grid min-h-svh grid-rows-[1fr_auto] bg-gradient-to-br bg-fixed [scrollbar-gutter:stable] dark:bg-black dark:from-slate-900 dark:to-slate-950/70 dark:text-white">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-[clamp(1.5rem,calc(0.591rem+4.545vw),4rem)] pb-4 pt-16 sm:w-4/5 sm:bg-white/25 dark:sm:bg-black/25">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
