import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import CreateArticlePage from "./pages/CreateArticlePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/articles" element={<ArticleListPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/membership" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/articles/create" element={<CreateArticlePage />} />
<Route path="/articles/edit/:id" element={<CreateArticlePage />} />

        <Route path="/articles/create" element={<CreateArticlePage />} />

        

      </Routes>
    </Router>
  );
}

export default App;