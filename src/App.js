import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/'
          exact={true}
          element={<Home />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
