<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
Weather Dashboard: Project Breakdown

A single-page app where a user can track the weather for several cities at once, see a 5-day forecast for any of them, view the data in charts, and switch between °C/°F. It can also detect the user’s location and show their local weather automatically.

Core features
Multiple cities: Search for a city and add it to your dashboard as a card showing current temperature, conditions, humidity, and wind. You can remove cities, and the list persists between visits.
5-day forecast: Click a city to see the next five days, with high/low temperatures and conditions per day.
Charts (Recharts): A line chart for temperature over time, a bar chart for precipitation, and maybe a comparison chart across your saved cities.
Geolocation: On first load, ask the browser for permission and show the weather where the user is.
Unit toggle: Switch between metric and imperial (°C/°F, km/h/mph) without refetching everything.
>>>>>>> 63ef9f544d91cacc711a66ddc8be1904a8c26752
