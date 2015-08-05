Comp.Pages = class extends React.Component {

	constructor(props) {
		super(props);
		this.state = { pageWidth: 0 };
	}

	render() {

		var pageHeight = document.body.offsetHeight,
			style = {
			transform: `translate3d(0, -${this.props.activePageIndex * pageHeight}px, 0)`,
			transition: 'transform 500ms cubic-bezier(0, 0, 0.25, 1)',
			height: `${100 * this.props.pages.length}%`
		};

		return (
			<ul className='ar__pages' ref='container' style={style}>
				{ this.renderPages() }
			</ul>
		);

	}

	renderPages() {
		var pagesCount = this.props.pages.length;
		return this.props.pages.map(function(page, i) {
			return (
				<Comp.Page page={page} pagesCount={pagesCount} key={i} />
			);
		});
	}

	componentDidMount() {
		var self = this;
		$(window).on('resize.pages', function() {
			self.setState();
			console.log('resizing');
		});
	}

	componentWillUnmount() {
		$(window).off('resize.pages');
	}

}

Comp.Page = class extends React.Component {

	render() {
		var style = {
			height: `${100 / this.props.pagesCount}%`
		};
		return (
			<li className='ar__page' style={ style } >
				<div className='ar__page__content'>
					<div>
						{ this.props.page.content }
					</div>
				</div>
			</li>
		);
	}

}