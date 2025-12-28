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
        navigate("/membership"); // or any route that maps to NotFoundPage
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
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Create Article</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Article title"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Article content"
          className="w-full border p-2 rounded h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button
          disabled={loading}
          className="bg-emerald-700 text-white px-6 py-2 rounded hover:bg-emerald-800"
        >
          {loading ? "Creating..." : "Create Article"}
        </button>
      </form>
    </div>
  );
}
