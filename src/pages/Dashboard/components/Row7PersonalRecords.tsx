import { DashboardData } from "@/types/dashboard";
import { Button } from "@/components/ui/button";
import { Trophy, Share2 } from "lucide-react";

interface Row7PersonalRecordsProps {
    records: DashboardData['personalRecords'];
}

export function Row7PersonalRecords({ records }: Row7PersonalRecordsProps) {
    return (
        <section id="prs-section" className="px-8 mb-6 w-full">
            <div className="bg-card-bg rounded-2xl border border-slate-custom p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center">
                        <Trophy className="w-5 h-5 text-yellow-500 mr-2" /> Personal Records
                    </h3>
                    <Button variant="link" className="text-volt font-semibold hover:text-white p-0">View History</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {records.map((pr, index) => (
                        <div key={index} className="bg-deep-navy rounded-xl p-5 border border-slate-custom relative group hover:border-volt transition">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-slate-custom font-semibold uppercase text-xs tracking-wider">{pr.exercise}</h4>
                                <Trophy className={`w-4 h-4 ${index === 0 ? 'text-yellow-500' : 'text-slate-600'}`} />
                            </div>
                            <div className="flex items-end space-x-2">
                                <span className="text-3xl font-black text-white">{pr.weight}</span>
                                <span className="text-lg font-bold text-slate-custom mb-1">{pr.unit}</span>
                            </div>
                            <p className="text-slate-custom text-xs mt-2">{pr.date}</p>

                            <Button size="icon" variant="ghost" className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-custom hover:text-white">
                                <Share2 className="w-4 h-4" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
