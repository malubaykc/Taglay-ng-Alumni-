import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-serif text-emerald-900">
          Bookstopia
        </h1>

        <nav className="flex gap-6 text-sm font-medium text-emerald-900">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/articles" className="hover:underline">Articles</Link>
        </nav>
      </div>
    </header>
  );
}
