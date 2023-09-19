import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommunity } from "../../redux/community/CommunityAcitions";
import { getLoggedInUser } from "../../redux/auth/authActions";
import { NavLink } from "react-router-dom";

const RecentChat = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state?.community?.communities?.groups);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getCommunity());
    dispatch(getLoggedInUser());
  }, [dispatch]);

  const handleUpdateGroup = (groupId) => {
    console.log("Update Group:", groupId);
  };

  const handleDeleteGroup = (groupId) => {
    // Implement your delete group logic here
  };

  return (
    <div className="h-screen bg-gray-100">
  
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">{user?.username}</h1>
        {groups?.map((group) => (
          <NavLink to={`/groupDiscussion/${group._id}`}>
          <div
            key={group._id}
            className="bg-white rounded-lg shadow-md mb-4 p-4"
          >
            <h2 className="text-xl font-semibold text-gray-800">{group.name}</h2>
            <p className="text-gray-600 mt-1">{group.groupAdmin}</p>
            {/* <div className="flex flex-wrap mt-2">
            members: 
              {group?.members?.map((member, index) => (
                <div
                  key={index}
                  className=" text-black px-2 py-1 rounded-full text-xs mr-2 mb-2"
                >
                {member}
                </div>
              ))}
            </div>
           */}
          
          </div>
          </NavLink>
        ))}
        
      </div>
      
    </div>
  );
};

export default RecentChat;
