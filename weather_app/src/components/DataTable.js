import { Link } from "react-router-dom";

const CityDetails = ({ CityData }) => {
  return (
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
          {CityData.map((city) => {
            if (city) {
              return (
                <tr>
                  <td>
                    <Link
                      to={"/weatherPage/" + city.name + "/" + city.country_code}
                    >
                      {city.name}
                    </Link>
                  </td>
                  <td>{city.cou_name_en}</td>
                  <td>{city.timezone}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};
export default CityDetails;
