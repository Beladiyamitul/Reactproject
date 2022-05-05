// Function Based Funcition
// rsf

import React, { useState } from 'react';

function Contryfun(props) {

    const [contryname , setContry] = useState('Russia');
    const [gdp , setGdp] = useState(0)

    const Contrychange = () => {
        setContry ('India')   
    }

    return (
       <>
         <p>ContryName [Function Base] : {contryname}</p>     
        <button onClick={() => Contrychange()}>Change Contry</button>

        <p>GDP : {gdp}</p>
        <button onClick={() => setGdp(4.2)}>Change Gdp</button>
       
       
       </>
    );
}

export default Contryfun;