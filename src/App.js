import './App.css';
import Covidlabel from '../src/Header/Covidlabel/Covidlabel';
import CountryList from '../src/Header/Countrylistdropdown/Dropdown';
import InfoBox from './InfoBox/InfoBox';

function App() {
  return (
    <div className="appContainer">
      <div className="headerContainer">
        <Covidlabel />
        <CountryList />
      </div>
      <div className="infoboxContainer">
        <InfoBox />
        <InfoBox />
        <InfoBox />
      </div>
    </div>
  );
};

export default App;
