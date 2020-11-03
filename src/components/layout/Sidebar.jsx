import React from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { setCurrentPage } from '../../store/actions/sideBarActions';
// Components
import Filters from './Filters';

const Sidebar = ({ currentPage, setCurrentPage }) => {
  let homeLinks;

  if (
    currentPage === 'Scenarios-Manage' ||
    currentPage === 'Scenarios-History' ||
    currentPage === 'Scenarios-Results'
  ) {
    homeLinks = (
      <div >
        <div className="routes">
          <li>NXT</li>
          <Link className="main-route" to="/" onClick={() => setCurrentPage('Map')}>
            <i className="fas fa-map-marked-alt"></i>
          <span className="tooltiptext-right">Map</span>
          </Link>
          <Link
            className="main-route route-active"
            to="/scenarios/manager"
            onClick={() => setCurrentPage('Scenarios-Manage')}
          >
            <i className="fas fa-dice-d6"></i>
          </Link>
          <Link
            className="subroute-active"
            to="/scenarios/manager"
            onClick={() => setCurrentPage('Scenarios-Manage')}
          >
            <i className="fas fa-tasks"></i>
            <span className="tooltiptext-right">Scenarios</span>
          </Link>
          <Link
            to="/scenarios/history"
            onClick={() => setCurrentPage('Scenarios-History')}
          >
            <i className="fas fa-history"></i>
            <span className="tooltiptext-right">History</span>
          </Link>
        </div>
        <Filters />
      </div>
    );
  } else {
    homeLinks = (
    <div className="routes">
      <li>NXT</li>
      <Link className="main-route route-active" to="/" onClick={() => setCurrentPage('Map')}>
        <i className="fas fa-map-marked-alt"></i>
        <span className="tooltiptext-right">Map</span>
      </Link>
      <Link
        className="main-route"
        to="/scenarios/manager"
        onClick={() => setCurrentPage('Scenarios-Manage')}
      >
        <i className="fas fa-dice-d6"></i>
        <span className="tooltiptext-right">Scenarios</span>
      </Link>
    </div>
    );
  }

  return <div className="sidenav">{homeLinks}</div>;
};

const mapStateToProps = (state) => ({
  currentPage: state.sideBar.page,
});

export default connect(mapStateToProps, { setCurrentPage })(Sidebar);