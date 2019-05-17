import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'; 

class HomePage extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>

                <div>
                    BODY CONTENT
                </div>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(HomePage);
