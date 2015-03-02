var React = require('react');
require('../less/index.less');
var UberDoku = require('./UberDoku.jsx');

React.initializeTouchEvents(true);
React.render(<UberDoku />,document.getElementById("app"));
