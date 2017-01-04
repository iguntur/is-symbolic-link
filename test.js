import test from 'ava';
import fn from './';

test('async: return true if PATH is symlink', async t => {
	t.true(await fn('./fixtures/symlink.folder'));
	t.true(await fn('./fixtures/symlink.file'));
});

test('async: return false if PATH is not symlink', async t => {
	t.false(await fn(''));
	t.false(await fn(__filename));
	t.false(await fn('./index.js'));
	t.false(await fn('./fixtures/folder'));
	t.false(await fn('./fixtures/file.txt'));
});

test('sync: return true if PATH is symlink', t => {
	t.true(fn.sync('./fixtures/symlink.folder'));
	t.true(fn.sync('./fixtures/symlink.file'));
});

test('sync: return false if PATH is not symlink', t => {
	t.false(fn.sync(''));
	t.false(fn.sync(__filename));
	t.false(fn.sync('./index.js'));
	t.false(fn.sync('./fixtures/folder'));
	t.false(fn.sync('./fixtures/file.txt'));
});
