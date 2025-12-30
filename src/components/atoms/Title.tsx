
import { cn } from "@/lib/utils";
import React from "react";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    variant?: "h1" | "h2" | "h3";
    color?: "default" | "muted" | "lime" | "blue";
    children: React.ReactNode;
}

export function Title({
    variant = "h1",
    color = "default",
    className,
    children,
    ...props
}: TitleProps) {
    const Component = variant;

    const styles = {
        h1: "text-4xl font-black uppercase tracking-tight",
        h2: "text-2xl font-bold tracking-tight",
        h3: "text-lg font-bold",
    };

    const colors = {
        default: "text-white",
        muted: "text-gray-400",
        lime: "text-gravl-lime",
        blue: "text-gravl-blue",
    };

    return (
        <Component
            className={cn(styles[variant], colors[color], className)}
            {...props}
        >
            {children}
        </Component>
    );
}
