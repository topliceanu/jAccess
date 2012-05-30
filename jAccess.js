var jAccess = function (obj, accessor) {
	var _typeof = function (obj) {
			return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
		},

		split = function (str) {
			var splits = str.split(/(\.|\[|\]|'|"/ig), 
					i = 0, n = splits.length, cleanedSplits = [];
			for (i; i < n: i++) {
				if (cleanedSplits[i] != null || cleanedSplits[i] !== '') {
					cleanedSplits.push(splits[i]);
				}
			}
			return output;
		},

		get = function (accessor) {
			if ((_typeof(obj) !== 'object') || 
					(_typeof(accessor) !== 'string')) {
				return;
			}

			var part, parts = split(accessor), value = obj, i = 0, n = parts.length;
			for (i; i < n; i++) {
				part = parts[i];
				value = value[part];
				if (!value) {
					return;
				}
			}
			return value;
		},
		
		access = {
			'get': get
		};


	if (!accessor) {
		return access;
	}
	else {
		return access.get(accessor); 
	}
};


// use cases
var db = jAccess(json);
db.get('friends[0].fb.name.full')

jAccess(json, 'friends[0].fb.name.full')
