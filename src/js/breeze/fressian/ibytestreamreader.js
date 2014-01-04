/**
 * @fileoverview ByteStreamReader interface.
 */
goog.provide('breeze.fressian.IByteStreamReader');


goog.scope(function() {
var IByteStreamReader = IByteStreamReader;



/**
 * ByteStreamReader interface
 *
 * @interface
 */
IByteStreamReader = function() {};


/**
 * @return {number}
 */
IByteStreamReader.prototype.readRawByte;


/**
 * @return {number}
 */
IByteStreamReader.prototype.readRawInt8;


/**
 * @return {number}
 */
IByteStreamReader.prototype.readRawInt16;


/**
 * @return {number}
 */
IByteStreamReader.prototype.readRawInt24;


/**
 * @return {number}
 */
IByteStreamReader.prototype.readRawInt32;


/**
 * @return {number}
 */
IByteStreamReader.prototype.readRawInt40;


/**
 * @return {number}
 */
IByteStreamReader.prototype.readRawInt48;


/**
 * @return {(number|!goog.math.Long)}
 */
IByteStreamReader.prototype.readRawInt64;


/**
 * @return {number}
 */
IByteStreamReader.prototype.readRawFloat;


/**
 * @return {number}
 */
IByteStreamReader.prototype.readRawDouble;


/**
 * @param {number} len
 * @return {!ArrayBuffer}
 */
IByteStreamReader.prototype.readRawBytes;


/**
 * @return {number}
 */
IByteStreamReader.prototype.getBytesRead;
});  // goog.scope
