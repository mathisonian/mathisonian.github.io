webpackHotUpdate(6,{

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _tween2 = __webpack_require__(706);

var _tween3 = _interopRequireDefault(_tween2);

var _raf = __webpack_require__(1128);

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mathisonian/projects/mathisonian.github.io/components/idyll/easer.js';


var stages = {
  INITIAL: 0,
  ANIMATING: 1,
  FINAL: 2
};

var Easer = function (_React$PureComponent) {
  (0, _inherits3.default)(Easer, _React$PureComponent);

  function Easer(props) {
    (0, _classCallCheck3.default)(this, Easer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Easer.__proto__ || (0, _getPrototypeOf2.default)(Easer)).call(this, props));

    _this._initialValue = _this.value;
    _this.state = {
      stage: stages.INITIAL
    };
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Easer, [{
    key: 'onClick',
    value: function onClick() {
      var _this2 = this;

      if (this.state.stage !== stages.INITIAL) {
        return;
      }
      this.setState({ stage: stages.ANIMATING });
      var _tween = { value: +this.props.value };
      new _tween3.default.Tween(_tween).to({ value: this.props.targetValue }, 3000).easing(_tween3.default.Easing.Quadratic.InOut).onUpdate(function () {
        _this2.props.updateProps({ value: _tween.value });
      }).onStop(function () {
        _this2.setState({ stage: stages.INITIAL });
      }).start();

      var animate = function animate() {
        var update = _tween3.default.update();
        if (update) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('button', { onClick: this.onClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, this.props.children);
    }
  }]);

  return Easer;
}(_react2.default.PureComponent);

exports.default = Easer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaWR5bGwvZWFzZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUV0VFTiIsInJhZiIsInN0YWdlcyIsIklOSVRJQUwiLCJBTklNQVRJTkciLCJGSU5BTCIsIkVhc2VyIiwicHJvcHMiLCJfaW5pdGlhbFZhbHVlIiwidmFsdWUiLCJzdGF0ZSIsInN0YWdlIiwib25DbGljayIsImJpbmQiLCJzZXRTdGF0ZSIsIl90d2VlbiIsIlR3ZWVuIiwidG8iLCJ0YXJnZXRWYWx1ZSIsImVhc2luZyIsIkVhc2luZyIsIlF1YWRyYXRpYyIsIkluT3V0Iiwib25VcGRhdGUiLCJ1cGRhdGVQcm9wcyIsIm9uU3RvcCIsInN0YXJ0IiwiYW5pbWF0ZSIsInVwZGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNoaWxkcmVuIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU07V0FBUyxBQUNKLEFBQ1Q7YUFGYSxBQUVGLEFBQ1g7U0FIRixBQUFlLEFBR047QUFITSxBQUNiOztJLEFBS0k7aUNBRUo7O2lCQUFBLEFBQVksT0FBTzt3Q0FBQTs7b0lBQUEsQUFDWCxBQUVOOztVQUFBLEFBQUssZ0JBQWdCLE1BQXJCLEFBQTBCLEFBQzFCO1VBQUEsQUFBSzthQUNJLE9BRFQsQUFBYSxBQUNHLEFBRWhCO0FBSGEsQUFDWDtVQUVGLEFBQUssVUFBVSxNQUFBLEFBQUssUUFBTCxBQUFhLEtBUFgsQUFPakI7V0FDRDs7Ozs7OEJBRVM7bUJBQ1I7O1VBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFVLE9BQXpCLEFBQWdDLFNBQVMsQUFDdkM7QUFDRDtBQUNEO1dBQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxPQUF0QixBQUFjLEFBQWUsQUFDN0I7VUFBSSxTQUFTLEVBQUUsT0FBUSxDQUFDLEtBQUEsQUFBSyxNQUE3QixBQUFhLEFBQXNCLEFBQ25DO1VBQUksZ0JBQUosQUFBVSxNQUFWLEFBQWdCLFFBQWhCLEFBQ0csR0FBRyxFQUFDLE9BQU8sS0FBQSxBQUFLLE1BRG5CLEFBQ00sQUFBbUIsZUFEekIsQUFDdUMsTUFEdkMsQUFFRyxPQUFPLGdCQUFBLEFBQU0sT0FBTixBQUFhLFVBRnZCLEFBRWlDLE9BRmpDLEFBR0csU0FBUyxZQUFNLEFBQ2Q7ZUFBQSxBQUFLLE1BQUwsQUFBVyxZQUFZLEVBQUUsT0FBTyxPQUFoQyxBQUF1QixBQUFnQixBQUN4QztBQUxILFNBQUEsQUFLSyxPQUFPLFlBQU0sQUFDZDtlQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sT0FBdEIsQUFBYyxBQUFlLEFBQzlCO0FBUEgsU0FBQSxBQU9LLEFBRUw7O1VBQU0sVUFBVSxTQUFWLEFBQVUsVUFBTSxBQUNwQjtZQUFNLFNBQVMsZ0JBQWYsQUFBZSxBQUFNLEFBQ3JCO1lBQUEsQUFBSSxRQUFRLEFBQ1Y7Z0NBQUEsQUFBc0IsQUFDdkI7QUFDRjtBQUxELEFBT0E7O0FBQ0Q7Ozs7NkJBRVEsQUFDUDs2QkFDRSxjQUFBLFlBQVEsU0FBUyxLQUFqQixBQUFzQjtvQkFBdEI7c0JBQUEsQUFDRztBQURIO09BQUEsT0FDRyxBQUFLLE1BRlYsQUFDRSxBQUNjLEFBR2pCOzs7OztFQTNDaUIsZ0JBQU0sQSxBQStDMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZWFzZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdGhpc29uaWFuL3Byb2plY3RzL21hdGhpc29uaWFuLmdpdGh1Yi5pbyJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/mathisonian/projects/mathisonian.github.io/components/idyll/easer.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mathisonian/projects/mathisonian.github.io/components/idyll/easer.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5mZDU2YWZjN2UyMTkwMjQxNTY4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pZHlsbC9lYXNlci5qcz9hMWVjMmM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVFdFRU4gZnJvbSAndHdlZW4uanMnO1xuaW1wb3J0IHJhZiBmcm9tICdyYWYnO1xuXG5jb25zdCBzdGFnZXMgPSB7XG4gIElOSVRJQUw6IDAsXG4gIEFOSU1BVElORzogMSxcbiAgRklOQUw6IDJcbn1cblxuY2xhc3MgRWFzZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuX2luaXRpYWxWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YWdlOiBzdGFnZXMuSU5JVElBTFxuICAgIH07XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbkNsaWNrKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnN0YWdlICE9PSBzdGFnZXMuSU5JVElBTCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtzdGFnZTogc3RhZ2VzLkFOSU1BVElOR30pO1xuICAgIGxldCBfdHdlZW4gPSB7IHZhbHVlIDogK3RoaXMucHJvcHMudmFsdWUgfTtcbiAgICBuZXcgVFdFRU4uVHdlZW4oX3R3ZWVuKVxuICAgICAgLnRvKHt2YWx1ZTogdGhpcy5wcm9wcy50YXJnZXRWYWx1ZX0sIDMwMDApXG4gICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFkcmF0aWMuSW5PdXQpXG4gICAgICAub25VcGRhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVByb3BzKHsgdmFsdWU6IF90d2Vlbi52YWx1ZSB9KTtcbiAgICAgIH0pLm9uU3RvcCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YWdlOiBzdGFnZXMuSU5JVElBTCB9KTtcbiAgICAgIH0pLnN0YXJ0KCk7XG5cbiAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICAgICAgY29uc3QgdXBkYXRlID0gVFdFRU4udXBkYXRlKCk7XG4gICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgYW5pbWF0ZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25DbGlja30+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEVhc2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9pZHlsbC9lYXNlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTs7QUFNQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUpBO0FBTUE7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7Ozs7QUF2Q0E7QUFDQTtBQThDQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9