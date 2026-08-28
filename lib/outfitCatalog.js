// WearWise visual inspiration catalog.
// Only add images you are licensed/authorized to display, or use an approved API.
// Keep source, creator, and license/usage notes with every image for attribution.

export const outfitCatalog = [
  {
    id: "demo-minimal-casual",
    title: "Minimal Casual",
    image: "/clothes/top.svg",
    category: "outfit",
    occasion: "casual",
    style: "Minimal",
    season: "All-season",
    colors: ["neutral"],
    source: "WearWise original demo illustration",
    creator: "WearWise",
    sourceUrl: null,
    license: "Original WearWise asset",
    attribution: "Illustration created for WearWise"
  },
  {
    id: "demo-smart-work",
    title: "Smart Work Look",
    image: "/clothes/bottom.svg",
    category: "outfit",
    occasion: "work",
    style: "Classic",
    season: "All-season",
    colors: ["neutral"],
    source: "WearWise original demo illustration",
    creator: "WearWise",
    sourceUrl: null,
    license: "Original WearWise asset",
    attribution: "Illustration created for WearWise"
  },
  {
    id: "demo-clean-sneakers",
    title: "Clean Everyday Shoes",
    image: "/clothes/shoes.svg",
    category: "outfit",
    occasion: "travel",
    style: "Relaxed",
    season: "All-season",
    colors: ["neutral"],
    source: "WearWise original demo illustration",
    creator: "WearWise",
    sourceUrl: null,
    license: "Original WearWise asset",
    attribution: "Illustration created for WearWise"
  }
];

export function getOutfits(filters = {}) {
  return outfitCatalog.filter((item) => {
    if (filters.occasion && filters.occasion !== "all" && item.occasion !== filters.occasion) return false;
    if (filters.style && filters.style !== "all" && item.style !== filters.style) return false;
    if (filters.season && filters.season !== "all" && item.season.toLowerCase() !== filters.season.toLowerCase()) return false;
    return true;
  });
}
