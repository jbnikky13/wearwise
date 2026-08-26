"use client";

import { useState } from "react";

export default function Home() {
  const [selectedOccasion, setSelectedOccasion] = useState(null);

  const occasions = [
    {
      icon: "💼",
      title: "Work",
      description: "Professional looks",
    },
    {
      icon: "🎉",
      title: "Party",
      description: "Stand-out outfits",
    },
    {
      icon: "❤️",
      title: "Date Night",
      description: "Effortless style",
    },
    {
      icon: "✈️",
      title: "Travel",
      description: "Comfort meets style",
    },
  ];

  const features = [
    {
      number: "01",
      title: "Smart Suggestions",
      description:
        "Tell us where you're going, the season and the vibe. VESTA creates outfit ideas designed around the occasion.",
    },
    {
      number: "02",
      title: "Upload & Rate",
      description:
        "Upload your outfit of the day and receive ratings and useful feedback from the community and AI.",
    },
    {
      number: "03",
      title: "Build Your Style",
      description:
        "Discover what works for you and keep improving your personal style with every outfit.",
    },
  ];

  return (
    <main>
      {/* NAVIGATION */}

      <nav className="navbar">
        <div className="container nav-inner">
          <div className="logo">VESTA.</div>

          <div className="nav-links">
            <a href="#discover">Discover</a>
            <a href="#features">Features</a>
            <a href="#rating">Outfit Rating</a>
          </div>

          <button className="nav-button">Get Started</button>
        </div>
      </nav>

      {/* HERO */}

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="badge">✦ Your personal style assistant</div>

            <h1>
              Dress well.
              <br />
              <span>Everywhere.</span>
            </h1>

            <p className="hero-text">
              Get smart outfit suggestions for every occasion, season and
              mood. Upload what you're wearing and discover what the world
              thinks.
            </p>

            <div className="hero-actions">
              <button className="primary-button">Find My Outfit →</button>

              <button
                className="secondary-button"
                onClick={() =>
                  document
                    .getElementById("rating")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Rate My Outfit
              </button>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-content">
              <h3>Today's Style</h3>
              <p>Smart casual • Warm weather • Evening</p>
            </div>
          </div>
        </div>
      </section>

      {/* OCCASIONS */}

      <section className="section" id="discover">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>What are you dressing for?</h2>
            </div>

            <p>
              Choose an occasion and we'll help you put together a look that
              fits the moment.
            </p>
          </div>

          <div className="occasion-grid">
            {occasions.map((occasion) => (
              <button
                key={occasion.title}
                className="occasion-card"
                onClick={() => setSelectedOccasion(occasion.title)}
              >
                <div className="occasion-icon">{occasion.icon}</div>

                <h3>{occasion.title}</h3>

                <p>{occasion.description}</p>
              </button>
            ))}
          </div>

          {selectedOccasion && (
            <div
              style={{
                marginTop: "20px",
                padding: "18px 22px",
                background: "#fff",
                border: "1px solid #e7e4df",
                borderRadius: "16px",
              }}
            >
              <strong>{selectedOccasion}</strong> selected — personalized
              recommendations will appear here.
            </div>
          )}
        </div>
      </section>

      {/* FEATURES */}

      <section className="section" id="features">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Style, made smarter.</h2>
            </div>

            <p>
              VESTA combines personalized recommendations, AI feedback and
              community opinions in one place.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <div className="feature-card" key={feature.number}>
                <div className="feature-number">{feature.number}</div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RATING */}

      <section className="rating-section" id="rating">
        <div className="container rating-grid">
          <div>
            <div className="badge">✦ Outfit of the day</div>

            <h2 style={{ fontSize: "clamp(38px, 5vw, 64px)" }}>
              How did you
              <br />
              dress today?
            </h2>

            <p>
              Upload your outfit and get an overall style score, category
              ratings and constructive feedback from AI and the VESTA
              community.
            </p>

            <button className="primary-button">Upload Outfit →</button>
          </div>

          <div className="rating-box">
            <div className="rating-score">
              <div>
                <div
                  style={{
                    color: "#aaa",
                    fontSize: "13px",
                    marginBottom: "5px",
                  }}
                >
                  OVERALL SCORE
                </div>

                <div className="score">8.7</div>
              </div>

              <div className="stars">★★★★★</div>
            </div>

            <div className="rating-row">
              <div className="rating-row-top">
                <span>Color coordination</span>
                <span>9.2</span>
              </div>

              <div className="progress">
                <span style={{ width: "92%" }}></span>
              </div>
            </div>

            <div className="rating-row">
              <div className="rating-row-top">
                <span>Occasion fit</span>
                <span>8.8</span>
              </div>

              <div className="progress">
                <span style={{ width: "88%" }}></span>
              </div>
            </div>

            <div className="rating-row">
              <div className="rating-row-top">
                <span>Styling</span>
                <span>8.4</span>
              </div>

              <div className="progress">
                <span style={{ width: "84%" }}></span>
              </div>
            </div>

            <div className="rating-row">
              <div className="rating-row-top">
                <span>Overall impression</span>
                <span>8.6</span>
              </div>

              <div className="progress">
                <span style={{ width: "86%" }}></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div className="container footer-inner">
          <div>© 2026 VESTA. All rights reserved.</div>

          <div>Your style. Your rules.</div>
        </div>
      </footer>
    </main>
  );
}
