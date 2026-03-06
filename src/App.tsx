import { useState } from 'react'
import Header from './components/Header/header'
import Home from './components/home/home'
import Menu from './components/PizzaCard/menu'
import css from './styles/global.css'
import Events from './components/EventsSection/events'
import { Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import CartPage from './pages/CartPage'

function App() {

  return (
    <CartProvider>
      <Header />
      <Routes>
        {/* ГЛАВНАЯ СТРАНИЦА (собираем все блоки здесь) */} 
        <Route path="/" element={
          <>
            <Home />
            <Menu />
            <Events />
          </>
        } />

        {/* СТРАНИЦА КОРЗИНЫ */}
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </CartProvider>
  )
}

export default App
