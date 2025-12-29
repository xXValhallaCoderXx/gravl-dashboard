import { DashboardData } from "@/types/dashboard";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";

interface Row4WeeklyPerformanceProps {
    weeklyVolume: DashboardData['weeklyVolume'];
}

export function Row4WeeklyPerformance({ weeklyVolume }: Row4WeeklyPerformanceProps) {
    return (
        <section id="weekly-performance-section" className="px-8 mb-6 w-full">
            <div className="bg-gravl-card rounded-2xl border border-gravl-border p-6">
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
        </section>
    );
}
