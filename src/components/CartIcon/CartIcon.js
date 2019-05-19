import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

// CSS
import './cart.css';

class CartIcon extends Component {
    render() {
        return (
            <div className="cart">
                <div className="cart-icon">
                    <img
                        src="images/shopping-store-cart.svg"
                        alt="shopping cart icon"
                        className="cart-icon-img"
                    />
                    <div className="cart-icon-count">
                        {`${this.props.cartCount}`}
                    </div>
                </div>
                <span className="cart-total">Total: ${this.props.totalCost}</span>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(CartIcon);
