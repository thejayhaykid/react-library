import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const TVShows = () => {
    let location = useLocation();

    return (
        <div>
            <h1>Oops!</h1>
            <p>It looks like {location.pathname} doesn't exist! Try going back <Link to="/">Home</Link></p>
        </div>
    );
};