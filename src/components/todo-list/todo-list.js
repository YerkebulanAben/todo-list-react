import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos }) => {
  
  const list = todos.map(item => {
    return (
      <li key = { item.id }>
        <TodoListItem text = { item.text } />
      </li>
    )
  })

  return(
    <ul>
      { list }
    </ul>
  );
}

export default TodoList;