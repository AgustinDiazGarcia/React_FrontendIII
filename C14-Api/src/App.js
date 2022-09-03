import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, [isLoading]);

  return <div className="App"></div>;
}

export default App;
