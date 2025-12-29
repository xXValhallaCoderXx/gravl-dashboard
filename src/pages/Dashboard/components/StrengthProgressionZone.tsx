import { TrendingUp, Clock } from "lucide-react";

export function StrengthProgressionZone() {
    return (
        <section id="strength-progression" className="px-8 pb-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card-bg rounded-2xl p-6 border border-slate-custom">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold uppercase tracking-wide text-white">STRENGTH PROGRESSION</h3>
                        <TrendingUp className="text-volt w-5 h-5" />
                    </div>
                    <div id="strength-chart" className="h-[300px] w-full bg-zinc-900/50 rounded-xl flex items-center justify-center border border-zinc-800 border-dashed">
                        <span className="text-slate-custom text-sm font-medium">Strength Progression Chart Area</span>
                    </div>
                </div>
                <div className="bg-card-bg rounded-2xl p-6 border border-slate-custom">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold uppercase tracking-wide text-white">WORKOUT DURATION</h3>
                        <Clock className="text-volt w-5 h-5" />
                    </div>
                    <div id="duration-chart" className="h-[300px] w-full bg-zinc-900/50 rounded-xl flex items-center justify-center border border-zinc-800 border-dashed">
                        <span className="text-slate-custom text-sm font-medium">Duration Chart Area</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
