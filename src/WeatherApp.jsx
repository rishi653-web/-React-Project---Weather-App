import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        feelslike: 24.84,
        temp: 25,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 78,
        description: "clear sky",
        weather: "01d",
        city: "Delhi"
    });

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }
    return(
        <div style = {{textAlign: "center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>

        </div>
    );
}