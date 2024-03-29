import { useEffect, useState } from "react";
import Display from "./Display";
import Input from "./Input";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeather] = useState(null);
  const [historyData, setHistory] = useState([]);

  const cityNameHandler = (data) => {
    setCity(data);
  }

  const weatherSearchHandler = async () => {
    setWeather(null);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21805bff7224936fa25d6cec016a0a4b&units=metric`);
    const data = await response.json();
    if (data.cod == "200") {
      if (historyData.indexOf(city) == -1) {
        setHistory([...historyData, city]);
      }
    }
    setWeather(data);
  }

  useEffect(
    () => {
      const lsHistory = localStorage.getItem("history");
      if (lsHistory != null) {
        // LS to State
        setHistory(JSON.parse(lsHistory));
        // JSON string to JS array 
      }
    },
    []
  )

  useEffect(
    () => {
      // state to LS
      if (historyData.length != 0) localStorage.setItem("history", JSON.stringify(historyData));
      // JS array to JSON string
    },
    [historyData]
  )


  useEffect(
    () => {
      if (city != "") {
        weatherSearchHandler();
      }
    },
    [city]
  )

  return (
    <div className="container">
      <Input cityNameHandler={cityNameHandler} />
      <Display cityNameHandler={cityNameHandler} city={city} weatherData={weatherData} historyData={[...historyData].reverse()} />
    </div>
  );
}

export default App;
