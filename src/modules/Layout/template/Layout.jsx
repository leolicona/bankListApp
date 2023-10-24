import React from 'react'

import Headbar from '../organims/Headbar/Headbar'

import style from './layout.module.css'

function Layout ({ children }) {
  return (
    <div className={style.container}>
      <Headbar />
      <div className={style.main}>
        {children}
      </div>
    </div>
  )
}

export default Layout
