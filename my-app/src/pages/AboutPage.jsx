export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-neutral-950 px-6 py-24">
      {/* Background gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-neutral-950 to-neutral-950"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-14 shadow-2xl">
          <h2 className="text-5xl font-serif mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              About Bookstopia
            </span>
          </h2>

          <p className="text-lg text-neutral-400 leading-relaxed">
            Bookstopia is a digital archive of books across a wide range of genres.
            Readers can explore curated collections, discover new titles, and contribute
            by adding and organizing content freely.
          </p>

          <p className="text-lg text-neutral-400 leading-relaxed mt-6">
            Designed as a modern library experience, Bookstopia blends thoughtful design
            with powerful tools to create a calm, inspiring space for readers and writers alike.
          </p>
        </div>
      </div>
    </main>
  );
}
