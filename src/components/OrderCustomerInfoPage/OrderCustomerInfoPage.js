import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'; 

class OrderCustomerInfoPage extends Component {
    clickNextStep = (event) => {
        this.props.history.push('/order-checkout');
    }

    render() {
        return (
            <div>
                <h2>Step 2: Customer Information</h2>

                <div>
                    BODY CONTENT
                </div>
                <div>
                    <button onClick={this.clickNextStep}>NEXT</button>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(OrderCustomerInfoPage);
