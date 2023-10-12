import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import  Home from '../components/home/home'; 
import Login from '../components/login/login';
import Register from '../components/register/register';

import appFirebase from '../firebase/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth(appFirebase);

    function AppRouter() {
    return (
      <>
       </>    
    );
    }

    export default AppRouter;