import React from 'react'
import { useNavigate } from 'react-router-dom'
import BankCard from '../../../../components/BankCard/BankCard'
import useBankList from '../../useBankList'

import style from './showBankList.module.css'

function ShowBankList () {
  const navigate = useNavigate()
  const { banks } = useBankList()

  const handleClick = (path) => {
    navigate(`detail/${path}`)
  }

  return (
    <section className={style.container}>
      <>
        {
        banks?.map(bank => (
          <BankCard
            key={bank.bankName}
            title={bank.bankName}
            description={bank.description}
            imageSrc={bank.url}
            age={bank.age}
            action={() => handleClick(bank.bankName)}
          />
        ))
      }
      </>
    </section>
  )
}

export default ShowBankList
