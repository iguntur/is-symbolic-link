'use strict';
const fs = require('fs');

module.exports = path => new Promise(resolve => {
	return fs.lstat(path, (err, stats) => {
		resolve(!err && stats.isSymbolicLink());
	});
});

module.exports.sync = path => {
	try {
		return fs.lstatSync(path).isSymbolicLink();
	} catch (err) {
		if (err.code === 'ENOENT') {
			return false;
		}

		throw err;
	}
};
