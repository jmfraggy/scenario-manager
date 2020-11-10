import React from 'react';
import Menu from '../Scenarios/Menu/Menu';
import ActionBar from '../Scenarios/ActionBar';
import CardContainer from '../Scenarios/Cards/CardContainer';
import Modal from '../Scenarios/Modal/Modal';

const Scenarios = () => {

  const handleClose = () => {
    // setShowModal(false);
  }

  return (
    <div className="container">
      <Menu />
      <div className="container-2 wh-100p">
        <ActionBar />
        <div className="card-holder h-100p">
          <CardContainer />
          <Modal show={true} handleClose={handleClose} >
            <p>Modal</p>
            <p>Data</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Scenarios;
