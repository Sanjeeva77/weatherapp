import logo from './logo.svg';
import './App.css';
import { WeatherApp } from './components/WeatherApp';
import { CurrentWeather } from './components/CurrentWeather';

function App() {
  return (
    <div className="App">
      <WeatherApp/>
      <CurrentWeather/>

    </div>
  );
}

export default App;
