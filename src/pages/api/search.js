import { aggregatedData } from "@data/Search-Engine/searchAggregatedData";

// Add the normalizeText function
const normalizeText = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[\u064B-\u065F]/g, '') // Remove Arabic diacritics
    .replace(/\s+/g, ''); // Remove whitespace
};

export default function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  // Normalize the query
  const normalizedQuery = normalizeText(query);

  if (!aggregatedData || !Array.isArray(aggregatedData)) {
    console.error("Error: aggregatedData is undefined or not an array.");
    return res.status(500).json({ error: "Internal Server Error" }); 
  }

  // Optimized Filtering & Null/Undefined Checks
  const results = aggregatedData.filter(item => {
    const searchFields = [
      item.title?.english,
      item.title?.arabic,
      item.shortDescription?.english,
      item.shortDescription?.arabic,
      item.keywords?.join(' ')
    ].filter(Boolean);

    // Debugging: Log the fields and normalized fields
    console.log("Search Fields:", searchFields);
    const normalizedFields = searchFields.map(field => normalizeText(field));
    console.log("Normalized Fields:", normalizedFields);
    
    return normalizedFields.some(field => field.includes(normalizedQuery));
  });

  const limitedResults = results.slice(0, 10);

  res.status(200).json(limitedResults);
}
