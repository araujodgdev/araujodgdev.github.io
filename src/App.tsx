import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-stone-950 px-8 py-9 text-stone-100  antialiased md:px-72 md:py-20">
      <Header />
      <Hero />
    </div>
  );
}
