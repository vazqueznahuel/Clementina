import React, { useState } from 'react';
import AppRouter from './routes/routes'
import MyQRCodeComponent from './components/generateqr/generateqr'

function App() {

    return ( 
        <div>
            <AppRouter/>
            <MyQRCodeComponent/>
        </div>
    )
}

export default App;