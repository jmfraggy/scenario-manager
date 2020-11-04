import React, { Fragment } from 'react';
// Redux
import { connect } from 'react-redux';
//Components
import CardItem from './CardItem';
//Utils
import { uniqueId } from 'lodash-es';

const CardContainer = ({ cards, current }) => {

  const getHubLanes = (hubName) => (
    Object.entries(cards.lanes).filter(([laneName, lane]) =>
      lane[0]['OHUB'] === hubName
    )
  );

  return current === undefined ? (<h4>Select a scenario</h4>) : (
    <Fragment>
      {!Object.keys(cards.hubs).length && !Object.keys(cards.lanes).length ?
        <h4>Loading...</h4> :
        Object.entries(cards.hubs).map(([hubName, hub]) => (
          <CardItem
            key={uniqueId()}
            title={hubName}
            hub={hub}
            lanes={getHubLanes(hubName)}
          />
        ))
      }
    </Fragment>
  );
}

const mapStateToProps = state => ({
  cards: state.cardsReducer.cards,
  current: state.scenarioReducer.current,
});

export default connect(mapStateToProps, null)(CardContainer);
