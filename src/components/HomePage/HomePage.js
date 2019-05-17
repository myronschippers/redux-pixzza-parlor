import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

// Material UI
import Button from '@material-ui/core/Button';
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
                        <Button variant="contained" color="primary" onClick={this.clickStartOrder}>Start Order</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(HomePage);
