import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'; 

class OrderCheckoutPage extends Component {
    clickCheckout = (event) => {
        alert('Your order has been placed!!!');
        this.props.history.push('/');
    }

    render() {
        let typeText = '';
        let totalCost = 0;
        const {
            name,
            streetAddress,
            city,
            zip,
        } = this.props.reduxState.customerReducer;

        if (this.props.reduxState.typeReducer === 'delivery') {
            typeText = 'For Delivery';
        } else if (this.props.reduxState.typeReducer === 'pickup') {
            typeText = 'For Pickup';
        }

        const pizzaOrderDetails = this.props.reduxState.pizzaOrderReducer.map((pizzaItem, pizzaIndex) => {
            totalCost += parseFloat(pizzaItem.price)
            return (
                <tr key={pizzaIndex}>
                    <td>
                        {pizzaItem.name}
                    </td>
                    <td>
                        ${pizzaItem.price}
                    </td>
                </tr>
            );
        });

        return (
            <div>
                <h2>Step 3: Checkout</h2>

                <div>
                    <div>
                        <div>
                            {name}<br />
                            {streetAddress}<br />
                            {city}<br />
                            {zip}
                        </div>
                        <div>
                            {typeText}
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Cost
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {pizzaOrderDetails}
                        </tbody>
                    </table>
                    <div>
                        Total: ${totalCost}
                    </div>
                </div>
                <div>
                    <button onClick={this.clickCheckout}>CHECKOUT</button>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(OrderCheckoutPage);
