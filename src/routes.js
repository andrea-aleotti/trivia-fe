import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';
import UnoVsUno from './components/UnoVsUno/UnoVsUno';

const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' Component={Welcome} />
                <Route path='/home' Component={Home} />
                <Route path='/UnoVsUno' Component={UnoVsUno} />

                {/* Add a fallback route for 404 Not Found */}
                <Route component={() => <h1>404 Not Found</h1>} />
            </Routes>
        </Router>
    );
};

export default MyRoutes;
