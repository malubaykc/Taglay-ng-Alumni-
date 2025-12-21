import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/Layout.css";

export default function Layout() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
}
