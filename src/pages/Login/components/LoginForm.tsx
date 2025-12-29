import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SocialLoginButtons } from "./SocialLoginButtons";
import { Eye, Lock, Mail } from "lucide-react";

export function LoginForm() {
    return (
        <div id="login-card" className="bg-card-bg rounded-3xl p-8 border border-slate-custom">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-black uppercase tracking-tight mb-2">
                    WELCOME TO <span className="text-volt">GRAVL</span>
                </h1>
                <p className="text-slate-custom text-sm">Sign in to track your fitness journey</p>
            </div>

            <form className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email" className="block text-xs font-bold uppercase tracking-wide text-slate-custom mb-2">
                        Email Address
                    </Label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <Mail className="text-slate-custom w-4 h-4" />
                        </div>
                        <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            className="pl-12 py-6 bg-zinc-900 border-slate-custom text-white placeholder:text-zinc-500 rounded-xl focus-visible:ring-volt focus-visible:border-volt"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password" className="block text-xs font-bold uppercase tracking-wide text-slate-custom mb-2">
                        Password
                    </Label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <Lock className="text-slate-custom w-4 h-4" />
                        </div>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="pl-12 pr-12 py-6 bg-zinc-900 border-slate-custom text-white placeholder:text-zinc-500 rounded-xl focus-visible:ring-volt focus-visible:border-volt"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-custom hover:text-volt transition-colors cursor-pointer"
                        >
                            <Eye className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="remember"
                            className="border-slate-custom bg-zinc-900 data-[state=checked]:bg-volt data-[state=checked]:text-black"
                        />
                        <Label htmlFor="remember" className="text-slate-custom cursor-pointer font-normal">
                            Remember me
                        </Label>
                    </div>
                    <a href="#" className="text-volt font-bold hover:underline">
                        Forgot Password?
                    </a>
                </div>

                <Button
                    type="submit"
                    className="w-full py-6 rounded-xl gradient-volt text-deep-focus font-black text-sm uppercase tracking-wide glow-volt hover:opacity-90 transition-all cursor-pointer"
                >
                    Sign In
                </Button>
            </form>

            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <Separator className="bg-slate-custom" />
                </div>
                <div className="relative flex justify-center text-xs">
                    <span className="px-4 bg-card-bg text-slate-custom uppercase font-bold">Or continue with</span>
                </div>
            </div>

            <SocialLoginButtons />

            <div className="mt-8 text-center">
                <p className="text-xs text-slate-custom">
                    Don't have an account?{" "}
                    <a href="#" className="text-volt font-bold hover:underline">
                        Create Account
                    </a>
                </p>
            </div>
        </div>
    );
}
