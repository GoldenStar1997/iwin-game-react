import React from 'react'
import { useSelector } from 'react-redux'

import Nav from '../components/navbar'
import Sidebar from '../components/Sidebar'
import Modal from '../components/modal'

import Conf from './pages/config'
import Users from './pages/users'
import Games from './pages/games'
import Tours from './pages/tours'
import AddGame from './pages/addGame'
import AddTour from './pages/addTour'

export default function Admin() {
  const selectedItem = useSelector((state) => state.admin.selectedItem);
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <Nav />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                {selectedItem === 'config' && <Conf />}
                {selectedItem === 'users' && <Users />}
                {selectedItem === 'games' && <Games />}
                {selectedItem === 'tours' && <Tours />}
                {selectedItem === 'addGame' && <AddGame />}
                {selectedItem === 'addTour' && <AddTour />}
              </div>
            </div>
          </div>
        </div>
      </div >
      <Modal />
    </>
  )
}
