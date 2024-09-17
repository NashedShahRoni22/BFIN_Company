import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Career from "../pages/Career";
import ComingSoon from "../components/ComingSoon";
import Notfound from "../components/Notfound";
import Products from "../components/Products";
import ManagedServer from "../pages/Hosting/ManagedServer";

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
            {
                path:"/our-products",
                element: <Products/>
            },
            {
                path:"/fully-managed-dedicated-server",
                element: <ManagedServer/>
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