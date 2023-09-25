import React, { useEffect, useState } from 'react';
import { getLeaderBoard } from '../../redux/auth/authActions';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getBoostedUser } from '../../redux/boost/boostActions';
import TopUserCard from './TopUserCard';

const TopsUser = () => {
  const dispatch = useDispatch();
  const topusers = useSelector((state) => state?.user?.leaderboard);
  const boostedUser = useSelector((state) => state?.boost?.boostedUser)

  useEffect(() => {
    dispatch(getLeaderBoard());
  }, [dispatch]);

  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 100);
    dispatch(getBoostedUser())
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>

      <div
        className={`fixed right-0 top-0 w-80 bg-white border rounded-lg border-gray-300 p-4 overflow-y-auto m-4 shadow-md transition-opacity ${showComponent ? 'opacity-100' : 'opacity-0 translate-y-4'
          }`}
      >

        <div className="container mx-auto">
          {boostedUser && boostedUser.length > 0 && (
            <div className='mb-10'>
              <h2 className="text-lg font-semibold mb-4">Boosted Users</h2>
              <ul className='relative'>
                {boostedUser.map((user) => (
                  <TopUserCard user={user} key={user._id} />
                ))}
              </ul>
              <NavLink to={'/boost'}>
                <p className=" absolute right-2 text-sm text-blue-600 hover:text-blue-900 ">Want to become one?</p>
              </NavLink>
            </div>


          )}





          <h2 className="text-lg font-semibold mb-4">Top Users</h2>
          <ul>
            {topusers?.map((user) => (
              <TopUserCard user={user} key={user._id} />
            ))}
          </ul>

        </div>

      </div>



    </div>
  );
};

export default TopsUser;
