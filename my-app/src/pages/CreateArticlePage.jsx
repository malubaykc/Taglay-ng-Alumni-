import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CreateArticlePage() {
  const { id } = useParams(); // if present = edit mode

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  // 🔹 FETCH ARTICLE IF EDIT MODE
  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetch(`http://localhost:5000/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title || "");
        setCategory(data.category || "");
        setContent(data.content || "");
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  // 🔹 CREATE OR UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("You must be logged in");
      return;
    }

    const url = id
      ? `http://localhost:5000/api/articles/${id}`
      : "http://localhost:5000/api/articles";

    const method = id ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, category, content }),
    });

    if (res.ok) {
      alert(id ? "Article updated" : "Article created");
      window.location.href = "/articles";
    } else {
      alert("Operation failed");
    }
  };

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="flex justify-center mt-20">
      <form onSubmit={handleSubmit} className="border p-8 rounded w-[400px]">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {id ? "Edit Article" : "Create Article"}
        </h1>

        <input
          className="border p-2 w-full mb-4"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          className="border p-2 w-full mb-4"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <textarea
          className="border p-2 w-full mb-4"
          rows={5}
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button className="bg-amber-600 text-white p-2 w-full rounded">
          {id ? "Update Article" : "Create Article"}
        </button>
      </form>
    </div>
  );
}
