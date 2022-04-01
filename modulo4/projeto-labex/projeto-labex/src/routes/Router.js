import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdiminHomePage from "../pages/AdiminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTripPage  from "../pages/CreateTripPage";
import HomePage from "../pages/HomePage";
import LisTripsPage from "../pages/ListTripsPage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";


const Router = () => {
    return (
      
        <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage/>} />
          <Route path="/adiminHomePage" element={<AdiminHomePage/>} />
          <Route path="/applicationFormPage" element={<ApplicationFormPage/>} />
          <Route path="/createTripPage" element={<CreateTripPage/>} />
          <Route path="/lisTripsPage" element={<LisTripsPage/>} />
          <Route path="/loginPage" element={<LoginPage/>} />
          <Route path="/tripDetailsPage" element={<TripDetailsPage/>} />
        </Routes>
      </BrowserRouter>

     
    )
}

export default Router