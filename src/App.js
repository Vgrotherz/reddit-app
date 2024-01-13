import React, { useState } from 'react';
import RedditApi from './components/redditApi/RedditApi';
import Header from './components/header/Header';
import Body from './components/body/Body';

import './App.css';

function App() {
  const [ searchResults, setSearchResults ] = useState([]);

  const handleSearch = async (searchTerm) => {
    const results = await RedditApi(searchTerm);
    setSearchResults(results);
  }

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Body searchResults={searchResults} />
    </div>
  );
}

export default App;
