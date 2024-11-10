// src/App.jsx
import { useState, useEffect } from 'react';

import { getStarships } from './services/starshipService';

import search from "./components/StarshipSearch";
import list from "./components/StarshipList";



const App = () => {

  const [starships, setStarships] = useState([]);

useEffect(()=>{
  fetch('https://swapi.dev/api/starships')
   .then(response => response.json())
   .then(data => setStarships(data.results))
   .catch(error => console.error('Error:', error))
   }, []);

  return (
    <>

    <h1>Starship Search</h1>
    <search />
    <h2>Starships:</h2>
    <list />
    </>
  );
}

export default App