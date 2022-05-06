import React, { useState } from 'react';

function Con_city_change(props) {
    const [contryname , setContry] = useState('india');
    const [cityname , setCity] = useState('Surat');

    const chagecontry =()=>{
        setContry('Russia')
        setCity('Vadodara')
    }


    return (
       <>
       
       <p>Contry:{contryname}</p>
       <button onClick={()=> chagecontry()}>Change</button>

       <br/>
       <p>City:{cityname}</p>
       {/* <button onClick={()=>setCity()}>Change</button> */}

       
       
       </>
    );
}

export default Con_city_change;