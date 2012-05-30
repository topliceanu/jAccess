var mocha = require('mocha');
var assert = require('assert');

var jAccess = require('./../jAccess.js');

// fixture
var obj = {
	prop1: {
		prop2: [1, {
			prop3: 'ok',
			prop4: 'done'
		}]
	}
};


describe('jAccess', function () {

	describe('test direct access', function () {
		it('should select through normal and array accessor', function () {
			debugger;
			var actual = jAccess(obj, 'prop1.prop2[1].prop3');
			assert.equal(actual, 'ok');
		});

		it('should return `undefined`', function () {
			debugger;
			var actual = jAccess(obj, 'prop1.prop2[0].prop3');
			assert.equal(actual, undefined); 
		});

		it('should select through normal, array and string accessors', function () {
			debugger;
			var actual = jAccess(obj, 'prop1.prop2[1]["prop4"]');
			assert.equal(actual, 'done'); 
		});
	});

});
