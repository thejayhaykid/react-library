import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Typography } from '@material-ui/core';

export const Lost = () => {
    let location = useLocation();

    return (
        <div>
            <Typography variant="h4" component="h1">Oops!</Typography>
            <Typography variant="p">It looks like {location.pathname} doesn't exist! Try going back <Link to="/">Home</Link></Typography>
        </div>
    );
};