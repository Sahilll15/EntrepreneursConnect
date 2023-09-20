import React, { useEffect, useState } from "react";

import { NavLink } from 'react-router-dom'
import "../css/Sidebar.css";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser, getSearchUser } from "../../redux/auth/authActions";
import { useSelector, useDispatch } from "react-redux";
import { getNotifications } from "../../redux/notification/notificationActions";
import { getGroupsJoined } from "../../redux/community/CommunityAcitions";
import { getCommunityDiscussion } from "../../redux/community/CommunityAcitions";
import { getCommunityById } from "../../redux/community/CommunityAcitions";
export const SideBar = () => {

  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchUsername, setSearchUsername] = useState({
    username: ''
  })

  let searchedUser = useSelector((state) => state?.user?.searchUser)

  const notifications = useSelector((state) => state?.notifications.notifications.notifications);
  const groupsJoined = useSelector((state) => state?.community?.groupsJoined)
  const hasNotifications = notifications?.length > 0;

  const logout = () => {
    localStorage.removeItem('authtoken');
    navigate('/login');
  }


  const handleSearchBlur = () => {
    if (searchUsername.username === "") {
      setSearchUsername({ username: '' });
    }
  }

  useEffect(() => {
    if (searchUsername.username) {
      dispatch(getSearchUser(searchUsername.username));
    }
    dispatch(getLoggedInUser());
    dispatch(getNotifications());
    dispatch(getGroupsJoined());
  }, [dispatch, searchUsername.username])





  return (
    <div >
      <div className="sideParent">
        <span
          className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
          onclick="openSidebar()"
        >
          <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md" />
        </span>
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
              <img
                alt={user?.badges}
                src={user?.avatar?.url}
                className={`w-[40px] h-[40px] rounded-full border  ${user?.badges[0] === "Expert"
                  ? "border-red-600"
                  : "border-none"
                  } `}

              />
              <h1 className="font-bold text-gray-200 text-[15px] ml-3">
                <div className="flex-col">
                  <p> {user?.username}</p>
                </div>
              </h1>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]" />
          </div>
          <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
            <i className="bi bi-search text-sm" />
            <input
              type="text"
              placeholder="Find people"
              name="username"
              className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
              onChange={(e) => setSearchUsername({ ...searchUsername, [e.target.name]: e.target.value })}
              onBlur={handleSearchBlur}
            />
          </div>
          <div className="my-2 bg-gray-600 h-[1px]" />
          {searchedUser?.map((user) => (
            <NavLink to={`/profile/${user?._id}`} >
              <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <img

                  src={user?.avatar?.url}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full border border-blue-400"
                />
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  {user?.username}
                </span>
              </div>
            </NavLink>
          ))}

          <NavLink to={'/'}>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-house-door-fill" />
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Home
              </span>
            </div>

          </NavLink>

          <NavLink to={'/chat'} >
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i class="bi bi-people"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                My Group
              </span>
            </div>
          </NavLink>

          <NavLink to={'/notification'}>
            <div className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-${hasNotifications ? 'white' : 'blue-600'} text-${hasNotifications ? 'blue-500' : 'white'}`}>
              <i class="bi bi-bell"></i>
              {notifications?.length}
              <span className={`text-[15px] ml-4 font-bold ${hasNotifications ? 'text-blue-600' : 'text-gray-200'}`}>
                Notification
              </span>
            </div>
          </NavLink>

          <NavLink to={`/profile/${user?._id}`} >
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i class="bi bi-person-circle"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                My Profile
              </span>
            </div>
          </NavLink>
          <NavLink to={'/'} >
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i class="bi bi-plus-circle"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Post
              </span>
            </div>
          </NavLink>
          <NavLink to={'/userstatistics'} >
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i class="bi bi-bar-chart"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Statistics
              </span>
            </div>
          </NavLink>
          <NavLink to={'/setting'} >
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i class="bi bi-gear"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Setting
              </span>
            </div>
          </NavLink>
          <div className="my-4 bg-gray-600 h-[1px]" />
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            onclick="dropdown()"
          >
            <i class="bi bi-person-square"></i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Groups
              </span>
              <span className="text-sm rotate-180" id="arrow">
                <i className="bi bi-chevron-down" />
              </span>
            </div>
          </div>
          <div
            className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
            id="submenu"
          >
            {
              groupsJoined?.map((group) => (
                <NavLink to={`/groupDiscussion/${group._id}`}
                  onClick={() => {
                    dispatch(getCommunityById(group._id));
                    dispatch(getCommunityDiscussion(group._id));
                  }}
                >
                  <div
                    key={group._id}
                    className=" rounded-lg shadow-md mb-4"
                  >
                    <h2 className="text-xl  text-white">{group.name}</h2>
                    <p className="text-gray-600 mt-1">{group.groupAdmin}</p>
                  </div>
                </NavLink>
              ))
            }
          </div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={logout}>
            <i className="bi bi-box-arrow-in-right" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Logout
            </span>
          </div>
        </div>
      </div>

      <div className="MobileBtm">
        {/* component */}
        <div className="w-full ">
          {/* <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile*/}
          <section
            id="bottom-navigation"
            className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
          >
            <div id="tabs" className="flex justify-between">
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
              </a>
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
                <span className="tab tab-explore block text-xs">Post</span>
              </a>
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
                <span className="tab tab-whishlist block text-xs">
                  Profile
                </span>
              </a>
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
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};


export default SideBar;
