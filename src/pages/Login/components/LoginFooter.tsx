export function LoginFooter() {
    return (
        <footer id="login-footer" className="mt-8 text-center">
            <div className="flex items-center justify-center space-x-6 text-xs text-slate-custom mb-4">
                <a href="#" className="hover:text-volt transition-colors">
                    Privacy Policy
                </a>
                <span>•</span>
                <a href="#" className="hover:text-volt transition-colors">
                    Terms of Service
                </a>
                <span>•</span>
                <a href="#" className="hover:text-volt transition-colors">
                    Support
                </a>
            </div>
            <p className="text-xs text-slate-custom">© 2024 Gravl. All rights reserved.</p>
        </footer>
    );
}
