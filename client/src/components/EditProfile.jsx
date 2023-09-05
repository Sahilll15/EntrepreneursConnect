import React, { useEffect, useState } from "react";
import { getLoggedInUser, updateProfile } from "../redux/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import EditProfileSkeleton from "./skeletons/EditProfileSkeleton";

const EditProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user);
  const isLoading = useSelector((state) => state.user.loading);

  const initialFormData = {
    username: user?.username || "",
    email: user?.email || "",
    companyName: "",
    place: "",
    bio: user?.bio || "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (!user) {
      dispatch(getLoggedInUser());
    }
  }, [dispatch, user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dispatch the updateProfile action here
    await dispatch(updateProfile(formData));

    // Fetch the updated user data after the profile is updated
    await dispatch(getLoggedInUser());
  };

  if (isLoading) {
    return <EditProfileSkeleton />;
  }

  return (
    <div>
      <div className="h-full mt-9">
        <div className="border-b-2 block md:flex">
          <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
          
            <div className="flex justify-between">
              <span className="text-xl font-semibold block">{`${user?.username}'s Profile`}</span>
            </div>

            <div className="w-full p-8 mx-2 flex justify-center">
              <img
                id="showImage"
                className="max-w-xs w-32 items-center border"
                src={user?.avatar?.url || "https://placeholder.com/200"}
                alt="User Profile"
              />
            </div>

            <span className="text-gray-600">Your Bio</span>

            <div className="my-4">
              <textarea
                id="content"
                name="bio"
                className="w-full p-4 border rounded-lg h-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Tell us About Yourself"
                rows="4"
                required
                value={formData.bio}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div>
              <button
                type="button"
                className="inline-block bg-red-500 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                DELETE ACCOUNT
              </button>
            </div>
          </div>
          <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
            <div className="rounded shadow p-6">
              <form onSubmit={handleSubmit}>
                <div className="pb-6">
                  <label
                    htmlFor="username"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Name
                  </label>
                  <div className="flex">
                    <input
                      id="username"
                      name="username"
                      className="border-1 text-slate-400 rounded-r px-4 py-2 w-full"
                      type="text"
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="pb-4">
                  <label
                    htmlFor="email"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="border-1 text-slate-400 rounded-r px-4 py-2 w-full"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="pb-4">
                  <label
                    htmlFor="Company"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Company Name
                  </label>
                  <input
                    id="Company"
                    name="companyName"
                    className="border-1 text-slate-400 rounded-r px-4 py-2 w-full"
                    type="text"
                    value={formData.companyName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="pb-4">
                  <label
                    htmlFor="Place"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Place
                  </label>
                  <input
                    id="Place"
                    name="place"
                    className="border-1 text-slate-400 rounded-r px-4 py-2 w-full"
                    type="text"
                    value={formData.place}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="inline-block bg-green-500 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    SAVE CHANGES
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
