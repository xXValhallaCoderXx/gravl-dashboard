import { Button } from "@/components/ui/button";
import { LayoutDashboard, Dumbbell, BarChart2, Users, Settings, LogOut, Disc } from "lucide-react";

export function DashboardSidebar() {
    return (
        <aside className="w-20 lg:w-64 bg-gravl-bg border-r border-white/5 flex flex-col justify-between py-6 hidden md:flex z-20">
            <div className="px-4">
                {/* Mobile/Collapsed Logo placeholder if needed, though header handles logo usually. 
                     Here we can put the "New Workout" CTA or just nav items. */}

                <nav className="space-y-2 mt-4">
                    <Button variant="ghost" className="w-full justify-start text-gravl-lime bg-gravl-lime/10 font-bold hover:bg-gravl-lime/20 hover:text-gravl-lime">
                        <LayoutDashboard className="w-5 h-5 mr-3" />
                        <span className="hidden lg:inline">Overview</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5 font-medium">
                        <Dumbbell className="w-5 h-5 mr-3" />
                        <span className="hidden lg:inline">Workout</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5 font-medium">
                        <Disc className="w-5 h-5 mr-3" />
                        <span className="hidden lg:inline">Exercises</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5 font-medium">
                        <BarChart2 className="w-5 h-5 mr-3" />
                        <span className="hidden lg:inline">History</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5 font-medium">
                        <Users className="w-5 h-5 mr-3" />
                        <span className="hidden lg:inline">Community</span>
                    </Button>
                </nav>
            </div>

            <div className="px-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5 font-medium">
                    <Settings className="w-5 h-5 mr-3" />
                    <span className="hidden lg:inline">Settings</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/10 font-medium">
                    <LogOut className="w-5 h-5 mr-3" />
                    <span className="hidden lg:inline">Sign Out</span>
                </Button>
            </div>
        </aside>
    );
}
