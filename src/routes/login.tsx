import { createFileRoute } from "@tanstack/react-router";
import { FeaturesSection } from "@/pages/Login/components/FeaturesSection";
import { LoginFooter } from "@/pages/Login/components/LoginFooter";
import { LoginForm } from "@/pages/Login/components/LoginForm";
import { Logo } from "@/components/atoms/Logo";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";

export const Route = createFileRoute("/login")({
    component: Login,
});

function Login() {
    return (
        <div
            id="login-container"
            className="min-h-screen flex items-center justify-center bg-deep-focus bg-pattern px-4 py-8"
        >
            <div className="w-full max-w-md animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center">
                    <Logo />
                </div>
                <LoginForm />
                <FeaturesSection />
                <TestimonialCard
                    avatarUrl="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                    name="Marcus Chen"
                    role="Powerlifter"
                    quote="Gravl transformed my training. The analytics are incredible and the streak system keeps me motivated every single day!"
                />
                <LoginFooter />
            </div>
        </div>
    );
}
