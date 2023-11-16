import React, { useState } from 'react';
import AppRouter from './routes/routes'
import Epet20qr from './components/generateQR/epet20qr';


function App() {

    return ( 
        <div>
            <AppRouter/>
            <Epet20qr/>
        </div>
    )
}

export default App;