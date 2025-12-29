import { DashboardData } from "@/types/dashboard";
import { Dumbbell, Footprints, HeartPulse, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Row3DeepDiveProps {
    recentWorkouts: DashboardData['recentWorkouts'];
    strengthDetails: DashboardData['strengthDetails'];
}

export function Row3DeepDive({ recentWorkouts, strengthDetails }: Row3DeepDiveProps) {
    const getIcon = (title: string) => {
        if (title.includes("Pull") || title.includes("Push")) return <Dumbbell className="text-volt" />;
        if (title.includes("Leg")) return <Footprints className="text-purple-500" />;
        return <HeartPulse className="text-red-500" />;
    };

    const getColor = (title: string) => {
        if (title.includes("Pull") || title.includes("Push")) return "bg-volt/20 text-volt";
        if (title.includes("Leg")) return "bg-purple-500/20 text-purple-500";
        return "bg-red-500/20 text-red-500";
    };

    // Helper to calculate stroke dashoffset for the gauge
    const calculateOffset = (score: number) => {
        const circumference = 176; // 2 * pi * r (r=28)
        const progress = score / 200; // max score 200
        return circumference - (progress * circumference);
    };

    return (
        <section id="row-3-deep-dive" className="px-8 mb-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Recent Workouts Card */}
                <div className="bg-card-bg rounded-2xl border border-slate-custom p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-white">Recent Workouts</h3>
                        <Button variant="link" className="text-volt font-semibold hover:text-white p-0">View All</Button>
                    </div>
                    <div className="space-y-4">
                        {recentWorkouts.map((workout) => (
                            <div key={workout.id} className="flex items-center justify-between p-4 bg-deep-navy rounded-xl border border-slate-custom hover:border-slate-500 transition cursor-pointer group">
                                <div className="flex items-center flex-1">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${getColor(workout.title)}`}>
                                        {getIcon(workout.title)}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white group-hover:text-volt transition">{workout.title}</p>
                                        <p className="text-slate-custom text-sm">{workout.date}</p>
                                    </div>
                                </div>
                                <div className="text-right mr-4">
                                    <p className="font-mono font-semibold text-white">{workout.volumeLoad.toLocaleString()} kg</p>
                                    <p className="text-slate-custom text-xs">Volume</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-card-bg border border-slate-custom flex items-center justify-center group-hover:border-volt transition">
                                    <ArrowRight className="w-4 h-4 text-slate-custom group-hover:text-volt" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Strength Details Card */}
                <div className="bg-card-bg rounded-2xl border border-slate-custom p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-white">Strength Details</h3>
                        <Button variant="link" className="text-volt font-semibold hover:text-white p-0">Full Report</Button>
                    </div>
                    <div className="space-y-4">
                        {strengthDetails.map((detail, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-deep-navy rounded-xl border border-slate-custom">
                                <div className="flex items-center flex-1">
                                    {/* SVG Gauge */}
                                    <div className="relative w-16 h-16 mr-4">
                                        <svg className="w-16 h-16 transform -rotate-90">
                                            <circle cx="32" cy="32" r="28" stroke="#27272a" strokeWidth="4" fill="none"></circle>
                                            <circle
                                                cx="32" cy="32" r="28"
                                                stroke="#bef202"
                                                strokeWidth="4"
                                                fill="none"
                                                strokeDasharray="176"
                                                strokeDashoffset={calculateOffset(detail.score)}
                                                strokeLinecap="round"
                                            ></circle>
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-lg font-bold text-white">{detail.score}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg text-white">{detail.muscle}</p>
                                        <p className="text-slate-custom text-sm">{detail.level}</p>
                                    </div>
                                </div>
                                <ChevronRight className="text-slate-custom w-5 h-5" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
