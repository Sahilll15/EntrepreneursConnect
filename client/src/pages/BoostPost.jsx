import React, { useEffect, useState } from "react";
import BoostPageLayout from "../components/layout/BoostPageLayout";
import {
  createSub,
  getSubscriptionById,
  cancleSubscription,
} from "../redux/subscription/subActions";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser } from "../redux/auth/authActions";
import BoostP from "../components/Boost/BoostP";
import { fetchpostByUserID } from "../redux/posts/postActions";
import axios from 'axios';
import { toast } from 'react-toastify';

const BoostPage = () => {


  

  const user = useSelector((state) => state.user.user);
  const postByUserID = useSelector((state) => state?.posts?.postsByUser?.products);

  const formatDateTime = (isoDateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(isoDateString).toLocaleDateString(undefined, options);
  };


  function convertTTLToNormalDate(ttlValue) {
    const currentDateTime = new Date();
    const expirationDateTime = new Date(currentDateTime.getTime() + (ttlValue * 1000));

    return expirationDateTime.toISOString();
  }

  const dispatch = useDispatch();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showDeletion, setShowDeletion] = useState(false);
  const existingSubscription = useSelector(
    (state) => state?.subscription.subByUser
  );

  const handleChoosePlan = (plan) => {
    setSelectedPlan(plan);
    setShowConfirmationModal(true);
  };

  const handleConfirm = async () => {
    if (selectedPlan) {
      await dispatch(createSub(selectedPlan));
      await dispatch(getSubscriptionById());
      setShowConfirmationModal(false);
    }
  };

  const handleDeleteConfirm = async (id) => {
    await dispatch(cancleSubscription(id));
    await dispatch(getSubscriptionById());
    await dispatch(getLoggedInUser())
    setShowDeletion(false);
  };

  const handleDelete = async () => {
    setShowDeletion(true);
  };

 

  useEffect(() => {
    dispatch(getSubscriptionById());
    dispatch(fetchpostByUserID(user._id))
    console.log(postByUserID)

  }, [dispatch]);

  return (
    <BoostPageLayout>
      <div className="bg-white mt-1">
        <section>
          <div className="container px-6 py-8 mx-auto">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold">
                  Boost Your Reach Effectively
                </h2>
                <p className="mt-4">
                  Choose the perfect plan to enhance your post's visibility.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              <div
                className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 border-2 ml-1"

              >
                <p className="text-lg font-medium">Basic Boost</p>
                <h4 className="mt-2 text-4xl font-semibold">200 Points</h4>
                <p className="mt-4">
                  Perfect for boosting individual posts and gaining more
                  exposure.
                </p>
                <div className="mt-8 space-y-4">
                  <FeatureItem text="Post Suggestions on the main page" />
                </div>
                <button
                  onClick={() => handleChoosePlan("basic")}
                  className="w-full px-4 py-2 mt-8 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform  bg-blue-500
                     rounded-md  focus:outline-none focus:bg-blue-600"

                >
                  Choose Plan
                </button>

              </div>


              <div
                className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 border-2 ml-1"

              >
                <p className="text-lg font-medium">Pro Boost</p>
                <h4 className="mt-2 text-4xl font-semibold">400 Points</h4>
                <p className="mt-4">
                  Get even more visibility with enhanced promotion features.
                </p>
                <div className="mt-8 space-y-4">
                  <FeatureItem text="Post Suggestions on the main page" />
                  <FeatureItem text="One Promotional Mail" />
                </div>
                <button
                  onClick={() => handleChoosePlan("pro")}
                  className="w-full px-4 py-2 mt-8 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform  bg-blue-500
                     rounded-md  focus:outline-none focus:bg-blue-600"

                >
                  Choose Plan
                </button>

              </div>

              <div
                className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 border-2 ml-1"

              >
                <p className="text-lg font-medium">jhfhk Boost</p>
                <h4 className="mt-2 text-4xl font-semibold">600 Points</h4>
                <p className="mt-4">
                  Maximize your reach with top-tier promotion options.
                </p>
                <div className="mt-8 space-y-4">
                  <FeatureItem text="Post Suggestions on the main page" />
                  <FeatureItem text="Multiple Promotional Posts on the main page" />
                  <FeatureItem text="3 Email Promotions" />
                  <FeatureItem text="Featured Profile" />
                  <FeatureItem text="Blue Tick Verification" />
                </div>
                <button
                  onClick={() => handleChoosePlan("premium")}
                  className="w-full px-4 py-2 mt-8 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform  bg-blue-500
                     rounded-md  focus:outline-none focus:bg-blue-600"

                >
                  Choose Plan
                </button>

              </div>
            </div>
          </div>
        </section>
      </div>
      <div></div>
      <h2 className="text-3xl font-semibold">Your Existing Subscription</h2>
      {!existingSubscription && (
        <div className="mt-2 border border-gray-700 w-1/2 p-4 rounded-lg shadow-xl">
          <p>You have no existing subscription, Choose a plan above</p>
        </div>
      )}
      {existingSubscription && (
        <div key={existingSubscription?._id}>

          <div className="mt-2 rounded-lg">
            <div className="border border-gray-700 w-1/2 p-4 rounded-lg shadow-lg bg-white">
              <p className="text-lg font-semibold">Plan: {existingSubscription?.plan}</p>
              <p className="text-sm">Created At: {formatDateTime(existingSubscription?.createdAt)}</p>
              <p className="text-sm">Status: {existingSubscription?.status}</p>
              <p className="text-sm">Expires At: {formatDateTime(convertTTLToNormalDate(existingSubscription?.ttl))}</p>

              <button
                onClick={handleDelete}
                className="px-4 py-2 mt-4 bg-red-500 hover:bg-red-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Cancel Subscription
              </button>
            </div>
          </div>
        </div>

      )
      }

      {
        showDeletion && (
          <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <div className="bg-white p-8 border border-black rounded-lg shadow-md">
              <p className="text-lg font-semibold">
                Cancle your plan: {existingSubscription?.plan}
              </p>
              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 mr-2 text-gray-600"
                  onClick={() => setShowDeletion(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
                  onClick={() => {
                    handleDeleteConfirm(existingSubscription._id)
                  }}
                >
                  Confirm
                </button>
              </div>

            </div>
          </div>
        )}

      {showConfirmationModal? (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-white p-8 border border-black rounded-lg shadow-md">
            <p className="text-lg font-semibold">
              Confirm your plan :  {selectedPlan}
            </p>
            <BoostP products={postByUserID}/>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 mr-2 text-gray-600"
                onClick={() => setShowConfirmationModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      ):<></>}
    </BoostPageLayout>
  );
};

// A reusable component for feature items
const FeatureItem = ({ text }) => (
  <div className="flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-blue-500"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="mx-4">{text}</span>
  </div>
);

export default BoostPage;
