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
import { getLoggedInUser } from './redux/auth/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'rsuite';

function App() {
  const dispatch = useDispatch();
  const initialLoading = useSelector((state) => state?.user?.initialLoading)


  useEffect(() => {
    dispatch(getLoggedInUser());
  }, [])

  if (!initialLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-20 w-20"></div>
        <div>Loading....</div>
      </div>
    )
  }

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
