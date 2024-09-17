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
import VirtualServer from "../pages/Hosting/VirtualServer";
import SelfManagedServer from "../pages/Hosting/SelfManagedServer";
import PureHosting from "../pages/Hosting/PureHosting";
import SelftPureHosting from "../pages/Hosting/SelftPureHosting";
import VaultStorage from "../pages/Hosting/VaultStorage";

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
            {
                path:"/fully-managed-virtual-dedicated-server",
                element: <VirtualServer/>
            },
            {
                path:"/self-managed-dedicated-server",
                element: <SelfManagedServer/>
            },
            {
                path:"/fully-managed-pure-web-hosting",
                element: <PureHosting/>
            },
            {
                path:"/self-managed-pure-web-hosting",
                element: <SelftPureHosting/>
            },
            {
                path:"/vault-cloud-storage",
                element: <VaultStorage/>
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