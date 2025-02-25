export const WeatherInfoCard =({weatherInfo})=>{
    return (
        <div className="my-4">
            <p>Temperature: {weatherInfo.temperature}</p>
            <p>Humidity: {weatherInfo.humidity}</p>
            <p>Wind Speed: {weatherInfo.windSpeed}</p>
        </div>
    )
}