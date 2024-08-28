import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Career from "../pages/Career";
import ComingSoon from "../components/ComingSoon";
import Notfound from "../components/Notfound";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Main/>,
        children:[
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/career",
                element: <Career/>
            },
        ]
    },
    {
        path:"/coming_soon",
        element: <ComingSoon/>
    },
    {
        path:"*",
        element: <Notfound/>
    },
])