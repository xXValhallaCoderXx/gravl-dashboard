import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { SocialLoginButtons } from "./SocialLoginButtons";
import { Eye, Lock, Mail } from "lucide-react";
import { InputWithIcon } from "@/components/molecules/InputWithIcon";
import { Title } from "@/components/atoms/Title";
import { Text } from "@/components/atoms/Text";
import { useNavigate } from "@tanstack/react-router";

export function LoginForm() {
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        navigate({ to: "/dashboard" });
    };

    return (
        <div id="login-card" className="bg-gravl-card rounded-3xl p-8 border border-gravl-border">
            <div className="text-center mb-8">
                <Title variant="h1" className="mb-2">
                    WELCOME TO <span className="text-gravl-lime">GRAVL</span>
                </Title>
                <Text variant="body" color="muted">Sign in to track your fitness journey</Text>
            </div>

            <form className="space-y-4" onSubmit={handleLogin}>
                <InputWithIcon
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="your.email@example.com"
                    icon={Mail}
                />

                <InputWithIcon
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    icon={Lock}
                    rightElement={
                        <button
                            type="button"
                            className="text-gray-400 hover:text-gravl-lime transition-colors cursor-pointer"
                        >
                            <Eye className="w-4 h-4" />
                        </button>
                    }
                />

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="remember"
                            className="border-gravl-border bg-gravl-bg data-[state=checked]:bg-gravl-lime data-[state=checked]:text-black"
                        />
                        <label htmlFor="remember" className="cursor-pointer">
                            <Text variant="body" color="muted">Remember me</Text>
                        </label>
                    </div>
                    <a href="#" className="text-gravl-lime text-xs font-bold hover:underline">
                        Forgot Password?
                    </a>
                </div>

                <Button
                    type="submit"
                    variant="gravl-primary"
                    size="xl"
                    className="w-full"
                >
                    Sign In
                </Button>
            </form>

            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <Separator className="bg-gravl-border" />
                </div>
                <div className="relative flex justify-center">
                    <span className="px-4 bg-gravl-card">
                        <Text variant="label" color="muted">Or continue with</Text>
                    </span>
                </div>
            </div>

            <SocialLoginButtons />

            <div className="mt-8 text-center">
                <Text variant="small" color="muted">
                    Don't have an account?{" "}
                    <a href="#" className="text-gravl-lime font-bold hover:underline">
                        Create Account
                    </a>
                </Text>
            </div>
        </div>
    );
}
