import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout, GuestLayout } from './components'
import { useStateContext } from "./contexts/StateContext";

import { Login, Settings, CreatePage, HelloPage, Signup, NotFound } from "./views/index.js"

const AppRouter = () => {
    const { token } = useStateContext()

    const router = createBrowserRouter([
        {
            path: '/',
            element: token ? <DefaultLayout /> : <GuestLayout />,
            children: token ? [
                {
                    path: '/settings',
                    element: <Settings />
                },
                {
                    path: '/create-page',
                    element: <CreatePage />
                }
            ] : [
                {
                    path: '/',
                    element: <HelloPage />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/signup',
                    element: <Signup />
                }
            ]
        },
        {
            path: "*",
            element: <NotFound />
        }
    ])
    return router
}

export default AppRouter;