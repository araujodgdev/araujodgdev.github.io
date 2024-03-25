import { createRootRoute, Outlet, Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import MobileNav from "../components/MobileNav";

export const Route = createRootRoute({
  component: () => (
    <div className="flex h-screen w-screen flex-col items-center bg-stone-950 px-6 py-9 text-stone-100 overflow-hidden antialiased md:px-72 md:py-20">
      <header
        className={`flex w-full items-center justify-between mb-10 gap-28`}
      >
        <h2
          className={`text-4xl font-monaspace-krypton font-extrabold md:text-5xl`}
        >
          DG
        </h2>
        <div className="hidden w-full items-center justify-between md:flex">
          <nav>
            <ul className="flex items-center font-bold text-xs md:gap-10 md:text-sm">
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-center [&.active]:bg-stone-100 [&.active]:rounded-md [&.active]:p-1 [&.active]:text-stone-950"
                >
                  início
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="flex items-center justify-center [&.active]:bg-stone-100 [&.active]:rounded-md [&.active]:p-1 [&.active]:text-stone-950"
                >
                  projetos
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  className="flex items-center justify-center [&.active]:bg-stone-100 [&.active]:rounded-md [&.active]:p-1 [&.active]:text-stone-950"
                >
                  currículo
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center justify-center [&.active]:bg-stone-100 [&.active]:rounded-md [&.active]:p-1 [&.active]:text-stone-950"
                >
                  contato
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 text-xs font-bold">
              <button>ENG</button>
              <div>/</div>
              <button>PT-BR</button>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-8">
                <a href="https://github.com/araujodgdev" target="_blank">
                  <img src="/github-icon.svg" alt="" width={48} height={48} />
                </a>
              </button>
              <button className="w-8">
                <a
                  href="https://linkedin.com/in/douglasaraujodev"
                  target="_blank"
                >
                  <img src="/linkedin-icon.svg" alt="" width={48} height={48} />
                </a>
              </button>
            </div>
          </div>
        </div>
        <MobileNav />
      </header>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  ),
});
