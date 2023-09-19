import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Comment from './Comment';
import { useDispatch, useSelector } from 'react-redux';
import { addcomment } from '../../redux/comments/commentActions';
import { fetchPosts } from '../../redux/posts/postActions';
import { getcomment } from '../../redux/comments/commentActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { getLoggedInUser } from '../../redux/auth/authActions'; 

const CommentsModal = ({ isOpen, onRequestClose, postId,comments }) => {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const user=useSelector((state)=>state?.user?.user)
  const commentLoading=useSelector((state)=>state?.comments?.commentLoading)
  
  const handlePostComment = async (e) => {
    e.preventDefault();
    await dispatch(addcomment({ postId, newComment }));
    await dispatch(fetchPosts());
    await dispatch(getcomment());
    setNewComment('');
  };

  const commentsById = comments?.filter((comment) => comment?.postId === postId);

  useEffect(() => {
    dispatch(getLoggedInUser());
  }, [dispatch]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Comments Modal"
      ariaHideApp={false}
      className="fixed inset-0 flex items-center justify-center"
    >
      <div className="bg-white w-2/3 mx-auto rounded-lg shadow-lg p-4 border border-gray-900">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Comments</h2>
          <button
            onClick={onRequestClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="space-y-2 max-h-72 overflow-y-auto">
          {
            commentsById?.length === 0 && (
              <div className="text-left font-bold text-xl text-black mb-4 inline-block">
                {/* add navlink */}
                <NavLink to={`/profile/${user?._id}`} className='text-blue-600'>{user?.username} </NavLink>
                write the first comment
            </div>
            
            )
          }
          {commentsById?.map((comment) => (
            <Comment key={comment?._id} comment={comment} />
          ))}
        </div>

        <div className="mt-auto">
          <div className="section-heading flex items-center">
            <FontAwesomeIcon icon={faComment} className="mr-2 text-blue-500" />
            Add a Comment
          </div>
          <textarea
            rows="4"
            placeholder="Write your comment here..."
            value={newComment}
            onChange={handleCommentChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"
            style={{ resize: 'none' }} 
          ></textarea>
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              onClick={handlePostComment}
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              {commentLoading ? 'Loading...' : 'Post Comment'}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CommentsModal;
