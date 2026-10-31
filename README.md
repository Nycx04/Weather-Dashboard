Weather Dashboard: Project Breakdown

A single-page app where a user can track the weather for several cities at once, see a 5-day forecast for any of them, view the data in charts, and switch between °C/°F. It can also detect the user’s location and show their local weather automatically.

Core features
Multiple cities: Search for a city and add it to your dashboard as a card showing current temperature, conditions, humidity, and wind. You can remove cities, and the list persists between visits.
5-day forecast: Click a city to see the next five days, with high/low temperatures and conditions per day.
Charts (Recharts): A line chart for temperature over time, a bar chart for precipitation, and maybe a comparison chart across your saved cities.
Geolocation: On first load, ask the browser for permission and show the weather where the user is.
Unit toggle: Switch between metric and imperial (°C/°F, km/h/mph) without refetching everything.
