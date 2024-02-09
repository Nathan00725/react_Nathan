import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home } from './components/Home'
import { NavBar } from './components/NavBar'
import {Contacto} from './components/Contacto'
import './styles.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {


  return (
    <>

    <NavBar></NavBar>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contacto' element={ <Contacto/>}></Route>
     </Routes>
     </BrowserRouter> 
    <Home></Home>
 
    </>
  )
}

export default App
