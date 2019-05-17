import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'; 

class PizzaMenuItem extends Component {
    clickAddPizza = (event) => {
        console.log(this.props.pizza);
    }

    render() {
        const {
            image_path,
            name,
            price,
            description,
        } = this.props.pizza;

        return (
            <div>
                <div>
                    <img src={image_path} alt={name} />
                </div>
                <div>
                    <h4>{name}</h4>
                    <p>Price: ${price}</p>
                    <p>{description}</p>
                    <button data-id={this.props.pizzaIndex} onClick={this.clickAddPizza}>Add</button>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(PizzaMenuItem);
