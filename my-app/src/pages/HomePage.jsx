import { Link } from "react-router-dom";
import React, 

{ useState } from 'react';
import { BookOpen, Search, User, ChevronRight, Library, Star, TrendingUp, Clock } from 'lucide-react';

export default function BookstopiaLibrary() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const navigateTo = (path) => {
    window.location.href = path;
  };

  const categories = [
    {
      id: 'fiction',
      number: 'I',
      title: 'Fiction & Prose',
      description: 'Narratives that reflect the human experience. From tragic romances to epic adventures.',
      bookCount: '6,247',
      icon: '📚',
      color: 'from-rose-900 to-rose-700'
    },
    {
      id: 'historical',
      number: 'II',
      title: 'Historical Records',
      description: 'Non-fiction accounts of the past. Biographies, war logs, and cultural studies.',
      bookCount: '4,183',
      icon: '📜',
      color: 'from-amber-900 to-amber-700'
    },
    {
      id: 'speculative',
      number: 'III',
      title: 'Speculative Arts',
      description: 'Science fiction and fantasy. Explore worlds that exist only in the imagination.',
      bookCount: '5,429',
      icon: '🌌',
      color: 'from-purple-900 to-purple-700'
    },
    {
      id: 'philosophy',
      number: 'IV',
      title: 'Philosophy & Thought',
      description: 'Ideas that shaped civilizations. Classical and contemporary philosophical works.',
      bookCount: '3,891',
      icon: '🧠',
      color: 'from-blue-900 to-blue-700'
    },
    {
      id: 'technical',
      number: 'V',
      title: 'Technical & Science',
      description: 'Knowledge and discovery. Mathematics, physics, engineering, and natural sciences.',
      bookCount: '7,612',
      icon: '🔬',
      color: 'from-emerald-900 to-emerald-700'
    },
    {
      id: 'poetry',
      number: 'VI',
      title: 'Poetry & Verse',
      description: 'The art of language. From sonnets to free verse, ancient to modern.',
      bookCount: '2,764',
      icon: '✍️',
      color: 'from-pink-900 to-pink-700'
    }
  ];

  const featuredBooks = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', rating: 4.5 },
    { title: '1984', author: 'George Orwell', category: 'Fiction', rating: 4.8 },
    { title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Historical', rating: 4.6 },
    { title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi', rating: 4.7 }
  ];

  const stats = [
    { icon: <Library className="w-6 h-6" />, value: '27,126', label: 'Total Books' },
    { icon: <Star className="w-6 h-6" />, value: '4.8', label: 'Avg Rating' },
    { icon: <TrendingUp className="w-6 h-6" />, value: '15,234', label: 'Active Readers' },
    { icon: <Clock className="w-6 h-6" />, value: '24/7', label: 'Open Access' }
  ];

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
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

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => navigateTo('/articles')}
                className="text-neutral-300 hover:text-amber-500 transition-colors font-medium"
              >
                Articles
              </button>
              <button 
                onClick={() => navigateTo('/about')}
                className="text-neutral-300 hover:text-amber-500 transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => navigateTo('/membership')}
                className="text-neutral-300 hover:text-amber-500 transition-colors font-medium"
              >
                Membership
              </button>
            </nav>

            {/* Search & Login */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center space-x-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors border border-neutral-700">
                <Search className="w-4 h-4 text-neutral-400" />
                <span className="text-neutral-400 text-sm">Search books...</span>
              </button>

              {/* UPDATED LOGIN BUTTON */}
              <button 
                onClick={() => navigateTo('/login')}
                className="px-5 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-lg transition-all shadow-lg shadow-amber-900/30 flex items-center space-x-2 font-medium"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-neutral-950 to-neutral-950"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-950/50 rounded-full border border-amber-900/50 mb-6">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                <span className="text-amber-400 text-sm font-medium uppercase tracking-wide">Established 2025</span>
              </div>
              
              <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">The Grand</span>
                <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Digital Library
                </span>
              </h2>
              
              <p className="text-xl text-neutral-400 mb-8 leading-relaxed max-w-xl">
                Welcome to your digital sanctuary. Wander through our curated aisles of 
                <span className="text-amber-500 font-medium"> 27,000+ timeless classics</span> and modern masterpieces. 
                Silence is optional, but curiosity is required.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <button 
                  onClick={() => navigateTo('/articles')}
                  className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-lg transition-all shadow-lg shadow-amber-900/30 font-medium flex items-center space-x-2 group"
                >
                  <span>Explore Collection</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 border-2 border-neutral-700 hover:border-amber-600 text-neutral-200 rounded-lg transition-all font-medium">
                  Get Library Card
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 hover:border-amber-600/50 transition-colors">
                    <div className="text-amber-500 mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-neutral-400 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Featured Books Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-8 border border-neutral-800 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                  <Star className="w-5 h-5 text-amber-500" />
                  <span>Featured This Week</span>
                </h3>
                <div className="space-y-4">
                  {featuredBooks.map((book, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-neutral-800/50 rounded-lg hover:bg-neutral-800 transition-all cursor-pointer group"
                    >
                      <div className="w-12 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium truncate group-hover:text-amber-400 transition-colors">
                          {book.title}
                        </h4>
                        <p className="text-sm text-neutral-400 truncate">{book.author}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="text-sm text-white font-medium">{book.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => navigateTo('/articles')}
                  className="w-full mt-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors"
                >
                  View All Featured
                </button>
              </div>
              
              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -left-6 bg-neutral-900 border border-amber-600/50 rounded-lg p-4 shadow-xl max-w-xs hidden lg:block">
                <p className="text-sm italic text-neutral-300 mb-2">
                  "A room without books is like a body without a soul."
                </p>
                <p className="text-xs text-amber-500 font-medium">— Marcus Tullius Cicero</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-6 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-950/50 rounded-full border border-amber-900/50 mb-4">
              <span className="text-amber-400 text-sm font-medium uppercase tracking-wide">Dewey Decimal System</span>
            </div>
            <h3 className="text-5xl font-bold text-white mb-4">Browse by Category</h3>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Explore our carefully organized collection spanning six major categories
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.id}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {
                  setSelectedCategory(category.id);
                  navigateTo('/articles');
                }}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  hoveredCard === category.id ? 'scale-105' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl`}></div>
                
                <div className={`relative bg-neutral-900 border-2 ${
                  selectedCategory === category.id 
                    ? 'border-amber-600' 
                    : 'border-neutral-800 group-hover:border-amber-600/50'
                } rounded-2xl p-8 transition-all h-full`}>
                  {/* Roman Numeral Badge */}
                  <div className={`absolute -top-4 -right-4 w-14 h-14 rounded-full flex items-center justify-center font-serif text-2xl shadow-lg ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-br from-amber-600 to-amber-800 text-white'
                      : 'bg-neutral-800 text-amber-500 group-hover:bg-gradient-to-br group-hover:from-amber-600 group-hover:to-amber-800 group-hover:text-white'
                  } transition-all`}>
                    {category.number}
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-4">{category.icon}</div>

                  {/* Content */}
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {category.title}
                  </h4>
                  <p className="text-neutral-400 leading-relaxed mb-6">
                    {category.description}
                  </p>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-neutral-800">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-5 h-5 text-amber-500" />
                      <span className="text-amber-500 font-bold text-lg">{category.bookCount}</span>
                      <span className="text-neutral-500 text-sm">books</span>
                    </div>
                    <ChevronRight className="w-6 h-6 text-neutral-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxYTFhMWEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTI0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMjQgMjRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <BookOpen className="w-20 h-20 text-amber-500 mx-auto mb-8" />
          <h3 className="text-5xl font-bold text-white mb-6">
            Start Your Reading Journey Today
          </h3>
          <p className="text-xl text-neutral-300 mb-10 leading-relaxed">
            Join over 15,000 book lovers exploring our vast collection. 
            Create your personal library, track your progress, and discover your next favorite book.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-lg text-lg font-medium transition-all shadow-2xl shadow-amber-900/50 flex items-center justify-center space-x-2">
              <span>Create Free Account</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => navigateTo('/articles')}
              className="px-10 py-5 bg-white hover:bg-neutral-100 text-neutral-900 rounded-lg text-lg font-medium transition-all shadow-xl flex items-center justify-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>Browse Collection</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    Bookstopia
                  </span>
                </h4>
              </div>
              <p className="text-neutral-400 leading-relaxed mb-6 max-w-md">
                A digital sanctuary for book lovers. Curated collections of timeless literature, 
                accessible anytime, anywhere. Join our community of passionate readers today.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-neutral-900 hover:bg-amber-600 border border-neutral-800 hover:border-amber-600 rounded-lg flex items-center justify-center transition-all">
                  <span className="text-white">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 bg-neutral-900 hover:bg-amber-600 border border-neutral-800 hover:border-amber-600 rounded-lg flex items-center justify-center transition-all">
                  <span className="text-white">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-neutral-900 hover:bg-amber-600 border border-neutral-800 hover:border-amber-600 rounded-lg flex items-center justify-center transition-all">
                  <span className="text-white">in</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-white font-bold mb-4 text-lg">Library</h5>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => navigateTo('/articles')} className="text-neutral-400 hover:text-amber-500 transition-colors">
                    Browse Collection
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('/articles')} className="text-neutral-400 hover:text-amber-500 transition-colors">
                    New Arrivals
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('/articles')} className="text-neutral-400 hover:text-amber-500 transition-colors">
                    Popular Books
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('/articles')} className="text-neutral-400 hover:text-amber-500 transition-colors">
                    Staff Picks
                  </button>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h5 className="text-white font-bold mb-4 text-lg">Support</h5>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => navigateTo('/about')} className="text-neutral-400 hover:text-amber-500 transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors">Contact Us</a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm mb-4 md:mb-0">
              © 2025 Bookstopia. All rights reserved. Built with ❤️ for book lovers.
            </p>
            <div className="flex items-center space-x-6 text-sm text-neutral-500">
              <a href="#" className="hover:text-amber-500 transition-colors">Accessibility</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Sitemap</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
