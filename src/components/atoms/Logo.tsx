import { Dumbbell } from "lucide-react";

export function Logo() {
    return (
        <div className="w-20 h-20 rounded-2xl bg-gravl-lime flex items-center justify-center shadow-[0_0_20px_rgba(190,242,2,0.3)] mb-6">
            <Dumbbell className="text-gravl-bg w-8 h-8" strokeWidth={3} />
        </div>
    );
}
