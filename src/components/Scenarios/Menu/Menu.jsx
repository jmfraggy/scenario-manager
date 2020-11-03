import React from 'react';
import MenuCard from './MenuCard';

const Menu = () => {
  return (
    <div className="card-menu">
      <p>Scenarios</p>
      <div className="scenarios">
        <MenuCard />
      </div>
      <button className="menu-btn">
        <i className="fas fa-plus"></i>
        <span className="tooltiptext-top">Create Scenario</span>
      </button>
    </div>
  );
};

export default Menu;
