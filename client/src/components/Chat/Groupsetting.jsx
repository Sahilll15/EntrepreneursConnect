
import React, { useState } from 'react';
import { updateCommunity, getCommunityById } from '../../redux/community/CommunityAcitions';
import { useDispatch } from 'react-redux';

const GroupSetting = ({ group,setModalOpen }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    groupName: group?.groupname,
    description: group?.description,
    groupIcon: null,
  });


  const { groupName, description, groupIcon } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleIconChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      groupIcon: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const groupId = group._id
    
    await dispatch(updateCommunity({ groupId, formData }));
    await dispatch(getCommunityById(groupId));
    setModalOpen(false);

  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="inputs w-full max-w-2xl p-6 mx-auto">
          <h2 className="text-xl text-gray-900">GROUP SETTING</h2>
          <form className="mt-4 border-t border-gray-400 pt-4" onSubmit={handleSubmit}>
            <div className="w-full md:w-full px-3 mb-6">
              <div className="w-full md:w-full px-3 mb-6">
                <div className="flex justify-center">
                  <img
                    src={group.avatar}
                    alt="Group Icon"
                    className="w-20 h-20 rounded-full border"
                  />
                </div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Group Icon</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleIconChange}
                />
              </div>
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Group name</label>
              <input
                className="bg-gray-100 rounded-md  leading-normal resize-none w-full h-10 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                type="text"
                name="groupName"
                value={groupName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">description</label>
              <textarea
                className="bg-gray-100 rounded-md  leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="description"
                value={description}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
                type="submit"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GroupSetting;
