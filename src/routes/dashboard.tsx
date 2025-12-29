import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/pages/Dashboard/components/DashboardLayout";
import { ActionZone } from "@/pages/Dashboard/components/ActionZone";
import { AnalysisZone } from "@/pages/Dashboard/components/AnalysisZone";
import { HistoryZone } from "@/pages/Dashboard/components/HistoryZone";
import { DataStoryZone } from "@/pages/Dashboard/components/DataStoryZone";
import { RecentActivityTable } from "@/pages/Dashboard/components/RecentActivityTable";
import { StrengthProgressionZone } from "@/pages/Dashboard/components/StrengthProgressionZone";
import { PerformanceMetricsZone } from "@/pages/Dashboard/components/PerformanceMetricsZone";
import { NutritionZone } from "@/pages/Dashboard/components/NutritionZone";
import { DashboardData } from "@/types/dashboard";

export const Route = createFileRoute("/dashboard")({
    component: Dashboard,
});

function Dashboard() {
    // Mock Data simulating RTK Query response
    const data: DashboardData = {
        user: {
            name: "Nate", // Assuming context
            avatarUrl: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
        },
        stats: {
            streak: 12,
            totalWorkouts: 53,
            hoursTrained: 36,
            volumeLoad: 335000,
        },
        nextWorkout: {
            id: "wk-1",
            title: "Pull Day A",
            subtitle: "Back & Biceps • Last performed 4 days ago",
            tags: {
                exercises: 8,
                sets: 24,
                intensity: "High",
            },
            durationParam: 60,
        },
        recovery: [
            { muscle: "BACK", percentage: 100, status: "ready" },
            { muscle: "BICEPS", percentage: 95, status: "ready" },
            { muscle: "CHEST", percentage: 42, status: "fatigued" },
            { muscle: "TRICEPS", percentage: 68, status: "recovering" },
        ],
        nutrition: {
            calories: { current: 2847, target: 3000, delta: -125 },
            protein: { current: 187, delta: 12 },
            carbs: { current: 216, delta: -34 },
            fats: { current: 65, delta: 5 }, // derived from logic
        },
        recentWorkouts: [
            {
                id: "h1",
                title: "Push Day - Upper Body Power",
                date: "22 DEC",
                duration: "1h 23m",
                volumeLoad: 87400,
                status: "completed",
            },
            {
                id: "h2",
                title: "Leg Day - Hypertrophy Focus",
                date: "21 DEC",
                duration: "1h 45m",
                volumeLoad: 102100,
                status: "completed",
            },
            {
                id: "h3",
                title: "Pull Day - Back & Biceps",
                date: "20 DEC",
                duration: "1h 35m",
                volumeLoad: 94800,
                status: "completed",
            },
        ],
        personalRecords: [
            { exercise: "DEADLIFT", weight: 180, unit: "KG", date: "Dec 15, 2024" },
            { exercise: "SQUAT", weight: 160, unit: "KG", date: "Dec 10, 2024" },
            { exercise: "BENCH PRESS", weight: 120, unit: "KG", date: "Dec 8, 2024" },
        ],
    };

    return (
        <DashboardLayout data={data}>
            {/* Action Zone - Next Workout & Recovery */}
            <ActionZone nextWorkout={data.nextWorkout} recovery={data.recovery} />

            {/* Analysis Zone - Muscle Focus & PRs */}
            <AnalysisZone personalRecords={data.personalRecords} />

            {/* History Zone - Recent History & Badges */}
            <HistoryZone history={data.recentWorkouts} />

            {/* Data Story - Volume & Split Charts */}
            <DataStoryZone />

            {/* Recent Activity - Detailed Table */}
            <RecentActivityTable activities={data.recentWorkouts} />

            {/* Strength Progression - Strength & Duration Charts */}
            <StrengthProgressionZone />

            {/* Performance Metrics - Heart Rate & Recovery Detail */}
            <PerformanceMetricsZone recovery={data.recovery} />

            {/* Nutrition Overview */}
            <NutritionZone nutrition={data.nutrition} />
        </DashboardLayout>
    );
}
