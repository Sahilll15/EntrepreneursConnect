// CommentsModal.js

import React from 'react';
import Modal from 'react-modal';
import Comment from './Comment';

const CommentsModal = ({ isOpen, onRequestClose, comments }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Comments Modal"
      ariaHideApp={false}
      className="fixed inset-0 flex items-center justify-center"
    >
      <div className="bg-white max-w-md w-full mx-auto rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Comments</h2>
          <button
            onClick={onRequestClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="space-y-4">
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
        <div className="mt-4">
          <textarea
            rows="4"
            placeholder="Add a comment"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Post
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CommentsModal;
