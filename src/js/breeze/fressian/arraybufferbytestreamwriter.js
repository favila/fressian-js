/**
 * @fileoverview ByteStreamWriter over a GrowingDataValueStream.
 */
goog.provide('breeze.fressian.ArrayBufferByteStreamWriter');
goog.require('breeze.fressian.GrowingDataValueStream');



goog.scope(function() {
var IByteStreamWriter = breeze.fressian.IByteStreamWriter;
var ArrayBufferByteStreamWriter = breeze.fressian.ArrayBufferByteStreamWriter;
var GrowingDataValueStream = breeze.fressian.GrowingDataValueStream;



/**
 * ArrayBufferByteStreamWriter
 *
 * @param {number=} opt_blocksize Length in bytes of each ArrayBuffer.
 * @constructor
 * @implements {breeze.fressian.IByteStreamWriter}
 */
IByteStreamWriter = function(opt_blocksize) {
  this.dv = new GrowingDataViewStream(opt_blocksize);
};


/**
 * @protected
 * @type {GrowingDataViewStream}
 */
ArrayBufferByteStreamWriter.prototype.dv;


/**
 * Write a single number (range 0 to 255) as a Uint8.
 * @param {number} i
 * @return {!ArrayBufferByteStreamWriter}
 */
ArrayBufferByteStreamWriter.prototype.writeRawByte = function(i) {
  return this;
};


/**
 * Write a single number (range -128 to 127) as a Int8.
 * @param {number} i
 * @return {!ArrayBufferByteStreamWriter}
 */
ArrayBufferByteStreamWriter.prototype.writeRawInt8 = function(i) {
  return this;
};


/**
 * @param {number} i
 * @return {!ArrayBufferByteStreamWriter}
 */
ArrayBufferByteStreamWriter.prototype.writeRawInt16 = function(i) {
  return this;
};


/**
 * @param {number} i
 * @return {!ArrayBufferByteStreamWriter}
 */
ArrayBufferByteStreamWriter.prototype.writeRawInt24 = function(i) {
  return this;
};


/**
 * @param {number} i
 * @return {!ArrayBufferByteStreamWriter}
 */
ArrayBufferByteStreamWriter.prototype.writeRawInt32 = function(i) {
  return this;
};


/**
 * @param {number} i
 * @return {!ArrayBufferByteStreamWriter}
 */
ArrayBufferByteStreamWriter.prototype.writeRawInt40 = function(i) {
  return this;
};


/**
 * @param {number} i
 * @return {!ArrayBufferByteStreamWriter}
 */
ArrayBufferByteStreamWriter.prototype.writeRawInt48 = function(i) {
  return this;
};


/**
 * @param {(number|!goog.math.Long)} i
 * @return {!ArrayBufferByteStreamWriter}
 */
ArrayBufferByteStreamWriter.prototype.writeRawInt64 = function(i) {
  return this;
};


/**
 * @param {number} f
 * @return {!ArrayBufferByteStreamWriter}
 */
ArrayBufferByteStreamWriter.prototype.writeRawFloat = function(f) {
  return this;
};


/**
 * @param {number} d
 * @return {!ArrayBufferByteStreamWriter}
 */
ArrayBufferByteStreamWriter.prototype.writeRawDouble = function(d) {
  return this;
};


/**
 * @param {(!ArrayBuffer|!Uint8Array)} bytes
 * @return {!ArrayBufferByteStreamWriter}
 */
ArrayBufferByteStreamWriter.prototype.writeRawBytes = function(bytes) {
  return this;
};


/**
 * @return {number}
 */
ArrayBufferByteStreamWriter.prototype.getBytesWritten = function() {
  return this.dv.getPosition();
};
});  // goog.scope
