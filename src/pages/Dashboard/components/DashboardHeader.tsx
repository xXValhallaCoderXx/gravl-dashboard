import { Button } from "@/components/ui/button";
import { Dumbbell, Flame, Bell } from "lucide-react";

interface DashboardHeaderProps {
    streak: number;
    totalWorkouts: number;
    hoursTrained: number;
    volumeLoad: number;
    userAvatar: string;
}

export function DashboardHeader({
    streak,
    totalWorkouts,
    hoursTrained,
    volumeLoad,
    userAvatar
}: DashboardHeaderProps) {
    return (
        <header id="header" className="bg-card-bg border-b border-slate-custom px-8 h-16 flex items-center justify-between sticky top-0 z-10 w-full">
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg gradient-volt flex items-center justify-center glow-volt">
                        <Dumbbell className="text-deep-focus w-4 h-4" />
                    </div>
                    <span className="font-bold text-lg text-white">GRAVL</span>
                </div>
                <div className="flex items-center space-x-2 bg-zinc-900 rounded-lg px-3 py-1.5">
                    <Flame className="text-volt w-5 h-5 glow-volt" fill="currentColor" />
                    <span className="text-volt font-black text-base">{streak} Day Streak</span>
                </div>
            </div>

            <div className="flex items-center space-x-5 text-xs font-medium text-slate-custom">
                <div>{totalWorkouts} Total Workouts</div>
                <div className="w-px h-4 bg-slate-custom"></div>
                <div>{hoursTrained}h Trained</div>
                <div className="w-px h-4 bg-slate-custom"></div>
                <div>{volumeLoad >= 1000 ? `${(volumeLoad / 1000).toFixed(0)}k` : volumeLoad} Vol</div>
            </div>

            <div className="flex items-center space-x-3">
                <Button variant="ghost" className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center hover:bg-zinc-800 p-0 text-slate-custom hover:text-white">
                    <Bell className="w-4 h-4" />
                </Button>
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-volt">
                    <img src={userAvatar} alt="User" className="w-full h-full object-cover" />
                </div>
            </div>
        </header>
    );
}
