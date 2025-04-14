import { RootLayout } from './views/RootLayout';
import { Home } from './views/Home';
import { Movies } from './views/Movies/Movies';
import {createBrowserRouter} from "react-router-dom";
import { MovieDetail } from './views/MoviesDetail/MovieDetail';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/movies",
                element: <Movies/>
            },
            {
                path: "/movies/:id",
                element: <MovieDetail/>
            }
        ]
    }
]);