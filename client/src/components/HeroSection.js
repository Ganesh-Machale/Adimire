import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiSparkles } from 'react-icons/hi';
import ThreeHeroCanvas from './ThreeHeroCanvas';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-3d">
      <div className="container">
        <div className="hero-3d-grid">
          {/* Left Text & CTA */}
          <div className="hero-3d-content">
            <div className="hero-cyber-badge">
              <HiSparkles className="sparkle-icon" />
              <span>Next-Gen Enterprise IT Partner</span>
              <div className="badge-radar" />
            </div>

            <h1 className="hero-3d-title">
              Architecting <br />
              <span className="gradient-3d-text">Intelligent Platforms</span> <br />
              for Global Scale.
            </h1>

            <p className="hero-3d-subtitle">
              Adimire Ent engineers high-performance web ecosystems, mission-critical applications, 
              and AI-ready enterprise software designed to give your business an unfair advantage.
            </p>

            <div className="hero-3d-buttons">
              <Link to="/services" className="btn btn-cyan-3d">
                <span>Explore Solutions</span>
                <HiArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-glass-3d">
                <span>Initiate Project</span>
              </Link>
            </div>

            {/* 3D Floating Stat Cards */}
            <div className="hero-3d-stats">
              <div className="stat-card-3d">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years of Engineering</div>
              </div>
              <div className="stat-card-3d">
                <div className="stat-number">100+</div>
                <div className="stat-label">Deployments</div>
              </div>
              <div className="stat-card-3d">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Platform Uptime</div>
              </div>
            </div>
          </div>

          {/* Right 3D Interactive Three.js Canvas */}
          <div className="hero-3d-canvas-wrap">
            <ThreeHeroCanvas />
            
            {/* Holographic Float Tag Top Right */}
            <div className="hologram-chip chip-top">
              <div className="chip-indicator" />
              <div>
                <span className="chip-title">Neural Mesh v2.4</span>
                <span className="chip-sub">Live 3D Render</span>
              </div>
            </div>

            {/* Holographic Float Tag Bottom Left */}
            <div className="hologram-chip chip-bottom">
              <span className="chip-metric">⚡ 0.4s</span>
              <span className="chip-sub">Global Edge Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
