import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Setting from './pages/Setting';
import Profile from './pages/Profile';
import Buy from './pages/Buy';
import Chat from './pages/Chat';
import Sidebar from './components/Sidebar';
import Notification from './components/Notifications';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import io from 'socket.io-client'
import PrivateRoutes from './utils/PrivateRoutes';

// const socket = io.connect('http://localhost:4000')
function App() {



  return (
    <Router>
      <div className="flex">

        <Sidebar />

        <div className="flex-grow">
          <ToastContainer />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/setting" element={<Setting />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/" element={<Home />} />
              <Route path="/Notification" element={<Notification />} />
            </Route>


          </Routes>
        </div>
      </div>
      <Routes >

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


      </Routes>


    </Router >
  );
}

export default App;