Comp.Pages = class extends React.Component {

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
				<Comp.Page 
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
		var self = this;
		$(window).on('resize.pages', function() {
			self.setState();
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

Comp.Page = class extends React.Component {


	/*
	 *
	 *
	 */
	render() {
		var style = {
			height: `${100 / this.props.pagesCount}%`
		};
		var className = this.props.isActive ? 'ar__page ar__page--active' : 'ar__page';
		return (
			<li className={ className } style={ style } >
				<div className='ar__page__content'>
					<div className='split'>
						<div className='split__1'>
							<div>
								<h1>{ this.props.page.title }</h1>
								<div className='split__right-circle'></div>
							</div>
						</div>
						<div className='split__2'>
							<div>
								<p dangerouslySetInnerHTML={{__html: this.props.page.content}}>
								</p>
							</div>
						</div>
					</div>
				</div>
			</li>
		);
	}

}