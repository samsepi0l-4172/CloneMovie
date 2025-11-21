import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation />
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
