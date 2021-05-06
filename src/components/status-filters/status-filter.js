import React from 'react';
import './status-filter.css';

const StatusFilter = ({onFilterChange}) => {
  return(
    <div className="status-filter">
      <button className="all-tasks active-filter" 
        onClick = {() => onFilterChange('all')}>
          All
      </button>
      <button className="active-tasks" 
        onClick = {() => onFilterChange('active')}>
          Active
      </button>
      <button className="done-tasks" 
        onClick = {() => onFilterChange('done')}>
          Done
      </button>
    </div>
  );
}

export default StatusFilter;