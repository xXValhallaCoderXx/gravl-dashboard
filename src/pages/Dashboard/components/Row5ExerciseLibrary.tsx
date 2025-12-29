import { DashboardData } from "@/types/dashboard";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Row5ExerciseLibraryProps {
    exercises: DashboardData['exerciseLibrary'];
}

export function Row5ExerciseLibrary({ exercises }: Row5ExerciseLibraryProps) {
    return (
        <section id="exercise-library-section" className="px-8 mb-6 w-full">
            <div className="bg-card-bg rounded-2xl border border-slate-custom p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Exercise Library</h3>
                    <Button variant="link" className="text-volt text-sm font-semibold hover:text-white p-0 flex items-center">
                        Browse All <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {exercises.map((exercise, index) => (
                        <div key={index} className="bg-deep-navy rounded-xl border border-slate-custom overflow-hidden hover:border-volt transition cursor-pointer group">
                            <div className="h-32 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    src={exercise.imageUrl}
                                    alt={exercise.name}
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold mb-1 text-white group-hover:text-volt transition">{exercise.name}</h4>
                                <p className="text-slate-custom text-xs">{exercise.muscle} • {exercise.type}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
