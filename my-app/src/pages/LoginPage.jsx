import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
        alert("Login successful!");
        console.log("TOKEN:", data.token);

        // store token optional
        localStorage.setItem("token", data.token);

        // redirect to homepage
        window.location.href = "/";
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
    <div className="flex justify-center items-center min-h-screen bg-neutral-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-xl rounded-lg p-8 w-[350px] border border-neutral-300"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-neutral-700">
          Login
        </h1>

        <label className="block text-sm text-neutral-600 mb-1">
          Email
        </label>
        <input
          type="email"
          required
          placeholder="Enter email"
          className="border border-neutral-400 p-2 w-full rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block text-sm text-neutral-600 mb-1">
          Password
        </label>
        <input
          type="password"
          required
          placeholder="Enter password"
          className="border border-neutral-400 p-2 w-full rounded mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          disabled={loading}
          type="submit"
          className="bg-amber-700 hover:bg-amber-800 text-white p-2 w-full rounded transition-all"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
