import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'; 

class OrderSelectPage extends Component {
    render() {
        return (
            <div>
                <h2>Step 1: Select Your Pizza</h2>

                <div>
                    BODY CONTENT
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(OrderSelectPage);
