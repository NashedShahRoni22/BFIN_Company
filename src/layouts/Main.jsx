import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Topbar from "../shared/Topbar";
import Bottombar from "../shared/Bottombar";

export default function Main() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className="font-roboto">
      {/* <ContactBar /> */}
      <Topbar />
      <Outlet />
      <Bottombar />
    </main>
  );
}
