import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchProductsByFollowing } from '../redux/posts/postActions';
import { getcomment } from '../redux/comments/commentActions';
import { getLoggedInUser } from '../redux/auth/authActions';
import { getBoostedProducts } from '../redux/boost/boostActions';
import PostFormCard from '../components/Post/PostFormCard';
import { toast, ToastContainer } from "react-toastify";

import PostCard from '../components/Post/PostCard';
import BoostedProductsCard from '../components/Post/BoostedProductsCard';
import PostCardSkeleton from '../components/Skeleton/PostCardSkeleton';
import BackToTopButton from '../utils/BackToTop';
import TopsUser from '../components/Home/TopsUser';
import MainLayout from '../components/layout/MainLayout';

const Home = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('Following');
  const [showBoostedProducts, setShowBoostedProducts] = useState(true);

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
  // useEffect(() => {
  //   if (activeTab === 'ForYou') {
  //     dispatch(fetchPosts());
  //     dispatch(getBoostedProducts());
  //   } else if (activeTab === 'Following') {
  //     dispatch(fetchProductsByFollowing());
  //   }
  // }, [dispatch, activeTab]);

  useEffect(() => {
    const fetchData = async () => {
      if (activeTab === 'ForYou') {
        await dispatch(fetchPosts()); // Fetch posts from For You tab
        dispatch(getBoostedProducts());
      } else if (activeTab === 'Following') {
        await dispatch(fetchProductsByFollowing());
  
        if (productsByFollowing?.length === 0) {
          
          setActiveTab('ForYou'); // Switch to For You tab if not following anyone
          await dispatch(fetchPosts()); // Fetch posts from For You tab
          dispatch(getBoostedProducts());
        }
      }
    };
  
    fetchData();
  }, [dispatch, activeTab, productsByFollowing]);

 
  
  

  // Handle tab click to switch between "For You" and "Following"
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Determine which set of posts/products to display based on the active tab
  const filteredPosts = activeTab === 'ForYou' ? products : productsByFollowing;

  if (!initialLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-20 w-20"></div>
        <div>Loading....</div>
      </div>
    )
  }

  return (
    <>
      <MainLayout>
        <div className='p-2'>
          <PostFormCard />

          {/* Tab buttons for "For You" and "Following" */}
          <div className="flex my-5">
            <div className="flex justify-around gap-4 mb-2 w-full">
              <p
                className={`border border-gray-300 w-full text-center rounded-lg p-2 hover:cursor-pointer ${activeTab === 'Following' ? 'text-black bg-blue-300' : ''
                  }`}
                onClick={() => handleTabClick('Following')}
              >
                Following
              </p>
              <p
                className={`border border-gray-300 w-full text-center rounded-lg p-2 hover:cursor-pointer ${activeTab === 'ForYou' ? 'text-black bg-blue-300' : ''
                  }`}
                onClick={() => handleTabClick('ForYou')}
              >
                For You
              </p>

            </div>
          </div>

          {
            activeTab === 'ForYou' ?
              (
                <div className="mb-2">
                  <label>
                    <input

                      id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={showBoostedProducts}
                      onChange={() => setShowBoostedProducts(!showBoostedProducts)}
                    />
                    <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">show boosted products</label>
                  </label>
                </div>
              )
              :
              (
                null
              )

          }


          {showBoostedProducts &&
            activeTab === 'ForYou' &&
            boostedProducts?.length > 0 && (
              <div className="mb-5">
                {boostedProducts.map((product) => (
                  <BoostedProductsCard key={product?._id} product={product} comments={comments} />
                ))}
              </div>
            )}

          {
            filteredPosts?.length > 0 ? (
              filteredPosts.map((product) => (
                <PostCard key={product?._id} product={product} comments={comments} />
              ))
            ) : (
              <PostCardSkeleton />
            )

          }

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
