import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import MobileNav from "../components/MobileNav";

export const Route = createRootRoute({
  component: () => (
    <div className="flex h-screen w-screen flex-col items-center bg-stone-950 px-8 py-9 text-stone-100  antialiased md:px-72 md:py-20">
        <header className={`flex w-full items-center justify-between mb-10 gap-28`}>
      <h2
        className={`text-4xl font-monaspace-krypton font-extrabold md:text-5xl`}
      >
        DG
      </h2>
      <div className="hidden w-full items-center justify-between md:flex">
        <nav>
          <ul className="flex items-center text-xs md:gap-10 md:text-sm">
            <li>
              <a href="/work">projetos</a>
            </li>
            <li>
              <a href="/resume">currículo</a>
            </li>
            <li>
              <a href="/contact">contato</a>
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
              <img src="/github-icon.svg" alt="" width={48} height={48} />
            </button>
            <button className="w-8">
              <img src="/linkedin-icon.svg" alt="" width={48} height={48} />
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

