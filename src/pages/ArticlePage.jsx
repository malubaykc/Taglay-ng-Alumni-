import { useParams } from "react-router-dom";

export default function ArticlePage() {
  const { id } = useParams();

  return (
    <main className="bg-[#FAF7F2] min-h-screen px-6 py-16">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
        <h2 className="text-3xl font-serif text-emerald-900 mb-4">
          Article #{id}
        </h2>
        <p className="text-gray-700 leading-relaxed">
          This is where the article content will go. Later, this can be
          connected to a database or CMS.
        </p>
      </div>
    </main>
  );
}
