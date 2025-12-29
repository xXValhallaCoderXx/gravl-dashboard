import { ReactNode } from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardData } from "@/types/dashboard";

interface DashboardLayoutProps {
    children: ReactNode;
    data: DashboardData;
}

export function DashboardLayout({ children, data }: DashboardLayoutProps) {
    return (
        <div className="flex h-screen overflow-hidden bg-deep-focus text-white font-sans selection:bg-volt selection:text-deep-focus">
            <DashboardSidebar />

            <main className="flex-1 flex flex-col overflow-hidden">
                <DashboardHeader
                    streak={data.stats.streak}
                    totalWorkouts={data.stats.totalWorkouts}
                    hoursTrained={data.stats.hoursTrained}
                    volumeLoad={data.stats.volumeLoad}
                    userAvatar={data.user.avatarUrl}
                />

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {children}
                </div>
            </main>
        </div>
    );
}
