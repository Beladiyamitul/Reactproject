import React from 'react';

function Course({coursename}) {
    return (
       <>
        {
         coursename === 'rnw1' ? <p>coursename : Android </p> : <p>coursename : node js</p>
        }
        </>  
    );
}

export default Course;