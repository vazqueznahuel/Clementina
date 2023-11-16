import React, { useState } from 'react';
import AppRouter from './routes/routes'
import Epet20qr from './components/generateQR/epet20qr';
import Epet3qr from './components/generateQR/epet3qr';
import Epet8qr from './components/generateQR/epet8qr';
import Epet5qr from './components/generateQR/epet5qr';
import Epet6qr from './components/generateQR/epet6qr';
import Epet17qr from './components/generateQR/epet17qr';
import Epet14qr from './components/generateQR/epet14qr';



function App() {

    return ( 
        <div>
            <AppRouter/>
            <Epet20qr/>
            <Epet3qr/>
            <Epet5qr/>
            <Epet6qr/>
            <Epet8qr/>
            <Epet17qr/>
            <Epet14qr/>
        </div>
    )
}

export default App;