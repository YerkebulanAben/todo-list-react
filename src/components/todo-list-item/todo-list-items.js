import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({text, onDelete}) => {
  return(
    <div>
      <span>{ text }</span>
      <button>Done</button>
      <button>Important</button>
      <button
        onClick = {onDelete}>Delete</button>
    </div>
  );
}

export default TodoListItem;