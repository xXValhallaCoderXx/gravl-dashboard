
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

interface InputWithIconProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    icon: LucideIcon;
    rightElement?: React.ReactNode;
}

export function InputWithIcon({ id, label, icon: Icon, rightElement, className, ...props }: InputWithIconProps) {
    return (
        <div className="space-y-2">
            <Label htmlFor={id} className="block text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">
                {label}
            </Label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <Icon className="text-muted-foreground w-4 h-4" />
                </div>
                <Input
                    id={id}
                    className={cn(
                        "pl-12 py-6 bg-gravl-bg border-gravl-border text-foreground placeholder:text-muted-foreground rounded-xl focus-visible:ring-gravl-lime focus-visible:border-gravl-lime",
                        rightElement && "pr-12",
                        className
                    )}
                    {...props}
                />
                {rightElement && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                        {rightElement}
                    </div>
                )}
            </div>
        </div>
    );
}
