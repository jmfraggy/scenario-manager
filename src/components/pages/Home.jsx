import React from 'react';

import HaulCard from './HaulCard';

// Material UI
import ClearIcon from '@material-ui/icons/Clear';
import CircularProgressWithLabel from './CircularProgressWithLabel';

const Home = () => {
    let arr= ["Short Haul", "Medium Haul", "Long Haul", "Teams Haul"];
  return (
    <div className="modal-container">
      <div className="po-modal">
        <div className="capacity-title">
          <h2>Capacity / Demand Region</h2>
            <button className="button button-2 button-2--orange">Collapse All</button>
            <ClearIcon />
        </div>
        <div className="capacity-cards">
            {arr.map( el => {
                return <HaulCard id={el} title={el} expand={true} />
            })}
        </div>
        <div className="capacity-total">
                <h3 className="capacity-total-title">Total:</h3>
                <h3>24/48</h3>
                <CircularProgressWithLabel variant="determinate" value={50} type="total"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
