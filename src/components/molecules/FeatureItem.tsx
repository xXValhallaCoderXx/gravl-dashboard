import { LucideIcon } from "lucide-react";

interface FeatureItemProps {
    icon: LucideIcon;
    label: string;
}

export function FeatureItem({ icon: Icon, label }: FeatureItemProps) {
    return (
        <div className="text-center p-4 bg-gravl-card rounded-xl border border-gravl-border">
            <div className="w-10 h-10 rounded-lg bg-gravl-lime flex items-center justify-center mx-auto mb-2 shadow-sm">
                <Icon className="text-gravl-bg w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-foreground">{label}</p>
        </div>
    );
}
