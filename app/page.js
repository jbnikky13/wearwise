"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const occasions = [
  {
    id: "work",
    title: "Work",
    icon: "▣",
    description: "Professional and polished",
  },
  {
    id: "party",
    title: "Party",
    icon: "✦",
    description: "Expressive and memorable",
  },
  {
    id: "date",
    title: "Date Night",
    icon: "♡",
    description: "Effortless and refined",
  },
  {
    id: "travel",
    title: "Travel",
    icon: "↗",
    description: "Comfortable and practical",
  },
  {
    id: "casual",
    title: "Casual",
    icon: "○",
    description: "Relaxed everyday style",
  },
  {
    id: "evening",
    title: "Evening",
    icon: "☾",
    description: "Refined after-dark looks",
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

const seasons = [
  "Spring",
  "Summer",
  "Autumn",
  "Winter",
];

const formalityLevels = [
  "Relaxed",
  "Smart Casual",
  "Formal",
];

const colors = [
  "Neutrals",
  "Earth Tones",
  "Monochrome",
  "Pastels",
  "Bold Colors",
];

export default function HomePage() {
  const router = useRouter();

  const [occasion, setOccasion] = useState("");
  const [style, setStyle] = useState("");
  const [season, setSeason] = useState("");
  const [formality, setFormality] = useState("");
  const [color, setColor] = useState("");

  const [error, setError] = useState("");

  function buildLook() {
    if (!occasion) {
      setError("Choose an occasion first.");
      return;
    }

    if (!style) {
      setError("Choose your preferred style.");
      return;
    }

    const params = new URLSearchParams({
      occasion,
      style,
      season: season || "Summer",
      formality: formality || "Smart Casual",
      color: color || "Neutrals",
    });

    router.push(
      `/recommendations?${params.toString()}`
    );
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
          <a href="#finder">Style Finder</a>
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
            Discover outfits designed around your occasion,
            personal style, season and color preferences.
          </p>

          <div className="hero-actions">

            <a
              href="#finder"
              className="primary-button"
            >
              Find My Outfit
              <span>↗</span>
            </a>

            <a
              href="#upload"
              className="secondary-button"
            >
              Rate My Outfit
            </a>

          </div>

        </div>


        <div className="hero-visual">

          <div className="hero-card-back"></div>

          <div className="hero-fashion-card">

            <div className="fashion-card-top">
              <span>WEARWISE</span>
              <span>STYLE / 01</span>
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


      {/* QUICK STRIP */}

      <section className="quick-strip">

        <div>
          <strong>01</strong>
          <span>Choose your moment</span>
        </div>

        <div>
          <strong>02</strong>
          <span>Define your style</span>
        </div>

        <div>
          <strong>03</strong>
          <span>Build your look</span>
        </div>

        <div>
          <strong>04</strong>
          <span>Make it yours</span>
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
              Dress for
              <br />
              the moment.
            </h2>
          </div>

          <p>
            Different moments call for different
            styling decisions. Choose yours and let
            WearWise build the direction.
          </p>

        </div>


        <div
          className="occasion-grid"
          id="occasions"
        >

          {occasions.map((item) => (

            <button
              key={item.id}
              className={`occasion-card occasion-${item.id}`}
              onClick={() => {
                setOccasion(item.id);

                document
                  .getElementById("finder")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >

              <div className="occasion-number">
                {String(
                  occasions.indexOf(item) + 1
                ).padStart(2, "0")}
              </div>

              <div className="occasion-symbol">
                {item.icon}
              </div>

              <div className="occasion-content">

                <span>
                  {item.description}
                </span>

                <h3>
                  {item.title}
                </h3>

              </div>

              <div className="occasion-arrow">
                ↗
              </div>

            </button>

          ))}

        </div>

      </section>


      {/* REAL STYLE FINDER */}

      <section
        className="finder-section"
        id="finder"
      >

        <div className="finder-panel">

          <div className="finder-intro">

            <span className="section-label">
              WEARWISE ENGINE
            </span>

            <h2>
              Build your
              <br />
              <em>perfect look.</em>
            </h2>

            <p>
              Tell us about the moment and the style
              you're going for. WearWise will score
              different outfit combinations and return
              the strongest match.
            </p>

            <div className="engine-status">
              <span></span>
              Recommendation engine ready
            </div>

          </div>


          <div className="finder-controls">

            {/* OCCASION */}

            <div className="finder-group">

              <span className="finder-label">
                01 — WHAT ARE YOU DRESSING FOR?
              </span>

              <div className="finder-options">

                {occasions.map((item) => (

                  <button
                    key={item.id}
                    className={
                      occasion === item.id
                        ? "finder-option active"
                        : "finder-option"
                    }
                    onClick={() =>
                      setOccasion(item.id)
                    }
                  >
                    {item.title}
                  </button>

                ))}

              </div>

            </div>


            {/* STYLE */}

            <div className="finder-group">

              <span className="finder-label">
                02 — YOUR STYLE
              </span>

              <div className="finder-options">

                {styles.map((item) => (

                  <button
                    key={item}
                    className={
                      style === item
                        ? "finder-option active"
                        : "finder-option"
                    }
                    onClick={() =>
                      setStyle(item)
                    }
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>


            {/* SEASON */}

            <div className="finder-group">

              <span className="finder-label">
                03 — SEASON
              </span>

              <div className="finder-options">

                {seasons.map((item) => (

                  <button
                    key={item}
                    className={
                      season === item
                        ? "finder-option active"
                        : "finder-option"
                    }
                    onClick={() =>
                      setSeason(item)
                    }
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>


            {/* FORMALITY */}

            <div className="finder-group">

              <span className="finder-label">
                04 — FORMALITY
              </span>

              <div className="finder-options">

                {formalityLevels.map((item) => (

                  <button
                    key={item}
                    className={
                      formality === item
                        ? "finder-option active"
                        : "finder-option"
                    }
                    onClick={() =>
                      setFormality(item)
                    }
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>


            {/* COLOR */}

            <div className="finder-group">

              <span className="finder-label">
                05 — COLOR DIRECTION
              </span>

              <div className="finder-options">

                {colors.map((item) => (

                  <button
                    key={item}
                    className={
                      color === item
                        ? "finder-option active"
                        : "finder-option"
                    }
                    onClick={() =>
                      setColor(item)
                    }
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>


            {error && (
              <div className="finder-error">
                {error}
              </div>
            )}


            <button
              className="finder-submit"
              onClick={buildLook}
            >
              Generate My Outfit
              <span>↗</span>
            </button>

            <p className="finder-note">
              No account required to generate your first look.
            </p>

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
                WearWise evaluates your occasion,
                style, season, formality and color
                direction to build a stronger outfit match.
              </p>
            </div>

            <b>↗</b>

          </article>


          <article>

            <span>02</span>

            <div>
              <h3>AI Outfit Feedback</h3>

              <p>
                Upload your outfit to eventually receive
                structured feedback on coordination,
                styling and occasion suitability.
              </p>
            </div>

            <b>↗</b>

          </article>


          <article id="community">

            <span>03</span>

            <div>
              <h3>Community Ratings</h3>

              <p>
                Share your look and let the WearWise
                community help you understand what works.
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
              an AI style review, score and community
              feedback.
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
