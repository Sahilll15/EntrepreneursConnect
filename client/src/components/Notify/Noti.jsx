import React, { useState } from 'react';
import './Noti.css'
import Notif from "../Notify/MobileNoti"

const Noti = () => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <div className="bg-gray-100 flex items-center justify-between hidden-on-large-screens">
  <div>
    <img src="https://entrepreneursconnect.vercel.app/static/media/logo-black.f4e3c1070aa8d5bfed53.png" className="w-1/2 sm:w-1/3 lg:w-1/3 xl:w-1/3  " alt="" />
  </div>
  
  <div className="text-right text-2xl p-2 relative">
    <i
      className="fa-regular fa-bell cursor-pointer"
      onClick={() => setShowModal(true)}
    ></i>
    {showModal && (
      <div className="modal fixed inset-0 z-50 flex p-2  items-center justify-center">
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="bg-white p-2 rounded-lg shadow-lg z-10 w-11/12 " style={{ maxHeight: '800px', overflowY: 'auto', top: '80%' }}>
         <h2 className="text-xl  text-center mb-2">Notification</h2>
          <Notif/>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-base text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    )}
  </div>
</div>



      );
    }

export default Noti;
