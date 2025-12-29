import { MuscleRecovery } from "@/types/dashboard";
import { Heart, Activity, Clock, AlertCircle, Check } from "lucide-react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface PerformanceMetricsZoneProps {
    recovery: MuscleRecovery[];
}

const heartRateData = [
    { name: 'Z1', value: 10 },
    { name: 'Z2', value: 25 },
    { name: 'Z3', value: 40 },
    { name: 'Z4', value: 20 },
    { name: 'Z5', value: 5 },
];

export function PerformanceMetricsZone({ recovery }: PerformanceMetricsZoneProps) {
    return (
        <section id="performance-metrics" className="px-8 pb-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-card-bg rounded-2xl p-6 border border-slate-custom flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold uppercase tracking-wide text-white">HEART RATE ZONES</h3>
                        <Activity className="text-volt w-5 h-5" />
                    </div>
                    <div id="heart-rate-chart" className="h-[280px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={heartRateData}>
                                <XAxis dataKey="name" tick={{ fill: '#71717a', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <Tooltip
                                    cursor={{ fill: '#27272a' }}
                                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '8px' }}
                                />
                                <Bar dataKey="value" fill="#bef202" radius={[4, 4, 0, 0]}>
                                    {heartRateData.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={index === 2 ? '#bef202' : '#3f3f46'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="bg-card-bg rounded-2xl p-6 border border-slate-custom">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold uppercase tracking-wide text-white">MUSCLE RECOVERY</h3>
                        <Heart className="text-volt w-5 h-5" />
                    </div>
                    <div className="space-y-3">
                        {recovery.map((item, index) => {
                            const isReady = item.status === 'ready';
                            const isRecovering = item.status === 'recovering';
                            const isFatigued = item.status === 'fatigued';

                            return (
                                <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-zinc-900">
                                    <div className="flex items-center space-x-3">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isReady ? 'gradient-volt glow-volt' :
                                                isRecovering ? 'bg-yellow-500 bg-opacity-20' :
                                                    'bg-orange-500 bg-opacity-20'
                                            }`}>
                                            {isReady && <Check className="text-deep-focus w-3.5 h-3.5 stroke-[3]" />}
                                            {isRecovering && <Clock className="text-yellow-500 w-3.5 h-3.5" />}
                                            {isFatigued && <AlertCircle className="text-orange-500 w-3.5 h-3.5" />}
                                        </div>
                                        <div className="font-bold text-sm text-white uppercase">{item.muscle}</div>
                                    </div>
                                    <div className={`font-black text-lg ${isReady ? 'text-volt' :
                                            isRecovering ? 'text-yellow-500' :
                                                'text-orange-500'
                                        }`}>
                                        {item.percentage}%
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="bg-card-bg rounded-2xl p-6 border border-slate-custom">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold uppercase tracking-wide text-white">PERSONAL RECORDS</h3>
                        <Activity className="text-volt w-5 h-5" />
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-volt">
                            <div>
                                <div className="font-bold text-sm text-white">BENCH PRESS</div>
                                <div className="text-xs text-slate-custom">3 days ago</div>
                            </div>
                            <div className="text-right">
                                <div className="text-volt font-black text-2xl">315</div>
                                <div className="text-xs text-slate-custom">lbs</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900">
                            <div>
                                <div className="font-bold text-sm text-white">SQUAT</div>
                                <div className="text-xs text-slate-custom">1 week ago</div>
                            </div>
                            <div className="text-right">
                                <div className="text-white font-black text-2xl">405</div>
                                <div className="text-xs text-slate-custom">lbs</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900">
                            <div>
                                <div className="font-bold text-sm text-white">DEADLIFT</div>
                                <div className="text-xs text-slate-custom">2 weeks ago</div>
                            </div>
                            <div className="text-right">
                                <div className="text-white font-black text-2xl">495</div>
                                <div className="text-xs text-slate-custom">lbs</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900">
                            <div>
                                <div className="font-bold text-sm text-white">OVERHEAD PRESS</div>
                                <div className="text-xs text-slate-custom">3 weeks ago</div>
                            </div>
                            <div className="text-right">
                                <div className="text-white font-black text-2xl">185</div>
                                <div className="text-xs text-slate-custom">lbs</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
