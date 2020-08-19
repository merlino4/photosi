import React from 'react'
import '../../style/cartItem.css'

export default function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value
    return (
        <div className="container-cartitem">
            <div className="row-cartitem">
                <img src={img}
                    style={{ width: '5rem', height: '5rem' }}
                    className="img-cart"
                />
            </div>
            <div className="title-cart">
                 {title}
            </div>
            <div className="price-cart">
                <span>price :</span> {price} $
                </div>
        <div className="button-container">
            <div className="row-button">
            <span className="minus" onClick={()=> decrement(id)}>-</span>
            <span className="count">{count}</span>
                <span className="plus" onClick={()=> increment(id)}>+</span>
            </div>
        </div>
        <div className="remove-cart">
               <div className="bin" onClick={()=> removeItem(id)}>
                   <i className="fas fa-trash"></i>
               </div>
            </div>
        <div className="total-cart">
               {total}
            </div>
        </div>
    )
}