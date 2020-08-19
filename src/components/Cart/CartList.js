import React from 'react'
import CartItem from './CartItem'

export default function CartList({value}) {
    // const {value} = 
    
    const {cart} = value
    console.log(value,cart)

    return (
        <div className="container-cartlist">
           {cart.map(item=>{
               return <CartItem  key={item.id} item={item} value={value}/>
           })}
               
         
        </div>
    )
}