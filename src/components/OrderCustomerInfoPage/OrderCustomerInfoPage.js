import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

// CSS
import './fieldMaterial.css';

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
            deliveryType: this.props.reduxState.typeReducer,
        });
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
            <div className="section">
                <div className="vr vr_x3">
                    <h2 className="title is-3">Step 2: Customer Information</h2>
                </div>

                <div className="vr vr_x3">
                    <div className="columns">
                        <div className="column">
                            <label className="fieldMaterial">
                                <input
                                    type="text"
                                    required={true}
                                    data-field="name"
                                    value={this.state.customer.name}
                                    onChange={this.changeField}
                                    className="fieldMaterial-input"
                                />
                                <span className="fieldMaterial-label">Name</span>
                            </label>
                            <label className="fieldMaterial">
                                <input
                                    type="text"
                                    required={true}
                                    data-field="streetAddress"
                                    value={this.state.customer.streetAddress}
                                    onChange={this.changeField}
                                    className="fieldMaterial-input"
                                />
                                <span className="fieldMaterial-label">Street Address</span>
                            </label>
                            <label className="fieldMaterial">
                                <input
                                    type="text"
                                    required={true}
                                    data-field="city"
                                    value={this.state.customer.city}
                                    onChange={this.changeField}
                                    className="fieldMaterial-input"
                                />
                                <span className="fieldMaterial-label">City</span>
                            </label>
                            <label className="fieldMaterial">
                                <input
                                    type="text"
                                    required={true}
                                    data-field="zip"
                                    value={this.state.customer.zip}
                                    onChange={this.changeField}
                                    className="fieldMaterial-input"
                                />
                                <span className="fieldMaterial-label">Zip</span>
                            </label>
                        </div>
                        <div className="column">
                            <div className="vr vr_x3">
                                <label className="radio">
                                    <input
                                        type="radio"
                                        value="Pickup"
                                        data-field="deliveryType"
                                        checked={this.state.deliveryType === 'Pickup'} 
                                        onChange={this.changeField}
                                        className="answer"
                                    />&nbsp;
                                    <span>Pickup</span>
                                </label>
                            </div>
                            <div>
                                <label className="radio">
                                    <input
                                        type="radio"
                                        value="Delivery"
                                        data-field="deliveryType"
                                        checked={this.state.deliveryType === 'Delivery'}
                                        onChange={this.changeField}
                                        className="answer"
                                    />&nbsp;
                                    <span>Delivery</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="has-text-right">
                    <button
                        className="button is-large is-link"
                        disabled={isNextDisabled}
                        onClick={this.clickNextStep}
                    >
                        {nextBtnText}
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(OrderCustomerInfoPage);
