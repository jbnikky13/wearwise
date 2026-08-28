"use client";

export default function OutfitInspirationCard({ item }) {
  return (
    <article className="inspiration-card">
      <div className="inspiration-image-wrap">
        <img src={item.image} alt={item.title} className="inspiration-image" />
      </div>
      <div className="inspiration-copy">
        <span className="section-label">{item.occasion} · {item.style}</span>
        <h3>{item.title}</h3>
        <p>{item.season} · {item.colors.join(" · ")}</p>
        <small>
          {item.sourceUrl ? (
            <>Photo by <a href={item.sourceUrl} target="_blank" rel="noreferrer">{item.creator}</a> on {item.source}.</>
          ) : (
            item.attribution
          )}
        </small>
      </div>
    </article>
  );
}
