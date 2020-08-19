import React from "react";
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import '../style/detail.css'


class Details extends React.Component {
    render(){
      return(
        <ProductConsumer>
          {value => {
            const {id,company,img,price,title,inCart,info} = value.detailProduct
 
            return (
              <div className="detailWrapper">
              <div className="detail-title">
                {/* {title} */}
                {title}
              </div>
              <div>
                <img src={img} alt='telefono'></img>
              </div>
              <div>
              <h2><span className="description">modello:</span> {title}</h2>  
              <h4> <span className="description">fatto da:</span> {company}</h4>
              <h4><span className="description">prezzo:</span> {price}</h4>
              <p><span className="description">info: </span>{info}</p>
              </div>
              <Link to='/'>
                <button className="detail-button">
                indietro
                </button>
              </Link>
              <button className="detail-button" 
              disabled={inCart ? true : false}
              onClick={()=> {
                value.addToCart(id)
                value.openModal(id)
              }}
              >
                {inCart ? 'nel carrello' : 'aggiungi al carrello'}
              </button>
              </div>
            )
            }
          }
        </ProductConsumer>
      )
    }
  }
  
  
  export default Details


