webpackHotUpdate(7,{

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(76);

var _assign2 = _interopRequireDefault(_assign);

var _defineProperty2 = __webpack_require__(423);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = __webpack_require__(159);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _littleLoader = __webpack_require__(708);

var _littleLoader2 = _interopRequireDefault(_littleLoader);

var _events = __webpack_require__(709);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mathisonian/projects/mathisonian.github.io/components/idyll/apparatus.js';


var emitter = new _events2.default();

var scriptLoaded = false;
var scriptLoading = false;

//http://stackoverflow.com/questions/4588119/get-elements-css-selector-when-it-doesnt-have-an-id
function fullPath(el) {
  var names = [];
  while (el.parentNode) {
    if (el.id) {
      names.unshift('#' + el.id);
      break;
    } else {
      if (el == el.ownerDocument.documentElement) names.unshift(el.tagName);else {
        for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++) {}
        names.unshift(el.tagName + ":nth-child(" + c + ")");
      }
      el = el.parentNode;
    }
  }
  return names.join(" > ");
}

var Apparatus = function (_React$Component) {
  (0, _inherits3.default)(Apparatus, _React$Component);

  function Apparatus(props) {
    (0, _classCallCheck3.default)(this, Apparatus);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Apparatus.__proto__ || (0, _getPrototypeOf2.default)(Apparatus)).call(this, props));

    _this.state = {
      viewer: null
    };

    _this.handleViewerRender = _this.handleViewerRender.bind(_this);
    _this.handleRef = _this.handleRef.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Apparatus, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (!this.state.viewer) {
        return;
      }
      (0, _keys2.default)(this.props).filter(function (d) {
        return d.indexOf('_') !== 0;
      }).filter(function (d) {
        return ['error', 'children'].indexOf(d) === -1;
      }).forEach(function (d) {
        var currentValue = _this2.props[d];
        var newValue = nextProps[d];
        if (currentValue !== newValue) {
          var attribute = _this2.state.viewer.getAttributeByLabel(d);
          attribute.setExpression(newValue);
        }
      });
    }
  }, {
    key: 'handleViewerRender',
    value: function handleViewerRender() {
      var _this3 = this;

      (0, _keys2.default)(this.props).filter(function (d) {
        return d.indexOf('_') !== 0;
      }).filter(function (d) {
        return ['error', 'children'].indexOf(d) === -1;
      }).forEach(function (d) {
        var currentValue = _this3.props[d];
        try {
          var attribute = _this3.state.viewer.getAttributeByLabel(d);
          var apparatusValue = attribute.value();
          if (currentValue !== apparatusValue) {
            _this3.props.updateProps((0, _defineProperty3.default)({}, d, apparatusValue));
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'initializeViewer',
    value: function initializeViewer() {
      if (!this._ref || this.state.viewer) {
        return;
      }
      console.log('initializing viewer');
      console.log({
        url: this.props._url,
        selector: fullPath(this._ref),
        regionOfInterest: this.props._regionOfInterest,
        onRender: this.handleViewerRender
      });
      this.setState({
        viewer: new ApparatusViewer({
          url: this.props._url,
          selector: fullPath(this._ref),
          regionOfInterest: this.props._regionOfInterest,
          onRender: this.handleViewerRender
        })
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this4 = this;

      if (!scriptLoaded && !scriptLoading) {
        scriptLoading = true;
        (0, _littleLoader2.default)("https://rawgit.com/cdglabs/apparatus-site/gh-pages/editor/dist/apparatus-viewer.js", function (err) {
          console.log('script loaded');
          if (!err) {
            console.log('no error');
            scriptLoaded = true;
            scriptLoading = false;
            _this4.initializeViewer();
            emitter.emit('scriptloaded');
          }
        });
      } else if (scriptLoaded) {
        this.initializeViewer();
      } else {
        emitter.on('scriptloaded', function () {
          _this4.initializeViewer();
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'handleRef',
    value: function handleRef(el) {
      // console.log()
      this._ref = el;
      if (scriptLoaded) {
        this.initializeViewer();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props = this.props,
          className = _props.className,
          _width = _props._width,
          _height = _props._height,
          style = _props.style;

      return _react2.default.createElement('div', { ref: function ref(el) {
          return _this5.handleRef(el);
        }, className: className, style: (0, _assign2.default)({ margin: '30px auto', width: _width ? _width : '100%', height: _height ? _height : 'auto' }, style), __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      });
    }
  }]);

  return Apparatus;
}(_react2.default.Component);

module.exports = Apparatus;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaWR5bGwvYXBwYXJhdHVzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwibG9hZCIsIkV2ZW50RW1pdHRlciIsImVtaXR0ZXIiLCJzY3JpcHRMb2FkZWQiLCJzY3JpcHRMb2FkaW5nIiwiZnVsbFBhdGgiLCJlbCIsIm5hbWVzIiwicGFyZW50Tm9kZSIsImlkIiwidW5zaGlmdCIsIm93bmVyRG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJ0YWdOYW1lIiwiYyIsImUiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiam9pbiIsIkFwcGFyYXR1cyIsInByb3BzIiwic3RhdGUiLCJ2aWV3ZXIiLCJoYW5kbGVWaWV3ZXJSZW5kZXIiLCJiaW5kIiwiaGFuZGxlUmVmIiwibmV4dFByb3BzIiwiZmlsdGVyIiwiZCIsImluZGV4T2YiLCJmb3JFYWNoIiwiY3VycmVudFZhbHVlIiwibmV3VmFsdWUiLCJhdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVCeUxhYmVsIiwic2V0RXhwcmVzc2lvbiIsImFwcGFyYXR1c1ZhbHVlIiwidmFsdWUiLCJ1cGRhdGVQcm9wcyIsIl9yZWYiLCJjb25zb2xlIiwibG9nIiwidXJsIiwiX3VybCIsInNlbGVjdG9yIiwicmVnaW9uT2ZJbnRlcmVzdCIsIl9yZWdpb25PZkludGVyZXN0Iiwib25SZW5kZXIiLCJzZXRTdGF0ZSIsIkFwcGFyYXR1c1ZpZXdlciIsImVyciIsImluaXRpYWxpemVWaWV3ZXIiLCJlbWl0Iiwib24iLCJjbGFzc05hbWUiLCJfd2lkdGgiLCJfaGVpZ2h0Iiwic3R5bGUiLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsIkNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sVUFBTixBQUFnQixBQUFJOztBQUVwQixJQUFJLGVB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QUFFUyxJQUFJLEFBQ1o7QUFDQTtXQUFBLEFBQUssT0FBTCxBQUFZLEFBQ1o7VUFBQSxBQUFJLGNBQWMsQUFDaEI7YUFBQSxBQUFLLEFBQ047QUFDRjs7Ozs2QkFFUTttQkFBQTs7bUJBQ3VDLEtBRHZDLEFBQzRDO1VBRDVDLEFBQ0MsbUJBREQsQUFDQztVQURELEFBQ1ksZ0JBRFosQUFDWTtVQURaLEFBQ29CLGlCQURwQixBQUNvQjtVQURwQixBQUM2QixlQUQ3QixBQUM2QixBQUNwQzs7b0RBQ08sS0FBSyxhQUFBLEFBQUMsSUFBRDtpQkFBUSxPQUFBLEFBQUssVUFBYixBQUFRLEFBQWU7QUFBakMsV0FBc0MsV0FBdEMsQUFBaUQsV0FBVyxPQUFPLHNCQUFjLEVBQUUsUUFBRixBQUFVLGFBQWEsT0FBTyxTQUFBLEFBQVMsU0FBdkMsQUFBK0MsUUFBUSxRQUFRLFVBQUEsQUFBVSxVQUF2RixBQUFjLEFBQW1GLFVBQXBLLEFBQW1FLEFBQTBHO29CQUE3SztzQkFERixBQUNFLEFBRUg7QUFGRztPQUFBOzs7OztFQTdHa0IsZ0JBQU0sQTs7QUFrSDlCLE9BQUEsQUFBTyxVQUFQLEFBQWlCIiwiZmlsZSI6ImFwcGFyYXR1cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0aGlzb25pYW4vcHJvamVjdHMvbWF0aGlzb25pYW4uZ2l0aHViLmlvIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/mathisonian/projects/mathisonian.github.io/components/idyll/apparatus.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mathisonian/projects/mathisonian.github.io/components/idyll/apparatus.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy40ZDQzNjE5MDRmZjAzOWNjZjljZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pZHlsbC9hcHBhcmF0dXMuanM/MWEzMWViYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGxvYWQgZnJvbSAnbGl0dGxlLWxvYWRlcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRzJztcblxuY29uc3QgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxubGV0IHNjcmlwdExvYWRlZCA9IGZhbHNlO1xubGV0IHNjcmlwdExvYWRpbmcgPSBmYWxzZTtcblxuXG4vL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDU4ODExOS9nZXQtZWxlbWVudHMtY3NzLXNlbGVjdG9yLXdoZW4taXQtZG9lc250LWhhdmUtYW4taWRcbmZ1bmN0aW9uIGZ1bGxQYXRoKGVsKXtcbiAgdmFyIG5hbWVzID0gW107XG4gIHdoaWxlIChlbC5wYXJlbnROb2RlKXtcbiAgICBpZiAoZWwuaWQpe1xuICAgICAgbmFtZXMudW5zaGlmdCgnIycrZWwuaWQpO1xuICAgICAgYnJlYWs7XG4gICAgfWVsc2V7XG4gICAgICBpZiAoZWw9PWVsLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSBuYW1lcy51bnNoaWZ0KGVsLnRhZ05hbWUpO1xuICAgICAgZWxzZXtcbiAgICAgICAgZm9yICh2YXIgYz0xLGU9ZWw7ZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO2U9ZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLGMrKyk7XG4gICAgICAgIG5hbWVzLnVuc2hpZnQoZWwudGFnTmFtZStcIjpudGgtY2hpbGQoXCIrYytcIilcIik7XG4gICAgICB9XG4gICAgICBlbD1lbC5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmFtZXMuam9pbihcIiA+IFwiKTtcbn1cblxuXG5jbGFzcyBBcHBhcmF0dXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aWV3ZXI6IG51bGxcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZVZpZXdlclJlbmRlciA9IHRoaXMuaGFuZGxlVmlld2VyUmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVSZWYgPSB0aGlzLmhhbmRsZVJlZi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUudmlld2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmZpbHRlcigoZCkgPT4ge1xuICAgICAgcmV0dXJuIGQuaW5kZXhPZignXycpICE9PSAwO1xuICAgIH0pLmZpbHRlcigoZCkgPT4ge1xuICAgICAgcmV0dXJuIFsnZXJyb3InLCAnY2hpbGRyZW4nXS5pbmRleE9mKGQpID09PSAtMTtcbiAgICB9KS5mb3JFYWNoKChkKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLnByb3BzW2RdO1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBuZXh0UHJvcHNbZF07XG4gICAgICBpZiAoY3VycmVudFZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSB0aGlzLnN0YXRlLnZpZXdlci5nZXRBdHRyaWJ1dGVCeUxhYmVsKGQpO1xuICAgICAgICBhdHRyaWJ1dGUuc2V0RXhwcmVzc2lvbihuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVWaWV3ZXJSZW5kZXIoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5wcm9wcykuZmlsdGVyKChkKSA9PiB7XG4gICAgICByZXR1cm4gZC5pbmRleE9mKCdfJykgIT09IDA7XG4gICAgfSkuZmlsdGVyKChkKSA9PiB7XG4gICAgICByZXR1cm4gWydlcnJvcicsICdjaGlsZHJlbiddLmluZGV4T2YoZCkgPT09IC0xO1xuICAgIH0pLmZvckVhY2goKGQpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMucHJvcHNbZF07XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSB0aGlzLnN0YXRlLnZpZXdlci5nZXRBdHRyaWJ1dGVCeUxhYmVsKGQpO1xuICAgICAgICBjb25zdCBhcHBhcmF0dXNWYWx1ZSA9IGF0dHJpYnV0ZS52YWx1ZSgpO1xuICAgICAgICBpZiAoY3VycmVudFZhbHVlICE9PSBhcHBhcmF0dXNWYWx1ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlUHJvcHMoe1xuICAgICAgICAgICAgW2RdOiBhcHBhcmF0dXNWYWx1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2goZSkge1xuXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGluaXRpYWxpemVWaWV3ZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9yZWYgfHwgdGhpcy5zdGF0ZS52aWV3ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2luaXRpYWxpemluZyB2aWV3ZXInKVxuICAgIGNvbnNvbGUubG9nKHtcbiAgICAgIHVybDogdGhpcy5wcm9wcy5fdXJsLFxuICAgICAgc2VsZWN0b3I6IGZ1bGxQYXRoKHRoaXMuX3JlZiksXG4gICAgICByZWdpb25PZkludGVyZXN0OiB0aGlzLnByb3BzLl9yZWdpb25PZkludGVyZXN0LFxuICAgICAgb25SZW5kZXI6IHRoaXMuaGFuZGxlVmlld2VyUmVuZGVyXG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdlcjogbmV3IEFwcGFyYXR1c1ZpZXdlcih7XG4gICAgICAgIHVybDogdGhpcy5wcm9wcy5fdXJsLFxuICAgICAgICBzZWxlY3RvcjogZnVsbFBhdGgodGhpcy5fcmVmKSxcbiAgICAgICAgcmVnaW9uT2ZJbnRlcmVzdDogdGhpcy5wcm9wcy5fcmVnaW9uT2ZJbnRlcmVzdCxcbiAgICAgICAgb25SZW5kZXI6IHRoaXMuaGFuZGxlVmlld2VyUmVuZGVyXG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCFzY3JpcHRMb2FkZWQgJiYgIXNjcmlwdExvYWRpbmcpIHtcbiAgICAgIHNjcmlwdExvYWRpbmcgPSB0cnVlO1xuICAgICAgbG9hZChcImh0dHBzOi8vcmF3Z2l0LmNvbS9jZGdsYWJzL2FwcGFyYXR1cy1zaXRlL2doLXBhZ2VzL2VkaXRvci9kaXN0L2FwcGFyYXR1cy12aWV3ZXIuanNcIiwgKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc2NyaXB0IGxvYWRlZCcpXG4gICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ25vIGVycm9yJylcbiAgICAgICAgICBzY3JpcHRMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgIHNjcmlwdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmluaXRpYWxpemVWaWV3ZXIoKTtcbiAgICAgICAgICBlbWl0dGVyLmVtaXQoJ3NjcmlwdGxvYWRlZCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHNjcmlwdExvYWRlZCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplVmlld2VyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtaXR0ZXIub24oJ3NjcmlwdGxvYWRlZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplVmlld2VyKCk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBoYW5kbGVSZWYoZWwpIHtcbiAgICAvLyBjb25zb2xlLmxvZygpXG4gICAgdGhpcy5fcmVmID0gZWw7XG4gICAgaWYgKHNjcmlwdExvYWRlZCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplVmlld2VyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBfd2lkdGgsIF9oZWlnaHQsIHN0eWxlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17KGVsKSA9PiB0aGlzLmhhbmRsZVJlZihlbCl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17T2JqZWN0LmFzc2lnbih7IG1hcmdpbjogJzMwcHggYXV0bycsIHdpZHRoOiBfd2lkdGggPyBfd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiBfaGVpZ2h0ID8gX2hlaWdodCA6ICdhdXRvJ30sIHN0eWxlKX0gLz5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwYXJhdHVzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaWR5bGwvYXBwYXJhdHVzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQUE7Ozs7QUFNQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFIQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVJBO0FBWUE7Ozs7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTs7OztBQVNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQVpBO0FBY0E7QUFGQTtBQUdBO0FBRUE7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBOzs7OztBQTdHQTtBQUNBO0FBaUhBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=