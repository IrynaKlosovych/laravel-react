import { RouterProvider } from 'react-router-dom';

import AppRouter from '../router';
import { useStateContext } from '../contexts/StateContext';

export const Root = () => {
    const { token } = useStateContext();
    return <RouterProvider router={AppRouter(token)} />;
};