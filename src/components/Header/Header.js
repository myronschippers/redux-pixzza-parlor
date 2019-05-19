import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

// CSS
import './cart.css';
import './header.css';

class Header extends Component {
    render() {
        const cartCount = this.props.reduxState.pizzaOrderReducer.length;

        return (
            <header className="hero is-info is-drkBase ">
                <div className="hero-body">

                    <div className="columns is-vcentered">
                        <div className="column is-9">
                            <h1 className="title is-1">Prime Pizza</h1>
                            <p className="subtitle">Hand crafted mouthgazm...</p>
                        </div>
                        <div className="column is-3 has-text-right">
                            <div className="cart">
                                <div className="cart-icon">
                                    <img
                                        src="images/shopping-store-cart.svg"
                                        alt="shopping cart icon"
                                        className="cart-icon-img"
                                    />
                                    <div className="cart-icon-count">
                                        {`${cartCount}`}
                                    </div>
                                </div>
                                <span className="cart-total">Total: ${this.props.reduxState.totalCostReducer}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </header>
        );
    }
}

export default connect(mapReduxStateToProps)(Header);
