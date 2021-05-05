import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({text, onDelete, onDoneToggle, done, important, onImportantToggle}) => {
  
  let className = 'todo-list-item';
  if(done){
    className += ' done';
  }
  if(important){
    className += ' important'; 
  }
  return(
    <div>
      <span
        className = { className }>{ text }</span>
      <button
        onClick = { onDoneToggle }>Done</button>
      <button
        onClick = { onImportantToggle }>Important</button>
      <button
        onClick = {onDelete}>Delete</button>
    </div>
  );
}

export default TodoListItem;