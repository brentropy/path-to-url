# Path-to-URL

Turns an [Express-style path][1] string such as `/user/:name` into a URL like
`/user/brentburgoyne`.

## Installation

```bash
$ npm install path-to-url --save
```

## Usage

```js
var pathToUrl = require('path-to-url');

// pathToUrl(path, params)
```

- **path** A string in the express path format.
- **params** An object where the keys match named params in the path to be
replaced with the value.
    - **params.$** Special key where the value replaces the `*` wildcard in
    greedy paths.

### Simple

```js
pathToUrl('/user/:name', { name: 'brentburgoyne' });
// => "/user/brentburgoyne"
```

### Optional params

```js
pathToUrl('/results/:page?', {});
// => "/results"

pathToUrl('/results/:page?', { page: 47 });
// => "/results/47"
```

### Suffixes

```js
pathToUrl('/results.:format?', {});
// => "/results"

pathToUrl('/results.:format?', { format: 'json' });
// => "/results.json"
```

### Wildcard

```js
pathToUrl('/results*', {});
// => "/results"

pathToUrl('/results*', { $: '/anthing/goes/here' });
// => "/results/anything/goes/here"
```

## Disclaimer

While the most common use cases are covered, this module is not currently able
to support every path supported by Express. Some of the things tat are not
supported include optional groups and custom regular expressions.

[1]: https://github.com/component/path-to-regexp#readme
