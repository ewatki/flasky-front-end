import React from "react";
import Crystal from './Crystal';

// Create a function compoenent
const CrystalList  = ({ crystals }) => {
    // const wonderfulCrystal = 'Amethyst';
    const crystalComponents = crystals.map( (crystal, index) => {
        return (
            <li key={crystal.id}>
                <Crystal 
                    id={crystal.id}
                    name={crystal.name}
                    color={crystal.color} 
                    powers={crystal.powers} 
                />
            </li>
    )});

    return (
        <section>
            <h2>Crystal List</h2>
            <ul>
                {crystalComponents}
            </ul>
        </section>
    );
};

export default CrystalList;