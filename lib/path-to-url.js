'use strict';

/**
 * Expose `pathToUrl`.
 */

module.exports = pathToUrl;

/**
 * Pattern to match params in the path.
 */

var URL_PATTERN = new RegExp([

  // Match params and suffixes
  '(\\/|\\.):(\\w+)(\\?)?',

  // Match automatic greedy matching
  '(\\*)'

].join('|'), 'g');

/**
 * Generate a URL from an express route pattern
 * based a the `params` given.
 *
 * @param  {String} path
 * @param  {Object} params
 * @return {String}
 * @api public
 */

function pathToUrl(path, params) {
  return path.replace(
    URL_PATTERN,
    function (match, prefix, param, optional, greedy) {
      if (greedy) {
        prefix = '';
        optional = true;
        param = '$';
      }
      return !optional || params[param] ? prefix + params[param] : '';
    }
  );
}
