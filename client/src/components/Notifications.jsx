import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotifications } from '../redux/notification/notificationActions';

const Notification = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state?.notifications.notifications.notifications);

  useEffect(() => {
    dispatch(getNotifications());
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full md:w-2/3 lg:w-2/4">
          <div className="mt-10">
            <h2>Notifications</h2>
            <div className="mt-5">
              {notifications?.map((notification) => (
                <div className="flex justify-between" key={notification.id}>
                  <div className="flex">
                    <div className="mr-3">
                      <img
                        src={notification?.sender?.user?.avatar?.url}
                        alt="avatar"
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                 
                    <div>
                
                      <p>{notification.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
