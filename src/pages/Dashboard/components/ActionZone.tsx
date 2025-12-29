import { UpcomingWorkout, MuscleRecovery } from "@/types/dashboard";
import { Button } from "@/components/ui/button";
import { RotateCcw, SkipForward, Clock, Share2, Eye } from "lucide-react";
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";

interface ActionZoneProps {
    nextWorkout: UpcomingWorkout;
    recovery: MuscleRecovery[];
    strengthScore: number;
}

// Mocking the image strip
const EXERCISE_IMAGES = [
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/d7530b95bb-edef25c14882e7fe6f39.png",
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/8ea3373701-9b9dba6a5bdc05ce1ced.png",
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/484245d247-b3e26bf424bb85f5c41e.png",
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/9e44ffed20-e786724844f57bb39ca5.png",
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/2b2edf9b10-eca8e4d74f029f200cba.png"
];

export function ActionZone({ nextWorkout, recovery, strengthScore }: ActionZoneProps) {
    // Strength Score Data
    const strengthData = [{ name: 'Score', value: strengthScore, fill: '#4C6EF5' }]; // Gravl Blue

    // Simplified readiness logic for visual
    const overallReadiness = Math.round(recovery.reduce((acc, curr) => acc + curr.percentage, 0) / recovery.length);

    // Readiness Ring Data
    const readinessData = [{ name: 'Readiness', value: overallReadiness, fill: '#CCFF00' }]; // Gravl Lime

    return (
        <section id="row-1-action-vitals" className="px-8 mb-6 w-full">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

                {/* Next Workout Card */}
                <div id="next-workout-card" className="xl:col-span-7 bg-gravl-card rounded-2xl border border-gravl-border relative overflow-hidden flex flex-col p-0">
                    {/* Top Tab Label */}
                    <div className="absolute top-0 left-0 bg-gravl-lime text-black font-bold rounded-br-xl inline-block px-4 py-1 text-sm uppercase tracking-wide z-10">
                        NEXT WORKOUT - PUSH
                    </div>

                    <div className="p-6 pt-12 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold mb-1 text-white">{nextWorkout.title}</h3>
                        <p className="text-gray-400 text-sm mb-6">{nextWorkout.durationParam} mins • {nextWorkout.tags.exercises} exercises</p>

                        {/* Thumbnails */}
                        <div className="flex space-x-3 mb-8 overflow-x-auto pb-2 scrollbar-none">
                            {EXERCISE_IMAGES.map((src, i) => (
                                <div key={i} className="w-16 h-16 flex-shrink-0 rounded-xl bg-gray-800 overflow-hidden border border-white/5">
                                    <img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src={src} alt="exercise" />
                                </div>
                            ))}
                        </div>

                        {/* Action Grid (Circular Buttons + Labels) */}
                        <div className="grid grid-cols-4 gap-4 mt-auto">
                            <div className="flex flex-col items-center group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center mb-2 border border-white/5 transition-colors">
                                    <SkipForward className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                </div>
                                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium group-hover:text-gray-300">Skip</span>
                            </div>

                            <div className="flex flex-col items-center group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center mb-2 border border-white/5 transition-colors">
                                    <RotateCcw className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                </div>
                                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium group-hover:text-gray-300">Regen</span>
                            </div>

                            <div className="flex flex-col items-center group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center mb-2 border border-white/5 transition-colors">
                                    <Clock className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                </div>
                                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium group-hover:text-gray-300">Duration</span>
                            </div>

                            <div className="flex flex-col items-center group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center mb-2 border border-white/5 transition-colors">
                                    <Share2 className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                </div>
                                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium group-hover:text-gray-300">Share</span>
                            </div>
                        </div>

                        <Button className="w-full mt-6 h-12 rounded-xl bg-gravl-lime text-black font-bold hover:bg-gravl-lime/90 text-base shadow-lg shadow-lime-900/20">
                            <Eye className="w-5 h-5 mr-2" />
                            VIEW WORKOUT
                        </Button>
                    </div>
                </div>

                {/* Vitals Section */}
                <div id="vitals-section" className="xl:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Readiness Card */}
                    <div id="recovery-card" className="bg-gravl-card rounded-2xl border border-gravl-border p-6 flex flex-col items-center justify-center relative">
                        <div className="absolute top-4 left-4 text-sm font-semibold text-gray-400">Readiness</div>

                        <div className="w-40 h-40 relative flex items-center justify-center mt-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadialBarChart cx="50%" cy="50%" innerRadius="80%" outerRadius="100%" barSize={8} data={readinessData} startAngle={90} endAngle={-270}>
                                    <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                                    <RadialBar
                                        background={{ fill: '#27272a' }}
                                        dataKey="value"
                                        cornerRadius={100}
                                    />
                                </RadialBarChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                                <span className="text-4xl font-black text-white">{overallReadiness}%</span>
                            </div>
                        </div>
                        <p className="text-gray-500 text-xs mt-2 font-medium">Prioritize recovery today</p>
                    </div>

                    {/* Strength Score Card */}
                    <div id="strength-score-card" className="bg-gravl-card rounded-2xl border border-gravl-border p-6 flex flex-col items-center justify-center relative">
                        <div className="absolute top-4 left-4 text-sm font-semibold text-gray-400">Strength Score</div>

                        <div className="w-40 h-40 relative flex items-center justify-center mt-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadialBarChart cx="50%" cy="50%" innerRadius="80%" outerRadius="100%" barSize={8} data={strengthData} startAngle={90} endAngle={-270}>
                                    <PolarAngleAxis type="number" domain={[0, 200]} angleAxisId={0} tick={false} />
                                    <RadialBar
                                        background={{ fill: '#27272a' }}
                                        dataKey="value"
                                        cornerRadius={100}
                                        fill="#4C6EF5"
                                    />
                                </RadialBarChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                                <span className="text-4xl font-black text-white">{strengthScore}</span>
                            </div>
                        </div>
                        <div className="mt-2 bg-gravl-blue/10 text-gravl-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                            Elite
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
