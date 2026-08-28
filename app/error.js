"use client";
export default function Error({reset}){return <main className="error-page"><span className="section-label">WEARWISE</span><h1>Something went<br/><em>off-script.</em></h1><p>The page hit an unexpected error. Try again.</p><button className="finder-submit" onClick={()=>reset()}>Try again ↗</button></main>}
