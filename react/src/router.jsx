import { createBrowserRouter } from 'react-router-dom'

import DefaultLayout from './components/DefaultLayout.jsx'
import GuestLayout from './components/GuestLayout.jsx'

import Login from "./views/guest/Login.jsx"
import Signup from "./views/guest/Signup.jsx"

import Settings from './views/default/Settings.jsx'


import NotFound from "./views/NotFound.jsx"
import CreatePage from './views/default/CreatePage.jsx'



const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/settings',
                element: <Settings />
            },
            {
                path: '/create-page',
                element: <CreatePage />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,

    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router;