import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDelete, onDoneToggle, onImportantToggle }) => {
  
  const list = todos.map(item => {
    return (
      <li key = { item.id }>
        <TodoListItem 
          text = { item.text } 
          onDelete = {() => onDelete(item.id)}
          onDoneToggle = {() => onDoneToggle(item.id)}
          onImportantToggle = {() => onImportantToggle(item.id)}
          done = {item.done}
          important = {item.important}/>
      </li>
    )
  })

  return(
    <ul className="todo-list">
      { list }
    </ul>
  );
}

export default TodoList;