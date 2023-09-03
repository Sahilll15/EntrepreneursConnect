import React, { useState } from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faSmile, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons

export default function PostFormCard() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null); 
  const [imageAddmodel,setImageAddmodel]=useState(false);

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
    const selectedImage = e.target.files[0]; // Get the selected image file

    // Set the selected image in the state
    setImage(selectedImage);
  };

  return (
    <Card noPadding={false}>
      <form onSubmit={handleSubmit}>
        <div className="my-4">
          <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
            Add Post
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            required
          ></textarea>
        </div>

       {imageAddmodel ?(
 <div className="mb-4">
 <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
   Upload Image
 </label>
 <input
   type="file"
   id="image"
   name="image"
   accept="image/*"
   onChange={handleImageUpload} // Handle image upload when a file is selected
   className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
 />
</div>
       )  :null}
       

        <div className="mb-4 flex justify-between">
          
          <div className="flex items-center cursor-pointer" onClick={() => setImageAddmodel(!imageAddmodel)}>
            <FontAwesomeIcon
              icon={faImage}
              className="text-green-500 text-2xl"
            />
            <span className="text-2xl font-sans ml-2">Media</span>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline border rounded-lg"
          >
            Add Post
          </button>
        </div>
      </form>
    </Card>
  );
}
