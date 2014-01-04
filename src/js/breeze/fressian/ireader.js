/**
 * @fileoverview Fressian Reader interface.
 */
goog.provide('breeze.fressian.IReader');
goog.require('breeze.fressian.types');



/**
 * Fressian Reader interface
 *
 * @interface
 */
breeze.fressian.IReader = function() {};


/**
 * @return {!breeze.fressian.IReader}
 */
breeze.fressian.IReader.prototype.resetCaches;


/**
 * @param {string} tag
 * @param {Object} o
 * @param {boolean=} opt_cache
 * @return {!breeze.fressian.IReader}
 */
breeze.fressian.IReader.prototype.writeAs;


/**
 * @param {(boolean|Object)} b
 * @return {!breeze.fressian.IReader}
 */
breeze.fressian.IReader.prototype.writeBoolean;


/**
 * @param {(string|!ArrayBuffer|!Uint8Array|!Array.<number>)} b
 * @param {number=} opt_offset
 * @return {!breeze.fressian.IReader}
 */
breeze.fressian.IReader.prototype.writeBytes;


/**
 * @param {number} d
 * @return {!breeze.fressian.IReader}
 */
breeze.fressian.IReader.prototype.writeDouble;


/**
 * @param {number} f
 * @return {!breeze.fressian.IReader}
 */
breeze.fressian.IReader.prototype.writeFloat;


/**
 * @return {!breeze.fressian.IReader}
 */
breeze.fressian.IReader.prototype.writeFooter;


/**
 * @param {(number|goog.math.Long)} i
 * @return {!breeze.fressian.IReader}
 */
breeze.fressian.IReader.prototype.writeInt;


/**
 * @param {!*} l
 * @return {!breeze.fressian.IReader}
 */
breeze.fressian.IReader.prototype.writeList;


/**
 * @return {!breeze.fressian.IReader}
 */
breeze.fressian.IReader.prototype.writeNull;


/**
 * @param {!*} o
 * @param {boolean=} opt_cache
 * @return {!breeze.fressian.IReader}
 */
breeze.fressian.IReader.prototype.writeObject;


/**
 * @param {string} s
 * @return {!breeze.fressian.IReader}
 */
breeze.fressian.IReader.prototype.writeString;


/**
 * @param {string} tag
 * @param {number} componentCount
 * @return {!breeze.fressian.IReader}
 */
breeze.fressian.IReader.prototype.writeTag;
