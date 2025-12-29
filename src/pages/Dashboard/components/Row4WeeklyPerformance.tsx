import { DashboardData } from "@/types/dashboard";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

interface Row4WeeklyPerformanceProps {
    weeklyVolume: DashboardData['weeklyVolume'];
}

const muscleFocusData = [
    { subject: 'Legs', A: 120, fullMark: 150 },
    { subject: 'Arms', A: 98, fullMark: 150 },
    { subject: 'Chest', A: 86, fullMark: 150 },
    { subject: 'Back', A: 99, fullMark: 150 },
    { subject: 'Shoulders', A: 85, fullMark: 150 },
    { subject: 'Core', A: 65, fullMark: 150 },
];

export function Row4WeeklyPerformance({ weeklyVolume }: Row4WeeklyPerformanceProps) {
    return (
        <section id="weekly-performance-section" className="px-8 mb-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Weekly Volume Bar Chart */}
                <div className="lg:col-span-2 bg-gravl-card rounded-2xl border border-gravl-border p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">Weekly Performance</h3>
                            <p className="text-gray-400 text-sm">Your training volume over the past 7 days</p>
                        </div>
                        <div className="flex space-x-2">
                            <Button className="bg-volt text-deep-focus font-semibold text-sm hover:bg-volt/90 h-8 px-4 rounded-lg">Week</Button>
                            <Button variant="outline" className="bg-transparent text-gray-400 border-white/10 hover:border-white h-8 px-4 rounded-lg">Month</Button>
                            <Button variant="outline" className="bg-transparent text-gray-400 border-white/10 hover:border-white h-8 px-4 rounded-lg">Year</Button>
                        </div>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={weeklyVolume}>
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#71717a', fontSize: 12 }}
                                    dy={10}
                                />
                                <Tooltip
                                    cursor={{ fill: '#27272a' }}
                                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '8px', color: '#fff' }}
                                    itemStyle={{ color: '#bef202' }}
                                />
                                <Bar
                                    dataKey="value"
                                    fill="#4c6ef5"
                                    radius={[4, 4, 0, 0]}
                                    barSize={40}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Muscle Focus Radar Chart */}
                <div className="lg:col-span-1 bg-gravl-card rounded-2xl border border-gravl-border p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">Muscle Focus</h3>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                            <MoreVertical className="w-5 h-5" />
                        </Button>
                    </div>
                    <div className="flex-1 min-h-[300px] w-full relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={muscleFocusData}>
                                <PolarGrid stroke="#3f3f46" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                                <Radar
                                    name="Focus"
                                    dataKey="A"
                                    stroke="#ccff00"
                                    strokeWidth={2}
                                    fill="#ccff00"
                                    fillOpacity={0.3}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                        {/* Custom Legend or Indicator if needed */}
                        <div className="absolute bottom-0 right-0">
                            {/* Placeholder for potential legend */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
