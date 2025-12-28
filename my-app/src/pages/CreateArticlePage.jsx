import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateArticlePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ title, content }),
      });

      setLoading(false);

      if (res.ok) {
        // ✅ AFTER CREATE → REDIRECT TO NOT FOUND
        navigate("/membership");
      } else {
        alert("Failed to create article");
      }
    } catch (err) {
      setLoading(false);
      alert("Server error");
      console.error(err);
    }
  };

  return (
    <main className="relative min-h-screen bg-neutral-950 px-6 py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-neutral-950 to-neutral-950"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-14 shadow-2xl">
          <h1 className="text-5xl font-serif mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Create Article
            </span>
          </h1>

          <p className="text-neutral-400 mb-12 leading-relaxed">
            Share your thoughts, insights, or discoveries with the Bookstopia community.
          </p>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Title */}
            <div>
              <label className="block text-sm text-neutral-400 mb-2">
                Article Title
              </label>
              <input
                type="text"
                placeholder="Enter a compelling title"
                className="w-full bg-neutral-950/70 border border-neutral-700
                           rounded-lg px-4 py-3.5
                           text-neutral-200 placeholder-neutral-500
                           focus:outline-none focus:border-amber-500 transition"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm text-neutral-400 mb-2">
                Article Content
              </label>
              <textarea
                placeholder="Write your article here..."
                className="w-full bg-neutral-950/70 border border-neutral-700
                           rounded-lg px-4 py-4
                           text-neutral-200 placeholder-neutral-500
                           focus:outline-none focus:border-amber-500 transition
                           min-h-[200px] resize-none"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>

            {/* Submit */}
            <button
              disabled={loading}
              className="w-full py-4 rounded-lg
                         bg-amber-600 text-neutral-950
                         font-medium text-lg
                         hover:bg-amber-700 transition
                         disabled:opacity-60"
            >
              {loading ? "Creating..." : "Create Article"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
