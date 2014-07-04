/**
 * @file once.js was created using generator-microjs.
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