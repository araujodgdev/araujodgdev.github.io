import { Link } from "@tanstack/react-router";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-12 px-4">
      <div className="flex flex-col items-center justify-center md:ml-8 md:w-[720px] md:flex-row md:items-start md:justify-around md:gap-5">
        <img
          src="/profile-pic.png"
          width={800}
          height={1153}
          alt=""
          className="mb-12 w-48 rounded md:-top-10 md:w-64"
        />
        <div className="flex flex-col items-center gap-5 md:mt-8">
          <h1 className="mb-3 font-monaspace-xenon text-hero font-bold md:text-5xl">
            👋 Olá! Me chamo Douglas, e sou um{" "}
            <span className="bg-stone-100 p-1 text-stone-950">
              Desenvolvedor Web Jr.
            </span>
          </h1>
          <div className="flex w-full items-center justify-center gap-4 md:-right-40 md:-top-56 md:justify-center md:gap-8">
            <button className="w-40 rounded-md border-2 border-stone-100 bg-stone-100 p-3 text-xl font-bold text-stone-950 hover:scale-125 hover:duration-150">
              <a href="mailto:devdoug45@gmail.com">Fale comigo</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
