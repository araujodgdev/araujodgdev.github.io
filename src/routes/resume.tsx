import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/resume')({
    component: Index
});


export function Index() {
    return (
        <div>
            <h2>Este é meu currículo atual!</h2>
        </div>
    )
}