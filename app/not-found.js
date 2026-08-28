import Link from 'next/link';
export default function NotFound(){return <main className="error-page"><span className="section-label">404 / WEARWISE</span><h1>Look not<br/><em>found.</em></h1><p>That page isn't part of this collection.</p><Link href="/" className="finder-submit">Back home ↗</Link></main>}
