import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    beforeLoad: () => {
        throw redirect({
            to: '/dashboard',
        })
    },
    component: () => <div>Hello world!</div>
})
