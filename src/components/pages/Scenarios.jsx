import React from 'react';
import Menu from '../Scenarios/Menu/Menu';
import ActionBar from '../Scenarios/ActionBar';
import CardContainer from '../Scenarios/Cards/CardContainer';

const Scenarios = () => {
  return (
    <div className="container">
      <Menu />

      <div className="container-2">
        <ActionBar />
        <div className="card-holder">
            <CardContainer/>
        </div>
      </div>
    </div>
  );
};

export default Scenarios;
