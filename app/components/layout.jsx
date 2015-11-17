import React from 'react'
import Header from './general/header.jsx'
import Footer from './general/footer.jsx'
import { Arrow } from './general/icons.jsx'

import Pages from './page/root.jsx'

import $ from 'jquery'

class Layout extends React.Component {

	/*
	 *
	 *
	 */
	constructor(props) {
		super(props);
		this.state = {
			activePageIndex: 0,
			opacity: 0
		};
		// This instance variable keeps track of whether mouse wheel interactions are allowed.
		// It is set to false when mouse wheel interaction happens, and set to true again
		//   after an interval.
		this._allowMouseWheelInteraction = true;
	}


	/*
	 *
	 *
	 */
	render() {
		return (
			<div className='ar' style={{ opacity: this.state.opacity }}>
				<Header />
				<Pages 
					pages={this.props.pages} 
					activePageIndex={this.state.activePageIndex} 
				/>
				<div className='ar__nav'>
					{ this.renderTopButton() }
					{ this.renderBottomButton() }
				</div>
				<div className='ar__mid-bar'></div>
				<Footer />
			</div>
		);
	}


	/*
	 * Render helper.
	 *
	 */
	renderTopButton() {
		if (this.isUserOnFirstPage()) { return; }
		return (
			<div className='ar__nav__button ar__nav__button--left' onClick={ this.changeActivePage.bind(this, -1) }>
				<Arrow rotate={90} />
			</div>
		);
	}


	/*
	 * Render helper.
	 *
	 */
	renderBottomButton() {
		if (this.isUserOnLastPage()) { return; }
		return (
			<div className='ar__nav__button ar__nav__button--right' onClick={ this.changeActivePage.bind(this, +1) }>
				<Arrow rotate={270} />
			</div>
		);
	}


	/*
	 *
	 *
	 */
	componentDidMount() {
		$('body').on('mousewheel.layout', (e) => {
			var delta;
			if (this.isMouseWheelEnabled()) {
				if (Math.abs(e.deltaY) > 20) {
					delta = (e.deltaY < 0) ? 1 : -1;
					this.changeActivePage(delta);
					this.disableMouseWheelForInterval();
				}
			}
		});
		this.setState({ opacity: 1 });
	}


	/*
	 *
	 *
	 */
	componentWillUnmount() {
		$('body').off('mousewheel.layout');
	}


	/*
	 * Checks if user is on first page.
	 *
	 */
	isUserOnFirstPage() {
		return (this.state.activePageIndex === 0);
	}


	/*
	 * Checks if user is on last page.
	 *
	 */
	isUserOnLastPage() {
		return (this.state.activePageIndex === (this.props.pages.length - 1));
	}


	/*
	 * Change active page.
	 *
	 */
	changeActivePage(delta) {
		var api, maxApi;
		api = this.state.activePageIndex;
		maxApi = this.props.pages.length - 1;
		api += delta;
		// Make sure active page index is within the bounds of available pages.
		if (api < 0) { api = 0; 
		} else if (api > maxApi) { api = maxApi; }
		// Set state to rerender the page.
		this.setState({ activePageIndex: api });
	}


	/*
	 * Check if mouse wheel is currently enabled.
	 *
	 */
	isMouseWheelEnabled() {
		return (this._allowMouseWheelInteraction === true);
	}


	/*
	 * Disable mouse wheel for a specified interval.
	 *
	 */
	disableMouseWheelForInterval() {
		var interval = 600,
			self = this;
		this._allowMouseWheelInteraction = false;
		setTimeout(function() { self._allowMouseWheelInteraction = true }, interval);
	}

}

export default Layout