import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "8928a8b27008c88fa67b6e2b18ad2b92";
    let [error, setError] = useState(false);
    let [city, setCity] = useState("");

    let getWeather = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            
            // Check if the API returned an error (like a 404 for a fake city)
            if (!response.ok) {
                throw new Error("City not found");
            }
            
            let data = await response.json();
            
            let result = {
                temp: data.main.temp,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                city: data.name,
                country: data.sys.country,
                tempMax: data.main.temp_max,
                tempMin: data.main.temp_min,
                humidity: data.main.humidity,
                feelslike: data.main.feels_like, 
            };
            return result;
        } catch(err) {
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            setError(false); // Reset the error message on a new search submission
            let newinfo = await getWeather();
            updateInfo(newinfo);
            setCity("");
        } catch(err) {
            setError(true);
        }
    };

    return (
        <div className="search_box">
            <h3>Search for weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="City" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {/* Fixed: Wrapped the styles correctly in an object dictionary */}
                {error && <p style={{ color: "red" }}>No such place exists</p>}
            </form>
        </div>
    );
}