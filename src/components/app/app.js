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
      { id: 1, text: "Learn React", done: false, important: false},
      { id: 2, text: "Make React App", done: false, important: false},
      { id: 3, text: "Learn Laravel", done: false, important: false},
      { id: 4, text: "Create SPA ", done: false, important: false},
      
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

  deleteTask = (id) => {
    this.setState(({todos})=> {
      const idx = todos.findIndex(el => el.id === id),
        newTasks = [
          ...todos.slice(0,idx),
          ...todos.slice(idx + 1)
        ];
      return {
        todos: newTasks,
      }
    });
  }

  render() {
    return(
      <div>
        <AppHeader />
        <SearchPanel />
        <StatusFilter />
        <TodoList 
          todos = { this.state.todos }
          onDelete = { this.deleteTask }/>
        <TodoAddForm addNewTask = { this.addNewTask }/>
      </div>
    );
  }
}