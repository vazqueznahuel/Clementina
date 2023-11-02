import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Home from '../components/home/home'; 
import Login from '../components/login/login';
import Register from '../components/register/register';

import appFirebase from '../firebase/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import ResetPassword from '../components/resetPassword/resetPassword';
import Main from '../components/main/main';
import FirstModel from '../components/SliderModels/widi';
import Calamaria from '../components/SliderModels/calamaria';
import ModelSlider from '../components/SliderModels/ModelSlider';

const auth = getAuth(appFirebase);

    function AppRouter() {
      const [isAuthenticated, setIsAuthenticated] = useState(false);

      useEffect(() => {
          onAuthStateChanged(auth, (user) => {
              if (user) {
                  setIsAuthenticated(true);
              } else {
                  setIsAuthenticated(false);
              }
          });
      }, []);
    return (
      <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={ isAuthenticated ? <Navigate to="/Main" /> : <Login/> }
          />
          <Route path='/Registro' element={<Register/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Recuper-Contraseña' element={<ResetPassword/>}/>
          <Route path='/Main' element={<Main/>}/>
          <Route path='/Wi-di' element={<FirstModel/>}/>
          <Route path='/Calamaria' element={<Calamaria/>}/>
          <Route path='/ModelSlider' element={<ModelSlider/>}/>

        </Routes>
      </Router>
      </>    
    );
    }

    export default AppRouter;