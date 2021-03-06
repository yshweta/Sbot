'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _index = require('./index');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reduceArguments(prev, curr) {
    var matches = curr.match(/^dotenv_config_(.+)=(.+)/);
    return hasMatches(matches) ? expandKeyValFromMatches(matches, prev) : prev;
}

var expandKeyValFromMatches = function expandKeyValFromMatches(_ref, prev) {
    var _ref2 = _slicedToArray(_ref, 3),
        key = _ref2[1],
        value = _ref2[2];

    return _extends({}, prev, _defineProperty({}, key, value));
};

var hasMatches = function hasMatches(matches) {
    return matches && matches.length >= 3;
};

var options = process.argv.reduce(reduceArguments, {});

(0, _index.config)(options);