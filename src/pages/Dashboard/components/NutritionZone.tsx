import { NutritionStats } from "@/types/dashboard";
import { Button } from "@/components/ui/button";
import { Flame, Beef, Wheat, Droplet } from "lucide-react";

interface NutritionZoneProps {
    nutrition: NutritionStats;
}

export function NutritionZone({ nutrition }: NutritionZoneProps) {
    // Helper to calculate percentage width safely
    const getWidth = (current: number, target: number) => Math.min(Math.max((current / target) * 100, 0), 100);

    // Determining colors based on delta/status - simplified logic for UI
    const getDeltaColor = (delta: number) => delta < 0 ? "text-green-400 bg-green-400/10" : "text-orange-400 bg-orange-400/10";

    return (
        <section id="nutrition-overview" className="px-8 pb-8 w-full">
            <div className="bg-card-bg rounded-2xl p-6 border border-slate-custom">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-xl font-bold uppercase tracking-wide text-white">NUTRITION OVERVIEW</h2>
                        <p className="text-sm text-slate-custom mt-1">Daily macronutrient tracking</p>
                    </div>
                    <Button className="px-6 py-2.5 rounded-xl bg-zinc-900 text-sm font-bold hover:bg-zinc-800 transition-all text-white">
                        LOG MEAL
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Calories */}
                    <div className="p-6 rounded-xl bg-zinc-900 border border-transparent hover:border-zinc-700 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-red-500 bg-opacity-20 flex items-center justify-center">
                                <Flame className="text-red-500 w-6 h-6" />
                            </div>
                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${getDeltaColor(nutrition.calories.delta)}`}>
                                {nutrition.calories.delta > 0 ? '+' : ''}{nutrition.calories.delta}
                            </span>
                        </div>
                        <div className="text-4xl font-black text-white mb-2">{nutrition.calories.current.toLocaleString()}</div>
                        <div className="text-sm font-medium text-slate-custom uppercase">Calories</div>
                        <div className="mt-4 h-2 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500" style={{ width: `${getWidth(nutrition.calories.current, nutrition.calories.target)}%` }}></div>
                        </div>
                    </div>

                    {/* Protein */}
                    <div className="p-6 rounded-xl bg-zinc-900 border border-transparent hover:border-zinc-700 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-500 bg-opacity-20 flex items-center justify-center">
                                <Beef className="text-blue-500 w-6 h-6" />
                            </div>
                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${getDeltaColor(-nutrition.protein.delta)}`}> {/* Inverted logic for protein usually positive is good? keeping simple */}
                                {nutrition.protein.delta > 0 ? '+' : ''}{nutrition.protein.delta}g
                            </span>
                        </div>
                        <div className="text-4xl font-black text-white mb-2">{nutrition.protein.current}g</div>
                        <div className="text-sm font-medium text-slate-custom uppercase">Protein</div>
                        <div className="mt-4 h-2 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500" style={{ width: '104%' }}></div>
                        </div>
                    </div>

                    {/* Carbs */}
                    <div className="p-6 rounded-xl bg-zinc-900 border border-transparent hover:border-zinc-700 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-yellow-500 bg-opacity-20 flex items-center justify-center">
                                <Wheat className="text-yellow-500 w-6 h-6" />
                            </div>
                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${getDeltaColor(nutrition.carbs.delta)}`}>
                                {nutrition.carbs.delta > 0 ? '+' : ''}{nutrition.carbs.delta}g
                            </span>
                        </div>
                        <div className="text-4xl font-black text-white mb-2">{nutrition.carbs.current}g</div>
                        <div className="text-sm font-medium text-slate-custom uppercase">Carbs</div>
                        <div className="mt-4 h-2 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-500" style={{ width: '86%' }}></div>
                        </div>
                    </div>

                    {/* Fats */}
                    <div className="p-6 rounded-xl bg-zinc-900 border border-transparent hover:border-zinc-700 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-green-500 bg-opacity-20 flex items-center justify-center">
                                <Droplet className="text-green-500 w-6 h-6" />
                            </div>
                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${getDeltaColor(nutrition.fats.delta)}`}>
                                {nutrition.fats.delta > 0 ? '+' : ''}{nutrition.fats.delta}g
                            </span>
                        </div>
                        <div className="text-4xl font-black text-white mb-2">{nutrition.fats.current}g</div>
                        <div className="text-sm font-medium text-slate-custom uppercase">Fats</div>
                        <div className="mt-4 h-2 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500" style={{ width: '45%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
