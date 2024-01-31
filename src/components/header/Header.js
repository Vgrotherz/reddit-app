import React, { useRef } from "react"; 
import './header.css';

const Header = ({ onSearch, onGamingSearch, onNewsSearch, onSportsSearch, onBusinessSearch, onCryptoSearch, onTelevisionSearch, onCelebritySearch }) => {
    const searchInputRef = useRef(null);

    const onClickSearch = () => {
        const searchTerm = searchInputRef.current.value;
        onSearch(searchTerm);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onClickSearch();
        }
    }


    return(
        <>
            <div className="header">
                <div className="logo">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="logo-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"></path> 
                    </svg>
                    <p>reddit<span className="span">minimal</span></p>
                    
                </div>
                <form className="search_div" onSubmit={(e) => e.preventDefault()} >
                    <input className="search_bar" ref={searchInputRef} placeholder="Search NOW!"
                    // searching user input by pressing on enter key
                    onKeyDown={handleKeyDown}
                    ></input>
                    <svg 
                    // searching user input by pressing on icon
                    onClick={onClickSearch}
                    
                    // searching button input in ButtonsAside.js
                    onGamingSearch={onGamingSearch} 
                    onNewsSearch={onNewsSearch}
                    onSportsSearch={onSportsSearch}
                    onBusinessSearch={onBusinessSearch}
                    onCryptoSearch={onCryptoSearch}
                    onTelevisionSearch={onTelevisionSearch} 
                    onCelebritySearch={onCelebritySearch}

                    xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M15.7233 13.8365H14.7296L14.3774 13.4969C15.6101 12.0629 16.3522 10.2013 16.3522 8.1761C16.3522 3.66038 12.6918 0 8.1761 0C3.66038 0 0 3.66038 0 8.1761C0 12.6918 3.66038 16.3522 8.1761 16.3522C10.2013 16.3522 12.0629 15.6101 13.4969 14.3774L13.8365 14.7296V15.7233L20.1258 22L22 20.1258L15.7233 13.8365ZM8.1761 13.8365C5.04402 13.8365 2.51572 11.3082 2.51572 8.1761C2.51572 5.04402 5.04402 2.51572 8.1761 2.51572C11.3082 2.51572 13.8365 5.04402 13.8365 8.1761C13.8365 11.3082 11.3082 13.8365 8.1761 13.8365Z" fill="black"/>
                    </svg>
                    
                </form>
            </div>
        </>
    );
}

export default Header;