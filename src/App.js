import React, { useState, useEffect } from 'react';
import RedditApi from './components/redditApi/RedditApi';
import Header from './components/header/Header';
import Body from './components/body/Body';
// import WeatherComponent from './components/weatherApi/WeatherComponent';
import ButtonsAside from './components/buttonsAside/ButtonsAside';


import './reset.css';
import './App.css';

const App = () => {
  const [ searchResults, setSearchResults ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const defaultSearch = 'Fresh news';


  const handleSearch = async (searchTerm) => {
    setIsLoading(true); // Set loading to true before fetching
    const results = await RedditApi(searchTerm);
    setSearchResults(results);
    setIsLoading(false); // Set loading to false after fetching
    
    }

  useEffect(() => {
    handleSearch(defaultSearch);
  }, []);
  

  return (
    <div>
      <Header onSearch={handleSearch} />
      <div className='flex'>
        <div className='main block'>
        { searchResults.length > 0? 
          (
            <Body searchResults={searchResults} isLoading={isLoading} setIsLoading={setIsLoading}/>
          ) : (
            <div>
              <h1>Type anything</h1>
            </div>
          )
        }
        
        </div>
        <ButtonsAside 
          searchResults={searchResults}
          onNewsSearch={() => handleSearch('Fresh News')}
          onGamingSearch={() => handleSearch('Gaming')}
          onSportsSearch={() => handleSearch('Sports')}
          onBusinessSearch={() => handleSearch('Business')}
          onCryptoSearch={() => handleSearch('Crypto')}
          onTelevisionSearch={() => handleSearch('Television')}
          onCelebritySearch={() => handleSearch('Celebrity')}
        />
      </div>
    </div>
  );
}

export default App;
