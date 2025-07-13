import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Kaustubh's</span> Website
          </h1>
          <p className="hero-subtitle">
            Developer • Creator • Innovator
          </p>
          <p className="hero-description">
            Hello! I'm Kaustubh, and I'm passionate about building amazing digital experiences. 
            Welcome to my personal corner of the internet where I share my journey, projects, and ideas.
          </p>
          <div className="cta-buttons">
            <button className="cta-button primary">Explore My Work</button>
            <button className="cta-button secondary">Get In Touch</button>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Web Development</h3>
              <p>Creating responsive and modern web applications with cutting-edge technologies.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>Designing beautiful and intuitive user experiences that users love.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Innovation</h3>
              <p>Exploring new technologies and pushing the boundaries of what's possible.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
