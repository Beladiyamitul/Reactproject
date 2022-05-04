import React, { Component } from 'react';

class Contry extends Component {

    constructor(props) {
        super(props);
        
       this.state ={
           contry : 'india'
       }; 


    }

    changecontry = () =>{
        this.setState({
            contry : 'canada'
        })
    }

    
    render() {
        return (
           <>
             <div>contry:{this.state.contry}</div>
             <button onClick={() => this.changecontry()}>Change Contry</button>
           
           </>
        );
    }
}

export default Contry;