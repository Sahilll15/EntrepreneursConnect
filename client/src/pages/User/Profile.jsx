import React, { useEffect, useState } from "react";
import Navbar from "../../components/layout/ProfileNavbar";
import { getLoggedInUser, getProfile, followersFollowing } from "../../redux/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import Notifi from "../../components/Notify/Noti";

import { useParams } from "react-router-dom";
import PostCard from "../../components/Post/PostCard";
import { fetchpostByUserID } from "../../redux/posts/postActions";
import { FollowUnfollow } from "../../redux/auth/authActions";
import { getcomment } from "../../redux/comments/commentActions";
import BackToTopButton from "../../utils/BackToTop";
import { getUserStats } from "../../redux/auth/authActions";
import { NavLink } from "react-router-dom";
import TopUserCard from "../../components/Home/TopUserCard";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const ProfileUser = useSelector((state) => state?.user?.profileUser);
  const user = useSelector((state) => state.user?.user);
  const postByUserID = useSelector((state) => state.posts.postsByUser.products);
  const { id } = useParams();
  const loggedInUser = user?._id;
  const followunfollowLoading = useSelector(
    (state) => state?.user?.followunfollowLoading
  );
  const [badge, setBadge] = useState(ProfileUser?.badges);
  const [hoverBadge, setHoverBadge] = useState(false);
  const comments = useSelector((state) => state?.comments?.comments);
  const userStats = useSelector((state) => state?.user?.userStats);
  //get the foloewr amd following
  const followers = useEffect((state) => state?.user?.user?.followers)
  const following = useEffect((state) => state?.user?.user?.following)

  const handleMouseEnter = () => {
    setHoverBadge(true);
  };

  const handleMouseLeave = () => {
    setHoverBadge(false);
  };

  const followunfollow = async () => {
    await dispatch(FollowUnfollow(id));
    await dispatch(getProfile(id));
    await dispatch(getLoggedInUser());
  };

  useEffect(() => {
    dispatch(getProfile(id));
    dispatch(fetchpostByUserID(id));
    dispatch(getcomment());
    dispatch(getUserStats(id));
    dispatch(followersFollowing(id));
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Notifi />
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
                          className={`shadow-xl rounded-full h-auto align-middle absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px border-4 ${ProfileUser?.badges[0] === "Expert"
                            ? "border-red-600"
                            : "border-none"
                            } hover:border-8 hover:border-red-600`}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        />
                      </div>
                      <div className="mt-4">
                        <p className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                          {hoverBadge ? badge : null}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    {loggedInUser !== ProfileUser?._id && (
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        <button
                          onClick={followunfollow}
                          className={`${ProfileUser?.followers?.includes(loggedInUser)
                            ? "bg-red-500 active:bg-red-600"
                            : "bg-blue-500 active:bg-blue-600"
                            } uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150`}
                          type="button"
                        >
                          {followunfollowLoading
                            ? "Loading..."
                            : ProfileUser?.followers?.includes(loggedInUser)
                              ? "Unfollow"
                              : "Follow"}
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <button className="mr-4 p-3 text-center"
                        onClick={() => setShowModal(true)}>

                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {
                            userStats?.followers?.length
                          }
                        </span>

                        <span className="text-sm text-blueGray-400">
                          Followers
                        </span>
                      </button>
                      {showModal && (
                        <div className="modal fixed inset-0 z-50 flex p-2  items-center justify-center">
                          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                          <div className="bg-white p-2 rounded-lg shadow-lg z-10 w-11/12 " style={{ maxHeight: '800px', overflowY: 'auto', top: '80%' }}>
                            {

                            }
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-base text-white font-bold py-2 px-4 rounded mt-4"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      )}

                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {
                            userStats?.following?.length
                          }
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Following
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {
                            userStats?.totalPosts
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
                    {ProfileUser?.username} &nbsp;{" "}
                    {/* <i class="bi bi-patch-check"></i>{" "} */}

                  </h3>
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      <i className="fas fa-star text-yellow-400"></i>{" "}
                      {ProfileUser?.badges[0] || "No badges yet"}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-coins text-yellow-400"></i>
                      {ProfileUser?.points || 0}
                    </div>
                  </div>


                </div>

                <center>
                  <div>
                    <p className="text-lg">Follow me on :<br />
                      <p className="text-2xl flex justify-center gap-2">
                        <NavLink to={`${ProfileUser?.InstagramLink}`} target="_blank">
                          <i className="fa-brands fa-instagram cursor-pointer"></i>
                        </NavLink>
                        &nbsp;
                        <NavLink to={`${ProfileUser?.LinkedInLink}`} target="_blank">
                          <i className="fa-brands fa-linkedin cursor-pointer"></i>
                        </NavLink>
                        &nbsp;

                      </p>
                    </p>
                  </div>
                </center>


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
            <h1 className="text-2xl font-semibold text-blueGray-700 mb-4 text-center">
              Posts
            </h1>


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
                  <div className="w-full lg:w-2/3 md:2/3 p-2" key={product._id}>
                    <PostCard
                      product={product}
                      comments={comments}
                      key={product?._id}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>

      <BackToTopButton />
      <div className="w-full  ">
        {/* <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile*/}
        <section
          id="bottom-navigation"
          className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
        >
          <div id="tabs" className="flex justify-between mx-5">
            <NavLink to={'/'}>
              <div

                className="w-full focus:text-teal-500 hover:text-teal-500  justify-center inline-block text-center pt-2 pb-1"
              >
                <svg
                  width={25}
                  height={25}
                  viewBox="0 0 42 42"
                  className="inline-block mb-1"
                >
                  <g
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      d="M21.0847458,3.38674884 C17.8305085,7.08474576 17.8305085,10.7827427 21.0847458,14.4807396 C24.3389831,18.1787365 24.3389831,22.5701079 21.0847458,27.6548536 L21.0847458,42 L8.06779661,41.3066256 L6,38.5331279 L6,26.2681048 L6,17.2542373 L8.88135593,12.4006163 L21.0847458,2 L21.0847458,3.38674884 Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M11,8 L33,8 L11,8 Z M39,17 L39,36 C39,39.3137085 36.3137085,42 33,42 L11,42 C7.6862915,42 5,39.3137085 5,36 L5,17 L7,17 L7,36 C7,38.209139 8.790861,40 11,40 L33,40 C35.209139,40 37,38.209139 37,36 L37,17 L39,17 Z"
                      fill="currentColor"
                    />
                    <path
                      d="M22,27 C25.3137085,27 28,29.6862915 28,33 L28,41 L16,41 L16,33 C16,29.6862915 18.6862915,27 22,27 Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <rect
                      fill="currentColor"
                      transform="translate(32.000000, 11.313708) scale(-1, 1) rotate(-45.000000) translate(-32.000000, -11.313708) "
                      x={17}
                      y="10.3137085"
                      width={30}
                      height={2}
                      rx={1}
                    />
                    <rect
                      fill="currentColor"
                      transform="translate(12.000000, 11.313708) rotate(-45.000000) translate(-12.000000, -11.313708) "
                      x={-3}
                      y="10.3137085"
                      width={30}
                      height={2}
                      rx={1}
                    />
                  </g>
                </svg>
                <span className="tab tab-home block text-xs">Home</span>
              </div>
            </NavLink>

            <NavLink to={'/chat'}>
              <a
                href="#"
                className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
              >
                <svg
                  width={25}
                  height={25}
                  viewBox="0 0 42 42"
                  className="inline-block mb-1"
                >
                  <g
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      d="M14.7118754,20.0876892 L8.03575361,20.0876892 C5.82661462,20.0876892 4.03575361,18.2968282 4.03575361,16.0876892 L4.03575361,12.031922 C4.03575361,8.1480343 6.79157254,4.90780265 10.4544842,4.15995321 C8.87553278,8.5612583 8.1226025,14.3600511 10.9452499,15.5413938 C13.710306,16.6986332 14.5947501,18.3118357 14.7118754,20.0876892 Z M14.2420017,23.8186831 C13.515543,27.1052019 12.7414284,30.2811559 18.0438552,31.7330419 L18.0438552,33.4450645 C18.0438552,35.6542035 16.2529942,37.4450645 14.0438552,37.4450645 L9.90612103,37.4450645 C6.14196811,37.4450645 3.09051926,34.3936157 3.09051926,30.6294627 L3.09051926,27.813861 C3.09051926,25.604722 4.88138026,23.813861 7.09051926,23.813861 L14.0438552,23.813861 C14.1102948,23.813861 14.1763561,23.8154808 14.2420017,23.8186831 Z M20.7553776,32.160536 C23.9336213,32.1190063 23.9061943,29.4103976 33.8698747,31.1666916 C34.7935223,31.3295026 35.9925894,31.0627305 37.3154077,30.4407183 C37.09778,34.8980343 33.4149547,38.4450645 28.9036761,38.4450645 C24.9909035,38.4450645 21.701346,35.7767637 20.7553776,32.160536 Z"
                      fill="currentColor"
                      opacity="0.1"
                    />
                    <g transform="translate(2.000000, 3.000000)">
                      <path
                        d="M8.5,1 C4.35786438,1 1,4.35786438 1,8.5 L1,13 C1,14.6568542 2.34314575,16 4,16 L13,16 C14.6568542,16 16,14.6568542 16,13 L16,4 C16,2.34314575 14.6568542,1 13,1 L8.5,1 Z"
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                      <path
                        d="M4,20 C2.34314575,20 1,21.3431458 1,23 L1,27.5 C1,31.6421356 4.35786438,35 8.5,35 L13,35 C14.6568542,35 16,33.6568542 16,32 L16,23 C16,21.3431458 14.6568542,20 13,20 L4,20 Z"
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                      <path
                        d="M23,1 C21.3431458,1 20,2.34314575 20,4 L20,13 C20,14.6568542 21.3431458,16 23,16 L32,16 C33.6568542,16 35,14.6568542 35,13 L35,8.5 C35,4.35786438 31.6421356,1 27.5,1 L23,1 Z"
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                      <path
                        d="M34.5825451,33.4769886 L38.3146092,33.4322291 C38.8602707,33.4256848 39.3079219,33.8627257 39.3144662,34.4083873 C39.3145136,34.4123369 39.3145372,34.4162868 39.3145372,34.4202367 L39.3145372,34.432158 C39.3145372,34.9797651 38.8740974,35.425519 38.3265296,35.4320861 L34.5944655,35.4768456 C34.048804,35.4833899 33.6011528,35.046349 33.5946085,34.5006874 C33.5945611,34.4967378 33.5945375,34.4927879 33.5945375,34.488838 L33.5945375,34.4769167 C33.5945375,33.9293096 34.0349773,33.4835557 34.5825451,33.4769886 Z"
                        fill="currentColor"
                        transform="translate(36.454537, 34.454537) rotate(-315.000000) translate(-36.454537, -34.454537) "
                      />
                      <circle
                        stroke="currentColor"
                        strokeWidth={2}
                        cx="27.5"
                        cy="27.5"
                        r="7.5"
                      />
                    </g>
                  </g>
                </svg>
                <span className="tab tab-kategori block text-xs">My Group</span>
              </a>
            </NavLink>

            <NavLink to={'/userstatistics'}>
              <a
                href="#"
                className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
              >
                <svg
                  width={25}
                  height={25}
                  viewBox="0 0 42 42"
                  className="inline-block mb-1"
                >
                  <g
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      d="M20.5890101,0.254646884 C12.8696785,5.50211755 8.0025785,14.258415 14.1941217,18.8708225 C23.16683,25.5550669 13.3362326,40.2698884 33.1021758,38.4149164 C29.6814884,40.8311956 25.5065164,42.2507054 21,42.2507054 C9.40202025,42.2507054 0,32.8486852 0,21.2507054 C0,9.79003409 9.18071714,0.473634138 20.5890101,0.254646884 Z"
                      fill="currentColor"
                      opacity="0.1"
                    />
                    <path
                      d="M25.9500282,20.3643496 L22.4308312,38.2677802 C22.3775703,38.5387376 22.1147395,38.7152155 21.8437821,38.6619546 C21.6570955,38.6252584 21.507413,38.4857901 21.4576354,38.3021581 L16.5951895,20.3643496 L20.099732,4.44663907 C20.1385204,4.27046145 20.2692032,4.12883813 20.4417012,4.07604096 C20.7057521,3.99522179 20.9853245,4.14376046 21.0661436,4.40781135 L25.9500282,20.3643496 Z M21.3022963,22.2852638 C22.4068658,22.2852638 23.3022963,21.3898333 23.3022963,20.2852638 C23.3022963,19.1806943 22.4068658,18.2852638 21.3022963,18.2852638 C20.1977268,18.2852638 19.3022963,19.1806943 19.3022963,20.2852638 C19.3022963,21.3898333 20.1977268,22.2852638 21.3022963,22.2852638 Z"
                      fill="currentColor"
                      transform="translate(21.272609, 20.629524) rotate(-315.000000) translate(-21.272609, -20.629524) "
                    />
                    <circle
                      stroke="currentColor"
                      strokeWidth={2}
                      cx={21}
                      cy={21}
                      r={20}
                    />
                  </g>
                </svg>
                <span className="tab tab-explore block text-xs">Statistics</span>
              </a>
            </NavLink>



            <NavLink to={'/boost'}>
                <a
                  href="#"
                  className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
                >
                  <i class="fa-solid fa-rocket fa-xl"></i>

                  <span className="tab tab-whishlist block text-xs mt-1">
                    Boost
                  </span>
                </a>
              </NavLink>

            <NavLink to={`/profile/${user?._id}`} >
              <a
                href="#"
                className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
              >
                <svg
                  width={25}
                  height={25}
                  viewBox="0 0 42 42"
                  className="inline-block mb-1"
                >
                  <g
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      d="M14.7118754,20.0876892 L8.03575361,20.0876892 C5.82661462,20.0876892 4.03575361,18.2968282 4.03575361,16.0876892 L4.03575361,12.031922 C4.03575361,8.1480343 6.79157254,4.90780265 10.4544842,4.15995321 C8.87553278,8.5612583 8.1226025,14.3600511 10.9452499,15.5413938 C13.710306,16.6986332 14.5947501,18.3118357 14.7118754,20.0876892 Z M14.2420017,23.8186831 C13.515543,27.1052019 12.7414284,30.2811559 18.0438552,31.7330419 L18.0438552,33.4450645 C18.0438552,35.6542035 16.2529942,37.4450645 14.0438552,37.4450645 L9.90612103,37.4450645 C6.14196811,37.4450645 3.09051926,34.3936157 3.09051926,30.6294627 L3.09051926,27.813861 C3.09051926,25.604722 4.88138026,23.813861 7.09051926,23.813861 L14.0438552,23.813861 C14.1102948,23.813861 14.1763561,23.8154808 14.2420017,23.8186831 Z M20.7553776,32.160536 C23.9336213,32.1190063 23.9061943,29.4103976 33.8698747,31.1666916 C34.7935223,31.3295026 35.9925894,31.0627305 37.3154077,30.4407183 C37.09778,34.8980343 33.4149547,38.4450645 28.9036761,38.4450645 C24.9909035,38.4450645 21.701346,35.7767637 20.7553776,32.160536 Z"
                      fill="currentColor"
                      opacity="0.1"
                    />
                    <g transform="translate(2.000000, 3.000000)">
                      <path
                        d="M8.5,1 C4.35786438,1 1,4.35786438 1,8.5 L1,13 C1,14.6568542 2.34314575,16 4,16 L13,16 C14.6568542,16 16,14.6568542 16,13 L16,4 C16,2.34314575 14.6568542,1 13,1 L8.5,1 Z"
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                      <path
                        d="M4,20 C2.34314575,20 1,21.3431458 1,23 L1,27.5 C1,31.6421356 4.35786438,35 8.5,35 L13,35 C14.6568542,35 16,33.6568542 16,32 L16,23 C16,21.3431458 14.6568542,20 13,20 L4,20 Z"
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                      <path
                        d="M23,1 C21.3431458,1 20,2.34314575 20,4 L20,13 C20,14.6568542 21.3431458,16 23,16 L32,16 C33.6568542,16 35,14.6568542 35,13 L35,8.5 C35,4.35786438 31.6421356,1 27.5,1 L23,1 Z"
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                      <path
                        d="M34.5825451,33.4769886 L38.3146092,33.4322291 C38.8602707,33.4256848 39.3079219,33.8627257 39.3144662,34.4083873 C39.3145136,34.4123369 39.3145372,34.4162868 39.3145372,34.4202367 L39.3145372,34.432158 C39.3145372,34.9797651 38.8740974,35.425519 38.3265296,35.4320861 L34.5944655,35.4768456 C34.048804,35.4833899 33.6011528,35.046349 33.5946085,34.5006874 C33.5945611,34.4967378 33.5945375,34.4927879 33.5945375,34.488838 L33.5945375,34.4769167 C33.5945375,33.9293096 34.0349773,33.4835557 34.5825451,33.4769886 Z"
                        fill="currentColor"
                        transform="translate(36.454537, 34.454537) rotate(-315.000000) translate(-36.454537, -34.454537) "
                      />
                      <circle
                        stroke="currentColor"
                        strokeWidth={2}
                        cx="27.5"
                        cy="27.5"
                        r="7.5"
                      />
                    </g>
                  </g>
                </svg>
                <span className="tab tab-account block text-xs">Profile</span>
              </a>
            </NavLink>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
