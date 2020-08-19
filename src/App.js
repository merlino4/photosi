import React from 'react';
import logo from './logo.svg';
import {Switch,Route} from 'react-router-dom'
import './style/App.css';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart/Cart'
// import Product from './components/Product'
import Defaults from './components/Default';
import Modal from './components/modal'
import ThankYouPage from './components/ThankYouPage'
// import ContactUs from './components/SendEmail'


class App extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path ="/thankyou"component={ThankYouPage} />
          <Route component={Defaults} />
          
        </Switch>
        <Modal />
      </React.Fragment>
    )
  }
}


export default App