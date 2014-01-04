goog.provide('breeze.fressian.types');



/**
 * ReadHandler interface to read custom fressian objects.
 * Must be a function accepting two or three arguments:
 * - A reader object.
 * - String tag of the object.
 * - Optional component count (i.e. number of items to read off the reader).
 * Returns anything, including an ITagged.
 * @typedef {function(!breeze.fressian.IReader, string, number=): *}
 */
breeze.fressian.types.IReadHandler;


/**
 * WriteHandler interface to write custom fressian objects.
 * @typedef {function(!breeze.fressian.IWriter, *)}
 */
breeze.fressian.types.IWriteHandler;


/**
 * WriteHandlerEntry: tag plus writehandler
 *
 * @typedef {{tag:string, handler:breeze.fressian.types.IWriteHandler}}
 */
breeze.fressian.types.IWriteHandlerEntry;
