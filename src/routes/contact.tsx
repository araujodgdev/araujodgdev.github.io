import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/contact')({
    component: Contact
});


export function Contact() {
    return (
        <div>
            <h2>Vamos nos conectar!</h2>
        </div>
    )
}