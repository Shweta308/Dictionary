import React, { useState } from 'react';
import './App.css';

const dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

const XDictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleSearch = () => {
    const foundWord = dictionary.find(entry => entry.word.toLowerCase() === searchTerm.toLowerCase());
    if (foundWord) {
      setMeaning(foundWord.meaning);
    } else {
      setMeaning("Word not found in the dictionary.");
    }
  };

  return (
    <div className="x-dictionary">
      <h1>XDictionary</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter search term..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
 
      <div className="meaning"><strong>Definition:</strong>
        {meaning && <p>{meaning}</p>}
      </div>
    </div>
  );
};

export default XDictionary;
