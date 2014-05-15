'use strict';

/**
 * Module dependencies.
 */
require('should');
var pathToUrl = require('../lib/path-to-url');

describe('The `pathToUrl` function', function () {

  it(
    'should not change a path without params',
    function () {
      test('/foo/bar', { tesing: 123 }, '/foo/bar');
    }
  );

  it(
    'should replace params with their values',
    function () {
      test('/:foo/:bar', { foo: 'baz', bar: 123 }, '/baz/123');
    }
  );

  it(
    'should include optional params if provided',
    function () {
      test('/:foo/:bar?', { foo: 'baz', bar: 123 }, '/baz/123');
    }
  );

  it(
    'should skip optional params if not provided',
    function () {
      test('/:foo/:bar?', { foo: 'baz' }, '/baz');
    }
  );

  it(
    'should support optional params anywhere',
    function () {
      test('/:foo?/:bar', { bar: 'baz' }, '/baz');
    }
  );

  it(
    'should support suffixes',
    function () {
      test('/:foo.:bar', { foo: 'baz', bar: 'json' }, '/baz.json');
    }
  );

  it(
    'should support optional suffixes',
    function () {
      test('/:foo.:bar?', { foo: 'baz' }, '/baz');
    }
  );

  it(
    'should replace the greedy `*` with any string',
    function () {
      test('/:foo*', { foo: 'baz', $: '/bar'  }, '/baz/bar');
    }
  );

  it(
    'should ignore the greedy `*` if the replacement string is not provided',
    function () {
      test('/:foo*', { foo: 'baz' }, '/baz');
    }
  );

});

/**
 * Assert a path and parms matches the expected result.
 *
 * @param {String} path
 * @param {Object} params
 * @param {String} expected
 */
function test(path, params, expected) {
  pathToUrl(path, params).should.equal(expected);
}
