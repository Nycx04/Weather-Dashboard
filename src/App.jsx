import './App.css'
import { useState } from 'react';

function App() {
  const [search, setsearch ] = useState("");
  const [results, setResults] = useState([]);
  const [history, sethistory] = useState([]);
  function SearchAPI (dontreload) {
   dontreload.preventDefault();

   fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=10&countryCode=PH&language=en&format=json`)
   .then((res) => res.json())
   .then((data) => {
    const list = data.results || [];
    const cities = list.filter((place) => place.feature_code.startsWith("PPLA") || place.feature_code === "PPLC");
    setResults(cities);
    sethistory((prev) => [
      {
        id:Date.now(),
        name:search,
        results:cities,
      },
      ...prev
    ])
   })


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
        <h2>{finalresults.country}</h2>
        <h2>{finalresults.timezone}</h2>
      </div>
     ))}

     <h1>Search History</h1>

     {history.map((showhistory) => (
      <div key={showhistory.id}>
        <h2> Searched:{showhistory.id}<br></br>{showhistory.name}</h2>
      </div>
     ))}
    </>
  )
}

export default App
