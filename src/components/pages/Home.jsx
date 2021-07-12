import React, { useState } from 'react';

import HaulCard from './HaulCard';

// Material UI
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

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
        <Grid container>

          <Grid container item xs={12} className="capacity-title" style={{ margin: '0.8em' }}>
            <Grid item xs={8} md={9} className="capacity-title-text">
              <h2>SW40</h2>
            </Grid>
            <Grid item xs={2} md={2} className="capacity-title-button">
              <Button onClick={onCollapseAll} variant="outlined" color="inherit" fullWidth className="collapse-button">
                {collapseAll ? 'Expand All' : 'Collapse All'}
              </Button>
            </Grid>
            <Grid item xs={2} md={1} className="po-modal-x">
              <IconButton onClick={onCloseModal}>
                <ClearIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Grid container item xs={12} className="capacity-cards" style={{ margin: '0 0.5em' }}>
            {arr.map((el) => {
              return (<Grid item md={12} lg={6}>
                <HaulCard key={el} title={el} expand={collapseAll} />
              </Grid>);
            })}
          </Grid>

          <Grid container item xs={12} className="capacity-total" style={{ margin: '1em' }}>
            <Grid item xs={4} md={6}>
              <h3 className="capacity-total-title">Total:</h3>
            </Grid>
            <Grid item xs={6} md={5}>
              <div className="haul-load">
                <div>
                  <h4>24</h4>
                  <p>Demand</p>
                </div>
                <Divider className="divider divider-white" orientation="vertical" flexItem />
                <div>
                  <h4>48</h4>
                  <p>Capacity</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={2} md={1} className="progress">
              <CircularProgressWithLabel
                variant="determinate"
                value={50}
                type="total"
              />
            </Grid>
          </Grid>

        </Grid>
      </div>
    </div>
  );
};

export default Home;
