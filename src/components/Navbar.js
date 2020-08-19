import React from "react";
import {Link} from "react-router-dom"
import logo from '../logo.svg'
import '../style/navbar.css'
 


class Navbar extends React.Component {
    render(){
      return(
       <div className="navbar">
   
           <Link to="/">
           <img src={logo} alt="store" className="logo"></img>
           </Link>
           <ul className ="nav-item">
            <li className="nav-obj">
            <Link to="/" className="nav-link">
                products
            </Link>
            </li>
           </ul>
           <Link to="/cart" className="carrello">
                <button className="nav-button">
                    <i className=" fas fa-cart-plus"></i>
                    carrello
                </button>
           </Link>
       </div>
      )
    }
  }
  
  
  export default Navbar


