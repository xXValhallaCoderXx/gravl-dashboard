import { FeatureItem } from "../molecules/FeatureItem";
import { ChartLine, Flame, Trophy } from "lucide-react";

export function FeaturesSection() {
    return (
        <div id="features-section" className="mt-8 grid grid-cols-3 gap-4">
            <FeatureItem icon={ChartLine} label="Track Progress" />
            <FeatureItem icon={Flame} label="Build Streaks" />
            <FeatureItem icon={Trophy} label="Earn Rewards" />
        </div>
    );
}
