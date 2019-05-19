import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { getPizzaOrders, deletePizzaOrder } from '../../modules/services/pizza.api.service';

class AdminPage extends Component {
    componentDidMount() {
        this.loadOrders();
    }

    /**
     * Get the id of the individual pizza order and delete that specific order from the database.
     * @param {object} event
     */
    deleteOrderItem = (event) => {
        const orderIndex = event.target.dataset.id;
        const orderId = this.props.reduxState.orderReducer[orderIndex].id;
        deletePizzaOrder(orderId)
            .then((response) => {
                this.loadOrders();
            });
    }

    // ----------------------------------------------------------------------------------------------
    /**
     * Make the get API call needed to retrieve order details and then dispatch them to the redux
     * state.
     */
    loadOrders() {
        getPizzaOrders()
            .then((response) => {
                this.props.dispatch({
                    type: 'ADMIN_ORDER_HISTORY',
                    payload: response.data,
                });
            })
            .catch((err) => {
                console.log('There was an error getting the orders:', err);
            });
    }

    render() {
        console.log('orderReducer: ', this.props.reduxState.orderReducer);
        const orderTableRows = this.props.reduxState.orderReducer.map((orderItem, orderIndex) => {
            return (
                <tr key={orderIndex}>
                    <td>{orderItem.customer_name}</td>
                    <td>{orderItem.time}</td>
                    <td>{orderItem.type}</td>
                    <td>${orderItem.total}</td>
                    <td className="has-text-center">
                        <button
                            className="button is-danger"
                            data-id={orderIndex}
                            onClick={this.deleteOrderItem}
                        >
                            DELETE
                        </button>
                    </td>
                </tr>
            );
        })
        return (
            <div className="section">
                <div className="vr vr_x3">
                    <h2 className="title is-3">Prime Pizza Admin</h2>
                </div>

                <div className="vr vr_x3">
                    <div className="vr vr_x3">
                        <h3 className="title is-4">Order History</h3>
                    </div>

                    <table className="table is-striped is-bordered is-centered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Time Order Placed</th>
                                <th>Type</th>
                                <th>Cost</th>
                                <th>Control</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderTableRows}
                        </tbody>
                    </table>
                </div>

                <div className="vr vr_x3">
                    <div className="vr vr_x3">
                        <h3 className="title is-4">Pizza Menu</h3>
                    </div>

                    
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(AdminPage);
