import React from 'react';
import { BookOpen, User, Home, Search } from 'lucide-react';

export default function NotFoundPage() {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
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
              <button onClick={() => navigateTo('/articles')} className="text-neutral-300 hover:text-amber-500 transition-colors font-medium">Articles</button>
              <button onClick={() => navigateTo('/about')} className="text-neutral-300 hover:text-amber-500 transition-colors font-medium">About</button>
              <button onClick={() => navigateTo('/membership')} className="text-neutral-300 hover:text-amber-500 transition-colors font-medium">Membership</button>
            </nav>
            <button className="px-5 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-lg transition-all shadow-lg shadow-amber-900/30 flex items-center space-x-2 font-medium">
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </header>

      {/* 404 Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <div className="text-9xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-8">
            404
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Page Not Found</h1>
          <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
            Oops! This page seems to be lost in the stacks. The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigateTo('/')}
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-lg transition-all shadow-lg shadow-amber-900/30 font-medium flex items-center justify-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Return Home</span>
            </button>
            <button 
              onClick={() => navigateTo('/articles')}
              className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 border-2 border-neutral-700 hover:border-amber-600 text-neutral-200 rounded-lg transition-all font-medium flex items-center justify-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>Browse Books</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-neutral-500">© 2025 Bookstopia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}