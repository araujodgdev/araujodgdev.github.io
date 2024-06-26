import { createRootRoute, Outlet, Link } from "@tanstack/react-router";
import MobileNav from "../components/MobileNav";

export const Route = createRootRoute({
  component: () => (
    <div className="flex h-screen w-screen flex-col items-center bg-stone-950 px-4 py-9 text-stone-100 overflow-x-hidden antialiased md:px-72 md:py-12 md:gap-20">
      <header
        className={`flex w-full items-center md:ml-14 justify-between mb-10 md:gap-36`}
      >
        <h2
          className={`text-4xl font-monaspace-krypton font-extrabold md:text-5xl`}
        >
          DG
        </h2>
        <div className="hidden w-full items-center justify-around md:flex">
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
                  to="/resume"
                  className="flex items-center justify-center [&.active]:bg-stone-100 [&.active]:rounded-md [&.active]:p-1 [&.active]:text-stone-950"
                >
                  currículo
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
          </div>
        </div>
        <MobileNav />
      </header>
      <Outlet />
    </div>
  ),
});
