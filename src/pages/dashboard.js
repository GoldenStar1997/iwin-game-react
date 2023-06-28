import React from 'react'
import Nav from './components/navbar'

export default function Dashboard() {
  return (
    <>
      <Nav />

      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          Dashboard
        </div>
      </div>
    </>
  )
}
