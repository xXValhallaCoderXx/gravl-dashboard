import { DashboardData } from "@/types/dashboard";

export function useMockData(): DashboardData {
    return {
        user: {
            name: "Marcus",
            avatarUrl: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
            welcomeMessage: "Ready to dominate today's session? Your performance metrics are looking strong."
        },
        stats: {
            streak: 12,
            totalWorkouts: 145,
            hoursTrained: 180,
            volumeLoad: 450000
        },
        trends: {
            workouts: { value: "4h 15min", label: "This week", trend: 5 },
            volume: { value: "13,689 kg", label: "Total lifted", trend: 12 },
            calories: { value: "1,056", label: "Burned", trend: 8 },
            sets: { value: "53", label: "Completed", trend: 3 }
        },
        nextWorkout: {
            id: "nw-1",
            title: "Quads, Hamstrings, Calves, Abductors",
            subtitle: "Leg Day A",
            tags: {
                exercises: 5,
                sets: 18,
                intensity: 'High'
            },
            durationParam: 63
        },
        recovery: [
            { muscle: "Hamstrings", percentage: 45, status: 'fatigued' },
            { muscle: "Quads", percentage: 60, status: 'recovering' },
            { muscle: "Glutes", percentage: 90, status: 'ready' },
            { muscle: "Calves", percentage: 85, status: 'ready' }
        ],
        strengthScore: 178,
        nutrition: {
            calories: { current: 2487, target: 2800, delta: -313 },
            protein: { current: 186, delta: -14 },
            carbs: { current: 264, delta: -36 },
            fats: { current: 65, delta: -5 }
        },
        recentWorkouts: [
            { id: "rw-1", title: "Pull Day A", date: "Mon, Dec 29", duration: "1h", volumeLoad: 2847, status: 'completed' },
            { id: "rw-2", title: "Leg Day B", date: "Sat, Dec 27", duration: "1h 15m", volumeLoad: 3156, status: 'completed' },
            { id: "rw-3", title: "Push Day A", date: "Thu, Dec 25", duration: "55m", volumeLoad: 2634, status: 'completed' },
            { id: "rw-4", title: "Pull Day B", date: "Tue, Dec 23", duration: "1h 5m", volumeLoad: 2912, status: 'completed' }
        ],
        personalRecords: [
            { exercise: "Bench Press", weight: 135, unit: "KG", date: "Dec 28, 2024" },
            { exercise: "Deadlift", weight: 180, unit: "KG", date: "Dec 21, 2024" },
            { exercise: "Squat", weight: 160, unit: "KG", date: "Dec 15, 2024" }
        ],
        strengthHistory: [
            { date: "Jan", value: 135 },
            { date: "Feb", value: 140 },
            { date: "Mar", value: 142 },
            { date: "Apr", value: 148 },
            { date: "May", value: 155 },
            { date: "Jun", value: 160 },
            { date: "Jul", value: 165 },
            { date: "Aug", value: 170 },
            { date: "Sep", value: 172 },
            { date: "Oct", value: 175 },
            { date: "Nov", value: 176 },
            { date: "Dec", value: 178 }
        ],
        strengthDetails: [
            { muscle: "Chest", level: "Advanced", score: 179 },
            { muscle: "Back", level: "Elite", score: 195 },
            { muscle: "Legs", level: "Intermediate", score: 142 },
            { muscle: "Shoulders", level: "Advanced", score: 168 }
        ],
        exerciseLibrary: [
            { name: "Bench Press", muscle: "Chest", type: "Compound", imageUrl: "https://storage.googleapis.com/uxpilot-auth.appspot.com/e340547706-0092342f6911c564fd31.png" },
            { name: "Deadlift", muscle: "Back", type: "Compound", imageUrl: "https://storage.googleapis.com/uxpilot-auth.appspot.com/29220f0184-7d1c364fcf84148900d4.png" },
            { name: "Squat", muscle: "Legs", type: "Compound", imageUrl: "https://storage.googleapis.com/uxpilot-auth.appspot.com/670aeb1e30-d4241405abd5bc8df580.png" },
            { name: "Shoulder Press", muscle: "Shoulders", type: "Compound", imageUrl: "https://storage.googleapis.com/uxpilot-auth.appspot.com/de76c0907b-0eca1d9b522e361abfc7.png" }
        ],
        communityPosts: [
            { user: { name: "Alex Martinez", avatarUrl: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" }, timeAgo: "2 hours ago", content: "Just hit a new PR on bench press! 140kg for 1 rep. Feeling unstoppable 💪🔥", likes: 47, comments: 12, shares: 5 },
            { user: { name: "Sarah Chen", avatarUrl: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" }, timeAgo: "5 hours ago", content: "Completed my first marathon training cycle with Gravl. The structured progression made all the difference! 🏃‍♀️", likes: 89, comments: 23, shares: 8 }
        ],
        activeGoals: [
            { id: "g1", title: "Reach 150kg Bench Press", deadline: "March 2025", progress: 90, status: "IN PROGRESS", type: "strength" },
            { id: "g2", title: "Train 5 Days Per Week", deadline: "12-week commitment", progress: 67, status: "IN PROGRESS", type: "consistency" },
            { id: "g3", title: "Burn 2000 Cal/Day", deadline: "30-day challenge", progress: 43, status: "IN PROGRESS", type: "habit" }
        ],
        weeklyVolume: [
            { name: "Mon", value: 4000 },
            { name: "Tue", value: 3000 },
            { name: "Wed", value: 5000 },
            { name: "Thu", value: 2000 },
            { name: "Fri", value: 4500 },
            { name: "Sat", value: 6000 },
            { name: "Sun", value: 1000 }
        ]
    };
}
