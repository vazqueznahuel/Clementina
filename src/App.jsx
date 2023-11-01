import React, { useState } from 'react';
import AppRouter from './routes/routes'
import Epet3qr from './components/generateqr/epet3qr'
import Epet5qr from './components/generateqr/epet5qr'

function App() {

    return ( 
        <div>
            <AppRouter/>
            <Epet3qr/>
            <Epet5qr/>
        </div>
    )
}

export default App;