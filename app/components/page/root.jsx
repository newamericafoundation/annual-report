import React from 'react'
import $ from 'jquery'

import Page from './page.jsx'

var window = global.window || {}

class Pages extends React.Component {

	/*
	 *
	 *
	 */
	constructor(props) {
		super(props);
		this.state = { pageWidth: 0 };
	}


	/*
	 *
	 *
	 */
	render() { 
		return (
			<ul className='ar__pages' ref='container' style={this.getStyle()}>
				{ this.renderPages() }
			</ul>
		);

	}


	/*
	 *
	 *
	 */
	getStyle() {
		var transform = this.getUnprefixedTransform();
		return {
			transform: transform,
			//transform: `-ms-${transform}`,
			WebkitTransform: transform,
			transition: 'transform 500ms cubic-bezier(0, 0, 0.25, 1)',
			//transition: '-ms-transform 500ms cubic-bezier(0, 0, 0.25, 1)',
			WebkitTransition: '-webkit-transform 500ms cubic-bezier(0, 0, 0.25, 1)',
			height: `${100 * this.props.pages.length}%`
		};
	}


	/*
	 *
	 *
	 */
	getUnprefixedTransform() {
		var pageHeight = $(window).height(),
			transform = `translate3d(0, -${this.props.activePageIndex * pageHeight}px, 0)`;
		return transform;
	}


	/*
	 *
	 *
	 */
	renderPages() {
		var pagesCount = this.props.pages.length;
		return this.props.pages.map((page, i) => {
			return (
				<Page 
					page={page}
					pagesCount={pagesCount}
					isActive={i === this.props.activePageIndex}
					key={i} 
				/>
			);
		});
	}


	/*
	 *
	 *
	 */
	componentDidMount() {
		$(window).on('resize.pages', () => {
			this.forceUpdate()
		});
	}


	/*
	 *
	 *
	 */
	componentWillUnmount() {
		$(window).off('resize.pages');
	}

}

export default Pages