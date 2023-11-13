import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./templates/home/Home";
import Update from "./templates/update/Update";
import VCod from "./templates/vcod/VCod";
import TypeParty from "./templates/typeparty/TypeParty";
import RankedVCod from "./templates/RankedvCod/RankedVCod";
import UnrankedVCod from "./templates/unrankedvcod/UnrankedVCod";
import Me from "./modules/me/Me";
import Login from '../src/modules/login/Login'; // Assurez-vous que ce chemin est correct

import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/staatliches";
import RankedLaunch from "./templates/rankedlaunch/RankedLaunch";

// Composant ProtectedRoute
const ProtectedRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem('token'); // Remplacez 'token' par la clé appropriée

    return isLoggedIn ? children : <Navigate to="/login" />;
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/me" element={
                    <ProtectedRoute>
                        <Me />
                    </ProtectedRoute>
                } />
                <Route path="/update" element={
                    <ProtectedRoute>
                        <Update />
                    </ProtectedRoute>
                } />
                <Route path="/typeparty" element={
                    <ProtectedRoute>
                        <TypeParty />
                    </ProtectedRoute>
                } />
                <Route path="/rankedvcod" element={
                    <ProtectedRoute>
                        <RankedVCod />
                    </ProtectedRoute>
                } />
                <Route path="/unrankedvcod" element={
                    <ProtectedRoute>
                        <UnrankedVCod />
                    </ProtectedRoute>
                } />
                <Route path="/rankedlaunch" element={
                    <ProtectedRoute>
                        <RankedLaunch />
                    </ProtectedRoute>
                } />
            </Routes>
        </Router>
    );
}

export default App;
