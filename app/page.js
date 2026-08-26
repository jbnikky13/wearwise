"use client";

import { useState } from "react";
import Link from "next/link";

const occasions = [
  {
    id: "work",
    number: "01",
    title: "Work",
    subtitle: "Professional",
    description: "Polished looks for meetings, offices and important days.",
    icon: "▣",
    className: "occasion-work",
  },
  {
    id: "party",
    number: "02",
    title: "Party",
    subtitle: "Stand out",
    description: "Expressive looks designed for nights worth remembering.",
    icon: "✦",
    className: "occasion-party",
  },
  {
    id: "date",
    number: "03",
    title: "Date Night",
    subtitle: "Effortless",
    description: "Put-together outfits that still feel like you.",
    icon: "♡",
    className: "occasion-date",
  },
  {
    id: "travel",
    number: "04",
    title: "Travel",
    subtitle: "Comfort first",
    description: "Easy combinations that move with your plans.",
    icon: "↗",
    className: "occasion-travel",
  },
  {
    id: "casual",
    number: "05",
    title: "Casual",
    subtitle: "Everyday",
    description: "Simple combinations for everyday confidence.",
    icon: "○",
    className: "occasion-casual",
  },
  {
    id: "evening",
    number: "06",
    title: "Evening",
    subtitle: "After dark",
    description: "Refined styling for dinners and evening plans.",
    icon: "☾",
    className: "occasion-evening",
  },
];

const styles = [
  "Minimal",
  "Classic",
  "Street",
  "Elegant",
  "Trendy",
  "Relaxed",
];

export default function HomePage() {
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState("");
  const [showFinder, setShowFinder] = useState(false);

  function selectOccasion(id) {
    setSelectedOccasion(id);

    setTimeout(() => {
      document
        .getElementById("finder")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 50);
  }

  return (
    <main className="wearwise-page">

      {/* NAVIGATION */}

      <nav className="ww-nav">

        <Link href="/" className="ww-logo">
          <span className="ww-logo-mark">W</span>
          <span>WEARWISE</span>
        </Link>

        <div className="ww-nav-links">
          <a href="#discover">Discover</a>
          <a href="#occasions">Occasions</a>
          <a href="#community">Community</a>
        </div>

        <Link href="/login" className="ww-login">
          Sign in
        </Link>

      </nav>


      {/* HERO */}

      <section className="hero">

        <div className="hero-copy">

          <div className="eyebrow">
            <span>✦</span>
            YOUR PERSONAL STYLE ASSISTANT
          </div>

          <h1>
            Dress well.
            <br />
            <em>Everywhere.</em>
          </h1>

          <p>
            Discover outfits for every occasion, season and mood.
            Get personalized suggestions, upload your look and
            see how the WearWise community reacts.
          </p>

          <div className="hero-actions">

            <button
              className="primary-button"
              onClick={() => setShowFinder(true)}
            >
              Find My Outfit
              <span>↗</span>
            </button>

            <button
              className="secondary-button"
              onClick={() =>
                document
                  .getElementById("upload")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Rate My Outfit
            </button>

          </div>

        </div>


        {/* HERO STYLE CARD */}

        <div className="hero-visual">

          <div className="hero-card-back"></div>

          <div className="hero-fashion-card">

            <div className="fashion-card-top">
              <span>WEARWISE</span>
              <span>01 / 06</span>
            </div>

            <div className="fashion-person">

              <div className="person-head"></div>

              <div className="person-body">
                <div className="shirt"></div>
                <div className="pants"></div>
              </div>

            </div>

            <div className="fashion-card-bottom">

              <div>
                <small>TODAY'S DIRECTION</small>
                <strong>Smart & effortless</strong>
              </div>

              <div className="style-score">
                8.8
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* MINI STATS */}

      <section className="quick-strip">

        <div>
          <strong>01</strong>
          <span>Choose your moment</span>
        </div>

        <div>
          <strong>02</strong>
          <span>Build your style</span>
        </div>

        <div>
          <strong>03</strong>
          <span>Get your look</span>
        </div>

        <div>
          <strong>04</strong>
          <span>Share & improve</span>
        </div>

      </section>


      {/* DISCOVERY */}

      <section
        className="discovery-section"
        id="discover"
      >

        <div className="section-heading">

          <div>
            <span className="section-label">
              STYLE DISCOVERY
            </span>

            <h2>
              What are you
              <br />
              dressing for?
            </h2>
          </div>

          <p>
            Every occasion deserves its own visual language.
            Choose your moment and WearWise will build a style
            direction around it.
          </p>

        </div>


        {/* OCCASIONS */}

        <div
          className="occasion-grid"
          id="occasions"
        >

          {occasions.map((occasion) => (

            <button
              key={occasion.id}
              className={`occasion-card ${occasion.className}`}
              onClick={() =>
                selectOccasion(occasion.id)
              }
            >

              <div className="occasion-number">
                {occasion.number}
              </div>

              <div className="occasion-symbol">
                {occasion.icon}
              </div>

              <div className="occasion-content">

                <span>
                  {occasion.subtitle}
                </span>

                <h3>
                  {occasion.title}
                </h3>

                <p>
                  {occasion.description}
                </p>

              </div>

              <div className="occasion-arrow">
                ↗
              </div>

            </button>

          ))}

        </div>

      </section>


      {/* OUTFIT FINDER */}

      <section
        className="finder-section"
        id="finder"
      >

        <div className="finder-panel">

          <div className="finder-intro">

            <span className="section-label">
              THE STYLE FINDER
            </span>

            <h2>
              Tell us the
              <br />
              <em>moment.</em>
            </h2>

            <p>
              Select an occasion and a style direction.
              Your personalized outfit recommendations
              will appear here once the recommendation engine
              is connected.
            </p>

          </div>


          <div className="finder-controls">

            <div className="finder-group">

              <span className="finder-label">
                01 — OCCASION
              </span>

              <div className="finder-options">

                {occasions.slice(0, 6).map(
                  (occasion) => (

                    <button
                      key={occasion.id}
                      className={
                        selectedOccasion === occasion.id
                          ? "finder-option active"
                          : "finder-option"
                      }
                      onClick={() =>
                        setSelectedOccasion(
                          occasion.id
                        )
                      }
                    >
                      {occasion.title}
                    </button>

                  )
                )}

              </div>

            </div>


            <div className="finder-group">

              <span className="finder-label">
                02 — STYLE
              </span>

              <div className="finder-options">

                {styles.map((style) => (

                  <button
                    key={style}
                    className={
                      selectedStyle === style
                        ? "finder-option active"
                        : "finder-option"
                    }
                    onClick={() =>
                      setSelectedStyle(style)
                    }
                  >
                    {style}
                  </button>

                ))}

              </div>

            </div>


            <button
              className="finder-submit"
              onClick={() =>
                setShowFinder(true)
              }
            >
              Build My Look
              <span>↗</span>
            </button>

            {showFinder && (
              <div className="finder-result">

                <span>YOUR STYLE DIRECTION</span>

                <strong>
                  {selectedStyle || "Personalized"}
                  {" "}
                  {selectedOccasion
                    ? `· ${
                        occasions.find(
                          (x) =>
                            x.id ===
                            selectedOccasion
                        )?.title
                      }`
                    : ""}
                </strong>

                <p>
                  Recommendation engine coming next —
                  this area will display your generated
                  outfit, item breakdown and alternatives.
                </p>

              </div>
            )}

          </div>

        </div>

      </section>


      {/* METHOD */}

      <section className="method-section">

        <div className="method-heading">

          <span className="section-label">
            THE WEARWISE METHOD
          </span>

          <h2>
            Style,
            <br />
            <em>made smarter.</em>
          </h2>

        </div>


        <div className="method-list">

          <article>

            <span>01</span>

            <div>
              <h3>Smart Suggestions</h3>

              <p>
                Tell WearWise where you're going,
                what the weather is like and the style
                you want. Your recommendation engine
                handles the rest.
              </p>
            </div>

            <b>↗</b>

          </article>


          <article>

            <span>02</span>

            <div>
              <h3>AI Outfit Feedback</h3>

              <p>
                Upload what you're wearing and receive
                constructive feedback on coordination,
                styling and occasion fit.
              </p>
            </div>

            <b>↗</b>

          </article>


          <article id="community">

            <span>03</span>

            <div>
              <h3>Community Ratings</h3>

              <p>
                Share your outfit with the WearWise
                community and discover how other people
                react to your look.
              </p>
            </div>

            <b>↗</b>

          </article>

        </div>

      </section>


      {/* UPLOAD */}

      <section
        className="upload-section"
        id="upload"
      >

        <div className="upload-card">

          <div className="upload-copy">

            <span className="section-label">
              OUTFIT OF THE DAY
            </span>

            <h2>
              How did you
              <br />
              <em>dress today?</em>
            </h2>

            <p>
              Upload your outfit and eventually receive
              an AI style review, a score and community
              feedback in one place.
            </p>

            <Link
              href="/login"
              className="upload-button"
            >
              Upload My Outfit
              <span>↗</span>
            </Link>

          </div>


          <div className="upload-preview">

            <div className="upload-frame">

              <div className="upload-plus">
                +
              </div>

              <strong>
                Your next look
              </strong>

              <span>
                Upload a photo to begin
              </span>

            </div>

            <div className="rating-pill">
              <span>AI SCORE</span>
              <strong>— / 10</strong>
            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="ww-footer">

        <Link href="/" className="ww-logo">
          <span className="ww-logo-mark">W</span>
          <span>WEARWISE</span>
        </Link>

        <span>
          Your style. Your rules.
        </span>

        <span>
          © 2026 WearWise
        </span>

      </footer>

    </main>
  );
}
