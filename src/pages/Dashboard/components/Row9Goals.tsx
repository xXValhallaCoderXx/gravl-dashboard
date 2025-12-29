import { DashboardData } from "@/types/dashboard";
import { Button } from "@/components/ui/button";
import { Plus, Target } from "lucide-react";

interface Row9GoalsProps {
    goals: DashboardData['activeGoals'];
}

export function Row9Goals({ goals }: Row9GoalsProps) {
    const getStatusColor = (status: string) => {
        if (status === "COMPLETED") return "bg-volt text-deep-focus";
        if (status === "IN PROGRESS") return "bg-blue-500/20 text-blue-400";
        return "bg-slate-700 text-slate-300";
    };

    return (
        <section id="goals-section" className="px-8 mb-8 w-full">
            <div className="bg-card-bg rounded-2xl border border-slate-custom p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center">
                        <Target className="w-5 h-5 text-red-500 mr-2" /> Active Goals
                    </h3>
                    <Button size="sm" className="bg-volt text-deep-focus font-bold hover:bg-volt/90">
                        <Plus className="w-4 h-4 mr-1" /> Add Goal
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {goals.map((goal, index) => (
                        <div key={index} className="bg-deep-navy rounded-xl p-5 border border-slate-custom relative">
                            <div className="flex justify-between items-start mb-4">
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${getStatusColor(goal.status)}`}>
                                    {goal.status}
                                </span>
                                <span className="text-slate-custom text-xs">{goal.deadline}</span>
                            </div>

                            <h4 className="font-bold text-lg text-white mb-2">{goal.title}</h4>

                            <div className="flex items-center justify-between text-xs text-slate-custom mb-2">
                                <span>Progress</span>
                                <span className="text-white font-mono">{goal.progress}%</span>
                            </div>

                            <div className="w-full bg-zinc-800 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full ${goal.progress >= 100 ? 'bg-volt' : 'bg-blue-500'}`}
                                    style={{ width: `${goal.progress}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
