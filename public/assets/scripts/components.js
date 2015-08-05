"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comp = {
	Buttons: {}
};

Comp.Layout = (function (_React$Component) {
	_inherits(_class, _React$Component);

	function _class(props) {
		_classCallCheck(this, _class);

		_get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, props);
		this.state = {
			activePageIndex: 0
		};
		// This instance variable keeps track of whether mouse wheel interactions are allowed.
		// It is set to false when mouse wheel interaction happens, and set to true again
		//   after an interval.
		this._allowMouseWheelInteraction = true;
	}

	_createClass(_class, [{
		key: "render",
		value: function render() {
			return React.createElement("div", { className: "ar" }, React.createElement(Comp.Pages, { pages: this.props.pages, activePageIndex: this.state.activePageIndex }), React.createElement("div", { className: "ar__nav" }, this.renderTopButton(), this.renderBottomButton()));
		}

		// Render helper.
	}, {
		key: "renderTopButton",
		value: function renderTopButton() {
			if (this.isUserOnFirstPage()) {
				return;
			}
			return React.createElement("div", { className: "ar__nav__button ar__nav__button--left", onClick: this.changeActivePage.bind(this, -1) }, React.createElement(Comp.Buttons.Arrow, { rotate: 90 }));
		}

		// Render helper.
	}, {
		key: "renderBottomButton",
		value: function renderBottomButton() {
			if (this.isUserOnLastPage()) {
				return;
			}
			return React.createElement("div", { className: "ar__nav__button ar__nav__button--right", onClick: this.changeActivePage.bind(this, +1) }, React.createElement(Comp.Buttons.Arrow, { rotate: 270 }));
		}

		// Checks if user is on first page.
	}, {
		key: "isUserOnFirstPage",
		value: function isUserOnFirstPage() {
			return this.state.activePageIndex === 0;
		}

		// Checks if user is on last page.
	}, {
		key: "isUserOnLastPage",
		value: function isUserOnLastPage() {
			return this.state.activePageIndex === this.props.pages.length - 1;
		}

		// Change active page.
	}, {
		key: "changeActivePage",
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
		key: "isMouseWheelEnabled",
		value: function isMouseWheelEnabled() {
			return this._allowMouseWheelInteraction === true;
		}

		// Disable mouse wheel for a specified interval.
	}, {
		key: "disableMouseWheelForInterval",
		value: function disableMouseWheelForInterval() {
			var interval = 400,
			    self = this;
			this._allowMouseWheelInteraction = false;
			setTimeout(function () {
				self._allowMouseWheelInteraction = true;
			}, interval);
		}
	}, {
		key: "componentDidMount",
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
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			$('body').off('mousewheel.layout');
		}
	}]);

	return _class;
})(React.Component);
Comp.Buttons.Arrow = (function (_React$Component2) {
	_inherits(_class2, _React$Component2);

	function _class2() {
		_classCallCheck(this, _class2);

		_get(Object.getPrototypeOf(_class2.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(_class2, [{
		key: "render",
		value: function render() {
			return React.createElement("div", { className: "button" }, React.createElement("svg", { viewBox: "0 0 32 64", transform: "rotate(180)" }, React.createElement("g", null, React.createElement("path", { fill: "#FFFFFF", transform: "rotate(" + this.props.rotate + " 16 32)", d: "M23.877,64c-0.617,0-1.227-0.284-1.618-0.821l-21.875-30c-0.513-0.704-0.512-1.659,0.003-2.361l22-30" + ' ' + "c0.654-0.89,1.904-1.084,2.796-0.43c0.891,0.653,1.083,1.905,0.431,2.795L4.478,32.003l21.014,28.818" + ' ' + "c0.65,0.893,0.455,2.144-0.438,2.795C24.698,63.875,24.285,64,23.877,64z" }))));
		}
	}]);

	return _class2;
})(React.Component);
Comp.Pages = (function (_React$Component3) {
	_inherits(_class3, _React$Component3);

	function _class3(props) {
		_classCallCheck(this, _class3);

		_get(Object.getPrototypeOf(_class3.prototype), "constructor", this).call(this, props);
		this.state = { pageWidth: 0 };
	}

	_createClass(_class3, [{
		key: "render",
		value: function render() {

			var pageHeight = document.body.offsetHeight,
			    style = {
				transform: "translate3d(0, -" + this.props.activePageIndex * pageHeight + "px, 0)",
				transition: 'transform 500ms cubic-bezier(0, 0, 0.25, 1)',
				height: 100 * this.props.pages.length + "%"
			};

			return React.createElement("ul", { className: "ar__pages", ref: "container", style: style }, this.renderPages());
		}
	}, {
		key: "renderPages",
		value: function renderPages() {
			var pagesCount = this.props.pages.length;
			return this.props.pages.map(function (page, i) {
				return React.createElement(Comp.Page, { page: page, pagesCount: pagesCount, key: i });
			});
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var self = this;
			$(window).on('resize.pages', function () {
				self.setState();
				console.log('resizing');
			});
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			$(window).off('resize.pages');
		}
	}]);

	return _class3;
})(React.Component);

Comp.Page = (function (_React$Component4) {
	_inherits(_class4, _React$Component4);

	function _class4() {
		_classCallCheck(this, _class4);

		_get(Object.getPrototypeOf(_class4.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(_class4, [{
		key: "render",
		value: function render() {
			var style = {
				height: 100 / this.props.pagesCount + "%"
			};
			return React.createElement("li", { className: "ar__page", style: style }, React.createElement("div", { className: "ar__page__content" }, React.createElement("div", null, this.props.page.content)));
		}
	}]);

	return _class4;
})(React.Component);