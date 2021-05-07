import React, { Component } from 'react';
import './error-button.css';

export default class ErrorButton extends Component {
  state = {
    hasError: false
  }

  render(){
    if(this.state.hasError){
      this.error();
    }
    return(
      <button className = "error-button"
        onClick = {()=> this.setState({hasError: true})}>
        Throw Error
      </button>
    );
  }
}