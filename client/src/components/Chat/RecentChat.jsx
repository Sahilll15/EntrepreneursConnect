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

      <div className="pt-2 relative mx-auto mt-2 text-gray-600">
        <input
          className="border-2 border-gray-300 w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
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

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-4">
          Featuerd/Boosted groups (those who pade money){" "}
        </h3>

        <h1 className="text-xl font-semibold mb-4">your groups </h1>
        {groups?.map((group) => (
          <NavLink to={`/groupDiscussion/${group._id}`}>
          <div
            key={group._id}
            className="bg-white rounded-lg shadow-md mb-4 p-4 hover:shadow-lg hover:border-4 hover:bg-gray-100 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">
            <i class="fa-solid fa-user-group"></i> {group.name}
              <p className="text-right">
                <i class="fa-regular fa-star" />
                <i class="fa-solid fa-star" style={{ color: "#d8c70e" }} />
              </p>
            </h2>
            <p className="text-gray-600 mt-1">{group.groupAdmin}</p>
          </div>
        </NavLink>
        ))}
      </div>
      <h3 className="text-xl font-semibold mb-4">TOP 10 groups </h3>
    </div>
  );
};

export default RecentChat;
