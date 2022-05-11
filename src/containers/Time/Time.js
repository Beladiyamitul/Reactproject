import React, { Component } from 'react';

class Time extends Component {

    constructor(props) {
        super(props);
        
        this.state ={
            time: new Date()
        }
    }
    tick = () => {
        this.setState ({
            time: new Date()
        })
        // console.log("tick");
    }

    componentDidMount =() =>{
        this.timeId = setInterval(()=>this.tick(), 1000)
    }
    componentDidUpdate = (prevState) =>{
        if(prevState.time !== this.state.time){
            console.log("componentDidUpdate is calld")

        }
    }

    componentWillUnmount = () =>{
        clearInterval(this.timeId);
    }
    

    render() {
        return (
            <div>
                {this.state.time.toLocaleTimeString()}
            </div>
        );
    }
}

export default Time;