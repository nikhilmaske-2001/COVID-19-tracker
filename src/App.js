import './App.css';
import Covidlabel from '../src/Header/Covidlabel/Covidlabel';
import CountryList from '../src/Header/Countrylistdropdown/Dropdown';
import InfoBox from './InfoBox/InfoBox';
import Map from './Map/Map';
import Chart from './RightChart/Chart';

function App() {
  return (
    <div className="appContainer">
      <div className="leftSide">
        <div className="headerContainer">
          <Covidlabel />
          <CountryList />
        </div>
        <div className="infoboxContainer">
          <InfoBox title="CoronaVirus Cases" cases={2000} total={123344} />
          <InfoBox title="Recovered" cases={200} total={12334} />
          <InfoBox title="Deaths" cases={20} total={1233} />
        </div>
        <div className="mapContainer">
          <Map />
        </div>
      </div>

      <div className="rightSide">
        <Chart />
      </div>
    </div>
  );
};

export default App;
