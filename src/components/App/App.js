import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import OrderSelectPage from '../OrderSelectPage/OrderSelectPage';
import OrderCustomerInfoPage from '../OrderCustomerInfoPage/OrderCustomerInfoPage';
import OrderCheckoutPage from '../OrderCheckoutPage/OrderCheckoutPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path="/" component={HomePage} />
          <Route path="/order-select" component={OrderSelectPage} />
          <Route path="/order-customer-info" component={OrderCustomerInfoPage} />
          <Route path="/order-checkout" component={OrderCheckoutPage} />
        </div>
      </Router>
    );
  }
}

export default App;
