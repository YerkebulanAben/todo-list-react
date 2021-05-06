import React from 'react';
import './status-filter.css';

const StatusFilter = ({onFilterChange}) => {
  return(
    <div>
      <button onClick = {() => onFilterChange('all')}>All</button>
      <button onClick = {() => onFilterChange('important')}>Important</button>
      <button onClick = {() => onFilterChange('done')}>Done</button>
    </div>
  );
}

export default StatusFilter;