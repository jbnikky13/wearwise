"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";

const wardrobe = {
  work: {
    tops: [
      "Crisp white button-down shirt",
      "Soft blue tailored shirt",
      "Fine-knit neutral blouse",
    ],
    bottoms: [
      "High-waisted tailored trousers",
      "Straight-leg charcoal trousers",
      "Clean tailored midi skirt",
    ],
    shoes: [
      "Minimal leather loafers",
      "Low block-heel shoes",
      "Clean leather flats",
    ],
    accessories: [
      "Structured leather bag",
      "Minimal watch",
      "Small metal earrings",
    ],
  },

  party: {
    tops: [
      "Statement satin top",
      "Fitted textured blouse",
      "Refined statement shirt",
    ],
    bottoms: [
      "Wide-leg tailored trousers",
      "Dark straight-leg jeans",
      "Statement midi skirt",
    ],
    shoes: [
      "Sleek heeled sandals",
      "Minimal ankle boots",
      "Polished statement flats",
    ],
    accessories: [
      "Small shoulder bag",
      "Layered necklace",
      "Statement earrings",
    ],
  },

  date: {
    tops: [
      "Elegant satin blouse",
      "Fitted knit top",
      "Soft draped shirt",
    ],
    bottoms: [
      "Wide-leg trousers",
      "Dark straight-leg trousers",
      "Elegant midi skirt",
    ],
    shoes: [
      "Minimal heeled sandals",
      "Classic leather flats",
      "Low block heels",
    ],
    accessories: [
      "Small structured handbag",
      "Delicate necklace",
      "Minimal earrings",
    ],
  },

  travel: {
    tops: [
      "Relaxed cotton shirt",
      "Lightweight knit top",
      "Clean oversized shirt",
    ],
    bottoms: [
      "Relaxed straight-leg trousers",
      "Comfortable wide-leg pants",
      "Clean dark denim",
    ],
    shoes: [
      "Minimal sneakers",
      "Comfortable leather trainers",
      "Clean slip-on shoes",
    ],
    accessories: [
      "Crossbody bag",
      "Lightweight scarf",
      "Simple watch",
    ],
  },

  casual: {
    tops: [
      "Clean heavyweight T-shirt",
      "Relaxed cotton shirt",
      "Minimal knit polo",
    ],
    bottoms: [
      "Straight-leg denim",
      "Relaxed trousers",
      "Clean utility pants",
    ],
    shoes: [
      "Minimal sneakers",
      "Classic canvas shoes",
      "Clean low-profile trainers",
    ],
    accessories: [
      "Crossbody bag",
      "Simple cap",
      "Minimal watch",
    ],
  },

  evening: {
    tops: [
      "Dark satin blouse",
      "Refined black shirt",
      "Elegant fitted knit",
    ],
    bottoms: [
      "Tailored black trousers",
      "Dark wide-leg trousers",
      "Refined midi skirt",
    ],
    shoes: [
      "Sleek black heels",
      "Minimal leather loafers",
      "Polished ankle boots",
    ],
    accessories: [
      "Small evening bag",
      "Minimal metal jewelry",
      "Classic watch",
    ],
  },
};

const styleModifiers = {
  Minimal: {
    title: "Clean Minimalism",
    description:
      "Sharp silhouettes, restrained details and a deliberately simple finish.",
  },

  Classic: {
    title: "Modern Classic",
    description:
      "Timeless pieces combined with polished proportions and understated details.",
  },

  Street: {
    title: "Elevated Street",
    description:
      "Relaxed proportions with cleaner tailoring and contemporary attitude.",
  },

  Elegant: {
    title: "Quiet Elegance",
    description:
      "Refined textures, balanced silhouettes and sophisticated finishing touches.",
  },

  Trendy: {
    title: "Current & Confident",
    description:
      "Modern proportions and expressive pieces without losing cohesion.",
  },

  Relaxed: {
    title: "Effortless Ease",
    description:
      "Comfortable silhouettes that still look intentional and put together.",
  },
};

function RecommendationContent() {
  const params = useSearchParams();

  const occasion =
    params.get("occasion") || "casual";

  const style =
    params.get("style") || "Minimal";

  const season =
    params.get("season") || "Summer";

  const formality =
    params.get("formality") || "Smart Casual";

  const color =
    params.get("color") || "Neutrals";

  const [variant, setVariant] = useState(0);
  const [saved, setSaved] = useState(false);

  const recommendation = useMemo(() => {
    const base =
      wardrobe[occasion] ||
      wardrobe.casual;

    const modifier =
      styleModifiers[style] ||
      styleModifiers.Minimal;

    const pick = (items) =>
      items[variant % items.length];

    let score = 82;

    if (style === "Elegant") score += 5;
    if (style === "Classic") score += 4;
    if (style === "Minimal") score += 3;
    if (style === "Trendy") score += 2;

    if (formality === "Formal") {
      score +=
        occasion === "work" ||
        occasion === "evening"
          ? 4
          : 1;
    }

    if (color === "Neutrals") score += 3;
    if (color === "Monochrome") score += 3;

    score = Math.min(score, 98);

    return {
      score,
      title: modifier.title,
      description: modifier.description,
      pieces: [
        {
          category: "TOP",
          item: pick(base.tops),
        },
        {
          category: "BOTTOM",
          item: pick(base.bottoms),
        },
        {
          category: "SHOES",
          item: pick(base.shoes),
        },
        {
          category: "ACCESSORY",
          item: pick(base.accessories),
        },
      ],
    };
  }, [
    occasion,
    style,
    season,
    formality,
    color,
    variant,
  ]);

  function tryAnother() {
    setVariant((value) => value + 1);
    setSaved(false);
  }

  return (
    <main className="recommendation-page">

      <nav className="ww-nav recommendation-nav">

        <Link
          href="/"
          className="ww-logo"
        >
          <span className="ww-logo-mark">
            W
          </span>

          <span>
            WEARWISE
          </span>
        </Link>

        <Link
          href="/#finder"
          className="back-link"
        >
          ← Adjust preferences
        </Link>

      </nav>


      <section className="recommendation-hero">

        <div>

          <span className="section-label">
            YOUR WEARWISE RESULT
          </span>

          <h1>
            Your look,
            <br />
            <em>decoded.</em>
          </h1>

          <p>
            We matched your choices and built a
            coordinated outfit around your moment.
          </p>

        </div>


        <div className="recommendation-tags">

          <span>{occasion}</span>
          <span>{style}</span>
          <span>{season}</span>
          <span>{formality}</span>
          <span>{color}</span>

        </div>

      </section>


      <section className="result-layout">

        {/* VISUAL */}

        <div className="look-visual">

          <div className="look-background">

            <div className="look-silhouette">

              <div className="look-head"></div>

              <div className="look-torso"></div>

              <div className="look-bottom"></div>

            </div>

          </div>

          <div className="look-label">
            LOOK / {String(variant + 1).padStart(2, "0")}
          </div>

        </div>


        {/* DETAILS */}

        <div className="look-details">

          <div className="look-score">

            <div>

              <span>
                MATCH SCORE
              </span>

              <strong>
                {recommendation.score}
                <small>/100</small>
              </strong>

            </div>

            <div className="score-ring">
              {recommendation.score}%
            </div>

          </div>


          <div className="look-title">

            <span>
              STYLE DIRECTION
            </span>

            <h2>
              {recommendation.title}
            </h2>

            <p>
              {recommendation.description}
            </p>

          </div>


          <div className="piece-list">

            {recommendation.pieces.map(
              (piece, index) => (

                <div
                  className="piece-row"
                  key={piece.category}
                >

                  <span>
                    0{index + 1}
                  </span>

                  <div className="piece-icon">
                    {index === 0
                      ? "◇"
                      : index === 1
                      ? "□"
                      : index === 2
                      ? "△"
                      : "○"}
                  </div>

                  <div className="piece-info">

                    <small>
                      {piece.category}
                    </small>

                    <strong>
                      {piece.item}
                    </strong>

                  </div>

                  <span className="piece-arrow">
                    ↗
                  </span>

                </div>

              )
            )}

          </div>


          <div className="why-box">

            <span>
              WHY THIS WORKS
            </span>

            <p>
              The combination balances your
              selected {style.toLowerCase()} direction
              with the requirements of a{" "}
              {occasion.replace("-", " ")} setting.
              The {color.toLowerCase()} palette keeps
              the pieces visually connected.
            </p>

          </div>


          <div className="result-actions">

            <button
              className="result-primary"
              onClick={tryAnother}
            >
              Try Another Look
              <span>↗</span>
            </button>

            <button
              className={
                saved
                  ? "result-secondary saved"
                  : "result-secondary"
              }
              onClick={() =>
                setSaved(true)
              }
            >
              {saved
                ? "✓ Saved"
                : "♡ Save Look"}
            </button>

          </div>

        </div>

      </section>


      {/* ALTERNATIVES */}

      <section className="alternatives-section">

        <div className="alternatives-heading">

          <div>

            <span className="section-label">
              KEEP EXPLORING
            </span>

            <h2>
              Three ways to
              <br />
              wear the moment.
            </h2>

          </div>

          <p>
            Don't like the first combination?
            Keep the same direction while changing
            the pieces.
          </p>

        </div>


        <div className="alternative-grid">

          <button
            onClick={tryAnother}
            className="alternative-card"
          >

            <span>01</span>

            <div className="mini-look mini-one"></div>

            <strong>
              Switch the top
            </strong>

            <small>
              Keep everything else
            </small>

          </button>


          <button
            onClick={tryAnother}
            className="alternative-card"
          >

            <span>02</span>

            <div className="mini-look mini-two"></div>

            <strong>
              Change the silhouette
            </strong>

            <small>
              A different proportion
            </small>

          </button>


          <button
            onClick={tryAnother}
            className="alternative-card"
          >

            <span>03</span>

            <div className="mini-look mini-three"></div>

            <strong>
              Change the mood
            </strong>

            <small>
              Same occasion, new energy
            </small>

          </button>

        </div>

      </section>


      <footer className="ww-footer">

        <Link
          href="/"
          className="ww-logo"
        >
          <span className="ww-logo-mark">
            W
          </span>

          <span>
            WEARWISE
          </span>
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

export default function RecommendationsPage() {
  return (
    <Suspense
      fallback={
        <main className="recommendation-page">
          <div className="recommendation-loading">
            Building your look...
          </div>
        </main>
      }
    >
      <RecommendationContent />
    </Suspense>
  );
}
