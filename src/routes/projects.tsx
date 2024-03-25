import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/projects')({
    component: Projects
});


export function Projects() {
    return (
        <div>
            <h2>Meus Projetos Pessoais e Comerciais</h2>
        </div>
    )
}