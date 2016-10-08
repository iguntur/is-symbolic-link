# is-symbolic-link [![Build Status](https://travis-ci.org/iGuntur/is-symbolic-link.svg?branch=master)](https://travis-ci.org/iGuntur/is-symbolic-link)

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


## License

MIT © [Guntur](http://guntur.starmediateknik.com)
