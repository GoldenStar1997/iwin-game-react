import React from 'react'
import menu from '../../../utils/pageMenu'
import { useDispatch } from 'react-redux'
import { setPage } from '../../../reducers/adminSlice'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const dispatch = useDispatch();

  return (
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-dark">
      <div className="app-brand demo">
        <Link to="/" className="app-brand-link">
          <span className="app-brand-logo demo">
            <img src="./assets/img/logo.svg" alt="" height="50" width="50" />
          </span>
          <span className="app-brand-text demo menu-text fw-bolder ms-2">iWinGaming</span>
        </Link>
        <Link to="" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </Link>
      </div>
      <div className="menu-inner-shadow"></div>
      <ul className="menu-inner py-1">

        {
          menu.map((item, i) =>
            item.hr ?
              <li className="menu-header small text-uppercase" key={i}>
                <span className="menu-header-text">{item.title}</span>
              </li>
              :
              <li className="menu-item" key={i}>
                <Link to="#" onClick={() => dispatch(setPage(item.link))} className="menu-link">
                  <i className={"menu-icon tf-icons bx " + item.icon}></i>
                  <div data-i18n="Basic">{item.title}</div>
                </Link>
              </li>
          )
        }
      </ul>
    </aside>
  )
}
