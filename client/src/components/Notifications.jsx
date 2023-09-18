import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotifications } from '../redux/notification/notificationActions';
import { NavLink } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import './css/Notification.css'

const Notification = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state?.notifications.notifications.notifications);
  const isLoading = useSelector((state) => state?.notifications.notificationLoading);

  useEffect(() => {
    dispatch(getNotifications());
  }, []);

  return (
    <div >
      <div className=" flex justify-center">
        <div className="w-full md:w-2/3 lg:w-2/4">
          <div className="mt-10">
            <h2>Notifications</h2>
            <div className="mt-5 ">
              {isLoading ? (
                // Display a loading skeleton while loading
                <div className="animate-pulse flex justify-between border border-black p-3 mb-3">
                  <div className="flex">
                    <div className="mr-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full border border-black"></div>
                    </div>
                    <div>
                      <div className="w-32 h-5 bg-gray-300 mt-1"></div>
                    </div>
                  </div>
                </div>
              ) : (
                // Display notifications when not loading
                notifications?.map((notification) => (
                  <div className="flex justify-between border border-gray-400 rounded-lg p-3 mb-3 notify" key={notification.id}>
                    <div className="flex">
                      <div className="mr-3">
                        <NavLink
                          to={`/profile/${notification?.sender?.user?._id}`}
                        >
                          <img
                            src={notification?.sender?.user?.avatar?.url}
                            alt="avatar"
                            className="w-10 h-10 rounded-full border border-gray-600"
                          />
                        </NavLink>
                      </div>
                      <div>
                        <p className='text-2xl   text-black'>{notification.content}</p>
                        <p className='text-gray-500'>{formatDistanceToNow(new Date(notification.timestamp), { addSuffix: true })}</p>
                      </div>
                    </div>
                  
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
