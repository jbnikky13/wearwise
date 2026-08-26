"use client";

import { useState } from "react";

const occasions = [
  {
    id: "work",
    number: "01",
    title: "Work",
    subtitle: "Professional style",
    description:
      "Polished looks for the office, meetings, presentations and professional spaces.",
    tags: ["Office", "Business Casual", "Interview", "Presentation"],
    visual: "work",
  },
  {
    id: "party",
    number: "02",
    title: "Party",
    subtitle: "Stand out tonight",
    description:
      "Confident looks for celebrations, concerts, birthdays and nights out.",
    tags: ["Birthday", "Concert", "Night Out", "Celebration"],
    visual: "party",
  },
  {
    id: "date",
    number: "03",
    title: "Date Night",
    subtitle: "Effortless style",
    description:
      "Put-together looks for dinner, movies, casual dates and special evenings.",
    tags: ["Dinner", "Casual", "Movie", "Special Evening"],
    visual: "date",
  },
  {
    id: "travel",
    number: "04",
    title: "Travel",
    subtitle: "Comfort meets style",
    description:
      "Easy outfits designed for airports, vacations, road trips and exploring.",
    tags: ["Airport", "Vacation", "Road Trip", "City Explore"],
    visual: "travel",
  },
];

const features = [
  {
    number: "01",
    title: "Smart Suggestions",
    text:
      "Choose your occasion, season and preferred style. WearWise creates outfit ideas around the moment.",
  },
  {
    number: "02",
    title: "AI Outfit Feedback",
    text:
      "Upload your outfit and receive constructive AI feedback on coordination, styling and occasion fit.",
  },
  {
    number: "03",
    title: "Community Ratings",
    text:
      "Share your outfit and discover how other WearWise users react to your look.",
  },
];

function OutfitVisual({ type }) {
  return (
    <div className={`outfit-visual ${type}`}>
      <div className="visual-glow" />

      <div className="fashion-person">
        <div className="person-head" />
        <div className="person-neck" />
        <div className="person-body">
          <div className="shirt-left" />
          <div className="shirt-right" />
        </div>
        <div className="person-waist" />
        <div className="person-legs">
          <div className="leg left" />
          <div className="leg right" />
        </div>
        <div className="person-shoes">
          <div />
          <div />
        </div>
      </div>

      {type === "work" && (
        <>
          <div className="visual-object laptop">W</div>
          <div className="visual-label">OFFICE EDIT</div>
        </>
      )}

      {type === "party" && (
        <>
          <div className="visual-object light-one" />
          <div className="visual-object light-two" />
          <div className="visual-label">NIGHT EDIT</div>
        </>
      )}

      {type === "date" && (
        <>
          <div className="visual-object table" />
          <div className="visual-object lamp" />
          <div className="visual-label">EVENING EDIT</div>
        </>
      )}

      {type === "travel" && (
        <>
          <div className="visual-object suitcase" />
          <div className="visual-object passport">W</div>
          <div className="visual-label">TRAVEL EDIT</div>
        </>
      )}
    </div>
  );
}

export default function Home() {
  const [selectedOccasion, setSelectedOccasion] = useState(null);

  function openOccasion(occasion) {
    setSelectedOccasion(occasion);
  }

  function closeOccasion() {
    setSelectedOccasion(null);
  }

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      <nav className="navbar">
        <div className="container nav-inner">
          <button className="logo" onClick={() => scrollTo("top")}>
            WEARWISE.
          </button>

          <div className="nav-links">
            <a href="#discover">Discover</a>
            <a href="#features">Features</a>
            <a href="#rating">Rate Outfit</a>
          </div>

          <button
            className="nav-cta"
            onClick={() => scrollTo("discover")}
          >
            Get Started
          </button>
        </div>
      </nav>

      <main id="top">
        {/* HERO */}

        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="badge">
                <span className="spark">✦</span>
                Your personal style assistant
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
                  onClick={() => scrollTo("discover")}
                >
                  Find My Outfit <span>→</span>
                </button>

                <button
                  className="secondary-btn"
                  onClick={() => scrollTo("rating")}
                >
                  Rate My Outfit
                </button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-fashion">
                <div className="hero-head" />
                <div className="hero-body" />
                <div className="hero-leg hero-leg-one" />
                <div className="hero-leg hero-leg-two" />
              </div>

              <div className="hero-floating-card">
                <span>WEARWISE STYLE GUIDE</span>
                <strong>Today's Look</strong>
                <small>Smart casual · Warm weather · Evening</small>
              </div>
            </div>
          </div>
        </section>

        {/* OCCASIONS */}

        <section className="section discover-section" id="discover">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">STYLE DISCOVERY</span>
                <h2>What are you dressing for?</h2>
              </div>

              <p>
                Every occasion deserves its own look. Choose where you're
                going and we'll build your style direction around it.
              </p>
            </div>

            <div className="occasion-grid">
              {occasions.map((occasion) => (
                <button
                  className={`occasion-card ${occasion.id}`}
                  key={occasion.id}
                  onClick={() => openOccasion(occasion)}
                >
                  <div className="occasion-number">
                    {occasion.number}
                  </div>

                  <OutfitVisual type={occasion.visual} />

                  <div className="occasion-content">
                    <span>{occasion.subtitle}</span>
                    <h3>{occasion.title}</h3>

                    <div className="occasion-arrow">↗</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}

        <section className="section features-section" id="features">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">THE WEARWISE METHOD</span>
                <h2>Style, made smarter.</h2>
              </div>

              <p>
                One place for outfit discovery, AI feedback and community
                opinions.
              </p>
            </div>

            <div className="features">
              {features.map((feature) => (
                <div className="feature" key={feature.number}>
                  <div className="feature-top">
                    <span>{feature.number}</span>
                    <div className="feature-dot" />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RATING */}

        <section className="rating-section" id="rating">
          <div className="container rating-grid">
            <div>
              <div className="badge dark-badge">
                <span className="spark">✦</span>
                Outfit of the day
              </div>

              <h2>
                How did
                <br />
                you dress
                <br />
                today?
              </h2>

              <p className="rating-description">
                Upload your outfit and get a style score, category ratings
                and constructive feedback from AI and the WearWise
                community.
              </p>

              <button className="primary-btn light-button">
                Upload Outfit <span>→</span>
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

              {[
                ["Color coordination", "9.2", "92%"],
                ["Occasion fit", "8.8", "88%"],
                ["Styling", "8.4", "84%"],
                ["Overall impression", "8.6", "86%"],
              ].map(([label, score, width]) => (
                <div className="rating-row" key={label}>
                  <div className="rating-row-header">
                    <span>{label}</span>
                    <span>{score}</span>
                  </div>

                  <div className="progress">
                    <span style={{ width }} />
                  </div>
                </div>
              ))}
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

      {/* OCCASION MODAL */}

      {selectedOccasion && (
        <div className="modal-backdrop" onClick={closeOccasion}>
          <div
            className="occasion-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={closeOccasion}
              aria-label="Close"
            >
              ×
            </button>

            <div className="modal-visual">
              <OutfitVisual type={selectedOccasion.visual} />
            </div>

            <div className="modal-content">
              <span className="eyebrow">
                {selectedOccasion.number} / OCCASION
              </span>

              <h2>{selectedOccasion.title}</h2>

              <p>{selectedOccasion.description}</p>

              <div className="style-options">
                {selectedOccasion.tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      alert(
                        `${tag} style selected. Outfit recommendations will be connected here.`
                      );
                    }}
                  >
                    {tag}
                    <span>→</span>
                  </button>
                ))}
              </div>

              <button
                className="primary-btn modal-button"
                onClick={() => scrollTo("rating")}
              >
                Upload an Outfit →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
