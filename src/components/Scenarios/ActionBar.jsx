import React from 'react';

const ActionBar = () => {
    return (
        <div className="actionbar">
        <div className="action-btn">
          <button className="bg-orange">Run Model
          </button>
          <button >Save</button>
          <div className="tooltip-b">
            <button className="btn-logo"><i className="fas fa-trash-alt"></i></button>
            <span className="tooltiptext-b">Delete</span>
          </div>
          <div className="tooltip-b">
            <button className="btn-logo"><i className="fas fa-history"></i></button>
            <span className="tooltiptext-b">Reset All</span>
          </div>
          <div className="tooltip-b">
            <button className="btn-logo bg-blue"><i className="fas fa-clone"></i>
            </button>
          <span className="tooltiptext-b">Duplicate</span>
          </div>
        </div>
        <div className="action-title">
          <pre className="str-title">Scenario: </pre>
          <pre>Oct/5/2020-v1</pre>
        </div>
  
      </div>
    )
}

export default ActionBar;
