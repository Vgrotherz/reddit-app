import React from "react";
import './buttonsAside.css';

const ButtonsAside = ({ onGamingSearch, onNewsSearch, onSportsSearch, onBusinessSearch, onCryptoSearch, onTelevisionSearch, onCelebritySearch, searchResults }) => {

    // props to App.js where in conponent ButtonsAside - there are a 'words'
    const newsSearch = () => { onNewsSearch() }
    const gamingSearch = () => { onGamingSearch() }
    const sportsSearch = () => { onSportsSearch() }
    const businessSearch = () => { onBusinessSearch() }
    const cryptoSearch = () => { onCryptoSearch() }
    const televisionSearch = () => { onTelevisionSearch() }
    const celebritySearch = () => { onCelebritySearch() }

    // from now till 24 - ex of old way functions to search words by pressing on the buttons
    // const sportsSearch = () => {
    //     const sports = 'Sports';
    //     onSportsSearch(sports);
    // }

    // const businessSearch = () => {
    //     const business = 'Business';
    //     onBusinessSearch(business);
    // }

    return (
        <div>
            <div className="aside_block">
                    <button onClick={newsSearch}>
                        <svg rpl="" fill="currentColor" height="20" icon-name="topic-reading-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.375 2h-7.292A2.688 2.688 0 0 0 10 3a2.688 2.688 0 0 0-2.083-1H.625A.625.625 0 0 0 0 2.625v14.75A.625.625 0 0 0 .625 18h7.917v-1.25H1.25V3.25h6.667a1.465 1.465 0 0 1 1.458 1.469v11.093h1.25V4.719a1.465 1.465 0 0 1 1.458-1.469h6.667v13.5h-6.667a2.64 2.64 0 0 0-2.708 2.625V20h1.25v-.625A1.388 1.388 0 0 1 12.083 18h7.292a.624.624 0 0 0 .625-.625V2.625A.625.625 0 0 0 19.375 2Z"></path>
                        </svg>
                            Fresh News
                    </button>
                    <button onClick={gamingSearch}>
                        <svg rpl="" fill="currentColor" height="20" icon-name="topic-videogaming-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.929 14.17 18.277 6.6a4.631 4.631 0 0 0-4.52-3.6H5.702a4.623 4.623 0 0 0-4.58 3.908L.034 14.387a3.134 3.134 0 0 0 .735 2.5 3.227 3.227 0 0 0 5.553-1.284l.39-1.635h5.794l.39 1.635A3.2 3.2 0 0 0 16.01 18h.782a3.211 3.211 0 0 0 3.123-2.444c.109-.455.114-.929.015-1.386Zm-1.6 1.85a1.964 1.964 0 0 1-1.54.73h-.781a1.947 1.947 0 0 1-1.9-1.453l-.63-2.476H5.74L5.11 15.3a1.947 1.947 0 0 1-1.9 1.453 1.974 1.974 0 0 1-1.5-.678 1.862 1.862 0 0 1-.443-1.506l1.09-7.481A3.366 3.366 0 0 1 5.7 4.25h8.062a3.373 3.373 0 0 1 3.3 2.614l1.65 7.573a1.877 1.877 0 0 1-.383 1.583h-.001Z"></path><path d="M6.256 6.212h-1.25v1.776h-1.73v1.25h1.73v1.622h1.25V9.238h1.73v-1.25h-1.73V6.212Z"></path><path d="M11.82 8.81a1 1 0 1 0 1.71.71 1.001 1.001 0 0 0-.3-.71 1.034 1.034 0 0 0-1.41 0Z"></path><path d="M15.23 6.85a.875.875 0 0 0-.32-.22c-.246-.1-.522-.1-.77 0a.875.875 0 0 0-.32.22.975.975 0 0 0 0 1.41 1 1 0 0 0 1.41 0 1.03 1.03 0 0 0 .22-1.09.877.877 0 0 0-.22-.32Z"></path>
                        </svg>
                        Gaming
                    </button>
                    <button onClick={sportsSearch}>
                        <svg rpl="" fill="currentColor" height="20" icon-name="topic-sports-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0ZM4.124 16.465l1.259-3.007a9.906 9.906 0 0 0 .261-6.964l-1.186.4a8.656 8.656 0 0 1-.228 6.087l-1.046 2.5a8.75 8.75 0 1 1 13.632 0l-1.046-2.5a8.653 8.653 0 0 1-.228-6.086l-1.186-.4a9.906 9.906 0 0 0 .261 6.964l1.259 3.007a8.7 8.7 0 0 1-11.752-.001Z"></path>
                        </svg>
                        Sports
                    </button>
                    <button onClick={businessSearch}>
                        <svg rpl="" fill="currentColor" height="20" icon-name="topic-business-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.25 19H1v-4.5h1.25V19Zm4-7H5v7h1.25v-7Zm8 0H13v7h1.25v-7Zm4-5H17v12h1.25V7ZM6 7.557l3.206 3.2a1.126 1.126 0 0 0 1.59 0l8.647-8.646-.884-.884L10 9.79l-3.2-3.2a1.153 1.153 0 0 0-1.59 0L.559 11.231l.884.884L6 7.557Zm4.25 6.943H9V19h1.25v-4.5Z"></path>
                        </svg>
                        Business
                    </button>
                    <button onClick={cryptoSearch}>
                        <svg rpl="" fill="currentColor" height="20" icon-name="topic-crypto-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.66 14H8.34a1.126 1.126 0 0 1-.974-.562l-1.8-3.125a.623.623 0 0 1 0-.625l1.8-3.125A1.125 1.125 0 0 1 8.34 6h3.32a1.125 1.125 0 0 1 .974.563l1.8 3.125a.623.623 0 0 1 0 .625l-1.8 3.125a1.127 1.127 0 0 1-.974.562Zm-3.247-1.25h3.174L13.175 10l-1.588-2.75H8.413L6.825 10l1.588 2.75Zm-3.93-4.312 1.443-2.5a1.13 1.13 0 0 0 0-1.125l-1.9-3.292-1.083.625 1.864 3.229-1.37 2.375H.4V9h3.1a1.126 1.126 0 0 0 .982-.562Zm1.443 6.75a1.13 1.13 0 0 0 0-1.125l-1.444-2.5A1.125 1.125 0 0 0 3.508 11H.4v1.25h3.036l1.371 2.375-1.864 3.229 1.083.625 1.9-3.291ZM19.6 7.75h-3.036l-1.37-2.375 1.863-3.229-1.083-.625-1.9 3.292a1.13 1.13 0 0 0 0 1.125l1.444 2.5a1.126 1.126 0 0 0 .974.562h3.1l.008-1.25Zm-2.539 10.1-1.864-3.229 1.371-2.375H19.6V11h-3.1a1.125 1.125 0 0 0-.974.563l-1.444 2.5a1.13 1.13 0 0 0 0 1.125l1.9 3.291 1.08-.629Z"></path>
                        </svg>
                        Crypto
                    </button>
                    <button onClick={televisionSearch}>
                        <svg rpl="" fill="currentColor" height="20" icon-name="topic-television-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.375 15h-4.75A2.63 2.63 0 0 1 3 12.375v-4.75A2.629 2.629 0 0 1 5.625 5h4.75A2.63 2.63 0 0 1 13 7.625v4.75A2.63 2.63 0 0 1 10.375 15Zm-4.75-8.75A1.377 1.377 0 0 0 4.25 7.625v4.75a1.377 1.377 0 0 0 1.375 1.375h4.75a1.377 1.377 0 0 0 1.375-1.375v-4.75a1.377 1.377 0 0 0-1.375-1.375h-4.75ZM16.29 7.33c.19-.188.297-.443.3-.71a1.224 1.224 0 0 0-.02-.19.602.602 0 0 0-.06-.19.557.557 0 0 0-.09-.17 1.01 1.01 0 0 0-.13-.16 1.02 1.02 0 0 0-1.08-.21.933.933 0 0 0-.33.21.61.61 0 0 0-.12.16.95.95 0 0 0-.1.17c-.023.062-.04.125-.05.19a1.007 1.007 0 0 0 .27.9.933.933 0 0 0 .33.21.838.838 0 0 0 .38.08 1.01 1.01 0 0 0 .7-.29Zm-.51 3.27c.066-.01.13-.03.19-.06a.557.557 0 0 0 .17-.09 1.017 1.017 0 0 0 .45-.83 1.224 1.224 0 0 0-.02-.19.602.602 0 0 0-.06-.19.557.557 0 0 0-.09-.17 1.01 1.01 0 0 0-.13-.16 1.02 1.02 0 0 0-1.08-.21.933.933 0 0 0-.33.21.61.61 0 0 0-.12.16.95.95 0 0 0-.1.17c-.023.062-.04.125-.05.19a1.007 1.007 0 0 0 .27.9c.192.183.445.286.71.29.064-.002.127-.008.19-.02Zm2.6 7.4H1.625A1.627 1.627 0 0 1 0 16.375V3.625A1.627 1.627 0 0 1 1.625 2h16.75A1.627 1.627 0 0 1 20 3.625v12.75A1.627 1.627 0 0 1 18.375 18h.005ZM1.625 3.25a.375.375 0 0 0-.375.375v12.75a.375.375 0 0 0 .375.375h16.75a.375.375 0 0 0 .375-.375V3.625a.375.375 0 0 0-.375-.375H1.625Z"></path>
                        </svg>
                        Television
                    </button>
                    <button onClick={celebritySearch}>
                        <svg rpl="" fill="currentColor" height="20" icon-name="topic-celebrity-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 13.979a3.003 3.003 0 0 1-2.772-1.85 2.993 2.993 0 0 1 2.187-4.086 3.004 3.004 0 0 1 3.08 1.274 2.994 2.994 0 0 1-.373 3.784A3.003 3.003 0 0 1 10 13.98Zm0-4.745a1.752 1.752 0 0 0-1.617 1.08 1.746 1.746 0 0 0 1.275 2.383 1.752 1.752 0 0 0 2.092-1.715A1.748 1.748 0 0 0 10 9.234ZM15.5 19.497c-.15 0-.3-.03-.438-.09L10 17.235l-5.063 2.172a1.103 1.103 0 0 1-1.447-.555 1.097 1.097 0 0 1-.092-.558l.512-5.456L.274 8.724a1.098 1.098 0 0 1 .588-1.798l5.377-1.199 2.813-4.719a1.14 1.14 0 0 1 1.9 0l2.809 4.713 5.378 1.199a1.1 1.1 0 0 1 .838 1.294c-.038.187-.125.36-.25.504l-3.64 4.114.51 5.455a1.097 1.097 0 0 1-1.1 1.204l.004.006ZM10 15.977c.15 0 .298.03.436.088l4.894 2.097-.494-5.272a1.099 1.099 0 0 1 .27-.829l3.515-3.975-5.194-1.16a1.101 1.101 0 0 1-.71-.515L10 1.858 7.28 6.414a1.1 1.1 0 0 1-.707.512L1.38 8.086l3.515 3.975a1.098 1.098 0 0 1 .27.832l-.494 5.27 4.894-2.098c.138-.059.286-.089.436-.088Z"></path>
                        </svg>
                        Celebrity
                    </button>
                    {/* убрать комментирование ниже позже - с 72-79 строка - данные сабреддит дата */}
                    {/* {searchResults.map((result) => {
                        const { id, subreddit } = result.data;
                        return(
                            <button  key={id}> 
                                {subreddit}
                            </button>
                        )
                    })}          */}
            </div>
        </div>
    );
}

export default ButtonsAside