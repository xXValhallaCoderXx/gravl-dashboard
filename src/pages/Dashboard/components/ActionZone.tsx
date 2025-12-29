import { UpcomingWorkout, MuscleRecovery } from "@/types/dashboard";
import { Button } from "@/components/ui/button";
import { Dumbbell, Layers, Gauge, Check, AlertCircle, Clock } from "lucide-react";

interface ActionZoneProps {
    nextWorkout: UpcomingWorkout;
    recovery: MuscleRecovery[];
}

export function ActionZone({ nextWorkout, recovery }: ActionZoneProps) {
    return (
        <section id="action-zone" className="px-8 pt-6 pb-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
                {/* Next Workout Card */}
                <div className="col-span-3 bg-card-bg rounded-2xl p-6 border border-slate-custom flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <div>
                                <div className="text-xs font-bold text-volt uppercase tracking-wide mb-1">NEXT UP</div>
                                <h2 className="text-2xl font-black mb-1 text-white">{nextWorkout.title}</h2>
                                <p className="text-slate-custom text-xs">{nextWorkout.subtitle}</p>
                            </div>
                            <div className="text-right">
                                <div className="text-xs font-bold text-slate-custom uppercase mb-1">Target Duration</div>
                                <div className="text-xl font-black text-white">{nextWorkout.durationParam}m</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 mt-4">
                            <div className="flex items-center space-x-1.5 text-xs">
                                <Dumbbell className="text-volt w-4 h-4" />
                                <span className="text-slate-custom">{nextWorkout.tags.exercises} Exercises</span>
                            </div>
                            <div className="flex items-center space-x-1.5 text-xs">
                                <Layers className="text-volt w-4 h-4" />
                                <span className="text-slate-custom">{nextWorkout.tags.sets} Sets</span>
                            </div>
                            <div className="flex items-center space-x-1.5 text-xs">
                                <Gauge className="text-volt w-4 h-4" />
                                <span className="text-slate-custom">{nextWorkout.tags.intensity} Intensity</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 mt-6">
                        <Button
                            variant="outline"
                            className="flex-1 px-5 py-6 rounded-xl border-2 border-volt text-volt font-bold text-sm hover:bg-volt hover:bg-opacity-10 hover:text-volt transition-all bg-transparent"
                        >
                            PREVIEW WORKOUT
                        </Button>
                        <Button
                            className="flex-1 px-5 py-6 rounded-xl gradient-volt text-deep-focus font-black text-sm glow-volt hover:opacity-90 transition-all border-none"
                        >
                            START NOW
                        </Button>
                    </div>
                </div>

                {/* Recovery Status Card */}
                <div className="col-span-2 bg-card-bg rounded-2xl p-5 border border-slate-custom">
                    <div className="mb-3">
                        <h3 className="text-base font-bold uppercase tracking-wide text-white">RECOVERY STATUS</h3>
                        <p className="text-xs text-slate-custom mt-0.5">Muscle readiness assessment</p>
                    </div>
                    <div className="space-y-2">
                        {recovery.map((item, index) => {
                            const isReady = item.status === 'ready';
                            const isRecovering = item.status === 'recovering';
                            const isFatigued = item.status === 'fatigued';

                            return (
                                <div key={index} className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900">
                                    <div className="flex items-center space-x-2.5">
                                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${isReady ? 'gradient-volt glow-volt' :
                                                isRecovering ? 'bg-yellow-500 bg-opacity-20' :
                                                    'bg-red-500 bg-opacity-20'
                                            }`}>
                                            {isReady && <Check className="text-deep-focus w-3.5 h-3.5 stroke-[3]" />}
                                            {isRecovering && <Clock className="text-yellow-500 w-3.5 h-3.5" />}
                                            {isFatigued && <AlertCircle className="text-red-500 w-3.5 h-3.5" />}
                                        </div>
                                        <div className="font-bold text-xs text-white uppercase">{item.muscle}</div>
                                    </div>
                                    <div className={`font-black text-base ${isReady ? 'text-volt' :
                                            isRecovering ? 'text-yellow-500' :
                                                'text-red-500'
                                        }`}>
                                        {item.percentage}%
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
