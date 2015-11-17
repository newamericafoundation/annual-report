import React from 'react'
import { render } from 'react-dom'

import $ from 'jquery'
import 'jquery-mousewheel'

import Layout from './../../components/layout.jsx'

import data from './../../../public/data/pages.js'

// Log render result so the page can be generated server-side.
// console.log(React.renderToString(c));

var { document, window } = global

window.startAnnualReport = () => {

	var container = document.getElementById('wrapper')
	var element = <Layout pages={data} />

	// Developer signature :)
	console.log('Hi, Mom!')

	render(element, container)

}