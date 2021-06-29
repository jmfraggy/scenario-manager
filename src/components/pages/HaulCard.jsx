import React, { useState, useEffect} from 'react';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const HaulCard = ({ title, expand }) => {
  const [swapIcon, setSwapIcon] = useState(true);

  useEffect(()=> {
    return () => {
        setSwapIcon(expand);
    };
  }, [expand]);

  const onCollapseSegment = () => {
    setSwapIcon(!swapIcon)
  }

  return (
    <div className={`haul-card ${swapIcon ? '' : 'card-resize'}`}>
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
        <button onClick={onCollapseSegment}>
          <h4>Segment Codes</h4>
          {swapIcon ? <ExpandLessIcon />: <ExpandMoreIcon />}
        </button>
      </div>
      {swapIcon ? <div className={`segcodes-table ${swapIcon ? 'visible' : ''}`} >
        <p>PPP</p>
        <p>03</p>
        <p>PPP</p>
        <p>03</p>
      </div> : null}
    </div>
  );
};

export default HaulCard;
