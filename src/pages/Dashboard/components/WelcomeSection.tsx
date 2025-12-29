import { DashboardData } from "@/types/dashboard";

interface WelcomeSectionProps {
    user: DashboardData['user'];
}

export function WelcomeSection({ user }: WelcomeSectionProps) {
    return (
        <div id="welcome-section" className="py-6 px-8">
            <h1 className="text-4xl font-bold mb-2 text-white">
                Welcome back, <span className="text-volt">{user.name}</span>
            </h1>
            <p className="text-slate-custom text-lg">
                {user.welcomeMessage || "Ready to dominate today's session? Your performance metrics are looking strong."}
            </p>
        </div>
    );
}
