import React, { useEffect } from 'react';
import Sidebar from '../components/layout/Sidebar';
import PostFormCard from '../components/Post/PostFormCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/posts/postActions';
import PostCard from '../components/Post/PostCard';
import FollowRequestsPanel from '../components/User/FollowRequestsPanel';
import PostCardSkeleton from '../components/Skeleton/PostCardSkeleton';
import BackToTopButton from '../utils/BackToTop';
import { toast } from 'react-toastify';
import TopsUser from '../components/Home/TopsUser';
import MainLayout from '../components/layout/MainLayout';


const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.posts.posts.products);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (  
    <>
  
    <MainLayout >

   
        <PostFormCard />
        <div>
          {products?.length === 0 ? (
            <PostCardSkeleton />
          ) : (
            products?.map((product) => (
              <PostCard product={product} key={product._id} />
            ))
          )}
        </div>
              <div className='hidden lg:inline'>
              <TopsUser />
              </div>
              </MainLayout>
    <BackToTopButton />
    </>
  );
};

export default Home;
