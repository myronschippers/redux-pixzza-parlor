import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'; 
import { getPizzaMenu } from '../../modules/services/pizza.api.service';
import PizzaMenuList from '../PizzaMenuList/PizzaMenuList';

class OrderSelectPage extends Component {
    componentDidMount() {
        getPizzaMenu()
            .then((response) => {
                console.log('response', response);
                this.props.dispatch({
                    type: 'PIZZA_MENU',
                    payload: response.data,
                })
            });
    }

    clickNextStep = (event) => {
        this.props.history.push('/order-customer-info');
    }

    render() {
        console.log('pizzaMenu', this.props.reduxState.pizzaMenuReducer);
        return (
            <div>
                <h2>Step 1: Select Your Pizza</h2>

                <div className="container">
                    <PizzaMenuList pizzaMenu={this.props.reduxState.pizzaMenuReducer} />
                </div>
                <div>
                    <button onClick={this.clickNextStep}>NEXT</button>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(OrderSelectPage);
