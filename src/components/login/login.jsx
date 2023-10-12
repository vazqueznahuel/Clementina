import React, { useState } from 'react'
import Label from '../label/label.jsx'
import '../../App.css'

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from '../home/home.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle,faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../nav/nav.jsx';
import appFirebase from '../../firebase/firebaseConfig.js'
import { getAuth, signInWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
const auth = getAuth(appFirebase);


function Login(props) {

    return (
    <>

    </>
    );
    }
    export default Login;