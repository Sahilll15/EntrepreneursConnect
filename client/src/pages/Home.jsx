import React, { useEffect, useState } from 'react';
import PostFormCard from '../components/Post/PostFormCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchProductsByFollowing } from '../redux/posts/postActions';
import PostCard from '../components/Post/PostCard';
import BoostedProductsCard from '../components/Post/BoostedProductsCard';
import PostCardSkeleton from '../components/Skeleton/PostCardSkeleton';
import BackToTopButton from '../utils/BackToTop';
import TopsUser from '../components/Home/TopsUser';
import MainLayout from '../components/layout/MainLayout';
import { getcomment } from '../redux/comments/commentActions';
import { getLoggedInUser } from '../redux/auth/authActions';
import { getBoostedProducts } from '../redux/boost/boostActions';

const Home = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('ForYou');

  const products = useSelector((state) => state?.posts?.posts?.products);
  const productsByFollowing = useSelector((state) => state?.posts?.postByFollowing?.products)
  const comments = useSelector((state) => state?.comments?.comments);
  const initialLoading = useSelector((state) => state?.user?.initialLoading);
  const boostedProducts = useSelector((state) => state?.boost?.boostedProducts)

  useEffect(() => {
    dispatch(getcomment());
    dispatch(getLoggedInUser());
  }, [dispatch]);

  useEffect(() => {
    // Fetch posts based on the active tab
    if (activeTab === 'ForYou') {
      dispatch(fetchPosts());
      dispatch(getBoostedProducts())
    } else if (activeTab === 'Following') {
      dispatch(fetchProductsByFollowing());
    }

  }, [dispatch, activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };



  const filteredPost = activeTab === 'ForYou' ? products : productsByFollowing




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
      <MainLayout >
        <div className='p-2'>


          <PostFormCard />
          {/* Filters */}
          <div className="flex my-5">
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
            {
              boostedProducts?.length === 0 ? null : (
                <div className="mb-5">
                  {boostedProducts?.map((product) => (
                    <div key={product?._id}>
                      <BoostedProductsCard product={product} comments={comments} />
                    </div>
                  ))}

                </div>
              )
            }
          </div>

          <div>
            {products?.length === 0 ? (
              <PostCardSkeleton />
            ) : (
              <>
                {filteredPost?.map((product) => (
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
        </div>
      </MainLayout>
      <BackToTopButton />
    </>
  );
};

export default Home;
