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
        const orderTableRows = this.props.reduxState.orderReducer.map((orderItem, orderIndex) => {})
        return (
            <div>
                <h2>Pizza Admin</h2>

                <div>
                    BODY CONTENT
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(AdminPage);
