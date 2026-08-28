"use client";

export default function OutfitInspirationCard({ item }) {
  return (
    <article className="inspiration-card">
      <a className="inspiration-image-wrap" href={item.sourceUrl || '#'} target="_blank" rel="noreferrer">
        <img src={item.image} alt={item.title} className="inspiration-image" loading="lazy" />
      </a>
      <div className="inspiration-copy">
        <span className="section-label">{item.occasion} · {item.style}</span>
        <h3>{item.title}</h3>
        <p>{item.season} · {(item.colors || []).join(" · ")}</p>
        <small className="image-credit">
          Photo by <a href={item.creatorUrl || item.sourceUrl || '#'} target="_blank" rel="noreferrer">{item.creator || 'Contributor'}</a> on <a href={item.sourceUrl || '#'} target="_blank" rel="noreferrer">{item.source || 'source'}</a>.
        </small>
      </div>
    </article>
  );
}
