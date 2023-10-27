import React, { useState } from 'react';
import './App.css';
import AppRouter from './routes/routes'
import Main from './components/main/main'
import SliderEpets from './components/sliderEpets/sliderEpets';

function App() {

    return ( 
        <div>
            <AppRouter/>
            <Main/>
            <SliderEpets/>
        </div>
    )
}

export default App;