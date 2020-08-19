import React from 'react'
import '../../style/cartColumns.css'
export default function CartColumns(){
    return(

        <div className="container-columns">
            <div className="riga">
                <div>
                    <p>products</p>
                </div>
                <div>
                <p>nome prodotto </p>

                </div>
                <div>
                <p>prezzo </p>

                </div>
                <div>
                <p>quant</p>

                </div>
                <div>
                <p>togli</p>

                </div>
                <div>
                <p>totale</p>

                </div>

            </div>
        </div>
    )
}