import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import './app.css';

export default class App extends Component {
  render() {
    return(
      <div>
        <AppHeader />
        <SearchPanel /> 
      </div>
    );
  }
}