import React, { useEffect, useState } from 'react';
import { getLeaderBoard } from '../../redux/auth/authActions';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const TopsUser = () => {
  const dispatch = useDispatch();
  const topusers = useSelector((state) => state?.user?.leaderboard);

  useEffect(() => {
    dispatch(getLeaderBoard());
  }, [dispatch]);

  const [showComponent, setShowComponent] = useState(false);

  // Use a delay to trigger the fade-in animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
    
    <div
      className={`fixed right-0 top-0 w-80 bg-white border rounded-lg border-gray-300 p-4 overflow-y-auto m-4 shadow-md transition-opacity ${
        showComponent ? 'opacity-100' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="container mx-auto">
      <h2 className="text-lg font-semibold mb-4">Featured Users</h2>
      <p>the one who paid </p><br/>
        <h2 className="text-lg font-semibold mb-4">Top Users</h2>
        <ul>
          {topusers?.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center mb-4 border border-gray-200 rounded-lg p-3 hover:bg-gray-100"
            >
              <NavLink to={`/profile/${user._id}`} className="flex items-center space-x-4">
                <img
                  src={user.avatar.url}
                  alt={`${user.name}'s avatar`}
                  className="w-12 h-12 rounded-full border"
                />
                <div>
                  <p className="text-sm font-semibold">{user.username}</p>
                  <p className="text-sm text-gray-600">Points: {user.points}</p>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
        
      </div>

    </div>

    

    </div>
  );
};

export default TopsUser;
