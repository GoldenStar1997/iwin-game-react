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
import Checkout from './pages/user/checkout'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register invitedBy={false} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/referals" element={<Referals />} />
        <Route path="/games/:id" element={<Game />} />

        <Route path="/invite/:id" element={<Register invitedBy={true}/>} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;