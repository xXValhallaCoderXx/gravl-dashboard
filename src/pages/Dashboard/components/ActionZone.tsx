import { UpcomingWorkout, MuscleRecovery } from "@/types/dashboard";
import { Button } from "@/components/ui/button";
import { Play, Clock, RotateCw, SkipForward } from "lucide-react";
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";

interface ActionZoneProps {
    nextWorkout: UpcomingWorkout;
    recovery: MuscleRecovery[];
    strengthScore: number;
}

// Mocking the image strip from the HTML
const EXERCISE_IMAGES = [
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/d7530b95bb-edef25c14882e7fe6f39.png",
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/8ea3373701-9b9dba6a5bdc05ce1ced.png",
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/484245d247-b3e26bf424bb85f5c41e.png",
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/9e44ffed20-e786724844f57bb39ca5.png",
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/2b2edf9b10-eca8e4d74f029f200cba.png"
];

export function ActionZone({ nextWorkout, recovery, strengthScore }: ActionZoneProps) {
    const strengthData = [{ name: 'Score', value: strengthScore, fill: '#4c6ef5' }];

    // Simplified readiness logic for visual
    const overallReadiness = Math.round(recovery.reduce((acc, curr) => acc + curr.percentage, 0) / recovery.length);

    return (
        <section id="row-1-action-vitals" className="px-8 mb-6 w-full">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

                {/* Next Workout Card */}
                <div id="next-workout-card" className="xl:col-span-7 bg-card-bg rounded-2xl border border-slate-custom overflow-hidden flex flex-col">
                    <div className="bg-volt px-6 py-3">
                        <h2 className="text-deep-focus font-bold text-sm tracking-wider">NEXT WORKOUT</h2>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold mb-2 text-white">{nextWorkout.title}</h3>
                        <p className="text-slate-custom mb-6">{nextWorkout.durationParam} mins • {nextWorkout.tags.exercises} exercises</p>

                        <div className="flex space-x-3 mb-6 overflow-x-auto pb-2">
                            {EXERCISE_IMAGES.map((src, i) => (
                                <div key={i} className="w-20 h-20 flex-shrink-0 rounded-xl bg-zinc-800 overflow-hidden border border-zinc-700">
                                    <img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src={src} alt="exercise" />
                                </div>
                            ))}
                        </div>

                        <div className="flex space-x-3 mt-auto">
                            <Button size="icon" variant="outline" className="w-12 h-12 rounded-full border-slate-custom bg-card-bg hover:border-slate-400 hover:text-white">
                                <SkipForward className="w-5 h-5 text-slate-custom" />
                            </Button>
                            <Button size="icon" variant="outline" className="w-12 h-12 rounded-full border-slate-custom bg-card-bg hover:border-slate-400 hover:text-white">
                                <RotateCw className="w-5 h-5 text-slate-custom" />
                            </Button>
                            <Button size="icon" variant="outline" className="w-12 h-12 rounded-full border-slate-custom bg-card-bg hover:border-slate-400 hover:text-white">
                                <Clock className="w-5 h-5 text-slate-custom" />
                            </Button>
                            <Button className="flex-1 h-12 rounded-full bg-volt text-deep-focus font-bold hover:bg-volt/90 text-base">
                                <Play className="w-5 h-5 mr-2 fill-current" />
                                START WORKOUT
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Vitals Section */}
                <div id="vitals-section" className="xl:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Muscle Recovery / Readiness */}
                    <div id="recovery-card" className="bg-card-bg rounded-2xl border border-slate-custom p-6 flex flex-col">
                        <h3 className="text-lg font-semibold mb-4 text-white">Readiness</h3>
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <div className={`relative w-32 h-32 rounded-full border-4 flex items-center justify-center mb-2 ${overallReadiness > 80 ? 'border-volt' : overallReadiness > 50 ? 'border-yellow-500' : 'border-red-500'}`}>
                                <div className="text-center">
                                    <span className={`text-3xl font-black ${overallReadiness > 80 ? 'text-volt' : overallReadiness > 50 ? 'text-yellow-500' : 'text-red-500'}`}>
                                        {overallReadiness}%
                                    </span>
                                </div>
                            </div>
                            <p className="text-slate-custom text-sm font-medium text-center px-4">
                                {overallReadiness > 80 ? "Your body is primed for intense training." : "Prioritize recovery today."}
                            </p>
                        </div>
                    </div>

                    {/* Strength Score */}
                    <div id="strength-score-card" className="bg-card-bg rounded-2xl border border-slate-custom p-6 flex flex-col">
                        <h3 className="text-lg font-semibold mb-4 text-white">Strength Score</h3>
                        <div className="flex-1 h-40 w-full relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="100%" barSize={10} data={strengthData} startAngle={90} endAngle={-270}>
                                    <PolarAngleAxis type="number" domain={[0, 200]} angleAxisId={0} tick={false} />
                                    <RadialBar
                                        background
                                        dataKey="value"
                                        cornerRadius={30} // circle mode
                                        fill="#4c6ef5"
                                    />
                                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-white text-2xl font-bold">
                                        {strengthScore}
                                    </text>
                                </RadialBarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
