import React from 'react'
import Nav from '../components/navbar'
import Sidebar from './components/Sidebar'
import { useSelector } from 'react-redux'

import Conf from './pages/config'
import Users from './pages/users'
// import Players from './pages/players'
import Games from './pages/games'
import Tournaments from './pages/tournaments'
import Modal from '../components/modal'

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
                {/* {selectedItem === 'players' && <Players />} */}
                {selectedItem === 'games' && <Games />}
                {selectedItem === 'tour' && <Tournaments />}
              </div>
            </div>
          </div>
        </div>
      </div >
      <Modal />
    </>
  )
}
