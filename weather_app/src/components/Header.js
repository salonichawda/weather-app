import { useState } from "react";

const Header = ({ DataList, handleSearch }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <header>
      <nav className="navbar bg-body-primary">
        <div className="container-fluid">
          <h2 className="navbar-brand">Weather App</h2>
          <form autocomplete="true" className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              list="datalistOptions"
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
            />
            <datalist id="datalistOptions">
              {DataList.map((city) => {
                return <option value={city.name} />;
              })}
            </datalist>
            <button
              onClick={handleSearch(inputValue)}
              className="btn btn-outline-primary"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
