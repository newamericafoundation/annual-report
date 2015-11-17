import React from 'react'
import ReactDOMServer from 'react-dom/server'
import jade from 'jade'

var data = require('./public/data/pages.js'),
	Layout = require('./app/components/layout.jsx').default;

var reactEl = React.createElement(Layout, { pages: data });

console.log(ReactDOMServer.renderToString(reactEl));