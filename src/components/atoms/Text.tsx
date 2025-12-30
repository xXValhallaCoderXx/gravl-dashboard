
import { cn } from "@/lib/utils";
import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: "body" | "small" | "label" | "lead";
    color?: "default" | "muted" | "lime" | "blue" | "red";
    children: React.ReactNode;
}

export function Text({
    variant = "body",
    color = "default",
    className,
    children,
    ...props
}: TextProps) {
    const styles = {
        body: "text-sm font-normal",
        small: "text-xs font-medium",
        label: "text-[10px] font-bold uppercase tracking-wider", // Matches Dashboard label style
        lead: "text-lg font-medium",
    };

    const colors = {
        default: "text-white", // High contrast default
        muted: "text-gray-400", // Standard muted for dark mode
        lime: "text-gravl-lime",
        blue: "text-gravl-blue",
        red: "text-gravl-red",
    };

    return (
        <p
            className={cn(styles[variant], colors[color], className)}
            {...props}
        >
            {children}
        </p>
    );
}
