

import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';

const PrivateRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const authToken = localStorage.getItem('jwt_secret')

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/auth/loggedinuser/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
          },
        });
        console.log(response.status)

        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

 
    checkAuth();
  }, []);

  return (<>
  {isAuthenticated ? <Outlet /> : <Navigate to="/login" />}
  </>
   
    )
};

export default PrivateRoutes;