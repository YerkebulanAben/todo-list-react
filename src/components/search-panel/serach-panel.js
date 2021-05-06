import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

  onSearchChange = (event) => {
    const term = event.target.value;
    this.props.onSearchChange(term)
  }

  render(){
    return (
      <input 
        onChange = {this.onSearchChange}
        type="text" placeholder="Search task"/>
    );
  }
}
