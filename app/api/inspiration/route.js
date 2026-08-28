import { NextResponse } from 'next/server';

const QUERIES = {
  casual: 'casual outfit fashion clothing',
  work: 'professional work outfit fashion clothing',
  party: 'party outfit fashion clothing',
  date: 'smart casual outfit fashion clothing',
  travel: 'travel outfit fashion clothing',
  evening: 'elegant evening outfit fashion clothing'
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const occasion = searchParams.get('occasion') || 'casual';
  const page = Math.max(1, Number(searchParams.get('page') || 1));
  const perPage = Math.min(20, Math.max(6, Number(searchParams.get('per_page') || 12)));
  const key = process.env.UNSPLASH_ACCESS_KEY;

  if (!key) {
    return NextResponse.json({
      configured: false,
      message: 'Add UNSPLASH_ACCESS_KEY in Vercel to enable live visual inspiration.',
      items: []
    });
  }

  try {
    const query = QUERIES[occasion] || QUERIES.casual;
    const url = new URL('https://api.unsplash.com/search/photos');
    url.searchParams.set('query', query);
    url.searchParams.set('page', String(page));
    url.searchParams.set('per_page', String(perPage));
    url.searchParams.set('content_filter', 'high');
    url.searchParams.set('orientation', 'portrait');

    const response = await fetch(url, {
      headers: { Authorization: `Client-ID ${key}`, 'Accept-Version': 'v1' },
      next: { revalidate: 900 }
    });

    if (!response.ok) {
      return NextResponse.json({ configured: true, error: 'Inspiration provider request failed.', items: [] }, { status: 502 });
    }

    const data = await response.json();
    const items = (data.results || []).map((photo) => ({
      id: photo.id,
      title: `${occasion[0].toUpperCase()}${occasion.slice(1)} inspiration`,
      image: photo.urls?.regular || photo.urls?.small,
      thumb: photo.urls?.small,
      occasion,
      style: 'Inspiration',
      season: 'All-season',
      colors: [photo.color || 'neutral'],
      creator: photo.user?.name || 'Unsplash contributor',
      creatorUrl: photo.user?.links?.html ? `${photo.user.links.html}?utm_source=wearwise&utm_medium=referral` : 'https://unsplash.com/?utm_source=wearwise&utm_medium=referral',
      source: 'Unsplash',
      sourceUrl: photo.links?.html ? `${photo.links.html}?utm_source=wearwise&utm_medium=referral` : 'https://unsplash.com/?utm_source=wearwise&utm_medium=referral',
      license: 'Unsplash License',
      attribution: `Photo by ${photo.user?.name || 'Unsplash contributor'} on Unsplash.`
    }));

    return NextResponse.json({ configured: true, total: data.total || 0, page, perPage, items });
  } catch {
    return NextResponse.json({ configured: true, error: 'Unable to load inspiration right now.', items: [] }, { status: 500 });
  }
}
