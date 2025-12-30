import { ActionZone } from "@/pages/Dashboard/components/ActionZone";
import { DashboardHeader } from "@/pages/Dashboard/components/DashboardHeader";
import { DashboardSidebar } from "@/pages/Dashboard/components/DashboardSidebar";
import { WelcomeSection } from "@/pages/Dashboard/components/WelcomeSection";
import { TrendsZone } from "@/pages/Dashboard/components/TrendsZone";
import { Row3DeepDive } from "@/pages/Dashboard/components/Row3DeepDive";
import { Row4WeeklyPerformance } from "@/pages/Dashboard/components/Row4WeeklyPerformance";
import { Row5ExerciseLibrary } from "@/pages/Dashboard/components/Row5ExerciseLibrary";
import { NutritionZone } from "@/pages/Dashboard/components/NutritionZone";
import { Row7PersonalRecords } from "@/pages/Dashboard/components/Row7PersonalRecords";
import { Row8Community } from "@/pages/Dashboard/components/Row8Community";
import { Row9Goals } from "@/pages/Dashboard/components/Row9Goals";
import { createFileRoute } from "@tanstack/react-router";
import { useMockData } from "@/hooks/useMockData";

export const Route = createFileRoute("/dashboard")({
    component: Dashboard,
});

function Dashboard() {
    const data = useMockData();

    return (
        <div className="flex h-screen bg-gravl-bg text-white overflow-hidden font-sans">
            <DashboardSidebar />

            <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-gravl-bg relative">
                <DashboardHeader user={data.user} stats={data.stats} />

                <div id="dashboard-content" className="flex-1 overflow-y-auto custom-scrollbar pb-8">
                    <WelcomeSection user={data.user} />
                    <ActionZone
                        nextWorkout={data.nextWorkout}
                        recovery={data.recovery}
                        strengthScore={data.strengthScore}
                        strengthHistory={data.strengthHistory}
                        strengthDetails={data.strengthDetails}
                    />
                    <TrendsZone trends={data.trends} />
                    <Row3DeepDive
                        recentWorkouts={data.recentWorkouts}
                        strengthDetails={data.strengthDetails}
                    />
                    <Row4WeeklyPerformance weeklyVolume={data.weeklyVolume} />
                    <Row5ExerciseLibrary exercises={data.exerciseLibrary} />
                    <NutritionZone nutrition={data.nutrition} />
                    <Row7PersonalRecords records={data.personalRecords} />
                    <Row8Community posts={data.communityPosts} />
                    <Row9Goals goals={data.activeGoals} />
                </div>
            </main>
        </div>
    );
}
