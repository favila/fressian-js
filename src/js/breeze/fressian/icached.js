/**
 * @fileoverview Cached interface to indicate wrapped object should be cached in
 *               the fressian bytestream.
 */
goog.provide('breeze.fressian.ICached');



/**
 * Cached interface to indicate wrapped object should be cached in the fressian
 * bytestream.
 *
 * @interface
 */
breeze.fressian.ICached = function() {};


/**
 * @return {*}
 */
breeze.fressian.ICached.prototype.getObjectToCache;
