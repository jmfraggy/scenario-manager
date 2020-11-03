import React from 'react';

const Filters = () => {
  return (
    <div className="filters">
      <button>
        <i className="fas fa-table"></i>
        <span className="tooltiptext-right">Change View</span>
      </button>
      <button>
        <i className="fas fa-filter"></i>
        <span className="tooltiptext-right">Filters</span>
      </button>
      <button>
        <i className="fas fa-sort"></i>
        <span className="tooltiptext-right">Sort</span>
      </button>
    </div>
  );
};

export default Filters;
