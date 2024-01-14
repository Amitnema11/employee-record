import React, { useState } from 'react'
import { Home } from './components/Home'
import Show from './components/Show'
import Create from './components/Create'
import { Link, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Edit from './components/Edit'
import About from './components/About'

const App = () => {

 
    return (
    <>
      <Nav/>
      
      <Routes>
         <Route path='/' element={<Home/>}/>
            
         <Route path='/create' element={<Create />}/>

           <Route path='/show' element={<Show/>}/>
          
           <Route path='/about' element={<About/>}/>

            <Route path='/show/edit/:title' element={<Edit/>}/>
      </Routes>

    </>
  )
}

export default App