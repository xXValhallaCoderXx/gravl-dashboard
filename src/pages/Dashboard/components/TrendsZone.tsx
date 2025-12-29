import { DashboardData } from "@/types/dashboard";
import { Dumbbell, Flame, Layers, Timer } from "lucide-react";

interface TrendsZoneProps {
    trends: DashboardData['trends'];
}

export function TrendsZone({ trends }: TrendsZoneProps) {
    const getTrendColor = (trend: number) => trend > 0 ? "text-gravl-lime" : "text-gravl-red";

    return (
        <section id="row-2-trends" className="px-8 mb-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                {/* Workouts */}
                <div className="bg-gravl-card rounded-2xl border border-white/5 p-5 flex flex-col justify-between h-32 relative group hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full bg-gravl-purple/10 flex items-center justify-center border border-gravl-purple/20">
                            <Timer className="w-5 h-5 text-gravl-purple" />
                        </div>
                        <div className={`text-xs font-bold px-2 py-1 rounded-md bg-white/5 ${getTrendColor(trends.workouts.trend)}`}>
                            +{trends.workouts.trend}%
                        </div>
                    </div>
                    <div>
                        <h4 className="text-2xl font-black text-white">{trends.workouts.value}</h4>
                        <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Duration</p>
                    </div>
                </div>

                {/* Volume */}
                <div className="bg-gravl-card rounded-2xl border border-white/5 p-5 flex flex-col justify-between h-32 relative group hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full bg-gravl-blue/10 flex items-center justify-center border border-gravl-blue/20">
                            <Dumbbell className="w-5 h-5 text-gravl-blue" />
                        </div>
                        <div className={`text-xs font-bold px-2 py-1 rounded-md bg-white/5 ${getTrendColor(trends.volume.trend)}`}>
                            +{trends.volume.trend}%
                        </div>
                    </div>
                    <div>
                        <h4 className="text-2xl font-black text-white">{trends.volume.value}</h4>
                        <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Volume Load</p>
                    </div>
                </div>

                {/* Calories */}
                <div className="bg-gravl-card rounded-2xl border border-white/5 p-5 flex flex-col justify-between h-32 relative group hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full bg-gravl-red/10 flex items-center justify-center border border-gravl-red/20">
                            <Flame className="w-5 h-5 text-gravl-red" />
                        </div>
                        <div className={`text-xs font-bold px-2 py-1 rounded-md bg-white/5 ${getTrendColor(trends.calories.trend)}`}>
                            +{trends.calories.trend}%
                        </div>
                    </div>
                    <div>
                        <h4 className="text-2xl font-black text-white">{trends.calories.value}</h4>
                        <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Burned</p>
                    </div>
                </div>

                {/* Sets */}
                <div className="bg-gravl-card rounded-2xl border border-white/5 p-5 flex flex-col justify-between h-32 relative group hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full bg-gray-700/30 flex items-center justify-center border border-gray-600/30">
                            <Layers className="w-5 h-5 text-white" />
                        </div>
                        <div className={`text-xs font-bold px-2 py-1 rounded-md bg-white/5 ${getTrendColor(trends.sets.trend)}`}>
                            +{trends.sets.trend}%
                        </div>
                    </div>
                    <div>
                        <h4 className="text-2xl font-black text-white">{trends.sets.value}</h4>
                        <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Sets Completed</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
