"use client";
import '../catalog/catalog.css';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { clothingCatalog } from '../../lib/clothing';
import OutfitInspirationCard from '../../components/OutfitInspirationCard';

const occasions = ['casual','work','party','date','travel','evening'];

export default function CatalogPage() {
  const [category, setCategory] = useState('All');
  const [occasion, setOccasion] = useState('casual');
  const [inspiration, setInspiration] = useState([]);
  const [loading, setLoading] = useState(true);
  const [configured, setConfigured] = useState(true);
  const [error, setError] = useState('');

  const items = useMemo(() => category === 'All' ? clothingCatalog : clothingCatalog.filter(x => x.category === category), [category]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError('');
    fetch(`/api/inspiration?occasion=${encodeURIComponent(occasion)}&per_page=12`)
      .then(r => r.json())
      .then(data => {
        if (cancelled) return;
        setConfigured(data.configured !== false);
        setInspiration(data.items || []);
        if (data.error) setError(data.error);
      })
      .catch(() => { if (!cancelled) setError('Could not load live inspiration.'); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [occasion]);

  return <main className="catalog-page">
    <nav className="ww-nav"><Link href="/" className="ww-logo"><span className="ww-logo-mark">W</span>WEARWISE</Link><Link href="/#finder" className="back-link">← Style Finder</Link></nav>
    <section className="dashboard-hero">
      <span className="section-label">WEARWISE CLOSET</span>
      <h1>Explore the<br/><em>pieces.</em></h1>
      <p>Browse clothing choices and visual outfit inspiration. Every external image keeps its creator and source credit.</p>
      <div className="finder-options">{['All','Top','Bottom','Shoes'].map(x => <button key={x} className={category === x ? 'finder-option active' : 'finder-option'} onClick={() => setCategory(x)}>{x}</button>)}</div>
    </section>

    <section className="catalog-section">
      <div className="catalog-section-heading"><span className="section-label">WEARWISE PICKS</span><h2>Clothing pieces</h2></div>
      <div className="catalog-grid">{items.map(item => <article className="catalog-card" key={item.id}>
        <img src={item.image} alt={item.name} loading="lazy"/>
        <div><small>{item.category}</small><h2>{item.name}</h2><p>{item.styles.join(' · ')}</p><a href={item.sourceUrl} target="_blank" rel="noreferrer">Source & credit ↗</a></div>
      </article>)}</div>
    </section>

    <section className="inspiration-section">
      <div className="inspiration-heading"><div><span className="section-label">VISUAL INSPIRATION</span><h2>Looks for your<br/><em>moment.</em></h2></div><div className="finder-options">{occasions.map(x => <button key={x} className={occasion === x ? 'finder-option active' : 'finder-option'} onClick={() => setOccasion(x)}>{x}</button>)}</div></div>
      {!configured && <div className="catalog-notice">Live inspiration is ready but needs your Unsplash Access Key in Vercel. The built-in clothing catalog remains available.</div>}
      {error && <div className="catalog-notice">{error}</div>}
      {loading ? <div className="catalog-loading">Loading visual inspiration…</div> : inspiration.length ? <div className="inspiration-grid">{inspiration.map(item => <OutfitInspirationCard item={item} key={item.id}/>)}</div> : configured && <div className="catalog-notice">No live inspiration is available for this selection yet.</div>}
    </section>
  </main>;
}
