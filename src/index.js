import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

// CSS
import 'bulma/css/bulma.css';
import './index.css';

// Redux
import { Provider } from 'react-redux';
import storeInstance from './modules/redux/storeInstance';

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
