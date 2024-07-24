import { useState, useEffect, useRef } from "react";
import { rem } from '@mantine/core';
import { IconNews, IconSearch } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import Truncate from "./Truncate";
import { useLocale } from "@/utils/getLocale";

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
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const router = useRouter();
  const paperRootRef = useRef(null);
  const { activeLocale } = useLocale();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (paperRootRef.current && !paperRootRef.current.contains(event.target)) {
        setIsOverlayVisible(false);
      }
    };

    if (isOverlayVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOverlayVisible]);

  const handleSearch = async (value) => {
    setQuery(value);
    if (!value) {
      setResults([]);
      return;
    }
    const res = await fetch(`/api/search?query=${value}`);
    const data = await res.json();

    // Normalize the input query
    const normalizedQuery = normalizeText(value);

    // Filter results based on normalized keywords (case-insensitive, diacritic-insensitive)
    const filteredResults = data.filter(result => 
      result.keywords?.some(keyword => normalizeText(keyword).includes(normalizedQuery))
    );

    setResults(filteredResults);
  };

  const actions = results.map((result) => ({
    id: result.id,
    label: activeLocale ==='ar' ?   result.title.arabic :  result.title.english,
    description: (activeLocale ==='ar' ? result.shortDescription.arabic : result.shortDescription.english)  || '',
    onClick: () => {
      router.push(result.link); // Use router.push for navigation
      setIsOverlayVisible(false); // Close overlay on selection
    },
    icon: <IconNews  style={{color:"#868E96", width: rem(24), height: rem(24)  }} stroke={1.5} />,
  }));

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <>
      <a className="global-search-bar" onClick={toggleOverlay}> 
        <svg width="24" height="24" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" />
          <path d="M22 22.7499C21.81 22.7499 21.62 22.6799 21.47 22.5299L19.47 20.5299C19.18 20.2399 19.18 19.7599 19.47 19.4699C19.76 19.1799 20.24 19.1799 20.53 19.4699L22.53 21.4699C22.82 21.7599 22.82 22.2399 22.53 22.5299C22.38 22.6799 22.19 22.7499 22 22.7499Z" />
        </svg>
      </a>
      {isOverlayVisible && (
        <div className="spotlight-root">
          <div className="spotlight-overlay">
            <div className="spotlight-paper-root" ref={paperRootRef}>
              <div className="spotlight-search">
                <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
                <input
                  type="text"
                  placeholder={activeLocale ==='ar' ? "البحث..." : "Search..."}
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              <div className="spotlight-results">
                {actions.length > 0 ? (
                  actions.map((action) => (
                    <div key={action.id} className="spotlight-result" onClick={action.onClick}>
                    <div style={{flex:1,maxWidth:"30px"}}>  {action.icon}</div>
                      <div>
                        <div>{action.label}</div>
                        <div className="mil-text-xs mil-dark-soft" style={{lineHeight:"1.1"}}>
                          <Truncate text={action.description} maxLength={100} />
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="spotlight-no-results">
                    {activeLocale ==='ar' ? "لا يوجد شيء لعرضه..." : "Nothing found..."}
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
