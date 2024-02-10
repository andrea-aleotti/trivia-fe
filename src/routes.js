import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Define routes using Route components */}
                <Route path='/' Component={Welcome} /> {/* Route for the WelcomePage */}
                {/* Add more routes for other components/pages as needed */}

                {/* Add a fallback route for 404 Not Found */}
                <Route component={() => <h1>404 Not Found</h1>} />
            </Routes>
        </Router>
    );
};

export default MyRoutes;
