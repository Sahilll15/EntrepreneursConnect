import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Setting from './pages/User/Setting';
import Landing from './pages/Land';
import Profile from './pages/User/Profile';
import Buy from './pages/Buy';
import Chat from './pages/Chat';
import Newsletter from './components/Profile/NewsLetter';
import Sidebar from './components/layout/Sidebar';
import Notification from './components/User/Notifications';
import Lend from './pages/Lend'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import io from 'socket.io-client';
import PrivateRoutes from './utils/PrivateRoutes';
import UserStatisticsPage from './components/User/userStatstics';
import BackToTopButton from './utils/BackToTop';
import GroupDescussion from './pages/GroupDescussion';
import PageNotFound from './pages/PageNotFound';
import BoostPost from './pages/BoostPost';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedInUser } from './redux/auth/authActions';


function App() {

  const initialLoading = useSelector((state) => state?.user?.initialLoading);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getLoggedInUser());
  }, [dispatch]);



  return (
    <>

      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/land" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/"
            element={
              <>
                <div className="flex">
                  {
                    initialLoading ?
                      <Sidebar /> : null
                  }

                  <div className="flex-grow">

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
            <Route path="/lend" element={<Lend />} />
            <Route path="/userstatistics" element={<UserStatisticsPage />} />
            <Route path="/groupDiscussion/:id" element={<GroupDescussion />} />
            <Route path="/boost" element={<BoostPost />} />

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
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
        <BackToTopButton />
      </Router>
    </>
  );
}

export default App;
