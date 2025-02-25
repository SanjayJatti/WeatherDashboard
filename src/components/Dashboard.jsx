import { useState } from "react";
import { Searchbar } from "./SearchBar";
import { WeatherInfoCard } from "./WeatherInfoCard";
import { mockWeatherData } from "../mockData/mockData";

export const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [weatherInfo, SetWeatherInfo] = useState(null);
  const [prevSearchedCities, setPrevSearchedCities] = useState([]);
  const defaultMessage = "City not found";

  const handleSearch = (e) => {
    e.preventDefault();
    SetWeatherInfo(
      mockWeatherData[searchValue]
        ? mockWeatherData[searchValue]
        : defaultMessage
    );
    if ( mockWeatherData[searchValue] && !prevSearchedCities.includes(searchValue )) {
      setPrevSearchedCities([...prevSearchedCities, searchValue]);
    }
    setSearchValue("");
  };
  const getCityWeather = (prevCity) => {
    SetWeatherInfo(
      mockWeatherData[prevCity] ? mockWeatherData[prevCity] : defaultMessage
    );
  };
  const renderWeatherData = ()=>{
    if (!weatherInfo) return null;
    if (typeof weatherInfo === "string") return <div>{weatherInfo}</div>;
    return <WeatherInfoCard weatherInfo={weatherInfo} />;
  }

  return (
    <>
      <h1 className="font-bold text-blue-500 mb-5 text-3xl">
        Weather Dashboard
      </h1>
      <Searchbar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
      />
      {renderWeatherData()}

      <div className="flex flex-row gap-1">
        {prevSearchedCities.length !== 0 &&
          prevSearchedCities.map((prevCity, i) => (
            <button
              key={prevSearchedCities[i]}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => getCityWeather(prevCity)}
            >
              {prevCity}
            </button>
          ))}
      </div>
    </>
  );
};
