import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import theme from './../../src/themes/bulma';

ReactDOM.render(<App />, document.getElementById('root'));

// eslint-disable-next-line
theme.globals();
