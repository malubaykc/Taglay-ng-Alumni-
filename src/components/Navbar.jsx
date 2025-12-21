import { NavLink } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={reactLogo} alt="React logo" />
      </div>

      <nav className="navbar-right">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/articles">Articles</NavLink>
      </nav>
    </header>
  );
}
