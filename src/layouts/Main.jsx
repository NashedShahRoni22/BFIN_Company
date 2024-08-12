import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../shared/Topbar";
import ContactBar from "../shared/ContactBar";
import Bottombar from "../shared/Bottombar";

export default function Main() {
  return (
    <main>
      <ContactBar />
      <Topbar />
      <Outlet />
      <Bottombar/>
    </main>
  );
}
