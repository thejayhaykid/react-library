import React, { useEffect, useState } from 'react';
import axios from "axios";

export const Home = () => {
  const [state, setState] = useState('');

  useEffect(() => {
    axios.get('/api/')
      .then(res => setState(res.data));
  }, []);

  return (
    <div className="main-body">
        <h1>Welcome to Home</h1>
        <p>{state}</p>
    </div>
  );
};