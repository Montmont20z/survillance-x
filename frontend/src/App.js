import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './index.css';

import Home from './containers/Home'
import Records from './containers/Records'
import Login from './containers/Login'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/records' element={ <Records /> } />
        <Route path='/login' element={ <Login /> } />
    </Routes>
  )
}

export default App
