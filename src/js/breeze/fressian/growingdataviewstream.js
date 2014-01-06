/**
 * @fileoverview GrowingDataViewStream: a DataViewStream that expands in size.
 */
goog.provide('breeze.fressian.GrowingDataViewStream');
goog.require('breeze.fressian.DataValueStream');


goog.scope(function() {
var DataViewStream = breeze.fressian.DataViewStream;
var GrowingDataViewStream = breeze.fressian.GrowingDataViewStream;



/**
 * GrowingDataViewStream
 *
 * @param {number=} opt_blocksize Length in bytes of each ArrayBuffer.
 * @constructor
 */
GrowingDataViewStream = function(opt_blocksize) {
  // must be large enough for any DataView.set*()
  if (opt_blocksize > 8 && opt_blocksize <= 0x7fffffff) {
    this.blksz = opt_blocksize | 0;
  }
  this.blks = [DataViewStream.create(this.blksz)];
};


/**
 * Length of newly-allocated ArrayBuffer "block" in bytes.
 * @protected
 * @type {number}
 */
GrowingDataViewStream.prototype.blksz = 1024;


/**
 * Internal block-chain we use to present a writeable stream.
 * isFilled=true for all but the last Block, which is the only writeable Block.
 * (Stream is forward-write-only.)
 * @protected
 * @type {Array.<DataViewStream>}
 */
GrowingDataViewStream.prototype.blks;


/**
 * Write data to blocks, splitting writes or creating new blocks as needed.
 * @protected
 * @param {function(number)} f prototype function of DataViewStream for writing
 * @param {number} i
 * @param {boolean=} opt_littleEndian
 */
GrowingDataViewStream.prototype.writeNumber = function(f, i, opt_littleEndian) {
  var lenneeded = f.byteLength, block = this.blks[this.blks.length - 1];
  if (lenneeded > block.getRemainingBytes()) {
    this.blks[this.blks.length] = block = DataViewStream.create(this.blksz);
  }
  f.call(block, i);
};


/**
 * Write data to blocks, splitting writes or creating new blocks as needed.
 * @param {(!Int8Array|!Uint8Array)} b
 */
GrowingDataViewStream.prototype.writeBytes = function(b) {
  var block = this.blks[this.blks.length - 1],
      blockleft = block.getRemainingBytes(),
      bytesleft = b.byteLength;
  if (bytesleft > blockleft) {
    block.setBytes(b.subarray(0, blockleft));
    bytesleft -= blockleft;
    while (bytesleft > 0) {
      this.blks[this.blks.length] = block = DataViewStream.create(this.blksz);
      block.setBytes(b.subarray(bytesleft, this.blksz));
      bytesleft -= this.blksz;
    }
  } else {
    block.setBytes(b);
  }
};


/**
 * @return {number}
 */
GrowingDataViewStream.prototype.getPosition = function() {
  var i = 0, acc = 0, blks = this.blks, l = blks.length;
  for (; i < l; i++) {
    acc += blks[i].getPosition();
  }
  return acc;
};


/**
 * Consolidate all blocks into a single large block and return the backing
 * buffer, which will be completely full of written data.
 * @return {!ArrayBuffer}
 */
GrowingDataViewStream.prototype.compact = function() {
  var i = 0, fullpos = 0, blks = this.blks, l = this.blks.length,
      abuf = new Uint8Array(new ArrayBuffer(this.getPosition())),
      blk, view, pos;
  for (; i < l; i++) {
    blk = blks[i], pos = blk.getPosition();
    abuf.set(new Uint8Array(blk.getBuffer(), 0, pos), fullpos);
    fullpos += pos;
  }
  this.blks = [DataViewStream.wrapBufferLike(abuf.buffer, fullpos)];
  return abuf.buffer;
};


/**
 * @param {number} i
 * @param {boolean=} opt_littleEndian
 * @return {!GrowingDataViewStream} Returns this object.
 */
GrowingDataViewStream.prototype.setUint8 = function(i, opt_littleEndian) {
  this.writeNumber(DataViewStream.setUint8, i, opt_littleEndian);
  return this;
};


/**
 * @param {number} i
 * @param {boolean=} opt_littleEndian
 * @return {!GrowingDataViewStream} Returns this object.
 */
GrowingDataViewStream.prototype.setUint16 = function(i, opt_littleEndian) {
  this.writeNumber(DataViewStream.setUint16, i, opt_littleEndian);
  return this;
};


/**
 * @param {number} i
 * @param {boolean=} opt_littleEndian
 * @return {!GrowingDataViewStream} Returns this object.
 */
GrowingDataViewStream.prototype.setUint32 = function(i, opt_littleEndian) {
  this.writeNumber(DataViewStream.setUint32, i, opt_littleEndian);
  return this;
};


/**
 * @param {number} i
 * @param {boolean=} opt_littleEndian
 * @return {!GrowingDataViewStream} Returns this object.
 */
GrowingDataViewStream.prototype.setInt8 = function(i, opt_littleEndian) {
  this.writeNumber(DataViewStream.setInt8, i, opt_littleEndian);
  return this;
};


/**
 * @param {number} i
 * @param {boolean=} opt_littleEndian
 * @return {!GrowingDataViewStream} Returns this object.
 */
GrowingDataViewStream.prototype.setInt16 = function(i, opt_littleEndian) {
  this.writeNumber(DataViewStream.setInt16, i, opt_littleEndian);
  return this;
};


/**
 * @param {number} i
 * @param {boolean=} opt_littleEndian
 * @return {!GrowingDataViewStream} Returns this object.
 */
GrowingDataViewStream.prototype.setInt32 = function(i, opt_littleEndian) {
  this.writeNumber(DataViewStream.setInt32, i, opt_littleEndian);
  return this;
};


/**
 * @param {number} i
 * @param {boolean=} opt_littleEndian
 * @return {!GrowingDataViewStream} Returns this object.
 */
GrowingDataViewStream.prototype.setFloat32 = function(i, opt_littleEndian) {
  this.writeNumber(DataViewStream.setFloat32, i, opt_littleEndian);
  return this;
};


/**
 * @param {number} i
 * @param {boolean=} opt_littleEndian
 * @return {!GrowingDataViewStream} Returns this object.
 */
GrowingDataViewStream.prototype.setFloat64 = function(i, opt_littleEndian) {
  this.writeNumber(DataViewStream.setFloat64, i, opt_littleEndian);
  return this;
};
});  // goog.scope
