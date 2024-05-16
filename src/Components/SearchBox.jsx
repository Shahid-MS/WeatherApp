/* eslint-disable no-useless-catch */
/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  let [err, setErr] = useState(false);
  
  let handleCityChange = (e) => {
    // console.log(e.target.value);
    setCity(e.target.value);
  };

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "117a0fad7e22e7b7fe60c7f1e931b198";

  let getWeatherInfo = async () => {
    try {
      let res = await fetch(
        `${API_URL}?q=${city}&&appid=${API_KEY}&&units=metric`
      );
      let jsonRes = await res.json();
      // console.log(jsonRes);
      let result = {
        city: city,
        temp: jsonRes.main.temp,
        minTemp: jsonRes.main.temp_min,
        maxTemp: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feelsLike: jsonRes.main.feels_like,
        description: jsonRes.weather[0].description,
      };
      // console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      // console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setErr(false);
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <form className="search-box" onSubmit={handleSubmitForm}>
      <TextField
        id="city"
        label="city"
        variant="outlined"
        value={city}
        onChange={handleCityChange}
        required
      />
      <div className="btn">
        <Button variant="contained" type="submit">
          Search
        </Button>
      </div>
      {err && <p style={{ color: "red" }}>No such place exist</p>}
    </form>
  );
}
