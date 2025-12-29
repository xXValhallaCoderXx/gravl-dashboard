import { Button } from "@/components/ui/button";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from "recharts";

const volumeData = [
    { name: 'Wk 1', vol: 4000 },
    { name: 'Wk 2', vol: 3000 },
    { name: 'Wk 3', vol: 2000 },
    { name: 'Wk 4', vol: 2780 },
    { name: 'Wk 5', vol: 1890 },
    { name: 'Wk 6', vol: 2390 },
    { name: 'Wk 7', vol: 3490 },
    { name: 'Wk 8', vol: 4200 },
];

const muscleSplitData = [
    { name: 'Chest', value: 30 },
    { name: 'Back', value: 25 },
    { name: 'Legs', value: 25 },
    { name: 'Shoulders', value: 10 },
    { name: 'Arms', value: 10 },
];

const COLORS = ['#bef202', '#3b82f6', '#eab308', '#ef4444', '#a855f7'];

export function DataStoryZone() {
    return (
        <section id="data-story" className="px-8 pb-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-2 bg-card-bg rounded-2xl p-6 border border-slate-custom">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-bold uppercase tracking-wide text-white">VOLUME PROGRESSION</h2>
                            <p className="text-sm text-slate-custom mt-1">Total weight lifted over time</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button size="sm" variant="ghost" className="px-4 py-2 h-auto rounded-lg bg-zinc-900 text-sm font-medium hover:bg-zinc-800 hover:text-white transition-all text-slate-custom">Week</Button>
                            <Button size="sm" className="px-4 py-2 h-auto rounded-lg bg-volt text-deep-focus text-sm font-bold hover:bg-volt hover:opacity-90">Month</Button>
                            <Button size="sm" variant="ghost" className="px-4 py-2 h-auto rounded-lg bg-zinc-900 text-sm font-medium hover:bg-zinc-800 hover:text-white transition-all text-slate-custom">Year</Button>
                        </div>
                    </div>

                    <div id="volume-chart" className="h-[320px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={volumeData}>
                                <defs>
                                    <linearGradient id="colorVol" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#bef202" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#bef202" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" opacity={0.3} vertical={false} />
                                <XAxis dataKey="name" tick={{ fill: '#71717a', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#71717a', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '8px' }}
                                    itemStyle={{ color: '#bef202' }}
                                />
                                <Area type="monotone" dataKey="vol" stroke="#bef202" strokeWidth={3} fillOpacity={1} fill="url(#colorVol)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="bg-card-bg rounded-2xl p-6 border border-slate-custom flex flex-col">
                    <div className="mb-6">
                        <h2 className="text-xl font-bold uppercase tracking-wide text-white">MUSCLE SPLIT</h2>
                        <p className="text-sm text-slate-custom mt-1">Workout distribution</p>
                    </div>
                    <div id="muscle-split-chart" className="h-[320px] w-full relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={muscleSplitData}
                                    innerRadius={80}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {muscleSplitData.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} strokeWidth={0} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '8px' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center text overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-3xl font-black text-white">53</span>
                            <span className="text-xs text-slate-custom uppercase font-bold">Workouts</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
