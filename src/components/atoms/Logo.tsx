import { Dumbbell } from "lucide-react";

export function Logo() {
    return (
        <div className="w-20 h-20 rounded-2xl gradient-volt flex items-center justify-center glow-volt mb-6">
            <Dumbbell className="text-deep-focus w-8 h-8" strokeWidth={3} />
        </div>
    );
}
