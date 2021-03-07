import React, {Component} from 'react'

class StateExamp extends Component{

    state = {
        count: 0
    }

    intervalId = null;

    incrementCount = () =>{
        this.setState({count: this.state.count + 1})
    }
    decrementCount = () => {
        if(this.state.count > 0){
            this.setState({count: this.state.count - 1})
        }
    }
    startTimer = () =>{
        if(this.state.count > 0 && !this.intervalId ){
            this.intervalId = setInterval(()=>{
                this.setState({count: this.state.count -1}, ()=>{
                    if(this.state.count === 0 ){
                        alert("timer finished");
                        clearInterval(this.intervalId);
                        this.intervalId = null;
                    }
                })
            }, 1000)
        }

    }
    stopTimer = () =>{
        if(this.intervalId){
            clearInterval(this.intervalId);
            this.intervalId = null;
        }

    }
    resetTimer = () =>{
        this.setState({count: 0})
        clearInterval(this.intervalId)
        this.intervalId = null; 
    }
    render(){
        return (

            <div className="">
                <h1>Simple Timer</h1>
                <div className="">
                    <button className="btn btn-sm btn-light" onClick={this.decrementCount}> - </button>
                    <span>{this.state.count}</span>
                    <button className="btn btn-sm btn-secondary" onClick={this.incrementCount}> + </button>
                </div>
                <div>
                    <button className="btn btn-sm btn-info" onClick={this.startTimer}>Start</button>
                    <button className="btn btn-sm btn-warning" onClick={this.stopTimer}>Stop</button>
                    <button className="btn btn-sm btn-danger" onClick={this.resetTimer}>Reset</button>
                </div>
            </div>
        );
    }
}

export default StateExamp;