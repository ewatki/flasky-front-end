import React from "react";
import Crystal from './Crystal';

// Create a function compoenent
const CrystalList  = () => {
    return (
        <section>
            <h2>Crystal List</h2>
            <ul>
                <Crystal />
            </ul>
        </section>
    );
};

export default CrystalList;