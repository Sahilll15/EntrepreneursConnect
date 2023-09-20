import React from 'react';
import { joinGroup, getGroupsJoined, getCommunity } from '../../redux/community/CommunityAcitions';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const GroupCard = ({ group }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state?.user?.user);

    const handleJoinLeaveGroup = async (groupId, isMember) => {
        if (isMember) {
            // dispatch(leaveGroup(groupId));
        } else {
            await dispatch(joinGroup(groupId));
        }

        await dispatch(getGroupsJoined());
        await dispatch(getCommunity());
    };

    return (
        <div className="bg-white rounded-lg shadow-md mb-4 p-4 hover:shadow-lg hover:border-4 hover:bg-gray-100 transition duration-300">
            {/* Move the button to the top right corner */}
            <div className="flex justify-between items-center">
                <NavLink to={`/groupDiscussion/${group._id}`}>
                    <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-500">
                        <i className="fa-solid fa-user-group"></i> {group.name}
                    </h2>
                </NavLink>
                <button
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ${group?.joinedMembers[0]?.includes(user?._id) ? 'bg-red-500' : 'bg-blue-500'
                        }`}
                    onClick={() => handleJoinLeaveGroup(group._id, group?.joinedMembers[0]?.includes(user?._id))}
                >
                    {group?.joinedMembers[0]?.includes(user?._id) ? 'Leave' : 'Join'}
                </button>
            </div>
            <p className="text-gray-600 mt-1">{group.groupAdmin}</p>
        </div>
    );
};

export default GroupCard;
