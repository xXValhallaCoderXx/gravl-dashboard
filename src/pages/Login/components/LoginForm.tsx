import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SocialLoginButtons } from "./SocialLoginButtons";
import { Eye, Lock, Mail } from "lucide-react";
import { InputWithIcon } from "@/components/molecules/InputWithIcon";

export function LoginForm() {
    return (
        <div id="login-card" className="bg-gravl-card rounded-3xl p-8 border border-gravl-border">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-black uppercase tracking-tight mb-2">
                    WELCOME TO <span className="text-gravl-lime">GRAVL</span>
                </h1>
                <p className="text-gray-400 text-sm">Sign in to track your fitness journey</p>
            </div>

            <form className="space-y-4">
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
                            className="text-muted-foreground hover:text-gravl-lime transition-colors cursor-pointer"
                        >
                            <Eye className="w-4 h-4" />
                        </button>
                    }
                />

                <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="remember"
                            className="border-gravl-border bg-gravl-bg data-[state=checked]:bg-gravl-lime data-[state=checked]:text-black"
                        />
                        <Label htmlFor="remember" className="text-muted-foreground cursor-pointer font-normal">
                            Remember me
                        </Label>
                    </div>
                    <a href="#" className="text-gravl-lime font-bold hover:underline">
                        Forgot Password?
                    </a>
                </div>

                <Button
                    type="submit"
                    className="w-full py-6 rounded-xl bg-gravl-lime text-gravl-bg font-black text-sm uppercase tracking-wide shadow-[0_0_20px_rgba(190,242,2,0.3)] hover:opacity-90 transition-all cursor-pointer"
                >
                    Sign In
                </Button>
            </form>

            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <Separator className="bg-gravl-border" />
                </div>
                <div className="relative flex justify-center text-xs">
                    <span className="px-4 bg-gravl-card text-muted-foreground uppercase font-bold">Or continue with</span>
                </div>
            </div>

            <SocialLoginButtons />

            <div className="mt-8 text-center">
                <p className="text-xs text-muted-foreground">
                    Don't have an account?{" "}
                    <a href="#" className="text-gravl-lime font-bold hover:underline">
                        Create Account
                    </a>
                </p>
            </div>
        </div>
    );
}
