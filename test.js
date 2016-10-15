import p from 'path';
import test from 'ava';
import fs from 'fs-extra';
import tempfile from 'tempfile';
import fn from './';

const fixtures = ['foo', 'bar', 'baz', 'qux'];

test.beforeEach(t => {
	t.context.path = tempfile();
	t.context.files = p.join(t.context.path, 'files');
	t.context.folders = p.join(t.context.path, 'folders');
	t.context.symlinks = p.join(t.context.path, 'symlinks');

	fixtures.forEach(dirName => fs.mkdirpSync(p.join(t.context.folders, dirName)));
	fixtures.forEach(fileName => {
		fs.ensureFileSync(p.join(t.context.files, fileName));
		fs.ensureSymlinkSync(p.join(t.context.files, fileName), p.join(t.context.symlinks, fileName));
	});
});

test('async: is symbolic link', t => {
	fixtures.forEach(async fileName => t.true(await fn(p.join(t.context.symlinks, fileName))));
});

test('async: is not symbolic link', t => {
	fixtures.forEach(async fileName => {
		t.false(await fn(p.join(t.context.folders, fileName)));
		t.false(await fn(p.join(t.context.files, fileName)));
	});
});

test('sync: is symbolic link', t => {
	fixtures.forEach(fileName => t.true(fn.sync(p.join(t.context.symlinks, fileName))));
});

test('sync: is not symbolic link', t => {
	fixtures.forEach(fileName => {
		t.false(fn.sync(p.join(t.context.files, fileName)));
		t.false(fn.sync(p.join(t.context.folders, fileName)));
	});
});
