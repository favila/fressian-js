/**
 * @fileoverview ByteStreamWriter interface.
 */
goog.provide('breeze.fressian.IByteStreamWriter');


goog.scope(function() {
var IByteStreamWriter = breeze.fressian.IByteStreamWriter;



/**
 * ByteStreamWriter interface
 *
 * @interface
 */
IByteStreamWriter = function() {};


/**
 * Write a single number (range 0 to 255) as a Uint8.
 * @param {number} i
 * @return {!IByteStreamWriter}
 */
IByteStreamWriter.prototype.writeRawByte;


/**
 * Write a single number (range -128 to 127) as a Int8.
 * @param {number} i
 * @return {!IByteStreamWriter}
 */
IByteStreamWriter.prototype.writeRawInt8;


/**
 * @param {number} i
 * @return {!IByteStreamWriter}
 */
IByteStreamWriter.prototype.writeRawInt16;


/**
 * @param {number} i
 * @return {!IByteStreamWriter}
 */
IByteStreamWriter.prototype.writeRawInt24;


/**
 * @param {number} i
 * @return {!IByteStreamWriter}
 */
IByteStreamWriter.prototype.writeRawInt32;


/**
 * @param {number} i
 * @return {!IByteStreamWriter}
 */
IByteStreamWriter.prototype.writeRawInt40;


/**
 * @param {number} i
 * @return {!IByteStreamWriter}
 */
IByteStreamWriter.prototype.writeRawInt48;


/**
 * @param {(number|!goog.math.Long)} i
 * @return {!IByteStreamWriter}
 */
IByteStreamWriter.prototype.writeRawInt64;


/**
 * @param {number} f
 * @return {!IByteStreamWriter}
 */
IByteStreamWriter.prototype.writeRawFloat;


/**
 * @param {number} d
 * @return {!IByteStreamWriter}
 */
IByteStreamWriter.prototype.writeRawDouble;


/**
 * @param {(string|!ArrayBuffer|!Uint8Array|!Array.<number>)} bytes
 * @return {!IByteStreamWriter}
 */
IByteStreamWriter.prototype.writeRawBytes;


/**
 * @return {number}
 */
IByteStreamWriter.prototype.getBytesWritten;
});  // goog.scope
