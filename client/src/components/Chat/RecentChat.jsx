import React, { useEffect } from "react";
import { getCommunity } from "../../redux/community/CommunityAcitions"; // Assuming you have a deleteGroup action
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser } from "../../redux/auth/authActions";

const RecentChat = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.community.communities.groups);
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    dispatch(getCommunity());
  }, [dispatch]);

  const handleUpdateGroup = (groupId) => {
    console.log("Update Group:", groupId);

  };

  const handleDeleteGroup = (groupId) => {

  };
  useEffect(() => {

    dispatch(getLoggedInUser())
    console.log(user)
  }, [])


  return (
    <div className="h-screen w-full mr-9">
      <div className="max-w-screen mx-auto flex space-x-4">
        {/* Recent Chats Section (Left Side) */}
        <div className="w-1/3 h-full bg-white shadow-md rounded-md p-4 mt-4">
          <h1 className="text-xl font-semibold mb-9">Recent Chats</h1>
          <div className="space-y-4">
            {/* Chat Messages (Replace with your data) */}
            {groups?.map((group) => (
              <div
                key={group._id}
                className="border p-3 rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={group.userAvatar}
                    alt={group.groupname}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-semibold">{group.groupname}</span>
                </div>
                <p className="text-gray-700 mt-2">{group.groupAdmin}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Conversation Section (Right Side) */}
        <div className="w-screen bg-white shadow-md rounded-md p-4 mt-4">
          <h1 className="text-xl font-semibold mb-4">{user?.username}</h1>
          <div className="space-y-4">
            {/* Conversation Messages (Replace with your data) */}
            {groups?.map((group) => (
              <div
                key={group._id}
                className="border p-3 rounded-lg shadow-md relative"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={group.userAvatar}
                    alt={group.groupname}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-semibold">{group.groupname}</span>
                </div>
                <p className="text-gray-700 mt-2">{group.groupAdmin}</p>
                <div className="absolute top-0 right-0 p-2 cursor-pointer">
                  <div className="relative group">
                    <div
                      onClick={() => handleDeleteGroup(group._id)}
                      className="w-6 h-6 text-gray-500 group-hover:text-gray-700"
                    >
                      {/* Delete icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentChat;
