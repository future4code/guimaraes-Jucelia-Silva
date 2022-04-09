import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdiminHomePage from "../pages/AdiminHomePage/AdiminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage  from "../pages/CreateTripPage/CreateTripPage";
import HomePage from "../pages/HomePage/HomePage";
import LisTripsPage from "../pages/ListTripsPage/ListTripsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";


const Router = () => {
    return (
      
        <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="listTrips" element={<LisTripsPage/>} />
          <Route path="listTrips/applicationToTrip" element={<ApplicationFormPage/>} />
          <Route path="login/adminHomePage" element={<AdiminHomePage/>} />
          <Route path="/login/adminHomePage/createTrip" element={<CreateTripPage/>} />
          
        </Routes>
      </BrowserRouter>

     
    )
}

export default Router