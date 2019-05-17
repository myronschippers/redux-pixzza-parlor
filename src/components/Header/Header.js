import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'; 

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <div>
                    <h1 className="App-title">Prime Pizza</h1>
                </div>
                <div>
                    Cart Total: $0.00
                </div>
            </header>
        );
    }
}

export default connect(mapReduxStateToProps)(Header);
