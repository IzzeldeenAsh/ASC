import { useState, useEffect } from "react";
import { rem } from '@mantine/core';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { IconNews, IconSearch } from '@tabler/icons-react';
import { useRouter } from 'next/router';

// Function to normalize text for search
const normalizeText = (text) => {
  return text
    .toLowerCase() // Convert to lower case
    .normalize('NFD') // Normalize Unicode
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[\u064B-\u065F]/g, '') // Remove Arabic diacritics
    .replace(/\s+/g, ''); // Remove whitespace
};

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const router = useRouter();

  const handleSearch = async (value) => {
    console.log("value",value)
    setQuery(value);
    if (!value) {
      setResults([]);
      return;
    }
    const res = await fetch(`/api/search?query=${value}`);
    const data = await res.json();
    console.log("data", data);

    // Normalize the input query
    const normalizedQuery = normalizeText(value);

    // Filter results based on normalized keywords (case-insensitive, diacritic-insensitive)
    const filteredResults = data.filter(result => 
      result.keywords?.some(keyword => normalizeText(keyword).includes(normalizedQuery))
    );

    console.log("filteredResults", filteredResults);
    setResults(filteredResults);
  };

  const actions = results.map((result) => ({
    id: result.id,
    label: result.title,
    description: result.shortDescription || '',
    onClick: () => router.push(result.link), // Use router.push for navigation
    leftSection: <IconNews style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
  }));
  console.log("actions",actions)


  return (
    <>
      <a className="global-search-bar" onClick={spotlight.open}> 
        <svg width="24" height="24" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" />
          <path d="M22 22.7499C21.81 22.7499 21.62 22.6799 21.47 22.5299L19.47 20.5299C19.18 20.2399 19.18 19.7599 19.47 19.4699C19.76 19.1799 20.24 19.1799 20.53 19.4699L22.53 21.4699C22.82 21.7599 22.82 22.2399 22.53 22.5299C22.38 22.6799 22.19 22.7499 22 22.7499Z" />
        </svg>
      </a>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
          placeholder: 'Search...',
          onChange: (e) => handleSearch(e.target.value),
        }}
      />
    
    </>
  );
};

export default SearchBar;
