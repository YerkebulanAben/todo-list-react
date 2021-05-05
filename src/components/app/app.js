import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filters';
import TodoList from '../todo-list';
import TodoAddForm from '../todo-add-form';
import './app.css';

export default class App extends Component {
  state = {
    todos: [
      { id: 1, text: "Learn React"},
      { id: 2, text: "Make React App"},
      { id: 3, text: "Learn Laravel"},
      { id: 4, text: "Create SPA "},
      
    ]
  };

  addNewTask = (task) => {
    this.setState(({todos}) => {
    const newTask = {
        id: todos[todos.length - 1].id + 1,
        text: task,
      },
      newTasks = [...todos, newTask];
    return {
      todos: newTasks,
    }
    })

  }

  render() {
    return(
      <div>
        <AppHeader />
        <SearchPanel />
        <StatusFilter />
        <TodoList todos = { this.state.todos }/>
        <TodoAddForm addNewTask = { this.addNewTask }/>
      </div>
    );
  }
}