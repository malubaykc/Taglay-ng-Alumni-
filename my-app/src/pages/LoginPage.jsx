import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (err) {
      setLoading(false);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-neutral-900/90 border border-neutral-800
                   rounded-2xl p-10 shadow-2xl"
      >
        {/* Title */}
        <h1 className="text-4xl font-serif text-center text-amber-400 mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-neutral-400 mb-8">
          Sign in to continue your reading journey
        </p>

        {/* Email */}
        <label className="block text-sm text-neutral-400 mb-1">
          Email
        </label>
        <input
          type="email"
          required
          placeholder="you@example.com"
          className="w-full bg-neutral-950 border border-neutral-700 rounded-lg
                     px-4 py-3 text-neutral-200 placeholder-neutral-500
                     focus:outline-none focus:border-amber-500 transition mb-5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <label className="block text-sm text-neutral-400 mb-1">
          Password
        </label>
        <input
          type="password"
          required
          placeholder="••••••••"
          className="w-full bg-neutral-950 border border-neutral-700 rounded-lg
                     px-4 py-3 text-neutral-200 placeholder-neutral-500
                     focus:outline-none focus:border-amber-500 transition mb-8"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Submit */}
        <button
          disabled={loading}
          className="w-full py-3 rounded-lg bg-amber-600 text-neutral-950
                     font-medium text-lg hover:bg-amber-500 transition
                     disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Register */}
        <p className="text-center text-sm text-neutral-400 mt-6">
          New here?{" "}
          <Link
            to="/register"
            className="text-amber-400 hover:text-amber-300 font-medium"
          >
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
}
