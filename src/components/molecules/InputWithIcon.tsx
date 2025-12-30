
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";
import { Text } from "@/components/atoms/Text";

interface InputWithIconProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    icon: LucideIcon;
    rightElement?: React.ReactNode;
}

export function InputWithIcon({ id, label, icon: Icon, rightElement, className, ...props }: InputWithIconProps) {
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="block mb-2">
                <Text variant="label" color="muted">{label}</Text>
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <Icon className="text-gray-400 w-4 h-4" />
                </div>
                <Input
                    id={id}
                    className={cn(
                        "pl-12 py-6 bg-gravl-bg border-gravl-border text-foreground placeholder:text-gray-500 rounded-xl focus-visible:ring-gravl-lime focus-visible:border-gravl-lime",
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
