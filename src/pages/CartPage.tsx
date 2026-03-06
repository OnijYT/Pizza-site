import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import style from './cartpage.module.css'
import { useState } from "react";



const CartPage = () => {
  const {items, totalprice, plusbtn, minusbtn} = useCart()
  
  const onclickbuttom = () => {
    window.location.reload()
    alert("Вы оформили заказ")
  }

  if (items.length === 0) return <div className={style.container}><h2>Корзина пусто 🍕</h2> <br /> <Link className={style.backtomenu} to="/">← Back to Menu</Link></div>

  return (
    <div className={style.container}>
      <div className={style.pizzacartcontainer}>
        <h1>Ваш заказ</h1>
        {items.map((item, index) => (
          <div className={style.zakazcartcontainer} key={index}>
            <div className={style.imgcont}><img src={item.img} alt="img" /></div>
            <div className={style.titlecont}>
              <h3>{item.title}</h3>
              <p>Размер {item.size} см | {item.count} шт.</p>  
            </div>
            <div className={style.priceandpl}>
              <div className={style.plusminuscont}>
                <button onClick={() => minusbtn(item.id, item.size)}>-</button>
                    <span>{item.count}</span>
                <button onClick={() => plusbtn(item.id, item.size)}>+</button>
              </div>
              
              <h5>Цена: {item.price * item.count}</h5>
            </div>
          </div>
        ))}
        <hr />
        <div className={style.buttonpizzacart}>
          <h2>Итого: {totalprice.toFixed(2)} $</h2>
          <button onClick={onclickbuttom}>Оформить</button>
        </div>
        
      </div>
      <Link className={style.backtomenu} to="/">← Back to Menu</Link>
    </div>
  );
};

export default CartPage;