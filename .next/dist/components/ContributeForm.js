'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../etherium/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../etherium/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\saipr\\kickstart\\components\\ContributeForm.js';


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      errorMessage: '',
      loading: false

    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault(); //prevent loading  itself

                //the prop.address coming from show.js
                campaign = (0, _campaign2.default)(_this.props.address); // declared above our contract instance.

                _this.setState({ loading: true, errorMessage: '' });

                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return campaign.methods.contribute().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.value, 'ether')
                });

              case 9:

                _routes.Router.replaceRoute('/Campaigns/' + _this.props.address);

                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 15:

                _this.setState({ loading: false, value: '' });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Amount to Contribute'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        label: 'ether',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'OOPS! There was some errors with your submission',
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, ' Contribute! '));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkNhbXBhaWduIiwid2ViMyIsIlJvdXRlciIsIkNvbnRyaWJ1dGVGb3JtIiwic3RhdGUiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVMsQUFBTSxBQUFRLEFBQU87O0FBQzlCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0lBRWpCLEE7Ozs7Ozs7Ozs7Ozs7Ozs0TixBQUVKO2FBQVEsQUFDRSxBQUNSO29CQUZNLEFBRVMsQUFDZjtlLEFBSE0sQUFHSTs7QUFISixBQUNOLGFBTUYsQTsyRkFBVyxpQkFBQSxBQUFPLE9BQVA7c0JBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBRFMsQUFDVCxBQUFNLGtCQUFrQixBQUV4Qjs7QUFDTTtBQUpHLDJCQUlRLHdCQUFTLE1BQUEsQUFBSyxNQUp0QixBQUlRLEFBQW9CLFVBQVMsQUFFOUM7O3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVyxNQUFPLGNBTnZCLEFBTVQsQUFBYyxBQUFpQzs7Z0NBTnRDO2dDQUFBO3VCQVVvQixjQUFBLEFBQUssSUFWekIsQUFVb0IsQUFBUzs7bUJBQTFCO0FBVkgsb0NBQUE7Z0NBQUE7Z0NBWUcsQUFBUyxRQUFULEFBQ0wsYUFESyxBQUVMO3dCQUNVLFNBREosQUFDSSxBQUFTLEFBQ2hCO3lCQUFRLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxNQUFBLEFBQUssTUFBdEIsQUFBNEIsT0FoQnJDLEFBWUcsQUFFQyxBQUVLLEFBQW1DO0FBRnhDLEFBQ0gsaUJBSEU7O21CQU9GOzsrQkFBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUFuQnhDLEFBbUJDLEFBQTZDOztnQ0FuQjlDO0FBQUE7O21CQUFBO2dDQUFBO2dEQXNCQzs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBZSxZQXRCL0IsQUFzQkMsQUFBYyxBQUFvQjs7bUJBR3hDOztzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVcsT0FBTyxPQXpCM0IsQUF5QkwsQUFBYyxBQUEwQjs7bUJBekJuQzttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7OzZCQThCRDttQkFFUjs7NkJBQ0UsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO29CQUFuRDtzQkFBQSxBQUNJO0FBREo7T0FBQSxrQkFDSyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0k7QUFESjtBQUFBLHlCQUNJLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURKLEFBQ0ksQUFDQSx5Q0FBQSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxPQUFRLE1BQUEsQUFBTSxPQUF0QyxBQUFTLEFBQWMsQUFBc0I7QUFGekQsQUFHRTtlQUhGLEFBR1EsQUFDTjt1QkFKRixBQUlnQjs7b0JBSmhCO3NCQUhSLEFBQ0ksQUFFSSxBQVFGO0FBUkU7QUFDRSwyQkFPSixBQUFDO2VBQUQsQUFFSTtnQkFGSixBQUVXLEFBQ1A7aUJBQVMsS0FBQSxBQUFLLE1BSGxCLEFBR3dCOztvQkFIeEI7c0JBWE4sQUFXTSxBQUtGO0FBTEU7QUFDSSwwQkFJTixBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7b0JBQUE7c0JBQUE7QUFBQTtTQWpCTixBQUNFLEFBZ0JJLEFBS1A7Ozs7O0FBL0QwQixBLEFBbUU3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9zYWlwci9raWNrc3RhcnQifQ==