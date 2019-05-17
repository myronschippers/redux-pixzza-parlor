import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'; 
import PizzaMenuItem from '../PizzaMenuItem/PizzaMenuItem';

class PizzaMenuList extends Component {
    render() {
        const pizzaMenu = this.props.pizzaMenu.map((pizzaItem, pizzaIndex) => {
            return (
                <PizzaMenuItem key={pizzaIndex} pizza={pizzaItem} pizzaIndex={pizzaIndex} />
            );
        });

        return (
            <div className="blocks blocks_3up">
                {pizzaMenu}
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(PizzaMenuList);
