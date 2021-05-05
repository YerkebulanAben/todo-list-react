import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({text}) => {
  return(
    <div>
      <span>{ text }</span>
      <button>Done</button>
      <button>Important</button>
      <button>Delete</button>
    </div>
  );
}

export default TodoListItem;