import React from 'react';
import './app-header.css';

const AppHeader = ({ todosCount, donesCount}) => {
  return (
    <div className="app-header">
      <h1 className="title">Todo App</h1>
      <h2 className = "tasks">{todosCount} more to do, {donesCount} done</h2>
    </div>
    );
}

export default AppHeader;