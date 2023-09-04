import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Setting from './pages/Setting';
import Profile from './pages/profile';
import Buy from './pages/Buy';

import Sidebar from './components/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <Router>
      <Sidebar />
      <ToastContainer />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/setting" exact element={<Setting />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/buy" exact element={<Buy />} />
    
      </Routes>
    </Router>

  )
}


export default App;
