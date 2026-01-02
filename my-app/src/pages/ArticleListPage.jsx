import React, { useEffect, useState } from 'react';
import { BookOpen, Search, User, Star, ArrowLeft } from 'lucide-react';

export default function ArticleListPage() {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  // 🔹 Backend articles
  const [articles, setArticles] = useState([]);

  const token = localStorage.getItem("token");

  // 🔹 Fetch articles
  useEffect(() => {
    fetch("https://taglay-ng-alumni.onrender.com/api/articles")
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  // 🔹 Delete article
  const deleteArticle = async (id) => {
    if (!token) {
      alert("Login required");
      return;
    }

    const confirmDelete = window.confirm("Delete this article?");
    if (!confirmDelete) return;

    const res = await fetch(`http://localhost:5000/api/articles/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      setArticles(articles.filter(a => a._id !== id));
    } else {
      alert("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => navigateTo('/')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Bookstopia
                </span>
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => navigateTo('/articles')} className="text-amber-500 font-medium">
                Articles
              </button>
              <button onClick={() => navigateTo('/about')} className="text-neutral-300 hover:text-amber-500">
                About
              </button>
              <button onClick={() => navigateTo('/membership')} className="text-neutral-300 hover:text-amber-500">
                Membership
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigateTo('/login')}
                className="px-5 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg shadow-lg flex items-center space-x-2 font-medium"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <button
          onClick={() => navigateTo('/')}
          className="flex items-center space-x-2 text-neutral-400 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </button>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article._id}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-amber-600 transition-all cursor-pointer"
            >
              {/* Card click */}
              <div
                onClick={() => navigateTo(`/article/${article._id}`)}
                className="w-full h-48 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg mb-4 flex items-center justify-center"
              >
                <BookOpen className="w-16 h-16 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {article.title}
              </h3>

              <p className="text-neutral-400 mb-4">
                {article.author?.name || "Unknown"}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-amber-500">{article.category}</span>

                {/* 🔹 CRUD ACTIONS */}
                {token && (
                  <div className="flex space-x-3">
                    {/* EDIT */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateTo(`/articles/edit/${article._id}`);
                      }}
                      className="text-blue-400 text-sm hover:underline"
                    >
                      Edit
                    </button>

                    {/* DELETE */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteArticle(article._id);
                      }}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
