import { WorkoutSession } from "@/types/dashboard";
import { Dumbbell, Flame, Sun } from "lucide-react";

interface HistoryZoneProps {
    history: WorkoutSession[];
}

export function HistoryZone({ history }: HistoryZoneProps) {
    return (
        <section id="history-rewards-zone" className="px-8 pb-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                {/* Recent History */}
                <div className="col-span-3 bg-card-bg rounded-2xl p-5 border border-slate-custom">
                    <h3 className="text-base font-bold uppercase tracking-wide mb-4 text-white">RECENT HISTORY</h3>
                    <div className="space-y-2.5">
                        {history.map((session, index) => (
                            <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-all group cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <div className="text-center min-w-[3rem]">
                                        <div className="text-xl font-black text-white">{session.date.split(' ')[0]}</div>
                                        <div className="text-xs text-slate-custom uppercase">{session.date.split(' ')[1]}</div>
                                    </div>
                                    <div className="w-px h-10 bg-slate-custom group-hover:bg-zinc-700 transition-colors"></div>
                                    <div>
                                        <div className="font-bold text-sm text-white">{session.title}</div>
                                        <div className="text-xs text-slate-custom mt-0.5">{session.duration}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xl font-black text-white">
                                        {session.volumeLoad >= 1000 ? `${(session.volumeLoad / 1000).toFixed(1)}K` : session.volumeLoad}
                                    </div>
                                    <div className="text-xs text-slate-custom">Volume Load</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Badges (Mocked for UI as per HTML) */}
                <div className="bg-card-bg rounded-2xl p-5 border border-slate-custom">
                    <h3 className="text-base font-bold uppercase tracking-wide mb-4 text-white">RECENT BADGES</h3>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-zinc-900">
                            <div className="w-12 h-12 rounded-lg gradient-volt flex items-center justify-center glow-volt">
                                <Dumbbell className="text-deep-focus w-5 h-5" />
                            </div>
                            <div>
                                <div className="font-bold text-xs text-white">Volume Titan</div>
                                <div className="text-xs text-slate-custom">500K Total Volume</div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-zinc-900">
                            <div className="w-12 h-12 rounded-lg gradient-volt flex items-center justify-center glow-volt">
                                <Flame className="text-deep-focus w-5 h-5" />
                            </div>
                            <div>
                                <div className="font-bold text-xs text-white">Month Warrior</div>
                                <div className="text-xs text-slate-custom">30 Day Streak</div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-zinc-900">
                            <div className="w-12 h-12 rounded-lg gradient-volt flex items-center justify-center glow-volt">
                                <Sun className="text-deep-focus w-5 h-5" />
                            </div>
                            <div>
                                <div className="font-bold text-xs text-white">Early Riser</div>
                                <div className="text-xs text-slate-custom">50 Morning Sessions</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
