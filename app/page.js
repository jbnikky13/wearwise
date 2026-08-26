"use client";

import { useRef, useState } from "react";

const occasions = [
  {
    id: "work",
    number: "01",
    title: "Work",
    subtitle: "Professional style",
    description:
      "Polished looks for offices, meetings, presentations and professional spaces.",
    visual: "work",
    styles: [
      "Business Casual",
      "Office Formal",
      "Interview",
      "Presentation",
    ],
  },
  {
    id: "party",
    number: "02",
    title: "Party",
    subtitle: "Stand out tonight",
    description:
      "Confident looks for celebrations, concerts, birthdays and nights out.",
    visual: "party",
    styles: [
      "Night Out",
      "Birthday",
      "Concert",
      "Celebration",
    ],
  },
  {
    id: "date",
    number: "03",
    title: "Date Night",
    subtitle: "Effortless style",
    description:
      "Put-together looks for dinner, movies, casual dates and special evenings.",
    visual: "date",
    styles: [
      "Dinner",
      "Casual Date",
      "Movie Night",
      "Special Evening",
    ],
  },
  {
    id: "travel",
    number: "04",
    title: "Travel",
    subtitle: "Comfort meets style",
    description:
      "Easy outfits designed for airports, vacations, road trips and exploring.",
    visual: "travel",
    styles: [
      "Airport",
      "Vacation",
      "Road Trip",
      "City Explore",
    ],
  },
];

const recommendationData = {
  "Business Casual": {
    title: "Business Casual",
    description:
      "A polished but relaxed combination that works well for everyday professional settings.",
    pieces: [
      "Structured shirt or smart top",
      "Tailored trousers or clean dark jeans",
      "Minimal sneakers, loafers or flats",
      "Simple watch or understated accessories",
    ],
  },

  "Office Formal": {
    title: "Office Formal",
    description:
      "A refined professional combination designed for a more formal workplace.",
    pieces: [
      "Blazer or structured jacket",
      "Crisp shirt or polished top",
      "Tailored trousers or professional skirt",
      "Clean formal shoes",
    ],
  },

  Interview: {
    title: "Interview",
    description:
      "Keep the look polished, comfortable and professional without unnecessary distractions.",
    pieces: [
      "Well-fitted structured top",
      "Neutral tailored trousers or skirt",
      "Clean closed-toe shoes",
      "Minimal accessories",
    ],
  },

  Presentation: {
    title: "Presentation",
    description:
      "A confident professional look that stays polished while letting you focus on presenting.",
    pieces: [
      "Structured blazer or jacket",
      "Simple coordinated top",
      "Tailored trousers or skirt",
      "Comfortable polished shoes",
    ],
  },

  "Night Out": {
    title: "Night Out",
    description:
      "A confident evening combination with a stronger statement while keeping the outfit coordinated.",
    pieces: [
      "Statement top or clean evening shirt",
      "Dark trousers or jeans",
      "Stylish sneakers, boots or flats",
      "One standout accessory",
    ],
  },

  Birthday: {
    title: "Birthday",
    description:
      "A fun celebration-ready look that gives you room to express your personal style.",
    pieces: [
      "Statement top or interesting layer",
      "Coordinated trousers, jeans or skirt",
      "Comfortable stylish shoes",
      "A fun accessory or finishing detail",
    ],
  },

  Concert: {
    title: "Concert",
    description:
      "Comfortable and expressive clothing designed for movement and a lively environment.",
    pieces: [
      "Comfortable statement top",
      "Relaxed trousers or jeans",
      "Comfortable sneakers or boots",
      "Small practical accessories",
    ],
  },

  Celebration: {
    title: "Celebration",
    description:
      "A polished festive combination that feels special without being uncomfortable.",
    pieces: [
      "Elevated top or dressy layer",
      "Coordinated bottoms",
      "Polished footwear",
      "One refined accessory",
    ],
  },

  Dinner: {
    title: "Dinner",
    description:
      "A refined evening combination that feels intentional without being overdone.",
    pieces: [
      "Clean elevated top",
      "Tailored trousers, skirt or dark denim",
      "Polished shoes",
      "Simple coordinated accessories",
    ],
  },

  "Casual Date": {
    title: "Casual Date",
    description:
      "Relaxed and coordinated styling for an easygoing date.",
    pieces: [
      "Clean fitted or relaxed top",
      "Well-coordinated jeans or trousers",
      "Clean casual footwear",
      "One simple finishing accessory",
    ],
  },

  "Movie Night": {
    title: "Movie Night",
    description:
      "Comfort-first styling that still looks intentional.",
    pieces: [
      "Comfortable layered top",
      "Relaxed trousers or jeans",
      "Comfortable sneakers",
      "Light outer layer",
    ],
  },

  "Special Evening": {
    title: "Special Evening",
    description:
      "A more elevated look for an evening that deserves something extra.",
    pieces: [
      "Elevated statement top or dress",
      "Coordinated tailored bottoms",
      "Dressier footwear",
      "Refined accessories",
    ],
  },

  Airport: {
    title: "Airport",
    description:
      "Comfortable travel clothing that remains polished throughout the journey.",
    pieces: [
      "Comfortable breathable top",
      "Relaxed trousers or jeans",
      "Supportive sneakers",
      "Lightweight outer layer",
    ],
  },

  Vacation: {
    title: "Vacation",
    description:
      "Relaxed warm-weather styling designed for comfort and easy movement.",
    pieces: [
      "Lightweight breathable top",
      "Relaxed shorts, trousers or skirt",
      "Comfortable sandals or sneakers",
      "Light accessories",
    ],
  },

  "Road Trip": {
    title: "Road Trip",
    description:
      "Flexible clothing that keeps you comfortable while maintaining a put-together look.",
    pieces: [
      "Comfortable layered top",
      "Relaxed jeans or trousers",
      "Comfortable sneakers",
      "Light jacket or hoodie",
    ],
  },

  "City Explore": {
    title: "City Explore",
    description:
      "A practical urban outfit combining comfort, mobility and personal style.",
    pieces: [
      "Versatile top",
      "Comfortable trousers or jeans",
      "Walking-friendly sneakers",
      "Crossbody bag or practical accessory",
    ],
  },
};

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
        <div className="visual-object laptop">W</div>
      )}

      {type === "party" && (
        <>
          <div className="visual-object light-one" />
          <div className="visual-object light-two" />
        </>
      )}

      {type === "date" && (
        <>
          <div className="visual-object table" />
          <div className="visual-object lamp" />
        </>
      )}

      {type === "travel" && (
        <>
          <div className="visual-object suitcase" />
          <div className="visual-object passport">W</div>
        </>
      )}
    </div>
  );
}

export default function Home() {
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [recommendation, setRecommendation] = useState(null);

  const [uploadedImage, setUploadedImage] = useState(null);

  const [feedback, setFeedback] = useState(null);

  const [communityRating, setCommunityRating] = useState(0);
  const [submittedRating, setSubmittedRating] = useState(null);

  const fileInputRef = useRef(null);

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  function openOccasion(occasion) {
    setSelectedOccasion(occasion);
    setRecommendation(null);
  }

  function chooseStyle(style) {
    const result = recommendationData[style];

    if (result) {
      setRecommendation(result);
    }
  }

  function openUploader() {
    fileInputRef.current?.click();
  }

  function handleUpload(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setUploadedImage({
      name: file.name,
      url: imageUrl,
    });

    setFeedback(null);
    setSubmittedRating(null);

    setTimeout(() => {
      scrollTo("rating");
    }, 100);
  }

  function generateFeedback() {
    if (!uploadedImage) {
      alert("Upload an outfit first.");
      return;
    }

    setFeedback({
      score: "8.6",
      title: "Strong overall look",
      comments: [
        "The outfit has a clear overall direction.",
        "The pieces appear reasonably coordinated.",
        "Consider experimenting with one additional accessory or layering piece.",
        "Make sure the outfit matches the setting and weather.",
      ],
    });
  }

  function submitCommunityRating() {
    if (!communityRating) {
      alert("Select a rating first.");
      return;
    }

    setSubmittedRating(communityRating);
  }

  return (
    <>
      <nav className="navbar">
        <div className="container nav-inner">
          <button
            className="logo"
            onClick={() => scrollTo("top")}
          >
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
                Get personalized outfit suggestions for every
                occasion, season and mood. Upload what you're
                wearing and discover how your look can become even
                better.
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
                <small>
                  Smart casual · Warm weather · Evening
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* DISCOVER */}

        <section
          className="section discover-section"
          id="discover"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  STYLE DISCOVERY
                </span>

                <h2>What are you dressing for?</h2>
              </div>

              <p>
                Every occasion deserves its own look. Choose where
                you're going and we'll help you build a style
                direction around it.
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

                    <div className="occasion-arrow">
                      ↗
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}

        <section
          className="section features-section"
          id="features"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  THE WEARWISE METHOD
                </span>

                <h2>Style, made smarter.</h2>
              </div>

              <p>
                One place for outfit discovery, outfit feedback and
                community opinions.
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

        {/* RATING / UPLOAD */}

        <section
          className="rating-section"
          id="rating"
        >
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
                Upload your outfit, receive feedback and let the
                community rate your look.
              </p>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleUpload}
                style={{ display: "none" }}
              />

              <button
                className="primary-btn light-button"
                onClick={openUploader}
              >
                {uploadedImage
                  ? "Change Outfit"
                  : "Upload Outfit"}{" "}
                <span>→</span>
              </button>

              {uploadedImage && (
                <button
                  className="feedback-button"
                  onClick={generateFeedback}
                >
                  Get Outfit Feedback
                </button>
              )}
            </div>

            <div className="rating-card">
              {!uploadedImage && (
                <div className="upload-empty">
                  <div className="upload-symbol">＋</div>

                  <h3>Upload your outfit</h3>

                  <p>
                    Choose a photo from your device to begin your
                    outfit review.
                  </p>

                  <button
                    className="upload-small-button"
                    onClick={openUploader}
                  >
                    Choose Photo
                  </button>
                </div>
              )}

              {uploadedImage && (
                <>
                  <div className="uploaded-photo">
                    <img
                      src={uploadedImage.url}
                      alt="Uploaded outfit"
                    />
                  </div>

                  <div className="uploaded-info">
                    <span>OUTFIT UPLOAD</span>

                    <strong>
                      {uploadedImage.name}
                    </strong>
                  </div>

                  {feedback && (
                    <div className="feedback-panel">
                      <div className="feedback-score">
                        <div>
                          <span>STYLE SCORE</span>
                          <strong>{feedback.score}</strong>
                        </div>

                        <div className="feedback-stars">
                          ★★★★★
                        </div>
                      </div>

                      <h3>{feedback.title}</h3>

                      <ul>
                        {feedback.comments.map(
                          (comment) => (
                            <li key={comment}>
                              {comment}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  <div className="community-panel">
                    <div className="community-header">
                      <div>
                        <span>COMMUNITY RATING</span>

                        <h3>
                          {submittedRating
                            ? `You rated this ${submittedRating}/5`
                            : "What do you think?"}
                        </h3>
                      </div>

                      <div className="community-score">
                        {submittedRating
                          ? submittedRating
                          : "—"}
                        <small>/5</small>
                      </div>
                    </div>

                    <div className="rating-stars">
                      {[1, 2, 3, 4, 5].map((number) => (
                        <button
                          key={number}
                          className={
                            number <= communityRating
                              ? "star active"
                              : "star"
                          }
                          onClick={() =>
                            setCommunityRating(number)
                          }
                        >
                          ★
                        </button>
                      ))}
                    </div>

                    <button
                      className="submit-rating"
                      onClick={submitCommunityRating}
                    >
                      Submit Rating
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* OCCASION MODAL */}

      {selectedOccasion && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedOccasion(null)}
        >
          <div
            className="occasion-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              className="modal-close"
              onClick={() => setSelectedOccasion(null)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="modal-visual">
              <OutfitVisual
                type={selectedOccasion.visual}
              />
            </div>

            <div className="modal-content">
              <span className="eyebrow">
                {selectedOccasion.number} / OCCASION
              </span>

              <h2>{selectedOccasion.title}</h2>

              <p>
                {selectedOccasion.description}
              </p>

              <h4 className="choose-style">
                Choose your style
              </h4>

              <div className="style-options">
                {selectedOccasion.styles.map((style) => (
                  <button
                    key={style}
                    onClick={() =>
                      chooseStyle(style)
                    }
                  >
                    {style}
                    <span>→</span>
                  </button>
                ))}
              </div>

              {recommendation && (
                <div className="recommendation">
                  <div className="recommendation-header">
                    <span>
                      WEARWISE RECOMMENDATION
                    </span>

                    <strong>
                      {recommendation.title}
                    </strong>
                  </div>

                  <p>
                    {recommendation.description}
                  </p>

                  <div className="outfit-pieces">
                    {recommendation.pieces.map(
                      (piece, index) => (
                        <div
                          className="outfit-piece"
                          key={piece}
                        >
                          <span>
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <p>{piece}</p>
                        </div>
                      )
                    )}
                  </div>

                  <button
                    className="modal-upload-btn"
                    onClick={() => {
                      setSelectedOccasion(null);
                      scrollTo("rating");

                      setTimeout(
                        () => openUploader(),
                        400
                      );
                    }}
                  >
                    Upload Your Outfit →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 WearWise</span>
          <span>Your style. Your rules.</span>
        </div>
      </footer>
    </>
  );
}

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
      "Upload your outfit and receive constructive feedback on coordination, styling and occasion fit.",
  },
  {
    number: "03",
    title: "Community Ratings",
    text:
      "Share your outfit and discover how other WearWise users react to your look.",
  },
];
