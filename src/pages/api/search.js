import { aggregatedData } from "@data/Search-Engine/searchAggregatedData";

export default function handler(req, res) {
  const { query } = req.query;

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
      item.title?.toLowerCase(),
      item.shortDescription?.toLowerCase(),
      item.keywords?.join(' ').toLowerCase() // Join keywords and convert to lowercase
    ].filter(Boolean); // Remove undefined values
    return searchFields.some(field => field.includes(lowerCaseQuery));
  });

  // Limit Results (Optional but recommended for performance)
  const limitedResults = results.slice(0, 10); // Adjust the limit as needed

  res.status(200).json(limitedResults);
}
