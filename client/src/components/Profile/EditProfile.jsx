import React, { useEffect, useState } from "react";
import { getLoggedInUser, updateProfile } from "../../redux/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import EditProfileSkeleton from "../Skeleton/EditProfileSkeleton";

const EditProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const isLoading = useSelector((state) => state.user.loading);

  const initialFormData = {
    username: user?.username || "",
    email: user?.email || "",
    companyName: "",
    place: "",
    bio: user?.bio || "",
  };

  const [formData, setFormData] = useState(initialFormData);


  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateProfile(formData)).then(async ()=>{
   await  dispatch(getLoggedInUser())
    })

  };

  useEffect(() => {
    const fetchUser = async () => {
      if (!user) {
        await dispatch(getLoggedInUser());
      }
    };
  
    fetchUser();
  }, [dispatch, user]);

  if (isLoading) {
    return <EditProfileSkeleton />;
  }


  return (
    <div className="flex justify-center border border-gray-300 my-10 rounded-lg">
  <div className="w-full max-w-screen-xl bg-white rounded-lg overflow-hidden shadow-lg">
    <div className="flex">
      <div className="w-1/3 p-8 border-r border-gray-300">
        <div className="text-xl font-semibold">{`${user?.username}'s Profile`}</div>

        <div className="mt-4">
          <img
            id="showImage"
            className="w-48 h-48 border rounded-lg mx-auto border-gray-900 transition-transform transform hover:scale-105"
            src={user?.avatar?.url || "https://placeholder.com/200"}
            alt="User Profile"
          />
        </div>

        <div className="mt-4 text-gray-600">Your Bio</div>

        <div className="mt-2">
          <textarea
            id="content"
            name="bio"
            className="w-full p-4 border rounded-lg h-32 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            placeholder="Tell us About Yourself"
            rows="4"
            required
            value={formData.bio}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="bg-red-500 text-white px-6 py-2.5 text-sm font-medium uppercase rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            DELETE ACCOUNT
          </button>
        </div>
      </div>

      <div className="w-2/3 p-8 ">
        <div className="rounded shadow p-6 border border-gray-900">
          <form onSubmit={handleSubmit}>
            <div className="pb-4">
              <label htmlFor="username" className="font-semibold text-gray-700 block">
                Name
              </label>
              <input
                id="username"
                name="username"
                className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                type="text"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>

            <div className="pb-4">
              <label htmlFor="email" className="font-semibold text-gray-700 block">
                Email
              </label>
              <input
                id="email"
                name="email"
                className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="pb-4">
              <label htmlFor="Company" className="font-semibold text-gray-700 block">
                Company Name
              </label>
              <input
                id="Company"
                name="companyName"
                className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                type="text"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </div>

            <div className="pb-4">
              <label htmlFor="Place" className="font-semibold text-gray-700 block">
                Place
              </label>
              <input
                id="Place"
                name="place"
                className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                type="text"
                value={formData.place}
                onChange={handleInputChange}
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2.5 text-sm font-medium uppercase rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Update Profile
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
