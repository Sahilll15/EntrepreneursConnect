import React, { useEffect, useState } from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { addPost, fetchPosts } from '../../redux/posts/postActions';
import { useSelector, useDispatch } from 'react-redux';
import { getLeaderBoard, getLoggedInUser } from '../../redux/auth/authActions';

export default function PostFormCard() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null); // Store the image in state
  const dispatch = useDispatch();
  const [imageAddmodel, setImageAddmodel] = useState(false);
  const postLoading = useSelector((state) => state.posts.postLoading);
  const user = useSelector((state) => state.user.user);



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content) {
      return;
    }

    try {
      await dispatch(addPost({ content, media: image }))
      await dispatch(fetchPosts());
      await dispatch(getLoggedInUser());
      await dispatch(getLeaderBoard());
      setContent('');
      setImage(null);
    } catch (error) {

      console.error('Error adding post:', error);
    }
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleMediaUpload = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  useEffect(() => {
    if (!user) {
      dispatch(getLoggedInUser());
    }
  }, [dispatch, user])

  return (
    <Card noPadding={false}>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="my-4">
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={handleChange}
            className="w-full p-4 border rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="What's on your mind?"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Image upload input */}
        {imageAddmodel && (
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
              Add a Photo
            </label>
            <input
              type="file"
              id="media"
              name="media"
              accept="image/*, video/*" // Updated accept attribute
              onChange={handleMediaUpload}
              className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        )}

        {/* Toggle image upload */}
        <div className="mb-4 flex justify-between items-center">
          <div className="flex items-center cursor-pointer border-2 border-slate-200" onClick={() => setImageAddmodel(!imageAddmodel)}>
            <FontAwesomeIcon icon={faImage} className="text-gray-500 text-2xl" />
            <span className="text-gray-700 text-lg ml-2">Photo/Video  &nbsp;</span>
          </div>
        </div>


        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
          >
            {postLoading ? 'Sharing...' : 'Share'}
          </button>
        </div>
      </form>
    </Card>
  );
}
