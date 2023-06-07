import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Home from './pages/user/home';
import Yard from './pages/user/yard';
import NotFound from './pages/notFound';

// import "jquery"
// import "popper.js"
// import "bootstrap/dist/js/bootstrap"
// import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/games/practice/:gameId" element={<Yard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;