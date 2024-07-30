import { aggregatedData } from "@data/Search-Engine/searchAggregatedData";

export default function handler(req, res) {
  const { query, locale = 'en' } = req.query; // Assume 'en' as default locale

  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  const lowerCaseQuery = query.toLowerCase();

  // Robust data validation:
  if (!aggregatedData || !Array.isArray(aggregatedData)) {
    console.error("Error: aggregatedData is undefined or not an array.");
    return res.status(500).json({ error: "Internal Server Error" }); 
  }

  // Optimized Filtering & Null/Undefined Checks
  const results = aggregatedData.filter(item => {
    const searchFields = [
      typeof item.title[locale] === 'string' ? item.title[locale].toLowerCase() : '',
      typeof item.shortDescription[locale] === 'string' ? item.shortDescription[locale].toLowerCase() : '',
      Array.isArray(item.keywords) ? item.keywords.join(' ').toLowerCase() : ''
    ].filter(Boolean); // Remove undefined or empty values

    return searchFields.some(field => field.includes(lowerCaseQuery));
  });

  // Limit Results (Optional but recommended for performance)
  const limitedResults = results.slice(0, 10); // Adjust the limit as needed

  res.status(200).json(limitedResults);
}
