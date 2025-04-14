import {createBrowserRouter} from "react-router-dom";
import { RootLayout } from "./views/RootLayout";
import { Blog } from './views/Blog';
import { About } from './views/About';
import { Description } from "./views/Description";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Blog />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/description",
                element: <Description />,
            },
        ],
    },
]);