import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from '../../modules/Layout/template/Layout'
import BankList from './bankList'

function BanksRouter () {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<BankList />} />
        <Route path='/detail/:tile' element={<h2>Aquie va el detalle </h2>} />
      </Routes>
    </Layout>

  )
}

export default BanksRouter
