import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchProductsByFollowing } from '../redux/posts/postActions';
import { getcomment } from '../redux/comments/commentActions';
import { getLoggedInUser } from '../redux/auth/authActions';
import { getBoostedProducts } from '../redux/boost/boostActions';
import PostFormCard from '../components/Post/PostFormCard';
import PostCard from '../components/Post/PostCard';
import BoostedProductsCard from '../components/Post/BoostedProductsCard';
import PostCardSkeleton from '../components/Skeleton/PostCardSkeleton';
import BackToTopButton from '../utils/BackToTop';
import TopsUser from '../components/Home/TopsUser';
import MainLayout from '../components/layout/MainLayout';

const Home = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('ForYou');

  // Select data from Redux store
  const products = useSelector((state) => state?.posts?.posts?.products);
  const productsByFollowing = useSelector((state) => state?.posts?.postByFollowing?.products);
  const comments = useSelector((state) => state?.comments?.comments);
  const initialLoading = useSelector((state) => state?.user?.initialLoading);
  const boostedProducts = useSelector((state) => state?.boost?.boostedProducts);

  // Fetch comments and user information on component mount
  useEffect(() => {
    dispatch(getcomment());
    dispatch(getLoggedInUser());
  }, [dispatch]);

  // Fetch posts/products based on the active tab
  useEffect(() => {
    if (activeTab === 'ForYou') {
      dispatch(fetchPosts());
      dispatch(getBoostedProducts());
    } else if (activeTab === 'Following') {
      dispatch(fetchProductsByFollowing());
    }
  }, [dispatch, activeTab]);

  // Handle tab click to switch between "For You" and "Following"
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Determine which set of posts/products to display based on the active tab
  const filteredPosts = activeTab === 'ForYou' ? products : productsByFollowing;

  return (
    <>
      <MainLayout>
        <div className='p-2'>
          <PostFormCard />

          {/* Tab buttons for "For You" and "Following" */}
          <div className="flex my-5">
            <div className="flex justify-around gap-4 mb-2 w-full">
              <p
                className={`border border-gray-300 w-full text-center rounded-lg p-2 hover:cursor-pointer ${activeTab === 'ForYou' ? 'text-black bg-blue-300' : ''
                  }`}
                onClick={() => handleTabClick('ForYou')}
              >
                For You
              </p>
              <p
                className={`border border-gray-300 w-full text-center rounded-lg p-2 hover:cursor-pointer ${activeTab === 'Following' ? 'text-black bg-blue-300' : ''
                  }`}
                onClick={() => handleTabClick('Following')}
              >
                Following
              </p>
            </div>
          </div>


          {
            activeTab === 'Following' ? null
              :
              boostedProducts?.length > 0 && (
                <div className="mb-5">
                  {boostedProducts.map((product) => (
                    <BoostedProductsCard key={product?._id} product={product} comments={comments} />
                  ))}
                </div>
              )

          }

          {initialLoading ? (
            filteredPosts?.length > 0 ? (
              filteredPosts.map((product) => (
                <PostCard key={product?._id} product={product} comments={comments} />
              ))
            ) : (
              <PostCardSkeleton />
            )
          ) : (
            <div className="flex flex-col justify-center items-center h-screen">
              <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-20 w-20"></div>
              <div>Loading....</div>
            </div>
          )}

          {/* Display TopsUser component */}
          <div className="hidden lg:inline">
            <TopsUser />
          </div>
        </div>
      </MainLayout>
      <BackToTopButton />
    </>
  );
};

export default Home;
