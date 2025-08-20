'use client'
import React,{useState,Component} from 'react';

class ClassCounter extends Component{
  constructor (props){
    super(props);
    this.state = {count :0};
  }
  increment =() =>{
    this.setState({count:this.state.count+1});
  };
  decrement =() =>{
    if(this.state.count>0){
    this.setState({count:this.state.count-1});
    }
    else{
      this.setState({message: "Counter cannot go below zero"});
    }
  };

  render() {
    return (
      <div className="main">
        <h2 className="title">Class Component</h2>
        <p className="count-value">{this.state.count}</p>
        <div className="button-container">
          <button
            onClick={this.decrement}
            className="decrement"
          >
            -
          </button>
          <button
            onClick={this.increment}
            className="increment"
          >
            +
          </button>
        </div>
        {this.state.message && <p className="message">{this.state.message}</p>}
      </div>
    );
  }
  }

export default ClassCounter;