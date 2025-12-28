import { LucideIcon } from "lucide-react";

interface FeatureItemProps {
    icon: LucideIcon;
    label: string;
}

export function FeatureItem({ icon: Icon, label }: FeatureItemProps) {
    return (
        <div className="text-center p-4 bg-card-bg rounded-xl border border-slate-custom">
            <div className="w-10 h-10 rounded-lg gradient-volt flex items-center justify-center glow-volt mx-auto mb-2">
                <Icon className="text-deep-focus w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-white">{label}</p>
        </div>
    );
}
