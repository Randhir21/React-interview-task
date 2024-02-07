import {  useRef  } from 'react'

import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Header  />
      <div id="section1">
      <Outlet  />
      </div>
      <Footer />
    </>
  )
}

export default App
