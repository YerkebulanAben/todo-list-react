import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filters';
import TodoList from '../todo-list';
import TodoAddForm from '../todo-add-form';
import './app.css';

export default class App extends Component {
  
  taskId = 100;
  
  state = {
    todos: [
      { id: 1, text: "Learn React", done: false, important: false},
      { id: 2, text: "Make React App", done: false, important: false},
      { id: 3, text: "Learn Laravel", done: false, important: false},
      { id: 4, text: "Create SPA ", done: false, important: false},
    ],
    filter: 'All',
    term: '',
  };

  addNewTask = (task) => {
    this.setState(({todos}) => {
    const newTask = {
        id: this.taskId++,
        text: task,
        done: false,
        important: false,
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

  onDoneToggle = (id) => {
    this.setState(({todos}) => {
      const idx = todos.findIndex((el) => el.id === id),
        newTask = {
          id: todos[idx].id,
          text: todos[idx].text,
          done: !todos[idx].done,
          important: todos[idx].important,
      };
      return {
        todos: [
          ...todos.slice(0,idx),
          newTask,
          ...todos.slice(idx + 1)
        ]
      }
    });
  }

  onImportantToggle = (id) => {
    this.setState(({todos}) => {
      const idx = todos.findIndex((el) => el.id === id),
        newTask = {
          id: todos[idx].id,
          text: todos[idx].text,
          done: todos[idx].done,
          important: !todos[idx].important,
      };
      return {
        todos: [
          ...todos.slice(0,idx),
          newTask,
          ...todos.slice(idx + 1)
        ]
      }
    });
  }

  filter = (items, filter) => {
    switch(filter){
      case 'All':
        return items;
      case 'Done':
        return items.filter(item => item.done);
      case 'Active':
        return items.filter(item => !item.done);
      default:
        return items;
    }
  }

  onFilterChange = (filter) => {
    this.setState({
      filter,
    })
  }

  todosCount = () => {
    return this.state.todos.length;
  }

  donesCount = () => {
    return this.state.todos.filter(item => item.done).length;
  }

  onSearchChange = (term) => {
    this.setState({
      term,
    });
  }

  search = (items, term) => {
    return items.filter(item => item.text.toLowerCase().includes(term.toLowerCase()))
  }

  render() {
    const tasks = this.filter(this.state.todos, this.state.filter),
      donesCount = this.donesCount(),
      todosCount = this.todosCount() - donesCount,
      todos = this.search(tasks, this.state.term);
    return(
      <div className = "app">
        <AppHeader 
          todosCount = { todosCount }
          donesCount = { donesCount }/>
        <div className="top-panel">
          <SearchPanel 
            onSearchChange = { this.onSearchChange }/>
          <StatusFilter 
            onFilterChange = { this.onFilterChange }
            filter = { this.state.filter }/>
        </div>
        <TodoList 
          todos = { todos }
          onDelete = { this.deleteTask }
          onDoneToggle = { this.onDoneToggle }
          onImportantToggle = { this.onImportantToggle }/>
        <TodoAddForm addNewTask = { this.addNewTask }/>
      </div>
    );
  }
}