import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1); // To keep track of the selected result
    const resultsRef = useRef(null);

    const handleSearch = async (value) => {
        setQuery(value);
        setSelectedIndex(-1); // Reset selected index on new search
        if (!value) {
            setResults([]);
            return;
        }
        const res = await fetch(`/api/search?query=${value}`);
        const data = await res.json();
        console.log("data", data);

        // Filter results based on keywords (case-insensitive)
        const filteredResults = data.filter(result => 
            result.keywords?.some(keyword => keyword.toLowerCase().includes(value.toLowerCase()))
        );

        setResults(filteredResults); 
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            setSelectedIndex((prevIndex) => Math.min(prevIndex + 1, results.length - 1));
        } else if (e.key === "ArrowUp") {
            setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        } else if (e.key === "Enter" && selectedIndex >= 0) {
            window.location.href = results[selectedIndex].link;
        }
    };

    useEffect(() => {
        if (resultsRef.current) {
            resultsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }
    }, [selectedIndex]);

    return (
        <div className="global-search-bar">
            <div className="icon-input-container">
                <input 
                    className="global-search-input"
                    type="text" 
                    placeholder="."
                    value={query} 
                    onChange={(e) => handleSearch(e.target.value)} 
                    onKeyDown={handleKeyDown}
                />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" />
                    <path d="M22 22.7499C21.81 22.7499 21.62 22.6799 21.47 22.5299L19.47 20.5299C19.18 20.2399 19.18 19.7599 19.47 19.4699C19.76 19.1799 20.24 19.1799 20.53 19.4699L22.53 21.4699C22.82 21.7599 22.82 22.2399 22.53 22.5299C22.38 22.6799 22.19 22.7499 22 22.7499Z" />
                </svg>
            </div>
            <ul>
                {results.map((result, index) => (
                    <Link href={result.link} key={result.id}>
                        <li
                            style={{ margin: '5px 0' }}
                            className={index === selectedIndex ? 'selected' : ''}
                            ref={index === selectedIndex ? resultsRef : null}
                        >
                            {result.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;
