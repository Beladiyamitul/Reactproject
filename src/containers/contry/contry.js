import React, { Component } from 'react';

class Contry extends Component {

    constructor(props) {
        super(props);
        
       this.state ={
           contry : 'india',
           PM : 'Narendra Modi'
       }; 


    }

    changecontry = () =>{
        this.setState({
            contry : 'canada',
            PM : 'Justin Trudeau'
        })
    }

    
    render() {
        return (
           <>
             <div>contry:{this.state.contry}
             <br/>
             PM:{this.state.PM}
             
             </div>
             <p>GDP: {this.props.gdpval}</p>
             <button onClick={() => this.changecontry()}>Change Contry</button>
           dfg
           </>
        );
    }
}

export default Contry;