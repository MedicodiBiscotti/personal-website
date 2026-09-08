import Nav from "@/components/Nav";
import NavLink from "@/components/NavLink";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Header() {
  return (
    <header
      id="top"
      className="fixed inset-x-0 bg-neutral-100 shadow-sm dark:bg-zinc-900"
    >
      {/* The height of the header is now coming from its children, the nav links and the hamburger icon. */}
      <div className="mx-auto flex max-w-6xl justify-between px-6 sm:w-9/10">
        <Nav>
          <li>
            {/* Can be #top to work when scrolled down normally, but makes the URL uglier.
              This is because Next preserves scroll position when navigating to the same page.
              Doesn't even need /# because Next sees it as a different page. */}
            <NavLink target="/">Home</NavLink>
          </li>
          <li>
            <NavLink target="/skills/">Skills</NavLink>
          </li>
          <li>
            <NavLink target="/blog/" exact={false}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink target="#contact">Contact</NavLink>
          </li>
        </Nav>
        <div className="flex items-center gap-3">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
