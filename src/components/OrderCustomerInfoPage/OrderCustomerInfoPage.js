import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'; 

class OrderCustomerInfoPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customer: {
                name: '',
                streetAddress: '',
                city: '',
                zip: '',
            },
            deliveryType: '',
        }
    }

    componentDidMount() {
        this.setState({
            customer: {
                ...this.state.customer,
                ...this.props.reduxState.customerReducer,
            },
        })
    }

    clickNextStep = (event) => {
        this.props.dispatch({
            type: 'ADD_CUSTOMER_INFO',
            payload: this.state.customer,
        });
        this.props.dispatch({
            type: 'ADD_DELIVERY_TYPE',
            payload: this.state.deliveryType,
        });
        this.props.history.push('/order-checkout');
    }

    /**
     * Event Handler for all change events on input fields for the customers address info.
     */
    changeField = (event) => {
        const fieldKey = event.target.dataset.field;
        const fieldValue = event.target.value;
        let newState = {
            customer: {
                // add the current state
                ...this.state.customer,
                // override a specific property key/value pair
                [fieldKey]: fieldValue,
            }
        };

        if (fieldKey === 'deliveryType') {
            newState = {
                [fieldKey]: fieldValue,
            };
        }
        console.log('fieldValue: ', fieldValue);
        
        this.setState(newState);
    }

    render() {
        let nextBtnText = 'Next';
        let isNextDisabled = false;

        if (this.state.customer.name === ''
            || this.state.customer.streetAddress === ''
            || this.state.customer.city === ''
            || this.state.customer.zip === ''
            || this.state.deliveryType === ''
        ) {
            nextBtnText = 'Complete All Fields';
            isNextDisabled = true;
        }

        return (
            <div>
                <h2>Step 2: Customer Information</h2>

                <div>
                    <div>
                        <label>
                            <span>Name</span>
                            <input
                                type="text"
                                required={true}
                                data-field="name"
                                value={this.state.customer.name}
                                onChange={this.changeField}
                            />
                        </label>
                        <label>
                            <span>Street Address</span>
                            <input
                                type="text"
                                required={true}
                                data-field="streetAddress"
                                value={this.state.customer.streetAddress}
                                onChange={this.changeField}
                            />
                        </label>
                        <label>
                            <span>City</span>
                            <input
                                type="text"
                                required={true}
                                data-field="city"
                                value={this.state.customer.city}
                                onChange={this.changeField}
                            />
                        </label>
                        <label>
                            <span>Zip</span>
                            <input
                                type="text"
                                required={true}
                                data-field="zip"
                                value={this.state.customer.zip}
                                onChange={this.changeField}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="pickup"
                                data-field="deliveryType"
                                checked={this.state.deliveryType === 'pickup'} 
                                onChange={this.changeField}
                            />
                            <span>Pickup</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="delivery"
                                data-field="deliveryType"
                                checked={this.state.deliveryType === 'delivery'}
                                onChange={this.changeField}
                            />
                            <span>Delivery</span>
                        </label>
                    </div>
                </div>
                <div>
                    <button disabled={isNextDisabled} onClick={this.clickNextStep}>{nextBtnText}</button>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(OrderCustomerInfoPage);
