import React, { useEffect, useState } from 'react';
import PostFormCard from '../components/Post/PostFormCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchProductsByFollowing } from '../redux/posts/postActions';
import PostCard from '../components/Post/PostCard';
import PostCardSkeleton from '../components/Skeleton/PostCardSkeleton';
import BackToTopButton from '../utils/BackToTop';
import TopsUser from '../components/Home/TopsUser';
import MainLayout from '../components/layout/MainLayout';
import { getcomment } from '../redux/comments/commentActions';
import { getLoggedInUser } from '../redux/auth/authActions';

const Home = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('ForYou');

  const products = useSelector((state) => state?.posts?.posts?.products);
  const comments = useSelector((state) => state?.comments?.comments);
  const initialLoading = useSelector((state) => state?.user?.initialLoading);

  useEffect(() => {
    dispatch(getcomment());
    dispatch(getLoggedInUser());
  }, [dispatch]);

  useEffect(() => {
    // Fetch posts based on the active tab
    if (activeTab === 'ForYou') {
      dispatch(fetchPosts());
    } else if (activeTab === 'Following') {
      dispatch(fetchProductsByFollowing());
    }
  }, [dispatch, activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  if (!initialLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-20 w-20"></div>
        <div>Loading....</div>
      </div>
    );
  }

  return (
    <>
      <MainLayout>
        <PostFormCard />
        {/* Filters */}
        <div className="flex mt-10">
          <div className="flex justify-around gap-4 mb-2 w-full">
            <p
              className={`border border-gray-300 w-full text-center rounded-lg p-2 hover:cursor-pointer ${activeTab === 'ForYou' ? 'text-black bg-blue-300' : ''}`}
              onClick={() => handleTabClick('ForYou')}
            >
              For You
            </p>
            <p
              className={`border border-gray-300  w-full text-center rounded-lg p-2 hover:cursor-pointer ${activeTab === 'Following' ? 'text-black bg-blue-300' : ''}`}
              onClick={() => handleTabClick('Following')}
            >
              Following
            </p>
          </div>
        </div>

        <div>
          {products?.length === 0 ? (
            <PostCardSkeleton />
          ) : (
            <>
              {products?.map((product) => (
                <div key={product?._id}>
                  <PostCard product={product} comments={comments} />
                </div>
              ))}
            </>
          )}
        </div>

        <div className="hidden lg:inline">
          <TopsUser />
        </div>
      </MainLayout>
      <BackToTopButton />
    </>
  );
};

export default Home;
