import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  // ✅ Auth check
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // back to homepage
  };

  return (
    <header className="bg-[#FAF7F2] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-serif text-emerald-900">
          Bookstopia
        </h1>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium text-emerald-900">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/articles" className="hover:underline">Articles</Link>
          <Link to="/about" className="hover:underline">About</Link>

          {/* ✅ Login / Logout toggle */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="ml-4 bg-red-600 text-white px-4 py-1.5 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="ml-4 bg-emerald-700 text-white px-4 py-1.5 rounded hover:bg-emerald-800 transition"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
