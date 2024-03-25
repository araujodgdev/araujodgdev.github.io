import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";

export const Route = createFileRoute('/')({
    component: Index
});


export function Index() {
    return (
        <div>
            <Hero />
        </div>
    )
}