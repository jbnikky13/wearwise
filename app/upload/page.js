"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

const scoreRules = {
  casual: { base: 82, title: "Easy, considered style." },
  work: { base: 86, title: "Polished and professional." },
  party: { base: 84, title: "Ready for the moment." },
  date: { base: 85, title: "Balanced and intentional." },
  travel: { base: 83, title: "Comfort meets style." },
  evening: { base: 87, title: "A refined evening look." },
};

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [occasion, setOccasion] = useState("casual");
  const [style, setStyle] = useState("balanced");
  const [season, setSeason] = useState("all-season");
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const preview = useMemo(() => (file ? URL.createObjectURL(file) : null), [file]);

  function analyze() {
    if (!file) return;
    setAnalyzing(true);
    setResult(null);
    setTimeout(() => {
      const rule = scoreRules[occasion] || scoreRules.casual;
      const styleBonus = style === "minimal" ? 2 : style === "bold" ? 1 : 0;
      const seasonBonus = season === "all-season" ? 1 : 0;
      const score = Math.min(98, rule.base + styleBonus + seasonBonus);
      setResult({
        score,
        title: rule.title,
        strengths: [
          "The selected pieces can create a clear, coordinated outfit.",
          `${occasion[0].toUpperCase() + occasion.slice(1)} is a strong match for this styling direction.`,
          "Keeping the accessories intentional will help the outfit feel finished."
        ],
        suggestions: [
          "Keep the main silhouette balanced rather than adding too many competing pieces.",
          season === "all-season" ? "Adjust fabric weight if the weather is especially hot or cool." : `Choose fabrics that suit the ${season} season.`,
          "Use one accent piece if you want a stronger focal point."
        ]
      });
      setAnalyzing(false);
    }, 850);
  }

  return (
    <main className="upload-page">
      <nav className="ww-nav">
        <Link href="/" className="ww-logo"><span className="ww-logo-mark">W</span>WEARWISE</Link>
        <Link href="/dashboard" className="back-link">Dashboard →</Link>
      </nav>

      <section className="upload-workspace">
        <span className="section-label">OUTFIT REVIEW · FREE DEMO</span>
        <h1>Rate your<br/><em>look.</em></h1>
        <p>This free demo uses WearWise's local style engine. It does not send your photo to an AI provider and does not claim to visually inspect the image.</p>

        <label className="upload-drop">
          <input type="file" accept="image/jpeg,image/png,image/webp" onChange={e => { setFile(e.target.files?.[0] || null); setResult(null); }} />
          {preview ? <img src={preview} alt="Selected outfit preview" style={{maxWidth:"100%",maxHeight:260,objectFit:"contain",borderRadius:18}} /> : <span className="upload-plus">+</span>}
          <strong>{file ? file.name : "Choose outfit photo"}</strong>
          <small>{file ? "Ready for review" : "JPG, PNG or WEBP · kept in your browser"}</small>
        </label>

        <div className="finder-group">
          <span className="finder-label">OCCASION</span>
          <div className="finder-options">
            {Object.keys(scoreRules).map(x => <button type="button" key={x} className={occasion === x ? "finder-option active" : "finder-option"} onClick={() => setOccasion(x)}>{x}</button>)}
          </div>
        </div>
        <div className="finder-group">
          <span className="finder-label">STYLE DIRECTION</span>
          <div className="finder-options">
            {['balanced','minimal','bold'].map(x => <button type="button" key={x} className={style === x ? "finder-option active" : "finder-option"} onClick={() => setStyle(x)}>{x}</button>)}
          </div>
        </div>
        <div className="finder-group">
          <span className="finder-label">SEASON</span>
          <div className="finder-options">
            {['all-season','spring','summer','autumn','winter'].map(x => <button type="button" key={x} className={season === x ? "finder-option active" : "finder-option"} onClick={() => setSeason(x)}>{x}</button>)}
          </div>
        </div>

        {file && <button className="finder-submit" disabled={analyzing} onClick={analyze}>{analyzing ? "Analyzing..." : "Analyze Outfit ↗"}</button>}

        {result && (
          <div className="feedback-result">
            <span className="section-label">WEARWISE DEMO ANALYSIS</span>
            <div className="look-score" style={{marginTop:20}}><div><span>STYLE SCORE</span><strong>{result.score}<small>/100</small></strong></div><div className="score-ring">{result.score}</div></div>
            <h2>{result.title}</h2>
            <p><strong>What works</strong></p>
            <ul>{result.strengths.map(x => <li key={x}>{x}</li>)}</ul>
            <p><strong>Try this</strong></p>
            <ul>{result.suggestions.map(x => <li key={x}>{x}</li>)}</ul>
            <small>This is a rule-based demo. A future vision provider can replace this engine for real image understanding.</small>
          </div>
        )}
      </section>
    </main>
  );
}
