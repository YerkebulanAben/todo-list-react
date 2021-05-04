import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filters';
import './app.css';

export default class App extends Component {
  render() {
    return(
      <div>
        <AppHeader />
        <SearchPanel />
        <StatusFilter />
      </div>
    );
  }
}