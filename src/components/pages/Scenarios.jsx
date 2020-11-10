import React from 'react';
import Menu from '../Scenarios/Menu/Menu';
import ActionBar from '../Scenarios/ActionBar';
import CardContainer from '../Scenarios/Cards/CardContainer';
import Modal from '../Scenarios/Modal/Modal';
// Redux
import { toggleModalOpen } from '../../store/actions/scenarioActions';
import { connect } from 'react-redux';

const Scenarios = ({ modalOpen, toggleModalOpen }) => {

  const handleClose = () => {
    toggleModalOpen();
  }

  return (
    <div className="container">
      <Menu />
      <div className="container-2 wh-100p">
        <ActionBar />
        <div className="card-holder h-100p">
          <CardContainer />
          <Modal show={modalOpen} handleClose={handleClose} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  modalOpen: state.scenarioReducer.modalOpen
});

export default connect(mapStateToProps, { toggleModalOpen })(Scenarios);
