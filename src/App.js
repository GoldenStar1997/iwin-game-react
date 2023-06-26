import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Contact from './pages/user/contact'
import Profile from './pages/user/profile'
import Referals from './pages/user/referals'
import Error from './pages/error'

import Home from './pages/user/home'
import Tour from './pages/user/tour'
import Game from './pages/user/game'


// admin page
import Admin from './pages/admin/'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register invitedBy={false} />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/tour" element={<Tour />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/referals" element={<Referals />} />
        <Route exact path="/games/:id" element={<Game />} />
        <Route exact path="/invite/:id" element={<Register invitedBy={true}/>} />

        <Route exact path="/admin" element={<Admin />} />

        <Route exact path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;