import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommunity } from "../../redux/community/CommunityAcitions";
import { getLoggedInUser } from "../../redux/auth/authActions";
import { NavLink } from "react-router-dom";
import { searchGroups } from "../../redux/community/CommunityAcitions";
import { getGroupsJoined } from "../../redux/community/CommunityAcitions";
import GroupCard from "./GroupCard";

const RecentChat = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state?.community?.communities?.groups);
  const groupsJoined = useSelector((state) => state?.community?.groupsJoined)
  const user = useSelector((state) => state.user.user);
  const [searchText, setSearchText] = useState('')
  const [activeTab, setActiveTab] = useState("ALLGROUPS");
  const [isLoading, setIsLoading] = useState(true);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };


  const filteredGroups = activeTab === 'ALLGROUPS' ? groups : groupsJoined;


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
    if (activeTab === 'ALLGROUPS') {
      dispatch(getCommunity());
    } else {
      dispatch(getGroupsJoined());
    }
    dispatch(getLoggedInUser());
  }, [dispatch, activeTab]);

  const handleUpdateGroup = (groupId) => {
    console.log("Update Group:", groupId);
  };

  const handleDeleteGroup = (groupId) => {
    // Implement your delete group logic here
  };


  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-20 w-20"></div>
        <div>Loading Communities....</div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <div className="pt-2 relative mx-auto mt-2 text-gray-600">
        <input
          className="border-2 border-gray-300 w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
            dispatch(searchGroups(searchText))
          }
          }
          placeholder="Search"
        />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4"
        >
          <svg
            className="text-gray-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style={{ enableBackground: "new 0 0 56.966 56.966" }}
            xmlSpace="preserve"
            width="512px"
            height="512px"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>

      <div className="flex mt-4">
        <div className="flex justify-around gap-4 mb-2 w-full">
          <p
            className={`border border-gray-300 w-full text-center rounded-lg p-2 hover:cursor-pointer ${activeTab === 'ALLGROUPS' ? 'text-black bg-blue-300' : ''}`}
            onClick={() => handleTabClick('ALLGROUPS')}
          >
            All Communities
          </p>
          <p
            className={`border border-gray-300  w-full text-center rounded-lg p-2 hover:cursor-pointer ${activeTab === 'JOINED' ? 'text-black bg-blue-300' : ''}`}
            onClick={() => handleTabClick('JOINED')}
          >
            Joined
          </p>
        </div>
      </div>

      <div className="p-4">


        <h1 className="text-xl font-semibold mb-4">Your Communities</h1>

        {filteredGroups?.map((group) => (

          <GroupCard group={group} />

        ))}

      </div>
    </div>
  );
};

export default RecentChat;
