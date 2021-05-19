import './App.css';
import Covidlabel from '../src/Header/Covidlabel/Covidlabel';
import CountryList from '../src/Header/Countrylistdropdown/Dropdown';

function App() {
  return (
    <div className="appContainer">
      <Covidlabel />
      <CountryList />
    </div>
  );
};

export default App;
