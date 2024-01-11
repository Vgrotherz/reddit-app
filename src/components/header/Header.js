import React, { useRef, useState } from "react"; 
import './header.css';

const Header = () => {

    const [ searchResults, setSearchResults ] = useState([]);
    const searchInputRef = useRef(null);

    const onClickSearch = async () => {
        const searchTerm = searchInputRef.current.value;

        try {
            const response = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}`);
            const data = await response.json();

            setSearchResults(data.data.children);
        } catch (error) {
            console.error("Error fetching Reddit API:", error);
        }  
    }

    return(
        <>
            <div className="header">
                <form className="search_div" onSubmit={(e) => e.preventDefault()} >
                    <input className="search_bar" ref={searchInputRef} placeholder="Search NOW!"></input>
                    <svg onClick={onClickSearch} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M15.7233 13.8365H14.7296L14.3774 13.4969C15.6101 12.0629 16.3522 10.2013 16.3522 8.1761C16.3522 3.66038 12.6918 0 8.1761 0C3.66038 0 0 3.66038 0 8.1761C0 12.6918 3.66038 16.3522 8.1761 16.3522C10.2013 16.3522 12.0629 15.6101 13.4969 14.3774L13.8365 14.7296V15.7233L20.1258 22L22 20.1258L15.7233 13.8365ZM8.1761 13.8365C5.04402 13.8365 2.51572 11.3082 2.51572 8.1761C2.51572 5.04402 5.04402 2.51572 8.1761 2.51572C11.3082 2.51572 13.8365 5.04402 13.8365 8.1761C13.8365 11.3082 11.3082 13.8365 8.1761 13.8365Z" fill="black"/>
                    </svg>
                </form>
            </div>

            <div>
                {/* Display search results */}
                {searchResults.map((result) => (
                    <div key={result.data.id}>{result.data.title}</div>
                ))}
            </div>
        </>
    );
}

export default Header;