import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { withRouter } from 'react-router-dom';

// CSS
import './header.css';
import CartIcon from '../CartIcon/CartIcon';

class Header extends Component {
    render() {
        const cartCount = this.props.reduxState.pizzaOrderReducer.length;
        let cartIconContent = '';

        if (this.props.location.pathname.indexOf('admin') === -1) {
            cartIconContent = <CartIcon cartCount={cartCount} totalCost={this.props.reduxState.totalCostReducer}  />
        }

        return (
            <header className="hero is-info is-drkBase ">
                <div className="hero-body">

                    <div className="columns is-vcentered">
                        <div className="column is-9">
                            <h1 className="title is-1">Prime Pizza</h1>
                            <p className="subtitle">Hand crafted mouthgazm...</p>
                        </div>
                        <div className="column is-3 has-text-right">
                            {cartIconContent}
                        </div>
                    </div>

                </div>
            </header>
        );
    }
}

export default withRouter(connect(mapReduxStateToProps)(Header));
