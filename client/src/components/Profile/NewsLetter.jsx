import React, { useState } from 'react';

const Newsletter = () => {
  const [subscriptionStatus, setSubscriptionStatus] = useState(1);

  const handleSubscribe = () => {
    setSubscriptionStatus(1); // Set subscription status to subscribe
  };

  const handleUnsubscribe = () => {
    setSubscriptionStatus(0); // Set subscription status to unsubscribe
  };

  return (
    <div>
      {subscriptionStatus === 0 ? (
        <div className="flex items-center justify-center w-full h-30 mt-5">
          {/* Subscribe content */}
          <div className="bg-white rounded-2xl border shadow-xl p-10 w-full border-gray-300">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="font-bold text-2xl text-gray-700 w-full text-center">Email Subscription</h1>
              <p className="text-sm text-gray-500 text-center w-full">Don't miss the latest trends going on.</p>
              <input type="text" placeholder="Email" className="border-2 rounded-lg w-full h-12 px-4" />
              <button
                className="bg-blue-400 text-white rounded-md font-semibold px-4 py-3 w-full"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-30 mt-5 ">
          {/* Unsubscribe content */}
          <div className="bg-white rounded-2xl border shadow-xl p-10 w-full border-gray-300">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="font-bold text-2xl text-gray-700 w-full text-center">Email Unsubscribe</h1>
              <p className="text-sm text-gray-500 text-center w-full">Sorry to see you go, give us one more chance?</p>
              <button
                className="bg-red-700 text-white rounded-md font-semibold px-4 py-3 w-full"
                onClick={handleUnsubscribe}
              >
                Unsubscribe
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
