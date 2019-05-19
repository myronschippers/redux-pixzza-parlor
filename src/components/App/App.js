import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import OrderSelectPage from '../OrderSelectPage/OrderSelectPage';
import OrderCustomerInfoPage from '../OrderCustomerInfoPage/OrderCustomerInfoPage';
import OrderCheckoutPage from '../OrderCheckoutPage/OrderCheckoutPage';
import AdminPage from '../AdminPage/AdminPage';

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

          <Route path="/admin" component={AdminPage} />
        </div>
      </Router>
    );
  }
}

export default App;
