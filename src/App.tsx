import { useState } from 'react'
import Header from './components/Header/header'
import Home from './components/home/home'
import Menu from './components/PizzaCard/menu'
import css from './styles/global.css'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Menu />
  
    </>
  )
}

export default App
