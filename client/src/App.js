import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Setting from './pages/User/Setting';
import Profile from './pages/User/Profile';
import Buy from './pages/Buy';
import Chat from './pages/Chat';
import Newsletter from './components/Profile/NewsLetter';
import Sidebar from './components/layout/Sidebar';
import Notification from './components/User/Notifications';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import io from 'socket.io-client';
import PrivateRoutes from './utils/PrivateRoutes';
import UserStatisticsPage from './components/User/userStatstics';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <>
              <div className="flex">
                <Sidebar />
                <div className="flex-grow">
                  <ToastContainer />
                  <PrivateRoutes />
                </div>
              </div>
            </>
          }
        >
          <Route path="/setting" element={<Setting />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/" element={<Home />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/userstatistics" element={<UserStatisticsPage />} />
        </Route>

        <Route
          path="/"
          element={
            <>
              <div className="flex">

                <div className="flex-grow">
                  <ToastContainer />
                  <PrivateRoutes />
                </div>
              </div>
            </>
          }
        >
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
