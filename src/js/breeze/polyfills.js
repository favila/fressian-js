goog.provide('breeze.polyfills');


if (!Number.isInteger) {
  /**
   * Polyfill for Number.isInteger
   * @param {*} nVal
   * @return {boolean}
   */
  Number.isInteger = function isInteger(nVal) {
    return typeof nVal === 'number' && isFinite(nVal) &&
        nVal > -9007199254740992 && nVal < 9007199254740992 &&
        Math.floor(nVal) === nVal;
  };
}
