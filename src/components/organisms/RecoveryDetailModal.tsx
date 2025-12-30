import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Text } from "@/components/atoms/Text";
import { MuscleRecovery } from "@/types/dashboard";
import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-react";

interface RecoveryDetailModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    recoveryData: MuscleRecovery[];
}

export function RecoveryDetailModal({ open, onOpenChange, recoveryData }: RecoveryDetailModalProps) {
    // Sort muscles: fatigued (red) first, then recovering (yellow), then ready (green)
    const sortedRecovery = [...recoveryData].sort((a, b) => {
        const order = { fatigued: 0, recovering: 1, ready: 2 };
        return order[a.status] - order[b.status];
    });

    const hasFatigue = recoveryData.some(r => r.status === 'fatigued');

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="bg-gravl-card border-gravl-border text-white max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-black uppercase italic tracking-wide">Muscle Recovery Status</DialogTitle>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                    {/* Left Column: Body Map Visual */}
                    <div className="flex flex-col items-center justify-center bg-black/20 rounded-2xl p-6 relative min-h-[400px]">
                        {/* Placeholder for Body Map SVG */}
                        <div className="relative w-full h-full flex items-center justify-between opacity-50">
                            {/* Simple abstract representation for now */}
                            <div className="w-[45%] h-full bg-gravl-border/30 rounded-full flex items-center justify-center relative">
                                <span className="text-xs text-gray-500 absolute top-4">FRONT</span>
                                {hasFatigue && <div className="absolute top-[30%] w-16 h-16 bg-gravl-red/40 blur-xl rounded-full animate-pulse" />}
                            </div>
                            <div className="w-[45%] h-full bg-gravl-border/30 rounded-full flex items-center justify-center relative">
                                <span className="text-xs text-gray-500 absolute top-4">BACK</span>
                                {hasFatigue && <div className="absolute top-[40%] w-16 h-16 bg-gravl-red/40 blur-xl rounded-full animate-pulse" />}
                            </div>
                        </div>
                        <Text variant="small" color="muted" className="mt-4">Interactive Body Map Visualization</Text>
                    </div>

                    {/* Right Column: List */}
                    <div className="space-y-4">
                        {hasFatigue && (
                            <div className="bg-gravl-red/10 border border-gravl-red/50 rounded-xl p-4 flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-gravl-red shrink-0 mt-0.5" />
                                <div>
                                    <Text variant="body" className="font-bold text-gravl-red uppercase text-xs tracking-wider mb-1">Recovery Warning</Text>
                                    <Text variant="small" className="text-gravl-red/80">
                                        We recommend you rest until your muscles recover. High injury risk detected for Hamstrings.
                                    </Text>
                                </div>
                            </div>
                        )}

                        <div className="space-y-2">
                            {sortedRecovery.map((muscle) => (
                                <div key={muscle.muscle} className="flex items-center justify-between p-3 bg-black/20 rounded-xl border border-white/5">
                                    <div className="flex items-center gap-3">
                                        {/* Status Dot */}
                                        <div className={cn(
                                            "w-2 h-2 rounded-full",
                                            muscle.status === 'fatigued' && "bg-gravl-red shadow-[0_0_8px_rgba(255,59,48,0.5)]",
                                            muscle.status === 'recovering' && "bg-yellow-400",
                                            muscle.status === 'ready' && "bg-gravl-lime shadow-[0_0_8px_rgba(190,242,2,0.5)]"
                                        )} />
                                        <Text variant="body" className="font-bold">{muscle.muscle}</Text>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                            <div
                                                className={cn(
                                                    "h-full rounded-full transition-all duration-500",
                                                    muscle.status === 'fatigued' && "bg-gravl-red",
                                                    muscle.status === 'recovering' && "bg-yellow-400",
                                                    muscle.status === 'ready' && "bg-gravl-lime"
                                                )}
                                                style={{ width: `${muscle.percentage}%` }}
                                            />
                                        </div>
                                        <Text variant="small" className={cn(
                                            "font-mono font-bold w-10 text-right",
                                            muscle.status === 'fatigued' && "text-gravl-red",
                                            muscle.status === 'recovering' && "text-yellow-400",
                                            muscle.status === 'ready' && "text-gravl-lime"
                                        )}>
                                            {muscle.percentage}%
                                        </Text>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
