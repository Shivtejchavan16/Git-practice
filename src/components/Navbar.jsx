import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="p-6 flex gap-5 justify-evenly bg-gray-500 text-white">
      <NavLink className="hover:text-amber-500 transition-colors" to="/login">
        Login
      </NavLink>
      <NavLink
        className="hover:text-amber-500 transition-colors"
        to="/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        className="hover:text-amber-500 transition-colors"
        to="/studentlist"
      >
        Student List
      </NavLink>
      <NavLink
        className="hover:text-amber-500 transition-colors"
        to="/addstudent"
      >
        Add Student
      </NavLink>
    </nav>
  );
};

export default Navbar;
