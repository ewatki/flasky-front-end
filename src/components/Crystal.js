/* eslint-disable no-lone-blocks */
import React from "react";
import PropTypes from 'prop-types';
// import { useState } from 'react';

// Create a function compoenent
const Crystal = ({ name, color, powers }) => {
    const [charge, setCharge] = React.useState(0);
    
    const increaseCharges = () => {
        setCharge(charge + 1);
        console.log(charge)
    }

    return (
        <>
            <h2>{name}</h2>
            <p>{color}</p>
            <p>{powers}</p>
            <button onClick={increaseCharges}>Charge Crystal</button>
            <p>You've charged {name} crystal {charge} times.</p>
        </>

    );
};

Crystal.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    powers: PropTypes.string.isRequired
}

export default Crystal;
