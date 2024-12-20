import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-8">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;