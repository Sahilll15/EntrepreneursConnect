import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getCommunityById,
  createDiscussionCommunity,
  getCommunityDiscussion,
} from '../redux/community/CommunityAcitions';
import GroupDiscussionLayout from '../components/layout/GroupDiscussionLayout';
import { NavLink } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Setting from '../components/Chat/Dsetting';

const GroupDiscussion = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const group = useSelector((state) => state?.community?.communityById?.group);
  const discussions = useSelector((state) => state?.community?.discussions);
  const user = useSelector((state) => state?.user?.user);
  let initialLoading = useSelector((state) => state?.user?.initialLoading)
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const discussionLoading = useSelector((state) => state?.community?.discussionLoading);

  // State to control the initial loader visibility
  const [showLoader, setShowLoader] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  const handleSubmit = async () => {
    await dispatch(createDiscussionCommunity({ newContent, id }));
    await dispatch(getCommunityDiscussion(id));
    setNewContent('')
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

    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    dispatch(getCommunityById(id));
    dispatch(getCommunityDiscussion(id));
    return () => clearTimeout(loaderTimeout);
  }, [dispatch, id]);

  if (showLoader) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-20 w-20"></div>
        <div>Discussion Loading....</div>
      </div>
    );
  }

  if (!group?.joinedMembers[0]?.includes(user?._id)) {
    return (
      <div className='flex flex-col text-center justify-center items-center h-screen'>
        <h1 className='text-4xl font-semibold mb-4'>You are not a member of this group</h1>
        <NavLink to='/Chat'>
          <button className='text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded'>
            Back to Community
          </button>
        </NavLink>
      </div>
    );
  }



  return (
    <GroupDiscussionLayout>
      <div className='bg-gray-200 w-full'>
        <div className='h-screen w-full p-4 flex flex-col'>

        <div>
      <div className="bg-gray-200 border-2 border-black p-4 mb-4 rounded-lg shadow-md relative">
        <div className="flex items-center mb-4">
          {user.avatar && (
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full mr-4"
            />
          )}
          <div>
            <h1 className="text-xl font-semibold">{group?.groupname}</h1>
            <p className="text-sm text-gray-500">
              Group Admin: {group?.groupAdmin}
            </p>
          </div>
          <div className="absolute top-3 right-2">
            <button onClick={openModal}>
              <p className="text-xl hover:text-black text-gray-500"><i className="fa-solid fa-gear"></i></p>
            </button>
          </div>
        </div>
        <p className="text-lg">{group?.description}</p>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <button onClick={closeModal}>Close</button>
            {/* Add your modal content here */}
            <Setting />
          </div>
        </div>
      )}
    </div>

          <div className='flex-1 overflow-y-auto'>
            <div className='mb-4 '>
              {
                discussions.length === 0 ? (
                  <div className='text-center text-2xl font-semibold'>No Discussions Yet</div>
                ) : null
              }

              {discussions.map((conversation, index) => (
                <div key={index} className='mb-2 bg-gray-100 rounded-lg p-4'>
                  <div className='flex'>
                    <img
                      src={conversation.author.avatar.url}
                      alt='User Avatar'
                      className='w-10 h-10 rounded-full border border-black'
                    />
                    <div className='text-xl ml-4 text-black-500'>{conversation.author.username}</div>
                  </div>
                  {/* <div className='text-xl font-semibold'>{conversation.title}</div> */}
                  <div className='text-lg mt-1'>{conversation.content}</div>
                  <div className='text-sm text-right text-gray-500'>{formatDateTime(conversation.createdAt)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-4 flex flex-col sm:flex-row'>
            <textarea
              className='flex-grow border border-gray-300 rounded-md p-2 shadow-md focus:outline-none mb-2 sm:mb-0 sm:mr-2'
              placeholder='MESSAGE'
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />

            <button className="w-full sm:w-24 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br flex items-center font-medium text-white transition-all duration-200 ease-in-out rounded-lg px-4 py-2 active:scale-95 active:shadow-inner"
              onClick={handleSubmit} >
              <div className="absolute -z-10 -inset-0.5 rounded-xl blur-xl group-hover:opacity-100 animate-pulse group-hover:inset-10"></div>
              <div className="svg-wrapper transform group-hover:translate-x-5 group-hover:rotate-45 transition-all duration-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path fill="#fff" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                </svg>
              </div>
              <span className="ml-1 text-white transition-all duration-300 group-hover:text-transparent">
                Send
              </span>
            </button>
          </div>

        </div>
      </div>
    </GroupDiscussionLayout>


  );
};

export default GroupDiscussion;
