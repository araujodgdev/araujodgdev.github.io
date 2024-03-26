import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import AboutMe from "../components/AboutMe";
import SocialMediaCard from "../components/SocialMediaCard";

export const Route = createFileRoute("/")({
  component: Index,
});

export function Index() {
  return (
    <div className="flex flex-col items-center justify-center gap-9 md:gap-12">
      <Hero />
      <AboutMe />
      <Gallery />
      <div className="flex flex-col gap-4 md:flex-row md:gap-12">
        <div className="relative -left-16">
        <SocialMediaCard href="https://github.com/araujodgdev" text="GitHub" />
        </div>
        <div className="relative">
          <SocialMediaCard href="https://linkedin.com/in/araujodgdev" text="LinkedIn" />
        </div>
        <div className="relative left-16">
          <SocialMediaCard href="https://www.instagram.com/_dddoug/" text="Instagram" />
        </div>
      </div>
    </div>
  );
}
