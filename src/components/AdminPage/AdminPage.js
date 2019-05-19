import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { getPizzaOrders } from '../../modules/services/pizza.api.service';

class AdminPage extends Component {
    componentDidMount() {
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
                </tr>
            );
        })
        return (
            <div className="section">
                <div className="vr vr_x3">
                    <h2 className="title is-3">Prime Pizza Admin</h2>
                </div>

                <div>
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
                            </tr>
                        </thead>
                        <tbody>
                            {orderTableRows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(AdminPage);
