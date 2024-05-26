import './App.css';
import React, { useMemo, useState } from 'react';
import { Dropdown } from 'rsuite';
import { getRandomGame } from './utils/getRandomGame';
import { categories } from './data/data';
import { RandomGame } from './components/randomGame';

function App() {
  const [randomGame, setRandomGame] = useState(null);


  const handleCategorySelect = (category = '') => {
    const result = getRandomGame(category);
    result.then((data) => {setRandomGame(data)})
  };

  const preparedCategories = useMemo(() => 
    Object.entries(categories).map(([key, value]) => (
      <Dropdown.Item onClick={() => handleCategorySelect(key)}>{value}</Dropdown.Item>
    )),[categories, handleCategorySelect])
  return (
    <div className="App">
      <h1>GetGame.Io</h1>
      {randomGame && (
        <RandomGame randomGame={randomGame}/>
      )}
      <p>Get a Free Game To Play</p>
      <button onClick={() => handleCategorySelect()}>Random Game</button>
      <Dropdown title="Random game by Categories">
        {preparedCategories}
      </Dropdown>
    </div>
  );
}

export default App;
