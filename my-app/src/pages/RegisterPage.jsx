import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://https://taglay-ng-alumni.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        alert("Account created! Please login.");
        window.location.href = "/login";
      } else {
        alert(data.message);
      }
    } catch (err) {
      setLoading(false);
      alert("Server error. Try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen relative bg-neutral-950 flex items-center justify-center px-6">
      {/* Background gradient (same as HomePage sections) */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-neutral-950 to-neutral-950"></div>

      {/* Card */}
      <form
        onSubmit={handleRegister}
        className="relative z-10 w-full max-w-md
                   bg-neutral-900/80 backdrop-blur-sm
                   border border-neutral-800
                   rounded-2xl p-12
                   shadow-2xl"
      >
        {/* Title */}
        <h1 className="text-4xl font-bold mb-3">
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Create Account
          </span>
        </h1>

        <p className="text-neutral-400 mb-12 leading-relaxed">
          Become a member of Bookstopia and unlock the full library experience.
        </p>

        {/* Name */}
        <label className="block text-sm text-neutral-400 mb-2">
          Name
        </label>
        <input
          type="text"
          required
          placeholder="Your full name"
          className="w-full bg-neutral-950/70 border border-neutral-700
                     rounded-lg px-4 py-3.5
                     text-neutral-200 placeholder-neutral-500
                     focus:outline-none focus:border-amber-500 transition mb-8"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email */}
        <label className="block text-sm text-neutral-400 mb-2">
          Email
        </label>
        <input
          type="email"
          required
          placeholder="you@example.com"
          className="w-full bg-neutral-950/70 border border-neutral-700
                     rounded-lg px-4 py-3.5
                     text-neutral-200 placeholder-neutral-500
                     focus:outline-none focus:border-amber-500 transition mb-8"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <label className="block text-sm text-neutral-400 mb-2">
          Password
        </label>
        <input
          type="password"
          required
          placeholder="••••••••"
          className="w-full bg-neutral-950/70 border border-neutral-700
                     rounded-lg px-4 py-3.5
                     text-neutral-200 placeholder-neutral-500
                     focus:outline-none focus:border-amber-500 transition mb-10"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Submit */}
        <button
          disabled={loading}
          type="submit"
          className="w-full py-4 rounded-lg
                     bg-amber-600 text-neutral-950
                     font-medium text-lg
                     hover:bg-amber-700 transition
                     disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Register"}
        </button>
      </form>
    </div>
  );
}
