export interface UserStats {
    streak: number;
    totalWorkouts: number;
    hoursTrained: number;
    volumeLoad: number;
}

export interface WorkoutSession {
    id: string;
    title: string;
    date: string; // ISO string or relative date like "Today"
    duration: string;
    volumeLoad: number;
    status: 'completed' | 'skipped' | 'scheduled';
    tags?: string[];
    isPr?: boolean;
}

export interface UpcomingWorkout {
    id: string;
    title: string;
    subtitle: string;
    tags: {
        exercises: number;
        sets: number;
        intensity: 'Low' | 'Medium' | 'High';
    };
    durationParam: number; // minutes
}

export interface MuscleRecovery {
    muscle: string;
    percentage: number;
    status: 'ready' | 'recovering' | 'fatigued'; // status could map to colors (green, yellow, red)
}

export interface NutritionStats {
    calories: {
        current: number;
        target: number; // Derived from progress bar, or explicit
        delta: number; // e.g., -125
    };
    protein: {
        current: number;
        delta: number;
    };
    carbs: {
        current: number;
        delta: number;
    };
    fats: {
        current: number;
        delta: number;
    };
}

export interface PersonalRecord {
    exercise: string;
    weight: number;
    unit: 'KG' | 'LBS';
    date: string;
}

// Aggregated Dashboard Data
export interface DashboardData {
    user: {
        name: string;
        avatarUrl: string;
        welcomeMessage?: string;
    };
    stats: UserStats;
    trends: {
        workouts: { value: string; label: string; trend: number }; // trend %
        volume: { value: string; label: string; trend: number };
        calories: { value: string; label: string; trend: number };
        sets: { value: string; label: string; trend: number };
    };
    nextWorkout: UpcomingWorkout;
    recovery: MuscleRecovery[];
    strengthScore: number; // For the gauge chart
    nutrition: NutritionStats;
    recentWorkouts: WorkoutSession[];
    personalRecords: PersonalRecord[];
    strengthDetails: {
        muscle: string;
        level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Elite';
        score: number; // 0-200
    }[];
    strengthHistory: { date: string; value: number }[];
    exerciseLibrary: {
        name: string;
        muscle: string;
        type: 'Compound' | 'Isolation';
        imageUrl: string;
    }[];
    communityPosts: {
        user: { name: string; avatarUrl: string };
        timeAgo: string;
        content: string;
        likes: number;
        comments: number;
        shares: number;
    }[];
    activeGoals: {
        id: string;
        title: string;
        deadline: string;
        progress: number;
        status: 'IN PROGRESS' | 'COMPLETED';
        type: 'strength' | 'consistency' | 'habit'; // Maps to icons
    }[];
    weeklyVolume: { name: string; value: number }[]; // For Weekly Performance chart
}
