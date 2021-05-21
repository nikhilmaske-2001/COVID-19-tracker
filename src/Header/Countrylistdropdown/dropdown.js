import React, { useEffect, useState } from 'react';
import './dropdown.css';

import {
    FormControl,
    Select,
    MenuItem
} from '@material-ui/core';

function Dropdown() {
    const [countries, setCountries] = useState([]);
    const [country, setInputCountry] = useState(['worldwide']);
    const [countryInfo, setCountryInfo] = useState({});

    const onCountryChange = async (e) => {
        const countryCode = e.target.value;

        const url = 'worldwide' 
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

    useEffect(() => {
        const getCountriesData = async () => {
            fetch("https://api.caw.sh/v3/covid-19/countries")
                .then((response) => response.json())
                .then((data) => {
                    const countries = data.map((country) => ({
                        name: country.country,
                        value: country.countryInfo.iso2,
                    }));
                    setCountries(countries);
                });
        };

        getCountriesData();
    }, []);

    return (
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
    );
};

export default Dropdown;
