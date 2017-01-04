'use strict';
const fs = require('fs');

module.exports = path => new Promise(resolve => {
	return fs.lstat(path, (err, stats) => {
		resolve(!err && stats.isSymbolicLink());
	});
});

module.exports.sync = path => {
	try {
		const stats = fs.lstatSync(path);
		return stats.isSymbolicLink();
	} catch (err) {
		if (err.code === 'ENOENT') {
			return false;
		}

		throw err;
	}
};
