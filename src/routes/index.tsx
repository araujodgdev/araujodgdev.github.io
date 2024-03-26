import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import AboutMe from "../components/AboutMe";

export const Route = createFileRoute("/")({
  component: Index,
});

export function Index() {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <AboutMe />
      <Gallery />
    </div>
  );
}
