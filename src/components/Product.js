import React from "react";
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import '../style/product.css'


class Product extends React.Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <div classname="product-wrapper">
                <div className="flex-container">
                <ProductConsumer>
                    {value => (
                        <div className="photocontainer" onClick={() => value.handleDetail(id)}>
                            <Link to="/details">
                                <img src={img} alt="teelfono" className="foto" />
                            </Link>

                            <button className="cartbutton" disabled={inCart ? true : false}
                                onClick={() => {
                                    value.addToCart(id)
                                    value.openModal(id)
                                }}
                            >


                                {inCart ? (
                                    <p className="scrittabottone" disabled>
                                        {" "} nel carrello </p>
                                ) : (
                                        <i className="fas fa-cart-plus" ><span>aggiungi al carrello</span></i>
                                    )}
                            </button>
                        </div>
                    )}


                </ProductConsumer>
                {/* {card-footer} */}
                <div className="footercard">
                    <p className="cardfooterwrite">
                        {title}
                    </p>
                    <h5 className="price">
                        {price} $

                  </h5>


                </div>
                </div>
            </div>

        )
    }
}


export default Product