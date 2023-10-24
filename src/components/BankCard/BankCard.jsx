import React from 'react'

import style from './bankCard.module.css'

function BankCard ({ imageSrc, alt = '', title, description, age, action }) {
  return (
    <article className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <img className={style.image} src={imageSrc} alt={alt} />
      <p>{description}</p>
      <span>{`Socio desde ${age} años`}</span>
      <button className={style.button} onClick={action && action}>Ver más</button>
    </article>
  )
}

export default BankCard
