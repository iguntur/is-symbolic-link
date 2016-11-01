# is-symbolic-link [![Build Status](https://travis-ci.org/iguntur/is-symbolic-link.svg?branch=master)](https://travis-ci.org/iguntur/is-symbolic-link) [![npm](https://img.shields.io/npm/v/is-symbolic-link.svg?style=flat-square)](https://npmjs.com/package/is-symbolic-link)

> Check if PATH is symbolic link


## Install

```
$ npm install --save is-symbolic-link
```


## Usage

**async**

```js
const isSymbolicLink = require('is-symbolic-link');

isSymbolicLink('/home/guntur/.npmrc').then(val => {
	console.log(val);
});
//=> true
```


**sync**

```js
const isSymbolicLink = require('is-symbolic-link');

const val = isSymbolicLink.sync('/home/guntur/todo.md');

console.log(val);
//=> false
```


## API

### isSymbolicLink(input)

Returns a promise value of an input

### isSymbolicLink.sync(input)

Returns a boolean value of an input

#### input

- Type: `string`


## License

MIT © [Guntur Poetra](http://guntur.starmediateknik.com)
