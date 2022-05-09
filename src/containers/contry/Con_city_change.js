import React, { useState } from 'react';

function Con_city_change({famplace}) {



    return (
       <>

       {
           famplace === 'Russia' ? <p>FamousPlace :  Moscow </p>: <p>FamousPlace :  Tajmahel</p>
       }
    
 

       
       
       </>
    );
}

export default Con_city_change;