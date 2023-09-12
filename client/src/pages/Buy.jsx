import React from 'react';
import Boost from '../components/boost';
import Reff from '../components/refral';
import Stats from '../components/stats';

const Buy = () => {
  return (
    <div>
      <div className="flex justify-center bg-gray-800">
        <div className="w-full md:w-2/3 lg:w-3/5">
          <div className="flex justify-end"> 
            <div className="w-4/5"> 
              <Stats />
              <Boost />
              <Reff />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
