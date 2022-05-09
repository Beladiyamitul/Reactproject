// Function Based Funcition
// rsf

import React, { useState } from 'react';
import Con_city_change from './Con_city_change';
// import from '';


function Contryfun({gdpval}) {

    const [contryname , setContry] = useState('Russia');
    const [PM , setPM] = useState('Mikhail Mishustin');
    const [gdp , setGdp] = useState(0)

    const Contrychange = () => {
        setContry ('India')
        setPM ('Narendra Modi')   
    }

    return (
       <>
       
         <p>ContryName [Function Base] : {contryname}</p>     
         <p>PM  : {PM}</p>     
        <button onClick={() => Contrychange()}>Change Contry</button>

        <p>GDP : {gdp}</p>
        <button onClick={() => setGdp(gdpval)}>Change Gdp</button>
       
       <Con_city_change famplace={contryname}/>
       
       </>
    );




}

export default Contryfun;