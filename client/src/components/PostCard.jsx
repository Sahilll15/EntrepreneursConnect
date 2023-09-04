import React from 'react';
import { formatDateTime } from '../utils/Formatdate';

const baseUrl='http://localhost:4000/'

const PostCard = ({ product }) => {
  return (
    <div key={product._id} className="bg-white rounded-lg shadow-md p-4 mb-4 border border">
      <div className="flex items-center mb-4">
        <img
          src={product.author.avatar}
          alt={`${product.author.name}'s avatar`}
          className="w-8 h-8 rounded-full mr-3" 
        />
        <div>
          <p className="text-lg font-semibold">{product.author.name}</p>
          <p className="text-gray-600 text-sm">{formatDateTime(product.createdAt)}</p>
        </div>
      </div>
      <p className="text-xl font-semibold mb-4">{product.content}</p>
      
      {product?.media && (
     <img src={`${baseUrl}${product.media}`} alt="Post media" className="w-96 rounded-lg mb-4" />
      )}
      <div className="flex justify-between text-gray-600 text-sm">
        <div>
          <span className="mr-2">
            <i className="far fa-thumbs-up text-blue-500"></i> Likes {product.likes.length}
          </span>
          <span>
            <i className="far fa-comment text-gray-500"></i> Comments {product.comments.length}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-blue-500 hover:text-blue-700">
            <i className="far fa-thumbs-up"></i> Like
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <i className="far fa-comment"></i> Comment
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <i className="far fa-share-square"></i> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
