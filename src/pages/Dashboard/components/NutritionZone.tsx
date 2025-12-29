import { NutritionStats } from "@/types/dashboard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface NutritionZoneProps {
    nutrition: NutritionStats;
}

export function NutritionZone({ nutrition }: NutritionZoneProps) {
    // Calculate percentages for progress bars
    // Assuming targets: Protein 200g, Carbs 300g, Fats 70g for the demo visuals
    const proteinTarget = 200;
    const carbsTarget = 300;
    const fatsTarget = 70;

    const proteinPct = Math.min((nutrition.protein.current / proteinTarget) * 100, 100);
    const carbsPct = Math.min((nutrition.carbs.current / carbsTarget) * 100, 100);
    const fatsPct = Math.min((nutrition.fats.current / fatsTarget) * 100, 100);

    return (
        <section id="nutrition-section" className="px-8 mb-6 w-full">
            <div className="bg-gravl-card rounded-2xl border border-gravl-border p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Nutrition Tracker</h3>
                    <Button size="sm" className="bg-volt text-deep-focus font-bold hover:bg-volt/90">
                        <Plus className="w-4 h-4 mr-1" /> Log Meal
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Calories Summary */}
                    <div className="lg:col-span-1 bg-gravl-bg/50 rounded-xl p-5 border border-gravl-border flex flex-col justify-center items-center relative overflow-hidden">
                        <div className="relative z-10 text-center">
                            <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">Calories Remaining</p>
                            <h2 className="text-4xl font-black text-white mb-2">{nutrition.calories.target - nutrition.calories.current}</h2>
                            <p className="text-sm text-gray-500">Target: {nutrition.calories.target}</p>
                        </div>
                        {/* Background progress ring simulation or simpler visual */}
                        <div className="absolute top-0 left-0 w-2 h-full bg-volt"></div>
                    </div>

                    {/* Macros */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Protein */}
                        <div className="bg-gravl-bg/50 rounded-xl p-4 border border-gravl-border">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-white font-bold">Protein</span>
                                <span className="text-volt font-mono text-sm">{nutrition.protein.current}g</span>
                            </div>
                            <div className="w-full bg-zinc-800 rounded-full h-2 mb-2">
                                <div className="bg-volt h-2 rounded-full" style={{ width: `${proteinPct}%` }}></div>
                            </div>
                            <p className="text-xs text-gray-400 text-right">{proteinTarget - nutrition.protein.current}g left</p>
                        </div>

                        {/* Carbs */}
                        <div className="bg-gravl-bg/50 rounded-xl p-4 border border-gravl-border">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-white font-bold">Carbs</span>
                                <span className="text-blue-500 font-mono text-sm">{nutrition.carbs.current}g</span>
                            </div>
                            <div className="w-full bg-zinc-800 rounded-full h-2 mb-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${carbsPct}%` }}></div>
                            </div>
                            <p className="text-xs text-gray-400 text-right">{carbsTarget - nutrition.carbs.current}g left</p>
                        </div>

                        {/* Fats */}
                        <div className="bg-gravl-bg/50 rounded-xl p-4 border border-gravl-border">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-white font-bold">Fats</span>
                                <span className="text-yellow-500 font-mono text-sm">{nutrition.fats.current}g</span>
                            </div>
                            <div className="w-full bg-zinc-800 rounded-full h-2 mb-2">
                                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${fatsPct}%` }}></div>
                            </div>
                            <p className="text-xs text-gray-400 text-right">{fatsTarget - nutrition.fats.current}g left</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
