import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Contact from './pages/contact'
import Profile from './pages/profile'
import Referals from './pages/referals'

import Home from './pages/home'
import Play from './pages/play'
import Dashboard from './pages/dashboard'

// admin page
import Admin from './pages/admin/'

import Error from './pages/error/404.js'
import './App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register invitedBy={false} />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/tour" element={<Home tour={true} />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/referals" element={<Referals />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/games/:name" element={<Play />} />
        <Route exact path="/invite/:id" element={<Register invitedBy={true} />} />

        <Route exact path="/admin" element={<Admin />} />

        <Route exact path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;