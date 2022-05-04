import React, { Component } from 'react';

class City extends Component {

    constructor(props) {
        super(props);
        
        this.state ={
            city : 'surat'
        }
    }

    changecity =() =>{
        this.setState({
            city : 'Ahemdabad'
        })
    }
    


    render() {
        return (
           
           <>
           <div>City:{this.state.city}</div>
           <button onClick={() => this.changecity()}>Change City</button>
           
           </>
        );
    }
}

export default City;