import React from 'react'
import {Route,Routes } from 'react-router-dom';
import Add from '../Add/Add';
import App from '../../App';
import Edit from '../Edit/Edit';
const AppRouter = () => {
  return (
    <>
      <Routes>
            <Route path='/' element={<App></App>}/>
            <Route path='/create' element={<Add></Add>}/>
            <Route path='/update/:id' element={<Edit></Edit>}/>

        </Routes>
    </>
  )
}

export default AppRouter
