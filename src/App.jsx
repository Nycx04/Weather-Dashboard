import './App.css'
import { useState } from 'react';

function App() {
  const [search, setsearch ] = useState("");
  const [results, setResults] = useState([]);

  function SearchAPI (dontreload) {
   dontreload.preventDefault();

   fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=10&language=en&format=json`)
   .then((res) => res.json())
   .then((data) => setResults(data.results))
  }
  return (
    <>
     <h1>SEARCH</h1>
     <form onSubmit={SearchAPI}>
      <input value={search} onChange={(whatchange) => setsearch(whatchange.target.value)}></input>
      <button type="submit">Search</button>
     </form>
     

     {results.map((finalresults) => (
      <div key={finalresults.id}>
        <h2>{finalresults.name}</h2>
        <h2>{finalresults.latitude}</h2>
        <h2>{finalresults.longitude}</h2>
      </div>
     ))}
    </>
  )
}

export default App
