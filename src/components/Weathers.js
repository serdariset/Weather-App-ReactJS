import { useEffect, useState } from "react";
import axios from "axios";

import cityJson from "./cities.json";

const key = "17d0bd6b3e15f511805dc2b664935484";
function Weathers() {
  const [city, setCity] = useState("Ankara");

  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const onselect = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=tr`
        )

        .then((resp) => setWeather(resp.data))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    };

    getData();
  }, [city]);

  return (
    <div className="weather-container">
      <form>
        <select name="cityName" className="selection" onChange={onselect}>
          {cityJson.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </form>
      <h2 className="cityName">{city}</h2>
      <div className="weather">
        {
          !isLoading && 
          <div>
          <h2>{Math.floor(weather.main.temp)} °C</h2>
          {console.log(weather)}
          </div>
        } 
      </div>
    </div>
  );
}

export default Weathers;
