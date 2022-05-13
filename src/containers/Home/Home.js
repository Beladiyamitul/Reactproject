import React from 'react';

function Home({data}) {
    return (
            data.map ((d, i) => {
                return(
                    <>
                        <h1>{d.id}</h1>
                        <h3>{d.name}</h3>
                    
                    </>
                )
            })

      
    );
}

export default Home;    