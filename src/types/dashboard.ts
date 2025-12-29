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
    };
    stats: UserStats;
    nextWorkout: UpcomingWorkout;
    recovery: MuscleRecovery[];
    nutrition: NutritionStats;
    recentWorkouts: WorkoutSession[];
    personalRecords: PersonalRecord[];
}
