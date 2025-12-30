import { DashboardData } from "@/types/dashboard";
import { Title } from "@/components/atoms/Title";
import { Text } from "@/components/atoms/Text";

interface WelcomeSectionProps {
    user: DashboardData['user'];
}

export function WelcomeSection({ user }: WelcomeSectionProps) {
    return (
        <div id="welcome-section" className="py-6 px-8">
            <Title variant="h1" className="mb-2">
                Welcome back, <span className="text-gravl-lime">{user.name}</span>
            </Title>
            <Text variant="lead" color="muted">
                {user.welcomeMessage || "Ready to dominate today's session? Your performance metrics are looking strong."}
            </Text>
        </div>
    );
}
