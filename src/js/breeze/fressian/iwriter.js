/**
 * @fileoverview Fressian Reader interface over fressian-encoded bytes.
 */

goog.provide('breeze.fressian.IWriter');



/**
 * Fressian Reader interface over fressian-encoded bytes
 *
 * @interface
 */
breeze.fressian.IWriter = function() {};


/**
 * @return {boolean}
 */
breeze.fressian.IWriter.prototype.readBoolean;


/**
 * @return {number}
 */
breeze.fressian.IWriter.prototype.readFloat;


/**
 * @return {(number|!goog.math.Long)}
 */
breeze.fressian.IWriter.prototype.readInt;


/**
 * @return {!Object}
 */
breeze.fressian.IWriter.prototype.readObject;


/**
 * @return {void}
 */
breeze.fressian.IWriter.prototype.validateFooter;
