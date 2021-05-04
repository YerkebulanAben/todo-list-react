import React from 'react';
import './todo-add-form.css';

const TodoAddForm = () => {
  return (
    <form>
      <input type="text" placeholder="Insert your task"/>
      <input type="button" value="Add"/>
    </form>
  )
}

export default TodoAddForm;