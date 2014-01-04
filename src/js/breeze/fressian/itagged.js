/**
 * @fileoverview Tagged interface to a tagged object (metadata, tag, and value).
 */
goog.provide('breeze.fressian.ITagged');



/**
 * Tagged interface to a tagged object (metadata, tag, and value)
 *
 * @interface
 */
breeze.fressian.ITagged = function() {};


/**
 * @return {(Array.<Array.<*>>)}
 */
breeze.fressian.ITagged.prototype.getMeta;


/**
 * @return {string}
 */
breeze.fressian.ITagged.prototype.getTag;


/**
 * @return {*}
 */
breeze.fressian.ITagged.prototype.getValue;
