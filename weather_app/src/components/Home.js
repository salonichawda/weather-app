import { useEffect, useState } from "react";
import Header from "./Header";
const Home = () => {
  const [cityDetails, setCityDeatils] = useState([]);
  const [filteredData, setFilteredData] = useState(cityDetails);
  const handleSearch = (cityName) => {
    const filtered = cityDetails.map((data) => data.name === cityName);
    setFilteredData(filtered);
  };
  const getCityDetails = async () => {
    const response = await fetch(
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20",
    );
    const result = await response.json();
    console.log(result);
    setCityDeatils(result.results);
  };
  useEffect(() => {
    getCityDetails();
  }, []);
  return (
    <div>
      <Header DataList={cityDetails} handleSearch={handleSearch} />
      <div>
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th>City Name</th>
              <th>Country</th>
              <th>Timezone</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((city) => {
              return (
                <tr>
                  <td>
                    <a href="/#">{city.name}</a>
                  </td>
                  <td>{city.cou_name_en}</td>
                  <td>{city.timezone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
