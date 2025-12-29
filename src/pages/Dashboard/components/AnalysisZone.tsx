import { PersonalRecord } from "@/types/dashboard";
import { Button } from "@/components/ui/button";
import { Dumbbell, Trophy, Weight } from "lucide-react";

interface AnalysisZoneProps {
    personalRecords: PersonalRecord[];
}

export function AnalysisZone({ personalRecords }: AnalysisZoneProps) {
    return (
        <section id="analysis-zone" className="px-8 pb-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
                {/* Muscle Focus Chart */}
                <div className="col-span-3 bg-card-bg rounded-2xl p-5 border border-slate-custom">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h3 className="text-base font-bold uppercase tracking-wide text-white">MUSCLE FOCUS</h3>
                            <p className="text-xs text-slate-custom mt-0.5">Training distribution balance</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button size="sm" className="px-3 py-1.5 h-auto rounded-lg bg-volt text-deep-focus text-xs font-bold hover:bg-volt hover:opacity-90">
                                Last 30 Days
                            </Button>
                            <Button size="sm" variant="ghost" className="px-3 py-1.5 h-auto rounded-lg bg-zinc-900 text-xs font-medium hover:bg-zinc-800 hover:text-white transition-all text-slate-custom">
                                3 Months
                            </Button>
                        </div>
                    </div>
                    {/* Placeholder for Chart */}
                    <div className="h-60 w-full bg-zinc-900/50 rounded-xl flex items-center justify-center border border-zinc-800 border-dashed">
                        <span className="text-slate-custom text-sm font-medium">Muscle Focus Chart Area</span>
                    </div>
                </div>

                {/* Personal Records */}
                <div className="col-span-2 bg-card-bg rounded-2xl p-5 border border-slate-custom">
                    <div className="mb-4">
                        <h3 className="text-base font-bold uppercase tracking-wide text-white">PERSONAL RECORDS</h3>
                        <p className="text-xs text-slate-custom mt-0.5">Top compound lifts</p>
                    </div>
                    <div className="space-y-3">
                        {personalRecords.map((pr, index) => (
                            <div key={index} className={`flex items-center justify-between p-3 rounded-xl ${index === 0 ? 'bg-zinc-900 border border-volt' : 'bg-zinc-900'}`}>
                                <div className="flex items-center space-x-3">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${index === 0 ? 'gradient-volt glow-volt' : 'bg-zinc-800'}`}>
                                        {pr.exercise.includes("DEADLIFT") ? <Weight className={`w-5 h-5 ${index === 0 ? 'text-deep-focus' : 'text-volt'}`} /> :
                                            pr.exercise.includes("SQUAT") ? <Dumbbell className={`w-5 h-5 ${index === 0 ? 'text-deep-focus' : 'text-volt'}`} /> :
                                                <Trophy className={`w-5 h-5 ${index === 0 ? 'text-deep-focus' : 'text-volt'}`} />
                                        }
                                    </div>
                                    <div>
                                        <div className="font-bold text-xs text-slate-custom uppercase">{pr.exercise}</div>
                                        <div className="text-xs text-slate-custom">{pr.date}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className={`font-black text-2xl ${index === 0 ? 'text-volt' : 'text-white'}`}>{pr.weight}</div>
                                    <div className="text-xs text-slate-custom">{pr.unit}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
