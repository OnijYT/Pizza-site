import { useState } from 'react'
import Header from './components/Header/header'
import Home from './components/home/home'
import Menu from './components/PizzaCard/menu'
import css from './styles/global.css'
import Events from './components/EventsSection/events'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Menu />
      <Events />
    </>
  )
}

export default App
