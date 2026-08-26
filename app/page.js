"use client";

import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState("");

  const occasions = [
    {
      icon: "💼",
      title: "Work",
      text: "Professional looks",
    },
    {
      icon: "🎉",
      title: "Party",
      text: "Stand-out outfits",
    },
    {
      icon: "❤️",
      title: "Date Night",
      text: "Effortless style",
    },
    {
      icon: "✈️",
      title: "Travel",
      text: "Comfort meets style",
    },
  ];

  const features = [
    {
      number: "01",
      title: "Smart Suggestions",
      text: "Choose your occasion, season and preferred style. WearWise helps you discover outfit combinations that fit the moment.",
    },
    {
      number: "02",
      title: "AI Outfit Feedback",
      text: "Upload your outfit and receive an AI-powered style assessment with useful feedback on your overall look.",
    },
    {
      number: "03",
      title: "Community Ratings",
      text: "Let other users rate your outfit and discover what styles and combinations get the best reactions.",
    },
  ];

  function scrollToRating() {
    document
      .getElementById("rating")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <nav className="navbar">
        <div className="container nav-inner">
          <div className="logo">WEARWISE.</div>

          <div className="nav-links">
            <a href="#discover">Discover</a>
            <a href="#features">Features</a>
            <a href="#rating">Rate Outfit</a>
          </div>

          <button className="nav-cta" onClick={scrollToRating}>
            Get Started
          </button>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="badge">
                ✦ Your personal style assistant
              </div>

              <h1>
                Dress well.
                <br />
                <span>Everywhere.</span>
              </h1>

              <p className="hero-description">
                Get personalized outfit suggestions for every occasion,
                season and mood. Upload what you're wearing and discover
                how your look can become even better.
              </p>

              <div className="actions">
                <button
                  className="primary-btn"
                  onClick={() =>
                    document
                      .getElementById("discover")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Find My Outfit →
                </button>

                <button
                  className="secondary-btn"
                  onClick={scrollToRating}
                >
                  Rate My Outfit
                </button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="style-card">
                <small>WEARWISE STYLE GUIDE</small>
                <h3>Today's Look</h3>
                <small>
                  Smart casual · Warm weather · Evening
                </small>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="discover">
          <div className="container">
            <div className="section-heading">
              <div>
                <h2>What are you dressing for?</h2>
              </div>

              <p>
                Pick an occasion and start building a look that fits
                the moment.
              </p>
            </div>

            <div className="occasion-grid">
              {occasions.map((occasion) => (
                <button
                  className="occasion"
                  key={occasion.title}
                  onClick={() => setSelected(occasion.title)}
                >
                  <div className="occasion-icon">
                    {occasion.icon}
                  </div>

                  <h3>{occasion.title}</h3>

                  <p>{occasion.text}</p>
                </button>
              ))}
            </div>

            {selected && (
              <div
                style={{
                  marginTop: "20px",
                  background: "white",
                  border: "1px solid #e5e1d9",
                  borderRadius: "18px",
                  padding: "18px 20px",
                }}
              >
                <strong>{selected}</strong> selected.
                <br />
                <span style={{ color: "#737373" }}>
                  Your personalized outfit suggestions will appear
                  here when the AI recommendation system is connected.
                </span>
              </div>
            )}
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <div className="section-heading">
              <h2>Style, made smarter.</h2>

              <p>
                One place for outfit discovery, AI feedback and
                community opinions.
              </p>
            </div>

            <div className="features">
              {features.map((feature) => (
                <div className="feature" key={feature.number}>
                  <div className="feature-number">
                    {feature.number}
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rating-section" id="rating">
          <div className="container rating-grid">
            <div>
              <div className="badge">✦ Outfit of the day</div>

              <h2>
                How did
                <br />
                you dress
                <br />
                today?
              </h2>

              <p className="rating-description">
                Upload your outfit and get a style score, category
                ratings and constructive feedback from AI and the
                WearWise community.
              </p>

              <button className="primary-btn">
                Upload Outfit →
              </button>
            </div>

            <div className="rating-card">
              <div className="rating-top">
                <div>
                  <div className="rating-label">
                    OVERALL SCORE
                  </div>

                  <div className="rating-score">8.7</div>
                </div>

                <div className="stars">★★★★★</div>
              </div>

              <div className="rating-row">
                <div className="rating-row-header">
                  <span>Color coordination</span>
                  <span>9.2</span>
                </div>

                <div className="progress">
                  <span style={{ width: "92%" }} />
                </div>
              </div>

              <div className="rating-row">
                <div className="rating-row-header">
                  <span>Occasion fit</span>
                  <span>8.8</span>
                </div>

                <div className="progress">
                  <span style={{ width: "88%" }} />
                </div>
              </div>

              <div className="rating-row">
                <div className="rating-row-header">
                  <span>Styling</span>
                  <span>8.4</span>
                </div>

                <div className="progress">
                  <span style={{ width: "84%" }} />
                </div>
              </div>

              <div className="rating-row">
                <div className="rating-row-header">
                  <span>Overall impression</span>
                  <span>8.6</span>
                </div>

                <div className="progress">
                  <span style={{ width: "86%" }} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 WearWise</span>
          <span>Your style. Your rules.</span>
        </div>
      </footer>
    </>
  );
}
