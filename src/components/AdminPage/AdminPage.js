import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'; 

class OrderCheckoutPage extends Component {
    render() {
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

export default connect(mapReduxStateToProps)(OrderCheckoutPage);
