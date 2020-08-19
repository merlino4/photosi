import React from 'react'
import{Link} from 'react-router-dom'
import PaypalButton from './PaypalButton'
import cartTotal from '../../style/cartTotal.css'

export default function CartTotals({value,history}){
    const{cartSubtotal,cartTotal,clearCart} = value
    return(
        <React.Fragment>
        <div className="total-cart">
            <div className="total-row-cart">
            <div className="button-clear">
            <Link to ='/'>
                <button 
                onClick = {()=>clearCart()}
                className="remove-all">svuota carrello </button>
            </Link>
            <h5>
                <span>
                    subtotal : ${cartSubtotal}
                </span>
            </h5>
            <h5>
                <span>
                    tasse : ${cartSubtotal}
                </span>
            </h5>
            <h5>
                <span>
                    totale : ${cartTotal}
                </span>
            </h5>
            <PaypalButton
                
                total={cartTotal}
                clearCart={clearCart}
                history={history}
            >

            </PaypalButton>
            </div>
            </div>
        </div>
        </React.Fragment>
    )
}