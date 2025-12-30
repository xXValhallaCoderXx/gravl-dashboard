import { Text } from "@/components/atoms/Text";

export function LoginFooter() {
    return (
        <footer id="login-footer" className="mt-8 text-center">
            <div className="flex items-center justify-center space-x-6 mb-4">
                <a href="#" className="hover:text-gravl-lime transition-colors">
                    <Text variant="small" color="muted">Privacy Policy</Text>
                </a>
                <Text variant="small" color="muted">•</Text>
                <a href="#" className="hover:text-gravl-lime transition-colors">
                    <Text variant="small" color="muted">Terms of Service</Text>
                </a>
                <Text variant="small" color="muted">•</Text>
                <a href="#" className="hover:text-gravl-lime transition-colors">
                    <Text variant="small" color="muted">Support</Text>
                </a>
            </div>
            <Text variant="small" color="muted">© 2024 Gravl. All rights reserved.</Text>
        </footer>
    );
}
