import React from 'react';
import './app-header.css';

const AppHeader = ({ todosCount, donesCount}) => {
  return (
    <div>
      <h1>Todo App</h1>
      <h2>{todosCount} more to do, {donesCount} done</h2>
    </div>
    );
}

export default AppHeader;