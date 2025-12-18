import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Portfolio from "./Portfolio";
import './App.css';

// Simple Landing Page that redirects to portfolio
const Home = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to My Portfolio</h1>
        <p className="landing-subtitle">Discover my work, skills, and projects</p>
        <a href="/portfolio" className="landing-button">
          View Portfolio
        </a>
      </div>
    </div>
  );
};

// 404 Not Found component
const NotFound = () => (
  <div className="not-found">
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <div className="not-found-links">
      <a href="/" className="not-found-link">Go to Home</a>
      <a href="/portfolio" className="not-found-link">View Portfolio</a>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home route - simple landing page */}
        <Route path="/" element={<Home />} />
        
        {/* Portfolio route - main showcase */}
        <Route path="/portfolio" element={<Portfolio />} />
        
        {/* Redirect /home to portfolio */}
        <Route path="/home" element={<Navigate to="/portfolio" replace />} />
        
        {/* 404 - Catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

