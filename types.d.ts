declare module "tailwindcss-hero-patterns";
declare module "tailwindcss-hero-patterns/src/patterns";
declare module "vfile" {
  interface DataMap {
    matter?: {
      title: string;
      slug: string;
      description: string;
    };
  }
}

export {};
