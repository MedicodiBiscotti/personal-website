// sort-imports-ignore
import "highlight.js/styles/github-dark-dimmed.min.css";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  // no title here, so that the 404 error boundary isn't overridden.
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
      <body className="grid min-h-svh scrollbar-gutter-stable grid-rows-[1fr_auto] bg-linear-to-br from-blue-100 to-slate-400 bg-fixed dark:bg-black dark:from-slate-800 dark:to-slate-900/70 dark:text-white">
        <Header />
        <main className="mx-auto w-full max-w-6xl bg-white/25 px-[clamp(1.5rem,calc(-0.36rem+5.814vw),4rem)] pt-16 pb-4 sm:w-4/5 dark:bg-black/25">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
