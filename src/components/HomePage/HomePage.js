import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'; 

class HomePage extends Component {
    clickStartOrder = (event) => {
        this.props.history.push('/order-select');
    }

    render() {
        return (
            <div>
                <h2>Home</h2>

                <div>
                    BODY CONTENT
                </div>
                <button onClick={this.clickStartOrder}>Start Order</button>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(HomePage);
