import { ArrowUpRight } from "lucide-react";

export default function SocialMediaCard({href, text}: {href: string, text: string}) {
    return (
        <div className="text-center md:w-38 border-stone-400 border-[1px] hover:cursor-pointer hover:text-stone-100 hover:border-stone-100 py-5 px-14 md:py-8 md:px-12 bg-stone-800 text-stone-400 rounded-md">
            <button className="md:text-xl font-bold">
                <a href={href} target="_blank">
                  {text} <ArrowUpRight size={20} className="inline" />
                </a>
              </button>
        </div>
    )
}