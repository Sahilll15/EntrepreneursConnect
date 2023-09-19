import React, { useEffect, useState } from "react";
import Navbar from "../../components/layout/ProfileNavbar";
import { getLoggedInUser, getProfile } from "../../redux/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostCard from "../../components/Post/PostCard";
import { fetchpostByUserID } from "../../redux/posts/postActions";
import { FollowUnfollow } from "../../redux/auth/authActions";
import { formatDateTime } from "../../utils/FormatDate";
import { getcomment } from "../../redux/comments/commentActions";



const Profile = () => {
  const dispatch = useDispatch();
  const ProfileUser = useSelector((state) => state?.user?.profileUser);
  const user=useSelector((state)=>state.user?.user)
  const postByUserID=useSelector((state)=>state.posts.postsByUser.products)
  const { id } = useParams();
  const loggedInUser=user?._id;
  const followunfollowLoading=useSelector((state)=>state?.user?.followunfollowLoading)
  const [badge,setBadge]=useState(ProfileUser?.badges)
  const [hoverBadge,setHoverBadge]=useState(false);
  const comments = useSelector((state) => state?.comments?.comments);


  const handleMouseEnter = () => {
    setHoverBadge(true);
  };

  const handleMouseLeave = () => {
    setHoverBadge(false);
  };

  const followunfollow = async() => {
   await dispatch(FollowUnfollow(id));
   await dispatch(getProfile(id));
   await dispatch(getLoggedInUser());

  }

  useEffect(()=>{
    dispatch(getProfile(id))
    dispatch(fetchpostByUserID(id))
    dispatch(getcomment())
  },[dispatch])

  return (
   
    <div>
         <Navbar/>
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")',
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            />
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
              <div className="flex flex-wrap justify-center">
    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
    <div className="flex flex-col items-center"> 
          <div className="flex-shrink-0">
          <img
                          alt={ProfileUser?.badges}
                          src={ProfileUser?.avatar?.url}
                          className={`shadow-xl rounded-full h-auto align-middle absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px border-4 ${
                            ProfileUser?.badges[0] === "Expert"
                              ? "border-red-600"
                              : "border-none"
                          } hover:border-8 hover:border-red-600`}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave} 
                        />
          </div>
          <div className="mt-4">
          <p className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 ">
              {
                hoverBadge ? badge : null
              }
          </p>
            </div>
        </div>
    </div>
                  
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
    {loggedInUser !== ProfileUser?._id && (
      <div className="py-6 px-3 mt-32 sm:mt-0">
        <button
          onClick={followunfollow}
          className={`${
            ProfileUser?.followers?.includes(loggedInUser)
              ? "bg-red-500 active:bg-red-600"
              : "bg-blue-500 active:bg-blue-600"
          } uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150`}
          type="button"
        >
          {followunfollowLoading ? "Loading..." : (ProfileUser?.followers?.includes(loggedInUser) ? "Unfollow" : "Follow")}
        </button>
      </div>
    )}
  </div>


                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {ProfileUser?.followers ?
                          ProfileUser?.followers.length : 0
                        } 
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Followers
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {ProfileUser?.following ?
                          ProfileUser?.following.length : 0
                        }
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Following
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {ProfileUser?.productsShowcased ?
                          ProfileUser?.productsShowcased?.length : 0
                        }

                        </span>
                        <span className="text-sm text-blueGray-400">
                          Products  
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                    {ProfileUser?.username}
                  </h3>
                        <div className="flex items-center justify-center gap-4">
                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
        <i className="fas fa-star text-yellow-400"></i> {ProfileUser?.badges[0] || "No badges yet"}
      </div>
                  <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-coins text-yellow-400"></i>
                    {ProfileUser?.points || 0}
                  </div>

                        </div>
                 
                  {/* <div>
                  <p><i className="fa-solid fa-medal" style={{color: "#D4Af37",}} />8 
                  &nbsp; <i className="fa-solid fa-medal" style={{color: "#BBC2CC",}} />6  
                  &nbsp; <i className="fa-solid fa-medal" style={{color: "#B08D57",}} />5</p>
                  </div> */}
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      {ProfileUser?.bio}
                      </p>
                  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto">
  <h1 className="text-2xl font-semibold text-blueGray-700 mb-4 text-center">Posts</h1>

  <div className="flex flex-col items-center h-screen">
    {postByUserID?.length === 0 ? (
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center justify-center">
          <i className="far fa-folder-open text-6xl text-blueGray-300"></i>
          <h1 className="text-2xl text-blueGray-300">No posts yet</h1>
        </div>
      </div>
    ) : (
      postByUserID?.map((product) => (
        <div className="w-2/3" key={product._id}>
          <PostCard product={product} comments={comments} key={product?._id} />
        </div>
      ))
    )}
  </div>
</div>
        </section>
      </main>

      
 </div>
  );
};

export default Profile;
