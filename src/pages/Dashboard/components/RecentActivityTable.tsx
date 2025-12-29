import { WorkoutSession } from "@/types/dashboard";
import { Button } from "@/components/ui/button";

interface RecentActivityTableProps {
    activities: WorkoutSession[];
}

export function RecentActivityTable({ activities }: RecentActivityTableProps) {
    return (
        <section id="recent-activity" className="px-8 pb-8 w-full">
            <div className="bg-card-bg rounded-2xl p-6 border border-slate-custom">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold uppercase tracking-wide text-white">RECENT WORKOUTS</h2>
                    <Button variant="link" className="text-volt text-sm font-bold hover:underline p-0 h-auto">
                        VIEW ALL
                    </Button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-custom">
                                <th className="text-left py-3 px-4 text-xs font-bold text-slate-custom uppercase tracking-wide">Date</th>
                                <th className="text-left py-3 px-4 text-xs font-bold text-slate-custom uppercase tracking-wide">Workout</th>
                                <th className="text-left py-3 px-4 text-xs font-bold text-slate-custom uppercase tracking-wide">Duration</th>
                                <th className="text-right py-3 px-4 text-xs font-bold text-slate-custom uppercase tracking-wide">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activities.map((activity, index) => (
                                <tr key={index} className="border-b border-zinc-800 hover:bg-zinc-900 transition-all last:border-0">
                                    <td className="py-4 px-4 text-sm font-medium text-white">{activity.date}</td>
                                    <td className="py-4 px-4">
                                        <div className="font-bold text-sm text-white">{activity.title}</div>
                                        <div className="text-xs text-slate-custom mt-1">
                                            {/* Mocking the time/vol details since it wasn't in the main interface originally, assuming derived or static for now */}
                                            6:45 AM • {(activity.volumeLoad / 1000).toFixed(1)}K lbs
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-sm text-white">{activity.duration}</td>
                                    <td className="py-4 px-4 text-right">
                                        {activity.isPr ? (
                                            <span className="text-xs font-bold text-volt bg-volt/10 px-3 py-1 rounded-full">NEW PR</span>
                                        ) : (
                                            <span className="text-xs font-bold text-white bg-zinc-800 px-3 py-1 rounded-full">COMPLETE</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
