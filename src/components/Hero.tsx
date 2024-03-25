export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center justify-center md:flex-row md:w-screen md:gap-5 md:items-start">
        <img
          src="/profile-pic.png"
          width={800}
          height={1153}
          alt=""
          className="w-48 rounded mb-10 md:w-64 md:ml-20"
        />
        <div className="flex flex-col items-center md:w-4/6 md:mt-8">
          <h1 className="text-xl font-monaspace-xenon mb-3 font-bold md:text-5xl">
            👋 Olá! Me chamo Douglas, e sou um{" "}
            <span className="bg-stone-100 p-1 text-stone-950">
              Desenvolvedor Web Jr.
            </span>
          </h1>
          <p className="text-stone-400">
            Atualmente estudo Análise e Desenvolvimento de Sistemas na Cesar
            School, onde tenho aprimorado minhas habilidades técnicas e
            interpessoais. Possuo experiência na criação de aplicações web
            utilizando React, Next.js e Tailwind CSS, no front-end, e Node.js e
            Express no back-end.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-around w-full md:justify-center md:gap-8 md:relative md:-top-48 md:-right-40">
        <button className="bg-stone-100 border-2 border-stone-100 rounded-md p-3 w-44 text-stone-950 font-bold text-xl hover:scale-125 hover:duration-150">
          Fale comigo
        </button>
        <button className="border-2 border-stone-100 w-44 font-bold text-xl text-stone-100 bg-transparent rounded-md p-3 hover:scale-125 hover:duration-150">
          Meus projetos
        </button>
      </div>
    </section>
  );
}
