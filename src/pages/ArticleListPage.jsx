import React from 'react';
import { BookOpen, Search, User, Star, Clock, ArrowLeft } from 'lucide-react';

export default function ArticleListPage() {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  const articles = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', rating: 4.5, year: 1925 },
    { id: 2, title: '1984', author: 'George Orwell', category: 'Fiction', rating: 4.8, year: 1949 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', rating: 4.7, year: 1960 },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', category: 'Romance', rating: 4.6, year: 1813 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', category: 'Fiction', rating: 4.3, year: 1951 },
    { id: 6, title: 'Animal Farm', author: 'George Orwell', category: 'Satire', rating: 4.5, year: 1945 },
    { id: 7, title: 'Lord of the Flies', author: 'William Golding', category: 'Fiction', rating: 4.4, year: 1954 },
    { id: 8, title: 'Brave New World', author: 'Aldous Huxley', category: 'Sci-Fi', rating: 4.6, year: 1932 },
  ];

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigateTo('/')}>
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Bookstopia</span>
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => navigateTo('/articles')} className="text-amber-500 font-medium">Articles</button>
              <button onClick={() => navigateTo('/about')} className="text-neutral-300 hover:text-amber-500 transition-colors font-medium">About</button>
              <button onClick={() => navigateTo('/membership')} className="text-neutral-300 hover:text-amber-500 transition-colors font-medium">Membership</button>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="px-5 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-lg transition-all shadow-lg shadow-amber-900/30 flex items-center space-x-2 font-medium">
                <User className="w-4 h-4" />
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <button onClick={() => navigateTo('/')} className="flex items-center space-x-2 text-neutral-400 hover:text-amber-500 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </button>

        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Book Collection</h1>
          <p className="text-xl text-neutral-400">Browse our curated selection of timeless literature</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-lg">
            <Search className="w-5 h-5 text-neutral-400" />
            <input 
              type="text" 
              placeholder="Search for books, authors, or categories..." 
              className="flex-1 bg-transparent text-white outline-none placeholder-neutral-500"
            />
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((book) => (
            <div 
              key={book.id}
              onClick={() => navigateTo(`/article/${book.id}`)}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-amber-600 transition-all cursor-pointer group"
            >
              <div className="w-full h-48 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg mb-4 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{book.title}</h3>
              <p className="text-neutral-400 mb-4">{book.author}</p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-amber-950/50 text-amber-500 rounded-full text-sm">{book.category}</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-white font-medium">{book.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-neutral-500">© 2025 Bookstopia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}