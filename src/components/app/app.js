import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filters';
import TodoList from '../todo-list';
import './app.css';

export default class App extends Component {
  state = {
    todos: [
      { id: 1, text: "Learn React"},
      { id: 2, text: "Make React App"},
    ]
  };

  render() {
    return(
      <div>
        <AppHeader />
        <SearchPanel />
        <StatusFilter />
        <TodoList />
      </div>
    );
  }
}