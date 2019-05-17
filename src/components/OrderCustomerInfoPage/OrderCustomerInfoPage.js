import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'; 

class OrderCustomerInfoPage extends Component {
    render() {
        return (
            <div>
                <h2>Step 2: Customer Information</h2>

                <div>
                    BODY CONTENT
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(OrderCustomerInfoPage);
