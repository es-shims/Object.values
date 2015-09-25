'use strict';

var ES = require('es-abstract/es7');
var keys = require('object-keys');
var has = require('has');

module.exports = function values(O) {
	var obj = ES.RequireObjectCoercible(O);
	var objKeys = keys(obj);
	var vals = [];
	for (var i = 0; i < objKeys.length; ++i) {
		if (has(obj, objKeys[i])) {
			vals.push(obj[objKeys[i]]);
		}
	}
	return vals;
};
