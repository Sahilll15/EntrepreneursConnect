import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications, deleteAllNotificatiosn } from "../../redux/notification/notificationActions";
import { NavLink } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import "../css/Notification.css";
import MainLayout from "../layout/MainLayout";


const Notification = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state) => state?.notifications.notifications.notifications
  );
  const isLoading = useSelector(
    (state) => state?.notifications.notificationLoading
  );

  const handleReadAll = async () => {
    await dispatch(deleteAllNotificatiosn());
    await dispatch(getNotifications());
  };


  useEffect(() => {
    dispatch(getNotifications());
  }, []);


  return (
    <MainLayout>
      <div className="p-2">
        <div className="mt-10">
          <div >
            <h2>Notifications </h2>
            <h2 className="text-right">
              <span class="sm:ml-3">
                <button
                  type="button"
                  class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

                  onClick={handleReadAll}
                >
                  <svg
                    class="-ml-0.5 mr-1.5 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Mark All As Read
                </button>

              </span>
            </h2>

          </div>

          <div className="mt-5 ">
            {
              isLoading ?
                <div className=" flex justify-between border border-black p-3 mb-3">
                  <div className="flex">
                    <div className="mr-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full border border-black"></div>
                    </div>
                    <div>
                      <div className="w-32 h-5 bg-gray-300 mt-1"></div>
                    </div>
                  </div>
                </div>
                : null
            }

            {notifications?.length === 0 ? (
              <div>
                <p className="text-center">No notifications</p>
              </div>
            ) : (
              // Display notifications when not loading
              notifications?.map((notification) => (
                <div
                  className="flex justify-between border border-gray-400 rounded-lg p-3 mb-1 notify"
                  key={notification.id}
                >
                  <div className="flex">
                    <div className="mr-3">
                      <NavLink
                        to={`/profile/${notification?.sender?._id}`}
                      >
                        <img
                          src={notification?.sender?.avatar?.url}
                          alt="avatar"
                          className="w-10 h-10 rounded-full border border-gray-600"
                        />
                      </NavLink>
                    </div>
                    <div>
                      <p className="text-l   text-black">
                        {notification.content}
                      </p>
                      <p className="text-gray-500">
                        {formatDistanceToNow(
                          new Date(notification.timestamp),
                          { addSuffix: true }
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </MainLayout >
  );
};

export default Notification;
