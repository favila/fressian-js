/**
 * @fileoverview DataViewStream: DataView with advancing position.
 */
goog.provide('breeze.fressian.DataViewStream');


goog.scope(function() {
var DataViewStream = breeze.fressian.DataViewStream;



/**
 * DataViewStream is a DataView wrapper which keeps track of the current
 * offset into the dataview. All its set* and get* methods do not take an
 * offset argument but instead read/write the next byte. If an exception
 * is thrown by the underlying DataView, the DataViewStream position will be
 * unchanged, i.e. it will always point to the index after the last *successful*
 * read or write.
 *
 * @param {!DataView} dv
 * @param {number} pos 32-bit signed int, must be positive.
 * @constructor
 */
DataViewStream = function(dv, pos) {
  this.dv = dv;
  this.pos = pos | 0;
};


/**
 * Wrapped DataView.
 * @protected
 * @type {!DataView}
 */
DataViewStream.prototype.dv;


/**
 * Index of last-read-or-written-byte + 1.
 * @protected
 * @type {number}
 */
DataViewStream.prototype.pos;


/**
 * Return the offset into the DataView.
 * @return {number}
 */
DataViewStream.prototype.getPosition = function() {
  return this.pos;
};


/**
 * Return the DataView's buffer property.
 * @return {!ArrayBuffer}
 */
DataViewStream.prototype.getBuffer = function() {
  return this.dv.buffer;
};


/**
 * Return the DataView's byteOffset property.
 * @return {number}
 */
DataViewStream.prototype.getByteOffset = function() {
  return this.dv.byteOffset;
};


/**
 * Return the DataView's byteLength property.
 * @return {number}
 */
DataViewStream.prototype.getByteLength = function() {
  return this.dv.byteLength;
};


/**
 * Return the absolute byte offset into the underlying buffer. Is the same as
 * getByteOffset() + getPosition().
 * @return {number}
 */
DataViewStream.prototype.getFullPosition = function() {
  return this.getByteOffset() + this.getPosition();
};


/**
 * Return the number of bytes that could be written.
 * @return {number}
 */
DataViewStream.prototype.getRemainingBytes = function() {
  return this.getByteLength() - this.getPosition();
};


/**
 * Wrap an existing ArrayBufferView or ArrayBuffer.
 * @param {(!ArrayBuffer|!ArrayBufferView)} b
 * @param {number=} opt_position
 * @return {!DataViewStream}
 */
DataViewStream.wrapBufferLike = function(b, opt_position) {
  if (b instanceof DataView) {
    return new DataViewStream(b, opt_position | 0);
  } else if (b instanceof ArrayBuffer) {
    return new DataViewStream(new DataView(b), opt_position | 0);
  } else if (ArrayBuffer.isView(b)) {
    return new DataViewStream(new DataView(b.buffer, b.bufferOffset,
        b.bufferLength), opt_position | 0);
  }
  throw new TypeError('wrapBufferLike() only accepts ArrayBufferView or ' +
      'ArrayBuffer.');
};


/**
 * Create a DataViewStream and an underlying DataView of a given byte length.
 * @param {number} size
 * @return {!DataViewStream}
 */
DataViewStream.create = function(size) {
  return new DataViewStream(new DataView(new ArrayBuffer(size)), 0);
};


/**
 * Delegate to wrapped DataValue
 * @param {number} value
 * @param {boolean=} opt_littleEndian
 * @return {!DataViewStream} Return this DataViewStream.
 */
DataViewStream.prototype.setUint8 = function(value, opt_littleEndian) {
  this.dv.setUint8(this.pos, opt_littleEndian);
  this.pos += DataViewStream.prototype.setUint8.byteLength;
  return this;
};


/**
 * @const
 * @type {number}
 */
DataViewStream.prototype.setUint8.byteLength = 1;


/**
 * Delegate to wrapped DataValue
 * @param {number} value
 * @param {boolean=} opt_littleEndian
 * @return {!DataViewStream} Return this DataViewStream.
 */
DataViewStream.prototype.setUint16 = function(value, opt_littleEndian) {
  this.dv.setUint16(this.pos, opt_littleEndian);
  this.pos += DataViewStream.prototype.setUint16.byteLength;
  return this;
};


/**
 * @const
 * @type {number}
 */
DataViewStream.prototype.setUint16.byteLength = 2;


/**
 * Delegate to wrapped DataValue
 * @param {number} value
 * @param {boolean=} opt_littleEndian
 * @return {!DataViewStream} Return this DataViewStream.
 */
DataViewStream.prototype.setUint32 = function(value, opt_littleEndian) {
  this.dv.setUint32(this.pos, opt_littleEndian);
  this.pos += DataViewStream.prototype.setUint32.byteLength;
  return this;
};


/**
 * @const
 * @type {number}
 */
DataViewStream.prototype.setUint32.byteLength = 4;


/**
 * Delegate to wrapped DataValue
 * @param {number} value
 * @param {boolean=} opt_littleEndian
 * @return {!DataViewStream} Return this DataViewStream.
 */
DataViewStream.prototype.setInt8 = function(value, opt_littleEndian) {
  this.dv.setInt8(this.pos, opt_littleEndian);
  this.pos += DataViewStream.prototype.setInt8.byteLength;
  return this;
};


/**
 * @const
 * @type {number}
 */
DataViewStream.prototype.setInt8.byteLength = 1;


/**
 * Delegate to wrapped DataValue
 * @param {number} value
 * @param {boolean=} opt_littleEndian
 * @return {!DataViewStream} Return this DataViewStream.
 */
DataViewStream.prototype.setInt16 = function(value, opt_littleEndian) {
  this.dv.setInt16(this.pos, opt_littleEndian);
  this.pos += DataViewStream.prototype.setInt16.byteLength;
  return this;
};


/**
 * @const
 * @type {number}
 */
DataViewStream.prototype.setInt16.byteLength = 2;


/**
 * Delegate to wrapped DataValue
 * @param {number} value
 * @param {boolean=} opt_littleEndian
 * @return {!DataViewStream} Return this DataViewStream.
 */
DataViewStream.prototype.setInt32 = function(value, opt_littleEndian) {
  this.dv.setInt32(this.pos, opt_littleEndian);
  this.pos += DataViewStream.prototype.setInt32.byteLength;
  return this;
};


/**
 * @const
 * @type {number}
 */
DataViewStream.prototype.setInt32.byteLength = 4;


/**
 * Delegate to wrapped DataValue
 * @param {number} value
 * @param {boolean=} opt_littleEndian
 * @return {!DataViewStream} Return this DataViewStream.
 */
DataViewStream.prototype.setFloat32 = function(value, opt_littleEndian) {
  this.dv.setFloat32(this.pos, opt_littleEndian);
  this.pos += DataViewStream.prototype.setFloat32.byteLength;
  return this;
};


/**
 * @const
 * @type {number}
 */
DataViewStream.prototype.setFloat32.byteLength = 4;


/**
 * Delegate to wrapped DataValue
 * @param {number} value
 * @param {boolean=} opt_littleEndian
 * @return {!DataViewStream} Return this DataViewStream.
 */
DataViewStream.prototype.setFloat64 = function(value, opt_littleEndian) {
  this.dv.setFloat64(this.pos, opt_littleEndian);
  this.pos += DataViewStream.prototype.setFloat64.byteLength;
  return this;
};


/**
 * @const
 * @type {number}
 */
DataViewStream.prototype.setFloat64.byteLength = 8;


/**
 * Delegate to wrapped DataValue
 * @param {boolean=} opt_littleEndian
 * @return {number}
 */
DataViewStream.prototype.getUint8 = function(opt_littleEndian) {
  var rv = this.dv.getUint8(this.pos, opt_littleEndian);
  this.pos += DataViewStream.prototype.getUint8.byteLength;
  return rv;
};


/**
 * @const
 * @type {number}
 */
DataViewStream.prototype.getUint8.byteLength = 1;


/**
 * Delegate to wrapped DataValue
 * @param {boolean=} opt_littleEndian
 * @return {number}
 */
DataViewStream.prototype.getUint16 = function(opt_littleEndian) {
  var rv = this.dv.getUint16(this.pos, opt_littleEndian);
  this.pos += DataViewStream.prototype.getUint16.byteLength;
  return rv;
};


/**
 * @const
 * @type {number}
 */
DataViewStream.prototype.getUint16.byteLength = 2;


/**
 * Delegate to wrapped DataValue
 * @param {boolean=} opt_littleEndian
 * @return {number}
 */
DataViewStream.prototype.getUint32 = function(opt_littleEndian) {
  var rv = this.dv.getUint32(this.pos, opt_littleEndian);
  this.pos += DataViewStream.prototype.getUint32.byteLength;
  return rv;
};


/**
 * @const
 * @type {number}
 */
DataViewStream.prototype.getUint32.byteLength = 4;


/**
 * Delegate to wrapped DataValue
 * @param {boolean=} opt_littleEndian
 * @return {number}
 */
DataViewStream.prototype.getInt8 = function(opt_littleEndian) {
  var rv = this.dv.getInt8(this.pos, opt_littleEndian);
  this.pos += DataViewStream.prototype.getInt8.byteLength;
  return rv;
};


/**
 * @const
 * @type {number}
 */
DataViewStream.prototype.getInt8.byteLength = 1;


/**
 * Delegate to wrapped DataValue
 * @param {boolean=} opt_littleEndian
 * @return {number}
 */
DataViewStream.prototype.getInt16 = function(opt_littleEndian) {
  var rv = this.dv.getInt16(this.pos, opt_littleEndian);
  this.pos += DataViewStream.prototype.getInt16.byteLength;
  return rv;
};


/**
 * @const
 * @type {number}
 */
DataViewStream.prototype.getInt16.byteLength = 2;


/**
 * Delegate to wrapped DataValue
 * @param {boolean=} opt_littleEndian
 * @return {number}
 */
DataViewStream.prototype.getInt32 = function(opt_littleEndian) {
  var rv = this.dv.getInt32(this.pos, opt_littleEndian);
  this.pos += DataViewStream.prototype.getInt32.byteLength;
  return rv;
};


/**
 * @const
 * @type {number}
 */
DataViewStream.prototype.getInt32.byteLength = 4;


/**
 * Delegate to wrapped DataValue
 * @param {boolean=} opt_littleEndian
 * @return {number}
 */
DataViewStream.prototype.getFloat32 = function(opt_littleEndian) {
  var rv = this.dv.getFloat32(this.pos, opt_littleEndian);
  this.pos += DataViewStream.prototype.getFloat32.byteLength;
  return rv;
};


/**
 * @const
 * @type {number}
 */
DataViewStream.prototype.getFloat32.byteLength = 4;


/**
 * Delegate to wrapped DataValue
 * @param {boolean=} opt_littleEndian
 * @return {number}
 */
DataViewStream.prototype.getFloat64 = function(opt_littleEndian) {
  var rv = this.dv.getFloat64(this.pos, opt_littleEndian);
  this.pos += DataViewStream.prototype.getFloat64.byteLength;
  return rv;
};


/**
 * @const
 * @type {number}
 */
DataViewStream.prototype.getFloat64.byteLength = 8;


/**
 * Return a Uint8Array view of the underlying buffer.
 * @param {number} length in bytes
 * @param {boolean=} opt_signed if true, will return an Int8Array
 * @return {(!Uint8Array|!Int8Array)}
 */
DataViewStream.prototype.getBytes = function(length, opt_signed) {
  var klass = opt_signed ? Int8Array : Uint8Array;
  var rv = new klass(this.getBuffer(), this.getFullPosition(), length);
  this.pos += length;
  return rv;
};


/**
 * Write an ArrayBuffer or ArrayBufferView to the current DataView, advancing
 * position. Will not check alignment!
 * @param {(!ArrayBuffer|!ArrayBufferView)} bytes
 * @return {!DataViewStream} Return this DataViewStream.
 */
DataViewStream.prototype.setBytes = function(bytes) {
  if (bytes instanceof ArrayBuffer) {
    bytes = new Uint8Array(bytes);
  }
  var dvview = new bytes.constructor(this.getBuffer(), this.getFullPosition(),
      bytes.byteLength);
  dvview.set(bytes);
  this.pos += bytes.byteLength;
  return this;
};

});  // goog.scope
