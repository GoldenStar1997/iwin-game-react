import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/auth/login';
import Register from './pages/auth/register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route  path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;