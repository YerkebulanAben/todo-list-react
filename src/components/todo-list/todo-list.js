import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDelete }) => {
  
  const list = todos.map(item => {
    return (
      <li key = { item.id }>
        <TodoListItem 
          text = { item.text } 
          onDelete = {() => onDelete(item.id)}/>
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