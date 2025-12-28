declare module "tailwindcss-hero-patterns";
declare module "tailwindcss-hero-patterns/src/patterns";
declare module "vfile" {
  interface DataMap {
    matter: {
      // `file.data.matter.string` is typed as `string | undefined`.
      title?: string | undefined;
    };
  }
}
