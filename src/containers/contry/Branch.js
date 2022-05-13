import React, { useState } from 'react';
import Course from './Course';

function Branch(props) {

    const [branch , setBranch] = useState('rnw1');
    const [course , setCourse] = useState('Android');

    const Coursechange = () => {
        setBranch ('rnw2')
        setCourse ('node js')  

 
    }
    return (
        <>
             <p>BranchName : {branch}</p>     
         
          <button onClick={() => Coursechange()}>Change Branch</button> 

          <Course coursename={branch}/>
        </>
    );
}

export default Branch;