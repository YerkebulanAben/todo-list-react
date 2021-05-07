import React from 'react';
import './status-filter.css';

const StatusFilter = ({ onFilterChange, filter }) => {

  const buttons = [
    {name: 'All', clazz: "all-tasks", id: 1},
    {name: 'Active', clazz: "active-tasks", id: 2},
    {name: 'Done', clazz: "done-tasks", id: 3},
  ],

  newButtons = buttons.map(({ name, clazz, id }) => {
    if(name === filter) clazz += " active-filter";
    return(
      <button className= { clazz } 
        onClick = {() => onFilterChange(name)}
        key = { id }>
          {name}
      </button>
    )
  })

  return(
    <div className="status-filter">
      { newButtons }
    </div>
  );
}

export default StatusFilter;