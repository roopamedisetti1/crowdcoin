'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

//see if we are running in browser
if (typeof window !== 'undefined' && typeof window.web3 != 'undefined') {
  //we are in browser and metamask is running
  //metamask uses its own web3
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  //we are on server and user is not running metamask
  //we will infura and connect to rinkeby

  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/a39f89fd558f413ea1d51e2714fcd5c5');

  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyaXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBSSxZQUFKOztBQUVBO0FBQ0EsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBa0MsT0FBTyxPQUFPLEFBQWQsUUFBc0IsQUFBNUQsYUFBMEUsQUFDeEU7QUFDRjtBQUNFO1NBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFFQztBQUxILE9BS1MsQUFDTDtBQUNBO0FBRUE7O01BQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ2QsQUFEYyxBQUFqQixBQUlBOztTQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDSDtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvc2FpcHIva2lja3N0YXJ0In0=