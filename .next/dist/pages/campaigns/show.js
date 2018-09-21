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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../etherium/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../etherium/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\saipr\\kickstart\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount;

      var items = [{
        header: manager,
        description: 'The manager created this campaign and can create request for withdraw money',
        meta: 'Address of Manager',
        style: { overflowWrap: 'break-word' }
      }, {
        header: minimumContribution,
        description: 'You must contribute at least this much wei to become a contributor ',
        meta: 'Minimum contribution (wei)'
      }, {
        header: requestsCount,
        description: 'A request tries to withdraw money from the Contract. Requests must be approved by approvers ',
        meta: 'Number of Requests'
      }, {
        header: approversCount,
        description: 'Number of people who have already donated to the campaign',
        meta: 'Number of Approvers'
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether') + " ether",
        description: 'The balance is how much money this campaign has left to spend.',
        meta: 'Campaign balance (ether)'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Campaign show '), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_routes.Link, { route: '/Campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, 'View Requests ')))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIkxheW91dCIsIkNhbXBhaWduIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsIm1ldGEiLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUyxBQUFZOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7a0NBaUJTO21CQVFSLEtBUlEsQUFRSDtVQVJHLEFBR1YsaUJBSFUsQUFHVjtVQUhVLEFBSVYsaUJBSlUsQUFJVjtVQUpVLEFBS1YsNkJBTFUsQUFLVjtVQUxVLEFBTVYsdUJBTlUsQUFNVjtVQU5VLEFBT1Ysd0JBUFUsQUFPVixBQUdGOztVQUFNO2dCQUNGLEFBQ1UsQUFDUjtxQkFGRixBQUVlLEFBQ2I7Y0FIRixBQUdRLEFBQ047ZUFBUSxFQUFDLGNBTEQsQUFDVixBQUlVLEFBQWdCO0FBSjFCLEFBQ0UsT0FGUTtnQkFPVixBQUNVLEFBQ1I7cUJBRkYsQUFFZSxBQUNiO2NBVlEsQUFPVixBQUdRO0FBSFIsQUFDRTtnQkFJRixBQUNVLEFBQ1I7cUJBRkYsQUFFZSxBQUNiO2NBZlEsQUFZVixBQUdRO0FBSFIsQUFDRTtnQkFJRixBQUNVLEFBQ1I7cUJBRkYsQUFFZSxBQUNiO2NBcEJRLEFBaUJWLEFBR1E7QUFIUixBQUNFO2dCQUtRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUFuQixBQUE0QixXQUR0QyxBQUNpRCxBQUMvQztxQkFGRixBQUVlLEFBQ2I7Y0F6Qk4sQUFBYyxBQXNCVixBQUdRLEFBS1Q7QUFSQyxBQUNFOzsyQ0FPSSxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1g7QUFEVztPQUFBOzs7OzZCQUdGLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDSTtBQURKO0FBQUEsT0FBQSxrQkFDSSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FESixBQUNJLEFBQ0EsbUNBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNNO0FBRE47QUFBQSx5QkFDTyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNJO0FBREo7Y0FETixBQUNNLEFBQ0ksQUFBSyxBQUdULGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0s7QUFETDt5QkFDSyxBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO29CQUFwQztzQkFQYixBQUNFLEFBS00sQUFDSyxBQUlWO0FBSlU7NEJBSVQsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNJO0FBREo7QUFBQSx5QkFDSyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0k7QUFESjtBQUFBLHlCQUNJLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztvQkFBQTtzQkFBQSxBQUNHO0FBREg7eUJBQ0csY0FBQTs7b0JBQUE7c0JBQUEsQUFDSTtBQURKO0FBQUEseUJBQ0ksQUFBQyx5Q0FBTyxTQUFSO29CQUFBO3NCQUFBO0FBQUE7U0FsQnhCLEFBQ0UsQUFFSSxBQVdHLEFBQ0ksQUFDSSxBQUNHLEFBQ0ksQUFTekI7Ozs7OzJHQXRGNEIsQTs7Ozs7bUJBQ3JCO0EsMkJBQVcsd0JBQVMsTUFBQSxBQUFNLE1BQU0sQSxBQUFyQjs7dUJBRUssU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQSxBQUE4Qjs7bUJBQTlDO0E7OzJCQUdNLE1BQUEsQUFBTSxNQURYLEFBQ2lCLEFBQ3RCO3VDQUFzQixRQUZqQixBQUVpQixBQUFRLEFBQzlCOzJCQUFXLFFBSE4sQUFHTSxBQUFRLEFBQ25CO2lDQUFpQixRQUpaLEFBSVksQUFBUSxBQUN6QjtrQ0FBa0IsUUFMYixBQUthLEFBQVEsQUFDMUI7MkJBQVcsUUFOTixBQU1NLEFBQVEsQTtBQU5kLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFScUIsQSxBQTRGM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9zYWlwci9raWNrc3RhcnQifQ==