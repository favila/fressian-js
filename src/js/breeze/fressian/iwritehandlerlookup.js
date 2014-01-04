/**
 * @fileoverview WriteHandlerLookup to WriteHandler objects and associated tag.
 */
goog.provide('breeze.fressian.IWriteHandlerLookup');
goog.require('breeze.fressian.types');



/**
 * Interface to WriteHandler objects and associated tag
 *
 * @interface
 */
breeze.fressian.IWriteHandlerLookup = function() {};


/**
 * Return a writehandler for the supplied object. If tag is supplied, require
 * a match between the found handler's tag and the supplied tag.
 *
 * @param {*} object
 * @param {string=} opt_tag Tag to match, or empty to ignore tag check.
 * @return {?breeze.fressian.types.IWriteHandler} handler
 */
breeze.fressian.IWriteHandlerLookup.prototype.getWriteHandler;


/**
 * Like getWriteHandler, but throws an Error exception if no handler found.
 *
 * @param {*} object
 * @param {string=} opt_tag Tag to look for, or null to ignore tag check.
 * @return {!breeze.fressian.types.IWriteHandlerEntry} handler
 */
breeze.fressian.IWriteHandlerLookup.prototype.requireWriteHandler;
