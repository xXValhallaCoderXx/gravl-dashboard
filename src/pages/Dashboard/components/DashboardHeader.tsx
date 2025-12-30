import { Button } from "@/components/ui/button";
import { UserStats, DashboardData } from "@/types/dashboard";
import { Bell, Search } from "lucide-react";
import { Title } from "@/components/atoms/Title";
import { Text } from "@/components/atoms/Text";

interface DashboardHeaderProps {
    stats: UserStats;
    user: DashboardData['user'];
}

export function DashboardHeader({ stats, user }: DashboardHeaderProps) {
    return (
        <header id="header" className="h-20 bg-gravl-bg border-b border-white/5 flex items-center justify-between px-8 sticky top-0 z-10">
            <div className="flex items-center space-x-12">
                <Title variant="h2" color="lime">GRAVL</Title>
            </div>

            <div className="flex items-center space-x-6">
                {/* Stats Summary - Hidden on mobile, visible on lg */}
                <div className="hidden lg:flex items-center space-x-6 mr-6 border-r border-white/5 pr-6">
                    <div className="text-right">
                        <Text variant="label" color="muted">Streak</Text>
                        <div className="flex items-center justify-end">
                            <span className="text-gravl-lime mr-1">🔥</span>
                            <Text variant="lead" className="font-black">{stats.streak}</Text>
                        </div>
                    </div>
                    <div className="text-right">
                        <Text variant="label" color="muted">Workouts</Text>
                        <Text variant="lead" className="font-black">{stats.totalWorkouts}</Text>
                    </div>
                </div>

                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/5 rounded-full">
                    <Search className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/5 relative rounded-full">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-gravl-lime rounded-full border border-gravl-bg"></span>
                </Button>

                <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden cursor-pointer hover:border-gravl-lime transition-colors">
                    <img
                        src={user.avatarUrl}
                        alt={user.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
}
