import React, { useState } from 'react';

import HaulCard from './HaulCard';

// Material UI
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import CircularProgressWithLabel from './CircularProgressWithLabel';

const Home = ({ swapModal = 1 }) => {
  const [visible, setVisible] = useState(swapModal ? swapModal : 0);
  const [collapseAll, setCollapseAll] = useState(false);

  const onCloseModal = () => {
    setVisible(0);
  };

  const onCollapseAll = () => {
    setCollapseAll(!collapseAll);
  }

  let arr = ['Short Haul', 'Medium Haul', 'Long Haul', 'Teams Haul'];
  return (
    <div className={`modal-container ${visible ? 'visible' : ''}`}>
      <div className="po-modal">
        <div className="capacity-title">
          <h2>Capacity / Demand Region</h2>
          <button onClick={onCollapseAll} className="button button-2 button-2--orange">
            {collapseAll ? 'Expand All' : 'Collapse All'}
          </button>
          <IconButton onClick={onCloseModal}>
            <ClearIcon />
          </IconButton>
        </div>
        <div className="capacity-cards">
          {arr.map((el) => {
            return <HaulCard key={el} title={el} expand={collapseAll} />;
          })}
        </div>
        <div className="capacity-total">
          <h3 className="capacity-total-title">Total:</h3>
          <h3>24/48</h3>
          <CircularProgressWithLabel
            variant="determinate"
            value={50}
            type="total"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
