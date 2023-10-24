import React from 'react'

import style from './headbar.module.css'

function Headbar () {
  return (
    <header className={style.container}>
      <div className={style.wrapper}>
        <h1> Bank List </h1>
        <p> Lista de Entidades Bancarias</p>
      </div>
    </header>
  )
}

export default Headbar
