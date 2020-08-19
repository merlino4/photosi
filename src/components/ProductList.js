import React from "react";
import Product from "./Product"
import Title from "./Title";
import {ProductConsumer} from '../context';
import '../style/productList.css'


class ProductList extends React.Component {
   
    render(){

      return(
        <React.Fragment>
             <div className="container-productlist"><Title name="i nostri " title="prodotti"></Title></div>
             <ProductConsumer>
               {value =>{
                return value.products.map( product =>{
                  return <Product key={product.id} product={product}/>
                })    
               }}
             </ProductConsumer>
        </React.Fragment>
                
     ) 
    }
  }
  
  
  export default ProductList