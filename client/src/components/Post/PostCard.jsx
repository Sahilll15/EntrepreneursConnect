import React, { useEffect, useState } from 'react';
import { likePost } from '../../redux/likes/likesActions';
import { useDispatch, useSelector } from 'react-redux';
import CommentsModal from './CommentsModal';
import { getLeaderBoard } from '../../redux/auth/authActions';
import { deletePost, fetchPosts } from '../../redux/posts/postActions';
import { NavLink } from 'react-router-dom';
import '../css/PostCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faTimes, faThumbsUp, faShareSquare, faEllipsisV, FaThumbsUp } from '@fortawesome/free-solid-svg-icons';


const baseUrl = process.env.REACT_APP_API_HOST

const PostCard = ({ product, comments }) => {
  const formatDateTime = (isoDateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(isoDateString).toLocaleDateString(undefined, options);
  };

  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false);
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);
  const [updatedContent, setUpdatedContent] = useState('');
  const user = useSelector((state) => state?.user?.user);



  const handleDelete = async (id) => {
    await dispatch(deletePost(id));
    await dispatch(fetchPosts());
    await dispatch(getLeaderBoard());
  };

  const handleLike = async (id) => {
    await dispatch(likePost(id));
    await dispatch(fetchPosts());
    setIsLiked(true);
  };

  const openCommentsModal = () => {
    setIsCommentsModalOpen(true);
  };

  const closeCommentsModal = () => {
    setIsCommentsModalOpen(false);
  };

  const toggleOptionsMenu = () => {
    setIsOptionsMenuOpen(!isOptionsMenuOpen);
  };

  const commentsById = comments?.filter((comment) => comment?.postId === product?._id);

  const firstComment = commentsById?.length > 0 ? commentsById[0] : null;

  return (

    <>


      <div key={product._id} className="post-card bg-white rounded-lg shadow-md p-4 mb-4 border hover:focus" style={{ maxHeight: '600px' }}>
        <div className="relative">
          {isOptionsMenuOpen && (
            <div className="flex flex-col absolute right-0 top-0 mt-2 bg-white p-2 rounded shadow-md border border-solid-2">
              <button
                className="text-red-500 hover:text-red-700 mb-2"
                onClick={() => {
                  // Handle delete post here
                  handleDelete(product._id);
                }}
              >
                <FontAwesomeIcon icon={faTimes} /> Delete
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center mb-4">
          <NavLink to={`/profile/${product.author.id}`}>
            <img
              src={product.author.avatar}
              alt={`${product.author.name}'s avatar`}
              className={`w-8 h-8 rounded-full mr-3 border border-solid-4 ${isLiked ? 'avatar-animation' : ''}`}
            />
          </NavLink>

          <div>
            <p className="text-lg font-semibold">{product.author.name}</p>
            <p className="text-gray-600 text-sm">{formatDateTime(product.createdAt)}</p>
          </div>
        </div>
        <p className="text-xl font-semibold mb-4">{product.content}</p>

        {product?.media && (
          // Check if the media URL ends with a common image or video file extension
          /\.(jpg|jpeg|png|gif)$/i.test(product.media) ? (
            // Render an image if it's an image URL
            <img src={product.media} alt="Post media" className="w-96 rounded-lg mb-4" />
          ) : (
            // Render a video if it's a video URL
            <video controls className="w-96 rounded-lg mb-4">
              <source src={product.media} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )
        )}

        <div className="flex justify-between text-gray-600 text-sm">
          <div>
            <span className="mr-2 text-xl">
              <FontAwesomeIcon icon={faThumbsUp} className={`text-${isLiked ? 'green' : 'blue'}-500`} /> {product.likes.length}
            </span>
            <span className="text-xl">
              <FontAwesomeIcon icon={faComment} className="text-gray-500 font-bold text-xl" /> {product.comments.length}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              className={`text-${isLiked ? 'green' : 'blue'}-500 hover:text-${isLiked ? 'green' : 'blue'}-700`}
              onClick={() => {
                handleLike(product._id);
              }}
            >
              <FontAwesomeIcon icon={isLiked ? faThumbsUp : faThumbsUp} /> Like
            </button>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={openCommentsModal}
            >
              <FontAwesomeIcon icon={faComment} /> Comment
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faShareSquare} /> Share
            </button>
            {product?.author?.id === user?._id ? (
              <button className="text-gray-500 hover:text-gray-700" onClick={toggleOptionsMenu}>
                <FontAwesomeIcon icon={faEllipsisV} />
              </button>
            ) : null}
          </div>
        </div>
        <hr className='my-4 ' />
        {firstComment ? (
          <div className="flex items-center mb-2">
            <NavLink to={`/profile/${firstComment.commentedBy.id}`}>
              <img
                src={firstComment.commentedBy.avatar}
                alt={`${firstComment.commentedBy.name}'s avatar`}
                className="w-8 h-8 rounded-full mr-3 border border-solid-4"
              />
            </NavLink>
            <div className="flex-grow">
              <div className="bg-gray-100 rounded-lg p-3 shadow-md">
                <p className="text-sm font-semibold text-gray-800">{firstComment.commentedBy.name}</p>
                <p className="text-gray-600 text-sm">{firstComment.comment}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-gray-600 text-sm mb-2">No comments yet</div>
        )}


        <CommentsModal
          isOpen={isCommentsModalOpen}
          onRequestClose={closeCommentsModal}
          postId={product._id}
          comments={comments}
        />
      </div>
    </>
  );
};

export default PostCard;
