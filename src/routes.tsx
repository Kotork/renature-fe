import React,{ useEffect } from "react";
import { Routes,Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//LAYOUTS
import MainLayout from './layouts/Main';

// PAGES
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import Login from './pages/Login';

const Router: React.FC = () => {
  const navigate = useNavigate();

  const user = {
    token: "1"
  }

  useEffect(() => {
    user.token === "" && navigate('/login')
  }, [])

    return(
        <Routes>
          <Route path="/*" element={<MainLayout name="Main Layout" />}>
            <Route path='' element={<HomePage name="Home Page" />} />
          </Route>
          <Route path='/about' element={<AboutPage name="About Page" />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default Router