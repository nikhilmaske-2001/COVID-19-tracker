import React, { useEffect, useState } from 'react';

import './App.css';
import Covidlabel from '../src/Header/Covidlabel/Covidlabel';
import InfoBox from './InfoBox/InfoBox';
import Map from './Map/Map';
import Table from '../src/Table/Table';

import {
  FormControl,
  Select,
  MenuItem,
  Card,
  CardContent,
} from '@material-ui/core';
import { sortData } from './util';


function App() {
  const [countries, setCountries] = useState([]);
  const [country, setInputCountry] = useState(['worldwide']);
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);



  useEffect(() => {
    fetch('https://api.caw.sh/v3/covid-19/all')
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      })
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://api.caw.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url = countryCode === 'worldwide'
      ? 'https://disease.sh/v3/covid-19/all'
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInputCountry(countryCode);
        setCountryInfo(data);
      })

    setInputCountry(countryCode);
  };


  return (
    <div className="appContainer">
      <div className="leftSide">
        <div className="headerContainer">
          <Covidlabel />
          <div className="dropdownContainer">
            <FormControl>
              <Select
                varient="outlined"
                value={country}
                onChange={onCountryChange}
              >
                <MenuItem value="worldwide">Worldwide</MenuItem>
                {
                  countries.map((country) => (
                    <MenuItem value={country.value}>{country.name}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="infoboxContainer">
          <InfoBox title="CoronaVirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
        </div>
        <div className="mapContainer">
          <Map />
        </div>
      </div>

      <div className="rightSide">
        <Card>
          <CardContent>
            <h3>Live Cases by Worldwide</h3>
            <Table countries={tableData} />
            <h3>Worldwide new cases</h3>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default App;
