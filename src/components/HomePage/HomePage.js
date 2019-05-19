import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

// CSS
import './pizzaHero.css';

class HomePage extends Component {
    clickStartOrder = (event) => {
        this.props.history.push('/order-select');
    }

    render() {
        return (
            <div>
                <div className="pizzaHero">
                    <div className="pizzaHero-body">
                        <p className="pizzaHero-body-title">Get Your Slice Today</p>
                        <button
                            className="button is-medium is-link"
                            onClick={this.clickStartOrder}
                        >
                            Start Order
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(HomePage);
