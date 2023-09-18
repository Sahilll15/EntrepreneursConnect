import React from 'react';
import { NavLink } from 'react-router-dom';

const Comment = ({ comment }) => {
  return (
    <div className="flex items-start space-x-3 py-2 border-b border-gray-200">
      <div className="flex-shrink-0">
        <NavLink to={`/profile/${comment.commentedBy.id}`}>
        <img
          src={comment.commentedBy.avatar}
          alt={`${comment.commentedBy.name}'s avatar`}
          className="w-14 h-14 rounded-full border border-gray-700"
        />
        </NavLink>
      </div>
      <div className="flex-grow">
        <div className="bg-gray-100 rounded-lg p-3 shadow-md">
          <p className="text-sm font-semibold text-gray-800">{comment.commentedBy.name}</p>
          <p className="text-gray-600 text-sm">{comment.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
