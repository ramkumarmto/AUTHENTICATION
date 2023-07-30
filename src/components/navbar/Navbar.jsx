
import "./navbar.css";
import {  NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

 function Navbar() {
  return (
    <>
      <div className="navbar_container">
        <ul>
          <li  style={{ fontSize: 24, marginLeft : 20}}>
            <NavLink to="/" style={{ color: "tomato" }}>The Ram Kumar</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active-class" : null)}
              to="/">All Courses</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active-class" : null)}
              to="/purchased-courses">Purchased Courses</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active-class" : null)}
              to="/admin">Admin</NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-class" : null)}
              to="/signin"
            >
              SignIn
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-class" : null)}
              to="/signup"
            >
              Signup
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
export default Navbar
