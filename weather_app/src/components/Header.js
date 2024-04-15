// import { useState } from "react";
import "../App.css";
const Header = ({
  DataList,
  searchValue,
  handleSearchClick,
  handleSearchChange,
}) => {
  return (
    <header className="App-header">
      <nav className="navbar bg-body-primary">
        <div className="container-fluid d-flex">
          <h2 className="navbar-brand">Weather App</h2>
          {/* <form autoComplete="true" className="d-flex"> */}
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={searchValue}
            list="datalistOptions"
            onChange={handleSearchChange}
          />
          <datalist id="datalistOptions">
            {DataList.map((city) => {
              return <option value={city.name} />;
            })}
          </datalist>
          <button
            onClick={() => handleSearchClick(searchValue)}
            className="btn btn-outline-primary"
            type="submit"
          >
            Search
          </button>
          {/* </form> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
