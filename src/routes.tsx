import React,{ useEffect } from "react";
import { Routes,Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//LAYOUTS
import MainLayout from './layouts/Main';
import ProjectLayout from './layouts/Project'
import SerieLayout from './layouts/Serie'

// PAGES
import HomePage from "./pages/Home";
import ProjectPage from "./pages/Project"
import ProjectLocationPage from "./pages/ProjectLocation"
import ProjectOverviewPage from "./pages/ProjectOverview"
import ProjectRestaurationPage from "./pages/ProjectRestauration"
import ProjectFinantialsPage from "./pages/ProjectFinantials"

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
          <Route path='overview' element={<ProjectOverviewPage name="Overview" />} />
          <Route path='restauration' element={<ProjectRestaurationPage name="Restauration" />} />
          <Route path='finantials' element={<ProjectFinantialsPage name="Finantials" />} />
        </Route>

        <Route path="/*" element={<SerieLayout name="Main Layout" />}>
          <Route path='' element={<HomePage name="Home Page" />} />
        </Route>
      </Routes>
    )
}

export default Router