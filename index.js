'use strict';
var fs = require('fs');

module.exports = function (path) {
	return new Promise(function (resolve) {
		fs.lstat(path, function (err, stats) {
			if (err) {
				throw err;
			}

			resolve(stats.isSymbolicLink());
		});
	});
};

module.exports.sync = function (path) {
	try {
		var stats = fs.lstatSync(path);

		return stats.isSymbolicLink();
	} catch (err) {
		throw err;
	}
};
