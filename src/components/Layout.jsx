import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Navbar toggleSidebar={() => setSidebarOpen(prev => !prev)} isSidebarOpen={sidebarOpen} />
      <Outlet context={{ sidebarOpen }} />
    </>
  );
}

export default Layout;