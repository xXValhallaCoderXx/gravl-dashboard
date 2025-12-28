import { cn } from "@/lib/utils";

interface SocialIconProps {
    className?: string;
    children: React.ReactNode;
}

export function SocialIcon({ className, children }: SocialIconProps) {
    return <div className={cn("w-5 h-5 flex items-center justify-center", className)}>{children}</div>;
}
