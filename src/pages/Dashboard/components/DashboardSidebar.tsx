import { Button } from "@/components/ui/button";
import {
    Dumbbell,
    TrendingUp,
    Flame,
    Calendar,
    Trophy,
    Activity,
    Users,
    Settings
} from "lucide-react";

export function DashboardSidebar() {
    return (
        <aside id="sidebar" className="w-20 bg-card-bg border-r border-slate-custom flex flex-col items-center py-6 flex-shrink-0 h-screen sticky top-0">
            <div className="mb-12">
                <div className="w-12 h-12 rounded-2xl gradient-volt flex items-center justify-center glow-volt">
                    <Dumbbell className="text-deep-focus w-6 h-6" />
                </div>
            </div>
            <nav className="flex-1 flex flex-col items-center space-y-6">
                <Button variant="ghost" className="w-12 h-12 rounded-xl bg-zinc-800 text-volt hover:bg-zinc-700 p-0">
                    <TrendingUp className="w-6 h-6" />
                </Button>
                <Button variant="ghost" className="w-12 h-12 rounded-xl text-slate-custom hover:bg-zinc-800 p-0 hover:text-white">
                    <Flame className="w-6 h-6" />
                </Button>
                <Button variant="ghost" className="w-12 h-12 rounded-xl text-slate-custom hover:bg-zinc-800 p-0 hover:text-white">
                    <Calendar className="w-6 h-6" />
                </Button>
                <Button variant="ghost" className="w-12 h-12 rounded-xl text-slate-custom hover:bg-zinc-800 p-0 hover:text-white">
                    <Trophy className="w-6 h-6" />
                </Button>
                <Button variant="ghost" className="w-12 h-12 rounded-xl text-slate-custom hover:bg-zinc-800 p-0 hover:text-white">
                    <Activity className="w-6 h-6" />
                </Button>
                <Button variant="ghost" className="w-12 h-12 rounded-xl text-slate-custom hover:bg-zinc-800 p-0 hover:text-white">
                    <Users className="w-6 h-6" />
                </Button>
            </nav>
            <div className="mt-auto space-y-4 flex flex-col items-center">
                <Button variant="ghost" className="w-12 h-12 rounded-xl text-slate-custom hover:bg-zinc-800 p-0 hover:text-white">
                    <Settings className="w-6 h-6" />
                </Button>
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-volt">
                    <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                        alt="User"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </aside>
    );
}
