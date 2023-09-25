import React from 'react'
import { NavLink } from 'react-router-dom'

const TopUserCard = ({ user }) => {
    return (
        <div>
            <li
                key={user.id}
                className="flex justify-between items-center mb-4 border border-gray-200 rounded-lg p-3 hover:bg-gray-100"
            >
                <NavLink to={`/profile/${user._id}`} className="flex items-center space-x-4">
                    <img
                        src={user.avatar.url}
                        alt={`${user.name}'s avatar`}
                        className="w-12 h-12 rounded-full border"
                    />
                    <div>
                        <p className="text-sm font-semibold">{user.username}</p>
                        <p className="text-sm text-gray-600">Points: {user.points}</p>
                    </div>
                </NavLink>
            </li>
        </div>
    )
}

export default TopUserCard