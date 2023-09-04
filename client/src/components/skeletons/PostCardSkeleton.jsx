import React from 'react';

const PostCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 border border">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 rounded-full bg-gray-300 mr-3 animate-pulse"></div>
        <div>
          <div className="w-20 h-4 bg-gray-300 animate-pulse"></div>
        </div>
      </div>
      <div className="h-4 bg-gray-300 mb-4 animate-pulse"></div>
      <div className="h-48 bg-gray-300 rounded-lg mb-4 animate-pulse"></div>
      <div className="flex justify-between text-gray-600 text-sm">
        <div>
          <div className="w-16 h-4 bg-gray-300 animate-pulse"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-16 h-6 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-16 h-6 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-16 h-6 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default PostCardSkeleton;
