// PostCard.js

import React, { useEffect, useState } from 'react';
import { formatDateTime } from '../utils/Formatdate';
import { likePost } from '../redux/likes/likesActions';
// import { deletePost, updatePost } from '../redux/posts/postActions'; // Import the actions for deleting and updating posts
import { useDispatch,useSelector } from 'react-redux';
import Modal from 'react-modal';
import CommentsModal from './CommentsModal';
import { getLoggedInUser } from '../redux/auth/authActions';
import { deletePost, fetchPosts } from '../redux/posts/postActions'; 
import { NavLink } from 'react-router-dom';


const baseUrl = 'http://localhost:4000/';

const PostCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false);
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);
  const [updatedContent, setUpdatedContent] = useState(''); 
  const user = useSelector((state) => state?.user?.user);
  
  
  const handleDelete = async (id) => {
    await dispatch(deletePost(id));
    await dispatch(fetchPosts())
  };

  const handleUpdate = async (id) => {
  };


  const handleLike = async (id) => {
    await dispatch(likePost(id));
    await dispatch(fetchPosts())
    setIsLiked(true);
  };

  const openCommentsModal = () => {
    setIsCommentsModalOpen(true);
  };

  const closeCommentsModal = () => {
    setIsCommentsModalOpen(false);
  };

  // Function to toggle the options menu
  const toggleOptionsMenu = () => {
    setIsOptionsMenuOpen(!isOptionsMenuOpen);
  };

  
  return (
    <div key={product._id} className="bg-white rounded-lg shadow-md p-4 mb-4 border border">
      <div className="relative">
      {isOptionsMenuOpen && (
  <div className="flex flex-col absolute right-0 top-0 mt-2 bg-white p-2 rounded shadow-md border border-solid-2">
    <button
      className="text-red-500 hover:text-red-700 mb-2" // Added mb-2 class for margin bottom
      onClick={() => {
        // Handle delete post here
        handleDelete(product._id);
      }}
    >
      <i className="far fa-trash-alt"></i> Delete
    </button>
    <button
      className="text-blue-500 hover:text-blue-700"
      onClick={() => {
        // Handle update post here
        handleUpdate(product._id);
      }}
    >
      <i className="far fa-edit"></i> Update
    </button>
  </div>
)}

      </div>
      <div className="flex items-center mb-4">
      <NavLink to={`/profile/${product.author.id}`}>
      <img
          src={product.author.avatar}
          alt={`${product.author.name}'s avatar`}
          className="w-8 h-8 rounded-full mr-3 border border-solid-4"
        />
        
      </NavLink>
       

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
            <i className={`far fa-thumbs-up text-${isLiked ? 'green' : 'blue'}-500`}></i> Likes {product.likes.length}
          </span>
          <span>
            <i className="far fa-comment text-gray-500"></i> Comments {product.comments.length}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className={`text-${isLiked ? 'green' : 'blue'}-500 hover:text-${isLiked ? 'green' : 'blue'}-700`}
            onClick={() => {
              handleLike(product._id);
            }}
          >
            <i className={`far fa-thumbs-up${isLiked ? '-like' : ''}`}></i> Like
          </button>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={openCommentsModal}
          >
            <i className="far fa-comment"></i> Comment
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <i className="far fa-share-square"></i> Share
          </button>
          {

            product?.author?.id === user?._id ? (
              <button className="text-gray-500 hover:text-gray-700" onClick={toggleOptionsMenu}>
              <i className="fas fa-ellipsis-v"></i>
            </button>
            ):
            null

          }
        
        </div>
      </div>

     
      <CommentsModal
        isOpen={isCommentsModalOpen}
        onRequestClose={closeCommentsModal}
        comments={product.comments}
      />
    </div>
  );
};

export default PostCard;
