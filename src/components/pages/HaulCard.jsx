import React from 'react';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const HaulCard = ({ title, expand }) => {
  return (
    <div className="haul-card">
      <div className="haul-title">
        <LocalShippingIcon />
        <h3>{title}</h3>
        <h4>06/12</h4>
        <CircularProgressWithLabel
          variant="determinate"
          value={50}
          type="card"
        />
      </div>

      <div className="segcodes-btn">
        <h4>Segment Codes</h4>
        {expand ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </div>
      <div className="segcodes-table">
        <p>PPP</p>
        <p>03</p>
        <p>PPP</p>
        <p>03</p>
      </div>
    </div>
  );
};

export default HaulCard;
