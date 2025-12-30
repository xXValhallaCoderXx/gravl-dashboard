import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Text } from "@/components/atoms/Text";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StrengthDetailModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    strengthScore: number;
    history: { date: string; value: number }[];
    breakdown: { muscle: string; level: string; score: number }[];
}

export function StrengthDetailModal({ open, onOpenChange, strengthScore, history, breakdown }: StrengthDetailModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="bg-gravl-card border-gravl-border text-white max-w-2xl w-[90vw] max-h-[90vh] overflow-y-auto">
                <DialogHeader className="flex flex-col items-center mb-6">
                    {/* Score Ring Mini */}
                    <div className="w-20 h-20 rounded-full border-4 border-gravl-blue/20 flex items-center justify-center mb-2 relative">
                        <div className="absolute inset-0 rounded-full border-4 border-gravl-blue border-t-transparent animate-spin-slow rotate-45" />
                        <span className="text-2xl font-black text-white">{strengthScore}</span>
                    </div>
                    <DialogTitle className="text-xl font-bold">Strength Score Details</DialogTitle>
                    <div className="bg-gravl-blue/10 text-gravl-blue px-3 py-0.5 rounded-full text-xs font-black uppercase tracking-wide mt-2">
                        Elite
                    </div>
                </DialogHeader>

                {/* History Section */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4 px-2">
                        <Text variant="small" className="font-bold text-gray-400">Strength History</Text>
                        <div className="flex bg-black/40 rounded-lg p-0.5">
                            {['Month', '6 Months', 'Year', 'All'].map((t, i) => (
                                <button key={t} className={cn("px-3 py-1 rounded-md text-[10px] font-bold transition-all", i === 3 ? "bg-gravl-blue text-white shadow" : "text-gray-500 hover:text-gray-300")}>
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="h-[200px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={history}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                                <XAxis dataKey="date" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                                <YAxis stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} domain={['dataMin - 10', 'dataMax + 10']} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px', fontSize: '12px' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Line type="monotone" dataKey="value" stroke="#4C6EF5" strokeWidth={3} dot={{ r: 4, fill: "#4C6EF5", strokeWidth: 2, stroke: "#fff" }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Breakdown Section */}
                <div>
                    <Text variant="small" className="font-bold text-gray-400 mb-3 px-2">Strength per Muscle</Text>
                    <div className="space-y-2">
                        {breakdown.map((item) => (
                            <div key={item.muscle} className="group flex items-center justify-between p-4 bg-black/20 rounded-xl border border-white/5 hover:border-gravl-blue/30 transition-colors cursor-pointer">
                                <div className="flex items-center gap-4">
                                    {/* Placeholder Icon */}
                                    <div className="w-10 h-10 bg-gravl-blue/10 rounded-lg flex items-center justify-center">
                                        {/* Dynamic icon could go here based on muscle name */}
                                        <div className="w-5 h-5 bg-gravl-blue/40 rounded-sm" />
                                    </div>
                                    <div>
                                        <Text variant="body" className="font-bold">{item.muscle}</Text>
                                        <Text variant="label" className="text-gray-500">{item.level}</Text>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full border border-gravl-blue/20 flex items-center justify-center">
                                        <span className="text-sm font-black text-gravl-blue">{item.score}</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gravl-blue transition-colors" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </DialogContent>
        </Dialog>
    );
}
