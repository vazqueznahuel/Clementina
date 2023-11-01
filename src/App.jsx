import React, { useState } from 'react';
import AppRouter from './routes/routes'
import Epet3qr from './components/generateqr/epet3qr'

function App() {

    return ( 
        <div>
            <AppRouter/>
            <Epet3qr/>
        </div>
    )
}

export default App;