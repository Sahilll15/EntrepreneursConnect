// Comment.js

import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <img
          src={comment.authorAvatar}
          alt={`${comment.author}'s avatar`}
          className="w-6 h-6 rounded-full"
        />
      </div>
      <div className="ml-2">
        <p className="text-sm font-medium">{comment.author}</p>
        <p className="text-gray-600">{comment.text}</p>
      </div>
    </div>
  );
};

export default Comment;
