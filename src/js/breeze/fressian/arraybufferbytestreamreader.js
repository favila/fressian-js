/**
 * @fileoverview ByteReader for an ArrayBuffer
 */
goog.provide('breeze.fressian.ArrayBufferByteStreamReader');
goog.require('breeze.fressian.IByteStreamReader');
goog.require('goog.math.Long');


goog.scope(function() {
var ArrayBufferByteStreamReader = breeze.fressian.ArrayBufferByteStreamReader;
var IByteStreamReader = breeze.fressian.IByteStreamReader;


/**
 * ByteReader interface into an DataView (ArrayBufferView)
 *
 * @param {!DataView} buf
 * @implements {IByteStreamReader}
 */
ArrayBufferByteStreamReader = function(buf) {
  this._buf = buf;
  this._pos = 0;
};
goog.inherits(ArrayBufferByteStreamReader, IByteStreamReader);


/**
 * @type {!DataView}
 * @protected
 */
ArrayBufferByteStreamReader.prototype._buf;


/**
 * @type {number}
 * @protected
 */
ArrayBufferByteStreamReader.prototype._pos;


/**
 * Read an *unsigned* byte (range from 0 to 255)
 * @return {number}
 */
ArrayBufferByteStreamReader.prototype.readRawByte = function() {
  return this._buf.getUint8(this._pos++);
};


/**
 * Read a *signed* byte.
 * @return {number}
 */
ArrayBufferByteStreamReader.prototype.readRawInt8 = function() {
  return this._buf.getInt8(this._pos++);
};


/**
 * @return {number}
 */
ArrayBufferByteStreamReader.prototype.readRawInt16 = function() {
  var res = this._buf.getInt16(this._pos);
  this._pos += 2;
  return res;
};


/**
 * @return {number}
 */
ArrayBufferByteStreamReader.prototype.readRawInt24 = function() {
  return (this.readRawInt16() << 8) | this.readRawInt8();
};


/**
 * @return {number}
 */
ArrayBufferByteStreamReader.prototype.readRawInt32 = function() {
  var res = this._buf.getInt32(this._pos);
  this._pos += 4;
  return res;
};


/**
 * @return {number}
 */
ArrayBufferByteStreamReader.prototype.readRawInt40 = function() {
  return this.readRawInt32() * 0xFF + this.readRawInt8();
};


/**
 * @return {number}
 */
ArrayBufferByteStreamReader.prototype.readRawInt48 = function() {
  return this.readRawInt32() * 0xFFFF + this.readRawInt16();
};


/**
 * @return {(number|!goog.math.Long)}
 */
ArrayBufferByteStreamReader.prototype.readRawInt64 = function() {
  var highbits = this.readRawInt32(), lowbits = this.readRawInt32();
  if (0xfff00000 & highbits) {
    return new goog.math.Long(lowbits, highbits);
  } else {
    return highbits * 0xFFFF + lowbits;
  }
};


/**
 * @return {number}
 */
ArrayBufferByteStreamReader.prototype.readRawFloat = function() {
  var res = this._buf.getFloat32(this._pos);
  this._pos += 4;
  return res;
};


/**
 * @return {number}
 */
ArrayBufferByteStreamReader.prototype.readRawDouble = function() {
  var res = this._buf.getFloat64(this._pos);
  this._pos += 8;
  return res;
};


/**
 * @param {number} len
 * @return {!Uint8Array}
 */
ArrayBufferByteStreamReader.prototype.readBytes = function(len) {
  var res = new Uint8Array(this._buf.buffer, this._pos, len);
  this._pos += len;
  return res;
};


/**
 * @param {number} bytelen
 * @return {string}
 */
ArrayBufferByteStreamReader.prototype.readString = function(bytelen) {
  return decodeURIComponent(escape(String.fromCharCode.apply(null,
      this.readString(bytelen))));
};


/**
 * @return {number}
 */
ArrayBufferByteStreamReader.prototype.getBytesRead = function() {
  return this._pos;
};

});  // goog.scope
