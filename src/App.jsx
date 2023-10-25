import React, { useState } from 'react';
import './App.css';
import AppRouter from './routes/routes'
import Main from './components/main/main'

function App() {

    return ( 
        <div>
            <AppRouter/>
            <Main/>
        </div>
    )
}

export default App;