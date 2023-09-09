import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Setting from './pages/Setting';
import Profile from './pages/profile';
import Buy from './pages/Buy';
import Chat from './pages/Chat';
import Sidebar from './components/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getLoggedInUser } from './redux/auth/authActions'
import { useDispatch, useSelector } from 'react-redux'
import PrivateRoutes from './utils/PrivateRoutes';
import { fetchPosts } from './redux/posts/postActions';

function App() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.posts.posts.products);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow">
          <ToastContainer />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/setting" element={<Setting />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/" element={<Home />} />
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