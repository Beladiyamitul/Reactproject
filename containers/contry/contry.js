import React, { Component } from 'react';

class contry extends Component {

    constructor(props) {
        super(props);
        
       this.state = {
           contry:'india'
       } 
    }
    


    render() {
        return (
            
            <div>Contry:{this.state.contry}</div>
       
        );
    }
}

export default contry;