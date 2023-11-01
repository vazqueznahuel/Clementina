import React, { useState } from 'react';
import AppRouter from './routes/routes'
import Epet3qr from './components/generateqr/epet3qr'
import Epet5qr from './components/generateqr/epet5qr'
import Epet6qr from './components/generateqr/epet6qr'
import Epet8qr from './components/generateqr/epet8qr'
import Epet14qr from './components/generateqr/epet14qr'
import Epet17qr from './components/generateqr/epet17qr'


function App() {

    return ( 
        <div>
            <AppRouter/>
            <Epet3qr/>
            <Epet5qr/>
            <Epet6qr/>
            <Epet8qr/>
            <Epet14qr/>
            <Epet17qr/>
        </div>
    )
}

export default App;