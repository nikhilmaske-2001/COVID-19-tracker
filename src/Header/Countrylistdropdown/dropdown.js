import React from 'react';
import './dropdown.css';

import {
    FormControl,
    Select,
    MenuItem
} from '@material-ui/core';

function dropdown() {
    return (
        <div className="dropdownContainer">
            <FormControl variant="filled">
                <Select>
                    <MenuItem>Ten</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default dropdown;
