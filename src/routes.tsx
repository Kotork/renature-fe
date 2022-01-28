import React from "react";
import { Routes, Route } from "react-router-dom";

//LAYOUTS
import MainLayout from "./layouts/Main";
import ProjectLayout from "./layouts/Project";
import SerieLayout from "./layouts/Series";
import VolunteerLayout from "./layouts/Volunteer";

// PAGES
import HomePage from "./pages/Home";
import ProjectPage from "./pages/Project";
import ProjectLocationPage from "./pages/ProjectLocation";
import ProjectOverviewPage from "./pages/ProjectOverview";
import ProjectRestaurationPage from "./pages/ProjectRestauration";
import ProjectFinantialsPage from "./pages/ProjectFinantials";
import SeasonOnePage from "./pages/SeriesSeason1";
import SeasonTwoPage from "./pages/SeriesSeason2";
import VolunteerPage from "./pages/Volunteer";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainLayout name="Main Layout" />}>
        <Route path="" element={<HomePage name="Home Page" />} />
      </Route>

      <Route path="/project/*" element={<ProjectLayout name="Project Layout" />} >
        <Route path="" element={<ProjectPage name="Project Page" />} />
        <Route path="location" element={<ProjectLocationPage name="Location" />} />
        <Route path="overview" element={<ProjectOverviewPage name="Overview" />} />
        <Route path="restauration" element={<ProjectRestaurationPage name="Restauration" />} />
        <Route path="finantials" element={<ProjectFinantialsPage name="Finantials" />} />
      </Route>

      <Route path="/series/*" element={<SerieLayout name="Main Layout" />}>
        <Route path="season-1" element={<SeasonOnePage name="Season One" />} />
        <Route path="season-2" element={<SeasonTwoPage name="Season Two" />} />
      </Route>

      <Route path="/volunteer/*" element={<VolunteerLayout name="Main Layout" />}>
        <Route path="" element={<VolunteerPage name="Volunteer" />} />
      </Route>
    </Routes>
  );
};

export default Router;
