import React, { useState } from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons

export default function PostFormCard() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imageAddmodel, setImageAddmodel] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    // Fetch or submit the form data to your server
    fetch('/api/your-endpoint', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log('Response from server:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    // Reset the form fields
    setContent('');
    setImage(null);
  };

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <Card noPadding={false}>
      <form onSubmit={handleSubmit} className="w-full ">
        <div className="my-4">
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-4 border rounded-lg h-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="What's on your mind?"
            rows="4"
            required
          ></textarea>
        </div>

        {imageAddmodel ? (
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
              Add a Photo
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        ) : null}

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
            Post
          </button>
        </div>
      </form>
    </Card>
  );
}
