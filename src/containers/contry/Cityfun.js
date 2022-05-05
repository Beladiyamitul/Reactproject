import React, { useState } from 'react';

function Cityfun(props) {

    const [cityname , setCity] = useState('Surat (Dumas Beach)'); 

    const Changecity = () => {
        setCity ('Rajkot (Watson Museum)')
    }

    return (
        <>
            <p>CityName [function Base]: {cityname} </p>
            <button onClick={() => Changecity()}>Change City</button>
        
        
        </>
    );
}

export default Cityfun;