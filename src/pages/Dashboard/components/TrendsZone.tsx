import { DashboardData } from "@/types/dashboard";
import { ArrowUp, ArrowDown, Clock, Dumbbell, Flame, Layers } from "lucide-react";

interface TrendsZoneProps {
    trends: DashboardData['trends'];
}

export function TrendsZone({ trends }: TrendsZoneProps) {
    return (
        <section id="row-2-trends" className="px-8 mb-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Workouts Card */}
                <div className="bg-card-bg rounded-2xl border border-slate-custom p-6 relative">
                    <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        {trends.workouts.trend >= 0 ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                        {Math.abs(trends.workouts.trend)}%
                    </div>
                    <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mr-3">
                            <Clock className="text-purple-500 w-5 h-5" />
                        </div>
                        <p className="text-slate-custom text-sm">Workouts</p>
                    </div>
                    <p className="text-3xl font-bold font-mono text-white">{trends.workouts.value}</p>
                    <p className="text-slate-custom text-xs mt-1">{trends.workouts.label}</p>
                </div>

                {/* Volume Card */}
                <div className="bg-card-bg rounded-2xl border border-slate-custom p-6 relative">
                    <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        {trends.volume.trend >= 0 ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                        {Math.abs(trends.volume.trend)}%
                    </div>
                    <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mr-3">
                            <Dumbbell className="text-blue-500 w-5 h-5" />
                        </div>
                        <p className="text-slate-custom text-sm">Volume</p>
                    </div>
                    <p className="text-3xl font-bold font-mono text-white">{trends.volume.value}</p>
                    <p className="text-slate-custom text-xs mt-1">{trends.volume.label}</p>
                </div>

                {/* Calories Card */}
                <div className="bg-card-bg rounded-2xl border border-slate-custom p-6 relative">
                    <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        {trends.calories.trend >= 0 ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                        {Math.abs(trends.calories.trend)}%
                    </div>
                    <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center mr-3">
                            <Flame className="text-red-500 w-5 h-5" />
                        </div>
                        <p className="text-slate-custom text-sm">Calories</p>
                    </div>
                    <p className="text-3xl font-bold font-mono text-white">{trends.calories.value}</p>
                    <p className="text-slate-custom text-xs mt-1">{trends.calories.label}</p>
                </div>

                {/* Sets Card */}
                <div className="bg-card-bg rounded-2xl border border-slate-custom p-6 relative">
                    <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        {trends.sets.trend >= 0 ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                        {Math.abs(trends.sets.trend)}%
                    </div>
                    <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mr-3">
                            <Layers className="text-purple-500 w-5 h-5" />
                        </div>
                        <p className="text-slate-custom text-sm">Sets</p>
                    </div>
                    <p className="text-3xl font-bold font-mono text-white">{trends.sets.value}</p>
                    <p className="text-slate-custom text-xs mt-1">{trends.sets.label}</p>
                </div>

            </div>
        </section>
    );
}
