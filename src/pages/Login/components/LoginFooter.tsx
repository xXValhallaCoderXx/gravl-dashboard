export function LoginFooter() {
    return (
        <footer id="login-footer" className="mt-8 text-center">
            <div className="flex items-center justify-center space-x-6 text-xs text-gray-400 mb-4">
                <a href="#" className="hover:text-gravl-lime transition-colors">
                    Privacy Policy
                </a>
                <span>•</span>
                <a href="#" className="hover:text-gravl-lime transition-colors">
                    Terms of Service
                </a>
                <span>•</span>
                <a href="#" className="hover:text-gravl-lime transition-colors">
                    Support
                </a>
            </div>
            <p className="text-xs text-gray-500">© 2024 Gravl. All rights reserved.</p>
        </footer>
    );
}
