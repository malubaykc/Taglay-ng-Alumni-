import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticleListPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/membership" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;