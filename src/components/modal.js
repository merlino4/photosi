import React from 'react'
import {ProductConsumer} from '../context'
import {Link} from  'react-router-dom'
import '../style/modal.css'

class Modal extends React.Component {
    render() {
        return (
           <ProductConsumer>
               {(value) => {
                   const {modalOpen , closeModal} = value
                   const {img,title,price} =value.modalProduct
                   if (!modalOpen) {
                       return null
                   }else{
                      return (
                      <div className="modalcontainer">
                       <div id="modal" className =" modalwrapper">
                        <h5 className="modal-title"> aggiunto articolo!!</h5>
                        <img src={img} alt="ciao" />
                        <h4>{title}</h4>
                        <h4>{price} $ </h4>
                        <Link to ="/" ><button
                        className="modal-button"
                        onClick={()=>closeModal()}
                        >continua a shoppare
                        </button> 
                        </Link>
                        <Link to ="/cart" ><button
                        className="modal-button"
                        onClick={()=>closeModal()}
                        >vai al carrello 
                        </button> 
                        </Link>
                       </div>
                       </div>
                      )
                   }
                      
               }}
           </ProductConsumer>
        )
    }
}



export default Modal