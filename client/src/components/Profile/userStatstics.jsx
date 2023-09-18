import React from 'react';
import MainLayout from '../layout/MainLayout';

const UserStatisticsPage = () => {
  // Replace with actual user statistics data
  const userStatistics = {
    totalPosts: 123,
    followers: 456,
    following: 789,
    likes: 321,
    comments: 654,
  };

  return (
   <MainLayout >
      <div className="bg-gradient-to-b min-h-screen p-10 text-white">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-8">User Statistics</h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(userStatistics).map(([key, value]) => (
            <div
              key={key}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold mb-2">{key}</h2>
                <p className="text-3xl font-bold text-primary">{value}</p>
              </div>
              <button
                className="bg-primary hover:bg-primary-dark text-white rounded-full py-2 px-6 mt-4 focus:outline-none"
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
