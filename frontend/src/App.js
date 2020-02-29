import React from 'react';
import LibRouter from './router';
import { Navbar, Footer } from "./containers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LibRouter />
      <Footer />
    </div>
  );
}

export default App;
