import { TrendingUp, Clock } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const strengthData = [
    { date: 'Oct', squat: 315, bench: 225, deadlift: 405 },
    { date: 'Nov', squat: 335, bench: 235, deadlift: 425 },
    { date: 'Dec', squat: 355, bench: 245, deadlift: 455 },
    { date: 'Jan', squat: 365, bench: 250, deadlift: 475 },
    { date: 'Feb', squat: 385, bench: 260, deadlift: 485 },
    { date: 'Mar', squat: 405, bench: 275, deadlift: 495 },
];

const durationData = [
    { day: 'Mon', mins: 45 },
    { day: 'Tue', mins: 60 },
    { day: 'Wed', mins: 50 },
    { day: 'Thu', mins: 75 },
    { day: 'Fri', mins: 60 },
    { day: 'Sat', mins: 90 },
    { day: 'Sun', mins: 30 },
];

export function StrengthProgressionZone() {
    return (
        <section id="strength-progression" className="px-8 pb-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card-bg rounded-2xl p-6 border border-slate-custom flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold uppercase tracking-wide text-white">STRENGTH PROGRESSION</h3>
                        <TrendingUp className="text-volt w-5 h-5" />
                    </div>
                    <div id="strength-chart" className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={strengthData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" opacity={0.3} vertical={false} />
                                <XAxis dataKey="date" tick={{ fill: '#71717a', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#71717a', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '8px' }}
                                />
                                <Line type="monotone" dataKey="squat" stroke="#bef202" strokeWidth={2} dot={{ fill: '#bef202', strokeWidth: 2 }} activeDot={{ r: 6 }} />
                                <Line type="monotone" dataKey="bench" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6', strokeWidth: 2 }} />
                                <Line type="monotone" dataKey="deadlift" stroke="#ef4444" strokeWidth={2} dot={{ fill: '#ef4444', strokeWidth: 2 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="bg-card-bg rounded-2xl p-6 border border-slate-custom flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold uppercase tracking-wide text-white">WORKOUT DURATION</h3>
                        <Clock className="text-volt w-5 h-5" />
                    </div>
                    <div id="duration-chart" className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={durationData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" opacity={0.3} vertical={false} />
                                <XAxis dataKey="day" tick={{ fill: '#71717a', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#71717a', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <Tooltip
                                    cursor={{ fill: '#27272a' }}
                                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '8px' }}
                                />
                                <Bar dataKey="mins" fill="#3f3f46" radius={[4, 4, 0, 0]} activeBar={{ fill: '#bef202' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </section>
    );
}
