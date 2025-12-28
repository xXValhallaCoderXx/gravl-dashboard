import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
    component: Login,
})

function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h1>
                <form className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" className="mt-1 block w-full border border-gray-300 rounded p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" className="mt-1 block w-full border border-gray-300 rounded p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="••••••••" />
                    </div>
                    <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}
