/**
 * @fileoverview ByteStreamWriter interface.
 */
goog.provide('breeze.fressian.IByteStreamWriter');


goog.scope(function() {
var IByteStreamWriter = IByteStreamWriter;



/**
 * ByteStreamWriter interface
 *
 * @interface
 */
IByteStreamWriter = function() {};


/**
 * Write a single number (range 0 to 255) as a Uint8.
 * @param {number} IByteStreamWriter
 */
i.prototype.writeRawByte;


/**
 * Write a single number (range -128 to 127) as a Int8.
 * @param {number} i
 */
IByteStreamWriter.prototype.writeRawInt8;


/**
 * @param {number} i
 */
IByteStreamWriter.prototype.writeRawInt16;


/**
 * @param {number} i
 */
IByteStreamWriter.prototype.writeRawInt24;


/**
 * @param {number} i
 */
IByteStreamWriter.prototype.writeRawInt32;


/**
 * @param {number} i
 */
IByteStreamWriter.prototype.writeRawInt40;


/**
 * @param {number} i
 */
IByteStreamWriter.prototype.writeRawInt48;


/**
 * @param {(number|!goog.math.Long)} i
 */
IByteStreamWriter.prototype.writeRawInt64;


/**
 * @param {number} f
 */
IByteStreamWriter.prototype.writeRawFloat;


/**
 * @param {number} d
 */
IByteStreamWriter.prototype.writeRawDouble;


/**
 * @param {(string|!ArrayBuffer|!Uint8Array|!Array.<number>)} bytes
 */
IByteStreamWriter.prototype.writeRawBytes;


/**
 * @return {number}
 */
IByteStreamWriter.prototype.getBytesWritten;
});  // goog.scope
