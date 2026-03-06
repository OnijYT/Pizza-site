import React, { createContext, useState, useContext } from "react";

interface itemcart {
    id: number
    title: string
    price: number
    size: number
    count: number
    img: string
}

interface cartcontexttype {
    items: itemcart[]
    addtocart: (item: itemcart) => void
    totalprice: number
    minusbtn: (id: number, size: number) => void
    plusbtn: (id: number, size: number) => void
}

const CartContext = createContext<cartcontexttype | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<itemcart[]>([])

    const minusbtn = (id: number, size:number) => {
        setItems((prev) => 
            prev.map((item) => 
                item.id === id && item.size === size && item.count > 1
                ? {...item, count: item.count - 1}
                : item
            )
        )
    }

    const plusbtn = (id: number, size: number) => {
        setItems((prev) => 
            prev.map((item) => 
                item.id === id && item.size === size
                ? {...item, count: item.count + 1}
                : item
            )
        )
    }

    const addtocart = (newItem: itemcart) => {
        setItems((prev) => {
            const found = prev.find(i => i.id === newItem.id && i.size === newItem.size)

            if (found) {
                return prev.map(i => i === found ? {...i, count: i.count + newItem.count} : i)
            }

            return [...prev, newItem]
        })
    }

    const totalprice = items.reduce((sum, item) => sum + item.price * item.count, 0)

    return (
        <CartContext.Provider value={{items, addtocart, totalprice, plusbtn, minusbtn}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)!;