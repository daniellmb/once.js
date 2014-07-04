/**
 * @file Once.js is a 0.1kb micro-library that enables you to enforce a function can only be executed once.
 * Scaffolded with generator-microjs v0.0.10
 * @author Daniel Lamb <dlamb.open.source@gmail.com>
 */

function once(fn) {
  var result, ran = false;
  return function proxy() {
    if (ran) {
      return result;
    }
    ran = true;
    result = fn.apply(this, arguments);
    fn = null; // for garbage collection
    return result;
  };
}