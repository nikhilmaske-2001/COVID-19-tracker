import React, { useEffect, useState } from 'react';
import './Dropdown.css';

import {
    FormControl,
    Select,
    MenuItem
} from '@material-ui/core';

function Dropdown() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountriesData = async () => {
            fetch("https://api.caw.sh/v3/covid-19/countries")
                .then((response) => response.json())
                .then((data) => {
                    const countries = data.map((country) => ({
                        name: country.country,
                    }));
                    setCountries(countries);
                });
        };

        getCountriesData();
    }, []);

    return (
        <div className="dropdownContainer">
            <FormControl>
                <Select>
                    {
                        countries.map((country) => (
                            <MenuItem>{country.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </div>
    );
};

export default Dropdown;
