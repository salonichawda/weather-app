import { useEffect, useState } from "react";
import Header from "./Header";
import CityDetails from "./DataTable";
const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [cityDetails, setCityDeatils] = useState([]);
  const [filteredData, setFilteredData] = useState(cityDetails);
  const handleSearchClick = (cityName) => {
    const filtered = cityDetails.map((data) => {
      if (data.name.toLowerCase().includes(cityName.toLowerCase())) {
        return data;
      }
      return "";
    });
    setFilteredData(filtered);
    // return filtered;
  };
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const getCityDetails = async () => {
    const response = await fetch(
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=30",
    );
    const result = await response.json();
    // console.log(result);
    setCityDeatils(result.results);
    setFilteredData(result.results);
  };
  useEffect(() => {
    getCityDetails();
  }, []);
  return (
    <div>
      <Header
        DataList={cityDetails}
        searchValue={searchValue}
        handleSearchClick={handleSearchClick}
        handleSearchChange={handleSearchChange}
      />
      <CityDetails CityData={filteredData} />
    </div>
  );
};

export default Home;
