import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-4 flex gap-4 bg-gray-800 text-white">
                <div className="font-bold">Gravl</div>
                <Link to="/dashboard" className="[&.active]:font-bold hover:text-gray-300">
                    Dashboard
                </Link>
                <Link to="/login" className="[&.active]:font-bold hover:text-gray-300">
                    Login
                </Link>
            </div>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})
