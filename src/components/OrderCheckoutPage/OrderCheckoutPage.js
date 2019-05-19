import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'; 
import { postPizzaOrder } from '../../modules/services/pizza.api.service';

// CSS
import './checkout.css';

class OrderCheckoutPage extends Component {
    clickCheckout = (event) => {
        alert('Your order has been placed!!!');
        postPizzaOrder({
            pizzaOrder: this.props.reduxState.pizzaOrderReducer,
            customerInfo: this.props.reduxState.customerReducer,
            deliveryType: this.props.reduxState.typeReducer,
            totalCost: this.props.reduxState.totalCostReducer,
        }).then((response) => {
            console.log('Successfull post: ', response);
            this.props.history.push('/');
        })
        .catch((err) => {
            console.log('Error with the post: ', err);
        });
    }

    render() {
        const typeText = `For ${this.props.reduxState.typeReducer}`;
        const {
            name,
            streetAddress,
            city,
            zip,
        } = this.props.reduxState.customerReducer;

        const pizzaOrderDetails = this.props.reduxState.pizzaOrderReducer.map((pizzaItem, pizzaIndex) => {
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
            <div className="section">
                <div className="vr vr_x3">
                    <h2 className="title is-3">Step 3: Checkout</h2>
                </div>

                <div className="vr vr_x3">
                    <div className="columns">
                        <div className="column is-6">
                            {name}<br />
                            {streetAddress}<br />
                            {city}<br />
                            {zip}
                        </div>
                        <div className="column is-6">
                            <span className="title is-5">{typeText}</span>
                        </div>
                    </div>
                </div>

                <div className="vr vr_x3">
                    <table className="table is-striped is-bordered is-centered">
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
                </div>
                <div className="vr vr_x3 has-text-right">
                    <span className="title is-4">Total: ${this.props.reduxState.totalCostReducer}</span>
                </div>
                <div className="has-text-right">
                    <button
                        className="button is-large is-link"
                        onClick={this.clickCheckout}
                    >
                        CHECKOUT
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(OrderCheckoutPage);
