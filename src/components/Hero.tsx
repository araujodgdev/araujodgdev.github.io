import { Link } from "@tanstack/react-router";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-4 gap-12">
      <div className="flex flex-col items-center justify-center md:flex-row md:ml-8 md:justify-around md:gap-5 md:items-start">
        <img
          src="/profile-pic.png"
          width={800}
          height={1153}
          alt=""
          className="w-48 rounded mb-12 md:w-64"
        />
        <div className="flex flex-col items-center gap-8 md:mt-8">
          <h1 className="text-[1.2rem] font-monaspace-xenon mb-3 font-bold md:text-5xl">
            👋 Olá! Me chamo Douglas, e sou um{" "}
            <span className="bg-stone-100 p-1 text-stone-950">
              Desenvolvedor Web Jr.
            </span>
          </h1>
          <div className="flex items-center justify-center gap-4 w-full md:justify-center md:gap-8 md:-top-56 md:-right-40">
            <button className="bg-stone-100 border-2 border-stone-100 rounded-md p-3 w-40 text-stone-950 font-bold text-xl hover:scale-125 hover:duration-150">
              <Link to="/contact">Fale comigo</Link>
            </button>
            <button className="border-2 border-stone-100 w-40 font-bold text-xl text-stone-100 bg-transparent rounded-md p-3 hover:scale-125 hover:duration-150">
              <Link to="/projects">Projetos</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
