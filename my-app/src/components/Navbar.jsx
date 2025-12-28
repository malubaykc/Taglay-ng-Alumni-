import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="bg-neutral-950 border-b border-amber-600/30">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-3xl">📚</span>
          <h1 className="text-3xl font-serif text-amber-400 tracking-wide">
            Bookstopia
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-10 text-[15px] font-medium text-neutral-300">
          <Link to="/" className="hover:text-amber-400 transition">
            Home
          </Link>
          <Link to="/articles" className="hover:text-amber-400 transition">
            Articles
          </Link>
          <Link to="/about" className="hover:text-amber-400 transition">
            About
          </Link>

          {/* Auth actions */}
          {isLoggedIn ? (
            <div className="flex items-center gap-4 ml-6">
              {/* Create */}
              <button
                onClick={() => navigate("/articles/create")}
                title="Create Article"
                className="w-10 h-10 rounded-full bg-amber-600 text-neutral-950 text-xl
                           hover:bg-amber-500 transition flex items-center justify-center"
              >
                +
              </button>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-full border border-amber-600 text-amber-400
                           hover:bg-amber-600 hover:text-neutral-950 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="ml-6 px-6 py-2 rounded-full bg-amber-600 text-neutral-950
                         hover:bg-amber-500 transition"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
