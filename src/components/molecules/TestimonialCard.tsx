import { Star } from "lucide-react";
import { Text } from "@/components/atoms/Text";

interface TestimonialCardProps {
    avatarUrl: string;
    name: string;
    role: string;
    quote: string;
}

export function TestimonialCard({ avatarUrl, name, role, quote }: TestimonialCardProps) {
    return (
        <div className="mt-6 bg-gravl-card rounded-2xl p-6 border border-gravl-border">
            <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gravl-lime flex-shrink-0">
                    <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
                </div>
                <div>
                    <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="text-gravl-lime w-3 h-3 fill-current" />
                        ))}
                    </div>
                    <Text variant="small" className="mb-2">"{quote}"</Text>
                    <div className="flex items-center gap-1">
                        <Text variant="small" className="font-bold">{name}</Text>
                        <Text variant="small" color="muted">• {role}</Text>
                    </div>
                </div>
            </div>
        </div>
    );
}
