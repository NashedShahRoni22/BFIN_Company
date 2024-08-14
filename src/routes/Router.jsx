import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

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
        ]
    }
])