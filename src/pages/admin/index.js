import React, { useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/dashboard'
import Affiliate from './pages/affiliate'
import { useSelector } from 'react-redux'

export default function Index() {
  const curPage = useSelector((state)=>state.admin.curPage);
  useEffect(()=>{
    console.log(curPage)
  }, [curPage])

  return (
    <div className='admin-container'>
      <Sidebar />
      <div className='main-page'>
        <Dashboard />

        <Affiliate />
      </div>
    </div>
  )
}