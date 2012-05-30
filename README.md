jAccess
=======

small function that works like the `?.` operator in coffeescript

i.e it tries to return the requested key chain of an object. If it fails, it returns undefined instead of throwing an error

various accessors are supported in the query string (see _Use case_)


API
---

jAccess( data: Object [, query: String] ) : mixed

* data: Object - the query is run against this object

* query: String (Optional) - chain of accessor keys defined by `.` or `[  ]`
													 
*Returns* 
	if `query` is present, jAccess returns the value or undefined
	if `query` is not present, jAccess returns an object whos only method is `get` 

`get = function (query) {}` - runs a given query on the data object. Usefull for multiple queries on the same object


Use case
--------

	var largeObject;

	var db = jAccess(largeObject);
	var value = db.get('prop1.prop2["prop3"][prop4][0].prop5'); 

	// alternatively
	var value = jAccess(largeObject, 'prop1.prop2["prop3"][prop4][0].prop5');

	// value is either undefined or the value of largeObject.prop1.prop2.prop3.prop4[0].prop5. 
	// no expceptions are thrown
