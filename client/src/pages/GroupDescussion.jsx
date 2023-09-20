import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getCommunityById,
  createDiscussionCommunity,
  getCommunityDiscussion,
} from '../redux/community/CommunityAcitions';
import GroupDiscussionLayout from '../components/layout/GroupDiscussionLayout';

const GroupDiscussion = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const group = useSelector((state) => state?.community?.communityById?.group);
  const discussions = useSelector((state) => state?.community?.discussions);
  const user = useSelector((state) => state?.user); // Assuming you have user data in your Redux store
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const discussionLoading = useSelector((state) => state?.community?.discussionLoading);

  const handleSubmit = async () => {
    await dispatch(createDiscussionCommunity({ newTitle, newContent, id }));
    await dispatch(getCommunityDiscussion(id));
  };

  const formatDateTime = (isoDateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return new Date(isoDateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    dispatch(getCommunityById(id));
    dispatch(getCommunityDiscussion(id));
  }, [dispatch]);

  return (
    <GroupDiscussionLayout>
      <div className=' h-screen w-full p-4 flex flex-col'>
        <div className='border border-gray-200 p-4 mb-4 rounded-lg shadow-md bg-white'>
          <div className='flex items-center mb-4'>
            {user.avatar && (
              <img
                src={user.avatar}
                alt='User Avatar'
                className='w-10 h-10 rounded-full mr-4'
              />
            )}
            <div>
              <h1 className='text-xl font-semibold'>{group?.groupname}</h1>
              <p className='text-sm text-gray-500'>Group Admin: {group?.groupAdmin}</p>
            </div>
          </div>
          <p className='text-lg'>{group?.description}</p>
        </div>
        <div className='flex-1 overflow-y-auto'>
          <div className='mb-4 '>
            {discussions.map((conversation, index) => (
              <div key={index} className='mb-2 border border-black rounded-lg p-4'>
                <div className='flex'>
                  <img
                    src={conversation.author.avatar.url}
                    alt='User Avatar'
                    className='w-10 h-10 rounded-full border border-black'
                  />
                  <div className='text-xl ml-4 text-black-500'>{conversation.author.username}</div>
                </div>
                <div className='text-sm text-gray-500'>{formatDateTime(conversation.createdAt)}</div>
                <div className='text-xl font-semibold'>{conversation.title}</div>
                <div className='text-lg'>{conversation.content}</div>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-4'>
          <input
            type='text'
            className='w-full h-12 border border-gray-300 rounded-md p-2 shadow-md focus:outline-none mb-2'
            placeholder='Title'
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            className='w-full h-24 border border-gray-300 rounded-md p-2 shadow-md focus:outline-none'
            placeholder='Content'
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <button
            className='mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 shadow-md focus:outline-none'
            onClick={handleSubmit}
          >
            {discussionLoading ? 'Loading...' : 'Create Discussion'}
          </button>
        </div>
      </div>
    </GroupDiscussionLayout>
  );
};

export default GroupDiscussion;
