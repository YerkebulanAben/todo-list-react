import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filters';
import TodoList from '../todo-list';
import TodoAddForm from '../todo-add-form';
import ErrorBoundary from '../error-boundary';
import ErrorButton from '../error-button';
import './app.css';

export default class App extends Component {
  
  taskId = 100;
  
  state = {
    todos: [
      this.createNewTask('Learn React'),
      this.createNewTask('Create React App'),
      this.createNewTask('Learn Laravel'),
      this.createNewTask('Create SPA'),
    ],
    filter: 'All',
    term: '',
  };

  createNewTask(task, done = false, important = false){
    return {
      id: this.taskId++,
      text: task,
      done,
      important,
    }
  }

  addNewTask = (task) => {
    this.setState(({todos}) => {
      const newTask = this.createNewTask(task),
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

  toggleItemProperty(items, id, propName){
    const idx = items.findIndex((el) => el.id === id),
      newTask = {
        ...items[idx], [propName]: !items[idx][propName]
      };
    return [
        ...items.slice(0,idx),
        newTask,
        ...items.slice(idx + 1)
    ]
  }

  onDoneToggle = (id) => {
   this.setState(({todos}) => {
    return {
      todos: this.toggleItemProperty(todos, id, 'done'),
    }
   });
  }

  onImportantToggle = (id) => {
    this.setState(({todos}) => {
      return {
        todos: this.toggleItemProperty(todos, id, 'important'),
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
      <ErrorBoundary>
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
          <ErrorButton />
        </div>
      </ErrorBoundary>
    );
  }
}