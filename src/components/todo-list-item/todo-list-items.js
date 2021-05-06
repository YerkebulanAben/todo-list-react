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
        className="btn btn-delete"
        onClick = {onDelete}>
        < i className="fas fa-trash" />
      </button>
      <button
        className="btn btn-mark"
        onClick = { onImportantToggle }>
        < i className="fas fa-exclamation"/>
      </button>
      <button
        className="btn btn-done"
        onClick = { onDoneToggle }>
          <i className="fas fa-check"/>
      </button>
    </div>
  );
}

export default TodoListItem;