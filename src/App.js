import React, { useState, useEffect } from 'react';
import RedditApi from './components/redditApi/RedditApi';
import Header from './components/header/Header';
import Body from './components/body/Body';
import WeatherComponent from './components/weatherApi/WeatherComponent';

import './App.css';

function App() {
  const [ searchResults, setSearchResults ] = useState([]);
  const defaultSearch = 'Fresh news';

  const handleSearch = async (searchTerm) => {
    const results = await RedditApi(searchTerm);
    setSearchResults(results);
  }

  useEffect(() => {
    handleSearch(defaultSearch);
  }, []);

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Body searchResults={searchResults} />
      {/* <WeatherComponent /> */}
    </div>
  );
}

export default App;
