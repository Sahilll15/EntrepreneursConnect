import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const FollowRequestsPanel = ({ followRequests }) => {
  return (
    <div className="fixed right-0 top-0 h-1/2 w-80 bg-white border rounded-lg border-gray-300 p-4 overflow-y-auto m-4 shadow-md">
      <div className="container mx-auto">
        <h2 className="text-lg font-semibold mb-4">Follow Requests</h2>
        <ul>
          {followRequests.map((request) => (
            <li key={request.id} className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={request.avatar}
                  alt={`${request.name}'s avatar`}
                  className="w-12 h-12 rounded-full"
                />
                <p className="text-sm font-semibold">{request.name}</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                  <FaCheck />
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                  <FaTimes />
                </button>
              </div>
            </li>
            
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FollowRequestsPanel;
