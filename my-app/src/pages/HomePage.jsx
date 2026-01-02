import React, { useState } from "react";
import { BookOpen, ChevronRight, Library, Star, TrendingUp, Clock } from "lucide-react";

export default function BookstopiaLibrary() {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  const stats = [
    { icon: <Library className="w-6 h-6" />, value: "27,126", label: "Total Books" },
    { icon: <Star className="w-6 h-6" />, value: "4.8", label: "Avg Rating" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "15,234", label: "Active Readers" },
    { icon: <Clock className="w-6 h-6" />, value: "24/7", label: "Open Access" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200">

      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <h2 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
              <span className="block text-white">The Grand</span>
              <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Digital Library
              </span>
            </h2>

            <p className="text-lg text-neutral-400 max-w-xl mb-12">
              Explore over <span className="text-amber-400 font-medium">27,000+</span> classics
              and modern masterpieces curated for curious minds.
            </p>

            <div className="flex gap-6">
              <button
                onClick={() => navigateTo("/articles")}
                className="px-8 py-4 bg-amber-600 text-neutral-950 rounded-lg font-medium
                           hover:bg-amber-500 transition flex items-center gap-2"
              >
                Explore Collection
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => navigateTo("/register")}
                className="px-8 py-4 border border-neutral-700 rounded-lg text-neutral-200
                           hover:border-amber-600 hover:text-amber-400 transition"
              >
                Get Library Card
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-6"
              >
                <div className="text-amber-500 mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-neutral-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-neutral-800 mx-auto max-w-6xl"></div>

      {/* Categories Preview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h3 className="text-4xl font-bold text-white mb-4">
            Browse by Category
          </h3>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Discover books across fiction, philosophy, science, and more.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["📚 Fiction", "📜 History", "🌌 Sci-Fi", "🧠 Philosophy", "🔬 Science", "✍️ Poetry"].map(
            (cat, i) => (
              <div
                key={i}
                onClick={() => navigateTo("/articles")}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-8
                           hover:border-amber-600 transition cursor-pointer"
              >
                <div className="text-4xl mb-4">{cat.split(" ")[0]}</div>
                <h4 className="text-xl font-semibold text-white">
                  {cat.split(" ")[1]}
                </h4>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
