import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../layout/MainLayout';
import { getUserStats } from '../../redux/auth/authActions';

const UserStatisticsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserStats());
  }, [dispatch]);

  const userStats = useSelector((state) => state?.user?.userStats);

  const statisticsData = [
    {
      label: 'Followers',
      value: userStats?.followers?.length || 0,
    },
    {
      label: 'Following',
      value: userStats?.following?.length || 0,
    },
    {
      label: 'Points',
      value: userStats?.points || 0,
    },
    {
      label: 'Total Posts',
      value: userStats?.totalPosts || 0,
    },
    {
      label: 'Total Likes',
      value: userStats?.totalLikes || 0,
    },
    {
      label: 'Total Comments',
      value: userStats?.totalComments || 0,
    },
  ];

  return (
    <MainLayout>
      <div className="bg-gradient-to-b min-h-screen p-8 text-white">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-8">User Statistics</h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {statisticsData.map(({ label, value }) => (
              <div
                key={label}
                className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out"
              >
                <div>
                  <h2 className="text-lg font-semibold mb-2">{label}</h2>
                  <p className="text-3xl font-bold text-primary">{value}</p>
                </div>
                <button
                  className="bg-primary hover:bg-primary-dark text-white rounded-full py-2 px-6 mt-4 focus:outline-none transition-background-color duration-200 ease-in-out"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UserStatisticsPage;
