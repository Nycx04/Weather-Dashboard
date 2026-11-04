import './App.css'
import { useState } from 'react';

function App() {
  const [search, setsearch ] = useState("");
  const [results, setResults] = useState([]);
  const [history, sethistory] = useState([]);
  const [weather, setweather] = useState(null);
  const [thecity, setthecity] = useState(null);
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

  function ShowWeather (finalresults) {
   setthecity(finalresults);
  
   fetch(`https://api.open-meteo.com/v1/forecast?latitude=13.4088&longitude=122.5615&daily=temperature_2m_max,wind_speed_10m_max&hourly=temperature_2m,cloud_cover&current=is_day,temperature_2m,rain&timezone=Asia%2FSingapore`)
    .then((res) => {res.json})
    .then((data) => {setweather(data)})
  }
  return (
    <>
     <h1>Search city</h1>
     <form onSubmit={SearchAPI}>
      <input value={search} onChange={(whatchange) => setsearch(whatchange.target.value)}></input>
      <button type="submit">Search</button>
     </form>
     

     {results.map((finalresults) => (
      <div key={finalresults.id}>
        <h2>{finalresults.name}</h2>
        <h2>{finalresults.country}</h2>
        <h2>{finalresults.timezone}</h2>
        <button onClick={ () => ShowWeather(finalresults)}>Show Weather</button>
      </div>
     ))}

     <h1>Weather</h1>
     {thecity && (
      <div>
        <h2>Weather in {thecity.name}</h2>
        {weather ? (
          <div>
            <p>{weather.temperature_2m_max[0]}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
     
     )}

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
