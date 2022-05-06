// Function Based Funcition
// rsf

import React, { useState } from 'react';

function Contryfun(props) {

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
        <button onClick={() => setGdp(4.5)}>Change Gdp</button>
       
       
       </>
    );




}

export default Contryfun;