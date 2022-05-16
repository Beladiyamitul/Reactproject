import React, { useState } from 'react';


function Count(props) {

    const [count , setCount] = useState(0);

    const AddCount = () =>{
        if(count < 10){
            setCount(count +1)

        }
    };

    const RemoveCount = () =>{
        if(count > 0){
            setCount(count -1)

        }
    };


    return (
        <div>
            <button onClick={() => AddCount() }>Add</button>
            <input type="text" value={count.toLocaleString()}/>
          
    
            <button onClick={() => RemoveCount() }>Remove</button>
        </div>
    );
}

export default Count;