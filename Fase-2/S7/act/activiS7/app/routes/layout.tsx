import { NavLink, Outlet } from "react-router";
import React from "react";
import CustomNavLink from "~/components/navLink";
import "../css/layout.css";

export function meta() {
  return [
    { title: "Layout de una pagina" },
    { name: "description", content: "Layout de una web con react router" },
  ];
}

const Layout: React.FC = () => {
  return (
    <>
      <header className="layout-header">
        <h1 className="layout-title">Blog</h1>
        <nav>
          <CustomNavLink to="/" label="Home" />
          <CustomNavLink to="/courses" label="Courses" />
        </nav>
      </header>
      <main className="layout-main">
        <Outlet />
      </main>
    </>
  )
}

export default Layout;