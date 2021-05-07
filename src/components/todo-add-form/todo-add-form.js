import React, { Component } from 'react';
import './todo-add-form.css';

export default class TodoAddForm extends Component {
  
  state = {
    task: '',
  }

  onFormChange = (e) => {
    this.setState({
      task: e.target.value,
    })
  }

  addNewTask = (event) => {
    event.preventDefault();
    this.props.addNewTask(this.state.task);
    this.setState({
      task: '',
    })
  }

  render(){
    return (
      <form 
        className = "todo-add-form" 
        onSubmit = { this.addNewTask }>
        <input type="text"
          placeholder="Insert your task"
          onChange = { this.onFormChange }
          value = { this.state.task }
          required/>
        <button type="submit">Add</button>
      </form>
    )
  }
}

