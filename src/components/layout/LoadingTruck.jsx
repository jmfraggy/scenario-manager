import React from 'react';

const LoadingTruck = () => {
  return (
    <>
      <div className="black-opacity" />
      <div className="loading-truck">   
        <div className="orange-truck">
          <i className="fas fa-truck" />
          <div className="loader truck-o">
            <div className="loaderBar truckBar-o" />
          </div>
          <p>Loading...</p>
        </div>
      </div>
    </>
  );
};

export default LoadingTruck;
