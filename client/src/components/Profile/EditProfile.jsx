import React, { useEffect, useState } from "react";
import { getLoggedInUser, updateProfile, deleteAccount } from "../../redux/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import EditProfileSkeleton from "../Skeleton/EditProfileSkeleton";
import { useDropzone } from "react-dropzone";
import { updateAvatar } from "../../redux/auth/authActions";

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
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(user?.avatar?.url);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setProfilePhoto(file);
      dispatch(updateAvatar(file));
      dispatch(getLoggedInUser());
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      profilePhoto, // Include the selected profile photo in the form data
    };
    await dispatch(updateProfile(updatedFormData)).then(async () => {
      await dispatch(getLoggedInUser());
    });
  };

  const handleDeleteConfirmation = () => {
    setConfirmDelete(!confirmDelete);
  };

  const handleDeleteAccount = async () => {
    await dispatch(deleteAccount());
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
    <div className="flex flex-col md:flex-row justify-center border border-gray-300 my-10 rounded-lg">
      <div className="w-full md:max-w-screen-xl bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 p-4 md:p-8 border-b md:border-r border-gray-300">
            <div className="text-xl font-semibold text-center md:text-left">{`${user?.username}'s Profile`}</div>

            <div className="mt-4">
              <div
                {...getRootProps()}
                className="w-48 h-48 border rounded-lg mx-auto border-gray-900 transition-transform transform hover:scale-105"
              >
                <input {...getInputProps()} />
                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt="Selected Profile Photo"
                    className="w-48 h-48 rounded-lg"
                  />
                ) : (
                  <p>Drag & drop a new profile photo here or click to select one</p>
                )}
              </div>
              {/* Add a button or link to allow users to remove the current profile photo */}
              <button
                onClick={() => setProfilePhoto(null)}
                className="mt-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm"
              >
                Remove Photo
              </button>
            </div>

            <div className="mt-4 text-gray-600 text-center md:text-left">Your Bio</div>

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
              {confirmDelete ? (
                <>
                  <button
                    type="button"
                    onClick={handleDeleteAccount}
                    className="bg-red-500 text-white px-6 py-2.5 text-sm font-medium uppercase rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  >
                    Confirm Delete
                  </button>
                  <button
                    type="button"
                    onClick={handleDeleteConfirmation}
                    className="bg-gray-300 text-gray-700 px-6 py-2.5 text-sm font-medium uppercase rounded-lg ml-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={handleDeleteConfirmation}
                  className="bg-red-500 text-white px-6 py-2.5 text-sm font-medium uppercase rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  DELETE ACCOUNT
                </button>
              )}
            </div>
          </div>

          <div className="w-full md:w-2/3 p-4 md:p-8">
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
                <div className="pb-2">
                  <label htmlFor="Place" className="font-semibold text-gray-700 block">
                    INSTAGRAM LINK
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
                <div className="pb-2">
                  <label htmlFor="Place" className="font-semibold text-gray-700 block">
                    LinkedIn LINK
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
