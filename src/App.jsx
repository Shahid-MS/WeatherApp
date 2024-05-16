import { useState } from "react";
import "./App.css";
import InfoBox from "./Components/InfoBox";
import SearchBox from "./Components/SearchBox";

function App() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "delhi",
    description: "haze",
    feelsLike: 39.52,
    humidity: 13,
    maxTemp: 42.05,
    minTemp: 41.73,
    temp: 41.73,
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <>
      <h1>VintuSKY</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox weatherInfo={weatherInfo} />
    </>
  );
}

export default App;
