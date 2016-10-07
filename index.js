'use strict';
const fs = require('fs');

module.exports = path => new Promise(resolve => {
	fs.lstat(path, (err, stats) => {
		if (err) {
			throw err;
		}

		resolve(stats.isSymbolicLink());
	});
});

module.exports.sync = path => {
	try {
		const stats = fs.lstatSync(path);

		return stats.isSymbolicLink();
	} catch (err) {
		throw err;
	}
};

