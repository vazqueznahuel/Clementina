import React, { useState } from 'react';
import AppRouter from './routes/routes'
import Epet3qr from './components/generateqr/epet3qr'
import Epet5qr from './components/generateqr/epet5qr'
import Epet6qr from './components/generateqr/epet6qr'

function App() {

    return ( 
        <div>
            <AppRouter/>
            <Epet3qr/>
            <Epet5qr/>
            <Epet6qr/>
        </div>
    )
}

export default App;