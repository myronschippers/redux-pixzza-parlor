import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'; 

class Header extends Component {
    render() {
        const cartCount = this.props.reduxState.pizzaOrderReducer.length;
        let totalPrice = 0.00;

        this.props.reduxState.pizzaOrderReducer.forEach((pizzaInOrder, pizzaIndex) => {
            totalPrice += parseFloat(pizzaInOrder.price);
        });

        return (
            <header className="App-header">
                <div>
                    <h1 className="App-title">Prime Pizza</h1>
                </div>
                <div>
                    Cart {`(${cartCount})`} Total: ${totalPrice}
                </div>
            </header>
        );
    }
}

export default connect(mapReduxStateToProps)(Header);
