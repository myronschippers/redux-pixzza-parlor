import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

// CSS
import './pizzaMenuItem.css';

class PizzaMenuItem extends Component {
    getMatchedOrder() {
        const matchedOrder = this.props.reduxState.pizzaOrderReducer.filter(pizzaItem => {
            return this.props.pizza.id === pizzaItem.id;
        });

        return matchedOrder;
    }

    clickAddPizza = (event) => {
        let dispatchType = 'ADD_PIZZA_ORDER';
        const matchedOrder = this.getMatchedOrder();

        if (matchedOrder.length > 0) {
            dispatchType = 'REMOVE_PIZZA_ORDER';
        }

        this.props.dispatch({
            type: dispatchType,
            payload: this.props.pizza,
        });
    }

    render() {
        const {
            image_path,
            name,
            price,
            description,
        } = this.props.pizza;
        let btnText = 'ADD';
        let btnStyling = 'button is-medium is-fullwidth is-primary';
        const matchedOrder = this.getMatchedOrder();

        if (matchedOrder.length > 0) {
            btnText = 'REMOVE';
            btnStyling = 'button is-medium is-fullwidth is-warning';
        }

        return (
            <div>
                <div className="card">
                    <div className="card-image">
                        <img src={image_path} alt={name} />
                    </div>
                    <div className="card-content">
                        <h4 className="title is-4">{name}</h4>
                        <p className="subtitle is-5">Price: ${price}</p>
                        <p>{description}</p>
                    </div>
                    <div className="card-footer">
                        <button
                            className={btnStyling}
                            data-id={this.props.pizzaIndex}
                            onClick={this.clickAddPizza}
                        >
                            {btnText}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(PizzaMenuItem);
