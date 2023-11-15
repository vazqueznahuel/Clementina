// AppRouter.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import Home from '../components/home/home';
import Login from '../components/login/login';
import Register from '../components/register/register';
import appFirebase from '../firebase/firebaseConfig';
import ResetPassword from '../components/resetPassword/resetPassword';
import Main from '../components/main/main';
import ModelSlider from '../components/SliderModels/ModelSlider';
import QRScannerPage from '../components/escaner/QRScannerPage';
import { getAuth } from 'firebase/auth'; 

const auth = getAuth(appFirebase);

function AppRouter() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/Main" /> : <Login />} />
        <Route path="/Registro" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Recuper-Contraseña" element={<ResetPassword />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/ModelSlider/:id" element={<ModelSlider />} />
        <Route path="/QRScannerPage" element={<QRScannerPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
