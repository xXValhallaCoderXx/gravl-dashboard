import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
    component: Dashboard,
})

function Dashboard() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                    <h2 className="text-gray-500 font-medium">Total Revenue</h2>
                    <p className="text-3xl font-bold mt-2">$45,231.89</p>
                    <span className="text-green-500 text-sm font-medium">+20.1% from last month</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                    <h2 className="text-gray-500 font-medium">Subscriptions</h2>
                    <p className="text-3xl font-bold mt-2">+2350</p>
                    <span className="text-green-500 text-sm font-medium">+180.1% from last month</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                    <h2 className="text-gray-500 font-medium">Active Now</h2>
                    <p className="text-3xl font-bold mt-2">+573</p>
                    <span className="text-blue-500 text-sm font-medium">+201 since last hour</span>
                </div>
            </div>
        </div>
    )
}
