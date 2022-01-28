import React,{ useEffect } from "react";
import { Routes,Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//LAYOUTS
import MainLayout from './layouts/Main';
import ProjectLayout from './layouts/Project'

// PAGES
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import Login from './pages/Login';
import ProjectPage from "./pages/Project"
import ProjectLocationPage from "./pages/Project"

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

        <Route path="/project/*" element={<ProjectLayout name="Project Layout" />}>
          <Route path='' element={<ProjectPage name="Project Page" />} />
          <Route path='location' element={<ProjectLocationPage name="Location" />} />
          <Route path='leaf' element={<ProjectPage name="Leaf" />} />
          <Route path='tree' element={<ProjectPage name="Tree" />} />
          <Route path='finantials' element={<ProjectPage name="Finantials" />} />
        </Route>

        <Route path='/about' element={<AboutPage name="About Page" />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    )
}

export default Router