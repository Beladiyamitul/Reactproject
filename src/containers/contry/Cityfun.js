import React, { useState } from 'react';

function Cityfun(props) {

    const [cityname , setCity] = useState('Surat'); 
    const [FamousPlace , setPlace] = useState('Dumas Beach'); 

    const Changecity = () => {
        setCity ('Rajkot')
        setPlace ('Watson Museum')
    }

    return (
        <>
            <p>CityName [function Base]: {cityname} </p>
            <p>FamousPlace : {FamousPlace} </p>
            <button onClick={() => Changecity()}>Change City</button>
        
        
        </>
    );
}

export default Cityfun;