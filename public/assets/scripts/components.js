'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comp = {
	Icons: {}
};

Comp.Layout = (function (_React$Component) {
	_inherits(_class, _React$Component);

	function _class(props) {
		_classCallCheck(this, _class);

		_get(Object.getPrototypeOf(_class.prototype), 'constructor', this).call(this, props);
		this.state = {
			activePageIndex: 0
		};
		// This instance variable keeps track of whether mouse wheel interactions are allowed.
		// It is set to false when mouse wheel interaction happens, and set to true again
		//   after an interval.
		this._allowMouseWheelInteraction = true;
	}

	_createClass(_class, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'ar' },
				React.createElement(Comp.Header, null),
				React.createElement(Comp.Pages, {
					pages: this.props.pages,
					activePageIndex: this.state.activePageIndex
				}),
				React.createElement(
					'div',
					{ className: 'ar__nav' },
					this.renderTopButton(),
					this.renderBottomButton()
				),
				React.createElement('div', { className: 'ar__mid-bar' }),
				React.createElement(Comp.Footer, null)
			);
		}

		// Render helper.
	}, {
		key: 'renderTopButton',
		value: function renderTopButton() {
			if (this.isUserOnFirstPage()) {
				return;
			}
			return React.createElement(
				'div',
				{ className: 'ar__nav__button ar__nav__button--left', onClick: this.changeActivePage.bind(this, -1) },
				React.createElement(Comp.Icons.Arrow, { rotate: 90 })
			);
		}

		// Render helper.
	}, {
		key: 'renderBottomButton',
		value: function renderBottomButton() {
			if (this.isUserOnLastPage()) {
				return;
			}
			return React.createElement(
				'div',
				{ className: 'ar__nav__button ar__nav__button--right', onClick: this.changeActivePage.bind(this, +1) },
				React.createElement(Comp.Icons.Arrow, { rotate: 270 })
			);
		}

		// Checks if user is on first page.
	}, {
		key: 'isUserOnFirstPage',
		value: function isUserOnFirstPage() {
			return this.state.activePageIndex === 0;
		}

		// Checks if user is on last page.
	}, {
		key: 'isUserOnLastPage',
		value: function isUserOnLastPage() {
			return this.state.activePageIndex === this.props.pages.length - 1;
		}

		// Change active page.
	}, {
		key: 'changeActivePage',
		value: function changeActivePage(delta) {
			var api, maxApi;
			api = this.state.activePageIndex;
			maxApi = this.props.pages.length - 1;
			api += delta;
			// Make sure active page index is within the bounds of available pages.
			if (api < 0) {
				api = 0;
			} else if (api > maxApi) {
				api = maxApi;
			}
			// Set state to rerender the page.
			this.setState({ activePageIndex: api });
		}

		// Check if mouse wheel is currently enabled.
	}, {
		key: 'isMouseWheelEnabled',
		value: function isMouseWheelEnabled() {
			return this._allowMouseWheelInteraction === true;
		}

		// Disable mouse wheel for a specified interval.
	}, {
		key: 'disableMouseWheelForInterval',
		value: function disableMouseWheelForInterval() {
			var interval = 600,
			    self = this;
			this._allowMouseWheelInteraction = false;
			setTimeout(function () {
				self._allowMouseWheelInteraction = true;
			}, interval);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this = this;

			$('body').on('mousewheel.layout', function (e) {
				var delta;
				if (_this.isMouseWheelEnabled()) {
					if (Math.abs(e.deltaY) > 20) {
						delta = e.deltaY < 0 ? 1 : -1;
						_this.changeActivePage(delta);
						_this.disableMouseWheelForInterval();
					}
				}
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			$('body').off('mousewheel.layout');
		}
	}]);

	return _class;
})(React.Component);
Comp.Footer = (function (_React$Component2) {
	_inherits(_class2, _React$Component2);

	function _class2() {
		_classCallCheck(this, _class2);

		_get(Object.getPrototypeOf(_class2.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(_class2, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'footer',
				{ className: 'ar__footer' },
				React.createElement(
					'a',
					{ className: 'ar__footer__text-link', href: 'public/documents/PDF-AnnualReport.pdf' },
					'Download the full annual report'
				),
				React.createElement(
					'a',
					{ className: 'ar__footer__icon-link', href: 'public/documents/PDF-AnnualReport.pdf' },
					React.createElement(Comp.Icons.Page, null)
				)
			);
		}
	}]);

	return _class2;
})(React.Component);
Comp.Header = (function (_React$Component3) {
	_inherits(_class3, _React$Component3);

	function _class3() {
		_classCallCheck(this, _class3);

		_get(Object.getPrototypeOf(_class3.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(_class3, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'header',
				{ className: 'ar__header' },
				React.createElement(Comp.Icons.Naf, null),
				React.createElement(
					'h1',
					null,
					'New America'
				)
			);
		}
	}]);

	return _class3;
})(React.Component);
Comp.Icons.OldArrow = (function (_React$Component4) {
	_inherits(_class4, _React$Component4);

	function _class4() {
		_classCallCheck(this, _class4);

		_get(Object.getPrototypeOf(_class4.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(_class4, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'svg',
				{ viewBox: '0 0 32 64', transform: 'rotate(180)' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { transform: 'rotate(' + this.props.rotate + ' 16 32)', d: 'M23.877,64c-0.617,0-1.227-0.284-1.618-0.821l-21.875-30c-0.513-0.704-0.512-1.659,0.003-2.361l22-30 c0.654-0.89,1.904-1.084,2.796-0.43c0.891,0.653,1.083,1.905,0.431,2.795L4.478,32.003l21.014,28.818 c0.65,0.893,0.455,2.144-0.438,2.795C24.698,63.875,24.285,64,23.877,64z' })
				)
			);
		}
	}]);

	return _class4;
})(React.Component);

Comp.Icons.Arrow = (function (_React$Component5) {
	_inherits(_class5, _React$Component5);

	function _class5() {
		_classCallCheck(this, _class5);

		_get(Object.getPrototypeOf(_class5.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(_class5, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'svg',
				{ viewBox: '0 0 100 100', transform: 'rotate(180)' },
				React.createElement(
					'g',
					{ transform: 'rotate(' + (this.props.rotate - 90) + ' 50 50)' },
					React.createElement('polygon', { points: '45.9,98.8 45.9,16.2 33.3,29.3 27.4,23.7 47.1,3.3 50,0.4 52.9,3.3 72.6,23.7 66.7,29.3 54.1,16.2 54.1,98.8 ' })
				)
			);
		}
	}]);

	return _class5;
})(React.Component);

Comp.Icons.Naf = (function (_React$Component6) {
	_inherits(_class6, _React$Component6);

	function _class6() {
		_classCallCheck(this, _class6);

		_get(Object.getPrototypeOf(_class6.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(_class6, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'svg',
				{ viewBox: '0 0 100 100' },
				React.createElement(
					'g',
					null,
					React.createElement('rect', { x: '0.1', y: '72', width: '99.9', height: '14' }),
					React.createElement('rect', { x: '0.1', y: '43.4', width: '99.9', height: '14.3' }),
					React.createElement('rect', { x: '24.7', y: '14.8', width: '75.3', height: '14.3' }),
					React.createElement('path', { d: 'M0,22c0-4.4,3.6-8,8-8c4.4,0,8,3.6,8,8c0,4.4-3.6,8-8,8C3.6,30,0,26.4,0,22' })
				)
			);
		}
	}]);

	return _class6;
})(React.Component);

Comp.Icons.Page = (function (_React$Component7) {
	_inherits(_class7, _React$Component7);

	function _class7() {
		_classCallCheck(this, _class7);

		_get(Object.getPrototypeOf(_class7.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(_class7, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'svg',
				{ viewBox: '0 0 100 100' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M82.4,92.6c0,0.8-0.4,1.1-0.5,1.2H18.1c-0.1,0-0.5-0.4-0.5-1.2V7.4c0-0.8,0.4-1.1,0.5-1.2 h36.6c3.5,0,6.4,2.8,6.5,6.3l0.5,14.4l18.6,3.2c1,0.1,2.1,1.4,2.1,2.4V92.6z M69.3,8.9c-4-4.5-9.8-7.1-15.8-7.1H18.1 c-2.7,0-5,2.5-5,5.6v85.2c0,3.1,2.2,5.6,5,5.6h63.8c2.7,0,5-2.5,5-5.6V31.2c0-1.6-0.6-3.1-1.6-4.3L69.3,8.9z' }),
					React.createElement('rect', { x: '25.1', y: '36.8', width: '50.8', height: '6' }),
					React.createElement('rect', { x: '25.1', y: '22.9', width: '22.2', height: '6' }),
					React.createElement('rect', { x: '24.1', y: '64.9', width: '51.9', height: '6' }),
					React.createElement('rect', { x: '24.1', y: '51', width: '51.9', height: '6' }),
					React.createElement('rect', { x: '24.1', y: '79.1', width: '25.9', height: '6' })
				)
			);
		}
	}]);

	return _class7;
})(React.Component);
Comp.Pages = (function (_React$Component8) {
	_inherits(_class8, _React$Component8);

	function _class8(props) {
		_classCallCheck(this, _class8);

		_get(Object.getPrototypeOf(_class8.prototype), 'constructor', this).call(this, props);
		this.state = { pageWidth: 0 };
	}

	_createClass(_class8, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'ul',
				{ className: 'ar__pages', ref: 'container', style: this.getStyle(), onScroll: this.handleScroll.bind(this) },
				this.renderPages()
			);
		}
	}, {
		key: 'getStyle',
		value: function getStyle() {
			return {
				transform: this.getTransform(),
				transition: 'transform 500ms cubic-bezier(0, 0, 0.25, 1)',
				height: 100 * this.props.pages.length + '%'
			};
		}
	}, {
		key: 'getTransform',
		value: function getTransform() {
			var pageHeight = document.body.offsetHeight,
			    transform = 'translate3d(0, -' + this.props.activePageIndex * pageHeight + 'px, 0)';
			return transform;
		}
	}, {
		key: 'handleScroll',
		value: function handleScroll(e) {
			console.log(e);
		}
	}, {
		key: 'renderPages',
		value: function renderPages() {
			var _this2 = this;

			var pagesCount = this.props.pages.length;
			return this.props.pages.map(function (page, i) {
				console.log(i === _this2.props.activePageIndex);
				return React.createElement(Comp.Page, {
					page: page,
					pagesCount: pagesCount,
					isActive: i === _this2.props.activePageIndex,
					key: i
				});
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var self = this;
			$(window).on('resize.pages', function () {
				self.setState();
				console.log('resizing');
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			$(window).off('resize.pages');
		}
	}]);

	return _class8;
})(React.Component);

Comp.Page = (function (_React$Component9) {
	_inherits(_class9, _React$Component9);

	function _class9() {
		_classCallCheck(this, _class9);

		_get(Object.getPrototypeOf(_class9.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(_class9, [{
		key: 'render',
		value: function render() {
			var style = {
				height: 100 / this.props.pagesCount + '%'
			};
			var className = this.props.isActive ? 'ar__page ar__page--active' : 'ar__page';
			return React.createElement(
				'li',
				{ className: className, style: style },
				React.createElement(
					'div',
					{ className: 'ar__page__content' },
					React.createElement(
						'div',
						{ className: 'split' },
						React.createElement(
							'div',
							{ className: 'split__1' },
							React.createElement(
								'div',
								null,
								React.createElement(
									'h1',
									null,
									this.props.page.title
								),
								React.createElement('div', { className: 'split__right-circle' })
							)
						),
						React.createElement(
							'div',
							{ className: 'split__2' },
							React.createElement(
								'div',
								null,
								React.createElement(
									'p',
									null,
									this.getPageContent()
								)
							)
						)
					)
				)
			);
		}
	}, {
		key: 'getPageContent',
		value: function getPageContent() {
			var content = this.props.page.content;
			// content.replace();
			return content;
		}
	}]);

	return _class9;
})(React.Component);