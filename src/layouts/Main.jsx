import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Topbar from "../shared/Topbar";
import ContactBar from "../shared/ContactBar";
import Bottombar from "../shared/Bottombar";

export default function Main() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className="font-montserrat">
      <ContactBar />
      <Topbar />
      <Outlet />
      <Bottombar />
    </main>
  );
}
