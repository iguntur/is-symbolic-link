import test from 'ava';
import isl from '../';

test('async: await', async t => {
	t.true(await isl('files/link/foo.txt'));
	t.false(await isl('files/foo.txt'));
});

test('async: symlinks', t => {
	isl('files').then(val => t.false(val));
	isl('files/foo.txt').then(val => t.false(val));
	isl('files/link/foo.txt').then(val => t.true(val));
});

test('sync', t => {
	t.false(isl.sync('files'));
	t.false(isl.sync('files/foo.txt'));
	t.true(isl.sync('files/link/foo.txt'));
});
