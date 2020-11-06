import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { setCurrentPage } from '../../store/actions/sideBarActions';
// Components
import Filters from './Filters';

const Sidebar = ({ currentPage, setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, [setCurrentPage]);

  // Change the page when it's neccesary
  const changePage = (page) => {
    if (currentPage !== page) {
      setCurrentPage(page);
    }
  };

  let homeLinks;
  const map = '/';
  const scenarios = '/scenarios/manager';
  const history = '/scenarios/history';
  const results = '/scenarios/results';

  // Switch between sidebar routes (map or scenarios)
  if (
    currentPage === scenarios ||
    currentPage === history ||
    currentPage === results
  ) {
    homeLinks = (
      <div>
        <div className="routes">
          <li>NXT</li>
          <Link className="main-route" to={map} onClick={() => changePage(map)}>
            <i className="fas fa-map-marked-alt"></i>
            <span className="tooltiptext-right">Map</span>
          </Link>
          <Link
            className="main-route route-active"
            to={scenarios}
            onClick={() => changePage(scenarios)}
          >
            <i className="fas fa-dice-d6"></i>
          </Link>
          <Link
            to={scenarios}
            onClick={() => changePage(scenarios)}
            className={`${currentPage === scenarios ? 'subroute-active' : ''}`}
          >
            <i className="fas fa-server"></i>
            <span className="tooltiptext-right">Scenarios</span>
          </Link>
          <Link
            to={history}
            onClick={() => changePage(history)}
            className={`${currentPage === history ? 'subroute-active' : ''}`}
          >
            <i className="fas fa-history"></i>
            <span className="tooltiptext-right">History</span>
          </Link>
          <Link
            to={results}
            onClick={() => changePage(results)}
            className={`${currentPage === results ? 'subroute-active' : ''}`}
          >
            <i className="fas fa-poll"></i>
            <span className="tooltiptext-right">Results</span>
          </Link>
        </div>
        <Filters />
      </div>
    );
  } else {
    homeLinks = (
      <div className="routes">
        <li>NXT</li>
        <Link
          className="main-route route-active"
          to={map}
          onClick={() => changePage(map)}
        >
          <i className="fas fa-map-marked-alt"></i>
          <span className="tooltiptext-right">Map</span>
        </Link>
        <Link
          className="main-route"
          to={scenarios}
          onClick={() => changePage(scenarios)}
        >
          <i className="fas fa-dice-d6"></i>
          <span className="tooltiptext-right">Scenarios</span>
        </Link>
      </div>
    );
  }

  return <div className="sidebar h-100p">{homeLinks}</div>;
};

const mapStateToProps = (state) => ({
  currentPage: state.sideBar.page,
});

export default connect(mapStateToProps, { setCurrentPage })(Sidebar);
