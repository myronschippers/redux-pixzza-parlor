import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'; 

class OrderCheckoutPage extends Component {
    clickCheckout = (event) => {
        alert('Your order has been placed!!!');
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h2>Step 3: Checkout</h2>

                <div>
                    BODY CONTENT
                </div>
                <div>
                    <button onClick={this.clickCheckout}>CHECKOUT</button>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(OrderCheckoutPage);
