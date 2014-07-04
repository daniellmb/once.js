/**
 * @file
 *
 * ### Responsibilities
 * - unit test once.js
 *
 * Scaffolded with generator-microjs v0.0.10
 *
 * @author Daniel Lamb <dlamb.open.source@gmail.com>
 */
'use strict';

/*global once*/
describe('once.js', function () {
  var sandbox;

  beforeEach(function () {
    // create a sandbox
    sandbox = sinon.sandbox.create();

    // stub some methods
  });

  afterEach(function () {
    // restore the environment as it was before
    sandbox.restore();
  });

  it('should have a working test harness', function () {
    // arrange
    // act
    // assert
    expect(true).to.not.equal(false);
  });

  it('should exist', function () {
    // arrange
    // act
    // assert
    expect(typeof once).to.equal('function');
  });

  it('should call the original function', function () {
    // arrange
    var callback = sinon.spy(),
      proxy = once(callback);
    // act
    proxy();
    // assert
    assert(callback.called);
  });

  it('should call the original function only once', function () {
    // arrange
    var callback = sinon.spy(),
      proxy = once(callback);
    // act
    proxy();
    proxy();
    // assert
    assert(callback.calledOnce);
  });

  it('should call the original function with correct context and params', function () {
    // arrange
    var callback = sinon.spy(),
      proxy = once(callback),
      obj = {};
    // act
    proxy.call(obj, 1, 2, 3);
    // assert
    assert(callback.calledOn(obj));
    assert(callback.calledWith(1, 2, 3));
  });

  it('should return the return value from the original function', function () {
    // arrange
    var callback = sinon.stub().returns(42),
      proxy = once(callback), result;
    // act
    result = proxy();
    // assert
    expect(result).to.equal(42);
  });

  it('should return the same value each time', function () {
    // arrange
    var callback = function (input) {
        return input;
      },
      proxy = once(callback), result;
    // act
    proxy(1337);
    result = proxy('foo');
    // assert
    expect(result).to.equal(1337);
  });

});