import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, XIcon } from "lucide-react";
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden font-monaspace-krypton overflow-x-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col items-center justify-center gap-[6px]"
      >
        <div className="block h-1 w-8 rounded-sm bg-white"></div>
        <div className="block h-1 w-8 rounded-sm bg-white"></div>
        <div className="block h-1 w-8 rounded-sm bg-white"></div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-menu absolute top-0 h-screen w-60 bg-stone-100 text-stone-950"
            initial={{ right: -256 }}
            animate={{ right: 0 }}
            transition={{ type: "tween" }}
            exit={{ right: -256 }}
          >
            <button
              onClick={() => setOpen(!open)}
              className="relative left-[166px] top-7"
            >
              <XIcon size={49} />
            </button>
            <nav className="relative left-10 top-16  text-2xl font-bold">
              <ul className="flex flex-col gap-3">
              <li>
                  <Link to='/'  className="[&.active]:bg-stone-950 [&.active]:rounded-md [&.active]:p-2 [&.active]:text-stone-100">início</Link>
                </li>
                <li>
                  <Link to='/projects'  className="[&.active]:bg-stone-950 [&.active]:rounded-md [&.active]:p-2 [&.active]:text-stone-100">projetos</Link>
                </li>
                <li>
                  <Link to='/resume'  className="[&.active]:bg-stone-950 [&.active]:rounded-md [&.active]:p-2 [&.active]:text-stone-100">currículo</Link>
                </li>
                <li>
                  <Link to='/contact'  className="[&.active]:bg-stone-950 [&.active]:rounded-md [&.active]:p-2 [&.active]:text-stone-100">contato</Link>
                </li>
                <li>
                  <a
                    href="https://github.com/araujodgdev"
                    target="_blank"
                    className="flex items-center gap-1"
                  >
                    github <ArrowUpRight size={32} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/douglasaraujodev"
                    target="_blank"
                    className="flex items-center gap-1"
                  >
                    linkedIn <ArrowUpRight size={32} />
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
