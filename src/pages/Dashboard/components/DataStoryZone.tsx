import { Button } from "@/components/ui/button";

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
                    {/* Replicating the height from HTML */}
                    <div id="volume-chart" className="h-[320px] w-full bg-zinc-900/50 rounded-xl flex items-center justify-center border border-zinc-800 border-dashed">
                        <span className="text-slate-custom text-sm font-medium">Volume Progression Chart Area</span>
                    </div>
                </div>
                <div className="bg-card-bg rounded-2xl p-6 border border-slate-custom">
                    <div className="mb-6">
                        <h2 className="text-xl font-bold uppercase tracking-wide text-white">MUSCLE SPLIT</h2>
                        <p className="text-sm text-slate-custom mt-1">Workout distribution</p>
                    </div>
                    <div id="muscle-split-chart" className="h-[320px] w-full bg-zinc-900/50 rounded-xl flex items-center justify-center border border-zinc-800 border-dashed">
                        <span className="text-slate-custom text-sm font-medium">Muscle Split Chart Area</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
