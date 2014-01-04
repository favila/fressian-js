/**
 * @fileoverview FressianWriter writes fressian byte streams.
 */
goog.provide('breeze.fressian.FressianWriter');
goog.require('breeze.fressian.IWriter');
goog.require('breeze.fressian.types');
goog.require('goog.math.Long');


goog.scope(function() {
var FressianWriter = breeze.fressian.FressianWriter;



/**
 * FressianWriter writes fressian byte streams
 *
 * @constructor
 * @param {Array=} opt_out
 * @param {breeze.fressian.IWriteHandlerLookup=} opt_handlers
 * @implements {breeze.fressian.IWriter}
 */
FressianWriter = function(opt_out, opt_handlers) {
  goog.base(this);
  this.out = opt_out || [];
  this.handlers = opt_handlers || null;
};
goog.inherits(FressianWriter, breeze.fressian.IWriter);


/**
 * @type {Array.<*>}
 * @protected
 */
FressianWriter.prototype.out;


/**
 * @type {breeze.fressian.IWriteHandler}
 * @protected
 */
FressianWriter.prototype.handlers;


/**
 * @public
 * @param {(?number|goog.math.Long)} i number to encode.
 */
FressianWriter.prototype.writeInt = function(i) {
  if (i == null) { // null or undefined
    // write null
  } else if (i instanceof goog.math.Long) {
    // investigate--there is probably a faster path than for normal numbers
  } else if (Number.isInteger(i)) { // will need to polyfill
    this._writeInt(i);
  } else {
    throw new TypeError("writeInt: cannot encode "+i+"as an integer!");
  }
};


/**
 * @protected
 * @param {number} i Integer (no null) guaranteed to be in JS's 53-bit range.
 */
breeze.fressian.FressianWriter.prototype._writeInt = function(i) {
  // split number into 26 and 27 bit pieces.
  // This is to easily determine the packed representation.
  // If high bits are clear, encoding will be 4 bytes or less
  var lo = i & 0x3ffffff; // 26 bits
  var hi = (i - lo) / 0x4000000; // 27 bits
  if (hi) {
    if (!(lo >>> 7)) {
      if (i < -1) {
        // 1 extra byte
      }
      // 1 or 2 bytes
    } else if (!(lo >>> 13)) {
      // 2 bytes
    } else if (!(lo >>> 20)) {
      // 3 bytes
    } else {
      // 4 bytes
    }
  } else {
    if (!(hi >>> 8)) {
      // 5 bytes
    } else if (!(hi >>> 16)) {
      // 6 bytes
    } else if (!(hi >>> 24)) {
      // 7 bytes
    } else {
      // 8 bytes
    }
  }

/**
 * Return 
 * @param {number}
 */
function splitInt(i) {
  return { lo: lo, hi: hi };
};
};


/**
 * @public
 * @param {number}
 */
FressianWriter.prototype.writeFloat = function(f) {
  // TODO: float range checking! throw RangeError
    if (f==null) {
    // write null
  } else {
    this.out.writeRawFloat(d);
  }
};


/**
 * @public
 * @param {number}
 */
FressianWriter.prototype.writeDouble = function(d) {
  // TODO: Possible coersion from double to float if safe.
  if (d==null) {
    // write null
  } else {
    this.out.writeRawDouble(d);
  }
};
});  // goog.scope
