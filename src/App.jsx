import React from 'react'
import { Routes, Route } from 'react-router-dom'

import BanksRouter from './pages/banks/banksRouter'

function App () {
  return (
    <Routes>
      <Route path='/*' element={<BanksRouter />} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>

  )
}

export default App
