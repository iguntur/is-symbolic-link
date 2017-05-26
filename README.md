# is-symbolic-link [![Build Status](https://travis-ci.org/iguntur/is-symbolic-link.svg?branch=master)](https://travis-ci.org/iguntur/is-symbolic-link)

> Indicates if path is symbolic link


## Install

``` bash
$ npm install --save is-symbolic-link
```


## Usage

```js
const isSymbolicLink = require('is-symbolic-link');

isSymbolicLink('/home/guntur/.npmrc').then(val => {
	console.log(val);
	//=> true
});

console.log(isSymbolicLink.sync('/home/guntur/todo.md'));
//=> false
```


## API

### isSymbolicLink(input)

Returns a promise value of an input

### isSymbolicLink.sync(input)

Returns a boolean value of an input

#### input

- Type: `string`


## Related

- [get-symlinks](https://github.com/iguntur/get-symlinks)


## License

MIT © [Guntur Poetra](http://guntur.starmediateknik.com)
