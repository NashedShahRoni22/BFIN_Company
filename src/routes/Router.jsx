import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact";
import About from "../pages/About/About";
import Career from "../pages/Career";
import ComingSoon from "../components/ComingSoon";
import Notfound from "../components/Notfound";
import Products from "../components/Products";
import Blogs from "../pages/Blog/Blogs";
import WhiteLabel from "../pages/WhiteLabel";
import SpecialSoftware from "../pages/SpecialSoftware";
import ECommerceDetails from "../pages/ECommerceDetails/ECommerceDetails";
import Reseller from "../pages/Reseller/Reseller";
import EcommerceGuide from "../pages/EcommerceGuide/EcommerceGuide";
import OurBrands from "../pages/OurBrands/OurBrands";
import BlogDetails from "../pages/Blog/BlogDetails";
import HostingProducts from "../pages/Hosting/HostingProducts";
import DataCenter from "../pages/DataCenter/DataCenter";
import NewWhiteLabel from "../pages/NewWhiteLabel/NewWhiteLabel";
import WhiteLabelCheckout from "../pages/WhiteLabelCheckout/WhiteLabelCheckout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/our-brands",
        element: <OurBrands />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog/:slug",
        element: <BlogDetails />,
      },
      {
        path: "/our-products",
        element: <Products />,
      },
      {
        path: "/hosting-products/:id",
        element: <HostingProducts />,
      },
      {
        path: "/white-label",
        element: <WhiteLabel />,
      },
      {
        path: "/new-white-label",
        element: <NewWhiteLabel />,
      },
      {
        path: "/white-label/checkout",
        element: <WhiteLabelCheckout />,
      },
      {
        path: "/software",
        element: <SpecialSoftware />,
      },
      {
        path: "/bfinit-ecomerce-platform",
        element: <ECommerceDetails />,
      },
      {
        path: "/reseller-program",
        element: <Reseller />,
      },
      {
        path: "/ecommerce-guide",
        element: <EcommerceGuide />,
      },
      {
        path: "/data-center",
        element: <DataCenter />,
      },
    ],
  },
  {
    path: "*",
    element: <Notfound />,
  },
  {
    path: "/coming_soon",
    element: <ComingSoon />,
  },
]);
