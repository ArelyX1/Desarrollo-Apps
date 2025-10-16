import React from "react";

import { NavLink } from "react-router-dom";

interface NavLinkProps {
  to: string;
  label: string;
}

const CustomNavLink: React.FC<NavLinkProps> = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "layout-link active" : "layout-link"
      }
    >
      {label}
    </NavLink>
  );
};

export default CustomNavLink;