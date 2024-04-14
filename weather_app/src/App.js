import logo from "./logo.svg";
import "./App.css";
// import Header from './components/Header';
import Home from "./components/Home";
import WeatherDetails from "./components/WeatherPage";

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Home />
      <WeatherDetails />
    </div>
  );
}

export default App;
