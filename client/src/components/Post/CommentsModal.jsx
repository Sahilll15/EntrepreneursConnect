import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Comment from './Comment';
import { useDispatch, useSelector } from 'react-redux';
import { addcomment } from '../../redux/comments/commentActions';
import { fetchPosts } from '../../redux/posts/postActions';
import { getcomment } from '../../redux/comments/commentActions';

const CommentsModal = ({ isOpen, onRequestClose, postId }) => {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const comments = useSelector((state) => state?.comments?.comments);

  const handlePostComment = async (e) => {
    e.preventDefault();
    await dispatch(addcomment({ postId, newComment }));
    await dispatch(fetchPosts());
    setNewComment('');
  };

  const commentsById = comments.filter((comment) => comment.postId === postId);

  useEffect(() => {
    dispatch(getcomment());
  }, [dispatch]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Comments Modal"
      ariaHideApp={false}
      className="fixed inset-0 flex items-center justify-center"
    >
      <div className="bg-white w-2/3 h-2/3 mx-auto rounded-lg shadow-lg p-4 border border-gray-900">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Comments</h2>
          <button
            onClick={onRequestClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          <div className="section-heading">Existing Comments</div>
          {commentsById.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </div>

        <div className="mt-4">
          <div className="section-heading">Add a Comment</div>
          <textarea
            rows="4"
            placeholder="Write your comment here..."
            value={newComment}
            onChange={handleCommentChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"
          ></textarea>
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              onClick={handlePostComment}
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Comment
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CommentsModal;
