(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~custom-app-custom-app-module~database-manager-database-manager-module~forms-builder-forms-bu~b460a332"],{

/***/ "./node_modules/emitter-component/index.js":
/*!*************************************************!*\
  !*** ./node_modules/emitter-component/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ "./node_modules/immediate/lib/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/immediate/lib/browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}


/***/ }),

/***/ "./node_modules/jszip/lib/base64.js":
/*!******************************************!*\
  !*** ./node_modules/jszip/lib/base64.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utils = __webpack_require__(/*! ./utils */ "./node_modules/jszip/lib/utils.js");
var support = __webpack_require__(/*! ./support */ "./node_modules/jszip/lib/support.js");
// private property
var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";


// public method for encoding
exports.encode = function(input) {
    var output = [];
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0, len = input.length, remainingBytes = len;

    var isArray = utils.getTypeOf(input) !== "string";
    while (i < input.length) {
        remainingBytes = len - i;

        if (!isArray) {
            chr1 = input.charCodeAt(i++);
            chr2 = i < len ? input.charCodeAt(i++) : 0;
            chr3 = i < len ? input.charCodeAt(i++) : 0;
        } else {
            chr1 = input[i++];
            chr2 = i < len ? input[i++] : 0;
            chr3 = i < len ? input[i++] : 0;
        }

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = remainingBytes > 1 ? (((chr2 & 15) << 2) | (chr3 >> 6)) : 64;
        enc4 = remainingBytes > 2 ? (chr3 & 63) : 64;

        output.push(_keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4));

    }

    return output.join("");
};

// public method for decoding
exports.decode = function(input) {
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0, resultIndex = 0;

    var dataUrlPrefix = "data:";

    if (input.substr(0, dataUrlPrefix.length) === dataUrlPrefix) {
        // This is a common error: people give a data url
        // (data:image/png;base64,iVBOR...) with a {base64: true} and
        // wonders why things don't work.
        // We can detect that the string input looks like a data url but we
        // *can't* be sure it is one: removing everything up to the comma would
        // be too dangerous.
        throw new Error("Invalid base64 input, it looks like a data url.");
    }

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    var totalLength = input.length * 3 / 4;
    if(input.charAt(input.length - 1) === _keyStr.charAt(64)) {
        totalLength--;
    }
    if(input.charAt(input.length - 2) === _keyStr.charAt(64)) {
        totalLength--;
    }
    if (totalLength % 1 !== 0) {
        // totalLength is not an integer, the length does not match a valid
        // base64 content. That can happen if:
        // - the input is not a base64 content
        // - the input is *almost* a base64 content, with a extra chars at the
        //   beginning or at the end
        // - the input uses a base64 variant (base64url for example)
        throw new Error("Invalid base64 input, bad content length.");
    }
    var output;
    if (support.uint8array) {
        output = new Uint8Array(totalLength|0);
    } else {
        output = new Array(totalLength|0);
    }

    while (i < input.length) {

        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output[resultIndex++] = chr1;

        if (enc3 !== 64) {
            output[resultIndex++] = chr2;
        }
        if (enc4 !== 64) {
            output[resultIndex++] = chr3;
        }

    }

    return output;
};


/***/ }),

/***/ "./node_modules/jszip/lib/compressedObject.js":
/*!****************************************************!*\
  !*** ./node_modules/jszip/lib/compressedObject.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var external = __webpack_require__(/*! ./external */ "./node_modules/jszip/lib/external.js");
var DataWorker = __webpack_require__(/*! ./stream/DataWorker */ "./node_modules/jszip/lib/stream/DataWorker.js");
var DataLengthProbe = __webpack_require__(/*! ./stream/DataLengthProbe */ "./node_modules/jszip/lib/stream/DataLengthProbe.js");
var Crc32Probe = __webpack_require__(/*! ./stream/Crc32Probe */ "./node_modules/jszip/lib/stream/Crc32Probe.js");
var DataLengthProbe = __webpack_require__(/*! ./stream/DataLengthProbe */ "./node_modules/jszip/lib/stream/DataLengthProbe.js");

/**
 * Represent a compressed object, with everything needed to decompress it.
 * @constructor
 * @param {number} compressedSize the size of the data compressed.
 * @param {number} uncompressedSize the size of the data after decompression.
 * @param {number} crc32 the crc32 of the decompressed file.
 * @param {object} compression the type of compression, see lib/compressions.js.
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the compressed data.
 */
function CompressedObject(compressedSize, uncompressedSize, crc32, compression, data) {
    this.compressedSize = compressedSize;
    this.uncompressedSize = uncompressedSize;
    this.crc32 = crc32;
    this.compression = compression;
    this.compressedContent = data;
}

CompressedObject.prototype = {
    /**
     * Create a worker to get the uncompressed content.
     * @return {GenericWorker} the worker.
     */
    getContentWorker : function () {
        var worker = new DataWorker(external.Promise.resolve(this.compressedContent))
        .pipe(this.compression.uncompressWorker())
        .pipe(new DataLengthProbe("data_length"));

        var that = this;
        worker.on("end", function () {
            if(this.streamInfo['data_length'] !== that.uncompressedSize) {
                throw new Error("Bug : uncompressed data size mismatch");
            }
        });
        return worker;
    },
    /**
     * Create a worker to get the compressed content.
     * @return {GenericWorker} the worker.
     */
    getCompressedWorker : function () {
        return new DataWorker(external.Promise.resolve(this.compressedContent))
        .withStreamInfo("compressedSize", this.compressedSize)
        .withStreamInfo("uncompressedSize", this.uncompressedSize)
        .withStreamInfo("crc32", this.crc32)
        .withStreamInfo("compression", this.compression)
        ;
    }
};

/**
 * Chain the given worker with other workers to compress the content with the
 * given compresion.
 * @param {GenericWorker} uncompressedWorker the worker to pipe.
 * @param {Object} compression the compression object.
 * @param {Object} compressionOptions the options to use when compressing.
 * @return {GenericWorker} the new worker compressing the content.
 */
CompressedObject.createWorkerFrom = function (uncompressedWorker, compression, compressionOptions) {
    return uncompressedWorker
    .pipe(new Crc32Probe())
    .pipe(new DataLengthProbe("uncompressedSize"))
    .pipe(compression.compressWorker(compressionOptions))
    .pipe(new DataLengthProbe("compressedSize"))
    .withStreamInfo("compression", compression);
};

module.exports = CompressedObject;


/***/ }),

/***/ "./node_modules/jszip/lib/compressions.js":
/*!************************************************!*\
  !*** ./node_modules/jszip/lib/compressions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GenericWorker = __webpack_require__(/*! ./stream/GenericWorker */ "./node_modules/jszip/lib/stream/GenericWorker.js");

exports.STORE = {
    magic: "\x00\x00",
    compressWorker : function (compressionOptions) {
        return new GenericWorker("STORE compression");
    },
    uncompressWorker : function () {
        return new GenericWorker("STORE decompression");
    }
};
exports.DEFLATE = __webpack_require__(/*! ./flate */ "./node_modules/jszip/lib/flate.js");


/***/ }),

/***/ "./node_modules/jszip/lib/crc32.js":
/*!*****************************************!*\
  !*** ./node_modules/jszip/lib/crc32.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/jszip/lib/utils.js");

/**
 * The following functions come from pako, from pako/lib/zlib/crc32.js
 * released under the MIT license, see pako https://github.com/nodeca/pako/
 */

// Use ordinary array, since untyped makes no boost here
function makeTable() {
    var c, table = [];

    for(var n =0; n < 256; n++){
        c = n;
        for(var k =0; k < 8; k++){
            c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
        }
        table[n] = c;
    }

    return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
    var t = crcTable, end = pos + len;

    crc = crc ^ (-1);

    for (var i = pos; i < end; i++ ) {
        crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
    }

    return (crc ^ (-1)); // >>> 0;
}

// That's all for the pako functions.

/**
 * Compute the crc32 of a string.
 * This is almost the same as the function crc32, but for strings. Using the
 * same function for the two use cases leads to horrible performances.
 * @param {Number} crc the starting value of the crc.
 * @param {String} str the string to use.
 * @param {Number} len the length of the string.
 * @param {Number} pos the starting position for the crc32 computation.
 * @return {Number} the computed crc32.
 */
function crc32str(crc, str, len, pos) {
    var t = crcTable, end = pos + len;

    crc = crc ^ (-1);

    for (var i = pos; i < end; i++ ) {
        crc = (crc >>> 8) ^ t[(crc ^ str.charCodeAt(i)) & 0xFF];
    }

    return (crc ^ (-1)); // >>> 0;
}

module.exports = function crc32wrapper(input, crc) {
    if (typeof input === "undefined" || !input.length) {
        return 0;
    }

    var isArray = utils.getTypeOf(input) !== "string";

    if(isArray) {
        return crc32(crc|0, input, input.length, 0);
    } else {
        return crc32str(crc|0, input, input.length, 0);
    }
};


/***/ }),

/***/ "./node_modules/jszip/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/jszip/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.base64 = false;
exports.binary = false;
exports.dir = false;
exports.createFolders = true;
exports.date = null;
exports.compression = null;
exports.compressionOptions = null;
exports.comment = null;
exports.unixPermissions = null;
exports.dosPermissions = null;


/***/ }),

/***/ "./node_modules/jszip/lib/external.js":
/*!********************************************!*\
  !*** ./node_modules/jszip/lib/external.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global Promise */


// load the global object first:
// - it should be better integrated in the system (unhandledRejection in node)
// - the environment may have a custom Promise implementation (see zone.js)
var ES6Promise = null;
if (typeof Promise !== "undefined") {
    ES6Promise = Promise;
} else {
    ES6Promise = __webpack_require__(/*! lie */ "./node_modules/lie/lib/browser.js");
}

/**
 * Let the user use/change some implementations.
 */
module.exports = {
    Promise: ES6Promise
};


/***/ }),

/***/ "./node_modules/jszip/lib/flate.js":
/*!*****************************************!*\
  !*** ./node_modules/jszip/lib/flate.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var USE_TYPEDARRAY = (typeof Uint8Array !== 'undefined') && (typeof Uint16Array !== 'undefined') && (typeof Uint32Array !== 'undefined');

var pako = __webpack_require__(/*! pako */ "./node_modules/pako/index.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/jszip/lib/utils.js");
var GenericWorker = __webpack_require__(/*! ./stream/GenericWorker */ "./node_modules/jszip/lib/stream/GenericWorker.js");

var ARRAY_TYPE = USE_TYPEDARRAY ? "uint8array" : "array";

exports.magic = "\x08\x00";

/**
 * Create a worker that uses pako to inflate/deflate.
 * @constructor
 * @param {String} action the name of the pako function to call : either "Deflate" or "Inflate".
 * @param {Object} options the options to use when (de)compressing.
 */
function FlateWorker(action, options) {
    GenericWorker.call(this, "FlateWorker/" + action);

    this._pako = null;
    this._pakoAction = action;
    this._pakoOptions = options;
    // the `meta` object from the last chunk received
    // this allow this worker to pass around metadata
    this.meta = {};
}

utils.inherits(FlateWorker, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
FlateWorker.prototype.processChunk = function (chunk) {
    this.meta = chunk.meta;
    if (this._pako === null) {
        this._createPako();
    }
    this._pako.push(utils.transformTo(ARRAY_TYPE, chunk.data), false);
};

/**
 * @see GenericWorker.flush
 */
FlateWorker.prototype.flush = function () {
    GenericWorker.prototype.flush.call(this);
    if (this._pako === null) {
        this._createPako();
    }
    this._pako.push([], true);
};
/**
 * @see GenericWorker.cleanUp
 */
FlateWorker.prototype.cleanUp = function () {
    GenericWorker.prototype.cleanUp.call(this);
    this._pako = null;
};

/**
 * Create the _pako object.
 * TODO: lazy-loading this object isn't the best solution but it's the
 * quickest. The best solution is to lazy-load the worker list. See also the
 * issue #446.
 */
FlateWorker.prototype._createPako = function () {
    this._pako = new pako[this._pakoAction]({
        raw: true,
        level: this._pakoOptions.level || -1 // default compression
    });
    var self = this;
    this._pako.onData = function(data) {
        self.push({
            data : data,
            meta : self.meta
        });
    };
};

exports.compressWorker = function (compressionOptions) {
    return new FlateWorker("Deflate", compressionOptions);
};
exports.uncompressWorker = function () {
    return new FlateWorker("Inflate", {});
};


/***/ }),

/***/ "./node_modules/jszip/lib/generate/ZipFileWorker.js":
/*!**********************************************************!*\
  !*** ./node_modules/jszip/lib/generate/ZipFileWorker.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/jszip/lib/utils.js");
var GenericWorker = __webpack_require__(/*! ../stream/GenericWorker */ "./node_modules/jszip/lib/stream/GenericWorker.js");
var utf8 = __webpack_require__(/*! ../utf8 */ "./node_modules/jszip/lib/utf8.js");
var crc32 = __webpack_require__(/*! ../crc32 */ "./node_modules/jszip/lib/crc32.js");
var signature = __webpack_require__(/*! ../signature */ "./node_modules/jszip/lib/signature.js");

/**
 * Transform an integer into a string in hexadecimal.
 * @private
 * @param {number} dec the number to convert.
 * @param {number} bytes the number of bytes to generate.
 * @returns {string} the result.
 */
var decToHex = function(dec, bytes) {
    var hex = "", i;
    for (i = 0; i < bytes; i++) {
        hex += String.fromCharCode(dec & 0xff);
        dec = dec >>> 8;
    }
    return hex;
};

/**
 * Generate the UNIX part of the external file attributes.
 * @param {Object} unixPermissions the unix permissions or null.
 * @param {Boolean} isDir true if the entry is a directory, false otherwise.
 * @return {Number} a 32 bit integer.
 *
 * adapted from http://unix.stackexchange.com/questions/14705/the-zip-formats-external-file-attribute :
 *
 * TTTTsstrwxrwxrwx0000000000ADVSHR
 * ^^^^____________________________ file type, see zipinfo.c (UNX_*)
 *     ^^^_________________________ setuid, setgid, sticky
 *        ^^^^^^^^^________________ permissions
 *                 ^^^^^^^^^^______ not used ?
 *                           ^^^^^^ DOS attribute bits : Archive, Directory, Volume label, System file, Hidden, Read only
 */
var generateUnixExternalFileAttr = function (unixPermissions, isDir) {

    var result = unixPermissions;
    if (!unixPermissions) {
        // I can't use octal values in strict mode, hence the hexa.
        //  040775 => 0x41fd
        // 0100664 => 0x81b4
        result = isDir ? 0x41fd : 0x81b4;
    }
    return (result & 0xFFFF) << 16;
};

/**
 * Generate the DOS part of the external file attributes.
 * @param {Object} dosPermissions the dos permissions or null.
 * @param {Boolean} isDir true if the entry is a directory, false otherwise.
 * @return {Number} a 32 bit integer.
 *
 * Bit 0     Read-Only
 * Bit 1     Hidden
 * Bit 2     System
 * Bit 3     Volume Label
 * Bit 4     Directory
 * Bit 5     Archive
 */
var generateDosExternalFileAttr = function (dosPermissions, isDir) {

    // the dir flag is already set for compatibility
    return (dosPermissions || 0)  & 0x3F;
};

/**
 * Generate the various parts used in the construction of the final zip file.
 * @param {Object} streamInfo the hash with informations about the compressed file.
 * @param {Boolean} streamedContent is the content streamed ?
 * @param {Boolean} streamingEnded is the stream finished ?
 * @param {number} offset the current offset from the start of the zip file.
 * @param {String} platform let's pretend we are this platform (change platform dependents fields)
 * @param {Function} encodeFileName the function to encode the file name / comment.
 * @return {Object} the zip parts.
 */
var generateZipParts = function(streamInfo, streamedContent, streamingEnded, offset, platform, encodeFileName) {
    var file = streamInfo['file'],
    compression = streamInfo['compression'],
    useCustomEncoding = encodeFileName !== utf8.utf8encode,
    encodedFileName = utils.transformTo("string", encodeFileName(file.name)),
    utfEncodedFileName = utils.transformTo("string", utf8.utf8encode(file.name)),
    comment = file.comment,
    encodedComment = utils.transformTo("string", encodeFileName(comment)),
    utfEncodedComment = utils.transformTo("string", utf8.utf8encode(comment)),
    useUTF8ForFileName = utfEncodedFileName.length !== file.name.length,
    useUTF8ForComment = utfEncodedComment.length !== comment.length,
    dosTime,
    dosDate,
    extraFields = "",
    unicodePathExtraField = "",
    unicodeCommentExtraField = "",
    dir = file.dir,
    date = file.date;


    var dataInfo = {
        crc32 : 0,
        compressedSize : 0,
        uncompressedSize : 0
    };

    // if the content is streamed, the sizes/crc32 are only available AFTER
    // the end of the stream.
    if (!streamedContent || streamingEnded) {
        dataInfo.crc32 = streamInfo['crc32'];
        dataInfo.compressedSize = streamInfo['compressedSize'];
        dataInfo.uncompressedSize = streamInfo['uncompressedSize'];
    }

    var bitflag = 0;
    if (streamedContent) {
        // Bit 3: the sizes/crc32 are set to zero in the local header.
        // The correct values are put in the data descriptor immediately
        // following the compressed data.
        bitflag |= 0x0008;
    }
    if (!useCustomEncoding && (useUTF8ForFileName || useUTF8ForComment)) {
        // Bit 11: Language encoding flag (EFS).
        bitflag |= 0x0800;
    }


    var extFileAttr = 0;
    var versionMadeBy = 0;
    if (dir) {
        // dos or unix, we set the dos dir flag
        extFileAttr |= 0x00010;
    }
    if(platform === "UNIX") {
        versionMadeBy = 0x031E; // UNIX, version 3.0
        extFileAttr |= generateUnixExternalFileAttr(file.unixPermissions, dir);
    } else { // DOS or other, fallback to DOS
        versionMadeBy = 0x0014; // DOS, version 2.0
        extFileAttr |= generateDosExternalFileAttr(file.dosPermissions, dir);
    }

    // date
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/52/13.html
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/65/16.html
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/66/16.html

    dosTime = date.getUTCHours();
    dosTime = dosTime << 6;
    dosTime = dosTime | date.getUTCMinutes();
    dosTime = dosTime << 5;
    dosTime = dosTime | date.getUTCSeconds() / 2;

    dosDate = date.getUTCFullYear() - 1980;
    dosDate = dosDate << 4;
    dosDate = dosDate | (date.getUTCMonth() + 1);
    dosDate = dosDate << 5;
    dosDate = dosDate | date.getUTCDate();

    if (useUTF8ForFileName) {
        // set the unicode path extra field. unzip needs at least one extra
        // field to correctly handle unicode path, so using the path is as good
        // as any other information. This could improve the situation with
        // other archive managers too.
        // This field is usually used without the utf8 flag, with a non
        // unicode path in the header (winrar, winzip). This helps (a bit)
        // with the messy Windows' default compressed folders feature but
        // breaks on p7zip which doesn't seek the unicode path extra field.
        // So for now, UTF-8 everywhere !
        unicodePathExtraField =
            // Version
            decToHex(1, 1) +
            // NameCRC32
            decToHex(crc32(encodedFileName), 4) +
            // UnicodeName
            utfEncodedFileName;

        extraFields +=
            // Info-ZIP Unicode Path Extra Field
            "\x75\x70" +
            // size
            decToHex(unicodePathExtraField.length, 2) +
            // content
            unicodePathExtraField;
    }

    if(useUTF8ForComment) {

        unicodeCommentExtraField =
            // Version
            decToHex(1, 1) +
            // CommentCRC32
            decToHex(crc32(encodedComment), 4) +
            // UnicodeName
            utfEncodedComment;

        extraFields +=
            // Info-ZIP Unicode Path Extra Field
            "\x75\x63" +
            // size
            decToHex(unicodeCommentExtraField.length, 2) +
            // content
            unicodeCommentExtraField;
    }

    var header = "";

    // version needed to extract
    header += "\x0A\x00";
    // general purpose bit flag
    header += decToHex(bitflag, 2);
    // compression method
    header += compression.magic;
    // last mod file time
    header += decToHex(dosTime, 2);
    // last mod file date
    header += decToHex(dosDate, 2);
    // crc-32
    header += decToHex(dataInfo.crc32, 4);
    // compressed size
    header += decToHex(dataInfo.compressedSize, 4);
    // uncompressed size
    header += decToHex(dataInfo.uncompressedSize, 4);
    // file name length
    header += decToHex(encodedFileName.length, 2);
    // extra field length
    header += decToHex(extraFields.length, 2);


    var fileRecord = signature.LOCAL_FILE_HEADER + header + encodedFileName + extraFields;

    var dirRecord = signature.CENTRAL_FILE_HEADER +
        // version made by (00: DOS)
        decToHex(versionMadeBy, 2) +
        // file header (common to file and central directory)
        header +
        // file comment length
        decToHex(encodedComment.length, 2) +
        // disk number start
        "\x00\x00" +
        // internal file attributes TODO
        "\x00\x00" +
        // external file attributes
        decToHex(extFileAttr, 4) +
        // relative offset of local header
        decToHex(offset, 4) +
        // file name
        encodedFileName +
        // extra field
        extraFields +
        // file comment
        encodedComment;

    return {
        fileRecord: fileRecord,
        dirRecord: dirRecord
    };
};

/**
 * Generate the EOCD record.
 * @param {Number} entriesCount the number of entries in the zip file.
 * @param {Number} centralDirLength the length (in bytes) of the central dir.
 * @param {Number} localDirLength the length (in bytes) of the local dir.
 * @param {String} comment the zip file comment as a binary string.
 * @param {Function} encodeFileName the function to encode the comment.
 * @return {String} the EOCD record.
 */
var generateCentralDirectoryEnd = function (entriesCount, centralDirLength, localDirLength, comment, encodeFileName) {
    var dirEnd = "";
    var encodedComment = utils.transformTo("string", encodeFileName(comment));

    // end of central dir signature
    dirEnd = signature.CENTRAL_DIRECTORY_END +
        // number of this disk
        "\x00\x00" +
        // number of the disk with the start of the central directory
        "\x00\x00" +
        // total number of entries in the central directory on this disk
        decToHex(entriesCount, 2) +
        // total number of entries in the central directory
        decToHex(entriesCount, 2) +
        // size of the central directory   4 bytes
        decToHex(centralDirLength, 4) +
        // offset of start of central directory with respect to the starting disk number
        decToHex(localDirLength, 4) +
        // .ZIP file comment length
        decToHex(encodedComment.length, 2) +
        // .ZIP file comment
        encodedComment;

    return dirEnd;
};

/**
 * Generate data descriptors for a file entry.
 * @param {Object} streamInfo the hash generated by a worker, containing informations
 * on the file entry.
 * @return {String} the data descriptors.
 */
var generateDataDescriptors = function (streamInfo) {
    var descriptor = "";
    descriptor = signature.DATA_DESCRIPTOR +
        // crc-32                          4 bytes
        decToHex(streamInfo['crc32'], 4) +
        // compressed size                 4 bytes
        decToHex(streamInfo['compressedSize'], 4) +
        // uncompressed size               4 bytes
        decToHex(streamInfo['uncompressedSize'], 4);

    return descriptor;
};


/**
 * A worker to concatenate other workers to create a zip file.
 * @param {Boolean} streamFiles `true` to stream the content of the files,
 * `false` to accumulate it.
 * @param {String} comment the comment to use.
 * @param {String} platform the platform to use, "UNIX" or "DOS".
 * @param {Function} encodeFileName the function to encode file names and comments.
 */
function ZipFileWorker(streamFiles, comment, platform, encodeFileName) {
    GenericWorker.call(this, "ZipFileWorker");
    // The number of bytes written so far. This doesn't count accumulated chunks.
    this.bytesWritten = 0;
    // The comment of the zip file
    this.zipComment = comment;
    // The platform "generating" the zip file.
    this.zipPlatform = platform;
    // the function to encode file names and comments.
    this.encodeFileName = encodeFileName;
    // Should we stream the content of the files ?
    this.streamFiles = streamFiles;
    // If `streamFiles` is false, we will need to accumulate the content of the
    // files to calculate sizes / crc32 (and write them *before* the content).
    // This boolean indicates if we are accumulating chunks (it will change a lot
    // during the lifetime of this worker).
    this.accumulate = false;
    // The buffer receiving chunks when accumulating content.
    this.contentBuffer = [];
    // The list of generated directory records.
    this.dirRecords = [];
    // The offset (in bytes) from the beginning of the zip file for the current source.
    this.currentSourceOffset = 0;
    // The total number of entries in this zip file.
    this.entriesCount = 0;
    // the name of the file currently being added, null when handling the end of the zip file.
    // Used for the emited metadata.
    this.currentFile = null;



    this._sources = [];
}
utils.inherits(ZipFileWorker, GenericWorker);

/**
 * @see GenericWorker.push
 */
ZipFileWorker.prototype.push = function (chunk) {

    var currentFilePercent = chunk.meta.percent || 0;
    var entriesCount = this.entriesCount;
    var remainingFiles = this._sources.length;

    if(this.accumulate) {
        this.contentBuffer.push(chunk);
    } else {
        this.bytesWritten += chunk.data.length;

        GenericWorker.prototype.push.call(this, {
            data : chunk.data,
            meta : {
                currentFile : this.currentFile,
                percent : entriesCount ? (currentFilePercent + 100 * (entriesCount - remainingFiles - 1)) / entriesCount : 100
            }
        });
    }
};

/**
 * The worker started a new source (an other worker).
 * @param {Object} streamInfo the streamInfo object from the new source.
 */
ZipFileWorker.prototype.openedSource = function (streamInfo) {
    this.currentSourceOffset = this.bytesWritten;
    this.currentFile = streamInfo['file'].name;

    var streamedContent = this.streamFiles && !streamInfo['file'].dir;

    // don't stream folders (because they don't have any content)
    if(streamedContent) {
        var record = generateZipParts(streamInfo, streamedContent, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        this.push({
            data : record.fileRecord,
            meta : {percent:0}
        });
    } else {
        // we need to wait for the whole file before pushing anything
        this.accumulate = true;
    }
};

/**
 * The worker finished a source (an other worker).
 * @param {Object} streamInfo the streamInfo object from the finished source.
 */
ZipFileWorker.prototype.closedSource = function (streamInfo) {
    this.accumulate = false;
    var streamedContent = this.streamFiles && !streamInfo['file'].dir;
    var record = generateZipParts(streamInfo, streamedContent, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);

    this.dirRecords.push(record.dirRecord);
    if(streamedContent) {
        // after the streamed file, we put data descriptors
        this.push({
            data : generateDataDescriptors(streamInfo),
            meta : {percent:100}
        });
    } else {
        // the content wasn't streamed, we need to push everything now
        // first the file record, then the content
        this.push({
            data : record.fileRecord,
            meta : {percent:0}
        });
        while(this.contentBuffer.length) {
            this.push(this.contentBuffer.shift());
        }
    }
    this.currentFile = null;
};

/**
 * @see GenericWorker.flush
 */
ZipFileWorker.prototype.flush = function () {

    var localDirLength = this.bytesWritten;
    for(var i = 0; i < this.dirRecords.length; i++) {
        this.push({
            data : this.dirRecords[i],
            meta : {percent:100}
        });
    }
    var centralDirLength = this.bytesWritten - localDirLength;

    var dirEnd = generateCentralDirectoryEnd(this.dirRecords.length, centralDirLength, localDirLength, this.zipComment, this.encodeFileName);

    this.push({
        data : dirEnd,
        meta : {percent:100}
    });
};

/**
 * Prepare the next source to be read.
 */
ZipFileWorker.prototype.prepareNextSource = function () {
    this.previous = this._sources.shift();
    this.openedSource(this.previous.streamInfo);
    if (this.isPaused) {
        this.previous.pause();
    } else {
        this.previous.resume();
    }
};

/**
 * @see GenericWorker.registerPrevious
 */
ZipFileWorker.prototype.registerPrevious = function (previous) {
    this._sources.push(previous);
    var self = this;

    previous.on('data', function (chunk) {
        self.processChunk(chunk);
    });
    previous.on('end', function () {
        self.closedSource(self.previous.streamInfo);
        if(self._sources.length) {
            self.prepareNextSource();
        } else {
            self.end();
        }
    });
    previous.on('error', function (e) {
        self.error(e);
    });
    return this;
};

/**
 * @see GenericWorker.resume
 */
ZipFileWorker.prototype.resume = function () {
    if(!GenericWorker.prototype.resume.call(this)) {
        return false;
    }

    if (!this.previous && this._sources.length) {
        this.prepareNextSource();
        return true;
    }
    if (!this.previous && !this._sources.length && !this.generatedError) {
        this.end();
        return true;
    }
};

/**
 * @see GenericWorker.error
 */
ZipFileWorker.prototype.error = function (e) {
    var sources = this._sources;
    if(!GenericWorker.prototype.error.call(this, e)) {
        return false;
    }
    for(var i = 0; i < sources.length; i++) {
        try {
            sources[i].error(e);
        } catch(e) {
            // the `error` exploded, nothing to do
        }
    }
    return true;
};

/**
 * @see GenericWorker.lock
 */
ZipFileWorker.prototype.lock = function () {
    GenericWorker.prototype.lock.call(this);
    var sources = this._sources;
    for(var i = 0; i < sources.length; i++) {
        sources[i].lock();
    }
};

module.exports = ZipFileWorker;


/***/ }),

/***/ "./node_modules/jszip/lib/generate/index.js":
/*!**************************************************!*\
  !*** ./node_modules/jszip/lib/generate/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compressions = __webpack_require__(/*! ../compressions */ "./node_modules/jszip/lib/compressions.js");
var ZipFileWorker = __webpack_require__(/*! ./ZipFileWorker */ "./node_modules/jszip/lib/generate/ZipFileWorker.js");

/**
 * Find the compression to use.
 * @param {String} fileCompression the compression defined at the file level, if any.
 * @param {String} zipCompression the compression defined at the load() level.
 * @return {Object} the compression object to use.
 */
var getCompression = function (fileCompression, zipCompression) {

    var compressionName = fileCompression || zipCompression;
    var compression = compressions[compressionName];
    if (!compression) {
        throw new Error(compressionName + " is not a valid compression method !");
    }
    return compression;
};

/**
 * Create a worker to generate a zip file.
 * @param {JSZip} zip the JSZip instance at the right root level.
 * @param {Object} options to generate the zip file.
 * @param {String} comment the comment to use.
 */
exports.generateWorker = function (zip, options, comment) {

    var zipFileWorker = new ZipFileWorker(options.streamFiles, comment, options.platform, options.encodeFileName);
    var entriesCount = 0;
    try {

        zip.forEach(function (relativePath, file) {
            entriesCount++;
            var compression = getCompression(file.options.compression, options.compression);
            var compressionOptions = file.options.compressionOptions || options.compressionOptions || {};
            var dir = file.dir, date = file.date;

            file._compressWorker(compression, compressionOptions)
            .withStreamInfo("file", {
                name : relativePath,
                dir : dir,
                date : date,
                comment : file.comment || "",
                unixPermissions : file.unixPermissions,
                dosPermissions : file.dosPermissions
            })
            .pipe(zipFileWorker);
        });
        zipFileWorker.entriesCount = entriesCount;
    } catch (e) {
        zipFileWorker.error(e);
    }

    return zipFileWorker;
};


/***/ }),

/***/ "./node_modules/jszip/lib/index.js":
/*!*****************************************!*\
  !*** ./node_modules/jszip/lib/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Representation a of zip file in js
 * @constructor
 */
function JSZip() {
    // if this constructor is used without `new`, it adds `new` before itself:
    if(!(this instanceof JSZip)) {
        return new JSZip();
    }

    if(arguments.length) {
        throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
    }

    // object containing the files :
    // {
    //   "folder/" : {...},
    //   "folder/data.txt" : {...}
    // }
    this.files = {};

    this.comment = null;

    // Where we are in the hierarchy
    this.root = "";
    this.clone = function() {
        var newObj = new JSZip();
        for (var i in this) {
            if (typeof this[i] !== "function") {
                newObj[i] = this[i];
            }
        }
        return newObj;
    };
}
JSZip.prototype = __webpack_require__(/*! ./object */ "./node_modules/jszip/lib/object.js");
JSZip.prototype.loadAsync = __webpack_require__(/*! ./load */ "./node_modules/jszip/lib/load.js");
JSZip.support = __webpack_require__(/*! ./support */ "./node_modules/jszip/lib/support.js");
JSZip.defaults = __webpack_require__(/*! ./defaults */ "./node_modules/jszip/lib/defaults.js");

// TODO find a better way to handle this version,
// a require('package.json').version doesn't work with webpack, see #327
JSZip.version = "3.2.0";

JSZip.loadAsync = function (content, options) {
    return new JSZip().loadAsync(content, options);
};

JSZip.external = __webpack_require__(/*! ./external */ "./node_modules/jszip/lib/external.js");
module.exports = JSZip;


/***/ }),

/***/ "./node_modules/jszip/lib/load.js":
/*!****************************************!*\
  !*** ./node_modules/jszip/lib/load.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utils = __webpack_require__(/*! ./utils */ "./node_modules/jszip/lib/utils.js");
var external = __webpack_require__(/*! ./external */ "./node_modules/jszip/lib/external.js");
var utf8 = __webpack_require__(/*! ./utf8 */ "./node_modules/jszip/lib/utf8.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/jszip/lib/utils.js");
var ZipEntries = __webpack_require__(/*! ./zipEntries */ "./node_modules/jszip/lib/zipEntries.js");
var Crc32Probe = __webpack_require__(/*! ./stream/Crc32Probe */ "./node_modules/jszip/lib/stream/Crc32Probe.js");
var nodejsUtils = __webpack_require__(/*! ./nodejsUtils */ "./node_modules/jszip/lib/nodejsUtils.js");

/**
 * Check the CRC32 of an entry.
 * @param {ZipEntry} zipEntry the zip entry to check.
 * @return {Promise} the result.
 */
function checkEntryCRC32(zipEntry) {
    return new external.Promise(function (resolve, reject) {
        var worker = zipEntry.decompressed.getContentWorker().pipe(new Crc32Probe());
        worker.on("error", function (e) {
            reject(e);
        })
        .on("end", function () {
            if (worker.streamInfo.crc32 !== zipEntry.decompressed.crc32) {
                reject(new Error("Corrupted zip : CRC32 mismatch"));
            } else {
                resolve();
            }
        })
        .resume();
    });
}

module.exports = function(data, options) {
    var zip = this;
    options = utils.extend(options || {}, {
        base64: false,
        checkCRC32: false,
        optimizedBinaryString: false,
        createFolders: false,
        decodeFileName: utf8.utf8decode
    });

    if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
        return external.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file."));
    }

    return utils.prepareContent("the loaded zip file", data, true, options.optimizedBinaryString, options.base64)
    .then(function(data) {
        var zipEntries = new ZipEntries(options);
        zipEntries.load(data);
        return zipEntries;
    }).then(function checkCRC32(zipEntries) {
        var promises = [external.Promise.resolve(zipEntries)];
        var files = zipEntries.files;
        if (options.checkCRC32) {
            for (var i = 0; i < files.length; i++) {
                promises.push(checkEntryCRC32(files[i]));
            }
        }
        return external.Promise.all(promises);
    }).then(function addFiles(results) {
        var zipEntries = results.shift();
        var files = zipEntries.files;
        for (var i = 0; i < files.length; i++) {
            var input = files[i];
            zip.file(input.fileNameStr, input.decompressed, {
                binary: true,
                optimizedBinaryString: true,
                date: input.date,
                dir: input.dir,
                comment : input.fileCommentStr.length ? input.fileCommentStr : null,
                unixPermissions : input.unixPermissions,
                dosPermissions : input.dosPermissions,
                createFolders: options.createFolders
            });
        }
        if (zipEntries.zipComment.length) {
            zip.comment = zipEntries.zipComment;
        }

        return zip;
    });
};


/***/ }),

/***/ "./node_modules/jszip/lib/nodejs/NodejsStreamInputAdapter.js":
/*!*******************************************************************!*\
  !*** ./node_modules/jszip/lib/nodejs/NodejsStreamInputAdapter.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/jszip/lib/utils.js");
var GenericWorker = __webpack_require__(/*! ../stream/GenericWorker */ "./node_modules/jszip/lib/stream/GenericWorker.js");

/**
 * A worker that use a nodejs stream as source.
 * @constructor
 * @param {String} filename the name of the file entry for this stream.
 * @param {Readable} stream the nodejs stream.
 */
function NodejsStreamInputAdapter(filename, stream) {
    GenericWorker.call(this, "Nodejs stream input adapter for " + filename);
    this._upstreamEnded = false;
    this._bindStream(stream);
}

utils.inherits(NodejsStreamInputAdapter, GenericWorker);

/**
 * Prepare the stream and bind the callbacks on it.
 * Do this ASAP on node 0.10 ! A lazy binding doesn't always work.
 * @param {Stream} stream the nodejs stream to use.
 */
NodejsStreamInputAdapter.prototype._bindStream = function (stream) {
    var self = this;
    this._stream = stream;
    stream.pause();
    stream
    .on("data", function (chunk) {
        self.push({
            data: chunk,
            meta : {
                percent : 0
            }
        });
    })
    .on("error", function (e) {
        if(self.isPaused) {
            this.generatedError = e;
        } else {
            self.error(e);
        }
    })
    .on("end", function () {
        if(self.isPaused) {
            self._upstreamEnded = true;
        } else {
            self.end();
        }
    });
};
NodejsStreamInputAdapter.prototype.pause = function () {
    if(!GenericWorker.prototype.pause.call(this)) {
        return false;
    }
    this._stream.pause();
    return true;
};
NodejsStreamInputAdapter.prototype.resume = function () {
    if(!GenericWorker.prototype.resume.call(this)) {
        return false;
    }

    if(this._upstreamEnded) {
        this.end();
    } else {
        this._stream.resume();
    }

    return true;
};

module.exports = NodejsStreamInputAdapter;


/***/ }),

/***/ "./node_modules/jszip/lib/nodejs/NodejsStreamOutputAdapter.js":
/*!********************************************************************!*\
  !*** ./node_modules/jszip/lib/nodejs/NodejsStreamOutputAdapter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Readable = __webpack_require__(/*! readable-stream */ "./node_modules/jszip/lib/readable-stream-browser.js").Readable;

var utils = __webpack_require__(/*! ../utils */ "./node_modules/jszip/lib/utils.js");
utils.inherits(NodejsStreamOutputAdapter, Readable);

/**
* A nodejs stream using a worker as source.
* @see the SourceWrapper in http://nodejs.org/api/stream.html
* @constructor
* @param {StreamHelper} helper the helper wrapping the worker
* @param {Object} options the nodejs stream options
* @param {Function} updateCb the update callback.
*/
function NodejsStreamOutputAdapter(helper, options, updateCb) {
    Readable.call(this, options);
    this._helper = helper;

    var self = this;
    helper.on("data", function (data, meta) {
        if (!self.push(data)) {
            self._helper.pause();
        }
        if(updateCb) {
            updateCb(meta);
        }
    })
    .on("error", function(e) {
        self.emit('error', e);
    })
    .on("end", function () {
        self.push(null);
    });
}


NodejsStreamOutputAdapter.prototype._read = function() {
    this._helper.resume();
};

module.exports = NodejsStreamOutputAdapter;


/***/ }),

/***/ "./node_modules/jszip/lib/nodejsUtils.js":
/*!***********************************************!*\
  !*** ./node_modules/jszip/lib/nodejsUtils.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    /**
     * True if this is running in Nodejs, will be undefined in a browser.
     * In a browser, browserify won't include this file and the whole module
     * will be resolved an empty object.
     */
    isNode : typeof Buffer !== "undefined",
    /**
     * Create a new nodejs Buffer from an existing content.
     * @param {Object} data the data to pass to the constructor.
     * @param {String} encoding the encoding to use.
     * @return {Buffer} a new Buffer.
     */
    newBufferFrom: function(data, encoding) {
        if (Buffer.from && Buffer.from !== Uint8Array.from) {
            return Buffer.from(data, encoding);
        } else {
            if (typeof data === "number") {
                // Safeguard for old Node.js versions. On newer versions,
                // Buffer.from(number) / Buffer(number, encoding) already throw.
                throw new Error("The \"data\" argument must not be a number");
            }
            return new Buffer(data, encoding);
        }
    },
    /**
     * Create a new nodejs Buffer with the specified size.
     * @param {Integer} size the size of the buffer.
     * @return {Buffer} a new Buffer.
     */
    allocBuffer: function (size) {
        if (Buffer.alloc) {
            return Buffer.alloc(size);
        } else {
            var buf = new Buffer(size);
            buf.fill(0);
            return buf;
        }
    },
    /**
     * Find out if an object is a Buffer.
     * @param {Object} b the object to test.
     * @return {Boolean} true if the object is a Buffer, false otherwise.
     */
    isBuffer : function(b){
        return Buffer.isBuffer(b);
    },

    isStream : function (obj) {
        return obj &&
            typeof obj.on === "function" &&
            typeof obj.pause === "function" &&
            typeof obj.resume === "function";
    }
};


/***/ }),

/***/ "./node_modules/jszip/lib/object.js":
/*!******************************************!*\
  !*** ./node_modules/jszip/lib/object.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utf8 = __webpack_require__(/*! ./utf8 */ "./node_modules/jszip/lib/utf8.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/jszip/lib/utils.js");
var GenericWorker = __webpack_require__(/*! ./stream/GenericWorker */ "./node_modules/jszip/lib/stream/GenericWorker.js");
var StreamHelper = __webpack_require__(/*! ./stream/StreamHelper */ "./node_modules/jszip/lib/stream/StreamHelper.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/jszip/lib/defaults.js");
var CompressedObject = __webpack_require__(/*! ./compressedObject */ "./node_modules/jszip/lib/compressedObject.js");
var ZipObject = __webpack_require__(/*! ./zipObject */ "./node_modules/jszip/lib/zipObject.js");
var generate = __webpack_require__(/*! ./generate */ "./node_modules/jszip/lib/generate/index.js");
var nodejsUtils = __webpack_require__(/*! ./nodejsUtils */ "./node_modules/jszip/lib/nodejsUtils.js");
var NodejsStreamInputAdapter = __webpack_require__(/*! ./nodejs/NodejsStreamInputAdapter */ "./node_modules/jszip/lib/nodejs/NodejsStreamInputAdapter.js");


/**
 * Add a file in the current folder.
 * @private
 * @param {string} name the name of the file
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data of the file
 * @param {Object} originalOptions the options of the file
 * @return {Object} the new file.
 */
var fileAdd = function(name, data, originalOptions) {
    // be sure sub folders exist
    var dataType = utils.getTypeOf(data),
        parent;


    /*
     * Correct options.
     */

    var o = utils.extend(originalOptions || {}, defaults);
    o.date = o.date || new Date();
    if (o.compression !== null) {
        o.compression = o.compression.toUpperCase();
    }

    if (typeof o.unixPermissions === "string") {
        o.unixPermissions = parseInt(o.unixPermissions, 8);
    }

    // UNX_IFDIR  0040000 see zipinfo.c
    if (o.unixPermissions && (o.unixPermissions & 0x4000)) {
        o.dir = true;
    }
    // Bit 4    Directory
    if (o.dosPermissions && (o.dosPermissions & 0x0010)) {
        o.dir = true;
    }

    if (o.dir) {
        name = forceTrailingSlash(name);
    }
    if (o.createFolders && (parent = parentFolder(name))) {
        folderAdd.call(this, parent, true);
    }

    var isUnicodeString = dataType === "string" && o.binary === false && o.base64 === false;
    if (!originalOptions || typeof originalOptions.binary === "undefined") {
        o.binary = !isUnicodeString;
    }


    var isCompressedEmpty = (data instanceof CompressedObject) && data.uncompressedSize === 0;

    if (isCompressedEmpty || o.dir || !data || data.length === 0) {
        o.base64 = false;
        o.binary = true;
        data = "";
        o.compression = "STORE";
        dataType = "string";
    }

    /*
     * Convert content to fit.
     */

    var zipObjectContent = null;
    if (data instanceof CompressedObject || data instanceof GenericWorker) {
        zipObjectContent = data;
    } else if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
        zipObjectContent = new NodejsStreamInputAdapter(name, data);
    } else {
        zipObjectContent = utils.prepareContent(name, data, o.binary, o.optimizedBinaryString, o.base64);
    }

    var object = new ZipObject(name, zipObjectContent, o);
    this.files[name] = object;
    /*
    TODO: we can't throw an exception because we have async promises
    (we can have a promise of a Date() for example) but returning a
    promise is useless because file(name, data) returns the JSZip
    object for chaining. Should we break that to allow the user
    to catch the error ?

    return external.Promise.resolve(zipObjectContent)
    .then(function () {
        return object;
    });
    */
};

/**
 * Find the parent folder of the path.
 * @private
 * @param {string} path the path to use
 * @return {string} the parent folder, or ""
 */
var parentFolder = function (path) {
    if (path.slice(-1) === '/') {
        path = path.substring(0, path.length - 1);
    }
    var lastSlash = path.lastIndexOf('/');
    return (lastSlash > 0) ? path.substring(0, lastSlash) : "";
};

/**
 * Returns the path with a slash at the end.
 * @private
 * @param {String} path the path to check.
 * @return {String} the path with a trailing slash.
 */
var forceTrailingSlash = function(path) {
    // Check the name ends with a /
    if (path.slice(-1) !== "/") {
        path += "/"; // IE doesn't like substr(-1)
    }
    return path;
};

/**
 * Add a (sub) folder in the current folder.
 * @private
 * @param {string} name the folder's name
 * @param {boolean=} [createFolders] If true, automatically create sub
 *  folders. Defaults to false.
 * @return {Object} the new folder.
 */
var folderAdd = function(name, createFolders) {
    createFolders = (typeof createFolders !== 'undefined') ? createFolders : defaults.createFolders;

    name = forceTrailingSlash(name);

    // Does this folder already exist?
    if (!this.files[name]) {
        fileAdd.call(this, name, null, {
            dir: true,
            createFolders: createFolders
        });
    }
    return this.files[name];
};

/**
* Cross-window, cross-Node-context regular expression detection
* @param  {Object}  object Anything
* @return {Boolean}        true if the object is a regular expression,
* false otherwise
*/
function isRegExp(object) {
    return Object.prototype.toString.call(object) === "[object RegExp]";
}

// return the actual prototype of JSZip
var out = {
    /**
     * @see loadAsync
     */
    load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },


    /**
     * Call a callback function for each entry at this folder level.
     * @param {Function} cb the callback function:
     * function (relativePath, file) {...}
     * It takes 2 arguments : the relative path and the file.
     */
    forEach: function(cb) {
        var filename, relativePath, file;
        for (filename in this.files) {
            if (!this.files.hasOwnProperty(filename)) {
                continue;
            }
            file = this.files[filename];
            relativePath = filename.slice(this.root.length, filename.length);
            if (relativePath && filename.slice(0, this.root.length) === this.root) { // the file is in the current root
                cb(relativePath, file); // TODO reverse the parameters ? need to be clean AND consistent with the filter search fn...
            }
        }
    },

    /**
     * Filter nested files/folders with the specified function.
     * @param {Function} search the predicate to use :
     * function (relativePath, file) {...}
     * It takes 2 arguments : the relative path and the file.
     * @return {Array} An array of matching elements.
     */
    filter: function(search) {
        var result = [];
        this.forEach(function (relativePath, entry) {
            if (search(relativePath, entry)) { // the file matches the function
                result.push(entry);
            }

        });
        return result;
    },

    /**
     * Add a file to the zip file, or search a file.
     * @param   {string|RegExp} name The name of the file to add (if data is defined),
     * the name of the file to find (if no data) or a regex to match files.
     * @param   {String|ArrayBuffer|Uint8Array|Buffer} data  The file data, either raw or base64 encoded
     * @param   {Object} o     File options
     * @return  {JSZip|Object|Array} this JSZip object (when adding a file),
     * a file (when searching by string) or an array of files (when searching by regex).
     */
    file: function(name, data, o) {
        if (arguments.length === 1) {
            if (isRegExp(name)) {
                var regexp = name;
                return this.filter(function(relativePath, file) {
                    return !file.dir && regexp.test(relativePath);
                });
            }
            else { // text
                var obj = this.files[this.root + name];
                if (obj && !obj.dir) {
                    return obj;
                } else {
                    return null;
                }
            }
        }
        else { // more than one argument : we have data !
            name = this.root + name;
            fileAdd.call(this, name, data, o);
        }
        return this;
    },

    /**
     * Add a directory to the zip file, or search.
     * @param   {String|RegExp} arg The name of the directory to add, or a regex to search folders.
     * @return  {JSZip} an object with the new directory as the root, or an array containing matching folders.
     */
    folder: function(arg) {
        if (!arg) {
            return this;
        }

        if (isRegExp(arg)) {
            return this.filter(function(relativePath, file) {
                return file.dir && arg.test(relativePath);
            });
        }

        // else, name is a new folder
        var name = this.root + arg;
        var newFolder = folderAdd.call(this, name);

        // Allow chaining by returning a new object with this folder as the root
        var ret = this.clone();
        ret.root = newFolder.name;
        return ret;
    },

    /**
     * Delete a file, or a directory and all sub-files, from the zip
     * @param {string} name the name of the file to delete
     * @return {JSZip} this JSZip object
     */
    remove: function(name) {
        name = this.root + name;
        var file = this.files[name];
        if (!file) {
            // Look for any folders
            if (name.slice(-1) !== "/") {
                name += "/";
            }
            file = this.files[name];
        }

        if (file && !file.dir) {
            // file
            delete this.files[name];
        } else {
            // maybe a folder, delete recursively
            var kids = this.filter(function(relativePath, file) {
                return file.name.slice(0, name.length) === name;
            });
            for (var i = 0; i < kids.length; i++) {
                delete this.files[kids[i].name];
            }
        }

        return this;
    },

    /**
     * Generate the complete zip file
     * @param {Object} options the options to generate the zip file :
     * - compression, "STORE" by default.
     * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
     * @return {String|Uint8Array|ArrayBuffer|Buffer|Blob} the zip file
     */
    generate: function(options) {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },

    /**
     * Generate the complete zip file as an internal stream.
     * @param {Object} options the options to generate the zip file :
     * - compression, "STORE" by default.
     * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
     * @return {StreamHelper} the streamed zip file.
     */
    generateInternalStream: function(options) {
      var worker, opts = {};
      try {
          opts = utils.extend(options || {}, {
              streamFiles: false,
              compression: "STORE",
              compressionOptions : null,
              type: "",
              platform: "DOS",
              comment: null,
              mimeType: 'application/zip',
              encodeFileName: utf8.utf8encode
          });

          opts.type = opts.type.toLowerCase();
          opts.compression = opts.compression.toUpperCase();

          // "binarystring" is prefered but the internals use "string".
          if(opts.type === "binarystring") {
            opts.type = "string";
          }

          if (!opts.type) {
            throw new Error("No output type specified.");
          }

          utils.checkSupport(opts.type);

          // accept nodejs `process.platform`
          if(
              opts.platform === 'darwin' ||
              opts.platform === 'freebsd' ||
              opts.platform === 'linux' ||
              opts.platform === 'sunos'
          ) {
              opts.platform = "UNIX";
          }
          if (opts.platform === 'win32') {
              opts.platform = "DOS";
          }

          var comment = opts.comment || this.comment || "";
          worker = generate.generateWorker(this, opts, comment);
      } catch (e) {
        worker = new GenericWorker("error");
        worker.error(e);
      }
      return new StreamHelper(worker, opts.type || "string", opts.mimeType);
    },
    /**
     * Generate the complete zip file asynchronously.
     * @see generateInternalStream
     */
    generateAsync: function(options, onUpdate) {
        return this.generateInternalStream(options).accumulate(onUpdate);
    },
    /**
     * Generate the complete zip file asynchronously.
     * @see generateInternalStream
     */
    generateNodeStream: function(options, onUpdate) {
        options = options || {};
        if (!options.type) {
            options.type = "nodebuffer";
        }
        return this.generateInternalStream(options).toNodejsStream(onUpdate);
    }
};
module.exports = out;


/***/ }),

/***/ "./node_modules/jszip/lib/readable-stream-browser.js":
/*!***********************************************************!*\
  !*** ./node_modules/jszip/lib/readable-stream-browser.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * This file is used by module bundlers (browserify/webpack/etc) when
 * including a stream implementation. We use "readable-stream" to get a
 * consistent behavior between nodejs versions but bundlers often have a shim
 * for "stream". Using this shim greatly improve the compatibility and greatly
 * reduce the final size of the bundle (only one stream implementation, not
 * two).
 */
module.exports = __webpack_require__(/*! stream */ "./node_modules/stream/index.js");


/***/ }),

/***/ "./node_modules/jszip/lib/reader/ArrayReader.js":
/*!******************************************************!*\
  !*** ./node_modules/jszip/lib/reader/ArrayReader.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DataReader = __webpack_require__(/*! ./DataReader */ "./node_modules/jszip/lib/reader/DataReader.js");
var utils = __webpack_require__(/*! ../utils */ "./node_modules/jszip/lib/utils.js");

function ArrayReader(data) {
    DataReader.call(this, data);
	for(var i = 0; i < this.data.length; i++) {
		data[i] = data[i] & 0xFF;
	}
}
utils.inherits(ArrayReader, DataReader);
/**
 * @see DataReader.byteAt
 */
ArrayReader.prototype.byteAt = function(i) {
    return this.data[this.zero + i];
};
/**
 * @see DataReader.lastIndexOfSignature
 */
ArrayReader.prototype.lastIndexOfSignature = function(sig) {
    var sig0 = sig.charCodeAt(0),
        sig1 = sig.charCodeAt(1),
        sig2 = sig.charCodeAt(2),
        sig3 = sig.charCodeAt(3);
    for (var i = this.length - 4; i >= 0; --i) {
        if (this.data[i] === sig0 && this.data[i + 1] === sig1 && this.data[i + 2] === sig2 && this.data[i + 3] === sig3) {
            return i - this.zero;
        }
    }

    return -1;
};
/**
 * @see DataReader.readAndCheckSignature
 */
ArrayReader.prototype.readAndCheckSignature = function (sig) {
    var sig0 = sig.charCodeAt(0),
        sig1 = sig.charCodeAt(1),
        sig2 = sig.charCodeAt(2),
        sig3 = sig.charCodeAt(3),
        data = this.readData(4);
    return sig0 === data[0] && sig1 === data[1] && sig2 === data[2] && sig3 === data[3];
};
/**
 * @see DataReader.readData
 */
ArrayReader.prototype.readData = function(size) {
    this.checkOffset(size);
    if(size === 0) {
        return [];
    }
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = ArrayReader;


/***/ }),

/***/ "./node_modules/jszip/lib/reader/DataReader.js":
/*!*****************************************************!*\
  !*** ./node_modules/jszip/lib/reader/DataReader.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utils = __webpack_require__(/*! ../utils */ "./node_modules/jszip/lib/utils.js");

function DataReader(data) {
    this.data = data; // type : see implementation
    this.length = data.length;
    this.index = 0;
    this.zero = 0;
}
DataReader.prototype = {
    /**
     * Check that the offset will not go too far.
     * @param {string} offset the additional offset to check.
     * @throws {Error} an Error if the offset is out of bounds.
     */
    checkOffset: function(offset) {
        this.checkIndex(this.index + offset);
    },
    /**
     * Check that the specified index will not be too far.
     * @param {string} newIndex the index to check.
     * @throws {Error} an Error if the index is out of bounds.
     */
    checkIndex: function(newIndex) {
        if (this.length < this.zero + newIndex || newIndex < 0) {
            throw new Error("End of data reached (data length = " + this.length + ", asked index = " + (newIndex) + "). Corrupted zip ?");
        }
    },
    /**
     * Change the index.
     * @param {number} newIndex The new index.
     * @throws {Error} if the new index is out of the data.
     */
    setIndex: function(newIndex) {
        this.checkIndex(newIndex);
        this.index = newIndex;
    },
    /**
     * Skip the next n bytes.
     * @param {number} n the number of bytes to skip.
     * @throws {Error} if the new index is out of the data.
     */
    skip: function(n) {
        this.setIndex(this.index + n);
    },
    /**
     * Get the byte at the specified index.
     * @param {number} i the index to use.
     * @return {number} a byte.
     */
    byteAt: function(i) {
        // see implementations
    },
    /**
     * Get the next number with a given byte size.
     * @param {number} size the number of bytes to read.
     * @return {number} the corresponding number.
     */
    readInt: function(size) {
        var result = 0,
            i;
        this.checkOffset(size);
        for (i = this.index + size - 1; i >= this.index; i--) {
            result = (result << 8) + this.byteAt(i);
        }
        this.index += size;
        return result;
    },
    /**
     * Get the next string with a given byte size.
     * @param {number} size the number of bytes to read.
     * @return {string} the corresponding string.
     */
    readString: function(size) {
        return utils.transformTo("string", this.readData(size));
    },
    /**
     * Get raw data without conversion, <size> bytes.
     * @param {number} size the number of bytes to read.
     * @return {Object} the raw data, implementation specific.
     */
    readData: function(size) {
        // see implementations
    },
    /**
     * Find the last occurence of a zip signature (4 bytes).
     * @param {string} sig the signature to find.
     * @return {number} the index of the last occurence, -1 if not found.
     */
    lastIndexOfSignature: function(sig) {
        // see implementations
    },
    /**
     * Read the signature (4 bytes) at the current position and compare it with sig.
     * @param {string} sig the expected signature
     * @return {boolean} true if the signature matches, false otherwise.
     */
    readAndCheckSignature: function(sig) {
        // see implementations
    },
    /**
     * Get the next date.
     * @return {Date} the date.
     */
    readDate: function() {
        var dostime = this.readInt(4);
        return new Date(Date.UTC(
        ((dostime >> 25) & 0x7f) + 1980, // year
        ((dostime >> 21) & 0x0f) - 1, // month
        (dostime >> 16) & 0x1f, // day
        (dostime >> 11) & 0x1f, // hour
        (dostime >> 5) & 0x3f, // minute
        (dostime & 0x1f) << 1)); // second
    }
};
module.exports = DataReader;


/***/ }),

/***/ "./node_modules/jszip/lib/reader/NodeBufferReader.js":
/*!***********************************************************!*\
  !*** ./node_modules/jszip/lib/reader/NodeBufferReader.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Uint8ArrayReader = __webpack_require__(/*! ./Uint8ArrayReader */ "./node_modules/jszip/lib/reader/Uint8ArrayReader.js");
var utils = __webpack_require__(/*! ../utils */ "./node_modules/jszip/lib/utils.js");

function NodeBufferReader(data) {
    Uint8ArrayReader.call(this, data);
}
utils.inherits(NodeBufferReader, Uint8ArrayReader);

/**
 * @see DataReader.readData
 */
NodeBufferReader.prototype.readData = function(size) {
    this.checkOffset(size);
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = NodeBufferReader;


/***/ }),

/***/ "./node_modules/jszip/lib/reader/StringReader.js":
/*!*******************************************************!*\
  !*** ./node_modules/jszip/lib/reader/StringReader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DataReader = __webpack_require__(/*! ./DataReader */ "./node_modules/jszip/lib/reader/DataReader.js");
var utils = __webpack_require__(/*! ../utils */ "./node_modules/jszip/lib/utils.js");

function StringReader(data) {
    DataReader.call(this, data);
}
utils.inherits(StringReader, DataReader);
/**
 * @see DataReader.byteAt
 */
StringReader.prototype.byteAt = function(i) {
    return this.data.charCodeAt(this.zero + i);
};
/**
 * @see DataReader.lastIndexOfSignature
 */
StringReader.prototype.lastIndexOfSignature = function(sig) {
    return this.data.lastIndexOf(sig) - this.zero;
};
/**
 * @see DataReader.readAndCheckSignature
 */
StringReader.prototype.readAndCheckSignature = function (sig) {
    var data = this.readData(4);
    return sig === data;
};
/**
 * @see DataReader.readData
 */
StringReader.prototype.readData = function(size) {
    this.checkOffset(size);
    // this will work because the constructor applied the "& 0xff" mask.
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = StringReader;


/***/ }),

/***/ "./node_modules/jszip/lib/reader/Uint8ArrayReader.js":
/*!***********************************************************!*\
  !*** ./node_modules/jszip/lib/reader/Uint8ArrayReader.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayReader = __webpack_require__(/*! ./ArrayReader */ "./node_modules/jszip/lib/reader/ArrayReader.js");
var utils = __webpack_require__(/*! ../utils */ "./node_modules/jszip/lib/utils.js");

function Uint8ArrayReader(data) {
    ArrayReader.call(this, data);
}
utils.inherits(Uint8ArrayReader, ArrayReader);
/**
 * @see DataReader.readData
 */
Uint8ArrayReader.prototype.readData = function(size) {
    this.checkOffset(size);
    if(size === 0) {
        // in IE10, when using subarray(idx, idx), we get the array [0x00] instead of [].
        return new Uint8Array(0);
    }
    var result = this.data.subarray(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = Uint8ArrayReader;


/***/ }),

/***/ "./node_modules/jszip/lib/reader/readerFor.js":
/*!****************************************************!*\
  !*** ./node_modules/jszip/lib/reader/readerFor.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/jszip/lib/utils.js");
var support = __webpack_require__(/*! ../support */ "./node_modules/jszip/lib/support.js");
var ArrayReader = __webpack_require__(/*! ./ArrayReader */ "./node_modules/jszip/lib/reader/ArrayReader.js");
var StringReader = __webpack_require__(/*! ./StringReader */ "./node_modules/jszip/lib/reader/StringReader.js");
var NodeBufferReader = __webpack_require__(/*! ./NodeBufferReader */ "./node_modules/jszip/lib/reader/NodeBufferReader.js");
var Uint8ArrayReader = __webpack_require__(/*! ./Uint8ArrayReader */ "./node_modules/jszip/lib/reader/Uint8ArrayReader.js");

/**
 * Create a reader adapted to the data.
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data to read.
 * @return {DataReader} the data reader.
 */
module.exports = function (data) {
    var type = utils.getTypeOf(data);
    utils.checkSupport(type);
    if (type === "string" && !support.uint8array) {
        return new StringReader(data);
    }
    if (type === "nodebuffer") {
        return new NodeBufferReader(data);
    }
    if (support.uint8array) {
        return new Uint8ArrayReader(utils.transformTo("uint8array", data));
    }
    return new ArrayReader(utils.transformTo("array", data));
};


/***/ }),

/***/ "./node_modules/jszip/lib/signature.js":
/*!*********************************************!*\
  !*** ./node_modules/jszip/lib/signature.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.LOCAL_FILE_HEADER = "PK\x03\x04";
exports.CENTRAL_FILE_HEADER = "PK\x01\x02";
exports.CENTRAL_DIRECTORY_END = "PK\x05\x06";
exports.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x06\x07";
exports.ZIP64_CENTRAL_DIRECTORY_END = "PK\x06\x06";
exports.DATA_DESCRIPTOR = "PK\x07\x08";


/***/ }),

/***/ "./node_modules/jszip/lib/stream/ConvertWorker.js":
/*!********************************************************!*\
  !*** ./node_modules/jszip/lib/stream/ConvertWorker.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GenericWorker = __webpack_require__(/*! ./GenericWorker */ "./node_modules/jszip/lib/stream/GenericWorker.js");
var utils = __webpack_require__(/*! ../utils */ "./node_modules/jszip/lib/utils.js");

/**
 * A worker which convert chunks to a specified type.
 * @constructor
 * @param {String} destType the destination type.
 */
function ConvertWorker(destType) {
    GenericWorker.call(this, "ConvertWorker to " + destType);
    this.destType = destType;
}
utils.inherits(ConvertWorker, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
ConvertWorker.prototype.processChunk = function (chunk) {
    this.push({
        data : utils.transformTo(this.destType, chunk.data),
        meta : chunk.meta
    });
};
module.exports = ConvertWorker;


/***/ }),

/***/ "./node_modules/jszip/lib/stream/Crc32Probe.js":
/*!*****************************************************!*\
  !*** ./node_modules/jszip/lib/stream/Crc32Probe.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GenericWorker = __webpack_require__(/*! ./GenericWorker */ "./node_modules/jszip/lib/stream/GenericWorker.js");
var crc32 = __webpack_require__(/*! ../crc32 */ "./node_modules/jszip/lib/crc32.js");
var utils = __webpack_require__(/*! ../utils */ "./node_modules/jszip/lib/utils.js");

/**
 * A worker which calculate the crc32 of the data flowing through.
 * @constructor
 */
function Crc32Probe() {
    GenericWorker.call(this, "Crc32Probe");
    this.withStreamInfo("crc32", 0);
}
utils.inherits(Crc32Probe, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
Crc32Probe.prototype.processChunk = function (chunk) {
    this.streamInfo.crc32 = crc32(chunk.data, this.streamInfo.crc32 || 0);
    this.push(chunk);
};
module.exports = Crc32Probe;


/***/ }),

/***/ "./node_modules/jszip/lib/stream/DataLengthProbe.js":
/*!**********************************************************!*\
  !*** ./node_modules/jszip/lib/stream/DataLengthProbe.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/jszip/lib/utils.js");
var GenericWorker = __webpack_require__(/*! ./GenericWorker */ "./node_modules/jszip/lib/stream/GenericWorker.js");

/**
 * A worker which calculate the total length of the data flowing through.
 * @constructor
 * @param {String} propName the name used to expose the length
 */
function DataLengthProbe(propName) {
    GenericWorker.call(this, "DataLengthProbe for " + propName);
    this.propName = propName;
    this.withStreamInfo(propName, 0);
}
utils.inherits(DataLengthProbe, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
DataLengthProbe.prototype.processChunk = function (chunk) {
    if(chunk) {
        var length = this.streamInfo[this.propName] || 0;
        this.streamInfo[this.propName] = length + chunk.data.length;
    }
    GenericWorker.prototype.processChunk.call(this, chunk);
};
module.exports = DataLengthProbe;



/***/ }),

/***/ "./node_modules/jszip/lib/stream/DataWorker.js":
/*!*****************************************************!*\
  !*** ./node_modules/jszip/lib/stream/DataWorker.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/jszip/lib/utils.js");
var GenericWorker = __webpack_require__(/*! ./GenericWorker */ "./node_modules/jszip/lib/stream/GenericWorker.js");

// the size of the generated chunks
// TODO expose this as a public variable
var DEFAULT_BLOCK_SIZE = 16 * 1024;

/**
 * A worker that reads a content and emits chunks.
 * @constructor
 * @param {Promise} dataP the promise of the data to split
 */
function DataWorker(dataP) {
    GenericWorker.call(this, "DataWorker");
    var self = this;
    this.dataIsReady = false;
    this.index = 0;
    this.max = 0;
    this.data = null;
    this.type = "";

    this._tickScheduled = false;

    dataP.then(function (data) {
        self.dataIsReady = true;
        self.data = data;
        self.max = data && data.length || 0;
        self.type = utils.getTypeOf(data);
        if(!self.isPaused) {
            self._tickAndRepeat();
        }
    }, function (e) {
        self.error(e);
    });
}

utils.inherits(DataWorker, GenericWorker);

/**
 * @see GenericWorker.cleanUp
 */
DataWorker.prototype.cleanUp = function () {
    GenericWorker.prototype.cleanUp.call(this);
    this.data = null;
};

/**
 * @see GenericWorker.resume
 */
DataWorker.prototype.resume = function () {
    if(!GenericWorker.prototype.resume.call(this)) {
        return false;
    }

    if (!this._tickScheduled && this.dataIsReady) {
        this._tickScheduled = true;
        utils.delay(this._tickAndRepeat, [], this);
    }
    return true;
};

/**
 * Trigger a tick a schedule an other call to this function.
 */
DataWorker.prototype._tickAndRepeat = function() {
    this._tickScheduled = false;
    if(this.isPaused || this.isFinished) {
        return;
    }
    this._tick();
    if(!this.isFinished) {
        utils.delay(this._tickAndRepeat, [], this);
        this._tickScheduled = true;
    }
};

/**
 * Read and push a chunk.
 */
DataWorker.prototype._tick = function() {

    if(this.isPaused || this.isFinished) {
        return false;
    }

    var size = DEFAULT_BLOCK_SIZE;
    var data = null, nextIndex = Math.min(this.max, this.index + size);
    if (this.index >= this.max) {
        // EOF
        return this.end();
    } else {
        switch(this.type) {
            case "string":
                data = this.data.substring(this.index, nextIndex);
            break;
            case "uint8array":
                data = this.data.subarray(this.index, nextIndex);
            break;
            case "array":
            case "nodebuffer":
                data = this.data.slice(this.index, nextIndex);
            break;
        }
        this.index = nextIndex;
        return this.push({
            data : data,
            meta : {
                percent : this.max ? this.index / this.max * 100 : 0
            }
        });
    }
};

module.exports = DataWorker;


/***/ }),

/***/ "./node_modules/jszip/lib/stream/GenericWorker.js":
/*!********************************************************!*\
  !*** ./node_modules/jszip/lib/stream/GenericWorker.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A worker that does nothing but passing chunks to the next one. This is like
 * a nodejs stream but with some differences. On the good side :
 * - it works on IE 6-9 without any issue / polyfill
 * - it weights less than the full dependencies bundled with browserify
 * - it forwards errors (no need to declare an error handler EVERYWHERE)
 *
 * A chunk is an object with 2 attributes : `meta` and `data`. The former is an
 * object containing anything (`percent` for example), see each worker for more
 * details. The latter is the real data (String, Uint8Array, etc).
 *
 * @constructor
 * @param {String} name the name of the stream (mainly used for debugging purposes)
 */
function GenericWorker(name) {
    // the name of the worker
    this.name = name || "default";
    // an object containing metadata about the workers chain
    this.streamInfo = {};
    // an error which happened when the worker was paused
    this.generatedError = null;
    // an object containing metadata to be merged by this worker into the general metadata
    this.extraStreamInfo = {};
    // true if the stream is paused (and should not do anything), false otherwise
    this.isPaused = true;
    // true if the stream is finished (and should not do anything), false otherwise
    this.isFinished = false;
    // true if the stream is locked to prevent further structure updates (pipe), false otherwise
    this.isLocked = false;
    // the event listeners
    this._listeners = {
        'data':[],
        'end':[],
        'error':[]
    };
    // the previous worker, if any
    this.previous = null;
}

GenericWorker.prototype = {
    /**
     * Push a chunk to the next workers.
     * @param {Object} chunk the chunk to push
     */
    push : function (chunk) {
        this.emit("data", chunk);
    },
    /**
     * End the stream.
     * @return {Boolean} true if this call ended the worker, false otherwise.
     */
    end : function () {
        if (this.isFinished) {
            return false;
        }

        this.flush();
        try {
            this.emit("end");
            this.cleanUp();
            this.isFinished = true;
        } catch (e) {
            this.emit("error", e);
        }
        return true;
    },
    /**
     * End the stream with an error.
     * @param {Error} e the error which caused the premature end.
     * @return {Boolean} true if this call ended the worker with an error, false otherwise.
     */
    error : function (e) {
        if (this.isFinished) {
            return false;
        }

        if(this.isPaused) {
            this.generatedError = e;
        } else {
            this.isFinished = true;

            this.emit("error", e);

            // in the workers chain exploded in the middle of the chain,
            // the error event will go downward but we also need to notify
            // workers upward that there has been an error.
            if(this.previous) {
                this.previous.error(e);
            }

            this.cleanUp();
        }
        return true;
    },
    /**
     * Add a callback on an event.
     * @param {String} name the name of the event (data, end, error)
     * @param {Function} listener the function to call when the event is triggered
     * @return {GenericWorker} the current object for chainability
     */
    on : function (name, listener) {
        this._listeners[name].push(listener);
        return this;
    },
    /**
     * Clean any references when a worker is ending.
     */
    cleanUp : function () {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null;
        this._listeners = [];
    },
    /**
     * Trigger an event. This will call registered callback with the provided arg.
     * @param {String} name the name of the event (data, end, error)
     * @param {Object} arg the argument to call the callback with.
     */
    emit : function (name, arg) {
        if (this._listeners[name]) {
            for(var i = 0; i < this._listeners[name].length; i++) {
                this._listeners[name][i].call(this, arg);
            }
        }
    },
    /**
     * Chain a worker with an other.
     * @param {Worker} next the worker receiving events from the current one.
     * @return {worker} the next worker for chainability
     */
    pipe : function (next) {
        return next.registerPrevious(this);
    },
    /**
     * Same as `pipe` in the other direction.
     * Using an API with `pipe(next)` is very easy.
     * Implementing the API with the point of view of the next one registering
     * a source is easier, see the ZipFileWorker.
     * @param {Worker} previous the previous worker, sending events to this one
     * @return {Worker} the current worker for chainability
     */
    registerPrevious : function (previous) {
        if (this.isLocked) {
            throw new Error("The stream '" + this + "' has already been used.");
        }

        // sharing the streamInfo...
        this.streamInfo = previous.streamInfo;
        // ... and adding our own bits
        this.mergeStreamInfo();
        this.previous =  previous;
        var self = this;
        previous.on('data', function (chunk) {
            self.processChunk(chunk);
        });
        previous.on('end', function () {
            self.end();
        });
        previous.on('error', function (e) {
            self.error(e);
        });
        return this;
    },
    /**
     * Pause the stream so it doesn't send events anymore.
     * @return {Boolean} true if this call paused the worker, false otherwise.
     */
    pause : function () {
        if(this.isPaused || this.isFinished) {
            return false;
        }
        this.isPaused = true;

        if(this.previous) {
            this.previous.pause();
        }
        return true;
    },
    /**
     * Resume a paused stream.
     * @return {Boolean} true if this call resumed the worker, false otherwise.
     */
    resume : function () {
        if(!this.isPaused || this.isFinished) {
            return false;
        }
        this.isPaused = false;

        // if true, the worker tried to resume but failed
        var withError = false;
        if(this.generatedError) {
            this.error(this.generatedError);
            withError = true;
        }
        if(this.previous) {
            this.previous.resume();
        }

        return !withError;
    },
    /**
     * Flush any remaining bytes as the stream is ending.
     */
    flush : function () {},
    /**
     * Process a chunk. This is usually the method overridden.
     * @param {Object} chunk the chunk to process.
     */
    processChunk : function(chunk) {
        this.push(chunk);
    },
    /**
     * Add a key/value to be added in the workers chain streamInfo once activated.
     * @param {String} key the key to use
     * @param {Object} value the associated value
     * @return {Worker} the current worker for chainability
     */
    withStreamInfo : function (key, value) {
        this.extraStreamInfo[key] = value;
        this.mergeStreamInfo();
        return this;
    },
    /**
     * Merge this worker's streamInfo into the chain's streamInfo.
     */
    mergeStreamInfo : function () {
        for(var key in this.extraStreamInfo) {
            if (!this.extraStreamInfo.hasOwnProperty(key)) {
                continue;
            }
            this.streamInfo[key] = this.extraStreamInfo[key];
        }
    },

    /**
     * Lock the stream to prevent further updates on the workers chain.
     * After calling this method, all calls to pipe will fail.
     */
    lock: function () {
        if (this.isLocked) {
            throw new Error("The stream '" + this + "' has already been used.");
        }
        this.isLocked = true;
        if (this.previous) {
            this.previous.lock();
        }
    },

    /**
     *
     * Pretty print the workers chain.
     */
    toString : function () {
        var me = "Worker " + this.name;
        if (this.previous) {
            return this.previous + " -> " + me;
        } else {
            return me;
        }
    }
};

module.exports = GenericWorker;


/***/ }),

/***/ "./node_modules/jszip/lib/stream/StreamHelper.js":
/*!*******************************************************!*\
  !*** ./node_modules/jszip/lib/stream/StreamHelper.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/jszip/lib/utils.js");
var ConvertWorker = __webpack_require__(/*! ./ConvertWorker */ "./node_modules/jszip/lib/stream/ConvertWorker.js");
var GenericWorker = __webpack_require__(/*! ./GenericWorker */ "./node_modules/jszip/lib/stream/GenericWorker.js");
var base64 = __webpack_require__(/*! ../base64 */ "./node_modules/jszip/lib/base64.js");
var support = __webpack_require__(/*! ../support */ "./node_modules/jszip/lib/support.js");
var external = __webpack_require__(/*! ../external */ "./node_modules/jszip/lib/external.js");

var NodejsStreamOutputAdapter = null;
if (support.nodestream) {
    try {
        NodejsStreamOutputAdapter = __webpack_require__(/*! ../nodejs/NodejsStreamOutputAdapter */ "./node_modules/jszip/lib/nodejs/NodejsStreamOutputAdapter.js");
    } catch(e) {}
}

/**
 * Apply the final transformation of the data. If the user wants a Blob for
 * example, it's easier to work with an U8intArray and finally do the
 * ArrayBuffer/Blob conversion.
 * @param {String} type the name of the final type
 * @param {String|Uint8Array|Buffer} content the content to transform
 * @param {String} mimeType the mime type of the content, if applicable.
 * @return {String|Uint8Array|ArrayBuffer|Buffer|Blob} the content in the right format.
 */
function transformZipOutput(type, content, mimeType) {
    switch(type) {
        case "blob" :
            return utils.newBlob(utils.transformTo("arraybuffer", content), mimeType);
        case "base64" :
            return base64.encode(content);
        default :
            return utils.transformTo(type, content);
    }
}

/**
 * Concatenate an array of data of the given type.
 * @param {String} type the type of the data in the given array.
 * @param {Array} dataArray the array containing the data chunks to concatenate
 * @return {String|Uint8Array|Buffer} the concatenated data
 * @throws Error if the asked type is unsupported
 */
function concat (type, dataArray) {
    var i, index = 0, res = null, totalLength = 0;
    for(i = 0; i < dataArray.length; i++) {
        totalLength += dataArray[i].length;
    }
    switch(type) {
        case "string":
            return dataArray.join("");
          case "array":
            return Array.prototype.concat.apply([], dataArray);
        case "uint8array":
            res = new Uint8Array(totalLength);
            for(i = 0; i < dataArray.length; i++) {
                res.set(dataArray[i], index);
                index += dataArray[i].length;
            }
            return res;
        case "nodebuffer":
            return Buffer.concat(dataArray);
        default:
            throw new Error("concat : unsupported type '"  + type + "'");
    }
}

/**
 * Listen a StreamHelper, accumulate its content and concatenate it into a
 * complete block.
 * @param {StreamHelper} helper the helper to use.
 * @param {Function} updateCallback a callback called on each update. Called
 * with one arg :
 * - the metadata linked to the update received.
 * @return Promise the promise for the accumulation.
 */
function accumulate(helper, updateCallback) {
    return new external.Promise(function (resolve, reject){
        var dataArray = [];
        var chunkType = helper._internalType,
            resultType = helper._outputType,
            mimeType = helper._mimeType;
        helper
        .on('data', function (data, meta) {
            dataArray.push(data);
            if(updateCallback) {
                updateCallback(meta);
            }
        })
        .on('error', function(err) {
            dataArray = [];
            reject(err);
        })
        .on('end', function (){
            try {
                var result = transformZipOutput(resultType, concat(chunkType, dataArray), mimeType);
                resolve(result);
            } catch (e) {
                reject(e);
            }
            dataArray = [];
        })
        .resume();
    });
}

/**
 * An helper to easily use workers outside of JSZip.
 * @constructor
 * @param {Worker} worker the worker to wrap
 * @param {String} outputType the type of data expected by the use
 * @param {String} mimeType the mime type of the content, if applicable.
 */
function StreamHelper(worker, outputType, mimeType) {
    var internalType = outputType;
    switch(outputType) {
        case "blob":
        case "arraybuffer":
            internalType = "uint8array";
        break;
        case "base64":
            internalType = "string";
        break;
    }

    try {
        // the type used internally
        this._internalType = internalType;
        // the type used to output results
        this._outputType = outputType;
        // the mime type
        this._mimeType = mimeType;
        utils.checkSupport(internalType);
        this._worker = worker.pipe(new ConvertWorker(internalType));
        // the last workers can be rewired without issues but we need to
        // prevent any updates on previous workers.
        worker.lock();
    } catch(e) {
        this._worker = new GenericWorker("error");
        this._worker.error(e);
    }
}

StreamHelper.prototype = {
    /**
     * Listen a StreamHelper, accumulate its content and concatenate it into a
     * complete block.
     * @param {Function} updateCb the update callback.
     * @return Promise the promise for the accumulation.
     */
    accumulate : function (updateCb) {
        return accumulate(this, updateCb);
    },
    /**
     * Add a listener on an event triggered on a stream.
     * @param {String} evt the name of the event
     * @param {Function} fn the listener
     * @return {StreamHelper} the current helper.
     */
    on : function (evt, fn) {
        var self = this;

        if(evt === "data") {
            this._worker.on(evt, function (chunk) {
                fn.call(self, chunk.data, chunk.meta);
            });
        } else {
            this._worker.on(evt, function () {
                utils.delay(fn, arguments, self);
            });
        }
        return this;
    },
    /**
     * Resume the flow of chunks.
     * @return {StreamHelper} the current helper.
     */
    resume : function () {
        utils.delay(this._worker.resume, [], this._worker);
        return this;
    },
    /**
     * Pause the flow of chunks.
     * @return {StreamHelper} the current helper.
     */
    pause : function () {
        this._worker.pause();
        return this;
    },
    /**
     * Return a nodejs stream for this helper.
     * @param {Function} updateCb the update callback.
     * @return {NodejsStreamOutputAdapter} the nodejs stream.
     */
    toNodejsStream : function (updateCb) {
        utils.checkSupport("nodestream");
        if (this._outputType !== "nodebuffer") {
            // an object stream containing blob/arraybuffer/uint8array/string
            // is strange and I don't know if it would be useful.
            // I you find this comment and have a good usecase, please open a
            // bug report !
            throw new Error(this._outputType + " is not supported by this method");
        }

        return new NodejsStreamOutputAdapter(this, {
            objectMode : this._outputType !== "nodebuffer"
        }, updateCb);
    }
};


module.exports = StreamHelper;


/***/ }),

/***/ "./node_modules/jszip/lib/support.js":
/*!*******************************************!*\
  !*** ./node_modules/jszip/lib/support.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.base64 = true;
exports.array = true;
exports.string = true;
exports.arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
exports.nodebuffer = typeof Buffer !== "undefined";
// contains true if JSZip can read/generate Uint8Array, false otherwise.
exports.uint8array = typeof Uint8Array !== "undefined";

if (typeof ArrayBuffer === "undefined") {
    exports.blob = false;
}
else {
    var buffer = new ArrayBuffer(0);
    try {
        exports.blob = new Blob([buffer], {
            type: "application/zip"
        }).size === 0;
    }
    catch (e) {
        try {
            var Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
            var builder = new Builder();
            builder.append(buffer);
            exports.blob = builder.getBlob('application/zip').size === 0;
        }
        catch (e) {
            exports.blob = false;
        }
    }
}

try {
    exports.nodestream = !!__webpack_require__(/*! readable-stream */ "./node_modules/jszip/lib/readable-stream-browser.js").Readable;
} catch(e) {
    exports.nodestream = false;
}


/***/ }),

/***/ "./node_modules/jszip/lib/utf8.js":
/*!****************************************!*\
  !*** ./node_modules/jszip/lib/utf8.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/jszip/lib/utils.js");
var support = __webpack_require__(/*! ./support */ "./node_modules/jszip/lib/support.js");
var nodejsUtils = __webpack_require__(/*! ./nodejsUtils */ "./node_modules/jszip/lib/nodejsUtils.js");
var GenericWorker = __webpack_require__(/*! ./stream/GenericWorker */ "./node_modules/jszip/lib/stream/GenericWorker.js");

/**
 * The following functions come from pako, from pako/lib/utils/strings
 * released under the MIT license, see pako https://github.com/nodeca/pako/
 */

// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new Array(256);
for (var i=0; i<256; i++) {
  _utf8len[i] = (i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1);
}
_utf8len[254]=_utf8len[254]=1; // Invalid sequence start

// convert string to array (typed, when possible)
var string2buf = function (str) {
    var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

    // count binary size
    for (m_pos = 0; m_pos < str_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos+1 < str_len)) {
            c2 = str.charCodeAt(m_pos+1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
    }

    // allocate buffer
    if (support.uint8array) {
        buf = new Uint8Array(buf_len);
    } else {
        buf = new Array(buf_len);
    }

    // convert
    for (i=0, m_pos = 0; i < buf_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos+1 < str_len)) {
            c2 = str.charCodeAt(m_pos+1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        if (c < 0x80) {
            /* one byte */
            buf[i++] = c;
        } else if (c < 0x800) {
            /* two bytes */
            buf[i++] = 0xC0 | (c >>> 6);
            buf[i++] = 0x80 | (c & 0x3f);
        } else if (c < 0x10000) {
            /* three bytes */
            buf[i++] = 0xE0 | (c >>> 12);
            buf[i++] = 0x80 | (c >>> 6 & 0x3f);
            buf[i++] = 0x80 | (c & 0x3f);
        } else {
            /* four bytes */
            buf[i++] = 0xf0 | (c >>> 18);
            buf[i++] = 0x80 | (c >>> 12 & 0x3f);
            buf[i++] = 0x80 | (c >>> 6 & 0x3f);
            buf[i++] = 0x80 | (c & 0x3f);
        }
    }

    return buf;
};

// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
var utf8border = function(buf, max) {
    var pos;

    max = max || buf.length;
    if (max > buf.length) { max = buf.length; }

    // go back from last position, until start of sequence found
    pos = max-1;
    while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

    // Fuckup - very small and broken sequence,
    // return max, because we should return something anyway.
    if (pos < 0) { return max; }

    // If we came to start of buffer - that means vuffer is too small,
    // return max too.
    if (pos === 0) { return max; }

    return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};

// convert array to string
var buf2string = function (buf) {
    var str, i, out, c, c_len;
    var len = buf.length;

    // Reserve max possible length (2 words per char)
    // NB: by unknown reasons, Array is significantly faster for
    //     String.fromCharCode.apply than Uint16Array.
    var utf16buf = new Array(len*2);

    for (out=0, i=0; i<len;) {
        c = buf[i++];
        // quick process ascii
        if (c < 0x80) { utf16buf[out++] = c; continue; }

        c_len = _utf8len[c];
        // skip 5 & 6 byte codes
        if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len-1; continue; }

        // apply mask on first byte
        c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
        // join the rest
        while (c_len > 1 && i < len) {
            c = (c << 6) | (buf[i++] & 0x3f);
            c_len--;
        }

        // terminated by end of string?
        if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

        if (c < 0x10000) {
            utf16buf[out++] = c;
        } else {
            c -= 0x10000;
            utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
            utf16buf[out++] = 0xdc00 | (c & 0x3ff);
        }
    }

    // shrinkBuf(utf16buf, out)
    if (utf16buf.length !== out) {
        if(utf16buf.subarray) {
            utf16buf = utf16buf.subarray(0, out);
        } else {
            utf16buf.length = out;
        }
    }

    // return String.fromCharCode.apply(null, utf16buf);
    return utils.applyFromCharCode(utf16buf);
};


// That's all for the pako functions.


/**
 * Transform a javascript string into an array (typed if possible) of bytes,
 * UTF-8 encoded.
 * @param {String} str the string to encode
 * @return {Array|Uint8Array|Buffer} the UTF-8 encoded string.
 */
exports.utf8encode = function utf8encode(str) {
    if (support.nodebuffer) {
        return nodejsUtils.newBufferFrom(str, "utf-8");
    }

    return string2buf(str);
};


/**
 * Transform a bytes array (or a representation) representing an UTF-8 encoded
 * string into a javascript string.
 * @param {Array|Uint8Array|Buffer} buf the data de decode
 * @return {String} the decoded string.
 */
exports.utf8decode = function utf8decode(buf) {
    if (support.nodebuffer) {
        return utils.transformTo("nodebuffer", buf).toString("utf-8");
    }

    buf = utils.transformTo(support.uint8array ? "uint8array" : "array", buf);

    return buf2string(buf);
};

/**
 * A worker to decode utf8 encoded binary chunks into string chunks.
 * @constructor
 */
function Utf8DecodeWorker() {
    GenericWorker.call(this, "utf-8 decode");
    // the last bytes if a chunk didn't end with a complete codepoint.
    this.leftOver = null;
}
utils.inherits(Utf8DecodeWorker, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
Utf8DecodeWorker.prototype.processChunk = function (chunk) {

    var data = utils.transformTo(support.uint8array ? "uint8array" : "array", chunk.data);

    // 1st step, re-use what's left of the previous chunk
    if (this.leftOver && this.leftOver.length) {
        if(support.uint8array) {
            var previousData = data;
            data = new Uint8Array(previousData.length + this.leftOver.length);
            data.set(this.leftOver, 0);
            data.set(previousData, this.leftOver.length);
        } else {
            data = this.leftOver.concat(data);
        }
        this.leftOver = null;
    }

    var nextBoundary = utf8border(data);
    var usableData = data;
    if (nextBoundary !== data.length) {
        if (support.uint8array) {
            usableData = data.subarray(0, nextBoundary);
            this.leftOver = data.subarray(nextBoundary, data.length);
        } else {
            usableData = data.slice(0, nextBoundary);
            this.leftOver = data.slice(nextBoundary, data.length);
        }
    }

    this.push({
        data : exports.utf8decode(usableData),
        meta : chunk.meta
    });
};

/**
 * @see GenericWorker.flush
 */
Utf8DecodeWorker.prototype.flush = function () {
    if(this.leftOver && this.leftOver.length) {
        this.push({
            data : exports.utf8decode(this.leftOver),
            meta : {}
        });
        this.leftOver = null;
    }
};
exports.Utf8DecodeWorker = Utf8DecodeWorker;

/**
 * A worker to endcode string chunks into utf8 encoded binary chunks.
 * @constructor
 */
function Utf8EncodeWorker() {
    GenericWorker.call(this, "utf-8 encode");
}
utils.inherits(Utf8EncodeWorker, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
Utf8EncodeWorker.prototype.processChunk = function (chunk) {
    this.push({
        data : exports.utf8encode(chunk.data),
        meta : chunk.meta
    });
};
exports.Utf8EncodeWorker = Utf8EncodeWorker;


/***/ }),

/***/ "./node_modules/jszip/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/jszip/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var support = __webpack_require__(/*! ./support */ "./node_modules/jszip/lib/support.js");
var base64 = __webpack_require__(/*! ./base64 */ "./node_modules/jszip/lib/base64.js");
var nodejsUtils = __webpack_require__(/*! ./nodejsUtils */ "./node_modules/jszip/lib/nodejsUtils.js");
var setImmediate = __webpack_require__(/*! set-immediate-shim */ "./node_modules/set-immediate-shim/index.js");
var external = __webpack_require__(/*! ./external */ "./node_modules/jszip/lib/external.js");


/**
 * Convert a string that pass as a "binary string": it should represent a byte
 * array but may have > 255 char codes. Be sure to take only the first byte
 * and returns the byte array.
 * @param {String} str the string to transform.
 * @return {Array|Uint8Array} the string in a binary format.
 */
function string2binary(str) {
    var result = null;
    if (support.uint8array) {
      result = new Uint8Array(str.length);
    } else {
      result = new Array(str.length);
    }
    return stringToArrayLike(str, result);
}

/**
 * Create a new blob with the given content and the given type.
 * @param {String|ArrayBuffer} part the content to put in the blob. DO NOT use
 * an Uint8Array because the stock browser of android 4 won't accept it (it
 * will be silently converted to a string, "[object Uint8Array]").
 *
 * Use only ONE part to build the blob to avoid a memory leak in IE11 / Edge:
 * when a large amount of Array is used to create the Blob, the amount of
 * memory consumed is nearly 100 times the original data amount.
 *
 * @param {String} type the mime type of the blob.
 * @return {Blob} the created blob.
 */
exports.newBlob = function(part, type) {
    exports.checkSupport("blob");

    try {
        // Blob constructor
        return new Blob([part], {
            type: type
        });
    }
    catch (e) {

        try {
            // deprecated, browser only, old way
            var Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
            var builder = new Builder();
            builder.append(part);
            return builder.getBlob(type);
        }
        catch (e) {

            // well, fuck ?!
            throw new Error("Bug : can't construct the Blob.");
        }
    }


};
/**
 * The identity function.
 * @param {Object} input the input.
 * @return {Object} the same input.
 */
function identity(input) {
    return input;
}

/**
 * Fill in an array with a string.
 * @param {String} str the string to use.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to fill in (will be mutated).
 * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated array.
 */
function stringToArrayLike(str, array) {
    for (var i = 0; i < str.length; ++i) {
        array[i] = str.charCodeAt(i) & 0xFF;
    }
    return array;
}

/**
 * An helper for the function arrayLikeToString.
 * This contains static informations and functions that
 * can be optimized by the browser JIT compiler.
 */
var arrayToStringHelper = {
    /**
     * Transform an array of int into a string, chunk by chunk.
     * See the performances notes on arrayLikeToString.
     * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
     * @param {String} type the type of the array.
     * @param {Integer} chunk the chunk size.
     * @return {String} the resulting string.
     * @throws Error if the chunk is too big for the stack.
     */
    stringifyByChunk: function(array, type, chunk) {
        var result = [], k = 0, len = array.length;
        // shortcut
        if (len <= chunk) {
            return String.fromCharCode.apply(null, array);
        }
        while (k < len) {
            if (type === "array" || type === "nodebuffer") {
                result.push(String.fromCharCode.apply(null, array.slice(k, Math.min(k + chunk, len))));
            }
            else {
                result.push(String.fromCharCode.apply(null, array.subarray(k, Math.min(k + chunk, len))));
            }
            k += chunk;
        }
        return result.join("");
    },
    /**
     * Call String.fromCharCode on every item in the array.
     * This is the naive implementation, which generate A LOT of intermediate string.
     * This should be used when everything else fail.
     * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
     * @return {String} the result.
     */
    stringifyByChar: function(array){
        var resultStr = "";
        for(var i = 0; i < array.length; i++) {
            resultStr += String.fromCharCode(array[i]);
        }
        return resultStr;
    },
    applyCanBeUsed : {
        /**
         * true if the browser accepts to use String.fromCharCode on Uint8Array
         */
        uint8array : (function () {
            try {
                return support.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
            } catch (e) {
                return false;
            }
        })(),
        /**
         * true if the browser accepts to use String.fromCharCode on nodejs Buffer.
         */
        nodebuffer : (function () {
            try {
                return support.nodebuffer && String.fromCharCode.apply(null, nodejsUtils.allocBuffer(1)).length === 1;
            } catch (e) {
                return false;
            }
        })()
    }
};

/**
 * Transform an array-like object to a string.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
 * @return {String} the result.
 */
function arrayLikeToString(array) {
    // Performances notes :
    // --------------------
    // String.fromCharCode.apply(null, array) is the fastest, see
    // see http://jsperf.com/converting-a-uint8array-to-a-string/2
    // but the stack is limited (and we can get huge arrays !).
    //
    // result += String.fromCharCode(array[i]); generate too many strings !
    //
    // This code is inspired by http://jsperf.com/arraybuffer-to-string-apply-performance/2
    // TODO : we now have workers that split the work. Do we still need that ?
    var chunk = 65536,
        type = exports.getTypeOf(array),
        canUseApply = true;
    if (type === "uint8array") {
        canUseApply = arrayToStringHelper.applyCanBeUsed.uint8array;
    } else if (type === "nodebuffer") {
        canUseApply = arrayToStringHelper.applyCanBeUsed.nodebuffer;
    }

    if (canUseApply) {
        while (chunk > 1) {
            try {
                return arrayToStringHelper.stringifyByChunk(array, type, chunk);
            } catch (e) {
                chunk = Math.floor(chunk / 2);
            }
        }
    }

    // no apply or chunk error : slow and painful algorithm
    // default browser on android 4.*
    return arrayToStringHelper.stringifyByChar(array);
}

exports.applyFromCharCode = arrayLikeToString;


/**
 * Copy the data from an array-like to an other array-like.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayFrom the origin array.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayTo the destination array which will be mutated.
 * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated destination array.
 */
function arrayLikeToArrayLike(arrayFrom, arrayTo) {
    for (var i = 0; i < arrayFrom.length; i++) {
        arrayTo[i] = arrayFrom[i];
    }
    return arrayTo;
}

// a matrix containing functions to transform everything into everything.
var transform = {};

// string to ?
transform["string"] = {
    "string": identity,
    "array": function(input) {
        return stringToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return transform["string"]["uint8array"](input).buffer;
    },
    "uint8array": function(input) {
        return stringToArrayLike(input, new Uint8Array(input.length));
    },
    "nodebuffer": function(input) {
        return stringToArrayLike(input, nodejsUtils.allocBuffer(input.length));
    }
};

// array to ?
transform["array"] = {
    "string": arrayLikeToString,
    "array": identity,
    "arraybuffer": function(input) {
        return (new Uint8Array(input)).buffer;
    },
    "uint8array": function(input) {
        return new Uint8Array(input);
    },
    "nodebuffer": function(input) {
        return nodejsUtils.newBufferFrom(input);
    }
};

// arraybuffer to ?
transform["arraybuffer"] = {
    "string": function(input) {
        return arrayLikeToString(new Uint8Array(input));
    },
    "array": function(input) {
        return arrayLikeToArrayLike(new Uint8Array(input), new Array(input.byteLength));
    },
    "arraybuffer": identity,
    "uint8array": function(input) {
        return new Uint8Array(input);
    },
    "nodebuffer": function(input) {
        return nodejsUtils.newBufferFrom(new Uint8Array(input));
    }
};

// uint8array to ?
transform["uint8array"] = {
    "string": arrayLikeToString,
    "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return input.buffer;
    },
    "uint8array": identity,
    "nodebuffer": function(input) {
        return nodejsUtils.newBufferFrom(input);
    }
};

// nodebuffer to ?
transform["nodebuffer"] = {
    "string": arrayLikeToString,
    "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return transform["nodebuffer"]["uint8array"](input).buffer;
    },
    "uint8array": function(input) {
        return arrayLikeToArrayLike(input, new Uint8Array(input.length));
    },
    "nodebuffer": identity
};

/**
 * Transform an input into any type.
 * The supported output type are : string, array, uint8array, arraybuffer, nodebuffer.
 * If no output type is specified, the unmodified input will be returned.
 * @param {String} outputType the output type.
 * @param {String|Array|ArrayBuffer|Uint8Array|Buffer} input the input to convert.
 * @throws {Error} an Error if the browser doesn't support the requested output type.
 */
exports.transformTo = function(outputType, input) {
    if (!input) {
        // undefined, null, etc
        // an empty string won't harm.
        input = "";
    }
    if (!outputType) {
        return input;
    }
    exports.checkSupport(outputType);
    var inputType = exports.getTypeOf(input);
    var result = transform[inputType][outputType](input);
    return result;
};

/**
 * Return the type of the input.
 * The type will be in a format valid for JSZip.utils.transformTo : string, array, uint8array, arraybuffer.
 * @param {Object} input the input to identify.
 * @return {String} the (lowercase) type of the input.
 */
exports.getTypeOf = function(input) {
    if (typeof input === "string") {
        return "string";
    }
    if (Object.prototype.toString.call(input) === "[object Array]") {
        return "array";
    }
    if (support.nodebuffer && nodejsUtils.isBuffer(input)) {
        return "nodebuffer";
    }
    if (support.uint8array && input instanceof Uint8Array) {
        return "uint8array";
    }
    if (support.arraybuffer && input instanceof ArrayBuffer) {
        return "arraybuffer";
    }
};

/**
 * Throw an exception if the type is not supported.
 * @param {String} type the type to check.
 * @throws {Error} an Error if the browser doesn't support the requested type.
 */
exports.checkSupport = function(type) {
    var supported = support[type.toLowerCase()];
    if (!supported) {
        throw new Error(type + " is not supported by this platform");
    }
};

exports.MAX_VALUE_16BITS = 65535;
exports.MAX_VALUE_32BITS = -1; // well, "\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF" is parsed as -1

/**
 * Prettify a string read as binary.
 * @param {string} str the string to prettify.
 * @return {string} a pretty string.
 */
exports.pretty = function(str) {
    var res = '',
        code, i;
    for (i = 0; i < (str || "").length; i++) {
        code = str.charCodeAt(i);
        res += '\\x' + (code < 16 ? "0" : "") + code.toString(16).toUpperCase();
    }
    return res;
};

/**
 * Defer the call of a function.
 * @param {Function} callback the function to call asynchronously.
 * @param {Array} args the arguments to give to the callback.
 */
exports.delay = function(callback, args, self) {
    setImmediate(function () {
        callback.apply(self || null, args || []);
    });
};

/**
 * Extends a prototype with an other, without calling a constructor with
 * side effects. Inspired by nodejs' `utils.inherits`
 * @param {Function} ctor the constructor to augment
 * @param {Function} superCtor the parent constructor to use
 */
exports.inherits = function (ctor, superCtor) {
    var Obj = function() {};
    Obj.prototype = superCtor.prototype;
    ctor.prototype = new Obj();
};

/**
 * Merge the objects passed as parameters into a new one.
 * @private
 * @param {...Object} var_args All objects to merge.
 * @return {Object} a new object with the data of the others.
 */
exports.extend = function() {
    var result = {}, i, attr;
    for (i = 0; i < arguments.length; i++) { // arguments is not enumerable in some browsers
        for (attr in arguments[i]) {
            if (arguments[i].hasOwnProperty(attr) && typeof result[attr] === "undefined") {
                result[attr] = arguments[i][attr];
            }
        }
    }
    return result;
};

/**
 * Transform arbitrary content into a Promise.
 * @param {String} name a name for the content being processed.
 * @param {Object} inputData the content to process.
 * @param {Boolean} isBinary true if the content is not an unicode string
 * @param {Boolean} isOptimizedBinaryString true if the string content only has one byte per character.
 * @param {Boolean} isBase64 true if the string content is encoded with base64.
 * @return {Promise} a promise in a format usable by JSZip.
 */
exports.prepareContent = function(name, inputData, isBinary, isOptimizedBinaryString, isBase64) {

    // if inputData is already a promise, this flatten it.
    var promise = external.Promise.resolve(inputData).then(function(data) {
        
        
        var isBlob = support.blob && (data instanceof Blob || ['[object File]', '[object Blob]'].indexOf(Object.prototype.toString.call(data)) !== -1);

        if (isBlob && typeof FileReader !== "undefined") {
            return new external.Promise(function (resolve, reject) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    resolve(e.target.result);
                };
                reader.onerror = function(e) {
                    reject(e.target.error);
                };
                reader.readAsArrayBuffer(data);
            });
        } else {
            return data;
        }
    });

    return promise.then(function(data) {
        var dataType = exports.getTypeOf(data);

        if (!dataType) {
            return external.Promise.reject(
                new Error("Can't read the data of '" + name + "'. Is it " +
                          "in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?")
            );
        }
        // special case : it's way easier to work with Uint8Array than with ArrayBuffer
        if (dataType === "arraybuffer") {
            data = exports.transformTo("uint8array", data);
        } else if (dataType === "string") {
            if (isBase64) {
                data = base64.decode(data);
            }
            else if (isBinary) {
                // optimizedBinaryString === true means that the file has already been filtered with a 0xFF mask
                if (isOptimizedBinaryString !== true) {
                    // this is a string, not in a base64 format.
                    // Be sure that this is a correct "binary string"
                    data = string2binary(data);
                }
            }
        }
        return data;
    });
};


/***/ }),

/***/ "./node_modules/jszip/lib/zipEntries.js":
/*!**********************************************!*\
  !*** ./node_modules/jszip/lib/zipEntries.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var readerFor = __webpack_require__(/*! ./reader/readerFor */ "./node_modules/jszip/lib/reader/readerFor.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/jszip/lib/utils.js");
var sig = __webpack_require__(/*! ./signature */ "./node_modules/jszip/lib/signature.js");
var ZipEntry = __webpack_require__(/*! ./zipEntry */ "./node_modules/jszip/lib/zipEntry.js");
var utf8 = __webpack_require__(/*! ./utf8 */ "./node_modules/jszip/lib/utf8.js");
var support = __webpack_require__(/*! ./support */ "./node_modules/jszip/lib/support.js");
//  class ZipEntries {{{
/**
 * All the entries in the zip file.
 * @constructor
 * @param {Object} loadOptions Options for loading the stream.
 */
function ZipEntries(loadOptions) {
    this.files = [];
    this.loadOptions = loadOptions;
}
ZipEntries.prototype = {
    /**
     * Check that the reader is on the specified signature.
     * @param {string} expectedSignature the expected signature.
     * @throws {Error} if it is an other signature.
     */
    checkSignature: function(expectedSignature) {
        if (!this.reader.readAndCheckSignature(expectedSignature)) {
            this.reader.index -= 4;
            var signature = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature " + "(" + utils.pretty(signature) + ", expected " + utils.pretty(expectedSignature) + ")");
        }
    },
    /**
     * Check if the given signature is at the given index.
     * @param {number} askedIndex the index to check.
     * @param {string} expectedSignature the signature to expect.
     * @return {boolean} true if the signature is here, false otherwise.
     */
    isSignature: function(askedIndex, expectedSignature) {
        var currentIndex = this.reader.index;
        this.reader.setIndex(askedIndex);
        var signature = this.reader.readString(4);
        var result = signature === expectedSignature;
        this.reader.setIndex(currentIndex);
        return result;
    },
    /**
     * Read the end of the central directory.
     */
    readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2);
        this.diskWithCentralDirStart = this.reader.readInt(2);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
        this.centralDirRecords = this.reader.readInt(2);
        this.centralDirSize = this.reader.readInt(4);
        this.centralDirOffset = this.reader.readInt(4);

        this.zipCommentLength = this.reader.readInt(2);
        // warning : the encoding depends of the system locale
        // On a linux machine with LANG=en_US.utf8, this field is utf8 encoded.
        // On a windows machine, this field is encoded with the localized windows code page.
        var zipComment = this.reader.readData(this.zipCommentLength);
        var decodeParamType = support.uint8array ? "uint8array" : "array";
        // To get consistent behavior with the generation part, we will assume that
        // this is utf8 encoded unless specified otherwise.
        var decodeContent = utils.transformTo(decodeParamType, zipComment);
        this.zipComment = this.loadOptions.decodeFileName(decodeContent);
    },
    /**
     * Read the end of the Zip 64 central directory.
     * Not merged with the method readEndOfCentral :
     * The end of central can coexist with its Zip64 brother,
     * I don't want to read the wrong number of bytes !
     */
    readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8);
        this.reader.skip(4);
        // this.versionMadeBy = this.reader.readString(2);
        // this.versionNeeded = this.reader.readInt(2);
        this.diskNumber = this.reader.readInt(4);
        this.diskWithCentralDirStart = this.reader.readInt(4);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
        this.centralDirRecords = this.reader.readInt(8);
        this.centralDirSize = this.reader.readInt(8);
        this.centralDirOffset = this.reader.readInt(8);

        this.zip64ExtensibleData = {};
        var extraDataSize = this.zip64EndOfCentralSize - 44,
            index = 0,
            extraFieldId,
            extraFieldLength,
            extraFieldValue;
        while (index < extraDataSize) {
            extraFieldId = this.reader.readInt(2);
            extraFieldLength = this.reader.readInt(4);
            extraFieldValue = this.reader.readData(extraFieldLength);
            this.zip64ExtensibleData[extraFieldId] = {
                id: extraFieldId,
                length: extraFieldLength,
                value: extraFieldValue
            };
        }
    },
    /**
     * Read the end of the Zip 64 central directory locator.
     */
    readBlockZip64EndOfCentralLocator: function() {
        this.diskWithZip64CentralDirStart = this.reader.readInt(4);
        this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
        this.disksCount = this.reader.readInt(4);
        if (this.disksCount > 1) {
            throw new Error("Multi-volumes zip are not supported");
        }
    },
    /**
     * Read the local files, based on the offset read in the central part.
     */
    readLocalFiles: function() {
        var i, file;
        for (i = 0; i < this.files.length; i++) {
            file = this.files[i];
            this.reader.setIndex(file.localHeaderOffset);
            this.checkSignature(sig.LOCAL_FILE_HEADER);
            file.readLocalPart(this.reader);
            file.handleUTF8();
            file.processAttributes();
        }
    },
    /**
     * Read the central directory.
     */
    readCentralDir: function() {
        var file;

        this.reader.setIndex(this.centralDirOffset);
        while (this.reader.readAndCheckSignature(sig.CENTRAL_FILE_HEADER)) {
            file = new ZipEntry({
                zip64: this.zip64
            }, this.loadOptions);
            file.readCentralPart(this.reader);
            this.files.push(file);
        }

        if (this.centralDirRecords !== this.files.length) {
            if (this.centralDirRecords !== 0 && this.files.length === 0) {
                // We expected some records but couldn't find ANY.
                // This is really suspicious, as if something went wrong.
                throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
            } else {
                // We found some records but not all.
                // Something is wrong but we got something for the user: no error here.
                // console.warn("expected", this.centralDirRecords, "records in central dir, got", this.files.length);
            }
        }
    },
    /**
     * Read the end of central directory.
     */
    readEndOfCentral: function() {
        var offset = this.reader.lastIndexOfSignature(sig.CENTRAL_DIRECTORY_END);
        if (offset < 0) {
            // Check if the content is a truncated zip or complete garbage.
            // A "LOCAL_FILE_HEADER" is not required at the beginning (auto
            // extractible zip for example) but it can give a good hint.
            // If an ajax request was used without responseType, we will also
            // get unreadable data.
            var isGarbage = !this.isSignature(0, sig.LOCAL_FILE_HEADER);

            if (isGarbage) {
                throw new Error("Can't find end of central directory : is this a zip file ? " +
                                "If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
            } else {
                throw new Error("Corrupted zip: can't find end of central directory");
            }

        }
        this.reader.setIndex(offset);
        var endOfCentralDirOffset = offset;
        this.checkSignature(sig.CENTRAL_DIRECTORY_END);
        this.readBlockEndOfCentral();


        /* extract from the zip spec :
            4)  If one of the fields in the end of central directory
                record is too small to hold required data, the field
                should be set to -1 (0xFFFF or 0xFFFFFFFF) and the
                ZIP64 format record should be created.
            5)  The end of central directory record and the
                Zip64 end of central directory locator record must
                reside on the same disk when splitting or spanning
                an archive.
         */
        if (this.diskNumber === utils.MAX_VALUE_16BITS || this.diskWithCentralDirStart === utils.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === utils.MAX_VALUE_16BITS || this.centralDirRecords === utils.MAX_VALUE_16BITS || this.centralDirSize === utils.MAX_VALUE_32BITS || this.centralDirOffset === utils.MAX_VALUE_32BITS) {
            this.zip64 = true;

            /*
            Warning : the zip64 extension is supported, but ONLY if the 64bits integer read from
            the zip file can fit into a 32bits integer. This cannot be solved : JavaScript represents
            all numbers as 64-bit double precision IEEE 754 floating point numbers.
            So, we have 53bits for integers and bitwise operations treat everything as 32bits.
            see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Bitwise_Operators
            and http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf section 8.5
            */

            // should look for a zip64 EOCD locator
            offset = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
            if (offset < 0) {
                throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            }
            this.reader.setIndex(offset);
            this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
            this.readBlockZip64EndOfCentralLocator();

            // now the zip64 EOCD record
            if (!this.isSignature(this.relativeOffsetEndOfZip64CentralDir, sig.ZIP64_CENTRAL_DIRECTORY_END)) {
                // console.warn("ZIP64 end of central directory not where expected.");
                this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
                if (this.relativeOffsetEndOfZip64CentralDir < 0) {
                    throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                }
            }
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
            this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
            this.readBlockZip64EndOfCentral();
        }

        var expectedEndOfCentralDirOffset = this.centralDirOffset + this.centralDirSize;
        if (this.zip64) {
            expectedEndOfCentralDirOffset += 20; // end of central dir 64 locator
            expectedEndOfCentralDirOffset += 12 /* should not include the leading 12 bytes */ + this.zip64EndOfCentralSize;
        }

        var extraBytes = endOfCentralDirOffset - expectedEndOfCentralDirOffset;

        if (extraBytes > 0) {
            // console.warn(extraBytes, "extra bytes at beginning or within zipfile");
            if (this.isSignature(endOfCentralDirOffset, sig.CENTRAL_FILE_HEADER)) {
                // The offsets seem wrong, but we have something at the specified offset.
                // So… we keep it.
            } else {
                // the offset is wrong, update the "zero" of the reader
                // this happens if data has been prepended (crx files for example)
                this.reader.zero = extraBytes;
            }
        } else if (extraBytes < 0) {
            throw new Error("Corrupted zip: missing " + Math.abs(extraBytes) + " bytes.");
        }
    },
    prepareReader: function(data) {
        this.reader = readerFor(data);
    },
    /**
     * Read a zip file and create ZipEntries.
     * @param {String|ArrayBuffer|Uint8Array|Buffer} data the binary string representing a zip file.
     */
    load: function(data) {
        this.prepareReader(data);
        this.readEndOfCentral();
        this.readCentralDir();
        this.readLocalFiles();
    }
};
// }}} end of ZipEntries
module.exports = ZipEntries;


/***/ }),

/***/ "./node_modules/jszip/lib/zipEntry.js":
/*!********************************************!*\
  !*** ./node_modules/jszip/lib/zipEntry.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var readerFor = __webpack_require__(/*! ./reader/readerFor */ "./node_modules/jszip/lib/reader/readerFor.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/jszip/lib/utils.js");
var CompressedObject = __webpack_require__(/*! ./compressedObject */ "./node_modules/jszip/lib/compressedObject.js");
var crc32fn = __webpack_require__(/*! ./crc32 */ "./node_modules/jszip/lib/crc32.js");
var utf8 = __webpack_require__(/*! ./utf8 */ "./node_modules/jszip/lib/utf8.js");
var compressions = __webpack_require__(/*! ./compressions */ "./node_modules/jszip/lib/compressions.js");
var support = __webpack_require__(/*! ./support */ "./node_modules/jszip/lib/support.js");

var MADE_BY_DOS = 0x00;
var MADE_BY_UNIX = 0x03;

/**
 * Find a compression registered in JSZip.
 * @param {string} compressionMethod the method magic to find.
 * @return {Object|null} the JSZip compression object, null if none found.
 */
var findCompression = function(compressionMethod) {
    for (var method in compressions) {
        if (!compressions.hasOwnProperty(method)) {
            continue;
        }
        if (compressions[method].magic === compressionMethod) {
            return compressions[method];
        }
    }
    return null;
};

// class ZipEntry {{{
/**
 * An entry in the zip file.
 * @constructor
 * @param {Object} options Options of the current file.
 * @param {Object} loadOptions Options for loading the stream.
 */
function ZipEntry(options, loadOptions) {
    this.options = options;
    this.loadOptions = loadOptions;
}
ZipEntry.prototype = {
    /**
     * say if the file is encrypted.
     * @return {boolean} true if the file is encrypted, false otherwise.
     */
    isEncrypted: function() {
        // bit 1 is set
        return (this.bitFlag & 0x0001) === 0x0001;
    },
    /**
     * say if the file has utf-8 filename/comment.
     * @return {boolean} true if the filename/comment is in utf-8, false otherwise.
     */
    useUTF8: function() {
        // bit 11 is set
        return (this.bitFlag & 0x0800) === 0x0800;
    },
    /**
     * Read the local part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readLocalPart: function(reader) {
        var compression, localExtraFieldsLength;

        // we already know everything from the central dir !
        // If the central dir data are false, we are doomed.
        // On the bright side, the local part is scary  : zip64, data descriptors, both, etc.
        // The less data we get here, the more reliable this should be.
        // Let's skip the whole header and dash to the data !
        reader.skip(22);
        // in some zip created on windows, the filename stored in the central dir contains \ instead of /.
        // Strangely, the filename here is OK.
        // I would love to treat these zip files as corrupted (see http://www.info-zip.org/FAQ.html#backslashes
        // or APPNOTE#4.4.17.1, "All slashes MUST be forward slashes '/'") but there are a lot of bad zip generators...
        // Search "unzip mismatching "local" filename continuing with "central" filename version" on
        // the internet.
        //
        // I think I see the logic here : the central directory is used to display
        // content and the local directory is used to extract the files. Mixing / and \
        // may be used to display \ to windows users and use / when extracting the files.
        // Unfortunately, this lead also to some issues : http://seclists.org/fulldisclosure/2009/Sep/394
        this.fileNameLength = reader.readInt(2);
        localExtraFieldsLength = reader.readInt(2); // can't be sure this will be the same as the central dir
        // the fileName is stored as binary data, the handleUTF8 method will take care of the encoding.
        this.fileName = reader.readData(this.fileNameLength);
        reader.skip(localExtraFieldsLength);

        if (this.compressedSize === -1 || this.uncompressedSize === -1) {
            throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory " + "(compressedSize === -1 || uncompressedSize === -1)");
        }

        compression = findCompression(this.compressionMethod);
        if (compression === null) { // no compression found
            throw new Error("Corrupted zip : compression " + utils.pretty(this.compressionMethod) + " unknown (inner file : " + utils.transformTo("string", this.fileName) + ")");
        }
        this.decompressed = new CompressedObject(this.compressedSize, this.uncompressedSize, this.crc32, compression, reader.readData(this.compressedSize));
    },

    /**
     * Read the central part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readCentralPart: function(reader) {
        this.versionMadeBy = reader.readInt(2);
        reader.skip(2);
        // this.versionNeeded = reader.readInt(2);
        this.bitFlag = reader.readInt(2);
        this.compressionMethod = reader.readString(2);
        this.date = reader.readDate();
        this.crc32 = reader.readInt(4);
        this.compressedSize = reader.readInt(4);
        this.uncompressedSize = reader.readInt(4);
        var fileNameLength = reader.readInt(2);
        this.extraFieldsLength = reader.readInt(2);
        this.fileCommentLength = reader.readInt(2);
        this.diskNumberStart = reader.readInt(2);
        this.internalFileAttributes = reader.readInt(2);
        this.externalFileAttributes = reader.readInt(4);
        this.localHeaderOffset = reader.readInt(4);

        if (this.isEncrypted()) {
            throw new Error("Encrypted zip are not supported");
        }

        // will be read in the local part, see the comments there
        reader.skip(fileNameLength);
        this.readExtraFields(reader);
        this.parseZIP64ExtraField(reader);
        this.fileComment = reader.readData(this.fileCommentLength);
    },

    /**
     * Parse the external file attributes and get the unix/dos permissions.
     */
    processAttributes: function () {
        this.unixPermissions = null;
        this.dosPermissions = null;
        var madeBy = this.versionMadeBy >> 8;

        // Check if we have the DOS directory flag set.
        // We look for it in the DOS and UNIX permissions
        // but some unknown platform could set it as a compatibility flag.
        this.dir = this.externalFileAttributes & 0x0010 ? true : false;

        if(madeBy === MADE_BY_DOS) {
            // first 6 bits (0 to 5)
            this.dosPermissions = this.externalFileAttributes & 0x3F;
        }

        if(madeBy === MADE_BY_UNIX) {
            this.unixPermissions = (this.externalFileAttributes >> 16) & 0xFFFF;
            // the octal permissions are in (this.unixPermissions & 0x01FF).toString(8);
        }

        // fail safe : if the name ends with a / it probably means a folder
        if (!this.dir && this.fileNameStr.slice(-1) === '/') {
            this.dir = true;
        }
    },

    /**
     * Parse the ZIP64 extra field and merge the info in the current ZipEntry.
     * @param {DataReader} reader the reader to use.
     */
    parseZIP64ExtraField: function(reader) {

        if (!this.extraFields[0x0001]) {
            return;
        }

        // should be something, preparing the extra reader
        var extraReader = readerFor(this.extraFields[0x0001].value);

        // I really hope that these 64bits integer can fit in 32 bits integer, because js
        // won't let us have more.
        if (this.uncompressedSize === utils.MAX_VALUE_32BITS) {
            this.uncompressedSize = extraReader.readInt(8);
        }
        if (this.compressedSize === utils.MAX_VALUE_32BITS) {
            this.compressedSize = extraReader.readInt(8);
        }
        if (this.localHeaderOffset === utils.MAX_VALUE_32BITS) {
            this.localHeaderOffset = extraReader.readInt(8);
        }
        if (this.diskNumberStart === utils.MAX_VALUE_32BITS) {
            this.diskNumberStart = extraReader.readInt(4);
        }
    },
    /**
     * Read the central part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readExtraFields: function(reader) {
        var end = reader.index + this.extraFieldsLength,
            extraFieldId,
            extraFieldLength,
            extraFieldValue;

        if (!this.extraFields) {
            this.extraFields = {};
        }

        while (reader.index < end) {
            extraFieldId = reader.readInt(2);
            extraFieldLength = reader.readInt(2);
            extraFieldValue = reader.readData(extraFieldLength);

            this.extraFields[extraFieldId] = {
                id: extraFieldId,
                length: extraFieldLength,
                value: extraFieldValue
            };
        }
    },
    /**
     * Apply an UTF8 transformation if needed.
     */
    handleUTF8: function() {
        var decodeParamType = support.uint8array ? "uint8array" : "array";
        if (this.useUTF8()) {
            this.fileNameStr = utf8.utf8decode(this.fileName);
            this.fileCommentStr = utf8.utf8decode(this.fileComment);
        } else {
            var upath = this.findExtraFieldUnicodePath();
            if (upath !== null) {
                this.fileNameStr = upath;
            } else {
                // ASCII text or unsupported code page
                var fileNameByteArray =  utils.transformTo(decodeParamType, this.fileName);
                this.fileNameStr = this.loadOptions.decodeFileName(fileNameByteArray);
            }

            var ucomment = this.findExtraFieldUnicodeComment();
            if (ucomment !== null) {
                this.fileCommentStr = ucomment;
            } else {
                // ASCII text or unsupported code page
                var commentByteArray =  utils.transformTo(decodeParamType, this.fileComment);
                this.fileCommentStr = this.loadOptions.decodeFileName(commentByteArray);
            }
        }
    },

    /**
     * Find the unicode path declared in the extra field, if any.
     * @return {String} the unicode path, null otherwise.
     */
    findExtraFieldUnicodePath: function() {
        var upathField = this.extraFields[0x7075];
        if (upathField) {
            var extraReader = readerFor(upathField.value);

            // wrong version
            if (extraReader.readInt(1) !== 1) {
                return null;
            }

            // the crc of the filename changed, this field is out of date.
            if (crc32fn(this.fileName) !== extraReader.readInt(4)) {
                return null;
            }

            return utf8.utf8decode(extraReader.readData(upathField.length - 5));
        }
        return null;
    },

    /**
     * Find the unicode comment declared in the extra field, if any.
     * @return {String} the unicode comment, null otherwise.
     */
    findExtraFieldUnicodeComment: function() {
        var ucommentField = this.extraFields[0x6375];
        if (ucommentField) {
            var extraReader = readerFor(ucommentField.value);

            // wrong version
            if (extraReader.readInt(1) !== 1) {
                return null;
            }

            // the crc of the comment changed, this field is out of date.
            if (crc32fn(this.fileComment) !== extraReader.readInt(4)) {
                return null;
            }

            return utf8.utf8decode(extraReader.readData(ucommentField.length - 5));
        }
        return null;
    }
};
module.exports = ZipEntry;


/***/ }),

/***/ "./node_modules/jszip/lib/zipObject.js":
/*!*********************************************!*\
  !*** ./node_modules/jszip/lib/zipObject.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var StreamHelper = __webpack_require__(/*! ./stream/StreamHelper */ "./node_modules/jszip/lib/stream/StreamHelper.js");
var DataWorker = __webpack_require__(/*! ./stream/DataWorker */ "./node_modules/jszip/lib/stream/DataWorker.js");
var utf8 = __webpack_require__(/*! ./utf8 */ "./node_modules/jszip/lib/utf8.js");
var CompressedObject = __webpack_require__(/*! ./compressedObject */ "./node_modules/jszip/lib/compressedObject.js");
var GenericWorker = __webpack_require__(/*! ./stream/GenericWorker */ "./node_modules/jszip/lib/stream/GenericWorker.js");

/**
 * A simple object representing a file in the zip file.
 * @constructor
 * @param {string} name the name of the file
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data
 * @param {Object} options the options of the file
 */
var ZipObject = function(name, data, options) {
    this.name = name;
    this.dir = options.dir;
    this.date = options.date;
    this.comment = options.comment;
    this.unixPermissions = options.unixPermissions;
    this.dosPermissions = options.dosPermissions;

    this._data = data;
    this._dataBinary = options.binary;
    // keep only the compression
    this.options = {
        compression : options.compression,
        compressionOptions : options.compressionOptions
    };
};

ZipObject.prototype = {
    /**
     * Create an internal stream for the content of this object.
     * @param {String} type the type of each chunk.
     * @return StreamHelper the stream.
     */
    internalStream: function (type) {
        var result = null, outputType = "string";
        try {
            if (!type) {
                throw new Error("No output type specified.");
            }
            outputType = type.toLowerCase();
            var askUnicodeString = outputType === "string" || outputType === "text";
            if (outputType === "binarystring" || outputType === "text") {
                outputType = "string";
            }
            result = this._decompressWorker();

            var isUnicodeString = !this._dataBinary;

            if (isUnicodeString && !askUnicodeString) {
                result = result.pipe(new utf8.Utf8EncodeWorker());
            }
            if (!isUnicodeString && askUnicodeString) {
                result = result.pipe(new utf8.Utf8DecodeWorker());
            }
        } catch (e) {
            result = new GenericWorker("error");
            result.error(e);
        }

        return new StreamHelper(result, outputType, "");
    },

    /**
     * Prepare the content in the asked type.
     * @param {String} type the type of the result.
     * @param {Function} onUpdate a function to call on each internal update.
     * @return Promise the promise of the result.
     */
    async: function (type, onUpdate) {
        return this.internalStream(type).accumulate(onUpdate);
    },

    /**
     * Prepare the content as a nodejs stream.
     * @param {String} type the type of each chunk.
     * @param {Function} onUpdate a function to call on each internal update.
     * @return Stream the stream.
     */
    nodeStream: function (type, onUpdate) {
        return this.internalStream(type || "nodebuffer").toNodejsStream(onUpdate);
    },

    /**
     * Return a worker for the compressed content.
     * @private
     * @param {Object} compression the compression object to use.
     * @param {Object} compressionOptions the options to use when compressing.
     * @return Worker the worker.
     */
    _compressWorker: function (compression, compressionOptions) {
        if (
            this._data instanceof CompressedObject &&
            this._data.compression.magic === compression.magic
        ) {
            return this._data.getCompressedWorker();
        } else {
            var result = this._decompressWorker();
            if(!this._dataBinary) {
                result = result.pipe(new utf8.Utf8EncodeWorker());
            }
            return CompressedObject.createWorkerFrom(result, compression, compressionOptions);
        }
    },
    /**
     * Return a worker for the decompressed content.
     * @private
     * @return Worker the worker.
     */
    _decompressWorker : function () {
        if (this._data instanceof CompressedObject) {
            return this._data.getContentWorker();
        } else if (this._data instanceof GenericWorker) {
            return this._data;
        } else {
            return new DataWorker(this._data);
        }
    }
};

var removedMethods = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"];
var removedFn = function () {
    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
};

for(var i = 0; i < removedMethods.length; i++) {
    ZipObject.prototype[removedMethods[i]] = removedFn;
}
module.exports = ZipObject;


/***/ }),

/***/ "./node_modules/lie/lib/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/lie/lib/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var immediate = __webpack_require__(/*! immediate */ "./node_modules/immediate/lib/browser.js");

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["finally"] = function (callback) {
  if (typeof callback !== 'function') {
    return this;
  }
  var p = this.constructor;
  return this.then(resolve, reject);

  function resolve(value) {
    function yes () {
      return value;
    }
    return p.resolve(callback()).then(yes);
  }
  function reject(reason) {
    function no () {
      throw reason;
    }
    return p.resolve(callback()).then(no);
  }
};
Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}


/***/ }),

/***/ "./node_modules/pako/index.js":
/*!************************************!*\
  !*** ./node_modules/pako/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Top level file is just a mixin of submodules & constants


var assign    = __webpack_require__(/*! ./lib/utils/common */ "./node_modules/pako/lib/utils/common.js").assign;

var deflate   = __webpack_require__(/*! ./lib/deflate */ "./node_modules/pako/lib/deflate.js");
var inflate   = __webpack_require__(/*! ./lib/inflate */ "./node_modules/pako/lib/inflate.js");
var constants = __webpack_require__(/*! ./lib/zlib/constants */ "./node_modules/pako/lib/zlib/constants.js");

var pako = {};

assign(pako, deflate, inflate, constants);

module.exports = pako;


/***/ }),

/***/ "./node_modules/pako/lib/deflate.js":
/*!******************************************!*\
  !*** ./node_modules/pako/lib/deflate.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var zlib_deflate = __webpack_require__(/*! ./zlib/deflate */ "./node_modules/pako/lib/zlib/deflate.js");
var utils        = __webpack_require__(/*! ./utils/common */ "./node_modules/pako/lib/utils/common.js");
var strings      = __webpack_require__(/*! ./utils/strings */ "./node_modules/pako/lib/utils/strings.js");
var msg          = __webpack_require__(/*! ./zlib/messages */ "./node_modules/pako/lib/zlib/messages.js");
var ZStream      = __webpack_require__(/*! ./zlib/zstream */ "./node_modules/pako/lib/zlib/zstream.js");

var toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

var Z_NO_FLUSH      = 0;
var Z_FINISH        = 4;

var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_SYNC_FLUSH    = 2;

var Z_DEFAULT_COMPRESSION = -1;

var Z_DEFAULT_STRATEGY    = 0;

var Z_DEFLATED  = 8;

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/

/**
 * Deflate.result -> Uint8Array|Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
 * push a chunk with explicit flush (call [[Deflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
function Deflate(options) {
  if (!(this instanceof Deflate)) return new Deflate(options);

  this.options = utils.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY,
    to: ''
  }, options || {});

  var opt = this.options;

  if (opt.raw && (opt.windowBits > 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new ZStream();
  this.strm.avail_out = 0;

  var status = zlib_deflate.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }

  if (opt.header) {
    zlib_deflate.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    var dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = zlib_deflate.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }

    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the compression context.
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * array format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var status, _mode;

  if (this.ended) { return false; }

  _mode = (mode === ~~mode) ? mode : ((mode === true) ? Z_FINISH : Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = zlib_deflate.deflate(strm, _mode);    /* no bad return value */

    if (status !== Z_STREAM_END && status !== Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.avail_out === 0 || (strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH))) {
      if (this.options.to === 'string') {
        this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
      } else {
        this.onData(utils.shrinkBuf(strm.output, strm.next_out));
      }
    }
  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);

  // Finalize on the last chunk.
  if (_mode === Z_FINISH) {
    status = zlib_deflate.deflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === Z_SYNC_FLUSH) {
    this.onEnd(Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * deflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/
function deflate(input, options) {
  var deflator = new Deflate(options);

  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) { throw deflator.msg || msg[deflator.err]; }

  return deflator.result;
}


/**
 * deflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return deflate(input, options);
}


/**
 * gzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate(input, options);
}


exports.Deflate = Deflate;
exports.deflate = deflate;
exports.deflateRaw = deflateRaw;
exports.gzip = gzip;


/***/ }),

/***/ "./node_modules/pako/lib/inflate.js":
/*!******************************************!*\
  !*** ./node_modules/pako/lib/inflate.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var zlib_inflate = __webpack_require__(/*! ./zlib/inflate */ "./node_modules/pako/lib/zlib/inflate.js");
var utils        = __webpack_require__(/*! ./utils/common */ "./node_modules/pako/lib/utils/common.js");
var strings      = __webpack_require__(/*! ./utils/strings */ "./node_modules/pako/lib/utils/strings.js");
var c            = __webpack_require__(/*! ./zlib/constants */ "./node_modules/pako/lib/zlib/constants.js");
var msg          = __webpack_require__(/*! ./zlib/messages */ "./node_modules/pako/lib/zlib/messages.js");
var ZStream      = __webpack_require__(/*! ./zlib/zstream */ "./node_modules/pako/lib/zlib/zstream.js");
var GZheader     = __webpack_require__(/*! ./zlib/gzheader */ "./node_modules/pako/lib/zlib/gzheader.js");

var toString = Object.prototype.toString;

/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/

/**
 * Inflate.result -> Uint8Array|Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
 * push a chunk with explicit flush (call [[Inflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
function Inflate(options) {
  if (!(this instanceof Inflate)) return new Inflate(options);

  this.options = utils.assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ''
  }, options || {});

  var opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new ZStream();
  this.strm.avail_out = 0;

  var status  = zlib_inflate.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== c.Z_OK) {
    throw new Error(msg[status]);
  }

  this.header = new GZheader();

  zlib_inflate.inflateGetHeader(this.strm, this.header);

  // Setup dictionary
  if (opt.dictionary) {
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      opt.dictionary = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }
    if (opt.raw) { //In raw mode we need to set the dictionary early
      status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
      if (status !== c.Z_OK) {
        throw new Error(msg[status]);
      }
    }
  }
}

/**
 * Inflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the decompression context.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var dictionary = this.options.dictionary;
  var status, _mode;
  var next_out_utf8, tail, utf8str;

  // Flag to properly process Z_BUF_ERROR on testing inflate call
  // when we check that all output data was flushed.
  var allowBufError = false;

  if (this.ended) { return false; }
  _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // Only binary strings can be decompressed on practice
    strm.input = strings.binstring2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);    /* no bad return value */

    if (status === c.Z_NEED_DICT && dictionary) {
      status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
    }

    if (status === c.Z_BUF_ERROR && allowBufError === true) {
      status = c.Z_OK;
      allowBufError = false;
    }

    if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))) {

        if (this.options.to === 'string') {

          next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          tail = strm.next_out - next_out_utf8;
          utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) { utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }

          this.onData(utf8str);

        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    }

    // When no more input data, we should check that internal inflate buffers
    // are flushed. The only way to do it when avail_out = 0 - run one more
    // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
    // Here we set flag to process this error properly.
    //
    // NOTE. Deflate does not return error in this case and does not needs such
    // logic.
    if (strm.avail_in === 0 && strm.avail_out === 0) {
      allowBufError = true;
    }

  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);

  if (status === c.Z_STREAM_END) {
    _mode = c.Z_FINISH;
  }

  // Finalize on the last chunk.
  if (_mode === c.Z_FINISH) {
    status = zlib_inflate.inflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === c.Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === c.Z_SYNC_FLUSH) {
    this.onEnd(c.Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === c.Z_OK) {
    if (this.options.to === 'string') {
      // Glue & convert here, until we teach pako to send
      // utf8 aligned strings to onData
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
 *   , output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   console.log(err);
 * }
 * ```
 **/
function inflate(input, options) {
  var inflator = new Inflate(options);

  inflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) { throw inflator.msg || msg[inflator.err]; }

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return inflate(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


exports.Inflate = Inflate;
exports.inflate = inflate;
exports.inflateRaw = inflateRaw;
exports.ungzip  = inflate;


/***/ }),

/***/ "./node_modules/pako/lib/utils/common.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/utils/common.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                (typeof Uint16Array !== 'undefined') &&
                (typeof Int32Array !== 'undefined');

function _has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

exports.assign = function (obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (var p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function (buf, size) {
  if (buf.length === size) { return buf; }
  if (buf.subarray) { return buf.subarray(0, size); }
  buf.length = size;
  return buf;
};


var fnTyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    if (src.subarray && dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
      return;
    }
    // Fallback to ordinary array
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    var i, l, len, pos, chunk, result;

    // calculate data length
    len = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      len += chunks[i].length;
    }

    // join chunks
    result = new Uint8Array(len);
    pos = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  }
};

var fnUntyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    return [].concat.apply([], chunks);
  }
};


// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function (on) {
  if (on) {
    exports.Buf8  = Uint8Array;
    exports.Buf16 = Uint16Array;
    exports.Buf32 = Int32Array;
    exports.assign(exports, fnTyped);
  } else {
    exports.Buf8  = Array;
    exports.Buf16 = Array;
    exports.Buf32 = Array;
    exports.assign(exports, fnUntyped);
  }
};

exports.setTyped(TYPED_OK);


/***/ }),

/***/ "./node_modules/pako/lib/utils/strings.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/utils/strings.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// String encode/decode helpers



var utils = __webpack_require__(/*! ./common */ "./node_modules/pako/lib/utils/common.js");


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
var STR_APPLY_OK = true;
var STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }
try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new utils.Buf8(256);
for (var q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
exports.string2buf = function (str) {
  var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new utils.Buf8(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper (used in 2 places)
function buf2binstring(buf, len) {
  // On Chrome, the arguments in a function call that are allowed is `65534`.
  // If the length of the buffer is smaller than that, we can use this optimization,
  // otherwise we will take a slower path.
  if (len < 65534) {
    if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
      return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
    }
  }

  var result = '';
  for (var i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
}


// Convert byte array to binary string
exports.buf2binstring = function (buf) {
  return buf2binstring(buf, buf.length);
};


// Convert binary string (typed, when possible)
exports.binstring2buf = function (str) {
  var buf = new utils.Buf8(str.length);
  for (var i = 0, len = buf.length; i < len; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
};


// convert array to string
exports.buf2string = function (buf, max) {
  var i, out, c, c_len;
  var len = max || buf.length;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  var utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
exports.utf8border = function (buf, max) {
  var pos;

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means buffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/adler32.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/adler32.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function adler32(adler, buf, len, pos) {
  var s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
}


module.exports = adler32;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/constants.js":
/*!*************************************************!*\
  !*** ./node_modules/pako/lib/zlib/constants.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/crc32.js":
/*!*********************************************!*\
  !*** ./node_modules/pako/lib/zlib/crc32.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
function makeTable() {
  var c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
  var t = crcTable,
      end = pos + len;

  crc ^= -1;

  for (var i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
}


module.exports = crc32;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/deflate.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/deflate.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils   = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");
var trees   = __webpack_require__(/*! ./trees */ "./node_modules/pako/lib/zlib/trees.js");
var adler32 = __webpack_require__(/*! ./adler32 */ "./node_modules/pako/lib/zlib/adler32.js");
var crc32   = __webpack_require__(/*! ./crc32 */ "./node_modules/pako/lib/zlib/crc32.js");
var msg     = __webpack_require__(/*! ./messages */ "./node_modules/pako/lib/zlib/messages.js");

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
var Z_NO_FLUSH      = 0;
var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
//var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;


/* compression levels */
//var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION = -1;


var Z_FILTERED            = 1;
var Z_HUFFMAN_ONLY        = 2;
var Z_RLE                 = 3;
var Z_FIXED               = 4;
var Z_DEFAULT_STRATEGY    = 0;

/* Possible values of the data_type field (though see inflate()) */
//var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;


/* The deflate compression method */
var Z_DEFLATED  = 8;

/*============================================================================*/


var MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_MEM_LEVEL = 8;


var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
var LITERALS      = 256;
/* number of literal bytes 0..255 */
var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
var D_CODES       = 30;
/* number of distance codes */
var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
var MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

var PRESET_DICT = 0x20;

var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;

var BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
var BS_BLOCK_DONE     = 2; /* block flush performed */
var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
var BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

function err(strm, errorCode) {
  strm.msg = msg[errorCode];
  return errorCode;
}

function rank(f) {
  return ((f) << 1) - ((f) > 4 ? 9 : 0);
}

function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */
function flush_pending(strm) {
  var s = strm.state;

  //_tr_flush_bits(s);
  var len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}


function flush_block_only(s, last) {
  trees._tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}


function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
function putShortMSB(s, b) {
//  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
}


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  utils.arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
}


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length;      /* max hash chain length */
  var scan = s.strstart; /* current string */
  var match;                       /* matched string */
  var len;                           /* length of current match */
  var best_len = s.prev_length;              /* best match length so far */
  var nice_match = s.nice_match;             /* stop if match long enough */
  var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  var _win = s.window; // shortcut

  var wmask = s.w_mask;
  var prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  var strend = s.strstart + MAX_MATCH;
  var scan_end1  = _win[scan + best_len - 1];
  var scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;

      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = (m >= _w_size ? m - _w_size : 0);
      } while (--n);

      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = (m >= _w_size ? m - _w_size : 0);
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */
function deflate_stored(s, flush) {
  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  var max_block_size = 0xffff;

  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }

  /* Copy as much as possible from input to output: */
  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead <= 1) {

      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
      //  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }

      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */
    }
    //Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");

    s.strstart += s.lookahead;
    s.lookahead = 0;

    /* Emit a stored block if pending_buf will be full: */
    var max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart >= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/


    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */
    if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }

  if (s.strstart > s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_NEED_MORE;
}

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
function deflate_fast(s, flush) {
  var hash_head;        /* head of the hash chain */
  var bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
function deflate_slow(s, flush) {
  var hash_head;          /* head of hash chain */
  var bflush;              /* set if current block must be flushed */

  var max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
}


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
function deflate_rle(s, flush) {
  var bflush;            /* set if current block must be flushed */
  var prev;              /* byte at distance one to match */
  var scan, strend;      /* scan goes up to strend for length of run */

  var _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
function deflate_huff(s, flush) {
  var bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

var configuration_table;

configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
function lm_init(s) {
  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
}


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new utils.Buf16(HEAP_SIZE * 2);
  this.dyn_dtree  = new utils.Buf16((2 * D_CODES + 1) * 2);
  this.bl_tree    = new utils.Buf16((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new utils.Buf16(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new utils.Buf16(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new utils.Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0;          /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0;      /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


function deflateResetKeep(strm) {
  var s;

  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = Z_NO_FLUSH;
  trees._tr_init(s);
  return Z_OK;
}


function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
}


function deflateSetHeader(strm, head) {
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  if (strm.state.wrap !== 2) { return Z_STREAM_ERROR; }
  strm.state.gzhead = head;
  return Z_OK;
}


function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR;
  }
  var wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  var s = new DeflateState();

  strm.state = s;
  s.strm = strm;

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new utils.Buf8(s.w_size * 2);
  s.head = new utils.Buf16(s.hash_size);
  s.prev = new utils.Buf16(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4;

  //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
  //s->pending_buf = (uchf *) overlay;
  s.pending_buf = new utils.Buf8(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
  s.d_buf = 1 * s.lit_bufsize;

  //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
  s.l_buf = (1 + 2) * s.lit_bufsize;

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
}

function deflateInit(strm, level) {
  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
}


function deflate(strm, flush) {
  var old_flush, s;
  var beg, val; // for gzip header write only

  if (!strm || !strm.state ||
    flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }

  s = strm.state;

  if (!strm.output ||
      (!strm.input && strm.avail_in !== 0) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }

  s.strm = strm; /* just in case */
  old_flush = s.last_flush;
  s.last_flush = flush;

  /* Write the header */
  if (s.status === INIT_STATE) {

    if (s.wrap === 2) { // GZIP header
      strm.adler = 0;  //crc32(0L, Z_NULL, 0);
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) { // s->gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      }
      else {
        put_byte(s, (s.gzhead.text ? 1 : 0) +
                    (s.gzhead.hcrc ? 2 : 0) +
                    (!s.gzhead.extra ? 0 : 4) +
                    (!s.gzhead.name ? 0 : 8) +
                    (!s.gzhead.comment ? 0 : 16)
        );
        put_byte(s, s.gzhead.time & 0xff);
        put_byte(s, (s.gzhead.time >> 8) & 0xff);
        put_byte(s, (s.gzhead.time >> 16) & 0xff);
        put_byte(s, (s.gzhead.time >> 24) & 0xff);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, s.gzhead.os & 0xff);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 0xff);
          put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    }
    else // DEFLATE header
    {
      var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
      var level_flags = -1;

      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= (level_flags << 6);
      if (s.strstart !== 0) { header |= PRESET_DICT; }
      header += 31 - (header % 31);

      s.status = BUSY_STATE;
      putShortMSB(s, header);

      /* Save the adler32 of the preset dictionary: */
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
      strm.adler = 1; // adler32(0L, Z_NULL, 0);
    }
  }

//#ifdef GZIP
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */

      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    }
    else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    }
    else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    }
    else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
      }
    }
    else {
      s.status = BUSY_STATE;
    }
  }
//#endif

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
    var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
      (s.strategy === Z_RLE ? deflate_rle(s, flush) :
        configuration_table[s.level].func(s, flush));

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        trees._tr_align(s);
      }
      else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */

        trees._tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK;
      }
    }
  }
  //Assert(strm->avail_out > 0, "bug2");
  //if (strm.avail_out <= 0) { throw new Error("bug2");}

  if (flush !== Z_FINISH) { return Z_OK; }
  if (s.wrap <= 0) { return Z_STREAM_END; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}

function deflateEnd(strm) {
  var status;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  status = strm.state.status;
  if (status !== INIT_STATE &&
    status !== EXTRA_STATE &&
    status !== NAME_STATE &&
    status !== COMMENT_STATE &&
    status !== HCRC_STATE &&
    status !== BUSY_STATE &&
    status !== FINISH_STATE
  ) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
function deflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var s;
  var str, n;
  var wrap;
  var avail;
  var next;
  var input;
  var tmpDict;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  s = strm.state;
  wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    tmpDict = new utils.Buf8(s.w_size);
    utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  avail = strm.avail_in;
  next = strm.next_in;
  input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    str = s.strstart;
    n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

      s.prev[str & s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK;
}


exports.deflateInit = deflateInit;
exports.deflateInit2 = deflateInit2;
exports.deflateReset = deflateReset;
exports.deflateResetKeep = deflateResetKeep;
exports.deflateSetHeader = deflateSetHeader;
exports.deflate = deflate;
exports.deflateEnd = deflateEnd;
exports.deflateSetDictionary = deflateSetDictionary;
exports.deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*/


/***/ }),

/***/ "./node_modules/pako/lib/zlib/gzheader.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/zlib/gzheader.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

module.exports = GZheader;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/inffast.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/inffast.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
var BAD = 30;       /* got a data error -- remain here until reset */
var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
module.exports = function inflate_fast(strm, start) {
  var state;
  var _in;                    /* local strm.input */
  var last;                   /* have enough input while in < last */
  var _out;                   /* local strm.output */
  var beg;                    /* inflate()'s initial strm.output */
  var end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  var dmax;                   /* maximum distance from zlib header */
//#endif
  var wsize;                  /* window size or zero if not using window */
  var whave;                  /* valid bytes in the window */
  var wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  var s_window;               /* allocated sliding window, if wsize != 0 */
  var hold;                   /* local strm.hold */
  var bits;                   /* local strm.bits */
  var lcode;                  /* local strm.lencode */
  var dcode;                  /* local strm.distcode */
  var lmask;                  /* mask for first level of length codes */
  var dmask;                  /* mask for first level of distance codes */
  var here;                   /* retrieved table entry */
  var op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  var len;                    /* match length, unused bytes */
  var dist;                   /* match distance */
  var from;                   /* where to copy match from */
  var from_source;


  var input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/inflate.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/inflate.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils         = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");
var adler32       = __webpack_require__(/*! ./adler32 */ "./node_modules/pako/lib/zlib/adler32.js");
var crc32         = __webpack_require__(/*! ./crc32 */ "./node_modules/pako/lib/zlib/crc32.js");
var inflate_fast  = __webpack_require__(/*! ./inffast */ "./node_modules/pako/lib/zlib/inffast.js");
var inflate_table = __webpack_require__(/*! ./inftrees */ "./node_modules/pako/lib/zlib/inftrees.js");

var CODES = 0;
var LENS = 1;
var DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
//var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;

/* The deflate compression method */
var Z_DEFLATED  = 8;


/* STATES ====================================================================*/
/* ===========================================================================*/


var    HEAD = 1;       /* i: waiting for magic header */
var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
var    TIME = 3;       /* i: waiting for modification time (gzip) */
var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
var    NAME = 7;       /* i: waiting for end of file name (gzip) */
var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
var    HCRC = 9;       /* i: waiting for header crc (gzip) */
var    DICTID = 10;    /* i: waiting for dictionary check value */
var    DICT = 11;      /* waiting for inflateSetDictionary() call */
var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
var        STORED = 14;    /* i: waiting for stored size (length and complement) */
var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
var        LENLENS = 18;   /* i: waiting for code length code lengths */
var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
var            LEN = 21;       /* i: waiting for length/lit/eob code */
var            LENEXT = 22;    /* i: waiting for length extra bits */
var            DIST = 23;      /* i: waiting for distance code */
var            DISTEXT = 24;   /* i: waiting for distance extra bits */
var            MATCH = 25;     /* o: waiting for output space to copy string */
var            LIT = 26;       /* o: waiting for output space to write literal */
var    CHECK = 27;     /* i: waiting for 32-bit check value */
var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
var    DONE = 29;      /* finished check, done -- remain here until reset */
var    BAD = 30;       /* got a data error -- remain here until reset */
var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_WBITS = MAX_WBITS;


function zswap32(q) {
  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
}


function InflateState() {
  this.mode = 0;             /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
  this.work = new utils.Buf16(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}

function inflateResetKeep(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
  state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK;
}

function inflateReset(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

}

function inflateReset2(strm, windowBits) {
  var wrap;
  var state;

  /* get the state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}

function inflateInit2(strm, windowBits) {
  var ret;
  var state;

  if (!strm) { return Z_STREAM_ERROR; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.window = null/*Z_NULL*/;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
}

function inflateInit(strm) {
  return inflateInit2(strm, DEF_WBITS);
}


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
var virgin = true;

var lenfix, distfix; // We have no pointers in JS, so keep tables separate

function fixedtables(state) {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    var sym;

    lenfix = new utils.Buf32(512);
    distfix = new utils.Buf32(32);

    /* literal/length table */
    sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new utils.Buf8(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    utils.arraySet(state.window, src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      utils.arraySet(state.window, src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
}

function inflate(strm, flush) {
  var state;
  var input, output;          // input/output buffers
  var next;                   /* next input INDEX */
  var put;                    /* next output INDEX */
  var have, left;             /* available input and output */
  var hold;                   /* bit buffer */
  var bits;                   /* bits in bit buffer */
  var _in, _out;              /* save starting available input and output */
  var copy;                   /* number of stored or match bytes to copy */
  var from;                   /* where to copy match bytes from */
  var from_source;
  var here = 0;               /* current decoding table entry */
  var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //var last;                   /* parent table entry */
  var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  var len;                    /* length to copy for repeats, bits to drop */
  var ret;                    /* return code */
  var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
  var opts;

  var n; // temporary var for NEED_BITS

  var order = /* permutation of code lengths */
    [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];


  if (!strm || !strm.state || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
      case HEAD:
        if (state.wrap === 0) {
          state.mode = TYPEDO;
          break;
        }
        //=== NEEDBITS(16);
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
          state.check = 0/*crc32(0L, Z_NULL, 0)*/;
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//

          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = FLAGS;
          break;
        }
        state.flags = 0;           /* expect zlib header */
        if (state.head) {
          state.head.done = false;
        }
        if (!(state.wrap & 1) ||   /* check if zlib header allowed */
          (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
          strm.msg = 'incorrect header check';
          state.mode = BAD;
          break;
        }
        if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
        len = (hold & 0x0f)/*BITS(4)*/ + 8;
        if (state.wbits === 0) {
          state.wbits = len;
        }
        else if (len > state.wbits) {
          strm.msg = 'invalid window size';
          state.mode = BAD;
          break;
        }
        state.dmax = 1 << len;
        //Tracev((stderr, "inflate:   zlib header ok\n"));
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = hold & 0x200 ? DICTID : TYPE;
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        break;
      case FLAGS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.flags = hold;
        if ((state.flags & 0xff) !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        if (state.flags & 0xe000) {
          strm.msg = 'unknown header flags set';
          state.mode = BAD;
          break;
        }
        if (state.head) {
          state.head.text = ((hold >> 8) & 1);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = TIME;
        /* falls through */
      case TIME:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.time = hold;
        }
        if (state.flags & 0x0200) {
          //=== CRC4(state.check, hold)
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          hbuf[2] = (hold >>> 16) & 0xff;
          hbuf[3] = (hold >>> 24) & 0xff;
          state.check = crc32(state.check, hbuf, 4, 0);
          //===
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = OS;
        /* falls through */
      case OS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.xflags = (hold & 0xff);
          state.head.os = (hold >> 8);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = EXLEN;
        /* falls through */
      case EXLEN:
        if (state.flags & 0x0400) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length = hold;
          if (state.head) {
            state.head.extra_len = hold;
          }
          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        else if (state.head) {
          state.head.extra = null/*Z_NULL*/;
        }
        state.mode = EXTRA;
        /* falls through */
      case EXTRA:
        if (state.flags & 0x0400) {
          copy = state.length;
          if (copy > have) { copy = have; }
          if (copy) {
            if (state.head) {
              len = state.head.extra_len - state.length;
              if (!state.head.extra) {
                // Use untyped array for more convenient processing later
                state.head.extra = new Array(state.head.extra_len);
              }
              utils.arraySet(
                state.head.extra,
                input,
                next,
                // extra field is limited to 65536 bytes
                // - no need for additional size check
                copy,
                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                len
              );
              //zmemcpy(state.head.extra + len, next,
              //        len + copy > state.head.extra_max ?
              //        state.head.extra_max - len : copy);
            }
            if (state.flags & 0x0200) {
              state.check = crc32(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            state.length -= copy;
          }
          if (state.length) { break inf_leave; }
        }
        state.length = 0;
        state.mode = NAME;
        /* falls through */
      case NAME:
        if (state.flags & 0x0800) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            // TODO: 2 or 1 bytes?
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.name_max*/)) {
              state.head.name += String.fromCharCode(len);
            }
          } while (len && copy < have);

          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.name = null;
        }
        state.length = 0;
        state.mode = COMMENT;
        /* falls through */
      case COMMENT:
        if (state.flags & 0x1000) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.comm_max*/)) {
              state.head.comment += String.fromCharCode(len);
            }
          } while (len && copy < have);
          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.comment = null;
        }
        state.mode = HCRC;
        /* falls through */
      case HCRC:
        if (state.flags & 0x0200) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.check & 0xffff)) {
            strm.msg = 'header crc mismatch';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        if (state.head) {
          state.head.hcrc = ((state.flags >> 9) & 1);
          state.head.done = true;
        }
        strm.adler = state.check = 0;
        state.mode = TYPE;
        break;
      case DICTID:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        strm.adler = state.check = zswap32(hold);
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = DICT;
        /* falls through */
      case DICT:
        if (state.havedict === 0) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          return Z_NEED_DICT;
        }
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = TYPE;
        /* falls through */
      case TYPE:
        if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case TYPEDO:
        if (state.last) {
          //--- BYTEBITS() ---//
          hold >>>= bits & 7;
          bits -= bits & 7;
          //---//
          state.mode = CHECK;
          break;
        }
        //=== NEEDBITS(3); */
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.last = (hold & 0x01)/*BITS(1)*/;
        //--- DROPBITS(1) ---//
        hold >>>= 1;
        bits -= 1;
        //---//

        switch ((hold & 0x03)/*BITS(2)*/) {
          case 0:                             /* stored block */
            //Tracev((stderr, "inflate:     stored block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = STORED;
            break;
          case 1:                             /* fixed block */
            fixedtables(state);
            //Tracev((stderr, "inflate:     fixed codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = LEN_;             /* decode codes */
            if (flush === Z_TREES) {
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break inf_leave;
            }
            break;
          case 2:                             /* dynamic block */
            //Tracev((stderr, "inflate:     dynamic codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = TABLE;
            break;
          case 3:
            strm.msg = 'invalid block type';
            state.mode = BAD;
        }
        //--- DROPBITS(2) ---//
        hold >>>= 2;
        bits -= 2;
        //---//
        break;
      case STORED:
        //--- BYTEBITS() ---// /* go to byte boundary */
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
          strm.msg = 'invalid stored block lengths';
          state.mode = BAD;
          break;
        }
        state.length = hold & 0xffff;
        //Tracev((stderr, "inflate:       stored length %u\n",
        //        state.length));
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = COPY_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case COPY_:
        state.mode = COPY;
        /* falls through */
      case COPY:
        copy = state.length;
        if (copy) {
          if (copy > have) { copy = have; }
          if (copy > left) { copy = left; }
          if (copy === 0) { break inf_leave; }
          //--- zmemcpy(put, next, copy); ---
          utils.arraySet(output, input, next, copy, put);
          //---//
          have -= copy;
          next += copy;
          left -= copy;
          put += copy;
          state.length -= copy;
          break;
        }
        //Tracev((stderr, "inflate:       stored end\n"));
        state.mode = TYPE;
        break;
      case TABLE:
        //=== NEEDBITS(14); */
        while (bits < 14) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
//#ifndef PKZIP_BUG_WORKAROUND
        if (state.nlen > 286 || state.ndist > 30) {
          strm.msg = 'too many length or distance symbols';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracev((stderr, "inflate:       table sizes ok\n"));
        state.have = 0;
        state.mode = LENLENS;
        /* falls through */
      case LENLENS:
        while (state.have < state.ncode) {
          //=== NEEDBITS(3);
          while (bits < 3) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
          //--- DROPBITS(3) ---//
          hold >>>= 3;
          bits -= 3;
          //---//
        }
        while (state.have < 19) {
          state.lens[order[state.have++]] = 0;
        }
        // We have separate tables & no pointers. 2 commented lines below not needed.
        //state.next = state.codes;
        //state.lencode = state.next;
        // Switch to use dynamic table
        state.lencode = state.lendyn;
        state.lenbits = 7;

        opts = { bits: state.lenbits };
        ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
        state.lenbits = opts.bits;

        if (ret) {
          strm.msg = 'invalid code lengths set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, "inflate:       code lengths ok\n"));
        state.have = 0;
        state.mode = CODELENS;
        /* falls through */
      case CODELENS:
        while (state.have < state.nlen + state.ndist) {
          for (;;) {
            here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if (here_val < 16) {
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.lens[state.have++] = here_val;
          }
          else {
            if (here_val === 16) {
              //=== NEEDBITS(here.bits + 2);
              n = here_bits + 2;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              if (state.have === 0) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD;
                break;
              }
              len = state.lens[state.have - 1];
              copy = 3 + (hold & 0x03);//BITS(2);
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
            }
            else if (here_val === 17) {
              //=== NEEDBITS(here.bits + 3);
              n = here_bits + 3;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 3 + (hold & 0x07);//BITS(3);
              //--- DROPBITS(3) ---//
              hold >>>= 3;
              bits -= 3;
              //---//
            }
            else {
              //=== NEEDBITS(here.bits + 7);
              n = here_bits + 7;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 11 + (hold & 0x7f);//BITS(7);
              //--- DROPBITS(7) ---//
              hold >>>= 7;
              bits -= 7;
              //---//
            }
            if (state.have + copy > state.nlen + state.ndist) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            while (copy--) {
              state.lens[state.have++] = len;
            }
          }
        }

        /* handle error breaks in while */
        if (state.mode === BAD) { break; }

        /* check for end-of-block code (better have one) */
        if (state.lens[256] === 0) {
          strm.msg = 'invalid code -- missing end-of-block';
          state.mode = BAD;
          break;
        }

        /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */
        state.lenbits = 9;

        opts = { bits: state.lenbits };
        ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.lenbits = opts.bits;
        // state.lencode = state.next;

        if (ret) {
          strm.msg = 'invalid literal/lengths set';
          state.mode = BAD;
          break;
        }

        state.distbits = 6;
        //state.distcode.copy(state.codes);
        // Switch to use dynamic table
        state.distcode = state.distdyn;
        opts = { bits: state.distbits };
        ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.distbits = opts.bits;
        // state.distcode = state.next;

        if (ret) {
          strm.msg = 'invalid distances set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, 'inflate:       codes ok\n'));
        state.mode = LEN_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case LEN_:
        state.mode = LEN;
        /* falls through */
      case LEN:
        if (have >= 6 && left >= 258) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          inflate_fast(strm, _out);
          //--- LOAD() ---
          put = strm.next_out;
          output = strm.output;
          left = strm.avail_out;
          next = strm.next_in;
          input = strm.input;
          have = strm.avail_in;
          hold = state.hold;
          bits = state.bits;
          //---

          if (state.mode === TYPE) {
            state.back = -1;
          }
          break;
        }
        state.back = 0;
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if (here_bits <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_op && (here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.lencode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        state.length = here_val;
        if (here_op === 0) {
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          state.mode = LIT;
          break;
        }
        if (here_op & 32) {
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.back = -1;
          state.mode = TYPE;
          break;
        }
        if (here_op & 64) {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break;
        }
        state.extra = here_op & 15;
        state.mode = LENEXT;
        /* falls through */
      case LENEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
        //Tracevv((stderr, "inflate:         length %u\n", state.length));
        state.was = state.length;
        state.mode = DIST;
        /* falls through */
      case DIST:
        for (;;) {
          here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if ((here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.distcode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        if (here_op & 64) {
          strm.msg = 'invalid distance code';
          state.mode = BAD;
          break;
        }
        state.offset = here_val;
        state.extra = (here_op) & 15;
        state.mode = DISTEXT;
        /* falls through */
      case DISTEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
//#ifdef INFLATE_STRICT
        if (state.offset > state.dmax) {
          strm.msg = 'invalid distance too far back';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
        state.mode = MATCH;
        /* falls through */
      case MATCH:
        if (left === 0) { break inf_leave; }
        copy = _out - left;
        if (state.offset > copy) {         /* copy from window */
          copy = state.offset - copy;
          if (copy > state.whave) {
            if (state.sane) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break;
            }
// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
          }
          if (copy > state.wnext) {
            copy -= state.wnext;
            from = state.wsize - copy;
          }
          else {
            from = state.wnext - copy;
          }
          if (copy > state.length) { copy = state.length; }
          from_source = state.window;
        }
        else {                              /* copy from output */
          from_source = output;
          from = put - state.offset;
          copy = state.length;
        }
        if (copy > left) { copy = left; }
        left -= copy;
        state.length -= copy;
        do {
          output[put++] = from_source[from++];
        } while (--copy);
        if (state.length === 0) { state.mode = LEN; }
        break;
      case LIT:
        if (left === 0) { break inf_leave; }
        output[put++] = state.length;
        left--;
        state.mode = LEN;
        break;
      case CHECK:
        if (state.wrap) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            // Use '|' instead of '+' to make sure that result is signed
            hold |= input[next++] << bits;
            bits += 8;
          }
          //===//
          _out -= left;
          strm.total_out += _out;
          state.total += _out;
          if (_out) {
            strm.adler = state.check =
                /*UPDATE(state.check, put - _out, _out);*/
                (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

          }
          _out = left;
          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
          if ((state.flags ? hold : zswap32(hold)) !== state.check) {
            strm.msg = 'incorrect data check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   check matches trailer\n"));
        }
        state.mode = LENGTH;
        /* falls through */
      case LENGTH:
        if (state.wrap && state.flags) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.total & 0xffffffff)) {
            strm.msg = 'incorrect length check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   length matches trailer\n"));
        }
        state.mode = DONE;
        /* falls through */
      case DONE:
        ret = Z_STREAM_END;
        break inf_leave;
      case BAD:
        ret = Z_DATA_ERROR;
        break inf_leave;
      case MEM:
        return Z_MEM_ERROR;
      case SYNC:
        /* falls through */
      default:
        return Z_STREAM_ERROR;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
    ret = Z_BUF_ERROR;
  }
  return ret;
}

function inflateEnd(strm) {

  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
    return Z_STREAM_ERROR;
  }

  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK;
}

function inflateGetHeader(strm, head) {
  var state;

  /* check state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK;
}

function inflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var state;
  var dictid;
  var ret;

  /* check state */
  if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK;
}

exports.inflateReset = inflateReset;
exports.inflateReset2 = inflateReset2;
exports.inflateResetKeep = inflateResetKeep;
exports.inflateInit = inflateInit;
exports.inflateInit2 = inflateInit2;
exports.inflate = inflate;
exports.inflateEnd = inflateEnd;
exports.inflateGetHeader = inflateGetHeader;
exports.inflateSetDictionary = inflateSetDictionary;
exports.inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/


/***/ }),

/***/ "./node_modules/pako/lib/zlib/inftrees.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/zlib/inftrees.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");

var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

var CODES = 0;
var LENS = 1;
var DISTS = 2;

var lbase = [ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
];

var lext = [ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
];

var dbase = [ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
];

var dext = [ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
];

module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
{
  var bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  var len = 0;               /* a code's length in bits */
  var sym = 0;               /* index of code symbols */
  var min = 0, max = 0;          /* minimum and maximum code lengths */
  var root = 0;              /* number of index bits for root table */
  var curr = 0;              /* number of index bits for current table */
  var drop = 0;              /* code bits to drop for sub-table */
  var left = 0;                   /* number of prefix codes available */
  var used = 0;              /* code entries in table used */
  var huff = 0;              /* Huffman code */
  var incr;              /* for incrementing code, index */
  var fill;              /* index for replicating entries */
  var low;               /* low bits for current root entry */
  var mask;              /* mask for low root bits */
  var next;             /* next available space in table */
  var base = null;     /* base value table to use */
  var base_index = 0;
//  var shoextra;    /* extra bits table to use */
  var end;                    /* use base and extra for symbol > end */
  var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  var extra = null;
  var extra_index = 0;

  var here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES) {
    base = extra = work;    /* dummy value--not used */
    end = 19;

  } else if (type === LENS) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    end = -1;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS && used > ENOUGH_LENS) ||
    (type === DISTS && used > ENOUGH_DISTS)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS && used > ENOUGH_LENS) ||
        (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/messages.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/zlib/messages.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/trees.js":
/*!*********************************************!*\
  !*** ./node_modules/pako/lib/zlib/trees.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

/* eslint-disable space-unary-ops */

var utils = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");

/* Public constants ==========================================================*/
/* ===========================================================================*/


//var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED               = 4;
//var Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
var Z_BINARY              = 0;
var Z_TEXT                = 1;
//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;

/*============================================================================*/


function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES    = 2;
/* The three kinds of block type */

var MIN_MATCH    = 3;
var MAX_MATCH    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */

var LITERALS      = 256;
/* number of literal bytes 0..255 */

var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */

var D_CODES       = 30;
/* number of distance codes */

var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */

var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */

var MAX_BITS      = 15;
/* All codes must not exceed MAX_BITS bits */

var Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

var MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

var END_BLOCK   = 256;
/* end of block literal code */

var REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

var REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

var REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
var extra_lbits =   /* extra bits for each length code */
  [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];

var extra_dbits =   /* extra bits for each distance code */
  [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];

var extra_blbits =  /* extra bits for each bit length code */
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];

var bl_order =
  [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
var static_ltree  = new Array((L_CODES + 2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

var static_dtree  = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

var _dist_code    = new Array(DIST_CODE_LEN);
zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

var _length_code  = new Array(MAX_MATCH - MIN_MATCH + 1);
zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

var base_length   = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

var base_dist     = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
}


var static_l_desc;
var static_d_desc;
var static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
function put_short(s, w) {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
}


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
function send_bits(s, value, length) {
  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
}


function send_code(s, c, tree) {
  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
}


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
}


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
function gen_bitlen(s, desc)
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
  var tree            = desc.dyn_tree;
  var max_code        = desc.max_code;
  var stree           = desc.stat_desc.static_tree;
  var has_stree       = desc.stat_desc.has_stree;
  var extra           = desc.stat_desc.extra_bits;
  var base            = desc.stat_desc.extra_base;
  var max_length      = desc.stat_desc.max_length;
  var h;              /* heap index */
  var n, m;           /* iterate over the tree elements */
  var bits;           /* bit length */
  var xbits;          /* extra bits */
  var f;              /* frequency */
  var overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Trace((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
}


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
function gen_codes(tree, max_code, bl_count)
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
  var next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */
  var code = 0;              /* running code value */
  var bits;                  /* bit index */
  var n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS; bits++) {
    next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    var len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
}


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
function tr_static_init() {
  var n;        /* iterates over tree elements */
  var bits;     /* bit counter */
  var length;   /* length value */
  var code;     /* code value */
  var dist;     /* distance index */
  var bl_count = new Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);

  //static_init_done = true;
}


/* ===========================================================================
 * Initialize a new block.
 */
function init_block(s) {
  var n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
function bi_windup(s)
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}

/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */
function copy_block(s, buf, len, header)
//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
  bi_windup(s);        /* align on byte boundary */

  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
//  while (len--) {
//    put_byte(s, *buf++);
//  }
  utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
function smaller(tree, n, m, depth) {
  var _n2 = n * 2;
  var _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
}

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
function pqdownheap(s, tree, k)
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  var v = s.heap[k];
  var j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
}


// inlined manually
// var SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
function compress_block(s, ltree, dtree)
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  var dist;           /* distance of matched string */
  var lc;             /* match length or unmatched char (if dist == 0) */
  var lx = 0;         /* running index in l_buf */
  var code;           /* the code to send */
  var extra;          /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx < s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
}


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
function build_tree(s, desc)
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  var tree     = desc.dyn_tree;
  var stree    = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems    = desc.stat_desc.elems;
  var n, m;          /* iterate over heap elements */
  var max_code = -1; /* largest code with non zero frequency */
  var node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
}


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
function scan_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
function send_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
function build_bl_tree(s) {
  var max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
}


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
function send_all_trees(s, lcodes, dcodes, blcodes)
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  var rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
function detect_data_type(s) {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  var black_mask = 0xf3ffc07f;
  var n;

  /* Check for non-textual ("black-listed") bytes. */
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if ((black_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("white-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
}


var static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
function _tr_init(s)
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
}


/* ===========================================================================
 * Send a stored block
 */
function _tr_stored_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
  copy_block(s, buf, stored_len, true); /* with header */
}


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
function _tr_align(s) {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
function _tr_flush_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  var opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  var max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->last_lit));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
}

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
function _tr_tally(s, dist, lc)
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //var out_length, in_length, dcode;

  s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility

//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif

  return (s.last_lit === s.lit_bufsize - 1);
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
}

exports._tr_init  = _tr_init;
exports._tr_stored_block = _tr_stored_block;
exports._tr_flush_block  = _tr_flush_block;
exports._tr_tally = _tr_tally;
exports._tr_align = _tr_align;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/zstream.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/zstream.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

module.exports = ZStream;


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/wijmo/components/chart/chart.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wijmo/components/chart/chart.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<wj-flex-chart class=\"w-100 h-100\" [header]=\"properties.header\" [bindingX]=\"properties.bindingX\" [selectionMode]=\"properties.selectionMode\"\n  [itemsSource]=\"componentDataModel\" [chartType]=\"properties.chartType\"\n  [palette]=\"['rgba(42,159,214,1)', 'rgba(119,179,0,1)', 'rgba(153,51,204,1)', 'rgba(255,136,0,1)', 'rgba(204,0,0,1)', 'rgba(0,204,163,1)', 'rgba(61,109,204,1)', 'rgba(82,82,82,1)', 'rgba(0,0,0,1)']\">\n  <wj-flex-chart-legend [position]=\"properties.legendPosition\"></wj-flex-chart-legend>\n\n  <wj-flex-chart-series *ngFor=\"let serie of properties.series\" [name]=\"serie.name\" [binding]=\"serie.binding\"></wj-flex-chart-series>\n\n  <wj-flex-chart-animation></wj-flex-chart-animation>\n</wj-flex-chart>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/wijmo/components/column-editor/column-editor.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wijmo/components/column-editor/column-editor.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Column editor</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body px-4 d-flex flex-column\">\n  <div class=\"position-relative h-100\">\n    <form #columnInfoForm=\"ngForm\">\n      <div class=\"form-group row mx-0 mb-2\">\n        <label for=\"field-name\" class=\"col-form-label px-0 col-5 col-lg-3\">Field Name</label>\n        <div class=\"flex-fill ml-2\">\n          <input type=\"text\" class=\"form-control\" disabled=\"disabled\" [(ngModel)]=\"columnInfo.bindingName\"\n            placeholder=\"Enter column header text\" name=\"fieldName\" id=\"field-name\">\n        </div>\n      </div>\n      <div class=\"form-group row mx-0 mb-2\">\n        <label for=\"header-text\" class=\"col-form-label px-0 col-5 col-lg-3\">Header Text</label>\n        <div class=\"flex-fill ml-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"columnInfo.headerText\"\n            placeholder=\"Enter column header text\" name=\"headerText\" id=\"header-text\">\n        </div>\n      </div>\n      <div class=\"form-group row mx-0 mb-2\">\n        <label for=\"type-selection\" class=\"col-form-label px-0 col-5 col-lg-3\">Data Type</label>\n        <div class=\"flex-fill ml-2\">\n          <select class=\"form-control\" id=\"type-selection\" [(ngModel)]=\"columnInfo.dataType\" name=\"data-type\">\n            <option *ngFor=\"let dt of dataTypes\" [value]=\"dt.value\">{{dt.label}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row mx-0 mb-2\" *ngIf=\"columnInfo.dataType == 4\">\n        <label for=\"type-selection\" class=\"col-form-label px-0 col-5 col-lg-3\">Display Format</label>\n        <div class=\"flex-fill ml-2\">\n          <select class=\"form-control\" id=\"type-selection\" [(ngModel)]=\"columnInfo.displayFormat\" name=\"display-format\">\n            <option *ngFor=\"let df of dateFormats\" [value]=\"df.value\">{{df.label}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row mx-0 mb-2\" *ngIf=\"columnInfo.dataType == 2\">\n        <label for=\"type-selection\" class=\"col-form-label px-0 col-5 col-lg-3\">Display format</label>\n        <div class=\"flex-fill ml-2\">\n          <select class=\"form-control\" id=\"type-selection\" [(ngModel)]=\"columnInfo.displayFormat\" name=\"display-format\">\n            <option *ngFor=\"let nf of numberFormats\" [value]=\"nf.value\">{{nf.label}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row mx-0 mb-2\">\n        <label for=\"column-width\" class=\"col-form-label px-0 col-5 col-lg-3\">Width</label>\n        <div class=\"flex-fill ml-2\">\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"columnInfo.width\" placeholder=\"Enter column width\"\n            name=\"name\" id=\"column-width\">\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<div class=\"modal-footer flex-column\">\n  <div class=\"row w-100 mx-0 px-0\">\n    <button type=\"button\" (click)=\"saveColumn()\" [disabled]=\"!columnInfoForm.valid\"\n      class=\"btn btn-primary ml-auto mr-2\">Save</button>\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modalRef.hide()\">Cancel</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/wijmo/components/data-grid/data-grid.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wijmo/components/data-grid/data-grid.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mx-0\" *ngIf=\"properties.source\">\n  <app-filters [fields]=\"columnsList\" (changed)=\"onFiltersChange($event)\" [defaultFilters]=\"defaultFilters\"\n    [currentFilters]=\"filters\" [dataObject]=\"dataObject\" [connection]=\"properties.source.connection\"></app-filters>\n  <button *ngIf=\"!properties.isReadOnly\" type=\"button\" (click)=\"saveData()\" [disabled]=\"!(changedData && changedData.length)\"\n    class=\"btn btn-primary ml-auto mr-0 align-self-baseline mb-2\">Save</button>\n  <span dropdown class=\"d-flex position-relative px-2 mb-2\" [ngClass]=\"{'ml-auto': properties.isReadOnly}\" placement=\"top left\">\n    <button dropdownToggle type=\"button\" class=\"btn py-0\">\n      <i class=\"fa fa-ellipsis-v\"></i>\n    </button>\n    <ul *dropdownMenu class=\"dropdown-menu left-menu\" role=\"menu\">\n      <li role=\"menuitem\">\n        <a class=\"dropdown-item cursor-pointer\" (click)=\"exportToExcel()\">Export to Excel</a>\n      </li>\n      <li role=\"menuitem\">\n        <a class=\"dropdown-item cursor-pointer\" (click)=\"exportToCSV()\">Export to CSV</a>\n      </li>\n    </ul>\n  </span>\n</div>\n<div class=\"position-relative h-100\">\n  <div class=\"d-flex justify-content-center position-absolute align-items-center w-100 h-100 spinner bg-white flex-column\"\n    *ngIf=\"loading\">\n    <div class=\"spinner-border\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </div>\n  <wj-menu #ctxMenu\n    [isButton]=\"true\"\n    (itemClicked)=\"onCtxMenuClicked(ctxMenu)\" style=\"display:none;\">\n    <wj-menu-item value=\"edit-column\"><span class=\"px-2\"><i class=\"fa fa-columns mr-1 my-2\"></i>Format Column</span></wj-menu-item>\n    <wj-menu-item value=\"fill-all\"><span class=\"px-2\"><i class=\"fa fa-file-o mr-1 my-2\"></i>Fill all rows</span></wj-menu-item>\n    <wj-menu-item value=\"fill-empty\"><span class=\"px-2\"><i class=\"fa fa-files-o mr-1 my-2\"></i>Fill empty rows</span></wj-menu-item>\n  </wj-menu>\n  <wj-flex-grid #grid class=\"data-grid h-100\" [wjContextMenu]=\"ctxMenu\" [(itemsSource)]=\"collectionView\"\n    [allowAddNew]=\"!!properties.allowAddNew\" [allowDelete]=\"!!properties.allowDelete\"\n    (initialized)=\"initializedGrid(grid)\" [isReadOnly]=\"!!properties.isReadOnly\">\n    <ng-container *ngFor=\"let field of columnsList\">\n      <wj-flex-grid-column *ngIf=\"!field.details\" [header]=\"field.headerText\" [binding]=\"field.bindingName\"\n        [dataType]=\"field.dataType\" [width]=\"field.width\" [format]=\"field.displayFormat\">\n        <ng-template wjFlexGridCellTemplate [cellType]=\"'ColumnHeader'\" let-cell=\"cell\">\n          <div class=\"text-normal\" [title]=\"field.headerText\">{{field.headerText}}</div>\n          <app-filter (apply)=\"onApply($event, field)\" [field]=\"field\" [icon]=\"true\" [dataObject]=\"dataObject\" [connection]=\"properties.source.connection\"\n          [currentFilters]=\"filters\" [defaultFilters]=\"defaultFilters\"></app-filter>\n        </ng-template>\n      </wj-flex-grid-column>\n      <wj-flex-grid-column *ngIf=\"field.details\" header=\"Actions\">\n        <ng-template wjFlexGridCellTemplate cellType=\"Cell\" let-item=\"item\">\n          <a [routerLink]=\"['../', properties.details.pageName]\"\n          [queryParams]=\"getQueryParams(item)\">Details</a>\n        </ng-template>\n      </wj-flex-grid-column>\n    </ng-container>\n  </wj-flex-grid>\n  <div class=\"row m-0 align-items-center\">\n    <i class=\"fa fa-filter cursor-pointer px-1\" *ngIf=\"filters\" triggers=\"mouseenter:mouseleave\" [popover]=\"popTemplate\"></i>\n    <span class=\"ml-auto mr-1\">Rows: {{collectionView.items.length | number}}</span>\n    <ng-container *ngIf=\"limitRows\">\n      |<i class=\"fa fa-angle-double-left ml-1 cursor-pointer\" aria-hidden=\"true\" (click)=\"onNextPage(-1)\"></i>\n      Page: {{currentPage}}<i class=\"fa fa-angle-double-right cursor-pointer\" (click)=\"onNextPage(1)\" aria-hidden=\"true\"></i>\n    </ng-container>\n  </div>\n</div>\n\n<ng-template #popTemplate>\n  <h6>Apply Filter</h6>\n  <ul class=\"applied-filters-list px-0\" *ngIf=\"filters\">\n    <li *ngFor=\"let f of filtersList\">\n      <b>{{f.fieldName}}</b>: {{f.value}}\n    </li>\n  </ul>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/wijmo/components/grid-object-explorer/grid-object-explorer.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wijmo/components/grid-object-explorer/grid-object-explorer.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb px-0 py-2 mb-3\">\n  <li class=\"breadcrumb-item\">\n    <a *ngIf=\"objectPath.length\" (click)=\"selectPath(-1)\">root</a>\n    <a *ngIf=\"!objectPath.length\">root</a>\n  </li>\n  <li class=\"breadcrumb-item\" *ngFor=\"let item of objectPath; let i = index; let last = last;\">\n    <a *ngIf=\"!last\" (click)=\"selectPath(i)\">{{item.path}}</a>\n    <span *ngIf=\"last\">{{item.path}}</span>\n  </li>\n  <li class=\"ml-auto\">\n    <span class=\"badge badge-info align-text-bottom\">{{fieldsCount}} rows</span>\n  </li>\n  <li>\n    <span dropdown class=\"position-relative px-2\" placement=\"top left\">\n      <button dropdownToggle type=\"button\" class=\"btn py-0\">\n        <i class=\"fa fa-ellipsis-v\"></i>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu export-menu\" role=\"menu\">\n        <li role=\"menuitem\">\n          <a class=\"dropdown-item cursor-pointer\" (click)=\"exportToExcel()\">Export to Excel</a>\n        </li>\n        <li role=\"menuitem\">\n          <a class=\"dropdown-item cursor-pointer\" (click)=\"exportToCSV()\">Export to CSV</a>\n        </li>\n      </ul>\n    </span>\n  </li>\n</ol>\n<wj-menu #ctxMenu\n         [isButton]=\"true\"\n         (itemClicked)=\"onCtxMenuClicked(ctxMenu)\" style=\"display:none;\">\n    <wj-menu-item [value]=\"'edit'\">Edit Column</wj-menu-item>\n</wj-menu>\n<wj-flex-grid #grid [itemsSource]=\"itemsSource\" [wjContextMenu]=\"ctxMenu\" [isReadOnly]=\"properties.isReadOnly\" [headersVisibility]=\"'All'\"\n  [selectionMode]=\"properties.selectionMode || 0\" [allowDelete]=\"properties.allowDelete || false\" [allowAddNew]=\"properties.allowAddNew || false\"\n  class=\"h-100\" (resizedColumn)=\"onResizedColumn($event)\">\n  <ng-container *ngFor=\"let column of columnsList\">\n    <wj-flex-grid-column [header]=\"column.headerText || getDefaultHeader(column)\" [dataType]=\"column.dataType\" [binding]=\"column.bindingName\"\n      [width]=\"column.width\" [format]=\"column.displayFormat\">\n      <ng-template wjFlexGridCellTemplate *ngIf=\"column.dataType === 4\" [cellType]=\"'CellEdit'\" let-cell=\"cell\">\n        <wj-input-date [(value)]=\"cell.value\" [isRequired]=\"false\" [format]=\"column.displayFormat\"></wj-input-date>\n      </ng-template>\n      <ng-template wjFlexGridCellTemplate cellType=\"Cell\" let-item=\"item\">\n        <a class=\"object-type\" *ngIf=\"isObject(item[column.bindingName]); else valueType\"\n          (click)=\"onDataSelect(item, column)\">{{formatToStr(item[column.bindingName])}}</a>\n        <ng-template #valueType>\n          <span class=\"value-type\">{{formatValue(item, column)}}</span></ng-template>\n      </ng-template>\n\n    </wj-flex-grid-column>\n  </ng-container>\n  <wj-flex-grid-filter #filter></wj-flex-grid-filter>\n</wj-flex-grid>\n"

/***/ }),

/***/ "./node_modules/set-immediate-shim/index.js":
/*!**************************************************!*\
  !*** ./node_modules/set-immediate-shim/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = typeof setImmediate === 'function' ? setImmediate :
	function setImmediate() {
		var args = [].slice.apply(arguments);
		args.splice(1, 0, 0);
		setTimeout.apply(null, args);
	};


/***/ }),

/***/ "./node_modules/stream/index.js":
/*!**************************************!*\
  !*** ./node_modules/stream/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Emitter = __webpack_require__(/*! emitter */ "./node_modules/emitter-component/index.js");

function Stream() {
  Emitter.call(this);
}
Stream.prototype = new Emitter();
module.exports = Stream;
// Backwards-compat with node 0.4.x
Stream.Stream = Stream;

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (!this.hasListeners('error')) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.off('data', ondata);
    dest.off('drain', ondrain);

    source.off('end', onend);
    source.off('close', onclose);

    source.off('error', onerror);
    dest.off('error', onerror);

    source.off('end', cleanup);
    source.off('close', cleanup);

    dest.off('end', cleanup);
    dest.off('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('end', cleanup);
  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
}


/***/ }),

/***/ "./node_modules/wijmo/wijmo.angular2.chart.animation.js":
/*!**************************************************************!*\
  !*** ./node_modules/wijmo/wijmo.angular2.chart.animation.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
﻿/*!
    *
    * Wijmo Library 5.20191.615
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */

var __extends=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),__decorate=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},__param=this&&this.__param||function(t,e){return function(o,r){e(o,r,t)}};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=__webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"),common_1=__webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"),wijmo_angular2_directiveBase_1=__webpack_require__(/*! wijmo/wijmo.angular2.directiveBase */ "./node_modules/wijmo/wijmo.angular2.directiveBase.js"),wjcChartAnimation=__webpack_require__(/*! wijmo/wijmo.chart.animation */ "./node_modules/wijmo/wijmo.chart.animation.js");exports.wjFlexChartAnimationMeta={selector:"wj-flex-chart-animation",template:"",inputs:["wjProperty","animationMode","easing","duration","axisAnimation"],outputs:["initialized"],providers:[]};var WjFlexChartAnimation=function(t){function e(e,o,r){var n=t.call(this,r)||this;n.isInitialized=!1;n._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(n,e,o,r);return n.created(),n}var o;return __extends(e,t),o=e,e.prototype.created=function(){},e.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},e.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},e.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},e.meta={outputs:exports.wjFlexChartAnimationMeta.outputs},e=o=__decorate([core_1.Component({selector:exports.wjFlexChartAnimationMeta.selector,template:exports.wjFlexChartAnimationMeta.template,inputs:exports.wjFlexChartAnimationMeta.inputs,outputs:exports.wjFlexChartAnimationMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return o})}].concat(exports.wjFlexChartAnimationMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],e)}(wjcChartAnimation.ChartAnimation);exports.WjFlexChartAnimation=WjFlexChartAnimation;var moduleExports=[WjFlexChartAnimation],WjChartAnimationModule=function(){function t(){}return t=__decorate([core_1.NgModule({imports:[wijmo_angular2_directiveBase_1.WjDirectiveBaseModule,common_1.CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],t)}();exports.WjChartAnimationModule=WjChartAnimationModule;

/***/ }),

/***/ "./node_modules/wijmo/wijmo.angular2.chart.js":
/*!****************************************************!*\
  !*** ./node_modules/wijmo/wijmo.angular2.chart.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
﻿/*!
    *
    * Wijmo Library 5.20191.615
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */

var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),__decorate=this&&this.__decorate||function(e,t,r,o){var n,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(a<3?n(i):a>3?n(t,r,i):n(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},__param=this&&this.__param||function(e,t){return function(r,o){t(r,o,e)}};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=__webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"),common_1=__webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"),forms_1=__webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"),wijmo_angular2_directiveBase_1=__webpack_require__(/*! wijmo/wijmo.angular2.directiveBase */ "./node_modules/wijmo/wijmo.angular2.directiveBase.js"),wjcChart=__webpack_require__(/*! wijmo/wijmo.chart */ "./node_modules/wijmo/wijmo.chart.js");exports.wjFlexChartMeta={selector:"wj-flex-chart",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingX","interpolateNulls","legendToggle","symbolSize","options","selection","itemFormatter","labelContent","chartType","rotated","stacking"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","selectionChangePC: selectionChange","seriesVisibilityChangedNg: seriesVisibilityChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjFlexChart=function(e){function t(t,r,o){var n=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,r))||this;n.isInitialized=!1;n._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(n,t,r,o);return n.created(),n}var r;return __extends(t,e),r=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,r,o,n){var a=this;void 0===n&&(n=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[r]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(a,t,r,o,n)}):e.prototype.addEventListener.call(this,t,r,o,n)},Object.defineProperty(t.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(e){this.tooltip.content=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(e){this.dataLabel.content=e},enumerable:!0,configurable:!0}),t.meta={outputs:exports.wjFlexChartMeta.outputs,changeEvents:{selectionChanged:["selection"]}},t=r=__decorate([core_1.Component({selector:exports.wjFlexChartMeta.selector,template:exports.wjFlexChartMeta.template,inputs:exports.wjFlexChartMeta.inputs,outputs:exports.wjFlexChartMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return r})}].concat(exports.wjFlexChartMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcChart.FlexChart);exports.WjFlexChart=WjFlexChart,exports.wjFlexPieMeta={selector:"wj-flex-pie",template:"<div><ng-content></ng-content></div>",inputs:["wjModelProperty","isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingName","innerRadius","isAnimated","offset","reversed","startAngle","selectedIndex","selectedItemPosition","selectedItemOffset","itemFormatter","labelContent","titles"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjFlexPie=function(e){function t(t,r,o){var n=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,r))||this;n.isInitialized=!1;n._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(n,t,r,o);return n.created(),n}var r;return __extends(t,e),r=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,r,o,n){var a=this;void 0===n&&(n=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[r]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(a,t,r,o,n)}):e.prototype.addEventListener.call(this,t,r,o,n)},Object.defineProperty(t.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(e){this.tooltip.content=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(e){this.dataLabel.content=e},enumerable:!0,configurable:!0}),t.meta={outputs:exports.wjFlexPieMeta.outputs},t=r=__decorate([core_1.Component({selector:exports.wjFlexPieMeta.selector,template:exports.wjFlexPieMeta.template,inputs:exports.wjFlexPieMeta.inputs,outputs:exports.wjFlexPieMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return r})}].concat(exports.wjFlexPieMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcChart.FlexPie);exports.WjFlexPie=WjFlexPie,exports.wjFlexChartAxisMeta={selector:"wj-flex-chart-axis",template:"",inputs:["wjProperty","axisLine","format","labels","majorGrid","majorTickMarks","majorUnit","max","min","position","reversed","title","labelAngle","minorGrid","minorTickMarks","minorUnit","origin","logBase","plotArea","labelAlign","name","overlappingLabels","labelPadding","itemFormatter","itemsSource","binding"],outputs:["initialized","rangeChangedNg: rangeChanged"],providers:[]};var WjFlexChartAxis=function(e){function t(t,r,o){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="axes";n._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(n,t,r,o);return n.created(),n}var r;return __extends(t,e),r=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:exports.wjFlexChartAxisMeta.outputs},t=r=__decorate([core_1.Component({selector:exports.wjFlexChartAxisMeta.selector,template:exports.wjFlexChartAxisMeta.template,inputs:exports.wjFlexChartAxisMeta.inputs,outputs:exports.wjFlexChartAxisMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return r})}].concat(exports.wjFlexChartAxisMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcChart.Axis);exports.WjFlexChartAxis=WjFlexChartAxis,exports.wjFlexChartLegendMeta={selector:"wj-flex-chart-legend",template:"",inputs:["wjProperty","position","title","titleAlign"],outputs:["initialized"],providers:[]};var WjFlexChartLegend=function(e){function t(t,r,o){var n=e.call(this,o)||this;n.isInitialized=!1,n.wjProperty="legend";n._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(n,t,r,o);return n.created(),n}var r;return __extends(t,e),r=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:exports.wjFlexChartLegendMeta.outputs},t=r=__decorate([core_1.Component({selector:exports.wjFlexChartLegendMeta.selector,template:exports.wjFlexChartLegendMeta.template,inputs:exports.wjFlexChartLegendMeta.inputs,outputs:exports.wjFlexChartLegendMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return r})}].concat(exports.wjFlexChartLegendMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcChart.Legend);exports.WjFlexChartLegend=WjFlexChartLegend,exports.wjFlexChartDataLabelMeta={selector:"wj-flex-chart-data-label",template:"",inputs:["wjProperty","content","border","offset","connectingLine","position"],outputs:["initialized","renderingNg: rendering"],providers:[]};var WjFlexChartDataLabel=function(e){function t(t,r,o){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="dataLabel";n._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(n,t,r,o);return n.created(),n}var r;return __extends(t,e),r=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:exports.wjFlexChartDataLabelMeta.outputs},t=r=__decorate([core_1.Component({selector:exports.wjFlexChartDataLabelMeta.selector,template:exports.wjFlexChartDataLabelMeta.template,inputs:exports.wjFlexChartDataLabelMeta.inputs,outputs:exports.wjFlexChartDataLabelMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return r})}].concat(exports.wjFlexChartDataLabelMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcChart.DataLabel);exports.WjFlexChartDataLabel=WjFlexChartDataLabel,exports.wjFlexPieDataLabelMeta={selector:"wj-flex-pie-data-label",template:"",inputs:["wjProperty","content","border","offset","connectingLine","position"],outputs:["initialized","renderingNg: rendering"],providers:[]};var WjFlexPieDataLabel=function(e){function t(t,r,o){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="dataLabel";n._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(n,t,r,o);return n.created(),n}var r;return __extends(t,e),r=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:exports.wjFlexPieDataLabelMeta.outputs},t=r=__decorate([core_1.Component({selector:exports.wjFlexPieDataLabelMeta.selector,template:exports.wjFlexPieDataLabelMeta.template,inputs:exports.wjFlexPieDataLabelMeta.inputs,outputs:exports.wjFlexPieDataLabelMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return r})}].concat(exports.wjFlexPieDataLabelMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcChart.PieDataLabel);exports.WjFlexPieDataLabel=WjFlexPieDataLabel,exports.wjFlexChartSeriesMeta={selector:"wj-flex-chart-series",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","tooltipContent","itemFormatter","chartType"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};var WjFlexChartSeries=function(e){function t(t,r,o){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="series";n._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(n,t,r,o);return n.created(),n}var r;return __extends(t,e),r=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:exports.wjFlexChartSeriesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},t=r=__decorate([core_1.Component({selector:exports.wjFlexChartSeriesMeta.selector,template:exports.wjFlexChartSeriesMeta.template,inputs:exports.wjFlexChartSeriesMeta.inputs,outputs:exports.wjFlexChartSeriesMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return r})}].concat(exports.wjFlexChartSeriesMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcChart.Series);exports.WjFlexChartSeries=WjFlexChartSeries,exports.wjFlexChartLineMarkerMeta={selector:"wj-flex-line-marker",template:"",inputs:["wjProperty","isVisible","seriesIndex","horizontalPosition","content","verticalPosition","alignment","lines","interaction","dragLines","dragThreshold","dragContent"],outputs:["initialized","positionChangedNg: positionChanged"],providers:[]};var WjFlexChartLineMarker=function(e){function t(t,r,o){var n=e.call(this,o)||this;n.isInitialized=!1;n._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(n,t,r,o);return n.created(),n}var r;return __extends(t,e),r=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:exports.wjFlexChartLineMarkerMeta.outputs},t=r=__decorate([core_1.Component({selector:exports.wjFlexChartLineMarkerMeta.selector,template:exports.wjFlexChartLineMarkerMeta.template,inputs:exports.wjFlexChartLineMarkerMeta.inputs,outputs:exports.wjFlexChartLineMarkerMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return r})}].concat(exports.wjFlexChartLineMarkerMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcChart.LineMarker);exports.WjFlexChartLineMarker=WjFlexChartLineMarker,exports.wjFlexChartDataPointMeta={selector:"wj-flex-chart-data-point",template:"",inputs:["wjProperty","x","y"],outputs:["initialized"],providers:[]};var WjFlexChartDataPoint=function(e){function t(t,r,o){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="";n._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(n,t,r,o);return n.created(),n}var r;return __extends(t,e),r=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:exports.wjFlexChartDataPointMeta.outputs},t=r=__decorate([core_1.Component({selector:exports.wjFlexChartDataPointMeta.selector,template:exports.wjFlexChartDataPointMeta.template,inputs:exports.wjFlexChartDataPointMeta.inputs,outputs:exports.wjFlexChartDataPointMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return r})}].concat(exports.wjFlexChartDataPointMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcChart.DataPoint);exports.WjFlexChartDataPoint=WjFlexChartDataPoint,exports.wjFlexChartPlotAreaMeta={selector:"wj-flex-chart-plot-area",template:"",inputs:["wjProperty","column","height","name","row","style","width"],outputs:["initialized"],providers:[]};var WjFlexChartPlotArea=function(e){function t(t,r,o){var n=e.call(this)||this;n.isInitialized=!1,n.wjProperty="plotAreas";n._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(n,t,r,o);return n.created(),n}var r;return __extends(t,e),r=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:exports.wjFlexChartPlotAreaMeta.outputs},t=r=__decorate([core_1.Component({selector:exports.wjFlexChartPlotAreaMeta.selector,template:exports.wjFlexChartPlotAreaMeta.template,inputs:exports.wjFlexChartPlotAreaMeta.inputs,outputs:exports.wjFlexChartPlotAreaMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return r})}].concat(exports.wjFlexChartPlotAreaMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcChart.PlotArea);exports.WjFlexChartPlotArea=WjFlexChartPlotArea;var moduleExports=[WjFlexChart,WjFlexPie,WjFlexChartAxis,WjFlexChartLegend,WjFlexChartDataLabel,WjFlexPieDataLabel,WjFlexChartSeries,WjFlexChartLineMarker,WjFlexChartDataPoint,WjFlexChartPlotArea],WjChartModule=function(){function e(){}return e=__decorate([core_1.NgModule({imports:[wijmo_angular2_directiveBase_1.WjDirectiveBaseModule,common_1.CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()})],e)}();exports.WjChartModule=WjChartModule;

/***/ }),

/***/ "./node_modules/wijmo/wijmo.angular2.input.js":
/*!****************************************************!*\
  !*** ./node_modules/wijmo/wijmo.angular2.input.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
﻿/*!
    *
    * Wijmo Library 5.20191.615
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */

var __extends=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),__decorate=this&&this.__decorate||function(e,t,o,n){var r,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,o,i):r(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i},__param=this&&this.__param||function(e,t){return function(o,n){t(o,n,e)}};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=__webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"),common_1=__webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"),forms_1=__webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"),wijmo_angular2_directiveBase_1=__webpack_require__(/*! wijmo/wijmo.angular2.directiveBase */ "./node_modules/wijmo/wijmo.angular2.directiveBase.js"),wjcCore=__webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js"),wjcInput=__webpack_require__(/*! wijmo/wijmo.input */ "./node_modules/wijmo/wijmo.input.js");exports.wjListBoxMeta={selector:"wj-list-box",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","isContentHtml","maxHeight","selectedValuePath","itemFormatter","displayMemberPath","checkedMemberPath","itemsSource","showGroups","selectedIndex","selectedItem","selectedValue","checkedItems"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","formatItemNg: formatItem","itemsChangedNg: itemsChanged","itemCheckedNg: itemChecked","selectedIndexChangedNg: selectedIndexChanged","selectedIndexChangePC: selectedIndexChange","selectedItemChangePC: selectedItemChange","selectedValueChangePC: selectedValueChange","checkedItemsChangedNg: checkedItemsChanged","checkedItemsChangePC: checkedItemsChange"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjListBox=function(e){function t(t,o,n){var r=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,o))||this;r.isInitialized=!1,r.wjModelProperty="selectedValue";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,t,o,n);return r.created(),r}var o;return __extends(t,e),o=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,o,n,r){var a=this;void 0===r&&(r=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[o]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(a,t,o,n,r)}):e.prototype.addEventListener.call(this,t,o,n,r)},t.meta={outputs:exports.wjListBoxMeta.outputs,changeEvents:{selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"],checkedItemsChanged:["checkedItems"]}},t=o=__decorate([core_1.Component({selector:exports.wjListBoxMeta.selector,template:exports.wjListBoxMeta.template,inputs:exports.wjListBoxMeta.inputs,outputs:exports.wjListBoxMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return o})}].concat(exports.wjListBoxMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcInput.ListBox);exports.WjListBox=WjListBox,exports.wjComboBoxMeta={selector:"wj-combo-box",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","displayMemberPath","selectedValuePath","headerPath","isContentHtml","isEditable","maxDropDownHeight","maxDropDownWidth","itemFormatter","showGroups","trimText","itemsSource","text","selectedIndex","selectedItem","selectedValue"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","isDroppedDownChangingNg: isDroppedDownChanging","isDroppedDownChangedNg: isDroppedDownChanged","isDroppedDownChangePC: isDroppedDownChange","textChangedNg: textChanged","textChangePC: textChange","itemsSourceChangedNg: itemsSourceChanged","formatItemNg: formatItem","selectedIndexChangedNg: selectedIndexChanged","selectedIndexChangePC: selectedIndexChange","selectedItemChangePC: selectedItemChange","selectedValueChangePC: selectedValueChange"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjComboBox=function(e){function t(t,o,n){var r=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,o))||this;r.isInitialized=!1,r.wjModelProperty="selectedValue";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,t,o,n);return r.created(),r}var o;return __extends(t,e),o=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,o,n,r){var a=this;void 0===r&&(r=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[o]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(a,t,o,n,r)}):e.prototype.addEventListener.call(this,t,o,n,r)},t.meta={outputs:exports.wjComboBoxMeta.outputs,changeEvents:{isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"]}},t=o=__decorate([core_1.Component({selector:exports.wjComboBoxMeta.selector,template:exports.wjComboBoxMeta.template,inputs:exports.wjComboBoxMeta.inputs,outputs:exports.wjComboBoxMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return o})}].concat(exports.wjComboBoxMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcInput.ComboBox);exports.WjComboBox=WjComboBox,exports.wjAutoCompleteMeta={selector:"wj-auto-complete",template:"",inputs:["asyncBindings","wjModelProperty","isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","displayMemberPath","selectedValuePath","headerPath","isContentHtml","isEditable","maxDropDownHeight","maxDropDownWidth","itemFormatter","showGroups","trimText","delay","maxItems","minLength","cssMatch","itemsSourceFunction","searchMemberPath","itemsSource","text","selectedIndex","selectedItem","selectedValue"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","isDroppedDownChangingNg: isDroppedDownChanging","isDroppedDownChangedNg: isDroppedDownChanged","isDroppedDownChangePC: isDroppedDownChange","textChangedNg: textChanged","textChangePC: textChange","itemsSourceChangedNg: itemsSourceChanged","formatItemNg: formatItem","selectedIndexChangedNg: selectedIndexChanged","selectedIndexChangePC: selectedIndexChange","selectedItemChangePC: selectedItemChange","selectedValueChangePC: selectedValueChange"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjAutoComplete=function(e){function t(t,o,n){var r=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,o))||this;r.isInitialized=!1,r.wjModelProperty="selectedValue";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,t,o,n);return r.created(),r}var o;return __extends(t,e),o=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,o,n,r){var a=this;void 0===r&&(r=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[o]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(a,t,o,n,r)}):e.prototype.addEventListener.call(this,t,o,n,r)},t.meta={outputs:exports.wjAutoCompleteMeta.outputs,changeEvents:{isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"]}},t=o=__decorate([core_1.Component({selector:exports.wjAutoCompleteMeta.selector,template:exports.wjAutoCompleteMeta.template,inputs:exports.wjAutoCompleteMeta.inputs,outputs:exports.wjAutoCompleteMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return o})}].concat(exports.wjAutoCompleteMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcInput.AutoComplete);exports.WjAutoComplete=WjAutoComplete,exports.wjCalendarMeta={selector:"wj-calendar",template:"",inputs:["asyncBindings","wjModelProperty","isDisabled","monthView","showHeader","itemFormatter","itemValidator","firstDayOfWeek","max","min","formatYearMonth","formatDayHeaders","formatDays","formatYear","formatMonths","selectionMode","isReadOnly","repeatButtons","showYearPicker","value","displayMonth"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","valueChangedNg: valueChanged","valueChangePC: valueChange","displayMonthChangedNg: displayMonthChanged","displayMonthChangePC: displayMonthChange","formatItemNg: formatItem"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjCalendar=function(e){function t(t,o,n){var r=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,o))||this;r.isInitialized=!1,r.wjModelProperty="value";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,t,o,n);return r.created(),r}var o;return __extends(t,e),o=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,o,n,r){var a=this;void 0===r&&(r=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[o]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(a,t,o,n,r)}):e.prototype.addEventListener.call(this,t,o,n,r)},t.meta={outputs:exports.wjCalendarMeta.outputs,changeEvents:{valueChanged:["value"],displayMonthChanged:["displayMonth"]}},t=o=__decorate([core_1.Component({selector:exports.wjCalendarMeta.selector,template:exports.wjCalendarMeta.template,inputs:exports.wjCalendarMeta.inputs,outputs:exports.wjCalendarMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return o})}].concat(exports.wjCalendarMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcInput.Calendar);exports.WjCalendar=WjCalendar,exports.wjColorPickerMeta={selector:"wj-color-picker",template:"",inputs:["asyncBindings","wjModelProperty","isDisabled","showAlphaChannel","showColorString","palette","value"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","valueChangedNg: valueChanged","valueChangePC: valueChange"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjColorPicker=function(e){function t(t,o,n){var r=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,o))||this;r.isInitialized=!1,r.wjModelProperty="value";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,t,o,n);return r.created(),r}var o;return __extends(t,e),o=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,o,n,r){var a=this;void 0===r&&(r=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[o]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(a,t,o,n,r)}):e.prototype.addEventListener.call(this,t,o,n,r)},t.meta={outputs:exports.wjColorPickerMeta.outputs,changeEvents:{valueChanged:["value"]}},t=o=__decorate([core_1.Component({selector:exports.wjColorPickerMeta.selector,template:exports.wjColorPickerMeta.template,inputs:exports.wjColorPickerMeta.inputs,outputs:exports.wjColorPickerMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return o})}].concat(exports.wjColorPickerMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcInput.ColorPicker);exports.WjColorPicker=WjColorPicker,exports.wjInputMaskMeta={selector:"wj-input-mask",template:"",inputs:["asyncBindings","wjModelProperty","isDisabled","mask","isRequired","isReadOnly","promptChar","placeholder","inputType","rawValue","value"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","valueChangedNg: valueChanged","rawValueChangePC: rawValueChange","valueChangePC: valueChange"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjInputMask=function(e){function t(t,o,n){var r=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,o))||this;r.isInitialized=!1,r.wjModelProperty="value";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,t,o,n);return r.created(),r}var o;return __extends(t,e),o=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,o,n,r){var a=this;void 0===r&&(r=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[o]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(a,t,o,n,r)}):e.prototype.addEventListener.call(this,t,o,n,r)},t.meta={outputs:exports.wjInputMaskMeta.outputs,changeEvents:{valueChanged:["rawValue","value"]}},t=o=__decorate([core_1.Component({selector:exports.wjInputMaskMeta.selector,template:exports.wjInputMaskMeta.template,inputs:exports.wjInputMaskMeta.inputs,outputs:exports.wjInputMaskMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return o})}].concat(exports.wjInputMaskMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcInput.InputMask);exports.WjInputMask=WjInputMask,exports.wjInputColorMeta={selector:"wj-input-color",template:"",inputs:["asyncBindings","wjModelProperty","isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","showAlphaChannel","value","text"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","isDroppedDownChangingNg: isDroppedDownChanging","isDroppedDownChangedNg: isDroppedDownChanged","isDroppedDownChangePC: isDroppedDownChange","textChangedNg: textChanged","textChangePC: textChange","valueChangedNg: valueChanged","valueChangePC: valueChange"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjInputColor=function(e){function t(t,o,n){var r=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,o))||this;r.isInitialized=!1,r.wjModelProperty="value";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,t,o,n);return r.created(),r}var o;return __extends(t,e),o=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,o,n,r){var a=this;void 0===r&&(r=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[o]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(a,t,o,n,r)}):e.prototype.addEventListener.call(this,t,o,n,r)},t.meta={outputs:exports.wjInputColorMeta.outputs,changeEvents:{isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],valueChanged:["value"]}},t=o=__decorate([core_1.Component({selector:exports.wjInputColorMeta.selector,template:exports.wjInputColorMeta.template,inputs:exports.wjInputColorMeta.inputs,outputs:exports.wjInputColorMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return o})}].concat(exports.wjInputColorMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcInput.InputColor);exports.WjInputColor=WjInputColor,exports.wjMultiSelectMeta={selector:"wj-multi-select",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","displayMemberPath","selectedValuePath","headerPath","isContentHtml","isEditable","maxDropDownHeight","maxDropDownWidth","itemFormatter","showGroups","trimText","checkedMemberPath","maxHeaderItems","headerFormat","headerFormatter","showSelectAllCheckbox","selectAllLabel","itemsSource","checkedItems","text","selectedIndex","selectedItem","selectedValue"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","isDroppedDownChangingNg: isDroppedDownChanging","isDroppedDownChangedNg: isDroppedDownChanged","isDroppedDownChangePC: isDroppedDownChange","textChangedNg: textChanged","textChangePC: textChange","itemsSourceChangedNg: itemsSourceChanged","formatItemNg: formatItem","selectedIndexChangedNg: selectedIndexChanged","selectedIndexChangePC: selectedIndexChange","selectedItemChangePC: selectedItemChange","selectedValueChangePC: selectedValueChange","checkedItemsChangedNg: checkedItemsChanged","checkedItemsChangePC: checkedItemsChange"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjMultiSelect=function(e){function t(t,o,n){var r=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,o))||this;r.isInitialized=!1,r.wjModelProperty="checkedItems";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,t,o,n);return r.created(),r}var o;return __extends(t,e),o=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,o,n,r){var a=this;void 0===r&&(r=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[o]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(a,t,o,n,r)}):e.prototype.addEventListener.call(this,t,o,n,r)},t.meta={outputs:exports.wjMultiSelectMeta.outputs,changeEvents:{isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"],checkedItemsChanged:["checkedItems"]}},t=o=__decorate([core_1.Component({selector:exports.wjMultiSelectMeta.selector,template:exports.wjMultiSelectMeta.template,inputs:exports.wjMultiSelectMeta.inputs,outputs:exports.wjMultiSelectMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return o})}].concat(exports.wjMultiSelectMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcInput.MultiSelect);exports.WjMultiSelect=WjMultiSelect,exports.wjMultiAutoCompleteMeta={selector:"wj-multi-auto-complete",template:"",inputs:["asyncBindings","wjModelProperty","isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","displayMemberPath","selectedValuePath","headerPath","isContentHtml","isEditable","maxDropDownHeight","maxDropDownWidth","itemFormatter","showGroups","trimText","delay","maxItems","minLength","cssMatch","itemsSourceFunction","searchMemberPath","maxSelectedItems","selectedItems","itemsSource","selectedMemberPath","text","selectedIndex","selectedItem","selectedValue"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","isDroppedDownChangingNg: isDroppedDownChanging","isDroppedDownChangedNg: isDroppedDownChanged","isDroppedDownChangePC: isDroppedDownChange","textChangedNg: textChanged","textChangePC: textChange","itemsSourceChangedNg: itemsSourceChanged","formatItemNg: formatItem","selectedIndexChangedNg: selectedIndexChanged","selectedIndexChangePC: selectedIndexChange","selectedItemChangePC: selectedItemChange","selectedValueChangePC: selectedValueChange","selectedItemsChangedNg: selectedItemsChanged","selectedItemsChangePC: selectedItemsChange"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjMultiAutoComplete=function(e){function t(t,o,n){var r=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,o))||this;r.isInitialized=!1,r.wjModelProperty="selectedItems";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,t,o,n);return r.created(),r}var o;return __extends(t,e),o=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,o,n,r){var a=this;void 0===r&&(r=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[o]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(a,t,o,n,r)}):e.prototype.addEventListener.call(this,t,o,n,r)},t.meta={outputs:exports.wjMultiAutoCompleteMeta.outputs,changeEvents:{isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"],selectedItemsChanged:["selectedItems"]}},t=o=__decorate([core_1.Component({selector:exports.wjMultiAutoCompleteMeta.selector,template:exports.wjMultiAutoCompleteMeta.template,inputs:exports.wjMultiAutoCompleteMeta.inputs,outputs:exports.wjMultiAutoCompleteMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return o})}].concat(exports.wjMultiAutoCompleteMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcInput.MultiAutoComplete);exports.WjMultiAutoComplete=WjMultiAutoComplete,exports.wjInputNumberMeta={selector:"wj-input-number",template:"",inputs:["asyncBindings","wjModelProperty","isDisabled","showSpinner","repeatButtons","max","min","step","isRequired","placeholder","inputType","format","isReadOnly","value","text"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","valueChangedNg: valueChanged","valueChangePC: valueChange","textChangedNg: textChanged","textChangePC: textChange"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjInputNumber=function(e){function t(t,o,n){var r=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,o))||this;r.isInitialized=!1,r.wjModelProperty="value";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,t,o,n);return r.created(),r}var o;return __extends(t,e),o=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,o,n,r){var a=this;void 0===r&&(r=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[o]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(a,t,o,n,r)}):e.prototype.addEventListener.call(this,t,o,n,r)},t.meta={outputs:exports.wjInputNumberMeta.outputs,changeEvents:{valueChanged:["value"],textChanged:["text"]}},t=o=__decorate([core_1.Component({selector:exports.wjInputNumberMeta.selector,template:exports.wjInputNumberMeta.template,inputs:exports.wjInputNumberMeta.inputs,outputs:exports.wjInputNumberMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return o})}].concat(exports.wjInputNumberMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcInput.InputNumber);exports.WjInputNumber=WjInputNumber,exports.wjInputDateMeta={selector:"wj-input-date",template:"",inputs:["asyncBindings","wjModelProperty","isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","selectionMode","format","mask","max","min","inputType","repeatButtons","showYearPicker","itemValidator","itemFormatter","text","value"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","isDroppedDownChangingNg: isDroppedDownChanging","isDroppedDownChangedNg: isDroppedDownChanged","isDroppedDownChangePC: isDroppedDownChange","textChangedNg: textChanged","textChangePC: textChange","valueChangedNg: valueChanged","valueChangePC: valueChange"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjInputDate=function(e){function t(t,o,n){var r=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,o))||this;r.isInitialized=!1,r.wjModelProperty="value";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,t,o,n);return r.created(),r}var o;return __extends(t,e),o=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,o,n,r){var a=this;void 0===r&&(r=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[o]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(a,t,o,n,r)}):e.prototype.addEventListener.call(this,t,o,n,r)},t.meta={outputs:exports.wjInputDateMeta.outputs,changeEvents:{isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],valueChanged:["value"]}},t=o=__decorate([core_1.Component({selector:exports.wjInputDateMeta.selector,template:exports.wjInputDateMeta.template,inputs:exports.wjInputDateMeta.inputs,outputs:exports.wjInputDateMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return o})}].concat(exports.wjInputDateMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcInput.InputDate);exports.WjInputDate=WjInputDate,exports.wjInputTimeMeta={selector:"wj-input-time",template:"",inputs:["asyncBindings","wjModelProperty","isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","displayMemberPath","selectedValuePath","headerPath","isContentHtml","isEditable","maxDropDownHeight","maxDropDownWidth","itemFormatter","showGroups","trimText","max","min","step","format","mask","inputType","itemsSource","text","selectedIndex","selectedItem","selectedValue","value"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","isDroppedDownChangingNg: isDroppedDownChanging","isDroppedDownChangedNg: isDroppedDownChanged","isDroppedDownChangePC: isDroppedDownChange","textChangedNg: textChanged","textChangePC: textChange","itemsSourceChangedNg: itemsSourceChanged","formatItemNg: formatItem","selectedIndexChangedNg: selectedIndexChanged","selectedIndexChangePC: selectedIndexChange","selectedItemChangePC: selectedItemChange","selectedValueChangePC: selectedValueChange","valueChangedNg: valueChanged","valueChangePC: valueChange"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjInputTime=function(e){function t(t,o,n){var r=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,o))||this;r.isInitialized=!1,r.wjModelProperty="value";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,t,o,n);return r.created(),r}var o;return __extends(t,e),o=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,o,n,r){var a=this;void 0===r&&(r=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[o]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(a,t,o,n,r)}):e.prototype.addEventListener.call(this,t,o,n,r)},t.meta={outputs:exports.wjInputTimeMeta.outputs,changeEvents:{isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"],valueChanged:["value"]}},t=o=__decorate([core_1.Component({selector:exports.wjInputTimeMeta.selector,template:exports.wjInputTimeMeta.template,inputs:exports.wjInputTimeMeta.inputs,outputs:exports.wjInputTimeMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return o})}].concat(exports.wjInputTimeMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcInput.InputTime);exports.WjInputTime=WjInputTime,exports.wjInputDateTimeMeta={selector:"wj-input-date-time",template:"",inputs:["asyncBindings","wjModelProperty","isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","selectionMode","format","mask","max","min","inputType","repeatButtons","showYearPicker","itemValidator","itemFormatter","timeMax","timeMin","timeStep","timeFormat","text","value"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","isDroppedDownChangingNg: isDroppedDownChanging","isDroppedDownChangedNg: isDroppedDownChanged","isDroppedDownChangePC: isDroppedDownChange","textChangedNg: textChanged","textChangePC: textChange","valueChangedNg: valueChanged","valueChangePC: valueChange"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjInputDateTime=function(e){function t(t,o,n){var r=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,o))||this;r.isInitialized=!1,r.wjModelProperty="value";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,t,o,n);return r.created(),r}var o;return __extends(t,e),o=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,o,n,r){var a=this;void 0===r&&(r=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[o]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(a,t,o,n,r)}):e.prototype.addEventListener.call(this,t,o,n,r)},t.meta={outputs:exports.wjInputDateTimeMeta.outputs,changeEvents:{isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],valueChanged:["value"]}},t=o=__decorate([core_1.Component({selector:exports.wjInputDateTimeMeta.selector,template:exports.wjInputDateTimeMeta.template,inputs:exports.wjInputDateTimeMeta.inputs,outputs:exports.wjInputDateTimeMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return o})}].concat(exports.wjInputDateTimeMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcInput.InputDateTime);exports.WjInputDateTime=WjInputDateTime,exports.wjMenuMeta={selector:"wj-menu",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","isDroppedDown","showDropDownButton","autoExpandSelection","placeholder","dropDownCssClass","isAnimated","isReadOnly","isRequired","inputType","displayMemberPath","selectedValuePath","headerPath","isContentHtml","isEditable","maxDropDownHeight","maxDropDownWidth","itemFormatter","showGroups","trimText","header","commandParameterPath","commandPath","subItemsPath","openOnHover","closeOnLeave","isButton","itemsSource","text","selectedIndex","selectedItem","selectedValue","value"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","isDroppedDownChangingNg: isDroppedDownChanging","isDroppedDownChangedNg: isDroppedDownChanged","isDroppedDownChangePC: isDroppedDownChange","textChangedNg: textChanged","textChangePC: textChange","itemsSourceChangedNg: itemsSourceChanged","formatItemNg: formatItem","selectedIndexChangedNg: selectedIndexChanged","selectedIndexChangePC: selectedIndexChange","selectedItemChangePC: selectedItemChange","selectedValueChangePC: selectedValueChange","itemClickedNg: itemClicked","valueChangePC: valueChange"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjMenu=function(e){function t(t,o,n){var r=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,o))||this;r.isInitialized=!1,r.wjModelProperty="selectedValue";r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,t,o,n);return r.itemsSource=new wjcCore.ObservableArray,r.selectedIndex=0,r.created(),r}var o;return __extends(t,e),o=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit(),this._attachToControl(),this._updateHeader()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy(),this.listBox.formatItem.removeHandler(this._fmtItem,this),this.listBox.loadingItems.removeHandler(this._loadingItems,this)},t.prototype.addEventListener=function(t,o,n,r){var a=this;void 0===r&&(r=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[o]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(a,t,o,n,r)}):e.prototype.addEventListener.call(this,t,o,n,r)},Object.defineProperty(t.prototype,"value",{get:function(){return this._value},set:function(e){this._value=e,null!=e&&(this.selectedValue=e,this._updateHeader())},enumerable:!0,configurable:!0}),t.prototype.ngOnChanges=function(e){var t=e.header;t&&(this._definedHeader=t.currentValue,this._updateHeader())},t.prototype.ngAfterContentInit=function(){this.value=this.value},t.prototype.onItemClicked=function(t){this.value=this.selectedValue,e.prototype.onItemClicked.call(this,t)},t.prototype.refresh=function(t){void 0===t&&(t=!0),e.prototype.refresh.call(this,t),this._updateHeader()},t.prototype._attachToControl=function(){this.listBox.formatItem.addHandler(this._fmtItem,this),this.listBox.loadingItems.addHandler(this._loadingItems,this),this.invalidate()},t.prototype._loadingItems=function(e){for(var t=e.hostElement.getElementsByClassName("wj-listbox-item"),o=t.length-1;o>=0;o--){t[o].textContent=""}},t.prototype._fmtItem=function(e,t){if(t.data instanceof WjMenuItem){var o=t.item;o.textContent="";var n=t.data,r=n.contentRoot;r&&(o.appendChild(r),n.added(o))}},t.prototype._updateHeader=function(){this.header=this._definedHeader||"";var e=this.selectedItem;if(null!=this.value&&e&&this.displayMemberPath){var t=null;if(e instanceof WjMenuItem){var o=e.contentRoot;t=o?o.innerHTML:e[this.displayMemberPath]}null!=t&&(this.header+=": <b>"+t+"</b>")}},t.meta={outputs:exports.wjMenuMeta.outputs,changeEvents:{isDroppedDownChanged:["isDroppedDown"],textChanged:["text"],selectedIndexChanged:["selectedIndex","selectedItem","selectedValue"],itemClicked:["value"]}},t=o=__decorate([core_1.Component({selector:exports.wjMenuMeta.selector,template:exports.wjMenuMeta.template,inputs:exports.wjMenuMeta.inputs,outputs:exports.wjMenuMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return o})}].concat(exports.wjMenuMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcInput.Menu);exports.WjMenu=WjMenu,exports.wjMenuItemMeta={selector:"wj-menu-item",template:"<div *wjMenuItemTemplateDir><ng-content></ng-content></div>",inputs:["wjProperty","value","cmd","cmdParam"],outputs:["initialized"],providers:[]};var WjMenuItem=function(){function e(e,t,o,n,r){this.viewContainerRef=n,this.domRenderer=r,this.isInitialized=!1,this.wjProperty="itemsSource";var a=this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,o);this._ownerMenu=a.parentBehavior.directive,this.created()}var t;return t=e,e.prototype.created=function(){},e.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit();var e=this._ownerMenu;1==e.itemsSource.length&&e.selectedIndex<0&&(e.selectedIndex=0),e.displayMemberPath||(e.displayMemberPath="header"),e.selectedValuePath||(e.selectedValuePath="value"),e.commandPath||(e.commandPath="cmd"),e.commandParameterPath||(e.commandParameterPath="cmdParam")},e.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},e.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},e.prototype.added=function(e){},e.meta={outputs:exports.wjMenuItemMeta.outputs,siblingId:"menuItemDir"},e=t=__decorate([core_1.Component({selector:exports.wjMenuItemMeta.selector,template:exports.wjMenuItemMeta.template,inputs:exports.wjMenuItemMeta.inputs,outputs:exports.wjMenuItemMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return t})}].concat(exports.wjMenuItemMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional()),__param(3,core_1.Inject(core_1.ViewContainerRef)),__param(4,core_1.Inject(core_1.Renderer))],e)}();exports.WjMenuItem=WjMenuItem;var WjMenuItemTemplateDir=function(){function e(e,t,o,n,r,a,i){this.viewContainerRef=e,this.templateRef=t,this.elRef=o,this.domRenderer=r,this.ownerItem=a||i,this.ownerItem.templateDir=this}return e.prototype.ngAfterContentInit=function(){var e=this;setTimeout(function(){var t=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.instantiateTemplate(null,e.viewContainerRef,e.templateRef,e.domRenderer,!0).rootElement;e.contentRoot=t,e.ownerItem.contentRoot=t,e.ownerItem._ownerMenu.listBox.loadList(),e.ownerItem._ownerMenu.invalidate()},0)},e=__decorate([core_1.Directive({selector:"[wjMenuItemTemplateDir]",inputs:["wjMenuItemTemplateDir"]}),__param(0,core_1.Inject(core_1.ViewContainerRef)),__param(1,core_1.Inject(core_1.TemplateRef)),__param(1,core_1.Optional()),__param(2,core_1.Inject(core_1.ElementRef)),__param(3,core_1.Inject(core_1.Injector)),__param(4,core_1.Inject(core_1.Renderer)),__param(5,core_1.Inject(WjMenuItem)),__param(5,core_1.Optional()),__param(6,core_1.Inject(core_1.forwardRef(function(){return WjMenuSeparator}))),__param(6,core_1.Optional())],e)}();exports.WjMenuItemTemplateDir=WjMenuItemTemplateDir,exports.wjMenuSeparatorMeta={selector:"wj-menu-separator",template:'<div *wjMenuItemTemplateDir class="wj-state-disabled" style="width:100%;height:1px;background-color:lightgray"></div>',inputs:["wjProperty"],outputs:["initialized"],providers:[]};var WjMenuSeparator=function(e){function t(t,o,n,r,a){var i=e.call(this,t,o,n,r,a)||this;return i.created(),i}var o;return __extends(t,e),o=t,t.prototype.added=function(e){wjcCore.addClass(e,"wj-state-disabled")},t=o=__decorate([core_1.Component({selector:exports.wjMenuSeparatorMeta.selector,template:exports.wjMenuSeparatorMeta.template,inputs:exports.wjMenuSeparatorMeta.inputs,outputs:exports.wjMenuSeparatorMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return o})}].concat(exports.wjMenuSeparatorMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional()),__param(3,core_1.Inject(core_1.ViewContainerRef)),__param(4,core_1.Inject(core_1.Renderer))],t)}(WjMenuItem);exports.WjMenuSeparator=WjMenuSeparator,exports.wjItemTemplateMeta={selector:"[wjItemTemplate]",inputs:["wjItemTemplate"],outputs:["initialized"],exportAs:"wjItemTemplate",providers:[]};var WjItemTemplate=function(){function e(e,o,n,r,a,i,s){this.viewContainerRef=r,this.templateRef=a,this.domRenderer=i,this.isInitialized=!1;var p=this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,o,n);this.ownerControl=p.parentBehavior.directive,this.listBox=t._getListBox(this.ownerControl),this._cdRef=s,this.created()}var t;return t=e,e.prototype.created=function(){},e.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit(),this._attachToControl()},e.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},e.prototype.ngOnDestroy=function(){var e=this.ownerControl,t=this.listBox;t&&(t.formatItem.removeHandler(this._fmtItem,this),t.loadingItems.removeHandler(this._loadingItems,this)),e&&e.invalidate()},e.prototype._attachToControl=function(){this.listBox.formatItem.addHandler(this._fmtItem,this),this.listBox.loadingItems.addHandler(this._loadingItems,this),this.ownerControl.invalidate()},e.prototype._loadingItems=function(e){this.viewContainerRef.clear()},e.prototype._fmtItem=function(e,t){var o=t.item;o.textContent="";var n=this._instantiateTemplate(o);n.context.control=e,n.context.item=t.data,n.context.itemIndex=t.index,t.index===this.listBox.collectionView.items.length-1&&this._cdRef.detectChanges()},e.prototype._instantiateTemplate=function(e){return wijmo_angular2_directiveBase_1.WjDirectiveBehavior.instantiateTemplate(e,this.viewContainerRef,this.templateRef,this.domRenderer).viewRef},e._getListBox=function(e){return e?e instanceof wjcInput.ListBox?e:e.listBox:null},e.meta={outputs:exports.wjItemTemplateMeta.outputs,parentRefProperty:"owner"},e=t=__decorate([core_1.Directive({selector:exports.wjItemTemplateMeta.selector,inputs:exports.wjItemTemplateMeta.inputs,outputs:exports.wjItemTemplateMeta.outputs,exportAs:exports.wjItemTemplateMeta.exportAs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return t})}].concat(exports.wjItemTemplateMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional()),__param(3,core_1.Inject(core_1.ViewContainerRef)),__param(4,core_1.Inject(core_1.TemplateRef)),__param(4,core_1.Optional()),__param(5,core_1.Inject(core_1.Renderer)),__param(6,core_1.Inject(core_1.ChangeDetectorRef))],e)}();exports.WjItemTemplate=WjItemTemplate,exports.wjPopupMeta={selector:"wj-popup",template:"<div><ng-content></ng-content></div>",inputs:["wjModelProperty","isDisabled","owner","showTrigger","hideTrigger","fadeIn","fadeOut","isDraggable","dialogResultEnter","modal","removeOnHide"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","refreshingNg: refreshing","refreshedNg: refreshed","showingNg: showing","shownNg: shown","hidingNg: hiding","hiddenNg: hidden"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjPopup=function(e){function t(t,o,n){var r=e.call(this,wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(t,o))||this;r.isInitialized=!1;r._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(r,t,o,n);return r.created(),r}var o;return __extends(t,e),o=t,t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,o,n,r){var a=this;void 0===r&&(r=!1);var i=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[o]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(a,t,o,n,r)}):e.prototype.addEventListener.call(this,t,o,n,r)},t.prototype.ngOnChanges=function(e){e.owner&&null==this.modal&&(this.modal=!this.owner)},t.prototype.dispose=function(){this.isVisible&&(this.hiding.removeAllHandlers(),this.fadeOut=!1,this.hide()),e.prototype.dispose.call(this)},t.meta={outputs:exports.wjPopupMeta.outputs},t=o=__decorate([core_1.Component({selector:exports.wjPopupMeta.selector,template:exports.wjPopupMeta.template,inputs:exports.wjPopupMeta.inputs,outputs:exports.wjPopupMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return o})}].concat(exports.wjPopupMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],t)}(wjcInput.Popup);exports.WjPopup=WjPopup;var WjContextMenu=function(){function e(e){this.elRef=e}return e.prototype.onContextMenu=function(e){var t=this.wjContextMenu,o=t.dropDown;t&&o&&!wjcCore.closest(e.target,"[disabled]")&&(e.preventDefault(),t.owner=this.elRef.nativeElement,t.show(e))},e=__decorate([core_1.Directive({selector:"[wjContextMenu]",inputs:["wjContextMenu"],exportAs:"wjContextMenu",host:{"(contextmenu)":"onContextMenu($event)"}}),__param(0,core_1.Inject(core_1.ElementRef))],e)}();exports.WjContextMenu=WjContextMenu,exports.wjCollectionViewNavigatorMeta={selector:"wj-collection-view-navigator",template:'<div class="wj-control wj-content wj-pager">\n                <div class="wj-input-group">\n                    <span class="wj-input-group-btn" >\n                        <button class="wj-btn wj-btn-default" type="button"\n                           (click)="cv.moveCurrentToFirst()"\n                           [disabled]="!cv || cv?.currentPosition <= 0">\n                            <span class="wj-glyph-left" style="margin-right: -4px;"></span>\n                            <span class="wj-glyph-left"></span>\n                         </button>\n                    </span>\n                    <span class="wj-input-group-btn" >\n                       <button class="wj-btn wj-btn-default" type="button"\n                           (click)="cv.moveCurrentToPrevious()"\n                           [disabled]="!cv || cv?.currentPosition <= 0">\n                            <span class="wj-glyph-left"></span>\n                       </button>\n                    </span>\n                    <input type="text" class="wj-form-control" \n                           value="{{cv?.currentPosition + 1 | number}} / {{cv?.itemCount | number}}" \n                           disabled />\n                    <span class="wj-input-group-btn" >\n                        <button class="wj-btn wj-btn-default" type="button"\n                           (click)="cv.moveCurrentToNext()"\n                           [disabled]="!cv || cv?.currentPosition >= cv?.itemCount - 1">\n                            <span class="wj-glyph-right"></span>\n                        </button>\n                    </span>\n                    <span class="wj-input-group-btn" >\n                        <button class="wj-btn wj-btn-default" type="button"\n                           (click)="cv.moveCurrentToLast()"\n                           [disabled]="!cv || cv?.currentPosition >= cv?.itemCount - 1">\n                            <span class="wj-glyph-right"></span>\n                            <span class="wj-glyph-right" style="margin-left: -4px;"></span>\n                        </button>\n                    </span>\n                </div>\n            </div>',inputs:["wjModelProperty","cv"],outputs:["initialized"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjCollectionViewNavigator=function(){function e(e,t,o){this.isInitialized=!1;this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,o);this.created()}var t;return t=e,e.prototype.created=function(){},e.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},e.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},e.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},e.meta={outputs:exports.wjCollectionViewNavigatorMeta.outputs},e=t=__decorate([core_1.Component({selector:exports.wjCollectionViewNavigatorMeta.selector,template:exports.wjCollectionViewNavigatorMeta.template,inputs:exports.wjCollectionViewNavigatorMeta.inputs,outputs:exports.wjCollectionViewNavigatorMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return t})}].concat(exports.wjCollectionViewNavigatorMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],e)}();exports.WjCollectionViewNavigator=WjCollectionViewNavigator,exports.wjCollectionViewPagerMeta={selector:"wj-collection-view-pager",template:'<div class="wj-control wj-content wj-pager" >\n                <div class="wj-input-group">\n                    <span class="wj-input-group-btn" >\n                        <button class="wj-btn wj-btn-default" type="button"\n                            (click)="cv.moveToFirstPage()"\n                            [disabled]="!cv || cv?.pageIndex <= 0">\n                            <span class="wj-glyph-left" style="margin-right: -4px;"></span>\n                            <span class="wj-glyph-left"></span>\n                        </button>\n                    </span>\n                    <span class="wj-input-group-btn" >\n                    <button class="wj-btn wj-btn-default" type="button"\n                            (click)="cv.moveToPreviousPage()"\n                            [disabled]="!cv || cv?.pageIndex <= 0">\n                            <span class="wj-glyph-left"></span>\n                        </button>\n                    </span>\n                    <input type="text" class="wj-form-control" \n                           value="{{cv?.pageIndex + 1 | number}} / {{cv?.pageCount | number}}" \n                           disabled />\n                    <span class="wj-input-group-btn" >\n                        <button class="wj-btn wj-btn-default" type="button"\n                            (click)="cv.moveToNextPage()"\n                            [disabled]="!cv || cv?.pageIndex >= cv?.pageCount - 1">\n                            <span class="wj-glyph-right"></span>\n                        </button>\n                    </span>\n                    <span class="wj-input-group-btn" >\n                        <button class="wj-btn wj-btn-default" type="button"\n                            (click)="cv.moveToLastPage()"\n                            [disabled]="!cv || cv?.pageIndex >= cv?.pageCount - 1">\n                            <span class="wj-glyph-right"></span>\n                            <span class="wj-glyph-right" style="margin-left: -4px;"></span>\n                        </button>\n                    </span>\n                </div>\n            </div>',inputs:["wjModelProperty","cv"],outputs:["initialized"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var WjCollectionViewPager=function(){function e(e,t,o){this.isInitialized=!1;this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,o);this.created()}var t;return t=e,e.prototype.created=function(){},e.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},e.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},e.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},e.meta={outputs:exports.wjCollectionViewPagerMeta.outputs},e=t=__decorate([core_1.Component({selector:exports.wjCollectionViewPagerMeta.selector,template:exports.wjCollectionViewPagerMeta.template,inputs:exports.wjCollectionViewPagerMeta.inputs,outputs:exports.wjCollectionViewPagerMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_1.forwardRef(function(){return t})}].concat(exports.wjCollectionViewPagerMeta.providers)}),__param(0,core_1.Inject(core_1.ElementRef)),__param(1,core_1.Inject(core_1.Injector)),__param(2,core_1.Inject("WjComponent")),__param(2,core_1.SkipSelf()),__param(2,core_1.Optional())],e)}();exports.WjCollectionViewPager=WjCollectionViewPager;var moduleExports=[WjListBox,WjComboBox,WjAutoComplete,WjCalendar,WjColorPicker,WjInputMask,WjInputColor,WjMultiSelect,WjMultiAutoComplete,WjInputNumber,WjInputDate,WjInputTime,WjInputDateTime,WjMenu,WjMenuItem,WjMenuSeparator,WjItemTemplate,WjPopup,WjContextMenu,WjCollectionViewNavigator,WjCollectionViewPager],WjInputModule=function(){function e(){}return e=__decorate([core_1.NgModule({imports:[wijmo_angular2_directiveBase_1.WjDirectiveBaseModule,common_1.CommonModule],declarations:moduleExports.concat([WjMenuItemTemplateDir]),exports:moduleExports.slice()})],e)}();exports.WjInputModule=WjInputModule;

/***/ }),

/***/ "./node_modules/wijmo/wijmo.chart.animation.js":
/*!*****************************************************!*\
  !*** ./node_modules/wijmo/wijmo.chart.animation.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
﻿/*!
    *
    * Wijmo Library 5.20191.615
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */

var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var Easing,AnimationMode,wijmo_1=__webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js"),wijmo_chart_1=__webpack_require__(/*! wijmo/wijmo.chart */ "./node_modules/wijmo/wijmo.chart.js"),selfModule=__webpack_require__(/*! wijmo/wijmo.chart.animation */ "./node_modules/wijmo/wijmo.chart.animation.js");function softFinancial(){return wijmo_1._getModule("wijmo.chart.finance")}function softRadar(){return wijmo_1._getModule("wijmo.chart.radar")}exports.softFinancial=softFinancial,exports.softRadar=softRadar,function(t){t[t.Linear=0]="Linear",t[t.Swing=1]="Swing",t[t.EaseInQuad=2]="EaseInQuad",t[t.EaseOutQuad=3]="EaseOutQuad",t[t.EaseInOutQuad=4]="EaseInOutQuad",t[t.EaseInCubic=5]="EaseInCubic",t[t.EaseOutCubic=6]="EaseOutCubic",t[t.EaseInOutCubic=7]="EaseInOutCubic",t[t.EaseInQuart=8]="EaseInQuart",t[t.EaseOutQuart=9]="EaseOutQuart",t[t.EaseInOutQuart=10]="EaseInOutQuart",t[t.EaseInQuint=11]="EaseInQuint",t[t.EaseOutQuint=12]="EaseOutQuint",t[t.EaseInOutQuint=13]="EaseInOutQuint",t[t.EaseInSine=14]="EaseInSine",t[t.EaseOutSine=15]="EaseOutSine",t[t.EaseInOutSine=16]="EaseInOutSine",t[t.EaseInExpo=17]="EaseInExpo",t[t.EaseOutExpo=18]="EaseOutExpo",t[t.EaseInOutExpo=19]="EaseInOutExpo",t[t.EaseInCirc=20]="EaseInCirc",t[t.EaseOutCirc=21]="EaseOutCirc",t[t.EaseInOutCirc=22]="EaseInOutCirc",t[t.EaseInBack=23]="EaseInBack",t[t.EaseOutBack=24]="EaseOutBack",t[t.EaseInOutBack=25]="EaseInOutBack",t[t.EaseInBounce=26]="EaseInBounce",t[t.EaseOutBounce=27]="EaseOutBounce",t[t.EaseInOutBounce=28]="EaseInOutBounce",t[t.EaseInElastic=29]="EaseInElastic",t[t.EaseOutElastic=30]="EaseOutElastic",t[t.EaseInOutElastic=31]="EaseInOutElastic"}(Easing=exports.Easing||(exports.Easing={})),function(t){t[t.All=0]="All",t[t.Point=1]="Point",t[t.Series=2]="Series"}(AnimationMode=exports.AnimationMode||(exports.AnimationMode={}));var ChartAnimation=function(){function t(t,e){this._play=!0;var i=this,n=t.hostElement,a=new wijmo_1.Size(n.offsetWidth,n.offsetHeight);i._chart=t,i._updateEventArgs=[],t instanceof wijmo_chart_1.FlexPie?i._animation=new FlexPieAnimation(t,i._updateEventArgs):(softRadar()&&t instanceof softRadar().FlexRadar?i._animation=new FlexRadarAnimation(t,i._updateEventArgs):i._animation=new FlexChartAnimation(t,i._updateEventArgs),i._chartType=t.chartType),e&&i._initOptions(e),t.beginUpdate(),window.setTimeout(function(){t.rendered.addHandler(i._playAnimation,i),t.endUpdate()},0),i._setCV(t.collectionView),window.addEventListener("resize",function(t){var e=new wijmo_1.Size(n.offsetWidth,n.offsetHeight);a.equals(e)||(i._play=!1,a=e)})}return t.prototype._initOptions=function(t){t.duration&&(this.duration=t.duration),t.easing&&(this.easing=t.easing),t.animationMode&&(this.animationMode=t.animationMode)},t.prototype._setCV=function(t){this._cv=t,this._animation._clearState()},Object.defineProperty(t.prototype,"animationMode",{get:function(){return this._animation.animationMode},set:function(t){(t=wijmo_1.asEnum(t,AnimationMode))!=this.animationMode&&(this._animation.animationMode=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"easing",{get:function(){return this._animation.easing},set:function(t){(t=wijmo_1.asEnum(t,Easing))!=this.easing&&(this._animation.easing=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"duration",{get:function(){return this._animation.duration},set:function(t){(t=wijmo_1.asNumber(t))!=this.duration&&(this._animation.duration=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"axisAnimation",{get:function(){return this._animation.axisAnimation},set:function(t){(t=wijmo_1.asBoolean(t))!=this.axisAnimation&&(this._animation.axisAnimation=t)},enumerable:!0,configurable:!0}),t.prototype._playAnimation=function(){var t=this._chart,e=t.chartType;this._cv!==t.collectionView&&this._setCV(t.collectionView),null!=this._chartType&&this._chartType!==e&&(this._chartType=e,this._animation._clearState()),this._play?this._animation.playAnimation():this._play=!0},t.prototype.animate=function(){var t=this._chart;if(t){var e=t.itemsSource;t.beginUpdate(),t.itemsSource=null,t.itemsSource=e,t.endUpdate()}},t}();exports.ChartAnimation=ChartAnimation;var FlexAnimation=function(){function t(t,e){this._axisAnimation=!0,this._chart=t,this._timers=[]}return Object.defineProperty(t.prototype,"animationMode",{get:function(){return this._animationMode||AnimationMode.All},set:function(t){(t=wijmo_1.asEnum(t,AnimationMode,!1))!==this._animationMode&&(this._clearState(),this._animationMode=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"easing",{get:function(){return null==this._easing?Easing.Swing:this._easing},set:function(t){t!==this._easing&&(this._easing=wijmo_1.asEnum(t,Easing,!1))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"duration",{get:function(){return this._duration||400},set:function(t){t!==this._duration&&(this._duration=wijmo_1.asNumber(t,!1,!0))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"axisAnimation",{get:function(){return!!this._axisAnimation},set:function(t){t!==this._axisAnimation&&(this._axisAnimation=wijmo_1.asBoolean(t,!1))},enumerable:!0,configurable:!0}),t.prototype.playAnimation=function(){},t.prototype._clearState=function(){this._previousState&&(this._previousState=null),this._currentState&&(this._currentState=null)},t.prototype._setInitState=function(t,e,i){var n=AnimationHelper.parseAttrs(e,i);AnimationHelper.setElementAttr(t,n,0)},t.prototype._getAnimation=function(t,e){return t[e]||(t[e]=[]),t[e]},t.prototype._toggleVisibility=function(t,e){e?AnimationHelper.playAnimation(t,{opacity:0},{opacity:1},null,Easing.Swing,100):t.setAttribute("opacity","0")},t.prototype._toggleDataLabelVisibility=function(t){var e=this._chart.hostElement,i=e&&e.querySelector(".wj-data-labels");i&&this._toggleVisibility(i,t)},t.prototype._playAnimation=function(t){var e,i=this,n=this,a=n.duration,o=n.easing,r=t.length;n._toggleDataLabelVisibility(!1),e=n._getDurationAndDelay(t.length,a),this._timers&&this._timers.length&&(this._timers.forEach(function(t){return window.clearInterval(t)}),this._timers.length=0),t.forEach(function(t,a){var s;t&&(s=window.setTimeout(function(){var s;t.forEach(function(t,l){if(t&&t.ele){if(a===r-1&&0===l){var c=t.done;t.done=function(){n._toggleDataLabelVisibility(!0),c&&c()}}wijmo_1.isArray(t.ele)?(s=AnimationHelper.playAnimations(t.ele,t.from,t.to,t.done,o,e.duration),i._timers=i._timers.concat.apply(s)):(s=AnimationHelper.playAnimation(t.ele,t.from,t.to,t.done,o,e.duration),i._timers.push(s))}})},e.delay*a),i._timers.push(s))})},t.prototype._getDurationAndDelay=function(t,e){var i={duration:e,delay:0};return t>1&&(this._previousState?(i.duration=e/t,i.delay=e/t):(i.duration=.5*e,i.delay=.5*e/(t-1))),i},t}(),FlexPieAnimation=function(t){function e(e,i){var n=t.call(this,e,i)||this;return e.selectionChanged.addHandler(n._selectionChanged,n),n}return __extends(e,t),e.prototype._selectionChanged=function(){this._isSelectionChanged=!0},e.prototype._clearState=function(){t.prototype._clearState.call(this),this._isSelectionChanged=!1},e.prototype._getElementRotate=function(t){var e,i=t.getAttribute("transform");return i=i&&i.indexOf("rotate")>-1?(i=i.replace("rotate(","").replace(")","")).indexOf(",")>-1?i.split(",").map(function(t){return+t}):i.split(" ").map(function(t){return+t}):[0,(e=this._chart._areas[0].center).x,e.y]},e.prototype._getDurationAndDelay=function(t,e){var i={duration:e,delay:0};return this.animationMode===AnimationMode.Point&&t>1&&(i.duration=e/t,i.delay=e/t),i},e.prototype.playAnimation=function(){t.prototype.playAnimation.call(this);var e=[];this._playPieAnimation(e),e.length&&this._playAnimation(e)},e.prototype._playPieAnimation=function(t){var e=this._chart,i=!0;if(this._previousState=this._currentState,this._currentState={areas:e._areas,pels:e._pels,rotate:e._pels.length&&this._getElementRotate(e._pels[0].parentNode)},this._previousState&&(i=!1),this._isSelectionChanged)return e.isAnimated||this._playSelectPieAnimation(t),void(this._isSelectionChanged=!1);i?this._playLoadPieAnimation(t):this._playUpdatePieAnimation(t)},e.prototype._playSelectPieAnimation=function(t){if(null!=this._previousState){var e,i,n,a=this._chart._pels[0].parentNode,o=this._previousState.rotate,r=this._getElementRotate(a),s=o[0],l=r[0];s!==l&&(s-l>180?r[0]+=360:l-s>180&&(o[0]+=360),e=this._getAnimation(t,0),i={rotate:o},n={rotate:r},this._setInitState(a,i,n),e.push({ele:a,from:i,to:n}))}},e.prototype._playUpdatePieAnimation=function(t){var e,i,n,a,o=this._chart,r=this._previousState,s=o._areas,l=o._pels,c=r.areas.length,u=s.length,h=Math.max(u,c),p=this._getAnimation(t,0),m=0;if(0!==u&&0!==c)for(this._playSelectPieAnimation(t),e=0;e<h;e++)i={},l[e]&&l[e].childNodes&&l[e].childNodes.length>0&&(e<u&&e<c&&(n=s[0],0===e&&(m=n.angle),1===c?l[e].childNodes[0].setAttribute("d",AnimationHelper.getPathDescOfPie(n.center.x,n.center.y,n.radius,m,2*Math.PI,n.innerRadius||0)):l[e].childNodes[0].setAttribute("d",r.pels[e].childNodes[0].getAttribute("d"))),e<u?(n=s[e],i.to={pie:[n.center.x,n.center.y,n.radius,n.angle,n.sweep,n.innerRadius||0]},i.ele=l[e].childNodes[0]):(n=s[0],a=r.pels[e],i.to={pie:[n.center.x,n.center.y,n.radius,m+2*Math.PI,0,n.innerRadius||0]},l[0].parentNode.appendChild(a),i.done=function(t){return function(){t.parentNode.removeChild(t)}}(a),i.ele=a.childNodes[0]),e<c?(n=r.areas[e],i.from={pie:[n.center.x,n.center.y,n.radius,n.angle,n.sweep,n.innerRadius||0]}):(l[e].childNodes[0].setAttribute("d",AnimationHelper.getPathDescOfPie(n.center.x,n.center.y,n.radius,2*Math.PI+m,0,n.innerRadius||0)),n=r.areas[0],i.from={pie:[n.center.x,n.center.y,n.radius,2*Math.PI+m,0,n.innerRadius||0]}),p.push(i))},e.prototype._playLoadPieAnimation=function(t){var e=this,i=e._chart,n=e.animationMode,a=i._areas;i._pels.forEach(function(i,o){var r,s=i.childNodes[0],l={},c={};s&&(n===AnimationMode.Point?(e._parsePathByAngle(a[o],l,c),r=e._getAnimation(t,o)):(e._parsePathByRadius(a[o],l,c),r=e._getAnimation(t,0)),e._setInitState(s,l,c),r.push({ele:s,from:l,to:c}))})},e.prototype._parsePathByRadius=function(t,e,i){var n,a,o=t.center.x,r=t.center.y,s=t.radius,l=t.angle,c=t.sweep;n=[o,r,0,l,c,0],a=[o,r,s,l,c,t.innerRadius||0],e.pie=n,i.pie=a},e.prototype._parsePathByAngle=function(t,e,i){var n,a,o=t.center.x,r=t.center.y,s=t.radius,l=t.angle,c=t.sweep,u=t.innerRadius;n=[o,r,s,l,0,u||0],a=[o,r,s,l,c,u||0],e.pie=n,e["stroke-width"]=0,i.pie=a,i["stroke-width"]=1},e}(FlexAnimation),FlexChartAnimation=function(t){function e(e,i){return t.call(this,e,i)||this}return __extends(e,t),e.prototype._clearState=function(){t.prototype._clearState.call(this);this._prevAxesStates&&(this._prevAxesStates=null),this._currAxesStates&&(this._currAxesStates=null)},e.prototype.playAnimation=function(){t.prototype.playAnimation.call(this);var e,i,n,a,o,r,s,l,c,u=!0,h=this._chart,p=softFinancial()&&h instanceof softFinancial().FinancialChart,m=h.series,_=m.length,d=[];for(this._previousState=this._currentState,this._previousXVal=this._currentXVal,this._currentState=[],this._addStart=0,this._removeStart=0,this._currentXVal=h._xlabels.slice(),this._previousState&&this._previousState.length&&(u=!1,o=(r=this._previousState).length,s=this._previousXVal,l=this._currentXVal,s.length>2&&l.length>2&&((e=l.indexOf(s[0]))>0&&e<l.length-2?l[e+1]===s[1]&&l[e+2]===s[2]&&(this._addStart=e):(e=s.indexOf(l[0]))>0&&e<s.length-2&&s[e+1]===l[1]&&s[e+2]===l[2]&&(this._removeStart=e))),e=0;e<_;e++)if(a=null!=(i=m[e])._getChartType()?i._getChartType():h._getChartType(),n=this._getChartType(a),this._currentState.push({seriesType:a,ele:i.hostElement}),p)this._playDefaultAnimation(d,e);else{if(c=r&&r[e],"Default"===n){this._playDefaultAnimation(d,e);continue}if(u||c&&c.seriesType!==a||c&&c.ele&&(""==c.ele.innerHTML||0===c.ele.childNodes.length))this._playLoadAnimation(d,e,n);else if(this._playUpdateAnimation(d,e,n,i,c&&c.ele||null),e===_-1&&e<o-1)for(e++;e<=o-1;e++)this._playUpdateAnimation(d,e,n,null,c.ele)}this._adjustAnimations(n,d),d.length&&this._playAnimation(d),this.axisAnimation&&!p&&this._playAxesAnimation()},e.prototype._playAxesAnimation=function(){var t,e,i,n=this._chart.axes,a=n.length;for(this._prevAxesStates=this._currAxesStates,this._currAxesStates=[],e=0;e<a;e++)(t=n[e]).hostElement&&this._currAxesStates.push({ele:t.hostElement,vals:t._vals,axis:t,maxValue:wijmo_1.isDate(t.actualMax)?t.actualMax.getTime():t.actualMax,minValue:wijmo_1.isDate(t.actualMin)?t.actualMin.getTime():t.actualMin});if(this._prevAxesStates)for(i=Math.max(this._prevAxesStates.length,this._currAxesStates.length),e=0;e<i;e++)this._playAxisAnimation(this._prevAxesStates[e],this._currAxesStates[e])},e.prototype._playAxisAnimation=function(t,e){var i,n=[],a=[];e&&e.maxValue-e.minValue&&(i=this._parseAxisState(e),this._convertAxisAnimation(n,i.major,e.axis,t.maxValue,t.minValue),this._convertAxisAnimation(n,i.minor,e.axis,t.maxValue,t.minValue)),t&&t.maxValue-t.minValue&&(i=this._parseAxisState(t),this._convertAxisAnimation(a,i.major,t.axis),this._convertAxisAnimation(a,i.minor,t.axis)),n&&a&&this._combineAxisAnimations(n,a),this._playCurrAxisAnimation(n),this._playPrevAxisAnimation(a)},e.prototype._combineAxisAnimations=function(t,e){var i,n,a=this,o=e.length;for(i=o-1;i>=0;i--)(n=e[i]).text&&t.some(function(t){if(t.text&&t.text===n.text)return a._combineAxisAnimation(t,n),e.splice(i,1),!0})},e.prototype._combineAxisAnimation=function(t,e){var i=this;["label","majorGrid","tick"].forEach(function(n){t[n]&&e[n]&&i._resetExistAxisAttrs(t[n],e[n])})},e.prototype._resetExistAxisAttrs=function(t,e){var i=t.ele,n=e.ele,a={},o={};["x","y","x1","x2","y1","y2"].forEach(function(t){var e=i.getAttribute(t),r=n.getAttribute(t);e!==r&&(a[t]=r,o[t]=e)}),t.calcPos=a,t.elePos=o},e.prototype._convertAxisAnimation=function(t,e,i,n,a){var o,r=this,s=i.hostElement,l=i.axisType==wijmo_chart_1.AxisType.Y;e.forEach(function(e,c){var u=i.convert(e.val,n,a);isNaN(u)||(o={},e.majorGrid&&(o.majorGrid=r._getAxisAnimationAttrs(e.majorGrid,s,u,l)),e.label&&(o.label=r._getAxisAnimationAttrs(e.label,s,u,l),o.text=e.label.innerHTML||e.label.textContent),e.tick&&(o.tick=r._getAxisAnimationAttrs(e.tick,s,u,l)),t.push(o))})},e.prototype._getAxisAnimationAttrs=function(t,e,i,n){var a,o,r;return a={ele:t,parent:e,elePos:{},calcPos:{}},"text"===t.nodeName?(o=n?"y":"x",r=Number(t.getAttribute(o)),a.elePos[o]=r,a.calcPos[o]=i):(o=n?"y1":"x1",r=Number(t.getAttribute(o)),n?(a.elePos={y1:r,y2:r},a.calcPos={y1:i,y2:i}):(a.elePos={x1:r,x2:r},a.calcPos={x1:i,x2:i})),a.elePos.opacity=1,a.calcPos.opacity=0,a},e.prototype._playCurrAxisAnimation=function(t){var e=this.duration;t&&0!==t.length&&t.forEach(function(t){["majorGrid","label","tick"].forEach(function(i){var n=t[i];if(n){n.parent;var a=n.ele,o=n.elePos,r=n.calcPos;AnimationHelper.playAnimation(a,r,o,null,Easing.Swing,e)}})})},e.prototype._playPrevAxisAnimation=function(t){var e=this.duration;t&&0!==t.length&&t.forEach(function(t){["majorGrid","label","tick"].forEach(function(i){var n=t[i];if(n){var a=n.parent,o=n.ele,r=n.elePos,s=n.calcPos;a.appendChild(o),AnimationHelper.playAnimation(o,r,s,function(){o.parentNode===a&&a.removeChild(o)},Easing.Swing,e)}})})},e.prototype._parseAxisState=function(t){if(null==t)return null;var e=t.vals,i=t.axis,n=i.axisType==wijmo_chart_1.AxisType.Y,a=t.ele.childNodes,o=0,r=e.major,s=e.minor,l=e.hasLbls,c=[],u=[];return r&&r.forEach(function(t,e){var r,s={},u=!!l[e];c.push(s),s.val=t,r=a[o],i.majorGrid&&wijmo_1.hasClass(r,wijmo_chart_1.FlexChart._CSS_GRIDLINE)&&(s.majorGrid=r,r=a[++o]),n?(u&&r&&i.majorTickMarks!==wijmo_chart_1.TickMark.None&&wijmo_1.hasClass(r,wijmo_chart_1.FlexChart._CSS_TICK)&&(s.tick=r,r=a[++o]),u&&r&&(wijmo_1.hasClass(r,wijmo_chart_1.FlexChart._CSS_LABEL)||r.querySelector("."+wijmo_chart_1.FlexChart._CSS_LABEL))&&(s.label=r,o++)):(u&&r&&(wijmo_1.hasClass(r,wijmo_chart_1.FlexChart._CSS_LABEL)||r.querySelector("."+wijmo_chart_1.FlexChart._CSS_LABEL))&&(s.label=r,r=a[++o]),u&&r&&i.majorTickMarks!==wijmo_chart_1.TickMark.None&&wijmo_1.hasClass(r,wijmo_chart_1.FlexChart._CSS_TICK)&&(s.tick=r,o++))}),s&&s.forEach(function(t,e){var n,r={};u.push(r),r.val=t,n=a[o],i.minorTickMarks!==wijmo_chart_1.TickMark.None&&wijmo_1.hasClass(n,wijmo_chart_1.FlexChart._CSS_TICK_MINOR)&&(r.tick=n,n=a[++o]),i.minorGrid&&wijmo_1.hasClass(n,wijmo_chart_1.FlexChart._CSS_GRIDLINE_MINOR)&&(r.majorGrid=n,o++)}),{major:c,minor:u}},e.prototype._playLoadAnimation=function(t,e,i){this["_playLoad"+i+"Animation"](t,e)},e.prototype._playUpdateAnimation=function(t,e,i,n,a){null==n||null==a?null==n?this["_play"+i+"RemoveAnimation"](t,a):this["_play"+i+"AddAnimation"](t,n):this["_play"+i+"MoveAnimation"](t,n,a)},e.prototype._adjustAnimations=function(t,e){var i,n=e.length;if("Column"===t||"Bar"===t)for(i=n-1;i>=0;i--)null==e[i]&&e.splice(i,1)},e.prototype._getChartType=function(t){var e="Default",i=this._chart._isRotated();switch(t){case wijmo_chart_1.ChartType.Scatter:case wijmo_chart_1.ChartType.Bubble:case wijmo_chart_1.ChartType.Candlestick:case wijmo_chart_1.ChartType.HighLowOpenClose:e="Scatter";break;case wijmo_chart_1.ChartType.Column:case wijmo_chart_1.ChartType.Bar:e=i?"Bar":"Column";break;case wijmo_chart_1.ChartType.Line:case wijmo_chart_1.ChartType.LineSymbols:case wijmo_chart_1.ChartType.Area:case wijmo_chart_1.ChartType.Spline:case wijmo_chart_1.ChartType.SplineSymbols:case wijmo_chart_1.ChartType.SplineArea:e="Line";break;default:e="Default"}return e},e.prototype._playLoadLineAnimation=function(t,e){var i,n=this,a=n._chart.series[e],o=n.animationMode,r=a.hostElement;o===AnimationMode.Point?n._playDefaultAnimation(t,e):(i=o===AnimationMode.All?n._getAnimation(t,0):n._getAnimation(t,e),[].slice.call(r.childNodes).forEach(function(t){n._setLineRiseDiveAnimation(i,t,!0)}))},e.prototype._setLineRiseDiveAnimation=function(t,e,i){var n,a,o,r,s,l,c,u=this,h=this,p=h._chart,m=e.nodeName,_=[],d=[],f=h._chart._plotRect,y=f.top+f.height,A=f.left,g={},v={};if("g"===m&&e.childNodes)[].slice.call(e.childNodes).forEach(function(e){u._setLineRiseDiveAnimation(t,e,i)});else{if("polyline"===m||"polygon"===m){for(o=(l=e.points).length||l.numberOfItems,r=0;r<o;r++)s=l[r]||l.getItem(r),p.rotated?_.push({x:A,y:s.y}):_.push({x:s.x,y:y}),d.push({x:s.x,y:s.y});g[m]=_,v[m]=d}else"ellipse"===m&&(h._toggleVisibility(e,!1),i&&(c=function(){h._toggleVisibility(e,!0)}));n=i?g:v,a=i?v:g,h._setInitState(e,n,a),t.push({ele:e,from:n,to:a,done:c})}},e.prototype._setLineMoveAnimation=function(t,e,i,n,a){if(null!=e&&null!=i){var o,r,s,l,c,u,h,p,m,_=e.nodeName,d=[],f=[],y={},A={};for(m="polygon"===_,s=e.points,u=i.points,o=s.length||s.numberOfItems,l=u.length||u.numberOfItems,p=Math.max(o,l),h=0;h<p;h++)h<o&&(r=s[h]||s.getItem(h),d.push({x:r.x,y:r.y})),h<l&&(c=u[h]||u.getItem(h),f.push({x:c.x,y:c.y}));this._addStart?(this._adjustStartLinePoints(this._addStart,d,s),o+=this._addStart):this._removeStart&&(this._adjustStartLinePoints(this._removeStart,f,u),l+=this._removeStart),l>o?this._adjustEndLinePoints(l,o,d,s,m):l<o&&this._adjustEndLinePoints(o,l,f,u,m),y[_]=d,A[_]=f,this._setInitState(n,y,A),t.push({ele:n,from:y,to:A,done:a})}},e.prototype._adjustStartLinePoints=function(t,e,i){for(var n=i[0]||i.getItem(0);t;)e.splice(0,0,{x:n.x,y:n.y}),t--},e.prototype._adjustEndLinePoints=function(t,e,i,n,a){var o,r,s;for(a&&(n.length>=3||n.numberOfItems>=3)?(r=i.pop(),o=i.pop(),s=n[n.length-3]||n.getItem(n.numberOfItems-3)):(n.length>0||n.numberOfItems>0)&&(s=n[n.length-1]||n.getItem(n.numberOfItems-1));t>e&&s;)i.push({x:s.x,y:s.y}),e++;a&&r&&o&&(i.push(o),i.push(r))},e.prototype._playLineRemoveAnimation=function(t,e){var i,n=this,a=n._chart.series[0].hostElement.parentNode,o=n._getAnimation(t,0);a.appendChild(e),[].slice.call(e.childNodes).forEach(function(t){n._setLineRiseDiveAnimation(o,t,!1)}),o.length&&(i=o[0].done,o[0].done=function(){e&&e.parentNode===a&&a.removeChild(e),i&&i()})},e.prototype._playLineAddAnimation=function(t,e){var i=this,n=e.hostElement,a=this._getAnimation(t,0);[].slice.call(n.childNodes).forEach(function(t){i._setLineRiseDiveAnimation(a,t,!0)})},e.prototype._playLineMoveAnimation=function(t,e,i){var n,a,o,r,s=this,l=(s._chart,s._getAnimation(t,0)),c=[];n=e.hostElement,a=[].slice.call(i.childNodes),[].slice.call(n.childNodes).forEach(function(t,e){r=t.nodeName,o=a[e],"g"===r&&t.nodeChilds?[].slice.call(t.nodeChilds).forEach(function(t,e){o&&(c.push(t),s._toggleVisibility(t,!1))}):"polygon"===r||"polyline"===r?s._setLineMoveAnimation(l,o,t,t,0===e?function(){c.forEach(function(t){s._toggleVisibility(t,!0)}),c=null}:null):o&&(c.push(t),s._toggleVisibility(t,!1))})},e.prototype._playLoadColumnAnimation=function(t,e){this._playLoadBarAnimation(t,e,!0)},e.prototype._playLoadBarAnimation=function(t,e,i){void 0===i&&(i=!1);var n=this,a=n._chart.series[e],o=n.animationMode,r=a.hostElement;[].slice.call(r.childNodes).forEach(function(a,r){var s,l=a.nodeName;s=o===AnimationMode.Point?n._getAnimation(t,r):o===AnimationMode.Series?n._getAnimation(t,e):n._getAnimation(t,0),"g"===l?a.childNodes&&[].slice.call(a.childNodes).forEach(function(t,e){n._setLoadBarAnimation(s,t,i)}):n._setLoadBarAnimation(s,a,i)})},e.prototype._setBarAnimation=function(t,e,i,n,a){this._setInitState(e,i,n),t.push({ele:e,from:i,to:n,done:a})},e.prototype._setLoadBarAnimation=function(t,e,i,n,a){void 0===n&&(n=!1);var o,r,s=this,l=i?"height":"width",c=i?"y":"x",u=e.getAttribute(l),h=e.getAttribute(c),p=i?"top":"left",m=s._chart._plotRect,_={},d={};_[l]=0,d[l]=Number(u),i&&(_[c]=m[l]+m[p],d[c]=Number(h)),o=n?d:_,r=n?_:d,"g"===e.nodeName?e.childNodes&&[].slice.call(e.childNodes).forEach(function(e){s._setBarAnimation(t,e,o,r,a)}):s._setBarAnimation(t,e,o,r,a)},e.prototype._setMoveBarAnimation=function(t,e,i){var n={},a={};null!=e&&null!=i&&(["width","height","x","y","top","left"].forEach(function(t){var o=e.getAttribute(t),r=i.getAttribute(t);o!==r&&(n[t]=Number(o),a[t]=Number(r))}),this._setInitState(i,n,a),t.push({ele:i,from:n,to:a}))},e.prototype._playColumnRemoveAnimation=function(t,e){this._playBarRemoveAnimation(t,e,!0)},e.prototype._playColumnAddAnimation=function(t,e){this._playBarAddAnimation(t,e,!0)},e.prototype._playColumnMoveAnimation=function(t,e,i){this._playBarMoveAnimation(t,e,i,!0)},e.prototype._playBarRemoveAnimation=function(t,e,i){void 0===i&&(i=!1);var n=this,a=n._chart.series[0].hostElement.parentNode,o=n._getAnimation(t,0);a.appendChild(e),[].slice.call(e.childNodes).forEach(function(t){n._setLoadBarAnimation(o,t,i,!0)}),o.length&&(o[0].done=function(){e&&e.parentNode===a&&a.removeChild(e)})},e.prototype._playBarAddAnimation=function(t,e,i){var n=this;void 0===i&&(i=!1);var a=e.hostElement,o=this._getAnimation(t,2);[].slice.call(a.childNodes).forEach(function(t){n._setLoadBarAnimation(o,t,i,!1)})},e.prototype._playBarMoveAnimation=function(t,e,i,n){void 0===n&&(n=!1);var a,o,r,s,l,c,u,h=this;h._chart;if(a=e.hostElement,r=[].slice.call(i.childNodes),h._addStart)for(u=0,s=r[0];u<h._addStart;)r.splice(0,0,s),u++;if(h._removeStart)for(u=0,s=r[r.length-1];u<h._removeStart;){var p=r.shift();r.push(p),u++}l=r.length,o=[].slice.call(a.childNodes),c=o.length,o.forEach(function(e,i){var a;if(i<l){if(s=r[i],i<h._addStart?(a=h._getAnimation(t,2),h._setLoadBarAnimation(a,e,n,!1)):i>=l-h._removeStart?(a=h._getAnimation(t,2),h._setLoadBarAnimation(a,e,n,!1),a=h._getAnimation(t,0),h._removeBarAnimation(a,e,s,n)):(a=h._getAnimation(t,1),h._setMoveBarAnimation(a,s,e)),i===c-1&&i<l-1)for(a=h._getAnimation(t,0),i++;i<l;i++)s=r[i],h._removeBarAnimation(a,e,s,n)}else a=h._getAnimation(t,2),h._setLoadBarAnimation(a,e,n,!1)})},e.prototype._removeBarAnimation=function(t,e,i,n){var a=e.parentNode;a.appendChild(i),this._setLoadBarAnimation(t,i,n,!0,function(t){return function(){t.parentNode&&t.parentNode===a&&a.removeChild(t)}}(i))},e.prototype._playLoadScatterAnimation=function(t,e){var i=this,n=i._chart,a=n.series[e],o=i.animationMode,r=a.hostElement,s=a._xValues||n._xvals;0===s.length&&(s=a._pointIndexes),[].slice.call(r.childNodes).forEach(function(n,a){var r;r=o===AnimationMode.Point?i._getScatterAnimation(t,s[a]):o===AnimationMode.Series?i._getAnimation(t,e):i._getAnimation(t,0),i._setLoadScatterAnimation(r,n,!1)})},e.prototype._setLoadScatterAnimation=function(t,e,i,n){var a=this;void 0===i&&(i=!1);var o,r,s={},l={};"g"===e.nodeName&&e.childNodes?[].slice.call(e.childNodes).forEach(function(e){a._setLoadScatterAnimation(t,e,i,n)}):(["rx","ry","stroke-width"].forEach(function(t){var i=e.getAttribute(t);s[t]=0,l[t]=Number(i)}),o=i?l:s,r=i?s:l,this._setInitState(e,o,r),t.push({ele:e,from:o,to:r,done:n}))},e.prototype._setUpdateScatterAnimation=function(t,e,i,n){var a={},o={};["cx","cy"].forEach(function(t){var n=e.getAttribute(t),r=i.getAttribute(t);n!==r&&(a[t]=Number(n),o[t]=Number(r))}),this._setInitState(i,a,o),t.push({ele:i,from:a,to:o,done:n})},e.prototype._getScatterAnimation=function(t,e){var i=this._getScatterAnimationIndex(t,e);return t[i]||(t[i]=[]),t[i]},e.prototype._getScatterAnimationIndex=function(t,e){var i=this._chart.axisX,n=null==i.min?i.actualMin:i.min,a=null==i.max?i.actualMax:i.max;return Math.ceil((e-n)/((a-n)/20))},e.prototype._playScatterRemoveAnimation=function(t,e){var i=this,n=i._chart.series[0].hostElement.parentNode,a=i._getAnimation(t,0);n.appendChild(e),[].slice.call(e.childNodes).forEach(function(t){i._setLoadScatterAnimation(a,t,!0)}),a.length&&(a[0].done=function(){e&&e.parentNode===n&&n.removeChild(e)})},e.prototype._playScatterAddAnimation=function(t,e){var i=this,n=e.hostElement,a=this._getAnimation(t,0);[].slice.call(n.childNodes).forEach(function(t){i._setLoadScatterAnimation(a,t,!1)})},e.prototype._playScatterMoveAnimation=function(t,e,i){var n,a,o,r,s,l,c,u=this,h=(u._chart,u._getAnimation(t,0));if(n=e.hostElement,o=[].slice.call(i.childNodes),u._addStart)for(c=0,r=o[0];c<u._addStart;)o.splice(0,0,r),c++;if(u._removeStart)for(c=0,r=o[o.length-1];c<u._removeStart;){var p=o.shift();o.push(p),c++}s=o.length,a=[].slice.call(n.childNodes),l=a.length,a.forEach(function(t,e){if(e<s){if(e<u._addStart?u._setLoadScatterAnimation(h,t,!1):e>=s-u._removeStart?(u._setLoadScatterAnimation(h,t,!1),r=o[e],u._removeScatterAnimation(h,t,r)):(r=o[e],u._setUpdateScatterAnimation(h,r,t)),e===l-1&&e<s-1)for(e++;e<s;e++)r=o[e],u._removeScatterAnimation(h,t,r)}else u._setLoadScatterAnimation(h,t,!1)})},e.prototype._removeScatterAnimation=function(t,e,i){var n=e.parentNode;n.appendChild(i),this._setLoadScatterAnimation(t,i,!0,function(t){return function(){t.parentNode&&t.parentNode===n&&n.removeChild(t)}}(i))},e.prototype._playDefaultAnimation=function(t,e){var i,n=this._chart,a=n.series[e].hostElement,o=n._plotRect,r=n._currentRenderEngine,s=a.getAttribute("clip-path"),l="clipPath"+(1e6*Math.random()).toFixed();r.addClipRect(new wijmo_1.Rect(o.left,o.top,0,o.height),l),a.setAttribute("clip-path","url(#"+l+")"),i=n.hostElement.querySelector("#"+l),this._getAnimation(t,0).push({ele:i.querySelector("rect"),from:{width:0},to:{width:o.width},done:function(){a&&(s?a.setAttribute("clip-path",s):a.removeAttribute("clip-path"),i&&i.parentNode&&i.parentNode.removeChild(i))}})},e}(FlexAnimation),FlexRadarAnimation=function(t){function e(e,i){return t.call(this,e,i)||this}return __extends(e,t),e.prototype._getDurationAndDelay=function(e,i){var n=t.prototype._getDurationAndDelay.call(this,e,i);return this.animationMode===AnimationMode.Point&&(n.duration=i/e,n.delay=i/e),n},e.prototype._playAxesAnimation=function(){},e.prototype._getChartType=function(e){var i=t.prototype._getChartType.call(this,e);return"Bar"===i&&(i="Column"),i},e.prototype._playLoadLineAnimation=function(t,e){var i,n,a,o=this,r=o._chart,s=o._chart.series[e],l=s._xValues||r._xvals,c=o.animationMode,u=s.hostElement;c===AnimationMode.Point?(0===l.length&&(l=s._pointIndexes),a=[].slice.call(u.childNodes),n=a.length-u.querySelectorAll("ellipse").length,a.forEach(function(e,i){o._setRadarLinePointAnimation(t,e,i,l,n)})):(i=c===AnimationMode.All?o._getAnimation(t,0):o._getAnimation(t,e),[].slice.call(u.childNodes).forEach(function(t){o._setLineRiseDiveAnimation(i,t,!0)}))},e.prototype._setRadarLinePointAnimation=function(t,e,i,n,a){var o,r,s,l,c,u,h,p=this,m=p._chart,_=e.nodeName,d=[],f=[],y=[],A=[],g=m._center,v=[],x=!1,E={},S={},b=0;if("polyline"===_||"polygon"===_){for(o=(l=e.points).length||l.numberOfItems,r=0;r<o;r++)v[h=p._getScatterAnimationIndex(t,n[r])]||(v[h]=[]),v[h].push(r),s=l[r]||l.getItem(r),d.push({x:g.x,y:g.y}),f.push({x:s.x,y:s.y});for(r=0,o=v.length;r<o;r++)v[r]&&(u=p._getAnimation(t,b),y=A.length?A.slice():d.slice(),A=y.slice(),v[r].forEach(function(t){var e=f[t];A[t]={x:e.x,y:e.y}}),S={},(E={})[_]=y,S[_]=A,x||(p._setInitState(e,E,S),x=!0),u.push({ele:e,from:E,to:S,done:c}),b++)}else if("ellipse"===_){if((r=i-(a||0))<0)return;u=m._isPolar?p._getScatterAnimation(t,n[r]):p._getScatterAnimation(t,r),p._toggleVisibility(e,!1),c=function(){p._toggleVisibility(e,!0)},u.push({ele:e,from:E,to:S,done:c})}},e.prototype._setLineRiseDiveAnimation=function(t,e,i){var n,a,o,r,s,l,c,u=this,h=u._chart,p=e.nodeName,m=[],_=[],d=h._center,f={},y={};if("polyline"===p||"polygon"===p){for(o=(l=e.points).length||l.numberOfItems,r=0;r<o;r++)s=l[r]||l.getItem(r),m.push({x:d.x,y:d.y}),_.push({x:s.x,y:s.y});f[p]=m,y[p]=_}else"ellipse"===p&&(u._toggleVisibility(e,!1),i&&(c=function(){u._toggleVisibility(e,!0)}));n=i?f:y,a=i?y:f,u._setInitState(e,n,a),t.push({ele:e,from:n,to:a,done:c})},e.prototype._parsePathByRadius=function(t,e,i){var n,a,o=t.center.x,r=t.center.y,s=t.radius,l=t.angle,c=t.sweep;n=[o,r,0,l,c,0],a=[o,r,s,l,c,t.innerRadius||0],e.pie=n,i.pie=a},e.prototype._playUpdateAnimation=function(e,i,n,a,o){if("Bar"===n||"Column"===n){if(null==a)return;this._playLoadBarAnimation(e,i,!1)}else t.prototype._playUpdateAnimation.call(this,e,i,n,a,o)},e.prototype._playLoadBarAnimation=function(t,e,i){void 0===i&&(i=!1);var n=this,a=n._chart,o=a.series[e],r=a._areas[e],s=n.animationMode,l=o.hostElement;[].slice.call(l.childNodes).forEach(function(i,a){var o,l,c={},u={};o=s===AnimationMode.Point?n._getAnimation(t,a):s===AnimationMode.Series?n._getAnimation(t,e):n._getAnimation(t,0),l=r[a],n._parsePathByRadius(l,c,u),n._setInitState(i,c,u),o.push({ele:i,from:c,to:u})})},e}(FlexChartAnimation),AnimationHelper=function(){function t(){}return t.playAnimations=function(e,i,n,a,o,r,s){void 0===o&&(o=Easing.Swing);var l=e.length,c=0,u=[];return e.forEach(function(e,h){var p=t.playAnimation(e,i[h],n[h],function(){c===l-1&&a&&a(),c++},o,r,s);u.push(p)}),u},t.playAnimation=function(e,i,n,a,o,r,s){void 0===o&&(o=Easing.Swing);var l=t.parseAttrs(i,n);return t.animate(function(i){t.setElementAttr(e,l,i)},a,o,r,s)},t.setElementAttr=function(e,i,n){var a,o;for(o in i)a=i[o],t.calcValue(a,n),e.setAttribute(o,a.getValue(a.value,n))},t.getPathDescOfPie=function(t,e,i,n,a,o){void 0===o&&(o=0);var r=!1;a>=2*Math.PI&&(r=!0,a=2*Math.PI-.001);var s=new wijmo_1.Point(t,e);s.x+=i*Math.cos(n),s.y+=i*Math.sin(n);var l=n+a,c=new wijmo_1.Point(t,e);if(c.x+=i*Math.cos(l),c.y+=i*Math.sin(l),o){var u=new wijmo_1.Point(t,e);u.x+=o*Math.cos(l),u.y+=o*Math.sin(l);var h=new wijmo_1.Point(t,e);h.x+=o*Math.cos(n),h.y+=o*Math.sin(n)}var p=" 0 0,1 ",m=" 0 0,0 ";Math.abs(a)>Math.PI&&(p=" 0 1,1 ",m=" 0 1,0 ");var _="M "+s.x.toFixed(3)+","+s.y.toFixed(3);return _+=" A "+i.toFixed(3)+","+i.toFixed(3)+p,_+=c.x.toFixed(3)+","+c.y.toFixed(3),o?(_+=r?" M "+u.x.toFixed(3)+","+u.y.toFixed(3):" L "+u.x.toFixed(3)+","+u.y.toFixed(3),_+=" A "+o.toFixed(3)+","+o.toFixed(3)+m,_+=h.x.toFixed(3)+","+h.y.toFixed(3)):_+=" L "+t.toFixed(3)+","+e.toFixed(3),r||(_+=" z"),_},t.parseAttrs=function(e,i){var n={};for(var a in e)if(null!=i[a])switch(a){case"polyline":n.points=t.parseAttr(e[a],i[a],function(t,e){if(1===e){for(var i,n,a;t.length>1;){if(n=t[0],a=t[1],n.x!==a.x||n.y!==a.y){n=null,a=null;break}t.splice(1,1)}for(i=t.length-1;i>0;i--)if(n=a,a=t[i],n){if(n.x!==a.x||n.y!==a.y)break;t.pop()}}return t.map(function(t){return t.x+","+t.y}).join(" ")});break;case"polygon":n.points=t.parseAttr(e[a],i[a],function(t,e){if(1===e){var i,n,a,o,r;for(o=t.pop(),r=t.pop();t.length>1;){if(n=t[0],a=t[1],n.x!==a.x||n.y!==a.y){n=null,a=null;break}t.splice(1,1)}for(i=t.length-1;i>=0;i--)if(n=a,a=t[i],n){if(n.x!==a.x||n.y!==a.y)break;t.splice(i,1)}t.push(r),t.push(o)}return t.map(function(t){return t.x+","+t.y}).join(" ")});break;case"d":n[a]=t.parseAttr(e[a],i[a],function(t){return t.map(function(t){return"string"==typeof t?t:t[0]+","+t[1]}).join(" ")});break;case"pie":n.d=t.parseAttr(e[a],i[a],function(e){return t.getPathDescOfPie.apply(t,e)});break;case"rotate":n.transform=t.parseAttr(e[a],i[a],function(t){return"rotate("+t.join(" ")+")"});break;case"width":case"height":case"rx":case"ry":case"stroke-width":n[a]=t.parseAttr(e[a],i[a],function(t){return Math.abs(t)});break;default:n[a]=t.parseAttr(e[a],i[a])}return n},t.animate=function(t,e,i,n,a){void 0===i&&(i=Easing.Swing),void 0===n&&(n=400),void 0===a&&(a=16),wijmo_1.asFunction(t),wijmo_1.asNumber(n,!1,!0),wijmo_1.asNumber(a,!1,!0);var o=0,r=setInterval(function(){Date.now();var s=o/n;s=EasingHelper[Easing[i]](s),t(s),(o+=a)>=n&&(clearInterval(r),(s<1||s>1)&&t(1),e&&e())},a);return r},t.calcValue=function(e,i){var n=e.from,a=e.diff,o=e.value;wijmo_1.isNumber(n)?e.value=0===a?n:n+a*i:wijmo_1.isArray(n)&&t.parseArrayAttr(o,n,a,function(t,e){return"number"==typeof t?t+e*i:t})},t.parseAttr=function(e,i,n){var a,o,r,s;return wijmo_1.isArray(e)&&wijmo_1.isArray(i)?(o=i,r=[],s=(a=e).slice(),t.parseArrayAttr(r,a,o,function(t,e){return t===e?0:e-t})):(s=a=Number(e),r=(o=Number(i))-a),{from:a,to:o,value:s,diff:r,getValue:n||function(t,e){return t}}},t.parseArrayAttr=function(t,e,i,n){e.forEach(function(e,a){var o={},r=[],s=i[a];wijmo_1.isNumber(e)||"string"==typeof e?t[a]=n(e,s):wijmo_1.isArray(e)?(e.forEach(function(t,i){r[i]=n(e[i],s[i])}),t[a]=r):(Object.getOwnPropertyNames(e).forEach(function(t){o[t]=n(e[t],s[t])}),t[a]=o)})},t}(),EasingHelper=function(){function t(){}return t.Linear=function(t){return t},t.Swing=function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},t.EaseInQuad=function(t){return t*t},t.EaseOutQuad=function(t){return t*(2-t)},t.EaseInOutQuad=function(t){return t<.5?2*t*t:(4-2*t)*t-1},t.EaseInCubic=function(t){return t*t*t},t.EaseOutCubic=function(t){return--t*t*t+1},t.EaseInOutCubic=function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},t.EaseInQuart=function(t){return t*t*t*t},t.EaseOutQuart=function(t){return 1- --t*t*t*t},t.EaseInOutQuart=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},t.EaseInQuint=function(t){return t*t*t*t*t},t.EaseOutQuint=function(t){return 1+--t*t*t*t*t},t.EaseInOutQuint=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t},t.EaseInSine=function(t){return 1-Math.cos(t*(Math.PI/2))},t.EaseOutSine=function(t){return Math.sin(t*(Math.PI/2))},t.EaseInOutSine=function(t){return-.5*(Math.cos(Math.PI*t)-1)},t.EaseInExpo=function(t){return 0==t?0:Math.pow(2,10*(t-1))},t.EaseOutExpo=function(t){return 1==t?1:1-Math.pow(2,-10*t)},t.EaseInOutExpo=function(t){return t==!!t?t:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},t.EaseInCirc=function(t){return-(Math.sqrt(1-t*t)-1)},t.EaseOutCirc=function(t){return Math.sqrt(1-Math.pow(t-1,2))},t.EaseInOutCirc=function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},t.EaseInBack=function(t){var e=1.70158;return t*t*((e+1)*t-e)},t.EaseOutBack=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},t.EaseInOutBack=function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},t.EaseInBounce=function(e){return 1-t.EaseOutBounce(1-e)},t.EaseOutBounce=function(t){var e=7.5625;return t<1/2.75?e*t*t:t<2/2.75?e*(t-=1.5/2.75)*t+.75:t<2.5/2.75?e*(t-=2.25/2.75)*t+.9375:e*(t-=2.625/2.75)*t+.984375},t.EaseInOutBounce=function(e){return e<.5?.5*t.EaseInBounce(2*e):.5*t.EaseOutBounce(2*e-1)+.5},t.EaseInElastic=function(t){return t==!!t?t:-Math.pow(2,10*(t-=1))*Math.sin((t-.075)*(2*Math.PI)/.3)},t.EaseOutElastic=function(t){return t==!!t?t:Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1},t.EaseInOutElastic=function(t){return t==!!t?t:(t*=2)<1?Math.pow(2,10*(t-=1))*Math.sin((t-.1125)*(2*Math.PI)/.45)*-.5:Math.pow(2,-10*(t-=1))*Math.sin((t-.1125)*(2*Math.PI)/.45)*.5+1},t}();wijmo_1._registerModule("wijmo.chart.animation",selfModule);

/***/ }),

/***/ "./node_modules/wijmo/wijmo.chart.js":
/*!*******************************************!*\
  !*** ./node_modules/wijmo/wijmo.chart.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
﻿/*!
    *
    * Wijmo Library 5.20191.615
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */

var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_1=__webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js"),selfModule=__webpack_require__(/*! wijmo/wijmo.chart */ "./node_modules/wijmo/wijmo.chart.js"),_VolumeHelper=function(){function t(t,e,i,n,r){this._volumes=wijmo_1.asArray(t),this._xVals=wijmo_1.asArray(e),this._xDataMin=wijmo_1.asNumber(i,!0,!1),this._xDataMax=wijmo_1.asNumber(n,!0,!1),this._xDataType=wijmo_1.asEnum(r,wijmo_1.DataType,!0),this._calcData=[],this._init()}return t.prototype.convert=function(e,i,n){var r=void 0,s=this._calcData.length,o=-1;if(this._hasXs&&this._xDataType===wijmo_1.DataType.Date){if(-1===(o=this._xVals.indexOf(e)))for(var a=0;a<this._xVals.length;a++){if(a<this._xVals.length-1&&this._xVals[a]<=e&&e<=this._xVals[a+1]){o=a;break}if(0===a&&e<=this._xVals[a]){o=a;break}if(a===this._xVals.length-1&&this._xVals[a]<=e){o=a;break}}-1===o&&(o=this._xVals.indexOf(Math.floor(e)),o=wijmo_1.clamp(o,0,s-1))}else this._hasXs?-1===(o=this._xVals.indexOf(e))&&(o=this._xVals.indexOf(Math.floor(e)),o=wijmo_1.clamp(o,0,s-1)):o=wijmo_1.clamp(Math.round(e),0,s-1);return 0<=o&&o<s&&(this._hasXs&&(e=t.convertToRange(e,0,s-1,this._xDataMin,this._xDataMax)),r=((r=this._calcData[o].value+(e-o)*this._calcData[o].width-.5*this._calcData[o].width)-(i=this._getXVolume(i)))/((n=this._getXVolume(n))-i)),r},t.prototype.convertBack=function(e,i,n){var r,s=void 0,o=this._calcData.length,a=-1;for(r=0;r<o;r++)if(this._calcData[r].x1<=e&&e<=this._calcData[r].x2||0===r&&e<=this._calcData[r].x2||r===o-1&&this._calcData[r].x1<=e){a=r;break}return 0<=a&&a<o&&(s=e/this._calcData[a].width-this._calcData[a].value/this._calcData[a].width+.5+r,this._hasXs&&(s=t.convertToRange(s,this._xDataMin,this._xDataMax,0,o-1))),s},t.prototype._init=function(){this._hasXs=null!==this._xVals&&this._xVals.length>0,this._hasXs&&!wijmo_1.isNumber(this._xDataMin)&&(this._xDataMin=Math.min.apply(null,this._xVals)),this._hasXs&&!wijmo_1.isNumber(this._xDataMax)&&(this._xDataMax=Math.max.apply(null,this._xVals)),this._hasXs&&(this._hasXs=wijmo_1.isNumber(this._xDataMin)&&wijmo_1.isNumber(this._xDataMax)),this._hasXs&&this._xDataType===wijmo_1.DataType.Date&&this._fillGaps();var t=0,e=0,i=null!==this._volumes&&this._volumes.length>0?this._volumes.length:0;for(e=0;e<i;e++)t+=this._volumes[e]||0;var n,r,s=0;for(e=0;e<i;e++)n=s+(r=(this._volumes[e]||0)/t),this._calcData.push({value:n,width:r,x1:s,x2:n}),s=this._calcData[e].value},t.prototype._getXVolume=function(e){var i=this._calcData.length,n=-1;if(this._hasXs){n=this._xVals.indexOf(e);for(var r=0;r<this._xVals.length;r++){if(r<this._xVals.length-1&&this._xVals[r]<=e&&e<=this._xVals[r+1]){n=r;break}if(0===r&&e<=this._xVals[r]){n=r;break}if(r===this._xVals.length-1&&this._xVals[r]<=e){n=r;break}}}return this._hasXs&&(e=t.convertToRange(e,0,i-1,this._xDataMin,this._xDataMax)),-1===n&&(n=wijmo_1.clamp(Math.round(e),0,i-1)),this._calcData[n].value+(e-n)*this._calcData[n].width-.5*this._calcData[n].width},t.convertToRange=function(t,e,i,n,r){return e===i||n===r?0:(t-n)*(i-e)/(r-n)+e},t.prototype._fillGaps=function(){if(!(this._xDataType!==wijmo_1.DataType.Date||null===this._xVals||this._xVals.length<=0)){var t,e=this._xDataMin,i=this._xDataMax;for(t=1;e<i;t++)(e=new Date(e)).setDate(e.getDate()+1),(e=e.valueOf())!==this._xVals[t]&&(this._xVals.splice(t,0,e),this._volumes.splice(t,0,0))}},t}();exports._VolumeHelper=_VolumeHelper;var _Spline=function(){function t(t,e){this.k=.002,this._a=[],this._b=[],this._c=[],this._d=[],this.m=[[-.5,1.5,-1.5,.5],[1,-2.5,2,-.5],[-.5,0,.5,0],[0,1,0,0]],this._x=t,this._y=e;var i=this._len=Math.min(t.length,e.length);if(i>3)for(var n=0;n<i-1;n++){var r=0==n?new wijmo_1.Point(t[n],e[n]):new wijmo_1.Point(t[n-1],e[n-1]),s=new wijmo_1.Point(t[n],e[n]),o=new wijmo_1.Point(t[n+1],e[n+1]),a=n==i-2?new wijmo_1.Point(t[n+1],e[n+1]):new wijmo_1.Point(t[n+2],e[n+2]),h=new wijmo_1.Point,l=new wijmo_1.Point,_=new wijmo_1.Point,u=new wijmo_1.Point;h.x=r.x*this.m[0][0]+s.x*this.m[0][1]+o.x*this.m[0][2]+a.x*this.m[0][3],l.x=r.x*this.m[1][0]+s.x*this.m[1][1]+o.x*this.m[1][2]+a.x*this.m[1][3],_.x=r.x*this.m[2][0]+s.x*this.m[2][1]+o.x*this.m[2][2]+a.x*this.m[2][3],u.x=r.x*this.m[3][0]+s.x*this.m[3][1]+o.x*this.m[3][2]+a.x*this.m[3][3],h.y=r.y*this.m[0][0]+s.y*this.m[0][1]+o.y*this.m[0][2]+a.y*this.m[0][3],l.y=r.y*this.m[1][0]+s.y*this.m[1][1]+o.y*this.m[1][2]+a.y*this.m[1][3],_.y=r.y*this.m[2][0]+s.y*this.m[2][1]+o.y*this.m[2][2]+a.y*this.m[2][3],u.y=r.y*this.m[3][0]+s.y*this.m[3][1]+o.y*this.m[3][2]+a.y*this.m[3][3],this._a.push(h),this._b.push(l),this._c.push(_),this._d.push(u)}}return t.prototype.calculatePoint=function(t){var e=Math.floor(t);e<0&&(e=0),e>this._len-2&&(e=this._len-2);var i=t-e;return{x:((this._a[e].x*i+this._b[e].x)*i+this._c[e].x)*i+this._d[e].x,y:((this._a[e].y*i+this._b[e].y)*i+this._c[e].y)*i+this._d[e].y}},t.prototype.calculate=function(){if(this._len<=3)return{xs:this._x,ys:this._y};var t=[],e=[],i=this.calculatePoint(0);t.push(i.x),e.push(i.y);for(var n=this._len*this.k,r=n;r<=this._len-1;r+=n){var s=this.calculatePoint(r);(Math.abs(i.x-s.x)>=3||Math.abs(i.y-s.y)>=3)&&(t.push(s.x),e.push(s.y),i=s)}return{xs:t,ys:e}},t}();exports._Spline=_Spline;var Palettes=function(){function t(){}return t.standard=["#88bde6","#fbb258","#90cd97","#f6aac9","#bfa554","#bc99c7","#eddd46","#f07e6e","#8c8c8c"],t.cocoa=["#466bb0","#c8b422","#14886e","#b54836","#6e5944","#8b3872","#73b22b","#b87320","#141414"],t.coral=["#84d0e0","#f48256","#95c78c","#efa5d6","#ba8452","#ab95c2","#ede9d0","#e96b7d","#888888"],t.dark=["#005fad","#f06400","#009330","#e400b1","#b65800","#6a279c","#d5a211","#dc0127","#000000"],t.highcontrast=["#ff82b0","#0dda2c","#0021ab","#bcf28c","#19c23b","#890d3a","#607efd","#1b7700","#000000"],t.light=["#ddca9a","#778deb","#cb9fbb","#b5eae2","#7270be","#a6c7a7","#9e95c7","#95b0c7","#9b9b9b"],t.midnight=["#83aaca","#e37849","#14a46a","#e097da","#a26d54","#a584b7","#d89c54","#e86996","#2c343b"],t.modern=["#2d9fc7","#ec993c","#89c235","#e377a4","#a68931","#a672a6","#d0c041","#e35855","#68706a"],t.organic=["#9c88d9","#a3d767","#8ec3c0","#e9c3a9","#91ab36","#d4ccc0","#61bbd8","#e2d76f","#80715a"],t.slate=["#7493cd","#f99820","#71b486","#e4a491","#cb883b","#ae83a4","#bacc5c","#e5746a","#505d65"],t.zen=["#7bb5ae","#e2d287","#92b8da","#eac4cb","#7b8bbd","#c7d189","#b9a0c8","#dfb397","#a9a9a9"],t.cyborg=["#2a9fd6","#77b300","#9933cc","#ff8800","#cc0000","#00cca3","#3d6dcc","#525252","#000000"],t.superhero=["#5cb85c","#f0ad4e","#5bc0de","#d9534f","#9f5bde","#46db8c","#b6b86e","#4e5d6c","#2b3e4b"],t.flatly=["#18bc9c","#3498db","#f39c12","#6cc1be","#99a549","#8f54b5","#e74c3c","#8a9899","#2c3e50"],t.darkly=["#375a7f","#00bc8c","#3498db","#f39c12","#e74c3c","#8f61b3","#b08725","#4a4949","#000000"],t.cerulan=["#033e76","#87c048","#59822c","#53b3eb","#fc6506","#d42323","#e3bb00","#cccccc","#222222"],t}();exports.Palettes=Palettes;var _SvgRenderEngine=function(){function t(e){this._strokeWidth=1,this._fontSize=null,this._fontFamily=null,this._savedGradient={},this._bbCache={},this._baseUrl="",this._element=e,this._create(),this._element.appendChild(this._svg);var i=navigator.userAgent.toLowerCase();void 0===t._isff&&(t._isff=i.indexOf("firefox")>=0),void 0===t._isSafari&&(t._isSafari=i.indexOf("safari")>-1&&-1==i.indexOf("chrome")),this._baseUrl=window.location.pathname.replace(window.location.hash,"").replace(/\/$/gi,"")}return t.prototype.beginRender=function(){for(;this._svg.firstChild;)wijmo_1.removeChild(this._svg.firstChild);this._savedGradient={},this._bbCache={},this._svg.appendChild(this._defs),this._svg.appendChild(this._textGroup)},t.prototype.endRender=function(){wijmo_1.removeChild(this._textGroup)},t.prototype.setViewportSize=function(t,e){this._svg.setAttribute("width",t.toString()),this._svg.setAttribute("height",e.toString())},Object.defineProperty(t.prototype,"element",{get:function(){return this._svg},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fill",{get:function(){return this._fill},set:function(t){this._fill=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontSize",{get:function(){return this._fontSize},set:function(t){this._fontSize=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontFamily",{get:function(){return this._fontFamily},set:function(t){this._fontFamily=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"stroke",{get:function(){return this._stroke},set:function(t){this._stroke=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"strokeWidth",{get:function(){return this._strokeWidth},set:function(t){this._strokeWidth=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"textFill",{get:function(){return this._textFill},set:function(t){this._textFill=t},enumerable:!0,configurable:!0}),t.prototype.addClipRect=function(e,i){if(e&&i){var n=document.createElementNS(t.svgNS,"clipPath"),r=document.createElementNS(t.svgNS,"rect");r.setAttribute("x",(e.left-1).toFixed()),r.setAttribute("y",(e.top-1).toFixed()),r.setAttribute("width",(e.width+2).toFixed()),r.setAttribute("height",(e.height+2).toFixed()),n.appendChild(r),n.setAttribute("id",i),this._svg.appendChild(n)}},t.prototype.drawEllipse=function(e,i,n,r,s,o){var a=document.createElementNS(t.svgNS,"ellipse");return this._applyColor(a,"stroke",this._stroke),null!==this._strokeWidth&&a.setAttribute("stroke-width",this._strokeWidth.toString()),this._applyColor(a,"fill",this._fill),a.setAttribute("cx",e.toFixed(1)),a.setAttribute("cy",i.toFixed(1)),a.setAttribute("rx",n.toFixed(1)),a.setAttribute("ry",r.toFixed(1)),s&&a.setAttribute("class",s),this._applyStyle(a,o),this._appendChild(a),a},t.prototype.drawRect=function(e,i,n,r,s,o,a){var h=document.createElementNS(t.svgNS,"rect");return this._applyColor(h,"fill",this._fill),this._applyColor(h,"stroke",this._stroke),null!==this._strokeWidth&&h.setAttribute("stroke-width",this._strokeWidth.toString()),h.setAttribute("x",e.toFixed(1)),h.setAttribute("y",i.toFixed(1)),n>0&&n<.05?h.setAttribute("width","0.1"):h.setAttribute("width",n.toFixed(1)),r>0&&r<.05?h.setAttribute("height","0.1"):h.setAttribute("height",r.toFixed(1)),a&&this._setClipPath(h,a),s&&h.setAttribute("class",s),this._applyStyle(h,o),this._appendChild(h),h},t.prototype.drawLine=function(e,i,n,r,s,o){var a=document.createElementNS(t.svgNS,"line");return this._applyColor(a,"stroke",this._stroke),null!==this._strokeWidth&&a.setAttribute("stroke-width",this._strokeWidth.toString()),a.setAttribute("x1",e.toFixed(1)),a.setAttribute("x2",n.toFixed(1)),a.setAttribute("y1",i.toFixed(1)),a.setAttribute("y2",r.toFixed(1)),s&&a.setAttribute("class",s),this._applyStyle(a,o),this._appendChild(a),a},t.prototype.drawLines=function(e,i,n,r,s){if(e&&i){var o=Math.min(e.length,i.length);if(o>0){var a=document.createElementNS(t.svgNS,"polyline");this._applyColor(a,"stroke",this._stroke),null!==this._strokeWidth&&a.setAttribute("stroke-width",this._strokeWidth.toString()),a.setAttribute("fill","none");for(var h="",l=0;l<o;l++)h+=e[l].toFixed(1)+","+i[l].toFixed(1)+" ";return a.setAttribute("points",h),n&&a.setAttribute("class",n),s&&this._setClipPath(a,s),this._applyStyle(a,r),this._appendChild(a),a}}return null},t.prototype.drawSplines=function(e,i,n,r,s){if(e&&i){var o=new _Spline(e,i).calculate(),a=o.xs,h=o.ys,l=Math.min(a.length,h.length);if(l>0){var _=document.createElementNS(t.svgNS,"polyline");this._applyColor(_,"stroke",this._stroke),null!==this._strokeWidth&&_.setAttribute("stroke-width",this._strokeWidth.toString()),_.setAttribute("fill","none");for(var u="",c=0;c<l;c++)u+=a[c].toFixed(1)+","+h[c].toFixed(1)+" ";return _.setAttribute("points",u),n&&_.setAttribute("class",n),s&&this._setClipPath(_,s),this._applyStyle(_,r),this._appendChild(_),_}}return null},t.prototype.drawPolygon=function(e,i,n,r,s){if(e&&i){var o=Math.min(e.length,i.length);if(o>0){var a=document.createElementNS(t.svgNS,"polygon");this._applyColor(a,"stroke",this._stroke),null!==this._strokeWidth&&a.setAttribute("stroke-width",this._strokeWidth.toString()),this._applyColor(a,"fill",this._fill);for(var h="",l=0;l<o;l++)h+=e[l].toFixed(1)+","+i[l].toFixed(1)+" ";return a.setAttribute("points",h),n&&a.setAttribute("class",n),s&&this._setClipPath(a,s),this._applyStyle(a,r),this._appendChild(a),a}}return null},t.prototype.drawPieSegment=function(e,i,n,r,s,o,a,h){if(s>=2*Math.PI)return this.drawEllipse(e,i,n,n,o,a);var l=document.createElementNS(t.svgNS,"path");this._applyColor(l,"fill",this._fill),this._applyColor(l,"stroke",this._stroke),null!==this._strokeWidth&&l.setAttribute("stroke-width",this._strokeWidth.toString());var _=new wijmo_1.Point(e,i);_.x+=n*Math.cos(r),_.y+=n*Math.sin(r);var u=r+s,c=new wijmo_1.Point(e,i);c.x+=n*Math.cos(u),c.y+=n*Math.sin(u);var p=" 0 0,1 ";Math.abs(s)>Math.PI&&(p=" 0 1,1 ");var d="M "+_.x.toFixed(1)+","+_.y.toFixed(1);return d+=" A "+n.toFixed(1)+","+n.toFixed(1)+p,d+=c.x.toFixed(1)+","+c.y.toFixed(1),d+=" L "+e.toFixed(1)+","+i.toFixed(1)+" z",l.setAttribute("d",d),h&&this._setClipPath(l,h),o&&l.setAttribute("class",o),this._applyStyle(l,a),this._appendChild(l),l},t.prototype.drawDonutSegment=function(e,i,n,r,s,o,a,h,l){var _=!1;o>=2*Math.PI&&(_=!0,o-=.001);var u=document.createElementNS(t.svgNS,"path");this._applyColor(u,"fill",this._fill),this._applyColor(u,"stroke",this._stroke),null!==this._strokeWidth&&u.setAttribute("stroke-width",this._strokeWidth.toString());var c=new wijmo_1.Point(e,i);c.x+=n*Math.cos(s),c.y+=n*Math.sin(s);var p=s+o,d=new wijmo_1.Point(e,i);d.x+=n*Math.cos(p),d.y+=n*Math.sin(p);var f=new wijmo_1.Point(e,i);f.x+=r*Math.cos(p),f.y+=r*Math.sin(p);var g=new wijmo_1.Point(e,i);g.x+=r*Math.cos(s),g.y+=r*Math.sin(s);var m=" 0 0,1 ",y=" 0 0,0 ";Math.abs(o)>Math.PI&&(m=" 0 1,1 ",y=" 0 1,0 ");var b="M "+c.x.toFixed(3)+","+c.y.toFixed(3);return b+=" A "+n.toFixed(3)+","+n.toFixed(3)+m,b+=d.x.toFixed(3)+","+d.y.toFixed(3),b+=_?" M "+f.x.toFixed(3)+","+f.y.toFixed(3):" L "+f.x.toFixed(3)+","+f.y.toFixed(3),b+=" A "+r.toFixed(3)+","+r.toFixed(3)+y,b+=g.x.toFixed(3)+","+g.y.toFixed(3),_||(b+=" z"),u.setAttribute("d",b),l&&this._setClipPath(u,l),a&&u.setAttribute("class",a),this._applyStyle(u,h),this._appendChild(u),u},t.prototype.drawString=function(t,e,i,n){var r=this._createText(e,t);i&&r.setAttribute("class",i),this._applyStyle(r,n),this._appendChild(r);var s,o=this._getKey(t,i,this._groupCls);return this._bbCache[o]?(s=this._bbCache[o],r.setAttribute("y",(e.y-(s.y+s.height)).toFixed(1))):(s=this._getBBox(r),r.setAttribute("y",(e.y-(s.y+s.height-e.y)).toFixed(1))),r},t.prototype.drawStringRotated=function(e,i,n,r,s,o){var a=this._createText(i,e);s&&a.setAttribute("class",s),this._applyStyle(a,o);var h=document.createElementNS(t.svgNS,"g");h.setAttribute("transform","rotate("+r.toFixed(1)+","+n.x.toFixed(1)+","+n.y.toFixed(1)+")"),h.appendChild(a),this._appendChild(h);var l=this._getBBox(a);return a.setAttribute("y",(i.y-(l.y+l.height-i.y)).toFixed(1)),a},t.prototype.measureString=function(t,e,i,n){var r=new wijmo_1.Size(0,0);if(!this._fontFamily&&!this._fontSize){var s=this._getKey(t,e,i);if(this._bbCache[s])return this._bbCache[s]}this._fontSize&&this._text.setAttribute("font-size",this._fontSize),this._fontFamily&&this._text.setAttribute("font-family",this._fontFamily),e&&this._text.setAttribute("class",e),i&&this._textGroup.setAttribute("class",i),this._applyStyle(this._text,n),this._setText(this._text,t);var o=this._getBBox(this._text);if(r.width=o.width,r.height=o.height,this._text.removeAttribute("font-size"),this._text.removeAttribute("font-family"),this._text.removeAttribute("class"),n)for(var a in n)this._text.removeAttribute(this._deCase(a));if(this._textGroup.removeAttribute("class"),this._text.textContent=null,!this._fontFamily&&!this._fontSize){var h=this._getKey(t,e,i);this._bbCache[h]={x:o.x,y:o.y+1e3,width:o.width,height:o.height}}return r},t.prototype.startGroup=function(e,i,n){void 0===n&&(n=!1);var r=document.createElementNS(t.svgNS,"g");return e&&(r.setAttribute("class",e),this._groupCls=e),i&&this._setClipPath(r,i),this._appendChild(r),n&&r.transform.baseVal.appendItem(this._svg.createSVGTransform()),this._group=r,r},t.prototype.endGroup=function(){if(this._group){var t=this._group.parentNode;t==this._svg?(this._group=null,this._groupCls=null):(this._group=t,this._groupCls=this._getClass(this._group))}},t.prototype.drawImage=function(e,i,n,r,s){var o=document.createElementNS(t.svgNS,"image");return o.setAttributeNS(t.xlinkNS,"href",e),o.setAttribute("x",i.toFixed(1)),o.setAttribute("y",n.toFixed(1)),o.setAttribute("width",r.toFixed(1)),o.setAttribute("height",s.toFixed(1)),this._appendChild(o),o},t.prototype._setClipPath=function(e,i){e.setAttribute("clip-path","url(#"+i+")"),t._isSafari&&wijmo_1.setCss(e,{"-webkit-clip-path":"url(#"+i+")"})},t.prototype._appendChild=function(t){var e=this._group;e||(e=this._svg),e.appendChild(t)},t.prototype._create=function(){this._svg=document.createElementNS(t.svgNS,"svg"),this._defs=document.createElementNS(t.svgNS,"defs"),this._svg.appendChild(this._defs),this._text=this._createText(new wijmo_1.Point(-1e3,-1e3),""),this._textGroup=document.createElementNS(t.svgNS,"g"),this._textGroup.appendChild(this._text),this._svg.appendChild(this._textGroup)},t.prototype._setText=function(t,e){var i=e?e.toString():null;if(i&&i.indexOf("tspan")>=0)try{t.textContent=null;for(var n=new DOMParser,r='<svg xmlns="http://www.w3.org/2000/svg">'+i+"</svg>",s=n.parseFromString(r,"text/xml").documentElement.firstChild;s;)t.appendChild(t.ownerDocument.importNode(s,!0)),s=s.nextSibling}catch(t){throw new Error("Error parsing XML string.")}else t.textContent=i},t.prototype._getKey=function(t,e,i){return t+(e||"")+(i||"")},t.prototype._createText=function(e,i){var n=document.createElementNS(t.svgNS,"text");return this._setText(n,i),n.setAttribute("x",e.x.toFixed(1)),n.setAttribute("y",e.y.toFixed(1)),null!=this._textFill&&n.setAttribute("fill",this._textFill),this._fontSize&&n.setAttribute("font-size",this._fontSize),this._fontFamily&&n.setAttribute("font-family",this._fontFamily),n},t.prototype._applyStyle=function(t,e){if(e)for(var i in e)"fill"===i||"stroke"===i?this._applyColor(t,i,e[i]):t.setAttribute(this._deCase(i),e[i])},t.prototype._deCase=function(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})},t.prototype._getClass=function(t){var e;if(t)for(var i=t;i&&!(e=i.getAttribute("class"));i=i.parentNode);return e},t.prototype._getBBox=function(e){if(!t._isff)return e.getBBox();try{return e.getBBox()}catch(t){return{x:0,y:0,width:0,height:0}}},t.prototype._applyColor=function(e,i,n){var r=_GradientColorUtil.tryParse(n);if(null!=r)if(wijmo_1.isString(r))e.setAttribute(i,r);else{if(null==this._savedGradient[n]){var s,o="gc"+(1e6*Math.random()).toFixed();null!=r.x1?(s=document.createElementNS(t.svgNS,"linearGradient"),["x1","y1","x2","y2","gradientUnits"].forEach(function(t){null!=r[t]&&s.setAttribute(t,r[t])})):null!=r.r&&(s=document.createElementNS(t.svgNS,"radialGradient"),["cx","cy","r","fx","fy","fr","gradientUnits"].forEach(function(t){null!=r[t]&&s.setAttribute(t,r[t])})),r.colors&&r.colors&&r.colors.length>0&&r.colors.forEach(function(e){var i=document.createElementNS(t.svgNS,"stop");null!=e.color&&i.setAttribute("stop-color",e.color),null!=e.offset&&i.setAttribute("offset",e.offset),null!=e.opacity&&i.setAttribute("stop-opacity",e.opacity),s.appendChild(i)}),s.setAttribute("id",o),this._defs.appendChild(s),this._savedGradient[n]=o}e.setAttribute(i,"url("+this._baseUrl+"#"+this._savedGradient[n]+")")}},t.svgNS="http://www.w3.org/2000/svg",t.xlinkNS="http://www.w3.org/1999/xlink",t}();exports._SvgRenderEngine=_SvgRenderEngine;var _GradientColorUtil=function(){function t(){}return t.tryParse=function(e){if(t.parsedColor[e])return t.parsedColor[e];if(null==e||-1===e.indexOf("-"))return e;var i,n=e.replace(/\s+/g,"").split(/\-/g),r=n[0][0],s=!1,o=n[0].match(/\(\S+\)/)[0].replace(/[\(\\)]/g,"").split(/\,/g);"l"===r||"L"===r?(i={x1:"0",y1:"0",x2:"0",y2:"0",colors:[]},"l"===r&&(s=!0),["x1","y1","x2","y2"].forEach(function(t,e){null!=o[e]&&(i[t]=s?100*+o[e]+"%":o[e]+"")})):"r"!==r&&"R"!==r||(i={cx:"0",cy:"0",r:"0",colors:[]},"r"===r&&(s=!0),["cx","cy","r","fx","fy","fr"].forEach(function(t,e){null!=o[e]&&""!==o[e]&&(i[t]=s?100*+o[e]+"%":o[e]+"")})),s||(i.gradientUnits="userSpaceOnUse"),t.parsedColor[e]=i;var a=n.length-1;return n.forEach(function(t,e){t.indexOf(")")>-1&&(t=t.match(/\)\S+/)[0].replace(")",""));var n=t.split(":"),r={color:"black"};null!=n[0]&&(r.color=n[0]),null!=n[1]?r.offset=s?100*+n[1]+"%":n[1]+"":r.offset=e/a*100+"%",null!=n[2]&&(r.opacity=n[2]),i.colors.push(r)}),i},t.parsedColor={},t}(),PlotArea=function(){function t(t){this._row=0,this._col=0,this._rect=new wijmo_1.Rect(0,0,0,0),t&&wijmo_1.copy(this,t)}return Object.defineProperty(t.prototype,"row",{get:function(){return this._row},set:function(t){t!=this._row&&(this._row=wijmo_1.asInt(t,!0,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"column",{get:function(){return this._col},set:function(t){t!=this._col&&(this._col=wijmo_1.asInt(t,!0,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this._name},set:function(t){t!=this._name&&(this._name=wijmo_1.asString(t,!0))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this._width},set:function(t){t!=this._width&&(this._width=t,this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},set:function(t){t!=this._height&&(this._height=t,this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"style",{get:function(){return this._style},set:function(t){t!=this._style&&(this._style=t,this._invalidate())},enumerable:!0,configurable:!0}),t.prototype._invalidate=function(){this._chart&&this._chart.invalidate()},t.prototype._render=function(t){t.drawRect(this._rect.left,this._rect.top,this._rect.width,this._rect.height,null,this.style)},t.prototype._setPlotX=function(t,e){this._rect.left=t,this._rect.width=e},t.prototype._setPlotY=function(t,e){this._rect.top=t,this._rect.height=e},t}();exports.PlotArea=PlotArea;var _GridUnitType,PlotAreaCollection=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.getPlotArea=function(t){var e=this.indexOf(t);return e>-1?this[e]:null},e.prototype.indexOf=function(t){for(var e=0;e<this.length;e++)if(this[e].name==t)return e;return-1},e.prototype._getWidth=function(t){for(var e=0;e<this.length;e++){var i=this[e];if(i.column==t&&0==i.row)return i.width}},e.prototype._getHeight=function(t){for(var e=0;e<this.length;e++){var i=this[e];if(i.row==t&&0==i.column)return i.height}},e.prototype._calculateWidths=function(t,e){if(e<=0)throw"ncols";for(var i=[],n=0;n<e;n++){var r=this._getWidth(n);i[n]=new _GridLength(r)}return this._calculateLengths(t,e,i)},e.prototype._calculateHeights=function(t,e){if(e<=0)throw"nrows";for(var i=[],n=0;n<e;n++){var r=this._getHeight(n);i[n]=new _GridLength(r)}return this._calculateLengths(t,e,i)},e.prototype._calculateLengths=function(t,e,i){for(var n=[e],r=0,s=0,o=0;o<e;o++)i[o].isAbsolute?(n[o]=i[o].value,r+=n[o]):i[o].isStar?s+=i[o].value:i[o].isAuto&&s++;var a=(t-r)/s;for(o=0;o<e;o++)i[o].isStar?n[o]=a*i[o].value:i[o].isAuto&&(n[o]=a),n[o]<0&&(n[o]=0);return n},e}(wijmo_1.ObservableArray);exports.PlotAreaCollection=PlotAreaCollection,function(t){t[t.Auto=0]="Auto",t[t.Pixel=1]="Pixel",t[t.Star=2]="Star"}(_GridUnitType||(_GridUnitType={}));var _GridLength=function(){function t(t){void 0===t&&(t=null),this._unitType=_GridUnitType.Auto,t&&((t=t.toString()).indexOf("*")>=0?(this._unitType=_GridUnitType.Star,t=t.replace("*",""),this._value=parseFloat(t),isNaN(this._value)&&(this._value=1)):(this._unitType=_GridUnitType.Pixel,this._value=parseFloat(t),isNaN(this._value)&&(this._unitType=_GridUnitType.Auto,this._value=1)))}return Object.defineProperty(t.prototype,"value",{get:function(){return this._value},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isStar",{get:function(){return this._unitType==_GridUnitType.Star},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isAbsolute",{get:function(){return this._unitType==_GridUnitType.Pixel},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isAuto",{get:function(){return this._unitType==_GridUnitType.Auto},enumerable:!0,configurable:!0}),t}(),Legend=function(){function t(t){this._position=Position.Right,this._title="",this._titleAlign="left",this._titlePadding=5,this._areas=new Array,this._sz=new wijmo_1.Size,this._colRowLens=[],this._chart=t}return Object.defineProperty(t.prototype,"position",{get:function(){return this._position},set:function(t){(t=wijmo_1.asEnum(t,Position))!=this._position&&(this._position=t,this._chart&&this._chart.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"title",{get:function(){return this._title},set:function(t){t!=this._title&&(this._title=wijmo_1.asString(t,!1),this._chart&&this._chart.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"titleAlign",{get:function(){return this._titleAlign},set:function(t){if(t!=this._titleAlign){var e=wijmo_1.asString(t,!1);this._titleAlign="right"===e?"right":"center"===e?"center":"left",this._chart&&this._chart.invalidate()}},enumerable:!0,configurable:!0}),t.prototype._getDesiredSize=function(t,e,i,n){if(e==Position.None)return null;var r=e==Position.Right||e==Position.Left,s=this._chart._getDesiredLegendSize(t,r,i,n);if(null!=s){if(this.title.length>0){var o=t.measureString(this.title,"wj-title","wj-legend");s.height+=o.height+this._titlePadding,o.width>s.width&&(s.width=o.width)}this._sz=s}return s},t.prototype._getPosition=function(t,e){return this.position==Position.Auto?t>=e?Position.Right:Position.Bottom:this.position},t.prototype._render=function(t,e,i,n,r){this._areas=[];var s=i==Position.Right||i==Position.Left;if(t.fill="transparent",t.stroke=null,t.drawRect(e.x,e.y,this._sz.width,this._sz.height),this.title.length){var o=t.drawString(this.title,e,"wj-title"),a=o.getBBox();o.setAttribute("y",Number(o.getAttribute("y"))+a.height),"right"===this.titleAlign?o.setAttribute("x",e.x+n-a.width):"center"===this.titleAlign&&o.setAttribute("x",e.x+n/2-a.width/2);var h=a.height+this._titlePadding;e.y+=h,r-=h}this._chart._renderLegend(t,e,this._areas,s,n,r)},t.prototype._hitTest=function(t){for(var e=this._areas,i=0;i<e.length;i++)if(e[i]&&FlexChartBase._contains(e[i],t))return i;return null},t}();exports.Legend=Legend;var DataPoint=function(){return function(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.x=t,this.y=e}}();exports.DataPoint=DataPoint;var RenderEventArgs=function(t){function e(e){var i=t.call(this)||this;return i._engine=e,i}return __extends(e,t),Object.defineProperty(e.prototype,"engine",{get:function(){return this._engine},enumerable:!0,configurable:!0}),e}(wijmo_1.CancelEventArgs);exports.RenderEventArgs=RenderEventArgs;var ImageFormat,SelectionMode,Position,SeriesRenderingEventArgs=function(t){function e(e,i,n){var r=t.call(this,e)||this;return r._index=i,r._count=n,r}return __extends(e,t),Object.defineProperty(e.prototype,"index",{get:function(){return this._index},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"count",{get:function(){return this._count},enumerable:!0,configurable:!0}),e}(RenderEventArgs);exports.SeriesRenderingEventArgs=SeriesRenderingEventArgs,function(t){t[t.Png=0]="Png",t[t.Jpeg=1]="Jpeg",t[t.Svg=2]="Svg"}(ImageFormat=exports.ImageFormat||(exports.ImageFormat={})),function(t){t[t.None=0]="None",t[t.Series=1]="Series",t[t.Point=2]="Point"}(SelectionMode=exports.SelectionMode||(exports.SelectionMode={})),function(t){t[t.None=0]="None",t[t.Left=1]="Left",t[t.Top=2]="Top",t[t.Right=3]="Right",t[t.Bottom=4]="Bottom",t[t.Auto=5]="Auto"}(Position=exports.Position||(exports.Position={}));var FlexChartBase=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._palette=null,e._selectionMode=SelectionMode.None,e._defPalette=Palettes.standard,e._notifyCurrentChanged=!0,e._legendHost=null,e._needBind=!1,e.rendering=new wijmo_1.Event,e.rendered=new wijmo_1.Event,e.itemsSourceChanging=new wijmo_1.Event,e.itemsSourceChanged=new wijmo_1.Event,e.selectionChanged=new wijmo_1.Event,e}return __extends(e,t),Object.defineProperty(e.prototype,"itemsSource",{get:function(){return this._items},set:function(t){if(this._items!=t){var e=new wijmo_1.CancelEventArgs;if(!this.onItemsSourceChanging(e))return;this._cv&&(this._cv.currentChanged.removeHandler(this._cvCurrentChanged,this),this._cv.collectionChanged.removeHandler(this._cvCollectionChanged,this),this._cv=null),this._items=t,this._cv=wijmo_1.asCollectionView(t),null!=this._cv&&(this._cv.currentChanged.addHandler(this._cvCurrentChanged,this),this._cv.collectionChanged.addHandler(this._cvCollectionChanged,this)),this._clearCachedValues(),this.onItemsSourceChanged(e),this._bindChart()}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"collectionView",{get:function(){return this._cv},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"palette",{get:function(){return this._palette},set:function(t){t!=this._palette&&(this._palette=wijmo_1.asArray(t),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"plotMargin",{get:function(){return this._plotMargin},set:function(t){t!=this._plotMargin&&(this._plotMargin=t,this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"legend",{get:function(){return this._legend},set:function(t){t!=this._legend&&(this._legend=wijmo_1.asType(t,Legend),null!=this._legend&&(this._legend._chart=this))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"header",{get:function(){return this._header},set:function(t){t!=this._header&&(this._header=wijmo_1.asString(t,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"footer",{get:function(){return this._footer},set:function(t){t!=this._footer&&(this._footer=wijmo_1.asString(t,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"headerStyle",{get:function(){return this._headerStyle},set:function(t){t!=this._headerStyle&&(this._headerStyle=t,this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"footerStyle",{get:function(){return this._footerStyle},set:function(t){t!=this._footerStyle&&(this._footerStyle=t,this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectionMode",{get:function(){return this._selectionMode},set:function(t){(t=wijmo_1.asEnum(t,SelectionMode))!=this._selectionMode&&(this._selectionMode=t,this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"itemFormatter",{get:function(){return this._itemFormatter},set:function(t){t!=this._itemFormatter&&(this._itemFormatter=wijmo_1.asFunction(t),this.invalidate())},enumerable:!0,configurable:!0}),e.prototype.onRendering=function(t){this.rendering.raise(this,t)},e.prototype.onRendered=function(t){this.rendered.raise(this,t)},e.prototype.onItemsSourceChanging=function(t){return this.itemsSourceChanging.raise(this,t),!t.cancel},e.prototype.onItemsSourceChanged=function(t){this.itemsSourceChanged.raise(this,t)},e.prototype.saveImageToFile=function(t){var e,i,n,r;t&&0!==t.length&&-1!==t.indexOf(".")||(t="image.png"),r=t.split("."),e=r[0],i=r[1].toLowerCase(),n=ImageFormat[i[0].toUpperCase()+i.substring(1)],this.saveImageToDataUrl(n,function(t){ExportHelper.downloadImage(t,e,i)})},e.prototype.saveImageToDataUrl=function(t,e){var i=wijmo_1.asEnum(t,ImageFormat,!1),n=ImageFormat[i].toLowerCase();n&&n.length&&this._exportToImage(n,function(t){e.call(e,t)})},e.prototype._exportToImage=function(t,e){var i,n=new Image,r=this._currentRenderEngine.element;i=ExportHelper.getDataUri(r),"svg"===t?e.call(null,i):(n.onload=function(){var i,s=document.createElement("canvas"),o=r.parentNode||r,a=wijmo_1.getElementRect(o);s.width=a.width,s.height=a.height;var h=s.getContext("2d");h.fillStyle="#ffffff",h.fillRect(0,0,a.width,a.height);var l=window.getComputedStyle(o,null).getPropertyValue("padding-left").replace("px",""),_=window.getComputedStyle(o,null).getPropertyValue("padding-top").replace("px","");h.drawImage(n,+l||0,+_||0),i=s.toDataURL("image/"+t),e.call(null,i),s=null},n.src=i)},e.prototype.refresh=function(e){void 0===e&&(e=!0),t.prototype.refresh.call(this,e),this.isUpdating||this._refreshChart()},e.prototype.onSelectionChanged=function(t){this.selectionChanged.raise(this,t)},e.prototype.onLostFocus=function(e){this._tooltip&&this._tooltip.isVisible&&this._tooltip.hide(),t.prototype.onLostFocus.call(this,e)},e.prototype._cvCollectionChanged=function(t,e){this._clearCachedValues(),this._bindChart()},e.prototype._cvCurrentChanged=function(t,e){this._notifyCurrentChanged&&this._bindChart()},e.prototype._getColor=function(t){var e=this._defPalette;return null!=this._palette&&this._palette.length>0&&(e=this._palette),e[t%e.length]},e.prototype._getColorLight=function(t){var e=this._getColor(t);return this._getLightColor(e)},e.prototype._getLightColor=function(t){var e=new wijmo_1.Color(t);return null!=e&&-1===t.indexOf("-")&&(1==e.a&&-1==t.indexOf("rgba")&&(e.a*=.7),t=e.toString()),t},e.prototype._bindChart=function(){this._needBind=!0,this.invalidate()},e.prototype._clearCachedValues=function(){},e.prototype._render=function(t,i){void 0===i&&(i=!0);this.hostElement;var n=this._getHostSize(),r=n.width,s=n.height;if(0!=r){if(isNaN(r)&&(r=e._WIDTH),(0==s||isNaN(s))&&(s=e._HEIGHT),t.beginRender(),r>0&&s>0){t.setViewportSize(r,s),this._rectChart=new wijmo_1.Rect(0,0,r,s),this._prepareRender();var o=new wijmo_1.Rect(0,0,r,s);this._chartRectId="chartRect"+(1e6*Math.random()).toFixed(),t.addClipRect(o,this._chartRectId),this._renderHeader(t,o),this._renderFooter(t,o),this._renderLegends(t,o),this._renderChart(t,o,i)}t.endRender()}},e.prototype._renderHeader=function(t,i){t.startGroup(e._CSS_HEADER,this._chartRectId),i=this._drawTitle(t,i,this.header,this.headerStyle,!1),t.endGroup()},e.prototype._renderFooter=function(t,i){t.startGroup(e._CSS_FOOTER,this._chartRectId),i=this._drawTitle(t,i,this.footer,this.footerStyle,!0),t.endGroup()},e.prototype._renderLegends=function(t,i){var n,r,s=this.legend,o=i.width,a=i.height,h=s._getPosition(o,a);switch(n=s._getDesiredSize(t,h,o,a),h){case Position.Right:o-=n.width,r=new wijmo_1.Point(o,i.top+.5*(a-n.height));break;case Position.Left:i.left+=n.width,o-=n.width,r=new wijmo_1.Point(0,i.top+.5*(a-n.height));break;case Position.Top:a-=n.height,r=new wijmo_1.Point(.5*(o-n.width),i.top),i.top+=n.height;break;case Position.Bottom:a-=n.height,r=new wijmo_1.Point(.5*(o-n.width),i.top+a)}i.width=o,i.height=a,n?(this._legendHost=t.startGroup(e._CSS_LEGEND,this._chartRectId),this._rectLegend=new wijmo_1.Rect(r.x,r.y,n.width,n.height),this.legend._render(t,r,h,n.width,n.height),t.endGroup()):(this._legendHost=null,this._rectLegend=null)},e.prototype._prepareRender=function(){},e.prototype._renderChart=function(t,e,i){},e.prototype._performBind=function(){},e.prototype._getDesiredLegendSize=function(t,e,i,n){return null},e.prototype._renderLegend=function(t,e,i,n,r,s){},e.prototype._getHitTestItem=function(t){return null},e.prototype._getHitTestValue=function(t,e){return null},e.prototype._getHitTestLabel=function(t){return null},e.prototype._refreshChart=function(){this._needBind&&(this._needBind=!1,this._performBind()),this.hostElement&&this._render(this._currentRenderEngine)},e.prototype._drawTitle=function(t,i,n,r,s){var o=e._CSS_TITLE,a=s?e._CSS_FOOTER:e._CSS_HEADER,h=null;if(s?this._rectFooter=null:this._rectHeader=null,null!=n){var l=null,_=null,u=null,c=null;r&&(r.fontSize&&(l=r.fontSize),r.foreground&&(_=r.foreground),r.fill&&(_=r.fill),r.fontFamily&&(u=r.fontFamily),r.halign&&(c=r.halign)),t.fontSize=l,t.fontFamily=u,h=t.measureString(n,o,a,r),i.height-=h.height,_||(_=e._FG),t.textFill=_,s?("left"==c?e._renderText(t,n,new wijmo_1.Point(i.left,i.bottom),0,0,o,a,r):"right"==c?e._renderText(t,n,new wijmo_1.Point(i.left+i.width,i.bottom),2,0,o,a,r):e._renderText(t,n,new wijmo_1.Point(i.left+.5*i.width,i.bottom),1,0,o,a,r),this._rectFooter=new wijmo_1.Rect(i.left,i.bottom,i.width,h.height)):(this._rectHeader=new wijmo_1.Rect(i.left,i.top,i.width,h.height),i.top+=h.height,"left"==c?e._renderText(t,n,new wijmo_1.Point(i.left,0),0,0,o,a,r):"right"==c?e._renderText(t,n,new wijmo_1.Point(i.left+i.width,0),2,0,o,a,r):e._renderText(t,n,new wijmo_1.Point(i.left+.5*i.width,0),1,0,o,a,r)),t.textFill=null,t.fontSize=null,t.fontFamily=null}return i},e.prototype.pageToControl=function(t,e){return this._toControl(t,e)},e.prototype._toControl=function(t,e){wijmo_1.isNumber(t)&&wijmo_1.isNumber(e)?t=new wijmo_1.Point(t,e):t instanceof MouseEvent&&(t=wijmo_1.mouseToPage(t)),wijmo_1.asType(t,wijmo_1.Point);var i=t.clone(),n=this._getHostOffset();i.x-=n.x,i.y-=n.y;var r=this._getHostComputedStyle();if(r){var s=parseInt(r.paddingLeft.replace("px",""));s&&!isNaN(s)&&(i.x-=s);var o=parseInt(r.paddingTop.replace("px",""));o&&!isNaN(o)&&(i.y-=o)}return i},e.prototype._highlightItems=function(t,e,i){if(i)for(var n=0;n<t.length;n++)wijmo_1.addClass(t[n],e);else for(n=0;n<t.length;n++)wijmo_1.removeClass(t[n],e)},e.prototype._parseMargin=function(t){var e={};if(wijmo_1.isNumber(t)&&!isNaN(t))e.top=e.bottom=e.left=e.right=wijmo_1.asNumber(t);else if(wijmo_1.isString(t)){var i=wijmo_1.asString(t).split(" ",4),n=NaN,r=NaN,s=NaN,o=NaN;i&&(4==i.length?(n=parseFloat(i[0]),o=parseFloat(i[1]),r=parseFloat(i[2]),s=parseFloat(i[3])):2==i.length?(n=r=parseFloat(i[0]),s=o=parseFloat(i[1])):1==i.length&&(n=r=s=o=parseFloat(i[1])),isNaN(n)||(e.top=n),isNaN(r)||(e.bottom=r),isNaN(s)||(e.left=s),isNaN(o)||(e.right=o))}return e},e.prototype._showToolTip=function(t,e){var i=this,n=this._tooltip.showDelay;i._clearTimeouts(),i.isDisabled||(n>0?i._toShow=setTimeout(function(){i._tooltip.show(i.hostElement,t,e),i._tooltip.hideDelay>0&&(i._toHide=setTimeout(function(){i._tooltip.hide()},i._tooltip.hideDelay))},n):(i._tooltip.show(i.hostElement,t,e),i._tooltip.hideDelay>0&&(i._toHide=setTimeout(function(){i._tooltip.hide()},i._tooltip.hideDelay))))},e.prototype._hideToolTip=function(){this._clearTimeouts(),this._tooltip.hide()},e.prototype._clearTimeouts=function(){this._toShow&&(clearTimeout(this._toShow),this._toShow=null),this._toHide&&(clearTimeout(this._toHide),this._toHide=null)},e.prototype._getHostOffset=function(){var t=wijmo_1.getElementRect(this.hostElement);return new wijmo_1.Point(t.left,t.top)},e.prototype._getHostSize=function(){var t=new wijmo_1.Size,e=this.hostElement,i=this._getHostComputedStyle(),n=e.offsetWidth,r=e.offsetHeight;if(i){var s=parseFloat(i.paddingLeft.replace("px","")),o=parseFloat(i.paddingRight.replace("px","")),a=parseFloat(i.paddingTop.replace("px","")),h=parseFloat(i.paddingBottom.replace("px",""));isNaN(s)||(n-=s),isNaN(o)||(n-=o),isNaN(a)||(r-=a),isNaN(h)||(r-=h);var l=parseFloat(i.borderLeftWidth.replace("px","")),_=parseFloat(i.borderRightWidth.replace("px","")),u=parseFloat(i.borderTopWidth.replace("px","")),c=parseFloat(i.borderBottomWidth.replace("px",""));isNaN(l)||(n-=l),isNaN(_)||(n-=_),isNaN(u)||(r-=u),isNaN(c)||(r-=c),t.width=n,t.height=r}return t},e.prototype._getHostComputedStyle=function(){var t=this.hostElement;return t&&t.ownerDocument&&t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(this.hostElement):null},e.prototype._find=function(t,e){for(var i=[],n=0;n<t.childElementCount;n++){var r=t.childNodes.item(n);if(e.indexOf(r.nodeName)>=0)i.push(r);else{var s=this._find(r,e);if(s.length>0)for(var o=0;o<s.length;o++)i.push(s[o])}}return i},e._contains=function(t,e){return!(!t||!e)&&(e.x>=t.left&&e.x<=t.right&&e.y>=t.top&&e.y<=t.bottom)},e._intersects=function(t,e){return!(t.left>e.right||t.right<e.left||t.top>e.bottom||t.bottom<e.top)},e._toOADate=function(t){return t.valueOf()},e._fromOADate=function(t){return new Date(t)},e._renderText=function(t,e,i,n,r,s,o,a,h){var l=t.measureString(e,s,o,a),_=i.x,u=i.y;switch(n){case 1:_-=.5*l.width;break;case 2:_-=l.width}switch(r){case 1:u+=.5*l.height;break;case 0:u+=l.height}var c=new wijmo_1.Rect(_,u-l.height,l.width,l.height);return h?h(c)?(t.drawString(e,new wijmo_1.Point(_,u),s,a),c):null:(t.drawString(e,new wijmo_1.Point(_,u),s,a),c)},e._renderRotatedText=function(t,e,i,n,r,s,o,a,h,l){var _=t.measureString(e,a,h,l),u=i.x,c=i.y;switch(n){case 1:u-=.5*_.width;break;case 2:u-=_.width}switch(r){case 1:c+=.5*_.height;break;case 0:c+=_.height}return t.drawStringRotated(e,new wijmo_1.Point(u,c),s,o,a,l)},e._WIDTH=300,e._HEIGHT=200,e._SELECTION_THRESHOLD=15,e._CSS_LEGEND="wj-legend",e._CSS_HEADER="wj-header",e._CSS_FOOTER="wj-footer",e._CSS_TITLE="wj-title",e._CSS_LABEL="wj-label",e._CSS_SELECTION="wj-state-selected",e._CSS_PLOT_AREA="wj-plot-area",e._FG="#666",e._epoch=new Date(1899,11,30).getTime(),e._msPerDay=864e5,e}(wijmo_1.Control);exports.FlexChartBase=FlexChartBase;var _KeyWords=function(){function t(){this._keys={},this._keys.seriesName=null,this._keys.pointIndex=null,this._keys.x=null,this._keys.y=null,this._keys.value=null,this._keys.name=null}return t.prototype.replace=function(t,e){var i=this;return wijmo_1.format(t,{},function(t,n,r,s){return i.getValue(n,e,r)})},t.prototype.getValue=function(t,e,i){switch(t){case"seriesName":return e.series?e.series.name:"";case"pointIndex":return null!=e.pointIndex?e.pointIndex.toFixed():"";case"x":return i?wijmo_1.Globalize.format(e.x,i):e._xfmt;case"y":return i?wijmo_1.Globalize.format(e.y,i):e._yfmt;case"value":return i?wijmo_1.Globalize.format(e.value,i):e.value;case"name":return e.name}return e.item&&(0==t.indexOf("item.")&&(t=t.substr(5)),t in e.item)?i?wijmo_1.Globalize.format(e.item[t],i):e.item[t]:""},t}();exports._KeyWords=_KeyWords;var LabelPosition,PieLabelPosition,ExportHelper=function(){function t(){}return t.downloadImage=function(t,e,i){var n=document.createElement("a"),r="image/"+i;if(navigator.msSaveOrOpenBlob){t=t.substring(t.indexOf(",")+1);var s,o,a,h=atob(t),l=[];for(s=0;s<h.length;s+=512){o=h.slice(s,s+512);for(var _=new Array(o.length),u=0;u<o.length;u++)_[u]=o.charCodeAt(u);var c=new Uint8Array(_);l.push(c)}a=new Blob(l,{type:r}),navigator.msSaveOrOpenBlob(a,e+"."+i)}else n.download=e+"."+i,n.href=t,document.body.appendChild(n),n.addEventListener("click",function(t){wijmo_1.removeChild(n)}),n.click()},t.getDataUri=function(e){var i,n,r,s,o,a,h,l,_,u,c=document.createElement("div"),p=e.cloneNode(!0);return"svg"==e.tagName?(n=(i=wijmo_1.getElementRect(e.parentNode||e)).width||0,r=i.height||0,s=e.viewBox.baseVal&&0!==e.viewBox.baseVal.width?e.viewBox.baseVal.width:n,o=e.viewBox.baseVal&&0!==e.viewBox.baseVal.height?e.viewBox.baseVal.height:r):(n=(a=e.getBBox()).x+a.width,r=a.y+a.height,p.setAttribute("transform",p.getAttribute("transform").replace(/translate\(.*?\)/,"")),s=n,o=r,(l=document.createElementNS("http://www.w3.org/2000/svg","svg")).appendChild(p),p=l),p.setAttribute("version","1.1"),p.setAttributeNS(t.xmlns,"xmlns","http://www.w3.org/2000/svg"),p.setAttributeNS(t.xmlns,"xmlns:xlink","http://www.w3.org/1999/xlink"),p.setAttribute("width",n),p.setAttribute("height",r),p.setAttribute("viewBox","0 0 "+s+" "+o),wijmo_1.addClass(p,e.parentNode&&e.parentNode.getAttribute("class")||""),c.appendChild(p),h=t.getStyles(e),(_=document.createElement("style")).setAttribute("type","text/css"),_.innerHTML="<![CDATA[\n"+h+"\n]]>",(u=document.createElement("defs")).appendChild(_),p.insertBefore(u,p.firstChild),"data:image/svg+xml;base64,"+window.btoa(window.unescape(encodeURIComponent(t.doctype+c.innerHTML)))},t.getStyles=function(t){var e="",i=document.styleSheets;return null==i||0===i.length?null:([].forEach.call(i,function(i){var n;try{if(null==i.cssRules||0===i.cssRules.length)return!0}catch(t){if("SecurityError"==t.name)return console.log("SecurityError. Can't read: "+i.href),!0}n=i.cssRules,[].forEach.call(n,function(i){var n,r=i.style;if(null==r)return!0;try{n=t.querySelector(i.selectorText)}catch(t){console.warn('Invalid CSS selector "'+i.selectorText+'"',t)}n?e+=i.selectorText+" { "+r.cssText+" }\n":i.cssText.match(/^@font-face/)&&(e+=i.cssText+"\n")})}),e)},t.doctype='<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">',t.xmlns="http://www.w3.org/2000/xmlns/",t}(),ChartTooltip=function(t){function e(){var e=t.call(this)||this;return e._content="<b>{seriesName}</b><br/>{x} {y}",e._threshold=15,e}return __extends(e,t),Object.defineProperty(e.prototype,"content",{get:function(){return this._content},set:function(t){t!=this._content&&(this._content=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"threshold",{get:function(){return this._threshold},set:function(t){t!=this._threshold&&(this._threshold=wijmo_1.asNumber(t))},enumerable:!0,configurable:!0}),e}(wijmo_1.Tooltip);exports.ChartTooltip=ChartTooltip,function(t){t[t.None=0]="None",t[t.Left=1]="Left",t[t.Top=2]="Top",t[t.Right=3]="Right",t[t.Bottom=4]="Bottom",t[t.Center=5]="Center"}(LabelPosition=exports.LabelPosition||(exports.LabelPosition={})),function(t){t[t.None=0]="None",t[t.Inside=1]="Inside",t[t.Center=2]="Center",t[t.Outside=3]="Outside",t[t.Radial=4]="Radial",t[t.Circular=5]="Circular"}(PieLabelPosition=exports.PieLabelPosition||(exports.PieLabelPosition={}));var DataLabelRenderEventArgs=function(t){function e(e,i,n,r){var s=t.call(this,e)||this;return s.cancel=!1,s._ht=i,s._pt=n,s._text=r,s}return __extends(e,t),Object.defineProperty(e.prototype,"point",{get:function(){return this._pt},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){this._text=wijmo_1.asString(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hitTestInfo",{get:function(){return this._ht},enumerable:!0,configurable:!0}),e}(RenderEventArgs);exports.DataLabelRenderEventArgs=DataLabelRenderEventArgs;var DataLabelBase=function(){function t(){this.rendering=new wijmo_1.Event}return Object.defineProperty(t.prototype,"content",{get:function(){return this._content},set:function(t){t!=this._content&&(this._content=t,this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"border",{get:function(){return this._bdr},set:function(t){t!=this._bdr&&(this._bdr=wijmo_1.asBoolean(t,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"offset",{get:function(){return this._off},set:function(t){t!=this._off&&(this._off=wijmo_1.asNumber(t,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"connectingLine",{get:function(){return this._line},set:function(t){t!=this._line&&(this._line=wijmo_1.asBoolean(t,!0),this._invalidate())},enumerable:!0,configurable:!0}),t.prototype.onRendering=function(t){return this.rendering.raise(this,t),!t.cancel},t.prototype._invalidate=function(){this._chart&&this._chart.invalidate()},t}();exports.DataLabelBase=DataLabelBase;var DataLabel=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._pos=LabelPosition.Top,e}return __extends(e,t),Object.defineProperty(e.prototype,"position",{get:function(){return this._pos},set:function(t){(t=wijmo_1.asEnum(t,LabelPosition))!=this._pos&&(this._pos=t,this._invalidate())},enumerable:!0,configurable:!0}),e}(DataLabelBase);exports.DataLabel=DataLabel;var AxisType,OverlappingLabels,TickMark,PieDataLabel=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._pos=PieLabelPosition.Center,e}return __extends(e,t),Object.defineProperty(e.prototype,"position",{get:function(){return this._pos},set:function(t){(t=wijmo_1.asEnum(t,PieLabelPosition))!=this._pos&&(this._pos=t,this._invalidate())},enumerable:!0,configurable:!0}),e}(DataLabelBase);exports.PieDataLabel=PieDataLabel,function(t){t[t.X=0]="X",t[t.Y=1]="Y"}(AxisType=exports.AxisType||(exports.AxisType={})),function(t){t[t.Auto=0]="Auto",t[t.Show=1]="Show"}(OverlappingLabels=exports.OverlappingLabels||(exports.OverlappingLabels={})),function(t){t[t.None=0]="None",t[t.Outside=1]="Outside",t[t.Inside=2]="Inside",t[t.Cross=3]="Cross"}(TickMark=exports.TickMark||(exports.TickMark={}));var Axis=function(){function t(e){this._GRIDLINE_WIDTH=1,this._LINE_WIDTH=1,this._TICK_WIDTH=1,this._TICK_HEIGHT=4,this._TICK_OVERLAP=1,this._TICK_LABEL_DISTANCE=4,this._minorGrid=!1,this._labels=!0,this._axisLine=!0,this._isTimeAxis=!1,this._labelPadding=5,this.rangeChanged=new wijmo_1.Event,this._customConvert=null,this._customConvertBack=null,this.__uniqueId=t._id++,this._position=e,e==Position.Bottom||e==Position.Top?this._axisType=AxisType.X:(this._axisType=AxisType.Y,this._axisLine=!1),this._minorTickMarks=TickMark.None,this._overlap=OverlappingLabels.Auto}return Object.defineProperty(t.prototype,"hostElement",{get:function(){return this._hostElement},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"actualMin",{get:function(){return this._isTimeAxis?new Date(this._actualMin):this._actualMin},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"actualMax",{get:function(){return this._isTimeAxis?new Date(this._actualMax):this._actualMax},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"min",{get:function(){return this._min},set:function(t){t!=this._min&&(wijmo_1.isDate(t)?this._min=wijmo_1.asDate(t,!0):this._min=wijmo_1.asNumber(t,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"max",{get:function(){return this._max},set:function(t){t!=this._max&&(wijmo_1.isDate(t)?this._max=wijmo_1.asDate(t,!0):this._max=wijmo_1.asNumber(t,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"reversed",{get:function(){return this._reversed},set:function(t){this._reversed!=t&&(this._reversed=wijmo_1.asBoolean(t),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"position",{get:function(){return this._position},set:function(t){(t=wijmo_1.asEnum(t,Position,!1))!=this._position&&(this._position=t,this._position==Position.Bottom||this._position==Position.Top?this._axisType=AxisType.X:this._position!=Position.Left&&this._position!=Position.Right||(this._axisType=AxisType.Y),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"majorUnit",{get:function(){return this._majorUnit},set:function(t){t!=this._majorUnit&&(this._majorUnit=wijmo_1.asNumber(t,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"minorUnit",{get:function(){return this._minorUnit},set:function(t){t!=this._minorUnit&&(this._minorUnit=wijmo_1.asNumber(t,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this._name},set:function(t){t!=this._name&&(this._name=wijmo_1.asString(t,!0))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"title",{get:function(){return this._title},set:function(t){t!=this._title&&(this._title=wijmo_1.asString(t,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"format",{get:function(){return this._format},set:function(t){t!=this._format&&(this._format=wijmo_1.asString(t,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"majorGrid",{get:function(){return this._majorGrid},set:function(t){t!=this._majorGrid&&(this._majorGrid=wijmo_1.asBoolean(t,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"majorTickMarks",{get:function(){return this._majorTickMarks},set:function(t){(t=wijmo_1.asEnum(t,TickMark,!0))!=this._majorTickMarks&&(this._majorTickMarks=t,this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"minorGrid",{get:function(){return this._minorGrid},set:function(t){t!=this._minorGrid&&(this._minorGrid=wijmo_1.asBoolean(t,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"minorTickMarks",{get:function(){return this._minorTickMarks},set:function(t){(t=wijmo_1.asEnum(t,TickMark,!0))!=this._minorTickMarks&&(this._minorTickMarks=t,this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"axisLine",{get:function(){return this._axisLine},set:function(t){t!=this._axisLine&&(this._axisLine=wijmo_1.asBoolean(t,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labels",{get:function(){return this._labels},set:function(t){t!=this._labels&&(this._labels=wijmo_1.asBoolean(t,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelAlign",{get:function(){return this._labelAlign},set:function(t){t!=this._labelAlign&&(this._labelAlign=wijmo_1.asString(t,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelAngle",{get:function(){return this._labelAngle},set:function(t){t!=this._labelAngle&&(this._labelAngle=wijmo_1.asNumber(t,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"origin",{get:function(){return this._origin},set:function(t){t!=this._origin&&(this._origin=wijmo_1.asNumber(t,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"overlappingLabels",{get:function(){return this._overlap},set:function(t){(t=wijmo_1.asEnum(t,OverlappingLabels,!0))!=this._overlap&&(this._overlap=t,this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"itemsSource",{get:function(){return this._items},set:function(t){this._items!=t&&(this._cv&&(this._cv.collectionChanged.removeHandler(this._cvCollectionChanged,this),this._cv=null),this._items=t,this._cv=wijmo_1.asCollectionView(t),null!=this._cv&&this._cv.collectionChanged.addHandler(this._cvCollectionChanged,this))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"binding",{get:function(){return this._binding},set:function(t){t!=this._binding&&(this._binding=wijmo_1.asString(t,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"itemFormatter",{get:function(){return this._ifmt},set:function(t){this._ifmt!=t&&(this._ifmt=wijmo_1.asFunction(t,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"logBase",{get:function(){return this._logBase},set:function(t){t!=this._logBase&&(this._logBase=wijmo_1.asNumber(t,!0,!0),this._invalidate())},enumerable:!0,configurable:!0}),t.prototype._getLogBase=function(){return this._chart&&this._chart._stacking===Stacking.Stacked100pc?0:this.logBase},t.prototype._isLogAxis=function(){var t=this._getLogBase();return null!=t&&t>0},Object.defineProperty(t.prototype,"plotArea",{get:function(){return this._parea},set:function(t){t!=this._parea&&(this._parea=wijmo_1.asType(t,PlotArea,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelPadding",{get:function(){return this._labelPadding},set:function(t){t!=this._labelPadding&&(this._labelPadding=wijmo_1.asNumber(t,!0,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_groupClass",{get:function(){return this.axisType===AxisType.X?FlexChartCore._CSS_AXIS_X:FlexChartCore._CSS_AXIS_Y},enumerable:!0,configurable:!0}),t.prototype.onRangeChanged=function(t){this.rangeChanged.raise(this,t)},t.prototype._getPosition=function(){if(this.axisType==AxisType.X){if(this.position==Position.Auto)return Position.Bottom}else if(this.axisType==AxisType.Y&&this.position==Position.Auto)return Position.Left;return this.position},t.prototype._isOverlapped=function(t,e,i,n){var r=this._lbls;if(null!=r&&r.length>1)for(var s=r.length,o=this._values&&this._values.length==s?this._values:null,a=0,h=0,l=0;l<s;l++){var _=o?o[l]:l;if(_>=this._actualMin&&_<=this._actualMax){var u=e*(_-this._actualMin)/(this._actualMax-this._actualMin),c=t.measureString(r[l],i,this._groupClass);if(this.axisType==AxisType.X){if(l>0&&Math.abs(u-a)<Math.max(c.width,h)+12)return!0;a=u,h=c.width}else this.axisType,AxisType.Y}}return!1},t.prototype._getHeight=function(t,e){this._actualAngle=null;var i=FlexChartCore._CSS_LABEL,n=FlexChartCore._CSS_TITLE,r=this._actualMax-this._actualMin,s=this._nicePrecision(r);(s<0||s>15)&&(s=0);var o=.1*r,a=this._lbls,h=this.labelAngle;if(this.labels&&this._chart._getChartType()!==ChartType.Funnel){if(o=this._updateAutoFormat(o),null!=a&&a.length>0){var l=a.length,_=this._values&&this._values.length==l?this._values:null;this._annoSize=new wijmo_1.Size;for(var u=0;u<l;u++){if((f=_?_[u]:u)>=this._actualMin&&f<=this._actualMax){var c=a[u],p=i,d=t.measureString(c,p,this._groupClass);this.axisType,AxisType.X,d.width>this._annoSize.width&&(this._annoSize.width=d.width),d.height>this._annoSize.height&&(this._annoSize.height=d.height)}}null==h&&this.axisType==AxisType.X&&(this._isOverlapped(t,e,i,this.axisType)?h=this._actualAngle=-45:this._actualAngle=0)}else{var f=this._actualMin-o;c=this._formatValue(f),p=i,d=t.measureString(c,p,this._groupClass);this._annoSize=d,f=this._actualMax+o,c=this._formatValue(f),p=i,c=this._formatValue(f),(d=t.measureString(c,p,this._groupClass)).width>this._annoSize.width&&(this._annoSize.width=d.width),d.height>this._annoSize.height&&(this._annoSize.height=d.height)}if(h){h>90?h=90:h<-90&&(h=-90);var g=h*Math.PI/180,m=this._annoSize.width,y=this._annoSize.height;this._annoSize.width=m*Math.abs(Math.cos(g))+y*Math.abs(Math.sin(g)),this._annoSize.height=m*Math.abs(Math.sin(g))+y*Math.abs(Math.cos(g))}}else this._annoSize=new wijmo_1.Size;var b=2*(this._labelPadding||5);this._axisType==AxisType.X?b+=this._annoSize.height:b+=this._annoSize.width+this._TICK_LABEL_DISTANCE+2;var v=this._TICK_HEIGHT,x=this._TICK_OVERLAP,w=this.majorTickMarks;if(w==TickMark.Outside?x=1:w==TickMark.Inside?x=-1:w==TickMark.Cross&&(x=0),null==w&&(w=TickMark.Outside),w!=TickMark.None&&(b+=.5*(1+x)*v),this._title){c=this._title;this._szTitle=t.measureString(c,n,this._groupClass),b+=this._szTitle.height}return t.fontSize=null,b},t.prototype._updateAutoFormat=function(t){if(this._isTimeAxis){var e=this.format,i=.001*this._getActualRange()/10,n=new _timeSpan(i*_timeSpan.TicksPerSecond),r=wijmo_1.isNumber(this._majorUnit)?_timeSpan.fromDays(this._majorUnit):_timeHelper.NiceTimeSpan(n,e);e||(this._tfmt=_timeHelper.GetTimeDefaultFormat(1e3*r.TotalSeconds,0)),t=r.TotalSeconds}return t},t.prototype._getActualRange=function(){return this._actualMax-this._actualMin},t.prototype._updateActualLimitsByChartType=function(t,e,i){if(t&&t.length>0&&!this._isTimeAxis){var n=this._chart._getChartType();n!=ChartType.Column&&n!=ChartType.Bar&&(e-=.5,i+=.5)}return{min:e,max:i}},t.prototype._updateActualLimits=function(t,e,i,n,r){void 0===n&&(n=null),void 0===r&&(r=null);var s=this._actualMin,o=this._actualMax;this._isTimeAxis=t==wijmo_1.DataType.Date;var a=this._updateActualLimitsByChartType(n,e,i);e=a.min,i=a.max;var h=this._min,l=this._max;if(wijmo_1.isDate(h)&&(h=h.valueOf()),wijmo_1.isDate(l)&&(l=l.valueOf()),this._actualMin=null!=h&&this._chart&&this._chart._stacking!==Stacking.Stacked100pc?h:e,this._actualMax=null!=l&&this._chart&&this._chart._stacking!==Stacking.Stacked100pc?l:i,this._actualMin==this._actualMax&&(this._actualMin-=.5,this._actualMax+=.5),this._getLogBase()>0){var _=this.logBase,u=Math.log(_);if(!this._max){var c=Math.ceil(Math.log(this._actualMax)/u);this._actualMax=Math.pow(_,c)}if(!this._min){var p=Math.floor(Math.log(this._actualMin)/u);this._actualMin=Math.pow(_,p)}(this._actualMin<=0||!wijmo_1.isNumber(this._actualMin))&&(this._actualMin=1),this._actualMax<this._actualMin&&(this._actualMax=this._actualMin+1)}if((s!=this._actualMin&&(wijmo_1.isNumber(s)||wijmo_1.isNumber(this._actualMin))||o!=this._actualMax&&(wijmo_1.isNumber(o)||wijmo_1.isNumber(this._actualMax)))&&this.onRangeChanged(),this._items){this._values=[],this._lbls=[];var d=this._items.length,f="value",g="text";if(this.binding){var m=this.binding.split(",");2==m.length&&(f=m[0],g=m[1])}for(var y=0;y<d;y++){var b=this._items[y],v=b[f];wijmo_1.isNumber(v)?(this._values.push(v),this._lbls.push(b[g])):wijmo_1.isDate(v)&&(this._values.push(v.getTime()),this._lbls.push(b[g]))}}else this._lbls=n,this._values=r},t.prototype._layout=function(t,e){var i=this.axisType==AxisType.Y;this._plotrect=e,this._axrect=i?new wijmo_1.Rect(t.left,t.top,t.height,t.width):t},t.prototype._hasVisibileSeries=function(){for(var t,e=this._chart.series,i=0,n=e.length;i<n;i++)if((t=e[i].visibility)==SeriesVisibility.Plot||t==SeriesVisibility.Visible)return!0;return!1},t.prototype._render=function(e){if(this.position!=Position.None&&this._hasVisibileSeries()){this._vals={};var i=0;this.labelAngle&&((i=this.labelAngle)>90?i=90:i<-90&&(i=-90)),null==this.labelAngle&&null!=this._actualAngle&&(i=this._actualAngle);var n=FlexChartCore._FG,r=this._actualMax-this._actualMin;if(wijmo_1.isNumber(r)){var s=this._calcMajorUnit();0==s&&(s=.1*this._niceTickNumber(r));var o=Math.min(t.MAX_MAJOR,Math.floor(r/s)+1),a=[],h=[];this._rects=[],this._vals.major=a,this._vals.hasLbls=[];var l=Math.floor(this._actualMin/s)*s;l<this._actualMin&&(l+=s);var _=!1;if(this._lbls&&this._lbls.length>0)if(h=this._lbls,0==this._values.length){_=!0;for(var u=0;u<h.length;u++)a.push(u)}else a=this._values;else this._isTimeAxis?this._createTimeLabels(l,o,a,h):this._getLogBase()?this._createLogarithmicLabels(this._actualMin,this._actualMax,this.majorUnit,a,h,!0):this._createLabels(l,o,s,a,h);o=Math.min(a.length,h.length),e.textFill=n;var c=this._TICK_HEIGHT,p=this._TICK_OVERLAP,d=this.majorTickMarks;null==d&&(d=TickMark.Outside),d==TickMark.Outside?p=1:d==TickMark.Inside?p=-1:d==TickMark.Cross&&(p=0);var f=.5*(p-1)*c,g=.5*(1+p)*c;for(u=0;u<o;u++){var m=!0,y=a[u],b=h[u],v=this.labels;if(v&&(_||this.itemsSource)&&this.majorUnit&&u%this.majorUnit!=0&&(v=!1),y>=this._actualMin&&y<=this._actualMax){var x=e.textFill;m=this._renderLabelsAndTicks(e,u,y,b,i,d,v,f,g),e.textFill=x}this._vals.hasLbls.push(m)}}(this.minorGrid||this.minorTickMarks!=TickMark.None)&&this._renderMinor(e,a,_),e.stroke=n,e.fontSize=null,this._renderLineAndTitle(e),e.stroke=null,e.fontSize=null,e.textFill=null,e.strokeWidth=null}},t.prototype._renderLineAndTitle=function(t){var e=this._getPosition(),i=this.axisType==AxisType.Y,n=e!=Position.Top&&e!=Position.Right,r=FlexChartCore._CSS_TITLE,s=FlexChartCore._CSS_LINE;if(i)if(n){if(this._title){var o=new wijmo_1.Point(this._axrect.left+.5*this._szTitle.height,this._axrect.top+.5*this._axrect.height);FlexChartCore._renderRotatedText(t,this._title,o,1,1,o,-90,r,this._groupClass)}this.axisLine&&t.drawLine(this._axrect.right,this._axrect.top,this._axrect.right,this._axrect.bottom,s)}else{if(this._title){o=new wijmo_1.Point(this._axrect.right-.5*this._szTitle.height,this._axrect.top+.5*this._axrect.height);FlexChartCore._renderRotatedText(t,this._title,o,1,1,o,90,r,this._groupClass)}this.axisLine&&t.drawLine(this._axrect.left,this._axrect.top,this._axrect.left,this._axrect.bottom,s)}else n?(this.axisLine&&t.drawLine(this._axrect.left,this._axrect.top,this._axrect.right,this._axrect.top,s),this._title&&FlexChartCore._renderText(t,this._title,new wijmo_1.Point(this._axrect.left+.5*this._axrect.width,this._axrect.bottom),1,2,r)):(this.axisLine&&t.drawLine(this._axrect.left,this._axrect.bottom,this._axrect.right,this._axrect.bottom,s),this._title&&FlexChartCore._renderText(t,this._title,new wijmo_1.Point(this._axrect.left+.5*this._axrect.width,this._axrect.top),1,0,r))},t.prototype._renderMinor=function(t,e,i){var n=this._getPosition(),r=this.axisType==AxisType.Y,s=n!=Position.Top&&n!=Position.Right;if(this._getLogBase()){if(this.minorUnit>0){var o=[];this._createLogarithmicLabels(this._actualMin,this._actualMax,this.minorUnit,o,null,!1);for(var a=[],h=0;h<o.length;h++){var l=o[h];-1==e.indexOf(l)&&l>this._actualMin&&a.push(l)}this._renderMinors(t,a,r,s)}}else this._createMinors(t,e,r,s,i)},t.prototype._renderRotatedText=function(t,e,i,n,r,s,o,a,h,l,_){if(this.itemFormatter){var u=this._getFormattedItem(t,e,i,n,h);u?(i=u.text,h=u.cls):i=null}FlexChartCore._renderRotatedText(t,i,n,r,s,o,a,h,l,_)},t.prototype._getFormattedItem=function(t,e,i,n,r){if(this.itemFormatter){var s=n.clone();this._plotrect&&(this.axisType==AxisType.X?this.position==Position.Top?s.y=this._plotrect.top:s.y=this._plotrect.bottom:this.position==Position.Right?s.x=this._plotrect.right:s.x=this._plotrect.left);var o={val:e,text:i,pos:s,cls:r};return o=this.itemFormatter(t,o)}},t.prototype._renderLabelsAndTicks=function(t,e,i,n,r,s,o,a,h){var l=this._getPosition(),_=!0,u=this.axisType==AxisType.Y,c=l!=Position.Top&&l!=Position.Right,p=this.labelPadding||5,d=this._TICK_WIDTH,f=this._getLabelAlign(u),g=FlexChartCore._CSS_LABEL,m=FlexChartCore._CSS_GRIDLINE,y=FlexChartCore._CSS_TICK,b=FlexChartCore._FG,v=FlexChartCore._FG,x=this._GRIDLINE_WIDTH,w=i!=this._actualMin&&this.majorGrid;if(u){var S=this.convert(i);if(w&&(t.stroke=b,t.strokeWidth=x,t.drawLine(this._plotrect.left,S,this._plotrect.right,S,m)),_=!1,t.stroke=v,t.strokeWidth=d,c){if(o){_=!0;var P=new wijmo_1.Point(this._axrect.right-h-this._TICK_LABEL_DISTANCE-p,S);r>0?90==r?this._renderRotatedText(t,i,n,P,1,0,P,r,g,this._groupClass):this._renderRotatedText(t,i,n,P,2,1,P,r,g,this._groupClass):r<0?-90==r?this._renderRotatedText(t,i,n,P,1,2,P,r,g,this._groupClass):this._renderRotatedText(t,i,n,P,2,1,P,r,g,this._groupClass):_=this._renderLabel(t,i,n,P,2,f,g)}s!=TickMark.None&&_&&t.drawLine(this._axrect.right-a,S,this._axrect.right-h,S,y)}else{if(o){_=!0;P=new wijmo_1.Point(this._axrect.left+h+this._TICK_LABEL_DISTANCE+p,S);r>0?90==r?this._renderRotatedText(t,i,n,P,1,2,P,r,g,this._groupClass):this._renderRotatedText(t,i,n,P,0,1,P,r,g,this._groupClass):r<0?-90==r?this._renderRotatedText(t,i,n,P,1,0,P,r,g,this._groupClass):this._renderRotatedText(t,i,n,P,0,1,P,r,g,this._groupClass):_=this._renderLabel(t,i,n,P,0,f,g)}s!=TickMark.None&&_&&t.drawLine(this._axrect.left+a,S,this._axrect.left+h,S,y)}}else{var C=this.convert(i);if(this.overlappingLabels==OverlappingLabels.Auto&&this._xCross(C)&&(o=!1),w&&o&&(t.stroke=b,t.strokeWidth=x,t.drawLine(C,this._plotrect.top,C,this._plotrect.bottom,m)),t.stroke=v,t.strokeWidth=d,c){if(_=!1,o){P=new wijmo_1.Point(C,this._axrect.top+h+p);_=0!=r?this._renderRotatedLabel(t,i,n,P,f,r,g,c):this._renderLabel(t,i,n,P,f,0,g)}s!=TickMark.None&&_&&(C=this.convert(i),t.drawLine(C,this._axrect.top+a,C,this._axrect.top+h,y))}else{if(o){P=new wijmo_1.Point(C,this._axrect.bottom-h-p);_=0!=r?this._renderRotatedLabel(t,i,n,P,f,r,g,c):this._renderLabel(t,i,n,P,f,2,g)}s!=TickMark.None&&_&&(C=this.convert(i),t.drawLine(C,this._axrect.bottom-a,C,this._axrect.bottom-h,y))}}return _},t.prototype._xCross=function(t){for(var e=this._rects.length,i=0;i<e;i++){var n=this._rects[i];if(t>=n.left&&t<=n.right)return!0}return!1},t.prototype._createMinors=function(e,i,n,r,s){if(i&&i.length>1){for(var o=this.majorUnit?this._isTimeAxis?24*this.majorUnit*3600*1e3:this.majorUnit:i[1]-i[0],a=wijmo_1.isNumber(this.minorUnit)?this._isTimeAxis?24*this.minorUnit*3600*1e3:this.minorUnit:.5*o,h=[],l=i[0];l>this._actualMin&&h.length<t.MAX_MINOR;l-=a)-1==i.indexOf(l)&&h.push(l);for(l=i[0]+a;l<this._actualMax&&h.length<t.MAX_MINOR;l+=a)-1==i.indexOf(l)?h.push(l):s&&this.majorUnit&&l%this.majorUnit!=0&&h.push(l);this._renderMinors(e,h,n,r)}},t.prototype._renderMinors=function(t,e,i,n){var r=this._TICK_HEIGHT,s=this._TICK_WIDTH,o=this._TICK_OVERLAP,a=FlexChartCore._FG,h=this.minorTickMarks,l=!0;this._vals.minor=e,h==TickMark.Outside?o=1:h==TickMark.Inside?o=-1:h==TickMark.Cross?o=0:l=!1;for(var _=.5*(o-1)*r,u=.5*(1+o)*r,c=e?e.length:0,p=this.minorGrid,d=this._plotrect,f=this._GRIDLINE_WIDTH,g=FlexChartCore._FG,m=FlexChartCore._CSS_GRIDLINE_MINOR,y=FlexChartCore._CSS_TICK_MINOR,b=0;b<c;b++)if(e[b]>=this.actualMin&&e[b]<=this.actualMax)if(i){var v=this.convert(e[b]);l&&(t.stroke=a,t.strokeWidth=s,n?t.drawLine(this._axrect.right-_,v,this._axrect.right-u,v,y):t.drawLine(this._axrect.left+_,v,this._axrect.left+u,v,y)),p&&(t.stroke=g,t.strokeWidth=f,t.drawLine(d.left,v,d.right,v,m))}else{var x=this.convert(e[b]);l&&(t.stroke=a,t.strokeWidth=s,n?t.drawLine(x,this._axrect.top+_,x,this._axrect.top+u,y):t.drawLine(x,this._axrect.bottom-_,x,this._axrect.bottom-u,y)),p&&(t.stroke=g,t.strokeWidth=f,t.drawLine(x,d.top,x,d.bottom,m))}},t.prototype._renderLabel=function(t,e,i,n,r,s,o){var a=!1;if(this.itemFormatter){var h=this._getFormattedItem(t,e,i,n,o);h?(i=h.text,o=h.cls):i=null}if(i){var l=this._rects,_=this.overlappingLabels==OverlappingLabels.Auto&&!wijmo_1.isNumber(this._actualAngle),u=FlexChartCore._renderText(t,i,n,r,s,o,this._groupClass,null,function(t){if(_)for(var e=l.length,i=0;i<e;i++)if(FlexChartCore._intersects(l[i],t))return!1;return!0});u&&(u.left+=4,u.width+=8,l.push(u),a=!0)}return a},t.prototype._renderRotatedLabel=function(t,e,i,n,r,s,o,a){if(this.itemFormatter){var h=this._getFormattedItem(t,e,i,n,o);h?(i=h.text,o=h.cls):i=null}if(i){var l=t.measureString(i,o,this._groupClass),_=.5*l.height,u=.5*l.width*Math.abs(Math.sin(s*Math.PI/180)),c=.5*l.width,p=.5*(l.width*Math.abs(Math.cos(s*Math.PI/180))+l.height*Math.abs(Math.sin(s*Math.PI/180))),d=new wijmo_1.Point(n.x,n.y),f=new wijmo_1.Point(n.x,n.y);this.labelAlign||(r=90==s||-90==s?1:a?s>0?0:2:s>0?2:0),a?(n.y+=_+u,d.y+=_+u-.5*l.height):(n.y-=_+u-l.height,d.y-=_+u-.5*l.height);var g=0;2===r?(d.x-=p,n.x-=c+p,g=d.x+p-l.height-2):0===r?(d.x+=p,n.x-=c-p,g=d.x-p):(n.x-=c,g=d.x-l.height/2);var m=new wijmo_1.Rect(g,f.y,l.height+2,l.width),y=this._rects;if(this.overlappingLabels==OverlappingLabels.Auto)for(var b=y.length,v=0;v<b;v++)if(FlexChartCore._intersects(y[v],m))return!1;return FlexChartCore._renderRotatedText(t,i,n,0,2,d,s,o,this._groupClass),this._rects.push(m),!0}return!1},t.prototype._getLabelAlign=function(t){var e=1;if(this.labelAlign){var i=this.labelAlign.toLowerCase();t?"top"==i?e=0:"bottom"==i&&(e=2):"left"==i?e=0:"right"==i&&(e=2)}return e},t.prototype.convert=function(t,e,i){var n=null==e?this._actualMax:e,r=null==i?this._actualMin:i;if(n==r)return 0;var s=this._axrect.left,o=this._axrect.width,a=this._axrect.top,h=this._axrect.height;if(null!=this._customConvert){var l=this._customConvert(t,r,n);return this.axisType==AxisType.Y?a+l*h:s+l*o}if(this._getLogBase()){if(t<=0)return NaN;var _=Math.log(n/r);return this._reversed?this.axisType==AxisType.Y?a+Math.log(t/r)/_*h:s+o-Math.log(t/r)/_*o:this.axisType==AxisType.Y?a+h-Math.log(t/r)/_*h:s+Math.log(t/r)/_*o}return this._reversed?this.axisType==AxisType.Y?a+(t-r)/(n-r)*h:s+o-(t-r)/(n-r)*o:this.axisType==AxisType.Y?a+h-(t-r)/(n-r)*h:s+(t-r)/(n-r)*o},t.prototype.convertBack=function(t){if(this._actualMax==this._actualMin)return 0;var e=this._plotrect.left,i=this._plotrect.width,n=this._plotrect.top,r=this._plotrect.height,s=this._actualMax-this._actualMin,o=this._getLogBase();if(null!=this._customConvertBack)return this.axisType==AxisType.Y?this._customConvertBack((t-n)/r,this._actualMin,this._actualMax):this._customConvertBack((t-e)/i,this._actualMin,this._actualMax);if(o){var a=0;return a=this._reversed?this.axisType==AxisType.Y?(t-n)/r:1-(t-e)/i:this.axisType==AxisType.Y?1-(t-n)/r:(t-e)/i,Math.pow(o,(Math.log(this._actualMin)+(Math.log(this._actualMax)-Math.log(this._actualMin))*a)/Math.log(o))}return this._reversed?this.axisType==AxisType.Y?this._actualMin+(t-n)*s/r:this._actualMin+(e+i-t)*s/i:this.axisType==AxisType.Y?this._actualMax-(t-n)*s/r:this._actualMin+(t-e)*s/i},Object.defineProperty(t.prototype,"axisType",{get:function(){var t=this._chart;if(t){if(t.axisX==this)return AxisType.X;if(t.axisY==this)return AxisType.Y}return this._axisType},enumerable:!0,configurable:!0}),t.prototype._getMinNum=function(){return this._actualMin},t.prototype._getMaxNum=function(){return this._actualMax},t.prototype._invalidate=function(){this._chart&&this._chart.invalidate()},t.prototype._cvCollectionChanged=function(t,e){this._invalidate()},t.prototype._createLabels=function(t,e,i,n,r){for(var s=0;s<e;s++){var o=(t+i*s).toFixed(14),a=parseFloat(o),h=this._formatValue(a);n.push(a),r.push(h)}},t.prototype._createLogarithmicLabels=function(t,e,i,n,r,s){var o=this._getLogBase(),a=Math.log(o),h=Math.floor(Math.log(t)/a),l=Math.ceil(Math.log(e)/a),_=o,u=!0;i>0&&(u=!1,_=i),_<o&&(_=o);var c=(l-h+1)*o/_,p=1;if(s){var d=this._getPosition(),f=this._getAnnoNumber(d==Position.Left||d==Position.Right);c>f?p=Math.floor(c/f+1):u&&(c<=.2*f?_=.2*o:c<=.1*f&&(_=.1*o))}for(var g=h;g<=l;g+=p){if(u)for(var m=Math.pow(o,g),y=0;y*_<o-1;y++){var b;(b=m*(1+y*_))>=t&&b<=e&&(0==y?(n.unshift(b),r&&r.unshift(this._formatValue(b))):(n.push(b),r&&r.push(this._formatValue(b))))}else(b=Math.pow(_,g))>=t&&b<=e&&(n.push(b),r&&r.push(this._formatValue(b)))}},t.prototype._createTimeLabels=function(t,e,i,n){var r=this._actualMin,s=this._actualMax,o=new Date(r),a=new Date(s),h=this._format,l=this._getAnnoNumber(this._axisType==AxisType.Y);l>12&&(l=12);var _=.001*(this._actualMax-this._actualMin)/l,u=new _timeSpan(_*_timeSpan.TicksPerSecond),c=wijmo_1.isNumber(this._majorUnit)?_timeSpan.fromDays(this._majorUnit):_timeHelper.NiceTimeSpan(u,h);h||(this._tfmt=h=_timeHelper.GetTimeDefaultFormat(1e3*c.TotalSeconds,0));var p=c.Ticks,d=_timeHelper.RoundTime(r,c.TotalDays,!1);isFinite(d)&&(r=d);var f=_timeHelper.RoundTime(s,c.TotalDays,!0);isFinite(f)&&(s=f);var g=new Date(r);new Date(s);if(c.TotalDays>=365&&!wijmo_1.isNumber(this._majorUnit)){(g=new Date(o.getFullYear(),1,1))<o&&g.setFullYear(g.getFullYear()+1);var m=c.TotalDays/365;m-=m%1;for(var y=g;y<=a&&m;y.setFullYear(y.getFullYear()+m)){var b=y.valueOf();i.push(b),n.push(this._formatValue(b))}}else if(c.TotalDays>=30&&!wijmo_1.isNumber(this._majorUnit)){(g=new Date(o.getFullYear(),o.getMonth(),1))<o&&g.setMonth(g.getMonth()+1);var v=c.TotalDays/30;v-=v%1;for(y=g;y<=a;y.setMonth(y.getMonth()+v)){b=y.valueOf();i.push(b),n.push(this._formatValue(b))}}else{var x=1e3*p/_timeSpan.TicksPerSecond,w=(y=g,o.getTime()-y.getTime());for(w>x&&(y=new Date(y.getTime()+Math.floor(w/x)*x));y<=a&&x;y=new Date(y.getTime()+x))if(y>=o){b=y.valueOf();i.push(b),n.push(this._formatValue(b))}}},t.prototype._formatValue=function(t){if(this._isTimeAxis)return this._format?wijmo_1.Globalize.format(new Date(t),this._format):wijmo_1.Globalize.format(new Date(t),this._tfmt);if(this._format)return wijmo_1.Globalize.format(t,this._format);var e=t==Math.round(t)?"n0":"n";return wijmo_1.Globalize.format(t,e)},t.prototype._calcMajorUnit=function(){var t=this._majorUnit;if(!wijmo_1.isNumber(t)){var e=this._actualMax-this._actualMin,i=this._nicePrecision(e),n=e/this._getAnnoNumber(this.axisType==AxisType.Y);(t=this._niceNumber(2*n,-i,!0))<n&&(t=this._niceNumber(n,1-i,!1)),t<n&&(t=this._niceTickNumber(n))}return t},t.prototype._getAnnoNumber=function(t){var e=t?this._annoSize.height:this._annoSize.width,i=t?this._axrect.height:this._axrect.width;if(e>0&&i>0){var n=Math.floor(i/(e+6));return n<=0&&(n=1),n}return 10},t.prototype._nicePrecision=function(t){if(!wijmo_1.isNumber(t)||t<=0)return 0;var e,i=Math.log(t)/Math.LN10;e=i>=0?Math.floor(i):Math.ceil(i);var n=t/Math.pow(10,e);return n<3&&(e=1-e,(n=t/Math.pow(10,e))<3&&(e+=1)),e},t.prototype._niceTickNumber=function(t){if(0==t)return t;t<0&&(t=-t);var e=Math.log(t)/Math.LN10,i=Math.floor(e),n=t/Math.pow(10,i),r=10;return n<=1?r=1:n<=2?r=2:n<=5&&(r=5),r*Math.pow(10,i)},t.prototype._niceNumber=function(t,e,i){if(0==t)return t;t<0&&(t=-t);var n=t/Math.pow(10,e),r=10;return i?n<1.5?r=1:n<3?r=2:n<4.5?r=4:n<7&&(r=5):n<=1?r=1:n<=2?r=2:n<=5&&(r=5),r*Math.pow(10,e)},Object.defineProperty(t.prototype,"_uniqueId",{get:function(){return this.__uniqueId},enumerable:!0,configurable:!0}),t.MAX_MAJOR=1e3,t.MAX_MINOR=2e3,t._id=0,t}();exports.Axis=Axis;var _tmInc,AxisCollection=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.getAxis=function(t){var e=this.indexOf(t);return e>-1?this[e]:null},e.prototype.indexOf=function(t){for(var e=0;e<this.length;e++)if(this[e].name==t)return e;return-1},e}(wijmo_1.ObservableArray);exports.AxisCollection=AxisCollection,function(t){t[t.tickf7=-7]="tickf7",t[t.tickf6=-6]="tickf6",t[t.tickf5=-5]="tickf5",t[t.tickf4=-4]="tickf4",t[t.tickf3=-3]="tickf3",t[t.tickf2=-2]="tickf2",t[t.tickf1=-1]="tickf1",t[t.second=1]="second",t[t.minute=60]="minute",t[t.hour=3600]="hour",t[t.day=86400]="day",t[t.week=604800]="week",t[t.month=2678400]="month",t[t.year=31536e3]="year",t[t.maxtime=Number.MAX_VALUE]="maxtime"}(_tmInc||(_tmInc={}));var _MeasureOption,_timeSpan=function(){function t(t){this.ticks=t}return Object.defineProperty(t.prototype,"Ticks",{get:function(){return this.ticks},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"TotalSeconds",{get:function(){return this.ticks/1e7},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"TotalDays",{get:function(){return this.ticks/1e7/86400},enumerable:!0,configurable:!0}),t.fromSeconds=function(e){return new t(1e7*e)},t.fromDays=function(e){return new t(1e7*e*24*60*60)},t.TicksPerSecond=1e7,t}(),_timeHelper=function(){function t(t){wijmo_1.isDate(t)?this.init(t):wijmo_1.isNumber(t)&&this.init(FlexChartCore._fromOADate(t))}return t.prototype.init=function(t){this.year=t.getFullYear(),this.month=t.getMonth(),this.day=t.getDate(),this.hour=t.getHours(),this.minute=t.getMinutes(),this.second=t.getSeconds()},t.prototype.getTimeAsDateTime=function(){this.hour>=24&&(this.hour-=24,this.day+=1),this.month<0?(-1-this.day,this.month=1):this.month>11&&(this.month-12,this.month=12),this.day<1?(-1-this.day,this.day=1):this.day>28&&2==this.month?(this.day-28,this.day=28):this.day>30&&(4==this.month||4==this.month||6==this.month||9==this.month||11==this.month)?(this.day-30,this.day=30):this.day>31&&(this.day-31,this.day=31),this.second>59&&(this.second-59,this.second=59);return this.minute>59&&(this.minute-59,this.minute=59),new Date(this.year,this.month,this.day,this.hour,this.minute,this.second)},t.prototype.getTimeAsDouble=function(){return this.getTimeAsDateTime().valueOf()},t.tround=function(t,e,i){var n=t/e*e;return n-=n%1,i&&n!=t&&(n+=e-=e%1),n},t.RoundTime=function(e,i,n){var r=24*i*60*60;if(r>0){var s=new t(e);return r<_tmInc.minute?(s.second=this.tround(s.second,r,n),s.getTimeAsDouble()):(s.second=0,r<_tmInc.hour?(r/=_tmInc.minute,s.minute=this.tround(s.minute,r,n),s.getTimeAsDouble()):(s.minute=0,r<_tmInc.day?(r/=_tmInc.hour,s.hour=this.tround(s.hour,r,n),s.getTimeAsDouble()):(s.hour=0,r<_tmInc.month?(r/=_tmInc.day,s.day=this.tround(s.day,r,n),s.getTimeAsDouble()):(s.day=1,r<_tmInc.year?(r/=_tmInc.month,1!=s.month&&(s.month=this.tround(s.month,r,n)),s.getTimeAsDouble()):(s.month=1,r/=_tmInc.year,s.year=this.tround(s.year,r,n),s.getTimeAsDouble())))))}var o=e,a=o-r,h=a/i*i;return n&&h!=a&&(h+=i),o=r+h},t.TimeSpanFromTmInc=function(t){var e=_timeSpan.fromSeconds(1);if(t!=_tmInc.maxtime)if(t>_tmInc.tickf1)e=_timeSpan.fromSeconds(t);else{var i=t,n=1;for(i+=7;i>0;)n*=10,i--;e=new _timeSpan(n)}return e},t.manualTimeInc=function(t){var e=_tmInc.second;if(null==t||0==t.length)return e;var i=t.indexOf("f");if(i>=0){var n=-1;if(i>0&&"%"==t.substr(i-1,1))n=-1;else for(var r=1;r<6&&!(i+r>=t.length);r++){if("f"!=t.substr(i+r,1))break;n--}e=n}else t.indexOf("s")>=0?e=_tmInc.second:t.indexOf("m")>=0?e=_tmInc.minute:t.indexOf("h")>=0||t.indexOf("H")?e=_tmInc.hour:t.indexOf("d")>=0?e=_tmInc.day:t.indexOf("M")>=0?e=_tmInc.month:t.indexOf("y")>=0&&(e=_tmInc.year);return e},t.getNiceInc=function(t,e,i){for(var n=0;n<t.length;n++){var r=t[n]*i;if(e<=r)return r}return 0},t.NiceTimeSpan=function(e,i){var n=_tmInc.second;null!=i&&i.length>0&&(n=t.manualTimeInc(i));var r=0,s=0;if(n<_tmInc.second&&e.TotalSeconds<10){for(r=e.Ticks,s=t.TimeSpanFromTmInc(n).Ticks;r>10*s;)s*=10;var o=s;return r>o&&(o*=2),r>o&&(o=5*s),r>o&&(o=10*s),new _timeSpan(o)}if(0==(r=Math.ceil(e.TotalSeconds)))return t.TimeSpanFromTmInc(n);if(s=1,n<_tmInc.minute){if(r<_tmInc.minute&&0!=(s=t.getNiceInc([1,2,5,10,15,30],r,n)))return _timeSpan.fromSeconds(s);n=_tmInc.minute}if(n<_tmInc.hour){if(r<_tmInc.hour&&0!=(s=t.getNiceInc([1,2,5,10,15,30],r,n)))return _timeSpan.fromSeconds(s);n=_tmInc.hour}if(n<_tmInc.day){if(r<_tmInc.day&&0!=(s=t.getNiceInc([1,3,6,12],r,n)))return _timeSpan.fromSeconds(s);n=_tmInc.day}if(n<_tmInc.month){if(r<_tmInc.month&&0!=(s=t.getNiceInc([1,2,7,14],r,n)))return _timeSpan.fromSeconds(s);n=_tmInc.month}if(n<_tmInc.year){if(r<_tmInc.year&&0!=(s=t.getNiceInc([1,2,3,4,6],r,n)))return _timeSpan.fromSeconds(s);n=_tmInc.year}return r<(s=100*_tmInc.year)&&0==(s=t.getNiceInc([1,2,5,10,20,50],r,n))&&(s=100*_tmInc.year),_timeSpan.fromSeconds(s)},t.NiceTimeUnit=function(e,i){var n=_timeSpan.fromDays(e);return(n=t.NiceTimeSpan(n,i)).TotalDays},t.GetTimeDefaultFormat=function(t,e){if(!wijmo_1.isNumber(t)||!wijmo_1.isNumber(e))return"";var i="s",n=_timeSpan.fromSeconds(.001*(t-e)),r=n.TotalSeconds;if(r>=_tmInc.year)i="yyyy";else if(r>=_tmInc.month)i="MMM yyyy";else if(r>=_tmInc.day)i="MMM d";else if(r>=_tmInc.hour)i="ddd H:mm";else if(r>=.5*_tmInc.hour)i="H:mm";else if(r>=1)i="H:mm:ss";else if(r>0){var s=n.Ticks;for(i="s.";s<_timeSpan.TicksPerSecond;)s*=10,i+="f"}return i},t.secInYear=86400,t}(),_DataPoint=function(){function t(t,e,i,n){this._seriesIndex=t,this._pointIndex=e,this._dataX=i,this._dataY=n}return Object.defineProperty(t.prototype,"seriesIndex",{get:function(){return this._seriesIndex},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"pointIndex",{get:function(){return this._pointIndex},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataX",{get:function(){return this._dataX},set:function(t){t!==this._dataX&&(this._dataX=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataY",{get:function(){return this._dataY},set:function(t){t!==this._dataY&&(this._dataY=t)},enumerable:!0,configurable:!0}),t}();exports._DataPoint=_DataPoint,function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.XY=2]="XY"}(_MeasureOption=exports._MeasureOption||(exports._MeasureOption={}));var _RectArea=function(){function t(t){this._rect=t}return Object.defineProperty(t.prototype,"rect",{get:function(){return this._rect},enumerable:!0,configurable:!0}),t.prototype.contains=function(t){var e=this._rect;return t.x>=e.left&&t.x<=e.right&&t.y>=e.top&&t.y<=e.bottom},t.prototype.pointDistance=function(t,e,i){var n=e.x-t.x,r=e.y-t.y;return i==_MeasureOption.X?Math.abs(n):i==_MeasureOption.Y?Math.abs(r):Math.sqrt(n*n+r*r)},t.prototype.distance=function(t){var e=_MeasureOption.XY;null===t.x?e=_MeasureOption.Y:null===t.y&&(e=_MeasureOption.X);var i=this._rect;return t.x<i.left?t.y<i.top?this.pointDistance(t,new wijmo_1.Point(i.left,i.top),e):t.y>i.bottom?this.pointDistance(t,new wijmo_1.Point(i.left,i.bottom),e):e==_MeasureOption.Y?0:i.left-t.x:t.x>i.right?t.y<i.top?this.pointDistance(t,new wijmo_1.Point(i.right,i.top),e):t.y>i.bottom?this.pointDistance(t,new wijmo_1.Point(i.right,i.bottom),e):e==_MeasureOption.Y?0:t.x-i.right:e==_MeasureOption.X?0:t.y<i.top?i.top-t.y:t.y>i.bottom?t.y-i.bottom:0},t}();exports._RectArea=_RectArea;var _CircleArea=function(){function t(t,e){this._center=t,this.setRadius(e)}return t.prototype.setRadius=function(t){this._rad=t,this._rad2=t*t},Object.defineProperty(t.prototype,"center",{get:function(){return this._center},enumerable:!0,configurable:!0}),t.prototype.contains=function(t){var e=this._center.x-t.x,i=this._center.y-t.y;return e*e+i*i<=this._rad2},t.prototype.distance=function(t){var e=isNaN(t.x)?0:this._center.x-t.x,i=isNaN(t.y)?0:this._center.y-t.y,n=e*e+i*i;return n<=this._rad2?0:Math.sqrt(n)-this._rad},t}();exports._CircleArea=_CircleArea;var _LinesArea=function(){function t(t,e){this._x=[],this._y=[],this._x=t,this._y=e}return t.prototype.contains=function(t){return!1},t.prototype.distance=function(t){for(var e=NaN,i=0;i<this._x.length-1;i++){var n=FlexChartCore._dist(t,new wijmo_1.Point(this._x[i],this._y[i]),new wijmo_1.Point(this._x[i+1],this._y[i+1]));(isNaN(e)||n<e)&&(e=n)}return e},t}();exports._LinesArea=_LinesArea;var _HitResult=function(){return function(){}}();exports._HitResult=_HitResult;var ChartElement,_HitTester=function(){function t(t){this._map={},this._chart=t}return t.prototype.add=function(t,e){this._map[e]&&(t.tag||(t.tag=new _DataPoint(e,NaN,NaN,NaN)),this._map[e].push(t))},t.prototype.clear=function(){this._map={};for(var t=this._chart.series,e=0;e<t.length;e++)t[e].hitTest===Series.prototype.hitTest&&(this._map[e]=new Array)},t.prototype.hitTest=function(t,e){void 0===e&&(e=!1);for(var i=null,n=Number.MAX_VALUE,r=this._chart.series.length-1;r>=0;r--){var s=this._map[r];if(s){for(var o=s.length-1;o>=0;o--){var a=s[o];if(!wijmo_1.tryCast(a,_LinesArea)||e){var h=a.distance(t);if(h<n&&(i=a,0==(n=h)))break}}if(0==n)break}}if(i){var l=new _HitResult;return l.area=i,l.distance=n,l}return null},t.prototype.hitTestSeries=function(t,e){var i=null,n=Number.MAX_VALUE,r=this._map[e];if(r)for(var s=r.length-1;s>=0;s--){var o=r[s],a=o.distance(t);if(a<n&&(i=o,0==(n=a)))break}if(i){var h=new _HitResult;return h.area=i,h.distance=n,h}return null},t}();exports._HitTester=_HitTester,function(t){t[t.PlotArea=0]="PlotArea",t[t.AxisX=1]="AxisX",t[t.AxisY=2]="AxisY",t[t.ChartArea=3]="ChartArea",t[t.Legend=4]="Legend",t[t.Header=5]="Header",t[t.Footer=6]="Footer",t[t.Series=7]="Series",t[t.SeriesSymbol=8]="SeriesSymbol",t[t.DataLabel=9]="DataLabel",t[t.None=10]="None"}(ChartElement=exports.ChartElement||(exports.ChartElement={}));var SeriesVisibility,Marker,HitTestInfo=function(){function t(t,e,i){this._pointIndex=null,this._chartElement=ChartElement.None,this._chart=t,this._pt=e,this._chartElement=i}return Object.defineProperty(t.prototype,"chart",{get:function(){return this._chart},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"point",{get:function(){return this._pt},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"series",{get:function(){return this._series},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"pointIndex",{get:function(){return this._pointIndex},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"chartElement",{get:function(){return this._chartElement},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"distance",{get:function(){return this._dist},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"item",{get:function(){if(null==this._item&&null!==this.pointIndex)if(null!=this.series)this._item=this.series._getItem(this.pointIndex);else{var t=this._chart._getHitTestItem(this.pointIndex);t&&(this._item=t)}return this._item},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"x",{get:function(){return void 0===this._x&&(this._x=this._getValue(1,!1)),this._x},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return void 0===this._y&&(this._y=this._getValue(0,!1)),this._y},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){var t=this._chart._getHitTestValue(this.pointIndex,this._groupIndex);return null!=t?t:this.y},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){if(void 0===this._name){var t=this._chart._getHitTestLabel(this.pointIndex);return null==t?this.series.name:t.toString()}return this._name},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"groupIndex",{get:function(){return this._groupIndex},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_xfmt",{get:function(){return void 0===this.__xfmt&&(this.__xfmt=this._getValue(1,!0)),this.__xfmt},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_yfmt",{get:function(){return void 0===this.__yfmt&&(this.__yfmt=this._getValue(0,!0)),this.__yfmt},enumerable:!0,configurable:!0}),t.prototype._setData=function(t,e){this._series=t,this._pointIndex=e},t.prototype._setDataGroup=function(t,e){this._groupIndex=t,this._pointIndex=e},t.prototype._setDataPoint=function(t){if(t=wijmo_1.asType(t,_DataPoint,!0)){this._pointIndex=t.pointIndex;var e=wijmo_1.asType(this._chart,FlexChartCore,!0),i=t.seriesIndex;null!==i&&i>=0&&i<e.series.length&&(this._series=e.series[i]),null!=t.item&&(this._item=t.item),null!=t.x&&(this._x=t.x),null!=t.y&&(this._y=t.y),null!=t.xfmt&&(this.__xfmt=t.xfmt),null!=t.yfmt&&(this.__yfmt=t.yfmt),null!=t.name&&(this._name=t.name)}},t.prototype._getValue=function(t,e){var i=this._chart._getHitTestValue(this.pointIndex);if(null!=i)return i;var n=null,r=this._chart,s=this.pointIndex,o=r._isRotated();if(null!==this.series&&null!==s){var a=this.series.getValues(t),h=this.series.getDataType(t);a&&this.pointIndex<a.length?(n=a[this.pointIndex],h!=wijmo_1.DataType.Date||e||(n=new Date(n))):1==t&&(r._xlabels&&r._xlabels.length>0&&s<r._xlabels.length?n=r._xlabels[s]:r._xvals&&s<r._xvals.length&&(n=r._xvals[s],r._xDataType!=wijmo_1.DataType.Date||e||(n=new Date(n))))}return null!==n&&e&&(o?0==t?n=this.ax._formatValue(n):1==t&&(n=this.ay._formatValue(n)):0==t?n=this.ay._formatValue(n):1==t&&(n=this.ax._formatValue(n))),n},Object.defineProperty(t.prototype,"ax",{get:function(){return this.series.axisX?this.series.axisX:this._chart.axisX},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ay",{get:function(){return this.series.axisY?this.series.axisY:this._chart.axisY},enumerable:!0,configurable:!0}),t}();exports.HitTestInfo=HitTestInfo,function(t){t[t.Visible=0]="Visible",t[t.Plot=1]="Plot",t[t.Legend=2]="Legend",t[t.Hidden=3]="Hidden"}(SeriesVisibility=exports.SeriesVisibility||(exports.SeriesVisibility={})),function(t){t[t.Dot=0]="Dot",t[t.Box=1]="Box"}(Marker=exports.Marker||(exports.Marker={}));var DataArray=function(){return function(){}}();exports.DataArray=DataArray;var SeriesEventArgs=function(t){function e(e){var i=t.call(this)||this;return i._series=wijmo_1.asType(e,SeriesBase),i}return __extends(e,t),Object.defineProperty(e.prototype,"series",{get:function(){return this._series},enumerable:!0,configurable:!0}),e}(wijmo_1.EventArgs);exports.SeriesEventArgs=SeriesEventArgs;var SeriesBase=function(){function t(t){this._altStyle=null,this._symbolMarker=Marker.Dot,this._visibility=SeriesVisibility.Visible,this._interpolateNulls=null,this._cache={},this.rendering=new wijmo_1.Event,this.rendered=new wijmo_1.Event,t&&this.initialize(t)}return Object.defineProperty(t.prototype,"interpolateNulls",{get:function(){return null==this._interpolateNulls?this._chart&&this._chart.interpolateNulls:this._interpolateNulls},set:function(t){t!=this._interpolateNulls&&(this._interpolateNulls=wijmo_1.asBoolean(t,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"style",{get:function(){return this._style},set:function(t){t!=this._style&&(this._style=t,this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"altStyle",{get:function(){return this._altStyle},set:function(t){t!=this._altStyle&&(this._altStyle=t,this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"symbolStyle",{get:function(){return this._symbolStyle},set:function(t){t!=this._symbolStyle&&(this._symbolStyle=t,this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"symbolSize",{get:function(){return this._symbolSize},set:function(t){t!=this._symbolSize&&(this._symbolSize=wijmo_1.asNumber(t,!0,!0),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"symbolMarker",{get:function(){return this._symbolMarker},set:function(t){(t=wijmo_1.asEnum(t,Marker,!0))!=this._symbolMarker&&(this._symbolMarker=t,this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"binding",{get:function(){return this._binding?this._binding:this._chart?this._chart.binding:null},set:function(t){t!=this._binding&&(this._binding=wijmo_1.asString(t,!0),this._clearValues(),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bindingX",{get:function(){return this._bindingX?this._bindingX:this._chart?this._chart.bindingX:null},set:function(t){t!=this._bindingX&&(this._bindingX=wijmo_1.asString(t,!0),this._clearValues(),this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this._name},set:function(t){this._name=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"itemsSource",{get:function(){return this._itemsSource},set:function(t){t!=this._itemsSource&&(this._cv&&(this._cv.currentChanged.removeHandler(this._cvCurrentChanged,this),this._cv.collectionChanged.removeHandler(this._cvCollectionChanged,this),this._cv=null),this._itemsSource=t,this._cv=wijmo_1.asCollectionView(t),null!=this._cv&&(this._cv.currentChanged.addHandler(this._cvCurrentChanged,this),this._cv.collectionChanged.addHandler(this._cvCollectionChanged,this)),this._clearValues(),this._itemsSource=t,this._invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"collectionView",{get:function(){return this._cv?this._cv:this._chart?this._chart.collectionView:null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"chart",{get:function(){return this._chart},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hostElement",{get:function(){return this._hostElement},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"legendElement",{get:function(){return this._legendElement},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"cssClass",{get:function(){return this._cssClass},set:function(t){this._cssClass=wijmo_1.asString(t,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visibility",{get:function(){return this._visibility},set:function(t){(t=wijmo_1.asEnum(t,SeriesVisibility))!=this._visibility&&(this._visibility=t,this._clearValues(),this._invalidate(),this._chart&&this._chart.onSeriesVisibilityChanged(new SeriesEventArgs(this)))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tooltipContent",{get:function(){return this._tooltipContent},set:function(t){t!=this._tooltipContent&&(this._tooltipContent=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"itemFormatter",{get:function(){return this._itemFormatter},set:function(t){t!=this._itemFormatter&&(this._itemFormatter=wijmo_1.asFunction(t),this._invalidate())},enumerable:!0,configurable:!0}),t.prototype.hitTest=function(t,e){return wijmo_1.isNumber(t)&&wijmo_1.isNumber(e)?t=new wijmo_1.Point(t,e):t instanceof MouseEvent&&(t=new wijmo_1.Point(t.pageX,t.pageY)),wijmo_1.asType(t,wijmo_1.Point),this._chart?this._chart._hitTestSeries(t,this._chart.series.indexOf(this)):null},t.prototype.getPlotElement=function(t){if(this.hostElement&&t<this._pointIndexes.length){var e=this._pointIndexes[t];if(e<this.hostElement.childNodes.length)return this.hostElement.childNodes[e]}return null},Object.defineProperty(t.prototype,"axisX",{get:function(){return this._axisX},set:function(t){if(t!=this._axisX){if(this._axisX=wijmo_1.asType(t,Axis,!0),this._axisX){var e=this._axisX._chart=this._chart;e&&-1==e.axes.indexOf(this._axisX)&&e.axes.push(this._axisX)}this._invalidate()}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"axisY",{get:function(){return this._axisY},set:function(t){if(t!=this._axisY){if(this._axisY=wijmo_1.asType(t,Axis,!0),this._axisY){var e=this._axisY._chart=this._chart;e&&-1==e.axes.indexOf(this._axisY)&&e.axes.push(this._axisY)}this._invalidate()}},enumerable:!0,configurable:!0}),t.prototype.initialize=function(t){t&&wijmo_1.copy(this,t)},t.prototype.pointToData=function(t){return wijmo_1.asType(t,wijmo_1.Point),(t=t.clone()).x=this._getAxisX().convertBack(t.x),t.y=this._getAxisY().convertBack(t.y),t},t.prototype.dataToPoint=function(t){return wijmo_1.asType(t,wijmo_1.Point),(t=t.clone()).x=this._getAxisX().convert(t.x),t.y=this._getAxisY().convert(t.y),t},t.prototype.onRendering=function(t,e,i){var n=new SeriesRenderingEventArgs(t,e,i);return this.rendering.raise(this,n),n.cancel},t.prototype.onRendered=function(t){this.rendered.raise(this,new RenderEventArgs(t))},Object.defineProperty(t.prototype,"_chart",{get:function(){return this.__chart},set:function(t){t!==this.__chart&&(this.__chart=t)},enumerable:!0,configurable:!0}),t.prototype._getSymbolSize=function(){return null!=this.symbolSize?this.symbolSize:this.chart.symbolSize},Object.defineProperty(t.prototype,"_plotter",{get:function(){return this.chart&&!this.__plotter&&(this.__plotter=this.chart._getPlotter(this)),this.__plotter},set:function(t){t!=this.__plotter&&(this.__plotter=t)},enumerable:!0,configurable:!0}),t.prototype.getDataType=function(t){return 0==t?this._valueDataType:1==t?this._xvalueDataType:null},t.prototype.getValues=function(t){if(0==t){if(null==this._values)if(this._valueDataType=null,null!=this._cv){var e=this._bindValues(this._cv.items,this._getBinding(0));this._values=e.values,this._valueDataType=e.dataType}else if(null!=this.binding&&null!=this._chart&&null!=this._chart.collectionView){e=this._bindValues(this._chart.collectionView.items,this._getBinding(0));this._values=e.values,this._valueDataType=e.dataType}return this._values}if(1==t){if(null==this._xvalues){this._xvalueDataType=null;if(null!=this.bindingX)if(null!=this._cv){e=this._bindValues(this._cv.items,this.bindingX,!0);this._xvalueDataType=e.dataType,this._xvalues=e.values}else{if(null==this._bindingX)return null;if(null!=this._chart&&null!=this._chart.collectionView){e=this._bindValues(this._chart.collectionView.items,this.bindingX,!0);this._xvalueDataType=e.dataType,this._xvalues=e.values}}}return this._xvalues}return null},t.prototype.drawLegendItem=function(t,e,i){var n=this._getChartType();null==n&&(n=this._chart._getChartType());var r=this._getLegendStyle(this.style);n===ChartType.Funnel?this._drawFunnelLegendItem(t,e,i,r,this.symbolStyle):this._drawLegendItem(t,e,n,this.name,r,this.symbolStyle)},t.prototype._getLegendStyle=function(t){if(t){var e={};return t.fill&&(e.fill=t.fill),t.stroke&&(e.stroke=t.stroke),e}},t.prototype.measureLegendItem=function(t,e){var i=this._getChartType();return null==i&&(i=this._chart._getChartType()),i===ChartType.Funnel?this._measureLegendItem(t,this._getFunnelLegendName(e)):this._measureLegendItem(t,this.name)},t.prototype.legendItemLength=function(){var t=this._getChartType();return null==t&&(t=this._chart._getChartType()),t===ChartType.Funnel?this._chart._xlabels&&this._chart._xlabels.length?this._chart._xlabels.length:this._chart._xvals&&this._chart._xvals.length?this._chart._xvals.length:1:1},t.prototype.getDataRect=function(t,e){return null},t.prototype._getChartType=function(){return this._chartType},t.prototype._clearValues=function(){this._values=null,this._xvalues=null,this.__plotter=null,this._cache={}},t.prototype._getBinding=function(t){var e=this.binding;if(e){var i=this.chart?this.chart._bindingSeparator:",";if(i){var n=e.split(i);n&&n.length>t&&(e=n[t].trim())}}return e},t.prototype._getBindingValues=function(t){if(this._cache[t])return this._cache[t];var e;null!=this._cv?e=this._cv.items:null!=this._chart&&null!=this._chart.collectionView&&(e=this._chart.collectionView.items);var i=this._bindValues(e,this._getBinding(t));return this._cache[t]=i.values},t.prototype._getItem=function(t){var e=null,i=null;return null!=this.itemsSource?i=null!=this._cv?this._cv.items:this.itemsSource:null!=this._chart.itemsSource&&(i=null!=this._chart.collectionView?this._chart.collectionView.items:this._chart.itemsSource),null!=i&&(e=i[t]),e},t.prototype._getLength=function(){var t=0,e=null;return null!=this.itemsSource?e=null!=this._cv?this._cv.items:this.itemsSource:null!=this._chart.itemsSource&&(e=null!=this._chart.collectionView?this._chart.collectionView.items:this._chart.itemsSource),null!=e&&(t=e.length),t},t.prototype._setPointIndex=function(t,e){this._pointIndexes[t]=e},t.prototype._getDataRect=function(){var t=this.getValues(0),e=this.getValues(1);if(t){for(var i=NaN,n=NaN,r=NaN,s=NaN,o=t.length,a=0;a<o;a++){var h=t[a];if(isFinite(h)&&(isNaN(n)?n=s=h:h<n?n=h:h>s&&(s=h)),e){var l=e[a];isFinite(l)&&(isNaN(i)?i=r=l:l<i?i=l:h>s&&(r=l))}}if(e||(i=0,r=o-1),!isNaN(n))return new wijmo_1.Rect(i,n,r-i,s-n)}return null},t.prototype._isCustomAxisX=function(){return!!this._axisX&&(!this._chart||this._axisX!=this.chart.axisX)},t.prototype._isCustomAxisY=function(){return!!this._axisY&&(!this._chart||this._axisY!=this.chart.axisY)},t.prototype._getAxisX=function(){var t=null;return this.axisX?t=this.axisX:this.chart&&(t=this.chart.axisX),t},t.prototype._getAxisY=function(){var t=null;return this.axisY?t=this.axisY:this.chart&&(t=this.chart.axisY),t},t.prototype._measureLegendItem=function(e,i){var n=new wijmo_1.Size;if(n.width=t._LEGEND_ITEM_WIDTH,n.height=t._LEGEND_ITEM_HEIGHT,this._name){var r=e.measureString(i,FlexChartCore._CSS_LABEL,FlexChartCore._CSS_LEGEND);n.width+=r.width,n.height<r.height&&(n.height=r.height)}return n.width+=3*t._LEGEND_ITEM_MARGIN,n.height+=2*t._LEGEND_ITEM_MARGIN,n},t.prototype._drawFunnelLegendItem=function(e,i,n,r,s){e.strokeWidth=1;var o=t._LEGEND_ITEM_MARGIN,a=null,h=null;null===a&&(a=this._chart._getColorLight(n)),null===h&&(h=this._chart._getColor(n)),e.fill=a,e.stroke=h;var l=i.top+.5*i.height,_=t._LEGEND_ITEM_WIDTH,u=t._LEGEND_ITEM_HEIGHT,c=this._getFunnelLegendName(n);e.drawRect(i.left+o,l-.5*u,_,u,null,s||r),null!=c&&FlexChartCore._renderText(e,c,new wijmo_1.Point(i.left+u+2*o,l),0,1,FlexChartCore._CSS_LABEL,FlexChartCore._CSS_LEGEND)},t.prototype._getFunnelLegendName=function(t){var e,i=this._chart;return i._xlabels&&i._xlabels.length&&t<i._xlabels.length?e=i._xlabels[t]:i._xvals&&i._xvals.length&&t<i._xvals.length&&(e=i._xvals[t],i._xDataType===wijmo_1.DataType.Date&&(e=FlexChartCore._fromOADate(e))),null==e&&(e=this.name),e.toString()},t.prototype._drawLegendItem=function(e,i,n,r,s,o){e.strokeWidth=1;var a=t._LEGEND_ITEM_MARGIN,h=null,l=null;null===h&&(h=this._chart._getColorLight(this._chart.series.indexOf(this))),null===l&&(l=this._chart._getColor(this._chart.series.indexOf(this))),e.fill=h,e.stroke=l;var _=i.top+.5*i.height,u=t._LEGEND_ITEM_WIDTH,c=t._LEGEND_ITEM_HEIGHT;switch(n){case ChartType.Area:case ChartType.SplineArea:e.drawRect(i.left+a,_-.5*c,u,c,null,s);break;case ChartType.Bar:case ChartType.Column:e.drawRect(i.left+a,_-.5*c,u,c,null,o||s);break;case ChartType.Scatter:case ChartType.Bubble:var p=.3*u,d=.3*c;this.symbolMarker==Marker.Box?e.drawRect(i.left+a+.5*u-p,_-d,2*p,2*d,null,o||s):e.drawEllipse(i.left+.5*u+a,_,p,d,null,o||s);break;case ChartType.Line:case ChartType.Spline:e.drawLine(i.left+a,_,i.left+u+a,_,null,s);break;case ChartType.LineSymbols:case ChartType.SplineSymbols:p=.3*u,d=.3*c;this.symbolMarker==Marker.Box?e.drawRect(i.left+a+.5*u-p,_-d,2*p,2*d,null,o||s):e.drawEllipse(i.left+.5*u+a,_,p,d,null,o||s),e.drawLine(i.left+a,_,i.left+u+a,_,null,s);break;case ChartType.Candlestick:case ChartType.HighLowOpenClose:e.drawLine(i.left+a,_,i.left+u+a,_,null,o||s)}this._name&&FlexChartCore._renderText(e,r,new wijmo_1.Point(i.left+c+2*a,_),0,1,FlexChartCore._CSS_LABEL,FlexChartCore._CSS_LEGEND)},t.prototype._cvCollectionChanged=function(t,e){this._clearValues(),this._invalidate()},t.prototype._cvCurrentChanged=function(t,e){this._chart&&this._chart._notifyCurrentChanged&&this._invalidate()},t.prototype._bindValues=function(t,e,i){var n,r,s;if(void 0===i&&(i=!1),null!=t){var o=t.length;n=new Array(t.length);for(var a=e?new wijmo_1.Binding(e):null,h=0;h<o;h++){s=null;var l=t[h];null!=a&&(l=a.getValue(l)),wijmo_1.isArray(l)&&l.length>0&&(s=l,l=l[0]),wijmo_1.isNumber(l)?(n[h]=l,r=wijmo_1.DataType.Number):wijmo_1.isDate(l)?(n[h]=l.valueOf(),r=wijmo_1.DataType.Date):i&&l&&(n[h]=h,r=wijmo_1.DataType.Number),wijmo_1.isArray(s)&&s.length>0&&(n[h]=s)}}var _=new DataArray;return _.values=n,_.dataType=r,_},t.prototype._invalidate=function(){this._chart&&this._chart.invalidate()},t.prototype._indexToPoint=function(t){if(t>=0&&t<this._values.length){var e=this._values[t],i=this._xvalues?this._xvalues[t]:t;return new wijmo_1.Point(i,e)}return null},t.prototype._getSymbolFill=function(t){var e=null;return this.symbolStyle&&(e=this.symbolStyle.fill),!e&&this.style&&(e=this.style.fill),!e&&this.chart&&(e=this.chart._getColorLight(t)),e},t.prototype._getSymbolStroke=function(t){var e=null;return this.symbolStyle&&(e=this.symbolStyle.stroke),!e&&this.style&&(e=this.style.stroke),!e&&this.chart&&(e=this.chart._getColor(t)),e},t.prototype._getAltSymbolStroke=function(t){var e=null;return this.altStyle&&(e=this.altStyle.stroke),e},t.prototype._getAltSymbolFill=function(t){var e=null;return this.altStyle&&(e=this.altStyle.fill),e},t.prototype._renderLabels=function(t,e,i,n){this._plotter&&this._plotter._renderLabels(t,this,e,i,n)},t._LEGEND_ITEM_WIDTH=10,t._LEGEND_ITEM_HEIGHT=10,t._LEGEND_ITEM_MARGIN=4,t._DEFAULT_SYM_SIZE=10,t}();exports.SeriesBase=SeriesBase;var Series=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),Object.defineProperty(e.prototype,"chartType",{get:function(){return this._chartType},set:function(t){(t=wijmo_1.asEnum(t,ChartType,!0))!=this._chartType&&(this._chartType=t,this._invalidate())},enumerable:!0,configurable:!0}),e}(SeriesBase);exports.Series=Series;var FlexPie=function(t){function e(e,i){var n=t.call(this,e,null,!0)||this;n._areas=[],n._keywords=new _KeyWords,n._startAngle=0,n._innerRadius=0,n._offset=0,n._reversed=!1,n._isAnimated=!1,n._selectedItemPosition=Position.None,n._selectedItemOffset=0,n._pieGroups=[],n._rotationAngles=[],n._centers=[new wijmo_1.Point],n._selectedOffset=new wijmo_1.Point,n._selectedIndex=-1,n._angles=[],n._colRowLens=[],n._titles=void 0,n._values=[],n._labels=[],n._pels=[],n._sum=0,n._sums=[],n._bindingSeparator=",",n.applyTemplate("wj-control wj-flexchart wj-flexpie",null,null),n._currentRenderEngine=new _SvgRenderEngine(n.hostElement),n._legend=new Legend(n),n._tooltip=new ChartTooltip,n._tooltip.content="<b>{name}</b><br/>{value}",n._tooltip.showDelay=0,n._lbl=new PieDataLabel,n._lbl._chart=n;var r=n;return n.hostElement.addEventListener("mousemove",function(t){var e=r._tooltip;if(e.content&&!r.isTouching){var i=r.hitTest(t);if(i.distance<=e.threshold){var n=r._getLabelContent(i,r.tooltip.content);r._showToolTip(n,new wijmo_1.Rect(t.clientX,t.clientY,5,5))}else r._hideToolTip()}}),n.hostElement.addEventListener("click",function(t){var e=!0;if(r.selectionMode==SelectionMode.Point){var i=r.hitTest(t),n=FlexChartBase._SELECTION_THRESHOLD;r.tooltip&&r.tooltip.threshold&&(n=r.tooltip.threshold),i.distance<=n?(i.pointIndex!=r._selectionIndex&&r.selectedItemPosition!=Position.None&&(e=!1),i.pointIndex!=r._selectionIndex&&r._select(i.pointIndex,!0)):r._selectedIndex>=0&&r._select(null)}if(e&&r.isTouching){var s=r._tooltip;if(s.content)if((i=r.hitTest(t)).distance<=s.threshold){var o=r._getLabelContent(i,r.tooltip.content);r._showToolTip(o,new wijmo_1.Rect(t.clientX,t.clientY,5,5))}else r._hideToolTip()}}),n.hostElement.addEventListener("mouseleave",function(t){r._hideToolTip()}),n.initialize(i),n.refresh(),n}return __extends(e,t),Object.defineProperty(e.prototype,"binding",{get:function(){return this._binding},set:function(t){t!=this._binding&&(this._binding=wijmo_1.asString(t,!0),this._bindChart())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bindingName",{get:function(){return this._bindingName},set:function(t){t!=this._bindingName&&(this._bindingName=wijmo_1.asString(t,!0),this._bindChart())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"startAngle",{get:function(){return this._startAngle},set:function(t){t!=this._startAngle&&(this._startAngle=wijmo_1.asNumber(t,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"offset",{get:function(){return this._offset},set:function(t){t!=this._offset&&(this._offset=wijmo_1.asNumber(t,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"innerRadius",{get:function(){return this._innerRadius},set:function(t){t!=this._innerRadius&&(this._innerRadius=wijmo_1.asNumber(t,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reversed",{get:function(){return this._reversed},set:function(t){t!=this._reversed&&(this._reversed=wijmo_1.asBoolean(t,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectedItemPosition",{get:function(){return this._selectedItemPosition},set:function(t){(t=wijmo_1.asEnum(t,Position,!0))!=this._selectedItemPosition&&(this._selectedItemPosition=t,this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectedItemOffset",{get:function(){return this._selectedItemOffset},set:function(t){t!=this._selectedItemOffset&&(this._selectedItemOffset=wijmo_1.asNumber(t,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isAnimated",{get:function(){return this._isAnimated},set:function(t){t!=this._isAnimated&&(this._isAnimated=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tooltip",{get:function(){return this._tooltip},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"dataLabel",{get:function(){return this._lbl},set:function(t){t!=this._lbl&&(this._lbl=t,this._lbl&&(this._lbl._chart=this))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectedIndex",{get:function(){return this._selectedIndex},set:function(t){if(t!=this._selectedIndex){var e=wijmo_1.asNumber(t,!0);this._select(e,!0)}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"titles",{get:function(){return this._titles},set:function(t){t!==this._titles&&(this._titles=t,this.invalidate())},enumerable:!0,configurable:!0}),e.prototype._getLabelsForLegend=function(){return this._labels},e.prototype.hitTest=function(t,e){var i=this._toControl(t,e),n=new HitTestInfo(this,i),r=null;if(FlexChartBase._contains(this._rectHeader,i))n._chartElement=ChartElement.Header;else if(FlexChartBase._contains(this._rectFooter,i))n._chartElement=ChartElement.Footer;else if(FlexChartBase._contains(this._rectLegend,i))n._chartElement=ChartElement.Legend,null!==(r=this.legend._hitTest(i))&&r>=0&&r<this._areas.length&&n._setData(null,r);else if(FlexChartBase._contains(this._rectChart,i)){for(var s,o=this._areas.length,a=NaN,h=0;h<o;h++){var l=i.clone(),_=this._areas[h],u=this._rotationAngles[_.gi];if(0!=u){var c=this._centers[_.gi],p=c.x,d=c.y,f=-p+l.x,g=-d+l.y,m=Math.sqrt(f*f+g*g),y=Math.atan2(g,f)-u*Math.PI/180;l.x=p+m*Math.cos(y),l.y=d+m*Math.sin(y)}h==this._selectedIndex&&(l.x-=this._selectedOffset.x,l.y-=this._selectedOffset.y);var b=this._areas[h];if(b.contains(l)&&(n._setDataGroup(_.gi,b.tag),n._dist=0,h!=this._selectedIndex))break;var v=b.distance(l);void 0!==v&&(isNaN(a)||v<a)&&(a=v,s=b)}0!==n._dist&&null!=s&&(n._setDataGroup(s.gi,s.tag),n._dist=a),n._chartElement=ChartElement.ChartArea}else n._chartElement=ChartElement.None;return n},e.prototype._performBind=function(){if(this._initData(),this._cv){this._selectionIndex=this._cv.currentPosition;var t=this._cv.items;if(t){for(var e=t.length,i=this._getBindings(),n=0;n<i.length;n++)this._values[n]=[],this._sums[n]=0;for(var r=0;r<e;r++){var s=t[r];for(n=0;n<i.length;n++)this._sums[n]+=Math.abs(this._getBindData(s,this._values[n],0==n?this._labels:null,i[n],this.bindingName))}}}},e.prototype._getBindings=function(){var t=[],e=this.binding;if(e){var i=this._bindingSeparator;i&&(t=e.split(i))}return t},e.prototype._initData=function(){this._sum=0,this._sums=[],this._values=[],this._labels=[]},e.prototype._getBindData=function(t,e,i,n,r){var s,o=0,a=n?new wijmo_1.Binding(n):null;a&&(s=a.getValue(t));o=0;wijmo_1.isNumber(s)?o=wijmo_1.asNumber(s):s&&(o=parseFloat(s.toString())),!isNaN(o)&&isFinite(o)?e.push(o):(o=0,e.push(o));var h=r?new wijmo_1.Binding(r):null;if(i)if(h&&t){var l=h.getValue(t);l&&(l=l.toString()),i.push(l)}else i.push(o.toString());return o},e.prototype._render=function(e,i){void 0===i&&(i=!0),this._selectionAnimationID&&clearInterval(this._selectionAnimationID),this.onRendering(new RenderEventArgs(e)),t.prototype._render.call(this,e,i)},e.prototype._prepareRender=function(){this._areas=[]},e.prototype._renderChart=function(t,i,n){var r=this._rectChart.clone(),s=(new wijmo_1.Size(r.width,r.height),i.width),o=i.height,a=this._parseMargin(this.plotMargin),h=this.dataLabel,l=h.content&&h.position==PieLabelPosition.Outside,_=l?(wijmo_1.isNumber(h.offset)?h.offset:0)+24:0;isNaN(a.left)&&(a.left=l?_:e._MARGIN),isNaN(a.right)&&(a.right=l?_:e._MARGIN),isNaN(a.top)&&(a.top=l?_:e._MARGIN),isNaN(a.bottom)&&(a.bottom=l?_:e._MARGIN),i.top+=a.top;o=i.height-(a.top+a.bottom);i.height=o>0?o:24,i.left+=a.left;s=i.width-(a.left+a.right);i.width=s>0?s:24;var u=this._getBindings(),c=this._layout(i,u.length);this._angles=[],this._pels=[],this._pieGroups=[],this._rotationAngles=[];var p=this.titles;void 0===p&&u.length>1&&(p=u);for(var d=0;d<u.length;d++){var f=c[d];p&&d<p.length&&p[d]&&FlexChartBase._renderText(t,p[d],new wijmo_1.Point(f.left+.5*f.width,f.top),1,2,e._CSS_GROUP_TITLE);var g=t.startGroup("wj-slice-group",null,!0);this._pieGroups.push(g),this._renderData(t,f,d,g),t.endGroup(),this._rotationAngles.push(0)}this._highlightCurrent(),this.dataLabel.content&&this.dataLabel.position!=PieLabelPosition.None&&this._renderLabels(t),this.onRendered(new RenderEventArgs(t))},e.prototype._layout=function(t,e){for(var i=0,n=e,r=1,s=e>1?20:0,o=1;o<=e;o++){var a=Math.floor((e+(o-1))/o),h=Math.floor(t.width/o),l=Math.floor(t.height/a);(l-=s)<h&&(h=l),h>i&&(i=h,n=o,r=a)}for(var _=[],u=.5*(t.width-i*n),c=.5*(t.height-(i+s)*r),p=0;p<r;p++)for(var d=0;d<n;d++)_.push(new wijmo_1.Rect(t.left+i*d+8+u,t.top+(i+s)*p+8+c+s,i-16,i-16));return _},e.prototype._getDesiredLegendSize=function(t,e,i,n){var r=new wijmo_1.Size,s=new wijmo_1.Size(i,n),o=this._getLabelsForLegend(),a=o.length,h=0,l=0;this._colRowLens=[];for(var _=0;_<a;_++){var u=this._measureLegendItem(t,o[_]);e?(l+u.height>n&&(r.height=n,this._colRowLens.push(h),h=0,l=0),h<u.width&&(h=u.width),l+=u.height):(h+u.width>i&&(r.width=i,this._colRowLens.push(l),l=0,h=0),l<u.height&&(l=u.height),h+=u.width)}return e?(r.height<l&&(r.height=l),this._colRowLens.push(h),r.width=this._colRowLens.reduce(function(t,e){return t+e},0),r.width>s.width/2&&(r.width=s.width/2)):(r.width<h&&(r.width=h),this._colRowLens.push(l),r.height=this._colRowLens.reduce(function(t,e){return t+e},0),r.height>s.height/2&&(r.height=s.height/2)),r},e.prototype._renderLegend=function(t,e,i,n,r,s){for(var o=this._rectLegend,a=this._getLabelsForLegend(),h=a.length,l=0,_=e.clone(),u=0;u<h;u++){var c=this._measureLegendItem(t,a[u]);n?_.y+c.height>o.top+o.height+1&&(_.x+=this._colRowLens[l],l++,_.y=e.y):_.x+c.width>o.left+o.width+1&&(_.y+=this._colRowLens[l],l++,_.x=e.x);var p=new wijmo_1.Rect(_.x,_.y,c.width,c.height);this._drawLegendItem(t,p,u,a[u]),i.push(p),n?_.y+=c.height:_.x+=c.width}},e.prototype._renderData=function(t,e,i,n){var r=this._sums[i],s=this.startAngle+180,o=this.innerRadius,a=this.offset;if(r>0){var h=s*Math.PI/180,l=e.left+.5*e.width,_=e.top+.5*e.height,u=Math.min(.5*e.width,.5*e.height);this._centers[i]=new wijmo_1.Point(l,_);var c=Math.max(a,this.selectedItemOffset);c>0&&(a*=u/=1+c),this._radius=u;var p=o*u;this._renderPie(t,i,u,p,h,a)}},e.prototype._renderPie=function(t,e,i,n,r,s){this._renderSlices(t,this._values[e],this._sums[e],e,i,n,r,2*Math.PI,s)},e.prototype._getCenter=function(){return this._centers[0]},e.prototype._renderSlices=function(t,e,i,n,r,s,o,a,h){for(var l,_,u,c=e.length,p=0,d=o,f=1==this.reversed,g=this._centers[n],m=0;m<c;m++)e[m]>0&&p++;var y=1===p?360:359.9/360;for(m=0;m<c;m++){_=g.x,u=g.y,l=t.startGroup("wj-slice"),t.fill=this._getColorLight(m),t.stroke=this._getColor(m);var b=Math.abs(e[m]),v=Math.abs(b-i)<1e-10?a:a*b/i;v=Math.min(v,a*y);var x=f?d-.5*v:d+.5*v;h>0&&v<a&&(_+=h*Math.cos(x),u+=h*Math.sin(x)),this._renderSlice(t,_,u,x,n,m,r,s,d,v,a),f?d-=v:d+=v,t.endGroup(),this._pels.push(l)}},e.prototype._renderSlice=function(t,e,i,n,r,s,o,a,h,l,_){var u=this,c=!!this.reversed;if(this._angles.push(n),this.itemFormatter){var p=new HitTestInfo(this,new wijmo_1.Point(e+o*Math.cos(n),i+o*Math.sin(n)),ChartElement.SeriesSymbol);p._setData(null,s),this.itemFormatter(t,p,function(){u._drawSlice(t,r,s,c,e,i,o,a,h,l)})}else this._drawSlice(t,r,s,c,e,i,o,a,h,l)},e.prototype._getSelectedItemOffset=function(t,e){var i=0,n=0,r=0;return t==this._selectedIndex&&this.selectedItemOffset>0&&(r=this.selectedItemOffset),r>0&&(i=Math.cos(e)*r*this._radius,n=Math.sin(e)*r*this._radius),{x:i,y:n}},e.prototype._renderLabels=function(t){var e=this._areas.length,i=this.dataLabel,n=i.position,r="wj-data-label",s=this._rotationAngles,o=i.connectingLine,a=i.offset?i.offset:0;t.stroke="null",t.fill="transparent",t.strokeWidth=1,t.startGroup("wj-data-labels");for(var h=0;h<e;h++){var l=this._areas[h];if(l){var _=l.radius,u=l.langle+s[l.gi],c=1,p=1;n==PieLabelPosition.Center||n===PieLabelPosition.Radial||n===PieLabelPosition.Circular?_*=.5*(1+(l.innerRadius||0)/l.radius):((u=_Math.clampAngle(u))<=-170||u>=170?(c=2,p=1):u>=-100&&u<=-80?(c=1,p=2):u>=-10&&u<=10?(c=0,p=1):u>=80&&u<=100?(c=1,p=0):-180<u&&u<-90?(c=2,p=2):-90<=u&&u<0?(c=0,p=2):0<u&&u<90?(c=0,p=0):90<u&&u<180&&(c=2,p=0),n==PieLabelPosition.Inside&&(c=2-c,p=2-p)),u*=Math.PI/180;var d=this._getSelectedItemOffset(h,u),f=d.x,g=d.y,m=_;n==PieLabelPosition.Outside?m+=a:n==PieLabelPosition.Inside&&(m-=a);var y=l.center.x,b=l.center.y,v=this._centers[l.gi],x=y-v.x,w=b-v.y;if(0!=this._rotationAngles[l.gi]){var S=Math.sqrt(x*x+w*w),P=Math.atan2(w,x)+this._rotationAngles[l.gi]*Math.PI/180;y=v.x+S*Math.cos(P),b=v.y+S*Math.sin(P)}var C=new wijmo_1.Point(y+f+m*Math.cos(u),b+g+m*Math.sin(u));i.border&&n!=PieLabelPosition.Center&&(0==c?C.x+=2:2==c&&(C.x-=2),0==p?C.y+=2:2==p&&(C.y-=2));var M=new HitTestInfo(this,C);M._setDataGroup(l.gi,l.tag);var T=this._getLabelContent(M,i.content),j=new DataLabelRenderEventArgs(t,M,C,T);if(i.onRendering&&(i.onRendering(j)?(T=j.text,C=j.point):T=null),T){var A,L=180*Math.atan2(b-C.y,y-C.x)/Math.PI;if(L=(L+360)%360,n===PieLabelPosition.Radial||n===PieLabelPosition.Circular?(n===PieLabelPosition.Radial?L>90&&L<270&&(L+=180):(L>180&&L<360&&(L+=180),L-=90),(A=FlexChartBase._renderRotatedText(t,T,C,c,p,C,L,r).getBBox()).left=A.x,A.top=A.y):A=FlexChartBase._renderText(t,T,C,c,p,r),i.border&&t.drawRect(A.left-2,A.top-2,A.width+4,A.height+4,"wj-data-label-border"),o){var N=new wijmo_1.Point(y+f+_*Math.cos(u),b+g+_*Math.sin(u));t.drawLine(C.x,C.y,N.x,N.y,"wj-data-label-line")}}}}t.endGroup()},e.prototype._drawSlice=function(t,e,i,n,r,s,o,a,h,l){var _;n?a>0?(0!=l&&t.drawDonutSegment(r,s,o,a,h-l,l),(_=new _DonutSegment(new wijmo_1.Point(r,s),o,a,h-l,l,this.startAngle)).tag=i,this._areas.push(_)):(0!=l&&t.drawPieSegment(r,s,o,h-l,l),(_=new _PieSegment(new wijmo_1.Point(r,s),o,h-l,l,this.startAngle)).tag=i,this._areas.push(_)):(a>0?(0!=l&&t.drawDonutSegment(r,s,o,a,h,l),(_=new _DonutSegment(new wijmo_1.Point(r,s),o,a,h,l,this.startAngle)).tag=i,this._areas.push(_)):(0!=l&&t.drawPieSegment(r,s,o,h,l),(_=new _PieSegment(new wijmo_1.Point(r,s),o,h,l,this.startAngle)).tag=i,this._areas.push(_)),h+=l),_&&(_.gi=e)},e.prototype._measureLegendItem=function(t,e){var i=new wijmo_1.Size;if(i.width=Series._LEGEND_ITEM_WIDTH,i.height=Series._LEGEND_ITEM_HEIGHT,e){var n=t.measureString(e,FlexChartBase._CSS_LABEL,FlexChartBase._CSS_LEGEND);i.width+=n.width,i.height<n.height&&(i.height=n.height)}return i.width+=3*Series._LEGEND_ITEM_MARGIN,i.height+=2*Series._LEGEND_ITEM_MARGIN,i},e.prototype._drawLegendItem=function(t,e,i,n){t.strokeWidth=1;var r=Series._LEGEND_ITEM_MARGIN,s=null,o=null;null===s&&(s=this._getColorLight(i)),null===o&&(o=this._getColor(i)),t.fill=s,t.stroke=o;var a=e.top+.5*e.height,h=Series._LEGEND_ITEM_WIDTH,l=Series._LEGEND_ITEM_HEIGHT;t.drawRect(e.left+r,a-.5*l,h,l,null),null!=n&&FlexChartBase._renderText(t,n.toString(),new wijmo_1.Point(e.left+l+2*r,a),0,1,FlexChartBase._CSS_LABEL)},e.prototype._getLabelContent=function(t,e){return wijmo_1.isString(e)?this._keywords.replace(e,t):wijmo_1.isFunction(e)?e(t):null},e.prototype._select=function(t,e){if(void 0===e&&(e=!1),this._highlight(!1,this._selectionIndex),this._selectionIndex=t,this.selectionMode==SelectionMode.Point){var i=this._cv;i&&(this._notifyCurrentChanged=!1,i.moveCurrentToPosition(t),this._notifyCurrentChanged=!0)}null==t?(this._selectedIndex=-1,this.invalidate()):this.isAnimated&&this.selectedItemPosition!=Position.None||!(this.selectedItemOffset>0||this.selectedItemPosition!=Position.None)?this._highlight(!0,this._selectionIndex,e):(this._selectedIndex=t,this.invalidate()),this.onSelectionChanged()},e.prototype._highlightCurrent=function(){if(this.selectionMode!=SelectionMode.None){var t=-1,e=this._cv;e&&(t=e.currentPosition),this._highlight(!0,t)}},e.prototype._highlight=function(t,e,i){if(void 0===i&&(i=!1),this.selectionMode==SelectionMode.Point&&void 0!==e&&null!==e&&e>=0)if(t){for(var n=[],r=0;r<this._pieGroups.length;r++){if(c=this._pels[e+r*this._values[0].length]){c.parentNode.appendChild(c);var s=this._find(c,["ellipse"]);this._highlightItems(this._find(c,["path","ellipse"]),FlexChartBase._CSS_SELECTION,t)}var o=this._angles[e+r*this._values[0].length];if(this.selectedItemPosition!=Position.None&&0!=o){var a=0;this.selectedItemPosition==Position.Left?a=180:this.selectedItemPosition==Position.Top?a=-90:this.selectedItemPosition==Position.Bottom&&(a=90);var h=a*Math.PI/180-o;h*=180/Math.PI,i&&this.isAnimated?n.push(h):(this._rotationAngles[r]=h,this._pieGroups[r].transform.baseVal.getItem(0).setRotate(h,this._centers[r].x,this._centers[r].y))}var l=this.selectedItemOffset;if(l>0&&s&&0==s.length){var _=this._selectedOffset.x=Math.cos(o)*l*this._radius,u=this._selectedOffset.y=Math.sin(o)*l*this._radius;c&&c.setAttribute("transform","translate("+_.toFixed()+","+u.toFixed()+")")}this._selectedIndex=e}n.length>0&&this._animateSelectionAngle(n,.5)}else{for(r=0;r<this._pieGroups.length;r++){var c;(c=this._pels[e+r*this._values[0].length])&&(c.parentNode.insertBefore(c,c.parentNode.childNodes.item(e)),c.removeAttribute("transform"),this._highlightItems(this._find(c,["path","ellipse"]),FlexChartBase._CSS_SELECTION,t))}this._selectedIndex==e&&(this._selectedIndex=-1)}},e.prototype._animateSelectionAngle=function(t,e){var i=this,n=i._pieGroups;i._selectionAnimationID&&clearInterval(this._selectionAnimationID),this._selectionAnimationID=wijmo_1.animate(function(e){if(n==i._pieGroups){for(var r=0;r<n.length;r++){var s=_Math.clampAngle(i._rotationAngles[r]),o=_Math.clampAngle(t[r])-s,a=s;i._rotationAngles[r]=s=a+o*e,n[r].transform.baseVal.getItem(0).setRotate(s,i._centers[r].x,i._centers[r].y)}1==e&&clearInterval(i._selectionAnimationID),e>.99&&(i.selectedItemOffset>0||i.selectedItemPosition!=Position.None)&&i.invalidate()}},1e3*e)},e.prototype._getHitTestItem=function(t){var e=null,i=null;return(e=null!=this._cv?this._cv.items:this.itemsSource)&&t<e.length&&(i=e[t]),i},e.prototype._getHitTestValue=function(t,e){return void 0==e&&(e=0),this._values[e][t]},e.prototype._getHitTestLabel=function(t){return this._labels[t]},e._MARGIN=4,e._CSS_GROUP_TITLE="wj-label",e}(FlexChartBase);exports.FlexPie=FlexPie;var _Math=function(){function t(){}return t.clampAngle=function(t,e){void 0===e&&(e=0);var i=(t+180)%360-180;return i<-180+(e<0?e+360:e)&&(i+=360),i},t}(),_PieSegment=function(){function t(t,e,i,n,r){void 0===r&&(r=0),this._isFull=!1,this._center=t,this._radius=e,this._originAngle=i,this._originSweep=n,n>=2*Math.PI&&(this._isFull=!0),this._sweep=.5*n*180/Math.PI,this._angle=_Math.clampAngle(180*i/Math.PI+this._sweep),this._radius2=e*e,this._startAngle=r}return t.prototype.contains=function(t){var e=t.x-this._center.x,i=t.y-this._center.y;if(e*e+i*i<=this._radius2){var n=180*Math.atan2(i,e)/Math.PI,r=_Math.clampAngle(this._angle,this._startAngle)-_Math.clampAngle(n,this._startAngle);if(this._isFull||Math.abs(r)<=this._sweep)return!0}return!1},t.prototype.distance=function(t){if(this.contains(t))return 0;var e=t.x-this._center.x,i=t.y-this._center.y,n=e*e+i*i,r=180*Math.atan2(i,e)/Math.PI,s=_Math.clampAngle(this._angle,this._startAngle)-_Math.clampAngle(r,this._startAngle);return this._isFull||Math.abs(s)<=this._sweep?Math.sqrt(n)-this._radius:void 0},Object.defineProperty(t.prototype,"center",{get:function(){return this._center},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"radius",{get:function(){return this._radius},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"langle",{get:function(){return this._angle},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"angle",{get:function(){return this._originAngle},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sweep",{get:function(){return this._originSweep},enumerable:!0,configurable:!0}),t}();exports._PieSegment=_PieSegment;var _DonutSegment=function(){function t(t,e,i,n,r,s){void 0===s&&(s=0),this._isFull=!1,this._center=t,this._radius=e,this._iradius=i,this._originAngle=n,this._originSweep=r,r>=2*Math.PI&&(this._isFull=!0),this._sweep=.5*r*180/Math.PI,this._angle=_Math.clampAngle(180*n/Math.PI+this._sweep),this._radius2=e*e,this._iradius2=i*i,this._startAngle=s}return t.prototype.contains=function(t){var e=t.x-this._center.x,i=t.y-this._center.y,n=e*e+i*i;if(n>=this._iradius2&&n<=this._radius2){var r=180*Math.atan2(i,e)/Math.PI,s=_Math.clampAngle(this._angle,this._startAngle)-_Math.clampAngle(r,this._startAngle);if(this._isFull||Math.abs(s)<=this._sweep)return!0}return!1},t.prototype.distance=function(t){if(this.contains(t))return 0},Object.defineProperty(t.prototype,"center",{get:function(){return this._center},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"radius",{get:function(){return this._radius},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"langle",{get:function(){return this._angle},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"angle",{get:function(){return this._originAngle},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sweep",{get:function(){return this._originSweep},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"innerRadius",{get:function(){return this._iradius},enumerable:!0,configurable:!0}),t}();exports._DonutSegment=_DonutSegment;var ChartType,Stacking,_BasePlotter=function(){function t(){this._DEFAULT_WIDTH=2,this._DEFAULT_SYM_SIZE=10,this.clipping=!0}return t.prototype.clear=function(){this.seriesCount=0,this.seriesIndex=0},t.prototype._renderLabels=function(t,e,i,n,r){var s=i.length,o=n.dataLabel,a=o.border,h=o.offset,l=o.connectingLine;void 0===h&&(h=l?16:0),a&&(h-=2);for(var _=0;_<s;_++){var u=i[_],c=wijmo_1.asType(u.tag,_DataPoint,!0);c&&!u.ignoreLabel&&this._renderLabel(t,u,c,n,o,e,h,r)}},t.prototype._renderLabel=function(t,e,i,n,r,s,o,a){var h=null==r.position?LabelPosition.Top:r.position,l=r.border,_=r.connectingLine,u=new HitTestInfo(n,p);u._setDataPoint(i);var c=n._getLabelContent(u,r.content),p=this._getLabelPoint(s,i);if(this._getPointAndPosition(p,h,e,n),n._plotRect.contains(p)){var d=new DataLabelRenderEventArgs(t,u,p,c);if(r.onRendering&&(r.onRendering(d)?(c=d.text,p=d.point):c=null),c){var f=this._renderLabelAndBorder(t,c,h,o,p,_,2,l);if(f){var g=new _RectArea(f);g.tag=i,a.push(g)}}}},t.prototype._getPointAndPosition=function(t,e,i,n){if(i instanceof _RectArea){var r=i;n._isRotated()?t.y=r.rect.top+.5*r.rect.height:t.x=r.rect.left+.5*r.rect.width}},t.prototype._getLabelPoint=function(t,e){var i=t._getAxisX(),n=t._getAxisY();return new wijmo_1.Point(i.convert(e.dataX),n.convert(e.dataY))},t.prototype._renderLabelAndBorder=function(t,e,i,n,r,s,o,a){var h,l="wj-data-label",_="wj-data-label-line",u=FlexChartCore._CSS_DATA_LABELS;switch(i){case LabelPosition.Top:s&&t.drawLine(r.x,r.y,r.x,r.y-n,_),r.y-=o+n,h=FlexChartCore._renderText(t,e,r,1,2,l,u);break;case LabelPosition.Bottom:s&&t.drawLine(r.x,r.y,r.x,r.y+n,_),r.y+=o+n,h=FlexChartCore._renderText(t,e,r,1,0,l,u);break;case LabelPosition.Left:s&&t.drawLine(r.x,r.y,r.x-n,r.y,_),r.x-=o+n,h=FlexChartCore._renderText(t,e,r,2,1,l,u);break;case LabelPosition.Right:s&&t.drawLine(r.x,r.y,r.x+n,r.y,_),r.x+=o+n,h=FlexChartCore._renderText(t,e,r,0,1,l,u);break;case LabelPosition.Center:h=FlexChartCore._renderText(t,e,r,1,1,l,u)}return a&&h&&t.drawRect(h.left-o,h.top-o,h.width+2*o,h.height+2*o,"wj-data-label-border"),h},t.prototype.getOption=function(t,e){var i=this.chart._options;if(e&&(i=i?i[e]:null),i&&!wijmo_1.isUndefined(i[t])&&null!==i[t])return i[t]},t.prototype.getNumOption=function(t,e){var i=this.chart._options;if(e&&(i=i?i[e]:null),i&&i[t])return wijmo_1.asNumber(i[t],!0)},t.prototype.getItemFormatter=function(t){if(t instanceof SeriesBase){var e=t;return e.itemFormatter?e.itemFormatter:this.chart.itemFormatter}return this.chart.itemFormatter},t.cloneStyle=function(t,e){if(!t)return t;var i={};for(var n in t)e&&e.indexOf(n)>=0||(i[n]=t[n]);return i},t.prototype.isValid=function(t,e,i,n){return _DataInfo.isValid(t)&&_DataInfo.isValid(e)&&FlexChartCore._contains(this.chart._plotRect,new wijmo_1.Point(t,e))},t.prototype.load=function(){},t.prototype.unload=function(){},t}();exports._BasePlotter=_BasePlotter,function(t){t[t.Column=0]="Column",t[t.Bar=1]="Bar",t[t.Scatter=2]="Scatter",t[t.Line=3]="Line",t[t.LineSymbols=4]="LineSymbols",t[t.Area=5]="Area",t[t.Bubble=6]="Bubble",t[t.Candlestick=7]="Candlestick",t[t.HighLowOpenClose=8]="HighLowOpenClose",t[t.Spline=9]="Spline",t[t.SplineSymbols=10]="SplineSymbols",t[t.SplineArea=11]="SplineArea",t[t.Funnel=12]="Funnel"}(ChartType=exports.ChartType||(exports.ChartType={})),function(t){t[t.None=0]="None",t[t.Stacked=1]="Stacked",t[t.Stacked100pc=2]="Stacked100pc"}(Stacking=exports.Stacking||(exports.Stacking={}));var FlexChartCore=function(t){function e(i,n){var r=t.call(this,i,null,!0)||this;r._series=new wijmo_1.ObservableArray,r._axes=new AxisCollection,r._pareas=new PlotAreaCollection,r._interpolateNulls=!1,r._legendToggle=!1,r._symbolSize=10,r._dataInfo=new _DataInfo,r.__barPlotter=null,r.__linePlotter=null,r.__areaPlotter=null,r.__bubblePlotter=null,r.__financePlotter=null,r.__funnelPlotter=null,r._plotters=[],r._rotated=!1,r._stacking=Stacking.None,r._xlabels=[],r._xvals=[],r._lblAreas=[],r._colRowLens=[],r._bindingSeparator=",",r.seriesVisibilityChanged=new wijmo_1.Event,r.applyTemplate("wj-control wj-flexchart",null,null);var s=r;return s._series.collectionChanged.addHandler(function(){for(var t=s._series,e=0;e<t.length;e++){var i=wijmo_1.tryCast(t[e],SeriesBase);if(!i)throw"chartSeries array must contain SeriesBase objects.";i._chart=s,i.axisX&&null==i.axisX._chart&&(i.axisX._chart=s,s.axes.push(i.axisX)),i.axisY&&null==i.axisY._chart&&(i.axisY._chart=s,s.axes.push(i.axisY))}s.invalidate()}),r._currentRenderEngine=new _SvgRenderEngine(r.hostElement),r._hitTester=new _HitTester(r),r._legend=new Legend(r),r._tooltip=new ChartTooltip,r._tooltip.showDelay=0,r._lbl=new DataLabel,r._lbl._chart=r,r._initAxes(),s._axes.collectionChanged.addHandler(function(){for(var t=s._axes,e=0;e<t.length;e++){var i=wijmo_1.tryCast(t[e],Axis);if(!i)throw"axes array must contain Axis objects.";i._chart=s}s.invalidate()}),s._pareas.collectionChanged.addHandler(function(){for(var t=s._pareas,e=0;e<t.length;e++){var i=wijmo_1.tryCast(t[e],PlotArea);if(!i)throw"plotAreas array must contain PlotArea objects.";i._chart=s}s.invalidate()}),r._keywords=new _KeyWords,r.hostElement.addEventListener("click",function(t){var e=s._tooltip;e.content&&s.isTouching&&s._updateTooltip(e,t)}),r.hostElement.addEventListener("mousemove",function(t){var e=s._tooltip;e.content&&!s.isTouching&&s._updateTooltip(e,t)}),r.hostElement.addEventListener("mouseleave",function(t){s._hideToolTip()}),r.hostElement.addEventListener("click",function(t){if(s.selectionMode!=SelectionMode.None){var i=s._hitTestData(t),n=e._SELECTION_THRESHOLD;s.tooltip&&s.tooltip.threshold&&(n=s.tooltip.threshold),i.distance<=n&&i.series?s._select(i.series,i.pointIndex):s.selectionMode==SelectionMode.Series&&(i=s.hitTest(t)).chartElement==ChartElement.Legend&&i.series?s._select(i.series,null):s._select(null,null)}!0===s.legendToggle&&(i=s.hitTest(t)).chartElement==ChartElement.Legend&&i.series&&(i.series.visibility==SeriesVisibility.Legend?i.series.visibility=SeriesVisibility.Visible:i.series.visibility==SeriesVisibility.Visible&&(i.series.visibility=SeriesVisibility.Legend),s.focus())}),r.initialize(n),r}return __extends(e,t),e.prototype._initAxes=function(){this._axisX=new Axis(Position.Bottom),this._axisY=new Axis(Position.Left),this._axisX.majorGrid=!1,this._axisX.name="axisX",this._axisY.majorGrid=!0,this._axisY.majorTickMarks=TickMark.None,this._axisY.name="axisY",this._axisX._chart=this,this._axisY._chart=this,this._axes.push(this._axisX),this._axes.push(this._axisY)},Object.defineProperty(e.prototype,"series",{get:function(){return this._series},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"axes",{get:function(){return this._axes},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"axisX",{get:function(){return this._axisX},set:function(t){if(t!=this._axisX){var e=this._axisX=wijmo_1.asType(t,Axis);this.beginUpdate(),e&&(void 0===e.majorGrid&&(e.majorGrid=!1),void 0===e.name&&(e.name="axisX"),void 0==e.position&&(e.position=Position.Bottom),e._axisType=AxisType.X,e._chart=this),this.endUpdate()}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"axisY",{get:function(){return this._axisY},set:function(t){if(t!=this._axisY){var e=this._axisY=wijmo_1.asType(t,Axis);this.beginUpdate(),e&&(void 0===e.majorGrid&&(e.majorGrid=!0),void 0===e.name&&(e.name="axisY"),e.majorTickMarks=TickMark.None,void 0==e.position&&(e.position=Position.Left),e._axisType=AxisType.Y,e._chart=this),this.endUpdate()}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"plotAreas",{get:function(){return this._pareas},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"binding",{get:function(){return this._binding},set:function(t){t!=this._binding&&(this._binding=wijmo_1.asString(t,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bindingX",{get:function(){return this._bindingX},set:function(t){t!=this._bindingX&&(this._bindingX=wijmo_1.asString(t,!0),this._bindChart())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"symbolSize",{get:function(){return this._symbolSize},set:function(t){t!=this._symbolSize&&(this._symbolSize=wijmo_1.asNumber(t,!1,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"interpolateNulls",{get:function(){return this._interpolateNulls},set:function(t){t!=this._interpolateNulls&&(this._interpolateNulls=wijmo_1.asBoolean(t),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"legendToggle",{get:function(){return this._legendToggle},set:function(t){t!=this._legendToggle&&(this._legendToggle=wijmo_1.asBoolean(t))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tooltip",{get:function(){return this._tooltip},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"dataLabel",{get:function(){return this._lbl},set:function(t){t!=this._lbl&&(this._lbl=wijmo_1.asType(t,DataLabel),this._lbl&&(this._lbl._chart=this))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selection",{get:function(){return this._selection},set:function(t){t!=this._selection&&(this._selection=wijmo_1.asType(t,SeriesBase,!0),this.invalidate())},enumerable:!0,configurable:!0}),e.prototype.onSeriesVisibilityChanged=function(t){this.seriesVisibilityChanged.raise(this,t)},e.prototype.hitTest=function(t,i){var n=this._toControl(t,i),r=new HitTestInfo(this,n),s=null;if(e._contains(this._rectHeader,n))r._chartElement=ChartElement.Header;else if(e._contains(this._rectFooter,n))r._chartElement=ChartElement.Footer;else if(e._contains(this._rectLegend,n))r._chartElement=ChartElement.Legend,null!==(s=this.legend._hitTest(n))&&s>=0&&s<this.series.length&&(this._getChartType()===ChartType.Bar?r._setData(this.series[this.series.length-1-s]):r._setData(this.series[s]));else if(e._contains(this._rectChart,n)){var o=this._hitTestLabels(n);if(o)r._chartElement=ChartElement.DataLabel,r._dist=0,r._setDataPoint(o.tag);else{for(var a=this._hitTester.hitTest(n),h=null,l=null,_=this.series.length-1;_>=0;_--)if(this.series[_].hitTest!==Series.prototype.hitTest){var u=this.series[_].hitTest(t);if(u&&((!h||u.distance<h.distance)&&(h=u,l=_),0===u.distance))break}a&&a.area?h&&h.distance<a.distance?r=h:h&&h.distance==a.distance&&l>a.area.tag.seriesIndex?r=h:(r._setDataPoint(a.area.tag),r._dist=a.distance):h&&(r=h);var c=!1;this.axes.some(function(t){if(e._contains(t._axrect,n))return t.axisType===AxisType.X?r._chartElement=ChartElement.AxisX:r._chartElement=ChartElement.AxisY,c=!0,!0}),c||(e._contains(this._plotRect,n)?r._chartElement=ChartElement.PlotArea:e._contains(this._rectChart,n)&&(r._chartElement=ChartElement.ChartArea))}}else r._chartElement=ChartElement.None;return r},e.prototype.pointToData=function(t,e){return wijmo_1.isNumber(t)&&wijmo_1.isNumber(e)&&(t=new wijmo_1.Point(t,e)),t instanceof MouseEvent?(t=new wijmo_1.Point(t.pageX,t.pageY),t=this._toControl(t)):t=t.clone(),t.x=this.axisX.convertBack(t.x),t.y=this.axisY.convertBack(t.y),t},e.prototype.dataToPoint=function(t,e){wijmo_1.isNumber(t)&&wijmo_1.isNumber(e)&&(t=new wijmo_1.Point(t,e)),wijmo_1.asType(t,wijmo_1.Point);var i=t.clone();return i.x=this.axisX.convert(i.x),i.y=this.axisY.convert(i.y),i},e.prototype._copy=function(t,e){if("series"==t){this.series.clear();for(var i=wijmo_1.asArray(e),n=0;n<i.length;n++){var r=this._createSeries();wijmo_1.copy(r,i[n]),this.series.push(r)}return!0}return!1},e.prototype._createSeries=function(){return new Series},e.prototype._clearCachedValues=function(){for(var t=0;t<this._series.length;t++){var e=this._series[t];null==e.itemsSource&&e._clearValues()}},e.prototype._performBind=function(){if(this._xDataType=null,this._xlabels.splice(0),this._xvals.splice(0),this._cv){var t=this._cv.items;if(t){for(var e=t.length,i=this.bindingX?new wijmo_1.Binding(this.bindingX):null,n=0;n<e;n++){var r=t[n];if(i){var s=i.getValue(r);wijmo_1.isNumber(s)?(this._xvals.push(wijmo_1.asNumber(s)),this._xDataType=wijmo_1.DataType.Number):wijmo_1.isDate(s)&&(this._xvals.push(wijmo_1.asDate(s).valueOf()),this._xDataType=wijmo_1.DataType.Date),this._xlabels.push(s)}}this._xvals.length==e?this._xlabels.splice(0):this._xvals.splice(0)}}},e.prototype._hitTestSeries=function(t,e){var i=this._toControl(t),n=new HitTestInfo(this,i),r=this._hitTester.hitTestSeries(i,e);return r&&r.area&&(n._setDataPoint(r.area.tag),n._chartElement=ChartElement.PlotArea,n._dist=r.distance),n},e.prototype._hitTestData=function(t){var e=this._toControl(t),i=new HitTestInfo(this,e),n=this._hitTester.hitTest(e,!0);return n&&n.area&&(i._setDataPoint(n.area.tag),i._dist=n.distance),i},e.prototype._hitTestLabels=function(t){for(var e=null,i=this._lblAreas.length,n=0;n<i;n++)if(this._lblAreas[n].contains(t)){e=this._lblAreas[n];break}return e},e._dist2=function(t,e){var i=t.x-e.x,n=t.y-e.y;return i*i+n*n},e._dist=function(t,i,n){return Math.sqrt(e._distToSegmentSquared(t,i,n))},e._distToSegmentSquared=function(t,i,n){var r=e._dist2(i,n);if(0==r)return e._dist2(t,i);var s=((t.x-i.x)*(n.x-i.x)+(t.y-i.y)*(n.y-i.y))/r;return s<0?e._dist2(t,i):s>1?e._dist2(t,n):e._dist2(t,new wijmo_1.Point(i.x+s*(n.x-i.x),i.y+s*(n.y-i.y)))},e.prototype._isRotated=function(){return this._getChartType()==ChartType.Bar?!this._rotated:this._rotated},e.prototype._getChartType=function(){return null},e.prototype._prepareRender=function(){this._hitTester.clear()},e.prototype._renderChart=function(t,i,n){var r=this._rectChart.clone(),s=new wijmo_1.Size(r.width,r.height);i.width,i.height;(m=this._getPlotter(null)).stacking=this._stacking,this._curPlotter!=m&&(this._curPlotter&&this._curPlotter.unload(),this._curPlotter=m),m.load();var o=this._isRotated();this._dataInfo.analyse(this._series,o,m.stacking,this._xvals.length>0?this._xvals:null,this.axisX._getLogBase()>0,this.axisY._getLogBase()>0);var a=m.adjustLimits(this._dataInfo,i.clone());if(o){var h=this._dataInfo.getDataTypeX();h||(h=this._xDataType),this.axisX._updateActualLimits(this._dataInfo.getDataTypeY(),a.left,a.right),this.axisY._updateActualLimits(h,a.top,a.bottom,this._xlabels,this._xvals)}else{var l=this._dataInfo.getDataTypeX();l||(l=this._xDataType),this.axisX._updateActualLimits(l,a.left,a.right,this._xlabels,this._xvals),this.axisY._updateActualLimits(this._dataInfo.getDataTypeY(),a.top,a.bottom)}var _=this._getAxes();if(this._updateAuxAxes(_,o),this._layout(i,s,t),t.startGroup(e._CSS_PLOT_AREA),t.fill="transparent",t.stroke=null,this.plotAreas.length>0)for(var u=0;u<this.plotAreas.length;u++){this.plotAreas[u]._render(t)}else{var c=this._plotRect;t.drawRect(c.left,c.top,c.width,c.height)}t.endGroup();var p=this._series.length;this._clearPlotters();var d={};for(u=0;u<p;u++){var f=this._series[u];if(((w=f.visibility)==SeriesVisibility.Visible||w==SeriesVisibility.Plot)&&f.getValues(0)){var g=f._getAxisY(),m=this._getPlotter(f);if(!g||g==this.axisY||m instanceof _BarPlotter)m.seriesCount++;else{var y=g._uniqueId;d[y]?d[y].count+=1:d[y]={count:1,index:0}}}}if(this.onRendering(new RenderEventArgs(t)),this._getChartType()!==ChartType.Funnel)for(u=0;u<_.length;u++){var b=_[u];x=b.axisType==AxisType.X?t.startGroup(e._CSS_AXIS_X,this._chartRectId):t.startGroup(e._CSS_AXIS_Y,this._chartRectId),b._hostElement=n?x:b._hostElement,b._render(t),t.endGroup()}t.startGroup("wj-series-group"),this._plotrectId="plotRect"+(1e6*Math.random()).toFixed(),t.addClipRect(this._plotRect,this._plotrectId);for(u=0;u<p;u++){var v=this._series[u];v._pointIndexes=[];m=this._getPlotter(v);v._plotter=m;var x=t.startGroup(v.cssClass,m.clipping?this._plotrectId:null);v._hostElement=n?x:v._hostElement;var w=v.visibility,S=v.axisX,P=v.axisY;if(S||(S=this.axisX),P||(P=this.axisY),w==SeriesVisibility.Visible||w==SeriesVisibility.Plot){var C,M,T=d[P._uniqueId];T?(C=T.index,M=T.count,T.index++,v.onRendering(t,C,M)||m.plotSeries(t,S,P,v,this,C,M)):(C=m.seriesIndex,M=m.seriesCount,m.seriesIndex++,v.onRendering(t,C,M)||m.plotSeries(t,S,P,v,this,C,M)),v.onRendered(t)}t.endGroup()}t.endGroup(),this._lblAreas=[],this.dataLabel.content&&this.dataLabel.position!=LabelPosition.None&&this._renderLabels(t),this._highlightCurrent(),this.onRendered(new RenderEventArgs(t))},e.prototype._getDesiredLegendSize=function(t,e,i,n){var r=new wijmo_1.Size,s=this.series,o=s.length,a=0,h=0;this._colRowLens=[];for(var l=0;l<o;l++){var _=wijmo_1.tryCast(s[l],SeriesBase),u=_.visibility;if(_.name&&u!=SeriesVisibility.Hidden&&u!=SeriesVisibility.Plot)for(var c=_.legendItemLength(),p=0;p<c;p++){var d=_.measureLegendItem(t,p);e?(a+d.height>n&&(r.height=n,this._colRowLens.push(h),h=0,a=0),h<d.width&&(h=d.width),a+=d.height):(h+d.width>i&&(r.width=i,this._colRowLens.push(a),a=0,h=0),a<d.height&&(a=d.height),h+=d.width)}}return e?(r.height<a&&(r.height=a),this._colRowLens.push(h),r.width=this._colRowLens.reduce(function(t,e){return t+e},0),r.width>i/2&&(r.width=i/2)):(r.width<h&&(r.width=h),this._colRowLens.push(a),r.height=this._colRowLens.reduce(function(t,e){return t+e},0),r.height>n/2&&(r.height=n/2)),r},e.prototype._renderLegend=function(t,e,i,n,r,s){var o,a=this.series,h=a.length,l=e.clone(),_=0;if(this._getChartType()===ChartType.Bar)for(var u=h-1;u>=0;u--)o=wijmo_1.tryCast(a[u],SeriesBase),_=this._renderLegendElements(t,o,e,l,i,n,r,s,_);else for(u=0;u<h;u++)o=wijmo_1.tryCast(a[u],SeriesBase),_=this._renderLegendElements(t,o,e,l,i,n,r,s,_)},e.prototype._renderLegendElements=function(t,e,i,n,r,s,o,a,h){var l=this._rectLegend,_=h;if(!e)return _;var u=e.visibility;if(!e.name||u==SeriesVisibility.Hidden||u==SeriesVisibility.Plot)return e._legendElement=null,r.push(null),_;var c=e.legendItemLength(),p=t.startGroup(e.cssClass);u==SeriesVisibility.Legend?(p.setAttribute("opacity","0.5"),e._legendElement=p):u==SeriesVisibility.Visible?e._legendElement=p:e._legendElement=null;for(var d=0;d<c;d++){var f=e.measureLegendItem(t,d);s?n.y+f.height>l.top+l.height+1&&(n.x+=this._colRowLens[_],_++,n.y=i.y):n.x+f.width>l.left+l.width+1&&(n.y+=this._colRowLens[_],_++,n.x=i.x);var g=new wijmo_1.Rect(n.x,n.y,f.width,f.height);u!=SeriesVisibility.Legend&&u!=SeriesVisibility.Visible||e.drawLegendItem(t,g,d),r.push(g),s?n.y+=f.height:n.x+=f.width}return t.endGroup(),_},e.prototype._renderLabels=function(t){var i=this.series,n=i.length;t.stroke="null",t.fill="transparent",t.strokeWidth=1;var r=e._CSS_DATA_LABELS;t.startGroup(r);for(var s=0;s<n;s++){var o=i[s],a=this._hitTester._map[s];a&&o._renderLabels(t,a,this,this._lblAreas)}t.endGroup()},e.prototype._getAxes=function(){for(var t=[this.axisX,this.axisY],e=this.series.length,i=0;i<e;i++){var n=this.series[i],r=n.axisX;r&&-1===t.indexOf(r)&&t.push(r);var s=n.axisY;s&&-1===t.indexOf(s)&&t.push(s)}return t},e.prototype._clearPlotters=function(){for(var t=this._plotters.length,e=0;e<t;e++)this._plotters[e].clear()},e.prototype._initPlotter=function(t){t.chart=this,t.dataInfo=this._dataInfo,t.hitTester=this._hitTester,this._plotters.push(t)},Object.defineProperty(e.prototype,"_barPlotter",{get:function(){return null===this.__barPlotter&&(this.__barPlotter=new _BarPlotter,this._initPlotter(this.__barPlotter)),this.__barPlotter},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_linePlotter",{get:function(){return null===this.__linePlotter&&(this.__linePlotter=new _LinePlotter,this._initPlotter(this.__linePlotter)),this.__linePlotter},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_areaPlotter",{get:function(){return null===this.__areaPlotter&&(this.__areaPlotter=new _AreaPlotter,this._initPlotter(this.__areaPlotter)),this.__areaPlotter},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_bubblePlotter",{get:function(){return null===this.__bubblePlotter&&(this.__bubblePlotter=new _BubblePlotter,this._initPlotter(this.__bubblePlotter)),this.__bubblePlotter},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_financePlotter",{get:function(){return null===this.__financePlotter&&(this.__financePlotter=new _FinancePlotter,this._initPlotter(this.__financePlotter)),this.__financePlotter},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_funnelPlotter",{get:function(){return null===this.__funnelPlotter&&(this.__funnelPlotter=new _FunnelPlotter,this._initPlotter(this.__funnelPlotter)),this.__funnelPlotter},enumerable:!0,configurable:!0}),e.prototype._getPlotter=function(t){var e,i=this._getChartType(),n=!1;if(t){var r=t._getChartType();null!==r&&void 0!==r&&r!=i&&(i=r,n=!0)}switch(i){case ChartType.Column:this._barPlotter.isVolume=!1,this._barPlotter.width=.7,e=this._barPlotter;break;case ChartType.Bar:this._barPlotter.rotated=!this._rotated,this._barPlotter.isVolume=!1,this._barPlotter.width=.7,e=this._barPlotter;break;case ChartType.Line:this._linePlotter.hasSymbols=!1,this._linePlotter.hasLines=!0,this._linePlotter.isSpline=!1,e=this._linePlotter;break;case ChartType.Scatter:this._linePlotter.hasSymbols=!0,this._linePlotter.hasLines=!1,this._linePlotter.isSpline=!1,e=this._linePlotter;break;case ChartType.LineSymbols:this._linePlotter.hasSymbols=!0,this._linePlotter.hasLines=!0,this._linePlotter.isSpline=!1,e=this._linePlotter;break;case ChartType.Area:this._areaPlotter.isSpline=!1,e=this._areaPlotter;break;case ChartType.Bubble:e=this._bubblePlotter;break;case ChartType.Candlestick:(s=this._financePlotter).isCandle=!0,s.isEqui=!1,s.isArms=!1,s.isVolume=!1,e=s;break;case ChartType.HighLowOpenClose:var s;(s=this._financePlotter).isCandle=!1,s.isEqui=!1,s.isArms=!1,s.isVolume=!1,e=s;break;case ChartType.Spline:this._linePlotter.hasSymbols=!1,this._linePlotter.hasLines=!0,this._linePlotter.isSpline=!0,e=this._linePlotter;break;case ChartType.SplineSymbols:this._linePlotter.hasSymbols=!0,this._linePlotter.hasLines=!0,this._linePlotter.isSpline=!0,e=this._linePlotter;break;case ChartType.SplineArea:this._areaPlotter.isSpline=!0,e=this._areaPlotter;break;case ChartType.Funnel:e=this._funnelPlotter;break;default:throw"Invalid chart type."}return e.rotated=this._rotated,i==ChartType.Bar&&(e.rotated=!e.rotated),n&&(e.rotated=this._isRotated()),e},e.prototype._layout=function(t,e,i){this.plotAreas.length>0?this._layoutMultiple(t,e,i):this._layoutSingle(t,e,i)},e.prototype._layoutSingle=function(t,e,i){for(var n=t.width,r=t.height,s=new wijmo_1.Size(n,.75*r),o=new wijmo_1.Size(r,.75*n),a=0,h=0,l=n,_=r,u=0,c=0,p=n,d=r,f=this._getAxes(),g=0;g<f.length;g++){var m=(C=f[g]).origin,y=C._getPosition();if(C.axisType==AxisType.X){(w=C._getHeight(i,n))>s.height&&(w=s.height),C._desiredSize=new wijmo_1.Size(s.width,w);var b=C._hasOrigin=wijmo_1.isNumber(m)&&m>this.axisY._getMinNum()&&m<this.axisY._getMaxNum(),v=Math.min(.25*n,C._annoSize.width);if(y==Position.Bottom)if(a=Math.max(a,.5*v),l=Math.min(l,n-.5*v),b){var x=this._convertY(m,c,d);d-=Math.max(0,x+w-d)}else d-=w;else if(y==Position.Top)if(a=Math.max(a,.5*v),l=Math.min(l,n-.5*v),b){x=this._convertY(m,c,d);c+=Math.max(0,c-(x-w))}else c+=w}else if(C.axisType==AxisType.Y){var w;(w=C._getHeight(i,r))>o.height&&(w=o.height),C._desiredSize=new wijmo_1.Size(o.width,w);b=C._hasOrigin=wijmo_1.isNumber(m)&&m>this.axisX._getMinNum()&&m<this.axisX._getMaxNum();if(y==Position.Left)if(C._actualAngle<0?_=Math.min(_,r-C._annoSize.height):C._actualAngle>0?h=Math.max(h,C._annoSize.height):(h=Math.max(h,C._annoSize.height),_=Math.min(_,r-C._annoSize.height)),b){var S=this._convertX(m,u,p);u+=Math.max(0,u-(S-w))}else u+=w;else if(y==Position.Right)if(C._actualAngle>0?_=Math.min(_,r-C._annoSize.height):C._actualAngle<0?h=Math.max(h,C._annoSize.height):(h=Math.max(h,C._annoSize.height),_=Math.min(_,r-C._annoSize.height)),b){S=this._convertX(m,u,p);p-=Math.max(0,S+w-p)}else p-=w}}var P=this._parseMargin(this.plotMargin);a=u=isNaN(P.left)?Math.max(a,u)+t.left:P.left,l=p=isNaN(P.right)?Math.min(l,p)+t.left:e.width-P.right,h=c=isNaN(P.top)?Math.max(h,c)+t.top:P.top,_=d=isNaN(P.bottom)?Math.min(_,d)+t.top:e.height-P.bottom,n=Math.max(1,l-a),r=Math.max(1,_-h),this._plotRect=new wijmo_1.Rect(a,h,n,r),_<=h&&(d=c+1),i.stroke=null;for(g=0;g<f.length;g++){var C;m=(C=f[g]).origin,y=C._getPosition();if(C.axisType==AxisType.X){var M;if(C._hasOrigin){x=this._convertY(m,this._plotRect.top,this._plotRect.bottom);y==Position.Bottom?(M=new wijmo_1.Rect(a,x,n,C._desiredSize.height),d+=Math.max(0,M.bottom-this._plotRect.bottom)):y==Position.Top?(M=new wijmo_1.Rect(a,x-C._desiredSize.height,n,C._desiredSize.height),c-=Math.max(0,this._plotRect.top-M.top)):M=new wijmo_1.Rect(a,x,n,1)}else y==Position.Bottom?(M=new wijmo_1.Rect(a,d,n,C._desiredSize.height),d+=C._desiredSize.height):y==Position.Top?(M=new wijmo_1.Rect(a,c-C._desiredSize.height,n,C._desiredSize.height),c-=C._desiredSize.height):M=new wijmo_1.Rect(a,c,n,1);C._layout(M,this._plotRect)}else if(C.axisType==AxisType.Y){var T;if(C._hasOrigin){S=this._convertX(m,this._plotRect.left,this._plotRect.right);y==Position.Left?(T=new wijmo_1.Rect(S-C._desiredSize.height,h,r,C._desiredSize.height),u-=C._desiredSize.height):y==Position.Right?(T=new wijmo_1.Rect(S,h,r,C._desiredSize.height),p+=C._desiredSize.height):T=new wijmo_1.Rect(S,h,r,1)}else y==Position.Left?(T=new wijmo_1.Rect(u-C._desiredSize.height,h,r,C._desiredSize.height),u-=C._desiredSize.height):y==Position.Right?(T=new wijmo_1.Rect(p,h,r,C._desiredSize.height),p+=C._desiredSize.height):T=new wijmo_1.Rect(u,h,r,1);C._layout(T,this._plotRect)}}},e.prototype._layoutMultiple=function(t,e,i){for(var n=t.width,r=t.height,s=[],o=[],a=this._getAxes(),h=a.length,l=0;l<h;l++){if((P=a[l])._plotrect=null,P.axisType==AxisType.X){for(var _=P.plotArea?P.plotArea.column:0;s.length<=_;)s.push(new _AreaDef);s[_].axes.push(P)}else if(P.axisType==AxisType.Y){for(var u=P.plotArea?P.plotArea.row:0;o.length<=u;)o.push(new _AreaDef);o[u].axes.push(P)}}for(var c=s.length,p=o.length,d=new wijmo_1.Size(n,.3*r),f=new wijmo_1.Size(r,.3*n),g=0,m=0,y=n,b=r,v=0;v<c;v++){(L=s[v]).right=n,L.bottom=r;for(l=0;l<L.axes.length;l++){var x=(P=L.axes[l])._getHeight(i,P.axisType==AxisType.X?n:r);x>d.height&&(x=d.height);var w=new wijmo_1.Size(d.width,x);P._desiredSize=w,0==v&&(L.left=Math.max(L.left,.5*P._annoSize.width)),v==c-1&&(L.right=Math.min(L.right,n-.5*P._annoSize.width)),(R=P._getPosition())==Position.Bottom?L.bottom-=w.height:R==Position.Top&&(L.top+=w.height)}}for(var S=0;S<p;S++){(L=o[S]).right=n,L.bottom=r;for(l=0;l<L.axes.length;l++){var P=L.axes[l],C=new wijmo_1.Size(f.width,P._getHeight(i,P.axisType==AxisType.X?n:r));C.height>f.height&&(C.height=f.height),P._desiredSize=C,0==S&&(L.top=Math.max(L.top,.5*P._annoSize.width)),S==p-1&&(L.bottom=Math.min(L.bottom,r-.5*P._annoSize.width)),(R=P._getPosition())==Position.Left?L.left+=C.height:R==Position.Right&&(L.right-=C.height)}}var M=0,T=0,j=n,A=r;for(v=0;v<c;v++){var L=s[v];M=Math.max(M,L.left),T=Math.max(T,L.top),j=Math.min(j,L.right),A=Math.min(A,L.bottom)}for(S=0;S<p;S++){L=o[S];M=Math.max(M,L.left),T=Math.max(T,L.top),j=Math.min(j,L.right),A=Math.min(A,L.bottom)}M=g=Math.max(g,M),j=y=Math.min(y,j),T=m=Math.max(m,T),A=b=Math.min(b,A),this._plotRect=new wijmo_1.Rect(g,m,y-g,b-m);var N=this._plotRect.clone(),I=g,k=this.plotAreas._calculateWidths(this._plotRect.width,c);for(v=0;v<c;v++){A=b,T=m;L=s[v];var E=k[v];for(l=0;l<L.axes.length;l++){var D,R=(P=L.axes[l])._getPosition(),O=new wijmo_1.Rect(I,N.top,E,N.height);R==Position.Bottom?(D=new wijmo_1.Rect(I,A,E,P._desiredSize.height),A+=P._desiredSize.height):R==Position.Top&&(D=new wijmo_1.Rect(I,T-P._desiredSize.height,E,P._desiredSize.height),T-=P._desiredSize.height),P._layout(D,O)}for(l=0;l<this.plotAreas.length;l++){(Y=this.plotAreas[l]).column==v&&Y._setPlotX(I,E)}I+=E}var F=m,V=this.plotAreas._calculateHeights(this._plotRect.height,p);for(S=0;S<p;S++){M=g,j=y;L=o[S];var B=V[S];for(l=0;l<L.axes.length;l++){var X;R=(P=L.axes[l])._getPosition(),O=new wijmo_1.Rect(N.left,F,N.width,B);P._plotrect?(O.left=P._plotrect.left,O.width=P._plotrect.width):k&&k.length>0&&(O.width=k[0]),R==Position.Left?(X=new wijmo_1.Rect(M-P._desiredSize.height,F,B,P._desiredSize.height),M-=P._desiredSize.height):R==Position.Right&&(X=new wijmo_1.Rect(j,F,B,P._desiredSize.height),j+=P._desiredSize.height),P._layout(X,O)}for(l=0;l<this.plotAreas.length;l++){var Y;(Y=this.plotAreas[l]).row==S&&Y._setPlotY(F,B)}F+=B}},e.prototype._convertX=function(t,e,i){var n=this.axisX;return n.reversed?i-(i-e)*(t-n._getMinNum())/(n._getMaxNum()-n._getMinNum()):e+(i-e)*(t-n._getMinNum())/(n._getMaxNum()-n._getMinNum())},e.prototype._convertY=function(t,e,i){var n=this.axisY;return n.reversed?e+(i-e)*(t-n._getMinNum())/(n._getMaxNum()-n._getMinNum()):i-(i-e)*(t-n._getMinNum())/(n._getMaxNum()-n._getMinNum())},e.prototype._getLabelContent=function(t,e){return wijmo_1.isString(e)?this._keywords.replace(e,t):wijmo_1.isFunction(e)?e(t):null},e.prototype._select=function(t,e){var i=!1;if(t==this._selection&&e==this._selectionIndex||(i=!0),this._selection&&this._highlight(this._selection,!1,this._selectionIndex),this._selection=t,this._selectionIndex=e,this._selection&&this._highlight(this._selection,!0,this._selectionIndex),this.selectionMode==SelectionMode.Point){var n=t?t.collectionView:this._cv;n&&(this._notifyCurrentChanged=!1,n.moveCurrentToPosition(t?e:-1),this._notifyCurrentChanged=!0)}i&&this.onSelectionChanged()},e.prototype._highlightCurrent=function(){if(this.selectionMode!=SelectionMode.None){var t=this._selection,e=-1;if(t){var i=t.collectionView;i||(i=this._cv),i&&(e=i.currentPosition),this._highlight(t,!0,e)}}},e.prototype._highlight=function(t,i,n){if(t=wijmo_1.asType(t,SeriesBase,!0),this.selectionMode==SelectionMode.Series){var r=this.series.indexOf(t),s=t.hostElement;i?s.parentNode.appendChild(s):s.parentNode.insertBefore(s,s.parentNode.childNodes.item(r));var o=this._find(s,["rect","ellipse","polyline","polygon","line","path"]);this._highlightItems(o,e._CSS_SELECTION,i),t.legendElement&&this._highlightItems(this._find(t.legendElement,["rect","ellipse","line"]),e._CSS_SELECTION,i)}else if(this.selectionMode==SelectionMode.Point){r=this.series.indexOf(t),s=t.hostElement;if(i){s.parentNode.appendChild(s);var a=t.getPlotElement(n);if(a)if(a instanceof SVGElement){"g"!=a.nodeName&&this._highlightItems([a],e._CSS_SELECTION,i);o=this._find(a,["line","rect","ellipse","path","polygon"]);this._highlightItems(o,e._CSS_SELECTION,i)}else Array.isArray(a)&&this._highlightItems(a,e._CSS_SELECTION,i)}else{s.parentNode.insertBefore(s,s.parentNode.childNodes.item(r));o=this._find(s,["rect","ellipse","line","path","polygon"]);this._highlightItems(o,e._CSS_SELECTION,i)}}},e.prototype._updateTooltip=function(t,e){var i,n=this.hitTest(e);if(n.distance<=t.threshold){var r=t.content;if(n.series&&n.chartElement==ChartElement.PlotArea){var s=n.series.tooltipContent;(s||""===s)&&(r=s)}i=this._getLabelContent(n,r)}i?this._showToolTip(i,new wijmo_1.Rect(e.clientX,e.clientY,5,5)):this._hideToolTip()},e.prototype._updateAuxAxes=function(t,e){for(var i=2;i<t.length;i++){var n=t[i];n._chart=this;for(var r,s,o=[],a=0;a<this.series.length;a++){var h=this.series[a];h.axisX!=n&&h.axisY!=n||o.push(h)}for(a=0;a<o.length;a++){var l=o[a].getDataRect()||o[a]._getDataRect();l&&(n.axisType==AxisType.X&&!e||n.axisType==AxisType.Y&&e?((void 0===r||l.left<r)&&(r=l.left),(void 0===s||l.right>s)&&(s=l.right)):((void 0===r||l.top<r)&&(r=l.top),(void 0===s||l.bottom>s)&&(s=l.bottom)))}var _=o[0].getDataType(0);null==_&&(_=wijmo_1.DataType.Number),t[i]._updateActualLimits(_,r,s)}},e._CSS_AXIS_X="wj-axis-x",e._CSS_AXIS_Y="wj-axis-y",e._CSS_LINE="wj-line",e._CSS_GRIDLINE="wj-gridline",e._CSS_TICK="wj-tick",e._CSS_GRIDLINE_MINOR="wj-gridline-minor",e._CSS_TICK_MINOR="wj-tick-minor",e._CSS_DATA_LABELS="wj-data-labels",e}(FlexChartBase);exports.FlexChartCore=FlexChartCore;var _AreaDef=function(){function t(){this._axes=new Array,this.left=0,this.right=0,this.top=0,this.bottom=0}return Object.defineProperty(t.prototype,"axes",{get:function(){return this._axes},enumerable:!0,configurable:!0}),t}(),_DataInfo=function(){function t(){this.stackAbs={},this._xvals=null}return t.prototype.analyse=function(e,i,n,r,s,o){var a=this;this.minY=NaN,this.maxY=NaN,this.minX=NaN,this.maxX=NaN,this.minXp=NaN,this.minYp=NaN,this.dx=0;var h={},l={},_={};if(this.dataTypeX=null,this.dataTypeY=null,this._xvals=r,null!=r)for(var u=r.length,c=0;c<u;c++){var p=r[c];if((isNaN(this.minX)||this.minX>p)&&(this.minX=p),(isNaN(this.maxX)||this.maxX<p)&&(this.maxX=p),p>0&&(isNaN(this.minXp)||this.minXp>p)&&(this.minXp=p),c>0){var d=Math.abs(p-r[c-1]);!isNaN(d)&&(d<this.dx||0==this.dx)&&(this.dx=d)}}for(c=0;c<e.length;c++){var f=e[c],g=f._getChartType(),m=void 0!==f.chartType,y=f.visibility;if(y!=SeriesVisibility.Hidden&&y!=SeriesVisibility.Legend){var b,v=f.getDataRect();v&&(!isNaN(this.minX)&&this.minX<v.left&&(b=v.right,v.left=this.minX,v.width=b-this.minX),!isNaN(this.maxX)&&this.maxX>v.right&&(v.width=this.maxX-v.left),!isNaN(this.minY)&&this.minY<v.top&&(b=v.bottom,v.top=this.minY,v.height=b-this.minY),!isNaN(this.maxY)&&this.maxY>v.bottom&&(v.height=this.maxY-v.top));var x=null;if(i?f._isCustomAxisY()||(x=f.getValues(1)):f._isCustomAxisX()||(x=f.getValues(1)),x){this.dataTypeX||(this.dataTypeX=f.getDataType(1));for(var w=0;w<x.length;w++){var S=x[w];if(t.isValid(S)&&((isNaN(this.minX)||this.minX>S)&&(this.minX=S),(isNaN(this.maxX)||this.maxX<S)&&(this.maxX=S),w>0&&(!g||g==ChartType.Column||g==ChartType.Bar))){d=Math.abs(S-x[w-1]);!isNaN(d)&&d>0&&(d<this.dx||0==this.dx)&&(this.dx=d)}}}var P=null,C=!1;if(i?(C=f._isCustomAxisX(),P=f.getValues(0)):(C=f._isCustomAxisY(),P=f.getValues(0)),P&&(this.dataTypeY||C||(this.dataTypeY=f.getDataType(0)),isNaN(this.minX)?this.minX=0:x||r||(this.minX=Math.min(this.minX,0)),isNaN(this.maxX)?this.maxX=P.length-1:x||r||(this.maxX=Math.max(this.maxX,P.length-1)),!C))for(w=0;w<P.length;w++){S=P[w],p=x?wijmo_1.asNumber(x[w],!0):r?wijmo_1.asNumber(r[w],!0):w;wijmo_1.isArray(S)?S.forEach(function(t){a._parseYVal(t,p,m,_,h,l)}):this._parseYVal(S,p,m,_,h,l)}var M=f.getDataRect(new wijmo_1.Rect(this.minX,this.minY,this.maxX-this.minX,this.maxY-this.minY),v);M&&(this.minX=M.left,this.maxX=M.right,this.minY=M.top,this.maxY=M.bottom)}}if(n==Stacking.Stacked){for(var T in h)h[T]>this.maxY&&(this.maxY=h[T]);for(var T in l)l[T]<this.minY&&(this.minY=l[T])}else if(n==Stacking.Stacked100pc)for(var T in this.minY=0,this.maxY=1,_){var j=_[T];if(isFinite(j)&&0!=j){var A=h[T],L=l[T];isFinite(A)&&(A=Math.min(A/j,this.maxY)),isFinite(L)&&(L=Math.max(L/j,this.minY))}}this.stackAbs=_,s&&(i?this.minY=isNaN(this.minYp)?1:this.minYp:this.minX=isNaN(this.minXp)?1:this.minXp),o&&(i?this.minX=isNaN(this.minXp)?1:this.minXp:this.minY=isNaN(this.minYp)?1:this.minYp)},t.prototype._parseYVal=function(e,i,n,r,s,o){t.isValid(e)&&(null!=e&&(isNaN(this.minY)||this.minY>e)&&(this.minY=e),null!=e&&(isNaN(this.maxY)||this.maxY<e)&&(this.maxY=e),e>0&&(isNaN(this.minYp)||this.minYp>e)&&(this.minYp=e),n||(e>0?isNaN(s[i])?s[i]=e:s[i]+=e:isNaN(o[i])?o[i]=e:o[i]+=e,isNaN(r[i])?r[i]=Math.abs(e):r[i]+=Math.abs(e)))},t.prototype.getMinY=function(){return this.minY},t.prototype.getMaxY=function(){return this.maxY},t.prototype.getMinX=function(){return this.minX},t.prototype.getMaxX=function(){return this.maxX},t.prototype.getMinXp=function(){return this.minXp},t.prototype.getMinYp=function(){return this.minYp},t.prototype.getDeltaX=function(){return this.dx},t.prototype.getDataTypeX=function(){return this.dataTypeX},t.prototype.getDataTypeY=function(){return this.dataTypeY},t.prototype.getStackedAbsSum=function(t){var e=this.stackAbs[t];return isFinite(e)?e:0},t.prototype.getXVals=function(){return this._xvals},t.isValid=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var i=t.length,n=0;n<i;n++)if(!isFinite(t[n]))return!1;return!0},t}();exports._DataInfo=_DataInfo;var LineMarkerLines,LineMarkerInteraction,LineMarkerAlignment,LineMarkers=function(){function t(){this._moveMarker=function(t){var e=t.currentTarget,i=this._markers,n=e.getAttribute("data-markerIndex");null!=n&&i[n].forEach(function(e){e._moveMarker(t)})},this._markers=[],this._bindMoveMarker=this._moveMarker.bind(this)}return t.prototype.attach=function(t){var e,i,n=t.chart.hostElement,r=this._markers,s=n.getAttribute("data-markerIndex");null!=s?(i=r[s])&&wijmo_1.isArray(i)?i.push(t):(r[s]=[t],this._bindMoveEvent(n)):(e=r.length,i=[t],r.push(i),n.setAttribute("data-markerIndex",e),this._bindMoveEvent(n))},t.prototype.detach=function(t){var e,i,n=t.chart.hostElement,r=this._markers,s=n.getAttribute("data-markerIndex");null!=s&&((e=(i=r[s]).indexOf(t))>-1&&i.splice(e,1),0===i.length&&((e=r.indexOf(i))>-1&&(r[e]=void 0),this._unbindMoveEvent(n)))},t.prototype._unbindMoveEvent=function(t){var e=this._bindMoveMarker;t.removeEventListener("mousemove",e),"ontouchstart"in window&&t.removeEventListener("touchmove",e)},t.prototype._bindMoveEvent=function(t){var e=this._bindMoveMarker;t.addEventListener("mousemove",e),"ontouchstart"in window&&t.addEventListener("touchmove",e)},t}(),lineMarkers=new LineMarkers;!function(t){t[t.None=0]="None",t[t.Vertical=1]="Vertical",t[t.Horizontal=2]="Horizontal",t[t.Both=3]="Both"}(LineMarkerLines=exports.LineMarkerLines||(exports.LineMarkerLines={})),function(t){t[t.None=0]="None",t[t.Move=1]="Move",t[t.Drag=2]="Drag"}(LineMarkerInteraction=exports.LineMarkerInteraction||(exports.LineMarkerInteraction={})),function(t){t[t.Auto=2]="Auto",t[t.Right=0]="Right",t[t.Left=1]="Left",t[t.Bottom=4]="Bottom",t[t.Top=6]="Top"}(LineMarkerAlignment=exports.LineMarkerAlignment||(exports.LineMarkerAlignment={}));var LineMarker=function(){function t(t,e){this._wrapperMousedown=null,this._wrapperMouseup=null,this.positionChanged=new wijmo_1.Event;this._chart=t,t.rendered.addHandler(this._initialize,this),this._resetDefaultValue(),wijmo_1.copy(this,e),this._initialize()}return Object.defineProperty(t.prototype,"chart",{get:function(){return this._chart},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isVisible",{get:function(){return this._isVisible},set:function(t){t!==this._isVisible&&(this._isVisible=wijmo_1.asBoolean(t),this._marker&&this._toggleVisibility())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"seriesIndex",{get:function(){return this._seriesIndex},set:function(t){t!==this._seriesIndex&&(this._seriesIndex=wijmo_1.asNumber(t,!0))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"horizontalPosition",{get:function(){return this._horizontalPosition},set:function(t){if(t!==this._horizontalPosition){if(this._horizontalPosition=wijmo_1.asNumber(t,!0),this._horizontalPosition<0||this._horizontalPosition>1)throw"horizontalPosition's value should be in (0, 1).";this._marker&&this._updateMarkerPosition()}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"x",{get:function(){var t=this._targetPoint.x-this._plotRect.left;return this._chart.axisX.convertBack(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){var t=this._targetPoint.y-this._plotRect.top;return this._chart.axisY.convertBack(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"content",{get:function(){return this._content},set:function(t){t!==this._content&&(this._content=wijmo_1.asFunction(t),this._updateMarkerPosition())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"verticalPosition",{get:function(){return this._verticalPosition},set:function(t){if(t!==this._verticalPosition){if(this._verticalPosition=wijmo_1.asNumber(t,!0),this._verticalPosition<0||this._verticalPosition>1)throw"verticalPosition's value should be in (0, 1).";this._marker&&this._updateMarkerPosition()}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alignment",{get:function(){return this._alignment},set:function(t){t!==this._alignment&&(this._alignment=t,this._marker&&this._updatePositionByAlignment())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"lines",{get:function(){return this._lines},set:function(t){(t=wijmo_1.asEnum(t,LineMarkerLines))!=this._lines&&(this._lines=t,this._marker&&this._resetLinesVisibility())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"interaction",{get:function(){return this._interaction},set:function(t){(t=wijmo_1.asEnum(t,LineMarkerInteraction))!=this._interaction&&(this._marker&&this._detach(),this._interaction=t,this._marker&&this._attach(),this._toggleElesDraggableClass(this._interaction==LineMarkerInteraction.Drag))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dragThreshold",{get:function(){return this._dragThreshold},set:function(t){t!=this._dragThreshold&&(this._dragThreshold=wijmo_1.asNumber(t))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dragContent",{get:function(){return this._dragContent},set:function(e){e!==this._dragContent&&(this._dragContent=wijmo_1.asBoolean(e)),wijmo_1.toggleClass(this._dragEle,t._CSS_LINE_DRAGGABLE,this._interaction===LineMarkerInteraction.Drag&&this._dragContent&&this._lines!==LineMarkerLines.None)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dragLines",{get:function(){return this._dragLines},set:function(t){t!=this._dragLines&&(this._dragLines=wijmo_1.asBoolean(t))},enumerable:!0,configurable:!0}),t.prototype.onPositionChanged=function(t){this.positionChanged.raise(this,t)},t.prototype.remove=function(){var t=this._chart;this._marker&&(t.rendered.removeHandler(this._initialize,this),this._detach(),this._removeMarker(),this._wrapperMoveMarker=null,this._wrapperMousedown=null,this._wrapperMouseup=null)},t.prototype._attach=function(){var e=this._chart.hostElement;this._interaction!==LineMarkerInteraction.None?wijmo_1.addClass(e,t._CSS_TOUCH_DISABLED):wijmo_1.removeClass(e,t._CSS_TOUCH_DISABLED),lineMarkers.attach(this),this._attachDrag()},t.prototype._attachDrag=function(){this._interaction===LineMarkerInteraction.Drag&&(this._wrapperMousedown||(this._wrapperMousedown=this._onMousedown.bind(this)),this._wrapperMouseup||(this._wrapperMouseup=this._onMouseup.bind(this)),this._toggleDragEventAttach(!0))},t.prototype._detach=function(){wijmo_1.removeClass(this._chart.hostElement,t._CSS_TOUCH_DISABLED),lineMarkers.detach(this),this._detachDrag()},t.prototype._detachDrag=function(){this._interaction===LineMarkerInteraction.Drag&&this._toggleDragEventAttach(!1)},t.prototype._toggleDragEventAttach=function(t){var e=this._chart.hostElement,i=t?"addEventListener":"removeEventListener";e[i]("mousedown",this._wrapperMousedown),document[i]("mouseup",this._wrapperMouseup),"ontouchstart"in window&&e[i]("touchstart",this._wrapperMousedown),"ontouchend"in window&&document[i]("touchend",this._wrapperMouseup)},t.prototype._onMousedown=function(e){var i,n,r,s,o,a=this._getEventPoint(e);this._interaction===LineMarkerInteraction.Drag&&(s=!(0===(i=wijmo_1.getElementRect(this._hLine)).width||0===i.height),o=!(0===(n=wijmo_1.getElementRect(this._vLine)).width||0===n.height),r=wijmo_1.getElementRect(this._markerContent),this._dragContent&&this._pointInRect(a,r)?(this._capturedEle=this._markerContent,this._contentDragStartPoint=new wijmo_1.Point(a.x,a.y),this._mouseDownCrossPoint=new wijmo_1.Point(this._targetPoint.x,this._targetPoint.y)):s&&(Math.abs(i.top-a.y)<=this._dragThreshold||Math.abs(a.y-i.top-i.height)<=this._dragThreshold||a.y>=i.top&&a.y<=i.top+i.height)?(this._capturedEle=this._hLine,this._contentDragStartPoint=void 0,wijmo_1.addClass(this._chart.hostElement,t._CSS_LINE_DRAGGABLE)):o&&(Math.abs(n.left-a.x)<=this._dragThreshold||Math.abs(a.x-n.left-n.width)<=this._dragThreshold||a.x>=n.left&&a.x<=n.left+n.width)&&(this._capturedEle=this._vLine,this._contentDragStartPoint=void 0,wijmo_1.addClass(this._chart.hostElement,t._CSS_LINE_DRAGGABLE)),e.preventDefault())},t.prototype._onMouseup=function(e){var i=this._alignment===LineMarkerAlignment.Auto&&this._capturedEle===this._markerContent&&this._lines!==LineMarkerLines.None;this._capturedEle=void 0,this._contentDragStartPoint=void 0,this._mouseDownCrossPoint=void 0,i&&(this._updatePositionByAlignment(),this._updatePositionByAlignment()),wijmo_1.removeClass(this._chart.hostElement,t._CSS_LINE_DRAGGABLE)},t.prototype._moveMarker=function(t){var e,i,n,r,s,o,a=this._chart,h=this._getEventPoint(t),l=this._plotRect,_=this._interaction===LineMarkerInteraction.Drag,u=this._lines===LineMarkerLines.Horizontal,c=this._lines===LineMarkerLines.Vertical,p=this._seriesIndex,d=wijmo_1.getElementRect(a.hostElement);if(l&&this._isVisible&&this._interaction!==LineMarkerInteraction.None&&(this._interaction!==LineMarkerInteraction.Drag||this._capturedEle&&this._lines!==LineMarkerLines.None)){if(_&&(this._contentDragStartPoint?(h.x=u?this._targetPoint.x:this._mouseDownCrossPoint.x+h.x-this._contentDragStartPoint.x,h.y=c?this._targetPoint.y:this._mouseDownCrossPoint.y+h.y-this._contentDragStartPoint.y):u||!this._dragLines&&this._capturedEle===this._hLine?h.x=this._targetPoint.x:(c||!this._dragLines&&this._capturedEle===this._vLine)&&(h.y=this._targetPoint.y)),_&&this._lines===LineMarkerLines.Horizontal||!this._dragLines&&this._capturedEle===this._hLine){if(h.y<=l.top||h.y>=l.top+l.height)return}else if(_&&this._lines===LineMarkerLines.Vertical||!this._dragLines&&this._capturedEle===this._vLine){if(h.x<=l.left||h.x>=l.left+l.width)return}else if(h.x<=l.left||h.y<=l.top||h.x>=l.left+l.width||h.y>=l.top+l.height)return;if(null!=p&&p>=0&&p<a.series.length){if(null==(i=(e=a.series[p]).hitTest(new wijmo_1.Point(h.x,NaN)))||null==i.x||null==i.y)return;n=e.axisX||a.axisX,r=e._getAxisY(),s=wijmo_1.isDate(i.x)?FlexChartCore._toOADate(i.x):i.x,s=wijmo_1.isString(s)?i.pointIndex:s,o=wijmo_1.isDate(i.y)?FlexChartCore._toOADate(i.y):i.y;var f=this._getElementPaddingValuee(a.hostElement,"padding-left"),g=this._getElementPaddingValuee(a.hostElement,"padding-top");h.x=n.convert(s)+f+d.left,h.y=r.convert(o)+g+d.top}this._updateMarkerPosition(h),t.preventDefault()}},t.prototype._getElementPaddingValuee=function(t,e){return+window.getComputedStyle(t,null).getPropertyValue(e).replace("px","")},t.prototype._show=function(t){(t||this._marker).style.display="block"},t.prototype._hide=function(t){(t||this._marker).style.display="none"},t.prototype._toggleVisibility=function(){this._isVisible?this._show():this._hide()},t.prototype._resetDefaultValue=function(){this._isVisible=!0,this._alignment=LineMarkerAlignment.Auto,this._lines=LineMarkerLines.None,this._interaction=LineMarkerInteraction.None,this._horizontalPosition=null,this._verticalPosition=null,this._content=null,this._seriesIndex=null,this._dragThreshold=15,this._dragContent=!1,this._dragLines=!1,this._targetPoint=new wijmo_1.Point},t.prototype._initialize=function(){var t,e=this._chart.hostElement.querySelector("."+FlexChartCore._CSS_PLOT_AREA);this._plot=e,this._marker||this._createMarker(),e&&(this._plotRect=wijmo_1.getElementRect(e),t=e.getBBox(),this._plotRect.width=t.width,this._plotRect.height=t.height,this._updateMarkerSize(),this._updateLinesSize()),this._updateMarkerPosition(),this._wrapperMoveMarker=this._moveMarker.bind(this),this._attach()},t.prototype._createMarker=function(){var e,i;e=document.createElement("div"),wijmo_1.addClass(e,t._CSS_MARKER),(i=this._getContainer()).appendChild(e),this._markerContainer=i,this._marker=e,this._createChildren()},t.prototype._removeMarker=function(){var t=this._markerContainer;t.removeChild(this._marker),this._content=null,this._hLine=null,this._vLine=null,t.hasChildNodes()||(this._chart.hostElement.removeChild(this._markerContainer),this._markerContainer=null),this._marker=null},t.prototype._getContainer=function(){var e=this._chart.hostElement.querySelector(t._CSS_MARKER_CONTAINER);return e||(e=this._createContainer()),e},t.prototype._createContainer=function(){var e=document.createElement("div"),i=this._chart.hostElement;return wijmo_1.addClass(e,t._CSS_MARKER_CONTAINER),i.insertBefore(e,i.firstChild),e},t.prototype._createChildren=function(){var e,i,n,r,s=this._marker;(r=document.createElement("div")).style.position="absolute",r.style.height="100%",r.style.width="100%",s.appendChild(r),this._dragEle=r,e=document.createElement("div"),wijmo_1.addClass(e,t._CSS_MARKER_CONTENT),s.appendChild(e),this._markerContent=e,i=document.createElement("div"),wijmo_1.addClass(i,t._CSS_MARKER_HLINE),s.appendChild(i),this._hLine=i,n=document.createElement("div"),wijmo_1.addClass(n,t._CSS_MARKER_VLINE),s.appendChild(n),this._vLine=n,this._toggleElesDraggableClass(this._interaction===LineMarkerInteraction.Drag),this._resetLinesVisibility()},t.prototype._toggleElesDraggableClass=function(e){wijmo_1.toggleClass(this._hLine,t._CSS_LINE_DRAGGABLE,e),wijmo_1.toggleClass(this._vLine,t._CSS_LINE_DRAGGABLE,e),wijmo_1.toggleClass(this._dragEle,t._CSS_LINE_DRAGGABLE,e&&this._dragContent&&this._lines!==LineMarkerLines.None)},t.prototype._updateMarkerSize=function(){var t=this._plotRect,e=this._chart.hostElement,i=window.getComputedStyle(e,null),n=wijmo_1.getElementRect(e);this._marker&&(this._marker.style.marginTop=t.top-n.top-(parseFloat(i.getPropertyValue("padding-top"))||0)+"px",this._marker.style.marginLeft=t.left-n.left-(parseFloat(i.getPropertyValue("padding-left"))||0)+"px")},t.prototype._updateLinesSize=function(){var t=this._plotRect;this._hLine&&this._vLine&&(this._hLine.style.width=t.width+"px",this._vLine.style.height=t.height+"px")},t.prototype._resetLinesVisibility=function(){this._hLine&&this._vLine&&(this._hide(this._hLine),this._hide(this._vLine),this._lines!==LineMarkerLines.Horizontal&&this._lines!==LineMarkerLines.Both||this._show(this._hLine),this._lines!==LineMarkerLines.Vertical&&this._lines!==LineMarkerLines.Both||this._show(this._vLine))},t.prototype._updateMarkerPosition=function(t){var e,i,n=this._plotRect,r=this._targetPoint,s=!1;this._interaction,LineMarkerInteraction.Drag;this._plot&&(e=n.left+n.width*(this._horizontalPosition||0),i=n.top+n.height*(this._verticalPosition||0),null==this._horizontalPosition&&t&&(e=t.x),null==this._verticalPosition&&t&&(i=t.y),e===r.x&&i===r.y||(s=!0),r.x=e,r.y=i,this._toggleVisibility(),this._content&&this._updateContent(),s&&this._raisePositionChanged(e,i),this._updatePositionByAlignment(!!t))},t.prototype._updateContent=function(){var t,e=this._chart,i=this._targetPoint,n=e.hitTest(i);t=this._content.call(null,n,i),this._markerContent.innerHTML=t||""},t.prototype._raisePositionChanged=function(t,e){this._plotRect;this.onPositionChanged(new wijmo_1.Point(t,e))},t.prototype._updatePositionByAlignment=function(t){var e=this._alignment,i=this._targetPoint,n=this._marker,r=0,s=0,o=n.clientWidth,a=n.clientHeight,h=this._plotRect;this._plot&&(!this._capturedEle||this._capturedEle&&this._capturedEle!==this._markerContent?(e===LineMarkerAlignment.Auto?(i.x+o+12>h.left+h.width&&i.x-o>=0&&(s=o),r=a,i.y-a<h.top&&(r=0)):(1==(1&e)&&(s=o),2==(2&e)&&(r=a)),this._interaction===LineMarkerInteraction.Move&&0===r&&0===s&&null==this.verticalPosition&&(s=-12)):(parseInt(this._hLine.style.top)>0&&(r=a),parseInt(this._vLine.style.left)>0&&(s=o)),n.style.left=i.x-s-h.left+"px",n.style.top=i.y-r-h.top+"px",this._hLine.style.top=r+"px",this._hLine.style.left=h.left-i.x+s+"px",this._vLine.style.top=h.top-i.y+r+"px",this._vLine.style.left=s+"px")},t.prototype._getEventPoint=function(t){return t instanceof MouseEvent?new wijmo_1.Point(t.pageX,t.pageY):new wijmo_1.Point(t.changedTouches[0].pageX,t.changedTouches[0].pageY)},t.prototype._pointInRect=function(t,e){return!(!t||!e)&&(t.x>=e.left&&t.x<=e.left+e.width&&t.y>=e.top&&t.y<=e.top+e.height)},t._CSS_MARKER="wj-chart-linemarker",t._CSS_MARKER_HLINE="wj-chart-linemarker-hline",t._CSS_MARKER_VLINE="wj-chart-linemarker-vline",t._CSS_MARKER_CONTENT="wj-chart-linemarker-content",t._CSS_MARKER_CONTAINER="wj-chart-linemarker-container",t._CSS_LINE_DRAGGABLE="wj-chart-linemarker-draggable",t._CSS_TOUCH_DISABLED="wj-flexchart-touch-disabled",t}();exports.LineMarker=LineMarker;var FlexChart=function(t){function e(e,i){var n=t.call(this,e,null)||this;return n._chartType=ChartType.Column,n.initialize(i),n}return __extends(e,t),e.prototype._getChartType=function(){return this._chartType},Object.defineProperty(e.prototype,"chartType",{get:function(){return this._chartType},set:function(t){(t=wijmo_1.asEnum(t,ChartType))!=this._chartType&&(this._chartType=t,this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rotated",{get:function(){return this._rotated},set:function(t){t!=this._rotated&&(this._rotated=wijmo_1.asBoolean(t),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"stacking",{get:function(){return this._stacking},set:function(t){(t=wijmo_1.asEnum(t,Stacking))!=this._stacking&&(this._stacking=t,this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this._options},set:function(t){t!=this._options&&(this._options=t,this.invalidate())},enumerable:!0,configurable:!0}),e}(FlexChartCore);exports.FlexChart=FlexChart;var _AreaPlotter=function(t){function e(){var e=t.call(this)||this;return e.stacking=Stacking.None,e.isSpline=!1,e.stackPos={},e.stackNeg={},e}return __extends(e,t),e.prototype.adjustLimits=function(t,e){this.dataInfo=t;for(var i=t.getMinX(),n=t.getMinY(),r=t.getMaxX(),s=t.getMaxY(),o=0;o<this.chart.series.length;o++){var a=this.chart.series[o];if(this._isRange(a)){var h=a._getChartType();if(!h||h==ChartType.Area)for(var l=a._getBindingValues(1),_=0;_<l.length;_++)l[_]>s?s=l[_]:l[_]<n&&(n=l[_])}}if(this.isSpline){var u=.1*(s-n);this.chart.axisY._getLogBase()||(n-=u),s+=u}return this.rotated?new wijmo_1.Rect(n,i,s-n,r-i):new wijmo_1.Rect(i,n,r-i,s-n)},e.prototype.clear=function(){t.prototype.clear.call(this),this.stackNeg={},this.stackPos={}},e.prototype.plotSeries=function(t,e,i,n,r,s,o,a){var h=n;if(this._isRange(h))this.plotSeriesRanged(t,e,i,n,r,s,o,a);else{var l=[],_=this.chart.series.indexOf(n),u=n.getValues(0),c=n.getValues(1);if(u){var p=u.length;if(p){c||(c=this.dataInfo.getXVals());var d=!0;c?c.length<p&&(p=c.length):(d=!1,c=new Array(p));var f=new Array,g=new Array,m=new Array,y=new Array,b=this.stacking!=Stacking.None&&!h._isCustomAxisY(),v=this.stacking==Stacking.Stacked100pc&&!h._isCustomAxisY();void 0!==h._getChartType()&&(b=v=!1);for(var x=this.rotated,w=!1,S=h.interpolateNulls,P=null,C=null,M=this.chart._plotRect,T=0;T<p;T++){var j=d?c[T]:T,A=u[T];if((null===P||j>P)&&(P=j),(null===C||j<C)&&(C=j),_DataInfo.isValid(j,A)){var L=x?i.convert(j):e.convert(j);if(b){if(v)A/=this.dataInfo.getStackedAbsSum(j);var N=0;A>=0?(N=isNaN(this.stackPos[j])?0:this.stackPos[j],A=this.stackPos[j]=N+A):(N=isNaN(this.stackNeg[j])?0:this.stackNeg[j],A=this.stackNeg[j]=N+A),x?(N<e.actualMin&&(N=e.actualMin),m.push(e.convert(N)),y.push(L)):(m.push(L),N<i.actualMin&&(N=i.actualMin),y.push(i.convert(N)))}if(x){var I=e.convert(A);if(isNaN(L)||isNaN(I))w=!0,b||!0===S||(f.push(void 0),g.push(void 0));else if(f.push(I),g.push(L),FlexChartCore._contains(M,new wijmo_1.Point(I,L)))(k=new _CircleArea(new wijmo_1.Point(I,L),this._DEFAULT_SYM_SIZE)).tag=new _DataPoint(_,T,A,j),this.hitTester.add(k,_)}else{var k;I=i.convert(A);if(isNaN(L)||isNaN(I))w=!0,b||!0===S||(f.push(void 0),g.push(void 0));else if(f.push(L),g.push(I),FlexChartCore._contains(M,new wijmo_1.Point(L,I)))(k=new _CircleArea(new wijmo_1.Point(L,I),this._DEFAULT_SYM_SIZE)).tag=new _DataPoint(_,T,j,A),this.hitTester.add(k,_)}}else w=!0,b||!0===S||(f.push(void 0),g.push(void 0))}a&&f.forEach(function(t,e){null!=t&&l.push(new wijmo_1.Point(t,g[e]))});var E=this._DEFAULT_WIDTH,D=r._getColorLight(_),R=r._getColor(_),O=_BasePlotter.cloneStyle(n.style,["fill"]),F=_BasePlotter.cloneStyle(n.style,["stroke"]);if(!b&&!0!==S&&w){var V=[],B=[];for(T=0;T<p;T++)if(void 0===f[T]){if(V.length>1){if(this.isSpline)V=(X=this._convertToSpline(V,B)).xs,B=X.ys;t.stroke=R,t.strokeWidth=E,t.fill="none",t.drawLines(V,B,null,O),this.hitTester.add(new _LinesArea(V,B),_),x?(V.push(e.convert(e.actualMin),e.convert(e.actualMin)),B.push(i.convert(i.actualMax),i.convert(i.actualMin))):(V.push(V[V.length-1],V[0]),B.push(i.convert(i.actualMin),i.convert(i.actualMin))),t.fill=D,t.stroke="none",t.drawPolygon(V,B,null,F)}V=[],B=[]}else V.push(f[T]),B.push(g[T]);if(V.length>1){if(this.isSpline)V=(X=this._convertToSpline(V,B)).xs,B=X.ys;t.stroke=R,t.strokeWidth=E,t.fill="none",t.drawLines(V,B,null,O),this.hitTester.add(new _LinesArea(V,B),_),x?(V.push(e.convert(e.actualMin),e.convert(e.actualMin)),B.push(i.convert(i.actualMax),i.convert(i.actualMin))):(V.push(V[V.length-1],V[0]),B.push(i.convert(i.actualMin),i.convert(i.actualMin))),t.fill=D,t.stroke="none",t.drawPolygon(V,B,null,F)}}else{var X;if(this.isSpline)f=(X=this._convertToSpline(f,g)).xs,g=X.ys;if(b){if(this.isSpline){var Y=this._convertToSpline(m,y);m=Y.xs,y=Y.ys}f=f.concat(m.reverse()),g=g.concat(y.reverse())}else x?(f.push(e.convert(e.actualMin),e.convert(e.actualMin)),g[0]>g[g.length-1]?g.push(i.convert(P),i.convert(C)):g.push(i.convert(C),i.convert(P))):(f[0]>f[f.length-1]?f.push(e.convert(C),e.convert(P)):f.push(e.convert(P),e.convert(C)),g.push(i.convert(i.actualMin),i.convert(i.actualMin)));t.fill=D,t.stroke="none",t.drawPolygon(f,g,null,F),b?(f=f.slice(0,f.length-m.length),g=g.slice(0,g.length-y.length)):(f=f.slice(0,f.length-2),g=g.slice(0,g.length-2)),t.stroke=R,t.strokeWidth=E,t.fill="none",t.drawLines(f,g,null,O),this.hitTester.add(new _LinesArea(f,g),_)}this._drawSymbols(t,n,_),a&&l&&l.length&&a(l)}}}},e.prototype._isRange=function(t){var e=this.chart?this.chart._bindingSeparator:",",i=null==t.binding?null:t.binding.split(e);return null!=i&&2==i.length},e.prototype.plotSeriesRanged=function(t,e,i,n,r,s,o,a){var h=[],l=this.chart.series.indexOf(n),_=n,u=n.getValues(0),c=n.getValues(1),p=_._getBindingValues(1);if(u){var d=u.length;if(d){c||(c=this.dataInfo.getXVals());var f=!0;c?c.length<d&&(d=c.length):(f=!1,c=new Array(d));for(var g=new Array,m=new Array,y=new Array,b=this.rotated,v=!1,x=_.interpolateNulls,w=this.chart._plotRect,S=0;S<d;S++){var P=f?c[S]:S,C=u[S],M=p[S];if(_DataInfo.isValid(P,C,M)){var T=b?i.convert(P):e.convert(P);if(b){var j=e.convert(C),A=e.convert(M);if(isNaN(T)||isNaN(j))v=!0,!0!==x&&(g.push(void 0),m.push(void 0),y.push(void 0));else{if(g.push(j),m.push(T),y.push(A),FlexChartCore._contains(w,new wijmo_1.Point(j,T)))(L=new _CircleArea(new wijmo_1.Point(j,T),this._DEFAULT_SYM_SIZE)).tag=new _DataPoint(l,S,C,P),this.hitTester.add(L,l);if(FlexChartCore._contains(w,new wijmo_1.Point(A,T)))(L=new _CircleArea(new wijmo_1.Point(A,T),this._DEFAULT_SYM_SIZE)).tag=new _DataPoint(l,S,M,P),this.hitTester.add(L,l)}}else{j=i.convert(C),A=i.convert(M);if(isNaN(T)||isNaN(j))v=!0,!0!==x&&(g.push(void 0),m.push(void 0),y.push(void 0));else{var L;if(g.push(T),m.push(j),y.push(A),FlexChartCore._contains(w,new wijmo_1.Point(T,j)))(L=new _CircleArea(new wijmo_1.Point(T,j),this._DEFAULT_SYM_SIZE)).tag=new _DataPoint(l,S,P,C),this.hitTester.add(L,l);if(FlexChartCore._contains(w,new wijmo_1.Point(T,A)))(L=new _CircleArea(new wijmo_1.Point(T,A),this._DEFAULT_SYM_SIZE)).tag=new _DataPoint(l,S,P,M),this.hitTester.add(L,l)}}}else v=!0,!0!==x&&(g.push(void 0),m.push(void 0),y.push(void 0))}a&&g.forEach(function(t,e){null!=t&&h.push(new wijmo_1.Point(t,m[e]))});var N=this._DEFAULT_WIDTH,I=r._getColorLight(l),k=r._getColor(l),E=_BasePlotter.cloneStyle(n.style,["fill"]),D=_BasePlotter.cloneStyle(n.style,["stroke"]);if(!0!==x&&v){var R=[],O=[],F=[];for(S=0;S<d;S++)if(void 0===g[S]){if(R.length>1){var V=b?F.slice(0).reverse():R.slice(0).reverse(),B=b?O.slice(0).reverse():F.slice(0).reverse();this._drawRangedArea(t,R,O,V,B,I,k,N,D,E),this.hitTester.add(new _LinesArea(R,O),l),this.hitTester.add(new _LinesArea(V,B),l)}R=[],O=[],F=[]}else R.push(g[S]),O.push(m[S]),F.push(y[S]);if(R.length>1){V=b?F.slice(0).reverse():R.slice(0).reverse(),B=b?O.slice(0).reverse():F.slice(0).reverse();this._drawRangedArea(t,R,O,V,B,I,k,N,D,E),this.hitTester.add(new _LinesArea(R,O),l),this.hitTester.add(new _LinesArea(V,B),l)}}else{var X=b?y.slice(0).reverse():g.slice(0).reverse(),Y=b?m.slice(0).reverse():y.slice(0).reverse();this._drawRangedArea(t,g,m,X,Y,I,k,N,D,E),this.hitTester.add(new _LinesArea(g,m),l),this.hitTester.add(new _LinesArea(X,Y),l)}this._drawSymbols(t,n,l),a&&h&&h.length&&a(h)}}},e.prototype._drawRangedArea=function(t,e,i,n,r,s,o,a,h,l){if(this.isSpline){var _=this._convertToSpline(e,i),u=this._convertToSpline(n,r);e=_.xs,i=_.ys,n=u.xs,r=u.ys}e=e.concat(n),i=i.concat(r),t.fill=s,t.stroke="none",t.drawPolygon(e,i,null,h),e=e.slice(0,e.length-n.length),i=i.slice(0,i.length-r.length),t.stroke=o,t.strokeWidth=a,t.fill="none",t.drawLines(e,i,null,l),t.drawLines(n,r,null,l)},e.prototype._convertToSpline=function(t,e){if(t&&e){var i=new _Spline(t,e).calculate();return{xs:i.xs,ys:i.ys}}return{xs:t,ys:e}},e.prototype._drawSymbols=function(t,e,i){var n=this.getItemFormatter(e);if(null!=n)for(var r=this.hitTester._map[i],s=0;s<r.length;s++){var o=wijmo_1.tryCast(r[s],_CircleArea);if(o){var a=o.tag;t.startGroup();var h=new HitTestInfo(this.chart,o.center,ChartElement.SeriesSymbol);h._setDataPoint(a),n(t,h,function(){}),t.endGroup()}}},e}(_BasePlotter);exports._AreaPlotter=_AreaPlotter;var _BarPlotter=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.origin=0,e.width=.7,e.isVolume=!1,e._volHelper=null,e.stackPosMap={},e.stackNegMap={},e.stacking=Stacking.None,e}return __extends(e,t),e.prototype.clear=function(){t.prototype.clear.call(this),this.stackNegMap[this.chart.axisY._uniqueId]={},this.stackPosMap[this.chart.axisY._uniqueId]={},this._volHelper=null},e.prototype.load=function(){if(t.prototype.load.call(this),this.isVolume){var e,i,n,r,s,o,a,h,l=null,_=null;for(o=0;o<this.chart.series.length;o++){if(s=(e=this.chart.series[o]).getDataType(1)||e.chart._xDataType,i=e._getAxisX(),(n=null===(n=e._getChartType())||wijmo_1.isUndefined(n)?this.chart._getChartType():n)===ChartType.Column){var u=this.chart?this.chart._bindingSeparator:",",c=e.binding.split(u).length-1;r=e._getBindingValues(c)}else r=n===ChartType.Candlestick?e._getBindingValues(4):null;var p;if(s===wijmo_1.DataType.Date)for(a=[],h=[],o=0;o<e._getLength();o++)p=e._getItem(o)[e.bindingX].valueOf(),a.push(p),h.push({value:p,text:wijmo_1.Globalize.format(new Date(p),i.format||"d")});else a=this.dataInfo.getXVals();if(l=this.dataInfo.getMinX(),_=this.dataInfo.getMaxX(),r&&r.length>0){this._volHelper=new _VolumeHelper(r,a,l,_,s),i._customConvert=this._volHelper.convert.bind(this._volHelper),i._customConvertBack=this._volHelper.convertBack.bind(this._volHelper),h&&h.length>0&&(this._itemsSource=i.itemsSource=h);break}}}},e.prototype.unload=function(){var e;t.prototype.unload.call(this);for(var i=0;i<this.chart.series.length;i++)(e=this.chart.series[i]._getAxisX())&&(e._customConvert=null,e._customConvertBack=null,e.itemsSource&&e.itemsSource==this._itemsSource&&(this._itemsSource=e.itemsSource=null))},e.prototype.adjustLimits=function(t,e){this.dataInfo=t;var i=t.getMinX(),n=t.getMaxX(),r=t.getMinY(),s=t.getMaxY(),o=t.getDeltaX();o<=0&&(o=1),!this.isVolume||this.chart._getChartType()!==ChartType.Column&&this.chart._getChartType()!==ChartType.Candlestick?this.unload():this.load();for(var a=0;a<this.chart.series.length;a++){var h=this.chart.series[a],l=h._getChartType();if((l=null===l||wijmo_1.isUndefined(l)?this.chart._getChartType():l)===ChartType.Column||l===ChartType.Bar)if(this._isRange(h))h._getBindingValues(1).forEach(function(t){t<r?r=t:t>s&&(s=t)})}return this.rotated?(this.chart.axisY._getLogBase()||t.getDataTypeY()===wijmo_1.DataType.Date||(this.origin>s?s=this.origin:this.origin<r&&(r=this.origin)),new wijmo_1.Rect(r,i-.5*o,s-r,n-i+o)):(this.chart.axisY._getLogBase()||t.getDataTypeY()===wijmo_1.DataType.Date||(this.origin>s?s=this.origin:this.origin<r&&(r=this.origin)),new wijmo_1.Rect(i-.5*o,r,n-i+o,s-r))},e.prototype._isRange=function(t){var e=this.chart?this.chart._bindingSeparator:",",i=(null==t.binding?"":t.binding.split(e)).length-1;return this.isVolume?2===i:1===i},e.prototype.plotSeries=function(t,e,i,n,r,s,o,a){var h=[],l=this.chart.series.indexOf(n),_=wijmo_1.asType(n,SeriesBase),u=this.chart._options,c=this.width,p=0;if(s=s||0,o=o||1,u&&u.groupWidth){var d=u.groupWidth;if(wijmo_1.isNumber(d)){var f=wijmo_1.asNumber(d);isFinite(f)&&f>0&&(p=f,c=1)}else if(wijmo_1.isString(d)){var g=wijmo_1.asString(d);if(g&&g.indexOf("%")>=0){g=g.replace("%","");f=parseFloat(g);isFinite(f)&&(f<0?f=0:f>100&&(f=100),p=0,c=f/100)}else{f=parseFloat(g);isFinite(f)&&f>0&&(p=f,c=1)}}}var m=c/o,y=_._getAxisY()._uniqueId,b=this.stackNegMap[y],v=this.stackPosMap[y],x=n.getValues(0),w=n.getValues(1),S=this._isRange(_),P=_._bindValues(null==_._cv?null==this.chart.collectionView?null:this.chart.collectionView.items:_._cv.items,_._getBinding(1)).values;if(x){if(w||(w=this.dataInfo.getXVals()),w){var C=this.dataInfo.getDeltaX();C>0&&(c*=C,m*=C)}var M=_._getSymbolFill(l),T=_._getAltSymbolFill(l)||M,j=_._getSymbolStroke(l),A=_._getAltSymbolStroke(l)||j,L=x.length;null!=w&&(L=Math.min(L,w.length));var N,I,k=this.origin,E=0,D=this.stacking!=Stacking.None,R=this.stacking==Stacking.Stacked100pc;void 0!==_._getChartType()&&(D=R=!1);var O=this.getItemFormatter(n);if(this.rotated){k<e.actualMin?k=e.actualMin:k>e.actualMax&&(k=e.actualMax),_._isCustomAxisY()&&(D=R=!1);Y=e.convert(k);var F=i.actualMin,V=i.actualMax;for(H=0;H<L;H++){q=w?w[H]:H,K=x[H],W=Y;if(this._getSymbolOrigin&&(W=i.convert(this._getSymbolOrigin(k,H))),S&&P&&P.length){Z=P[H];_DataInfo.isValid(Z)&&(W=e.convert(Z))}if(this._getSymbolStyles)M=(U=this._getSymbolStyles(H))&&U.fill?U.fill:M,T=U&&U.fill?U.fill:T,j=U&&U.stroke?U.fill:j,A=U&&U.stroke?U.fill:A;if(N=K>0?M:T,I=K>0?j:A,t.fill=N,t.stroke=I,_DataInfo.isValid(q)&&_DataInfo.isValid(K))if(D){$=q+.5*c;if((J=q-.5*c)<F&&$<F||J>V&&$>V)continue;if(J=i.convert(Math.max(J,F)),$=i.convert(Math.min($,V)),R)K/=this.dataInfo.getStackedAbsSum(q);tt=0;K>0?(tt=isNaN(v[q])?0:v[q],rt=e.convert(tt),Q=e.convert(tt+K),v[q]=tt+K):(tt=isNaN(b[q])?0:b[q],rt=e.convert(tt),Q=e.convert(tt+K),b[q]=tt+K),a&&h.push(new wijmo_1.Point(Q,i.convert(q)));et=new wijmo_1.Rect(Math.min(rt,Q),Math.min(J,$),Math.abs(Q-rt),Math.abs($-J));if(p>0){(at=1-p/et.height)<0&&(at=0);var B=et.top+.5*et.height;et.top+=(B-et.top)*at,et.height=Math.min(p,et.height)}nt=new _RectArea(et);this.drawSymbol(t,et,n,H,new wijmo_1.Point(Q,et.top+.5*et.height),O),n._setPointIndex(H,E),E++,nt.tag=new _DataPoint(l,H,tt+K,q),this.hitTester.add(nt,l)}else{$=q-.5*c+(s+1)*m;if((J=q-.5*c+s*m)<F&&$<F||J>V&&$>V)continue;J=i.convert(Math.max(J,F)),$=i.convert(Math.min($,V));var X=e.convert(K);et=new wijmo_1.Rect(Math.min(X,W),Math.min(J,$),Math.abs(W-X),Math.abs($-J));if(a&&h.push(new wijmo_1.Point(X,(J+$)/2)),p>0){(at=1-(ot=p/o)/et.height)<0&&(at=0);B=i.convert(q);et.top+=(B-et.top)*at,et.height=Math.min(ot,et.height)}nt=new _RectArea(et);this.drawSymbol(t,et,n,H,new wijmo_1.Point(X,et.top+.5*et.height),O),n._setPointIndex(H,E),E++,nt.tag=new _DataPoint(l,H,K,q),this.hitTester.add(nt,l)}}}else{k<i.actualMin?k=i.actualMin:k>i.actualMax&&(k=i.actualMax);var Y=i.convert(k),z=e.actualMin,G=e.actualMax;_._isCustomAxisY()&&(D=R=!1);for(var H=0;H<L;H++){var U,W=Y,q=w?w[H]:H,K=x[H];if(this._getSymbolOrigin&&(W=i.convert(this._getSymbolOrigin(k,H,L))),S&&P&&P.length){var Z=P[H];_DataInfo.isValid(Z)&&(W=i.convert(Z))}if(this._getSymbolStyles)M=(U=this._getSymbolStyles(H,L))&&U.fill?U.fill:M,T=U&&U.fill?U.fill:T,j=U&&U.stroke?U.stroke:j,A=U&&U.stroke?U.stroke:A;if(N=K>0?M:T,I=K>0?j:A,t.fill=N,t.stroke=I,_DataInfo.isValid(q)&&_DataInfo.isValid(K))if(D){var J,$,Q=q+.5*c;if((rt=q-.5*c)<z&&Q<z||rt>G&&Q>G)continue;if(rt=e.convert(rt),Q=e.convert(Q),!_DataInfo.isValid(rt)||!_DataInfo.isValid(Q))continue;if(R)K/=this.dataInfo.getStackedAbsSum(q);var tt=0;K>0?(tt=isNaN(v[q])?0:v[q],J=i.convert(Math.max(tt,i.actualMin)),$=i.convert(Math.max(tt+K,i.actualMin)),v[q]=tt+K):(tt=isNaN(b[q])?0:b[q],J=i.convert(tt),$=i.convert(tt+K),b[q]=tt+K),a&&h.push(new wijmo_1.Point(e.convert(q),$));var et=new wijmo_1.Rect(Math.min(rt,Q),Math.min(J,$),Math.abs(Q-rt),Math.abs($-J));if(p>0){(at=1-p/et.width)<0&&(at=0);var it=et.left+.5*et.width;et.left+=(it-et.left)*at,et.width=Math.min(p,et.width)}var nt=new _RectArea(et);this.drawSymbol(t,et,n,H,new wijmo_1.Point(et.left+.5*et.width,$),O),n._setPointIndex(H,E),E++,nt.tag=new _DataPoint(l,H,q,tt+K),this.hitTester.add(nt,l)}else{var rt,Q=q-.5*c+(s+1)*m;if((rt=q-.5*c+s*m)<z&&Q<z||rt>G&&Q>G)continue;if(rt=e.convert(rt),Q=e.convert(Q),!_DataInfo.isValid(rt)||!_DataInfo.isValid(Q))continue;var st=i.convert(K),et=new wijmo_1.Rect(Math.min(rt,Q),Math.min(st,W),Math.abs(Q-rt),Math.abs(W-st));if(a&&h.push(new wijmo_1.Point((rt+Q)/2,st)),p>0){var ot,at;(at=1-(ot=p/o)/et.width)<0&&(at=0);it=e.convert(q);et.left+=(it-et.left)*at,et.width=Math.min(ot,et.width)}var nt=new _RectArea(et);this.drawSymbol(t,et,n,H,new wijmo_1.Point(et.left+.5*et.width,st),O),n._setPointIndex(H,E),E++,nt.tag=new _DataPoint(l,H,q,K),this.hitTester.add(nt,l)}}}a&&h&&h.length&&a(h)}},e.prototype.drawSymbol=function(t,e,i,n,r,s){var o=this;if(s){t.startGroup();var a=new HitTestInfo(this.chart,r,ChartElement.SeriesSymbol);a._setData(i,n),s(t,a,function(){o.drawDefaultSymbol(t,e,i)}),t.endGroup()}else this.drawDefaultSymbol(t,e,i)},e.prototype.drawDefaultSymbol=function(t,e,i){t.drawRect(e.left,e.top,e.width,e.height,null,i.symbolStyle)},e}(_BasePlotter);exports._BarPlotter=_BarPlotter;var _FunnelPlotter=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.stacking=Stacking.None,e}return __extends(e,t),e.prototype.adjustLimits=function(t,e){this.dataInfo=t;var i=t.getMinX(),n=t.getMinY(),r=t.getMaxX(),s=t.getMaxY();return new wijmo_1.Rect(i,n,r-i,s-n)},e.prototype.plotSeries=function(t,e,i,n,r,s,o,a){var h=this.chart.series.indexOf(n);if(!(h>0)){var l,_,u,c,p,d=wijmo_1.asType(n,SeriesBase),f=this.chart._options,g=n.getValues(0),m=n.getValues(1),y=this.chart._plotRect,b=f&&f.funnel&&null!=f.funnel.neckWidth?f.funnel.neckWidth:.2,v=f&&f.funnel&&null!=f.funnel.neckHeight?f.funnel.neckHeight:0,x=b*y.width,w=0,S=0,P=0,C=0,M=y.left,T=y.top,j=y.width,A=y.height;if(g){this.rotated&&(T+=y.height),x=x||1,m||(m=this.dataInfo.getXVals());var L=g.length;for(null!=m&&(L=Math.min(L,m.length)),w=0;w<L;w++)S+=g[w];var N,I,k,E=0;if(f&&f.funnel&&"rectangle"===f.funnel.type)for(v=A/L,b=j,w=0;w<L;w++){var D=m?m[w]:w,R=g[w],O=d._getSymbolFill(w),F=d._getAltSymbolFill(w)||O,V=d._getSymbolStroke(w),B=d._getAltSymbolStroke(w)||V;if(this._getSymbolStyles)O=(z=this._getSymbolStyles(w,L))&&z.fill?z.fill:O,F=z&&z.fill?z.fill:F,V=z&&z.stroke?z.stroke:V,B=z&&z.stroke?z.stroke:B;if(N=R>0?O:F,I=R>0?V:B,t.fill=N,t.stroke=I,_DataInfo.isValid(D)&&_DataInfo.isValid(R)){k||(k=j/R);var X=k*R;M+=(b-X)/2,this.rotated&&(T-=v),t.drawRect(M,T,X,v),Y=new _FunnelSegment(new wijmo_1.Point(M,T),X,v,X,v),this.rotated||(T+=v),b=X,Y.tag=new _DataPoint(h,w,D,R),this.hitTester.add(Y,h),n._setPointIndex(w,E),E++}}else for(P=y.left+y.width*(1-b)/2,C=y.top+y.height*(this.rotated?v:1-v),_=(1-b)*y.width/2/(y.height*(1-v)),!isNaN(_)&&isFinite(_)||(j=x,M=P,T=C),l=y.width*b*y.height+y.width*(1-b)/2*y.height*(1-v),w=0;w<L;w++){D=m?m[w]:w,R=g[w];var Y,z,G=[],H=[];O=d._getSymbolFill(w),F=d._getAltSymbolFill(w)||O,V=d._getSymbolStroke(w),B=d._getAltSymbolStroke(w)||V;if(this._getSymbolStyles)O=(z=this._getSymbolStyles(w,L))&&z.fill?z.fill:O,F=z&&z.fill?z.fill:F,V=z&&z.stroke?z.stroke:V,B=z&&z.stroke?z.stroke:B;if(N=R>0?O:F,I=R>0?V:B,t.fill=N,t.stroke=I,_DataInfo.isValid(D)&&_DataInfo.isValid(R)){var U=l*R/S;j>x?(c=this._getTrapezoidOffsetY(j,U,_),this.rotated?T-c>C?(G=[M,M+(u=_*c),M+j-u,M+j],H=[T,T-c,T-c,T],Y=new _FunnelSegment(new wijmo_1.Point(M,T-c),j,c,j-2*u,0,!0),j-=2*u,M+=u,T-=c):(u=_*(c=T-C),p=(U-=this._getTrapezoidArea(j,_,c))/x,G.push(M,M+u,M+u,M+u+x,M+u+x,M+j),H.push(T,T-c,T-c-p,T-c-p,T-c,T),Y=new _FunnelSegment(new wijmo_1.Point(M,T-c-p),j,c+p,x,p,!0),j=x,M+=u,T=T-c-p):T+c<C?(G=[M,M+(u=_*c),M+j-u,M+j],H=[T,T+c,T+c,T],Y=new _FunnelSegment(new wijmo_1.Point(M,T),j,c,j-2*u,0),j-=2*u,M+=u,T+=c):(u=_*(c=C-T),p=(U-=this._getTrapezoidArea(j,_,c))/x,G.push(M,M+u,M+u,M+u+x,M+u+x,M+j),H.push(T,T+c,T+c+p,T+c+p,T+c,T),Y=new _FunnelSegment(new wijmo_1.Point(M,T),j,c+p,x,p),j=x,M+=u,T=T+c+p),t.drawPolygon(G,H)):(p=U/x,this.rotated&&(T-=p),t.drawRect(M,T,j,p),Y=new _FunnelSegment(new wijmo_1.Point(M,T),x,p,x,p),this.rotated||(T+=p)),Y.tag=new _DataPoint(h,w,D,R),this.hitTester.add(Y,h),n._setPointIndex(w,E),E++}}}}},e.prototype._getTrapezoidArea=function(t,e,i){var n=i*e;return n*i+(t-2*n)*i},e.prototype._getTrapezoidOffsetY=function(t,e,i){var n=Math.pow(t/2/i,2)-e/i;return t/2/i-Math.sqrt(n>=0?n:0)},e.prototype.drawDefaultSymbol=function(t,e,i){t.drawRect(e.left,e.top,e.width,e.height,null,i.symbolStyle)},e.prototype._getPointAndPosition=function(t,e,i,n){var r=i;t.x=r.center.x,t.y=r.center.y,e=null==e?LabelPosition.Center:e},e}(_BasePlotter);exports._FunnelPlotter=_FunnelPlotter;var _FunnelSegment=function(){function t(t,e,i,n,r,s){void 0===s&&(s=!1),this._startPoint=t,this._width=e,this._height=i,this._neckWidth=n,this._neckHeight=r,this._center=new wijmo_1.Point(this._startPoint.x+e/2,this._startPoint.y+i/2),this._offsetX=(e-n)/2,this._offsetY=i-r,this._rotated=s}return t.prototype.contains=function(t){var e=this._startPoint,i=this._offsetX,n=this._offsetY;if(this._rotated){if(t.x>=e.x&&t.x<=e.x+this._width&&t.y>=e.y&&t.y<=e.y+this._height){if(t.x>=e.x+i&&t.x<=e.x+this._width-i)return!0;if(t.y<e.y+this._neckHeight)return!1;if(t.x<this._center.x)return(e.y+this._height-t.y)/(t.x-e.x)<n/i;if(t.x>this._center.x)return(e.y+this._height-t.y)/(e.x+this._width-t.x)<n/i}}else if(t.x>=e.x&&t.x<=e.x+this._width&&t.y>=e.y&&t.y<=e.y+this._height){if(t.x>=e.x+i&&t.x<=e.x+this._width-i)return!0;if(t.y>e.y+n)return!1;if(t.x<this._center.x)return(t.y-e.y)/(t.x-e.x)<n/i;if(t.x>this._center.x)return(t.y-e.y)/(e.x+this._width-t.x)<n/i}return!1},t.prototype.distance=function(t){if(this.contains(t))return 0;var e=this._startPoint,i=this._width,n=this._height,r=this._offsetX,s=this._offsetY;if(this._rotated){if(t.y>e.y+n)return t.x<e.x?Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y+n-t.y,2)):t.x>e.x+i?Math.sqrt(Math.pow(t.x-e.x-i,2)+Math.pow(e.y+n-t.y,2)):t.y-e.y-n;if(t.y<e.y)return t.x<e.x+r?Math.sqrt(Math.pow(e.x+r-t.x,2)+Math.pow(t.y-e.y-n,2)):t.x>e.x+i-r?Math.sqrt(Math.pow(t.x-e.x-i+r,2)+Math.pow(t.y-e.y-n,2)):e.y-t.y;if(!(t.y<e.y+n-s))return t.x<e.x+r?Math.min(Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(t.y-e.y-n,2)),Math.sqrt(Math.pow(t.x-r/2-e.x,2)+Math.pow(t.y-n+s/2-e.y,2)),Math.sqrt(Math.pow(t.x-r-e.x,2)+Math.pow(t.y-n+s-e.y,2))):Math.min(Math.sqrt(Math.pow(t.x-i-e.x,2)+Math.pow(t.y-n-e.y,2)),Math.sqrt(Math.pow(t.x-i+r/2-e.x,2)+Math.pow(t.y-n+s/2-e.y,2)),Math.sqrt(Math.pow(t.x-i+r-e.x,2)+Math.pow(t.y-n+s-e.y,2)));if(t.x<e.x+r)return e.x+r-t.x;if(t.x>e.x+i-r)return t.x-e.x-i+r}else{if(t.y<e.y)return t.x<e.x?Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)):t.x>e.x+i?Math.sqrt(Math.pow(t.x-e.x-i,2)+Math.pow(e.y-t.y,2)):e.y-t.y;if(t.y>e.y+n)return t.x<e.x+r?Math.sqrt(Math.pow(e.x+r-t.x,2)+Math.pow(t.y-e.y-n,2)):t.x>e.x+i-r?Math.sqrt(Math.pow(t.x-e.x-i+r,2)+Math.pow(t.y-e.y-n,2)):t.y-e.y-n;if(!(t.y>e.y+s))return t.x<e.x+r?Math.min(Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(t.y-e.y,2)),Math.sqrt(Math.pow(t.x-r/2-e.x,2)+Math.pow(t.y-s/2-e.y,2)),Math.sqrt(Math.pow(t.x-r-e.x,2)+Math.pow(t.y-s-e.y,2))):Math.min(Math.sqrt(Math.pow(t.x-i-e.x,2)+Math.pow(t.y-e.y,2)),Math.sqrt(Math.pow(t.x-i+r/2-e.x,2)+Math.pow(t.y-s/2-e.y,2)),Math.sqrt(Math.pow(t.x-i+r-e.x,2)+Math.pow(t.y-s-e.y,2)));if(t.x<e.x+r)return e.x+r-t.x;if(t.x>e.x+i-r)return t.x-e.x-i+r}},Object.defineProperty(t.prototype,"center",{get:function(){return this._center},enumerable:!0,configurable:!0}),t}();exports._FunnelSegment=_FunnelSegment;var _FinancePlotter=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isCandle=!0,e.isArms=!1,e.isEqui=!1,e.isVolume=!1,e._volHelper=null,e._symWidth=.7,e}return __extends(e,t),e.prototype.clear=function(){t.prototype.clear.call(this),this._volHelper=null},e.prototype.load=function(){if(t.prototype.load.call(this),this.isVolume){var e,i,n,r,s,o,a,h,l=null,_=null;for(o=0;o<this.chart.series.length;o++){var u;if(s=(e=this.chart.series[o]).getDataType(1)||e.chart._xDataType,i=e._getAxisX(),r=(n=null===(n=e._getChartType())||wijmo_1.isUndefined(n)?this.chart._getChartType():n)===ChartType.Column?e._getBindingValues(1):n===ChartType.Candlestick?e._getBindingValues(4):null,s===wijmo_1.DataType.Date)for(a=[],h=[],o=0;o<e._getLength();o++)u=e._getItem(o)[e.bindingX].valueOf(),a.push(u),h.push({value:u,text:wijmo_1.Globalize.format(new Date(u),i.format||"d")});else a=this.dataInfo.getXVals();if(l=this.dataInfo.getMinX(),_=this.dataInfo.getMaxX(),r&&r.length>0){this._volHelper=new _VolumeHelper(r,a,l,_,s),i._customConvert=this._volHelper.convert.bind(this._volHelper),i._customConvertBack=this._volHelper.convertBack.bind(this._volHelper),h&&h.length>0&&(this._itemsSource=i.itemsSource=h);break}}}},e.prototype.unload=function(){var e;t.prototype.unload.call(this);for(var i=0;i<this.chart.series.length;i++)(e=this.chart.series[i]._getAxisX())&&(e._customConvert=null,e._customConvertBack=null,e.itemsSource&&e.itemsSource==this._itemsSource&&(this._itemsSource=e.itemsSource=null))},e.prototype.parseSymbolWidth=function(t){if(this._isPixel=void 0,t)if(wijmo_1.isNumber(t)){var e=wijmo_1.asNumber(t);isFinite(e)&&e>0&&(this._symWidth=e,this._isPixel=!0)}else if(wijmo_1.isString(t)){var i=wijmo_1.asString(t);if(i&&i.indexOf("%")>=0){i=i.replace("%","");var n=parseFloat(i);isFinite(n)&&(n<0?n=0:n>100&&(n=100),this._symWidth=n/100,this._isPixel=!1)}else{n=parseFloat(t);isFinite(n)&&n>0&&(this._symWidth=n,this._isPixel=!0)}}},e.prototype.adjustLimits=function(t,e){this.dataInfo=t;var i=t.getMinX(),n=t.getMinY(),r=t.getMaxX(),s=t.getMaxY(),o=t.getDeltaX(),a=this.chart._xDataType;o<=0&&(o=1);var h=this.chart.series,l=h.length,_=0;this.parseSymbolWidth(this.symbolWidth),!this.isVolume||this.chart._getChartType()!==ChartType.Column&&this.chart._getChartType()!==ChartType.Candlestick?this.unload():this.load();for(var u=0;u<l;u++){var c=h[u];if(!c._isCustomAxisY()){var p=c._getBinding(1),d=c._getBinding(2),f=c._getBinding(3),g=c._getLength();if(g){var m=c._getSymbolSize();m>_&&(_=m);for(var y=0;y<g;y++){var b=c._getItem(y);if(b)[p?b[p]:null,d?b[d]:null,f?b[f]:null].forEach(function(t){_DataInfo.isValid(t)&&null!==t&&((isNaN(n)||t<n)&&(n=t),(isNaN(s)||t>s)&&(s=t))})}}}}var v=r-i,x=this.chart._plotRect;if(x&&x.width&&!this.isVolume){isNaN(m)&&(m=c._getSymbolSize()),m+=2;var w=x.width/(x.width-m)*v;i-=.5*(w-v),v=w}return!(a===wijmo_1.DataType.Date&&this.isVolume||a===wijmo_1.DataType.Number)||this.chart._getChartType()!==ChartType.Column&&this.chart._getChartType()!==ChartType.Candlestick?this.chart._isRotated()?new wijmo_1.Rect(n,i,s-n,v):new wijmo_1.Rect(i,n,v,s-n):new wijmo_1.Rect(i-.5*o,n,r-i+o,s-n)},e.prototype.plotSeries=function(t,e,i,n,r,s,o,a){var h=this,l=wijmo_1.asType(n,SeriesBase),_=this.chart.series.indexOf(n),u=n.getValues(0),c=n.getValues(1),p=this._symWidth,d=this.chart._isRotated();if(u){if(c||(c=this.dataInfo.getXVals()),c){var f=this.dataInfo.getDeltaX();f>0&&!1===this._isPixel&&(p*=f)}var g=u.length,m=!0;c?g=Math.min(g,c.length):(m=!1,c=new Array(g));var y=this._DEFAULT_WIDTH,b=l._getSymbolFill(_),v=l._getAltSymbolFill(_)||"transparent",x=l._getSymbolStroke(_),w=l._getAltSymbolStroke(_)||x,S=void 0===this._isPixel?l._getSymbolSize():p;t.stroke=x,t.strokeWidth=y,t.fill=b;for(var P,C,M=l._getBinding(1),T=l._getBinding(2),j=l._getBinding(3),A=d?i.actualMin:e.actualMin,L=d?i.actualMax:e.actualMax,N=0,I=null,k=null,E=this.getItemFormatter(n),D=0;D<g;D++)if(I=l._getItem(D)){var R=m?c[D]:D;if(_DataInfo.isValid(R)&&A<=R&&R<=L){var O=u[D],F=M?I[M]:null,V=T?I[T]:null,B=j?I[j]:null;if(t.startGroup(),this.isEqui&&null!==k?k[j]!==I[j]&&(P=k[j]<I[j]?v:b,C=k[j]<I[j]?w:x):(P=V<B?v:b,C=V<B?w:x),t.fill=P,t.stroke=C,E){var X=new HitTestInfo(this.chart,new wijmo_1.Point(e.convert(R),i.convert(O)),ChartElement.SeriesSymbol);X._setData(l,D),E(t,X,function(){h._drawSymbol(t,e,i,_,D,P,S,R,O,F,V,B)})}else this._drawSymbol(t,e,i,_,D,P,S,R,O,F,V,B);t.endGroup(),n._setPointIndex(D,N),N++}k=I}}},e.prototype._drawSymbol=function(t,e,i,n,r,s,o,a,h,l,_,u){var c,p=new _DataPoint(n,r,a,h),d=null,f=null,g=null,m=null,y=this.chart._isRotated();if(y){var b=i;i=e,e=b}if(!1===this._isPixel&&(g=e.convert(a-.5*o))>(m=e.convert(a+.5*o))){var v=g;g=m,m=v}a=e.convert(a),!1!==this._isPixel&&(g=a-.5*o,m=a+.5*o),this.isCandle?(_DataInfo.isValid(_)&&_DataInfo.isValid(u)&&(_=i.convert(_),u=i.convert(u),f=(d=Math.min(_,u))+Math.abs(_-u),y?(t.drawRect(d,g,f-d||1,m-g||1),c=new _RectArea(new wijmo_1.Rect(d,g,f-d||1,m-g||1))):(t.drawRect(g,d,m-g||1,f-d||1),c=new _RectArea(new wijmo_1.Rect(g,d,m-g||1,f-d||1))),c.tag=p,this.hitTester.add(c,n)),_DataInfo.isValid(h)&&(h=i.convert(h),null!==d&&(y?(t.drawLine(f,a,h,a),c.rect.width=c.rect.width+h):(t.drawLine(a,d,a,h),c.rect.top=h,c.rect.height=c.rect.height+h))),_DataInfo.isValid(l)&&(l=i.convert(l),null!==f&&(y?(t.drawLine(d,a,l,a),c.rect.left=l,c.rect.width=c.rect.width+l):(t.drawLine(a,f,a,l),c.rect.height=c.rect.height+l)))):this.isEqui?_DataInfo.isValid(h)&&_DataInfo.isValid(l)&&(h=i.convert(h),l=i.convert(l),f=(d=Math.min(h,l))+Math.abs(h-l),t.drawRect(g,d,m-g||1,f-d||1),(c=new _RectArea(new wijmo_1.Rect(g,d,m-g||1,f-d||1))).tag=p,this.hitTester.add(c,n)):this.isArms?(_DataInfo.isValid(_)&&_DataInfo.isValid(u)&&(_=i.convert(_),u=i.convert(u),f=(d=Math.min(_,u))+Math.abs(_-u),t.drawRect(g,d,m-g||1,f-d||1)),_DataInfo.isValid(h)&&null!==d&&(h=i.convert(h),t.drawLine(a,d,a,h)),_DataInfo.isValid(l)&&null!==f&&(l=i.convert(l),t.drawLine(a,f,a,l)),_DataInfo.isValid(h)&&_DataInfo.isValid(l)&&(t.fill="transparent",f=(d=Math.min(h,l))+Math.abs(h-l),t.drawRect(g,d,m-g||1,f-d||1),(c=new _RectArea(new wijmo_1.Rect(g,d,m-g||1,f-d||1))).tag=p,this.hitTester.add(c,n))):(_DataInfo.isValid(h)&&_DataInfo.isValid(l)&&(h=i.convert(h),l=i.convert(l),f=(d=Math.min(h,l))+Math.abs(h-l),y?(t.drawLine(l,a,h,a),c=new _RectArea(new wijmo_1.Rect(d,g,f-d||1,m-g||1))):(t.drawLine(a,l,a,h),c=new _RectArea(new wijmo_1.Rect(g,d,m-g||1,f-d||1))),c.tag=p,this.hitTester.add(c,n)),_DataInfo.isValid(_)&&(_=i.convert(_),y?t.drawLine(_,g,_,a):t.drawLine(g,_,a,_)),_DataInfo.isValid(u)&&(u=i.convert(u),y?t.drawLine(u,a,u,m):t.drawLine(a,u,m,u)))},e}(_BasePlotter);exports._FinancePlotter=_FinancePlotter;var _LinePlotter=function(t){function e(){var e=t.call(this)||this;return e.hasSymbols=!1,e.hasLines=!0,e.isSpline=!1,e.stacking=Stacking.None,e.stackPos={},e.stackNeg={},e.clipping=!1,e}return __extends(e,t),e.prototype.clear=function(){t.prototype.clear.call(this),this.stackNeg={},this.stackPos={}},e.prototype.adjustLimits=function(t,e){this.dataInfo=t;var i=t.getMinX(),n=t.getMinY(),r=t.getMaxX(),s=t.getMaxY();if(this.isSpline&&!this.chart.axisY._getLogBase()){var o=.1*(s-n);n-=o,s+=o}return this.rotated?new wijmo_1.Rect(n,i,s-n,r-i):new wijmo_1.Rect(i,n,r-i,s-n)},e.prototype.plotSeries=function(t,e,i,n,r,s,o,a){var h=[],l=wijmo_1.asType(n,SeriesBase),_=this.chart.series.indexOf(n),u=n.getValues(0),c=n.getValues(1);if(u){c||(c=this.dataInfo.getXVals());var p=_BasePlotter.cloneStyle(n.style,["fill"]),d=u.length,f=!0;c?d=Math.min(d,c.length):(f=!1,c=new Array(d));var g=this._DEFAULT_WIDTH,m=l._getSymbolFill(_),y=l._getAltSymbolFill(_)||m,b=l._getSymbolStroke(_),v=l._getAltSymbolStroke(_)||b,x=l._getSymbolSize();t.stroke=b,t.strokeWidth=g,t.fill=m;var w=new Array,S=new Array,P=new Array,C=this.rotated,M=this.stacking!=Stacking.None&&!l._isCustomAxisY(),T=this.stacking==Stacking.Stacked100pc&&!l._isCustomAxisY();void 0!==l._getChartType()&&(M=T=!1);for(var j=l.interpolateNulls,A=!1,L=this.getItemFormatter(n),N=0;N<d;N++){var I=f?c[N]:N,k=u[N];if(_DataInfo.isValid(I)&&_DataInfo.isValid(k)){if(M){if(T)k/=this.dataInfo.getStackedAbsSum(I);if(k>=0){var E=isNaN(this.stackPos[I])?0:this.stackPos[I];k=this.stackPos[I]=E+k}else{E=isNaN(this.stackNeg[I])?0:this.stackNeg[I];k=this.stackNeg[I]=E+k}}var D;if(C){D=new _DataPoint(_,N,k,I);var R=e.convert(k);k=i.convert(I),I=R}else D=new _DataPoint(_,N,I,k),I=e.convert(I),k=i.convert(k);if(isNaN(I)||isNaN(k))A=!0,!0!==j&&(w.push(void 0),S.push(void 0)),P.push(!0);else{w.push(I),S.push(k),P.push(!1),a&&h.push(new wijmo_1.Point(I,k));var O=new _CircleArea(new wijmo_1.Point(I,k),.5*x);O.tag=D,this.hitTester.add(O,_)}}else A=!0,!0!==j&&(w.push(void 0),S.push(void 0)),P.push(!0)}var F=0;if(this.hasLines)if(t.fill=null,A&&!0!==j){var V=[],B=[];for(N=0;N<d;N++)void 0===w[N]?(V.length>1&&(this._drawLines(t,V,B,null,p,this.chart._plotrectId),this.hitTester.add(new _LinesArea(V,B),_),F++),V=[],B=[]):(V.push(w[N]),B.push(S[N]));V.length>1&&(this._drawLines(t,V,B,null,p,this.chart._plotrectId),this.hitTester.add(new _LinesArea(V,B),_),F++)}else this._drawLines(t,w,S,null,p,this.chart._plotrectId),this.hitTester.add(new _LinesArea(w,S),_),F++;if((this.hasSymbols||L)&&x>0){t.fill=m;var X=0;for(N=0;N<d;N++)if(!j||!P[N]){I=w[X],k=S[X];(!1===this.hasLines||L)&&(t.fill=u[N]>0?m:y,t.stroke=u[N]>0?b:v),this.isValid(I,k,e,i)&&(this._drawSymbol(t,I,k,x,l,N,L),n._setPointIndex(N,F),F++),X++}}a&&h&&h.length&&a(h)}},e.prototype._drawLines=function(t,e,i,n,r,s){this.isSpline?t.drawSplines(e,i,n,r,s):t.drawLines(e,i,n,r,s)},e.prototype._drawSymbol=function(t,e,i,n,r,s,o){var a=this;if(o){t.startGroup();var h=new HitTestInfo(this.chart,new wijmo_1.Point(e,i),ChartElement.SeriesSymbol);h._setData(r,s),o(t,h,function(){a.hasSymbols&&a._drawDefaultSymbol(t,e,i,n,r.symbolMarker,r.symbolStyle)}),t.endGroup()}else this._drawDefaultSymbol(t,e,i,n,r.symbolMarker,r.symbolStyle)},e.prototype._drawDefaultSymbol=function(t,e,i,n,r,s){r==Marker.Dot?t.drawEllipse(e,i,.5*n,.5*n,null,s):r==Marker.Box&&t.drawRect(e-.5*n,i-.5*n,n,n,null,s)},e}(_BasePlotter);exports._LinePlotter=_LinePlotter;var _BubblePlotter=function(t){function e(){var e=t.call(this)||this;return e._MIN_SIZE=5,e._MAX_SIZE=30,e.hasLines=!1,e.hasSymbols=!0,e.clipping=!0,e}return __extends(e,t),e.prototype.adjustLimits=function(e,i){var n=this.getNumOption("minSize","bubble");this._minSize=n||this._MIN_SIZE;var r=this.getNumOption("maxSize","bubble");this._maxSize=r||this._MAX_SIZE;for(var s=this.chart.series,o=s.length,a=NaN,h=NaN,l=0;l<o;l++){var _=s[l];if(_._getChartType()==ChartType.Bubble||null==_._getChartType()&&_._chart._getChartType()==ChartType.Bubble){var u=_._getBindingValues(1);if(u)for(var c=u.length,p=0;p<c;p++)_DataInfo.isValid(u[p])&&((isNaN(a)||u[p]<a)&&(a=u[p]),(isNaN(h)||u[p]>h)&&(h=u[p]))}}this._minValue=a,this._maxValue=h;var d=t.prototype.adjustLimits.call(this,e,i),f=this.chart.axisX,g=this.chart.axisY;if(!f._isLogAxis()){var m=(i.width-this._maxSize)/d.width;d.left-=.5*this._maxSize/m,d.width+=this._maxSize/m}if(!g._isLogAxis()){var y=(i.height-this._maxSize)/d.height;d.top-=.5*this._maxSize/y,d.height+=this._maxSize/y}return d},e.prototype._drawSymbol=function(t,e,i,n,r,s,o){var a=this;if(null==this._minSize){var h=this.getNumOption("minSize","bubble");this._minSize=h||this._MIN_SIZE}if(null==this._maxSize){var l=this.getNumOption("maxSize","bubble");this._maxSize=l||this._MAX_SIZE}var _=r._getItem(s);if(_){var u=r._getBinding(1);if(u){n=_[u];if(_DataInfo.isValid(n)){null==n&&(n=this._minValue);var c=this._minValue==this._maxValue?1:Math.sqrt((n-this._minValue)/(this._maxValue-this._minValue));if(n=this._minSize+(this._maxSize-this._minSize)*c,o){var p=new HitTestInfo(this.chart,new wijmo_1.Point(e,i),ChartElement.SeriesSymbol);p._setData(r,s),t.startGroup(),o(t,p,function(){a._drawDefaultSymbol(t,e,i,n,r.symbolMarker,r.symbolStyle)}),t.endGroup()}else this._drawDefaultSymbol(t,e,i,n,r.symbolMarker,r.symbolStyle);var d=this.hitTester._map[this.chart.series.indexOf(r)];if(null!=d)for(var f=d.length-1;f>=0;f--){var g=d[f];if(g.tag&&g.tag.pointIndex==s){var m=wijmo_1.tryCast(g,_CircleArea);m&&m.setRadius(.5*n)}}}}}},e}(_LinePlotter);exports._BubblePlotter=_BubblePlotter,wijmo_1._registerModule("wijmo.chart",selfModule);

/***/ }),

/***/ "./node_modules/wijmo/wijmo.grid.xlsx.js":
/*!***********************************************!*\
  !*** ./node_modules/wijmo/wijmo.grid.xlsx.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
﻿/*!
    *
    * Wijmo Library 5.20191.615
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */

var __extends=this&&this.__extends||function(){var e=function(o,l){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var l in o)o.hasOwnProperty(l)&&(e[l]=o[l])})(o,l)};return function(o,l){function t(){this.constructor=o}e(o,l),o.prototype=null===l?Object.create(l):(t.prototype=l.prototype,new t)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_1=__webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js"),wijmo_grid_1=__webpack_require__(/*! wijmo/wijmo.grid */ "./node_modules/wijmo/wijmo.grid.js"),mXlsx=__webpack_require__(/*! wijmo/wijmo.xlsx */ "./node_modules/wijmo/wijmo.xlsx.js"),selfModule=__webpack_require__(/*! wijmo/wijmo.grid.xlsx */ "./node_modules/wijmo/wijmo.grid.xlsx.js");function softDetail(){return wijmo_1._getModule("wijmo.grid.detail")}function softMultiRow(){return wijmo_1._getModule("wijmo.grid.multirow")}exports.softDetail=softDetail,exports.softMultiRow=softMultiRow;var FlexGridXlsxConverter=function(){function e(){}return e.save=function(e,o,l){var t=this._saveFlexGridToWorkbook(e,o);return l&&t.save(l),t},e.saveAsync=function(e,o,l,t,r){var n=this._saveFlexGridToWorkbook(e,o);return l&&n.saveAsync(l,t,r),n},e.load=function(e,o,l){var t=this;if(o instanceof Blob){var r=new FileReader;r.onload=function(){var o=mXlsx.Workbook._base64EncArr(new Uint8Array(r.result)),n=new mXlsx.Workbook;n.load(o),o=null,e.deferUpdate(function(){t._loadToFlexGrid(e,n,l),n=null})},r.readAsArrayBuffer(o)}else if(o instanceof mXlsx.Workbook)e.deferUpdate(function(){t._loadToFlexGrid(e,o,l),o=null});else{if(o instanceof ArrayBuffer)o=mXlsx.Workbook._base64EncArr(new Uint8Array(o));else if(!wijmo_1.isString(o))throw"Invalid workbook.";var n=new mXlsx.Workbook;n.load(o),o=null,e.deferUpdate(function(){t._loadToFlexGrid(e,n,l),n=null})}},e.loadAsync=function(e,o,l,t,r){var n=this;if(o instanceof Blob){var s=new FileReader;s.onload=function(){var o=mXlsx.Workbook._base64EncArr(new Uint8Array(s.result)),i=new mXlsx.Workbook;i.loadAsync(o,function(r){o=null,i=null,e.deferUpdate(function(){n._loadToFlexGrid(e,r,l),t&&t(r),r=null})},r)},s.readAsArrayBuffer(o)}else if(o instanceof mXlsx.Workbook)e.deferUpdate(function(){n._loadToFlexGrid(e,o,l),t&&t(o),o=null});else{if(o instanceof ArrayBuffer)o=mXlsx.Workbook._base64EncArr(new Uint8Array(o));else if(!wijmo_1.isString(o))throw"Invalid workbook.";(new mXlsx.Workbook).loadAsync(o,function(r){o=null,e.deferUpdate(function(){n._loadToFlexGrid(e,r,l),t&&t(r),r=null})},r)}},e._saveFlexGridToWorkbook=function(e,o){var l,t,r,n,s,i,a,d,u,m,c,f,h,w,p=new mXlsx.Workbook,g=new mXlsx.WorkSheet,_=(new mXlsx.WorkbookStyle,new mXlsx.WorkbookFrozenPane),x=!o||null==o.includeColumnHeaders||o.includeColumnHeaders,y=!(!o||null==o.includeRowHeaders)&&o.includeRowHeaders,b=!o||null==o.includeCellStyles||o.includeCellStyles,C=o?o.activeWorksheet:null,v=o?o.includeColumns:null,k=o?o.formatItem:null,S=0,j=0,R=0,T=[];if(null==this.hasCssText&&(this.hasCssText="cssText"in document.body.style),m=e.wj_sheetInfo,g.name=o?o.sheetName:"",g.visible=!o||!1!==o.sheetVisible,m&&m.tables&&m.tables.length>0)for(var W=0;W<m.tables.length;W++)g.tables.push(m.tables[W]);if(i=[],m||!b&&!k||((c=document.createElement("div")).style.visibility="hidden",c.setAttribute(wijmo_grid_1.FlexGrid._WJS_MEASURE,"true"),e.hostElement.appendChild(c)),y){for(d=0,a=0;a<e.rowHeaders.rows.length;a++)if(!(e.rowHeaders.rows[a].renderSize<=0)){for(i[d]=[],u=0;u<e.rowHeaders.columns.length;u++)r=e._getBindingColumn(e.rowHeaders,a,e.rowHeaders.columns[u]),(n=this._getColumnSetting(r,u,e.columnHeaders.columns))&&(i[d][u]=n,0===d&&((s=new mXlsx.WorkbookColumn)._deserialize(n),g._addWorkbookColumn(s,u)));d++}R=u}if(e.columnHeaders.rows.length>0){for(d=0,a=0;a<e.columnHeaders.rows.length;a++)if(!(e.columnHeaders.rows[a].renderSize<=0)){for(i[d]||(i[d]=[]),u=0;u<e.columnHeaders.columns.length;u++)r=e._getBindingColumn(e.columnHeaders,a,e.columnHeaders.columns[u]),(n=this._getColumnSetting(r,u,e.columnHeaders.columns))&&(i[d][R+u]=n,0===d&&(v&&!v(r)||((s=new mXlsx.WorkbookColumn)._deserialize(n),g._addWorkbookColumn(s,R+u))));x&&(R=0,l={},t=new mXlsx.WorkbookRow,y&&(R=this._parseFlexGridRowToSheetRow(e.topLeftCells,l,a,0,i,b,c,T,!1,0,v,k)),this._parseFlexGridRowToSheetRow(e.columnHeaders,l,a,R,i,b,c,T,!1,0,v,k),l.cells.length>0&&(t._deserialize(l),g._addWorkbookRow(t,d))),d++}j=x?d:0}for(a=0;a<e.cells.rows.length;a++)R=0,l={},t=new mXlsx.WorkbookRow,(f=e.rows[a])instanceof wijmo_grid_1._NewRowTemplate||((h=f instanceof wijmo_grid_1.GroupRow)?S=wijmo_1.tryCast(f,wijmo_grid_1.GroupRow).level:e.rows.maxGroupLevel>-1&&(S=e.rows.maxGroupLevel+1),y&&(R=this._parseFlexGridRowToSheetRow(e.rowHeaders,l,a,0,i,b,c,T,h,S,v,k)),this._parseFlexGridRowToSheetRow(e.cells,l,a,R,i,b,c,T,h,S,v,k),l.cells.length>0&&(t._deserialize(l),g._addWorkbookRow(t,j+a)));for(w=e.cells.rows.length,a=0;a<e.columnFooters.rows.length;a++)R=0,l={},t=new mXlsx.WorkbookRow,h=(f=e.columnFooters.rows[a])instanceof wijmo_grid_1.GroupRow,y&&(R=this._parseFlexGridRowToSheetRow(e.rowHeaders,l,a,0,i,b,c,T,h,0,v,k)),this._parseFlexGridRowToSheetRow(e.columnFooters,l,a,R,i,b,c,T,h,0,v,k),l.cells.length>0&&(t._deserialize(l),g._addWorkbookRow(t,j+w+a));return _.rows=x?e.frozenRows+j:e.frozenRows,_.columns=y?e.frozenColumns+R:e.frozenColumns,g.frozenPane=_,p._addWorkSheet(g),m||!b&&!k||(e.hostElement.removeChild(c),T.forEach(function(e){return e.forEach(function(e){e&&e.parentElement&&e.parentElement.removeChild(e)})})),p.activeWorksheet=C,p},e._loadToFlexGrid=function(e,o,l){var t,r,n,s,i,a,d,u,m,c,f,h,w,p,g,_,x,y,b,C,v,k,S,j,R,T,W,X,A,F,D,B,H=!l||null==l.includeColumnHeaders||l.includeColumnHeaders,N=!l||null==l.includeColumnHeaders||l.includeColumnHeaders,E=l&&null!=l.sheetIndex&&!isNaN(l.sheetIndex)?l.sheetIndex:0,I=l?l.sheetName:null,G=!l||l.sheetVisible,M=null!=e.wj_sheetInfo,z=0,O=0,L=!1,P={};if(e.itemsSource=null,e.columns.clear(),e.rows.clear(),e.frozenColumns=0,e.frozenRows=0,T={},W=[],O=0,n=[],X=[],E<0||E>=o.sheets.length)throw"The sheet index option is out of the sheet range of current workbook.";if(null!=I)for(t=0;t<o.sheets.length;t++)if(I===o.sheets[t].name){f=o.sheets[t];break}if(null!=(f=f||o.sheets[E]).rows){for(H&&(O=1,f.rows.length<=1&&(N=!1,O=0),d=f.rows[0]),w=this._getColumnCount(f.rows),h=this._getRowCount(f.rows,w),y=f.summaryBelow,r=f.columns,z=0;z<w;z++)e.columns.push(new wijmo_grid_1.Column),r[z]&&(isNaN(+r[z].width)||(e.columns[z].width=+r[z].width),r[z].visible||null==r[z].visible||(e.columns[z].visible=!!r[z].visible),r[z].style&&r[z].style.wordWrap&&(e.columns[z].wordWrap=r[z].style.wordWrap));for(;O<h;O++){if(p=!1,B=null,c=f.rows[O])for(_=O+1;_<f.rows.length;){if(x=f.rows[_]){(isNaN(c.groupLevel)&&!isNaN(x.groupLevel)||!isNaN(c.groupLevel)&&c.groupLevel<x.groupLevel)&&(p=!0);break}_++}for(p&&!y?(C&&(C.isCollapsed=L),(C=new wijmo_grid_1.GroupRow).isReadOnly=!1,L=null!=c.collapsed&&c.collapsed,C.level=isNaN(c.groupLevel)?0:c.groupLevel,P[C.level]=L,this._checkParentCollapsed(P,C.level)&&C._setFlag(wijmo_grid_1.RowColFlags.ParentCollapsed,!0),e.rows.push(C)):(b=new wijmo_grid_1.Row,c&&this._checkParentCollapsed(P,c.groupLevel)&&b._setFlag(wijmo_grid_1.RowColFlags.ParentCollapsed,!0),e.rows.push(b)),c&&c.height&&!isNaN(c.height)&&(e.rows[N?O-1:O].height=c.height),z=0;z<w;z++)if(c){if((S=(g=c.cells[z])?g.formula:null)&&"="!==S[0]&&(S="="+S),g&&g.textRuns&&g.textRuns.length>0?(e.rows[N?O-1:O].isContentHtml=!0,e.setCellData(N?O-1:O,z,this._parseTextRunsToHTML(g.textRuns))):e.setCellData(N?O-1:O,z,S&&M?S:this._getItemValue(g)),p||this._setColumn(n,z,g),j=O*w+z,R=g?g.style:null,A=mXlsx.Workbook._parseExcelFormat(g),R){if(B=null==B?!!R.wordWrap:B&&!!R.wordWrap,F=this._getItemType(g),R.hAlign)D=mXlsx.Workbook._parseHAlignToString(wijmo_1.asEnum(R.hAlign,mXlsx.HAlign));else switch(F){case wijmo_1.DataType.Number:D="right";break;case wijmo_1.DataType.Boolean:D="center";break;default:D=A&&0===A.search(/[n,c,p]/i)?"right":"left"}T[j]={fontWeight:R.font&&R.font.bold?"bold":"none",fontStyle:R.font&&R.font.italic?"italic":"none",textDecoration:R.font&&R.font.underline?"underline":"none",textAlign:D,fontFamily:R.font&&R.font.family?R.font.family:"",fontSize:R.font&&R.font.size?R.font.size+"px":"",color:R.font&&R.font.color?R.font.color:"",backgroundColor:R.fill&&R.fill.color?R.fill.color:"",whiteSpace:R.wordWrap?"pre-wrap":"normal",format:A},R.borders&&(R.borders.left&&(this._parseBorderStyle(R.borders.left.style,"Left",T[j]),T[j].borderLeftColor=R.borders.left.color),R.borders.right&&(this._parseBorderStyle(R.borders.right.style,"Right",T[j]),T[j].borderRightColor=R.borders.right.color),R.borders.top&&(this._parseBorderStyle(R.borders.top.style,"Top",T[j]),T[j].borderTopColor=R.borders.top.color),R.borders.bottom&&(this._parseBorderStyle(R.borders.bottom.style,"Bottom",T[j]),T[j].borderBottomColor=R.borders.bottom.color)),R.font&&-1===X.indexOf(R.font.family)&&X.push(R.font.family)}g&&wijmo_1.isNumber(g.rowSpan)&&g.rowSpan>0&&wijmo_1.isNumber(g.colSpan)&&g.colSpan>0&&(g.rowSpan>1||g.colSpan>1)&&W.push(new wijmo_grid_1.CellRange(O,z,O+g.rowSpan-1,z+g.colSpan-1))}c&&(this._checkParentCollapsed(P,c.groupLevel)||c.visible||null==c.visible||(e.rows[N?O-1:O].visible=c.visible),e.rows[N?O-1:O].wordWrap=!!c.style&&!!c.style.wordWrap||!!B)}for(C&&(C.isCollapsed=L),f.frozenPane&&(v=f.frozenPane.columns,wijmo_1.isNumber(v)&&!isNaN(v)&&(e.frozenColumns=v),k=f.frozenPane.rows,wijmo_1.isNumber(k)&&!isNaN(k)&&(e.frozenRows=N&&k>0?k-1:k)),z=0;z<e.columnHeaders.columns.length;z++)s=n[z],(i=e.columns[z]).isRequired=!1,N&&((u=d?d.cells[z]:null)&&u.value?(m=mXlsx.Workbook._parseExcelFormat(u),a=wijmo_1.Globalize.format(u.value,m)):a=""),i.header=a,s&&(s.dataType===wijmo_1.DataType.Boolean&&(i.dataType=s.dataType),i.format=s.format,i.align=s.hAlign,i.wordWrap=i.wordWrap||!!s.wordWrap);M&&(e.wj_sheetInfo.name=f.name,e.wj_sheetInfo.visible=!0===G||!1!==f.visible,e.wj_sheetInfo.styledCells=T,e.wj_sheetInfo.mergedRanges=W,e.wj_sheetInfo.fonts=X,e.wj_sheetInfo.tables=f.tables)}},e._parseFlexGridRowToSheetRow=function(e,o,l,t,r,n,s,i,a,d,u,m){var c,f,h,w,p,g,_,x,y,b,C,v,k,S,j,R,T,W,X,A,F,D,B,H,N,E,I,G,M,z,O=!1,L=!1;for((X=(c=e.grid).wj_sheetInfo)&&(A=X.evaluateFormula),null==(f=e.rows[l]).recordIndex?(H=0,e.cellType===wijmo_grid_1.CellType.ColumnHeader&&e.rows.length>1&&(H=l===r.length?l-1:l)):H=f.recordIndex,o.cells||(o.cells=[]),o.visible=f.isVisible,o.height=f.renderHeight||e.rows.defaultSize,o.groupLevel=d,a&&(o.collapsed=f.isCollapsed),f.wordWrap&&(o.style={wordWrap:f.wordWrap}),(f.constructor===wijmo_grid_1.Row||f.constructor===wijmo_grid_1._NewRowTemplate||softDetail()&&f.constructor===softDetail().DetailRow||softMultiRow()&&f.constructor===softMultiRow()._MultiRow)&&(O=!0),softDetail()&&f.constructor===softDetail().DetailRow&&(L=!0),w=0;w<e.columns.length;w++)if(p=null,W=1,T=1,M=0,B=!1,j=null,I=null,E=null,x=null,D=c._getBindingColumn(e,l,e.columns[w]),R=null,X&&e===c.cells?(S=l*e.columns.length+w,X.mergedRanges&&(R=this._getMergedRange(l,w,X.mergedRanges)),X.styledCells&&(j=X.styledCells[S])):n&&(E=this._getMeasureCell(e,w,s,i),j=(R=c.getMergedRange(e,l,w,!1))?this._getCellStyle(e,E,R.bottomRow,R.rightCol)||{}:this._getCellStyle(e,E,l,w)||{}),R||(R=c.getMergedRange(e,l,w,!1)),R?l===R.topRow&&w===R.leftCol&&(T=R.bottomRow-R.topRow+1,W=this._getColSpan(e,R,u),B=!0):B=!0,!u||u(D)){if(h=r[H]?r[H][w+t]:null,O||a?(_=B?e.getCellData(l,w,!0):null,y=B?e.getCellData(l,w,!1):null,C=!1,k=null,_&&wijmo_1.isString(_)&&_.length>1&&"="===_[0]&&(C=!0),F=wijmo_1.isDate(y),j&&j.format&&null!=y?(p=j.format,/[hsmyt\:]/i.test(p)&&(F=!0),g=mXlsx.Workbook._parseCellFormat(j.format,F)):h&&h.style&&h.style.format?(p=D.format,g=h.style.format):g=null,C&&null!=A&&wijmo_1.isFunction(A)&&(k=A(_)),g||(F?g="m/d/yyyy":wijmo_1.isNumber(y)&&!D.dataMap?g=wijmo_1.isInt(y)?"#,##0":"#,##0.00":C?(v=_.toLowerCase()).indexOf("now()")>-1?(g="m/d/yyyy h:mm",F=!0):v.indexOf("today()")>-1||v.indexOf("date(")>-1?(g="m/d/yyyy",F=!0):v.indexOf("time(")>-1&&(g="h:mm AM/PM",F=!0):g="General")):(_=B?c.columnHeaders.getCellData(0,w,!0):null,g="General"),wijmo_1.isString(_)&&-1!==_.indexOf("<span")&&(x=this._parseToTextRuns(_),_=null),I=this._parseCellStyle(j)||{},e===c.cells&&a&&f.hasChildren&&w===c.columns.firstVisibleIndex){if(C&&null!=k?b=k:_?b=_:B&&(b=f.getGroupHeader().replace(/<\/?\w+>/g,"").replace(/&#39;/g,"'")),null==b&&!j)continue;!(F=wijmo_1.isDate(b))&&p&&"d"===p.toLowerCase()&&wijmo_1.isInt(b)&&(g="0"),b=wijmo_1.isString(b)?mXlsx.Workbook._unescapeXML(b):b,w===c.columns.firstVisibleIndex&&c.treeIndent&&(M=d),N={value:b,isDate:F,formula:C?this._parseToExcelFormula(_,F):null,colSpan:W,rowSpan:T,style:this._extend(I,{format:g,font:{bold:!0},hAlign:mXlsx.HAlign.Left,indent:M}),textRuns:x}}else _=wijmo_1.isString(_)?mXlsx.Workbook._unescapeXML(_):_,y=wijmo_1.isString(y)?mXlsx.Workbook._unescapeXML(y):y,!F&&p&&"d"===p.toLowerCase()&&wijmo_1.isInt(y)&&(g="0"),G=I&&I.hAlign?I.hAlign:h&&h.style&&null!=h.style.hAlign?wijmo_1.asEnum(h.style.hAlign,mXlsx.HAlign,!0):wijmo_1.isDate(y)?mXlsx.HAlign.Left:mXlsx.HAlign.General,w!==c.columns.firstVisibleIndex||!c.treeIndent||G!==mXlsx.HAlign.Left&&G!==mXlsx.HAlign.General||(M=d),N={value:C?k:"General"===g?_:y,isDate:F,formula:C?this._parseToExcelFormula(_,F):null,colSpan:w<c.columns.firstVisibleIndex?1:W,rowSpan:T,style:this._extend(I,{format:g,hAlign:G,vAlign:T>1?e===c.cells||!1===c.centerHeadersVertically?mXlsx.VAlign.Top:mXlsx.VAlign.Center:null,indent:M}),textRuns:x},L&&(z=e.getCellElement(l,w))&&z.appendChild(f.detail);m&&m(new XlsxFormatItemEventArgs(e,new wijmo_grid_1.CellRange(l,w),E,s,i,N)),o.cells.push(N)}return t+w},e._parseCellStyle=function(e,o){if(void 0===o&&(o=!1),null==e)return null;var l=e.fontSize;l=l?+l.substring(0,l.indexOf("px")):null,isNaN(l)&&(l=null);var t=e.fontWeight;t="bold"===t||+t>=700;var r="italic"===e.fontStyle,n=e.textDecorationStyle;null==n&&(n=e.textDecoration),n="underline"===n;var s=e.whiteSpace;return s=!!s&&s.indexOf("pre")>-1,{font:{bold:t,italic:r,underline:n,family:this._parseToExcelFontFamily(e.fontFamily),size:l,color:e.color},fill:{color:e.backgroundColor},borders:this._parseBorder(e,o),hAlign:mXlsx.Workbook._parseStringToHAlign(e.textAlign),wordWrap:s}},e._parseBorder=function(e,o){var l={};return l.left=this._parseEgdeBorder(e,"Left"),l.right=this._parseEgdeBorder(e,"Right"),l.top=this._parseEgdeBorder(e,"Top"),l.bottom=this._parseEgdeBorder(e,"Bottom"),o&&(l.vertical=this._parseEgdeBorder(e,"Vertical"),l.horizontal=this._parseEgdeBorder(e,"Horizontal")),l},e._parseEgdeBorder=function(e,o){var l,t=e["border"+o+"Style"],r=e["border"+o+"Width"];if(r&&r.length>2&&(r=+r.substring(0,r.length-2)),t&&"none"!==t&&"hidden"!==t){switch(l={},t=t.toLowerCase()){case"dotted":l.style=r>1?mXlsx.BorderStyle.MediumDashDotted:mXlsx.BorderStyle.Dotted;break;case"dashed":l.style=r>1?mXlsx.BorderStyle.MediumDashed:mXlsx.BorderStyle.Dashed;break;case"double":l.style=mXlsx.BorderStyle.Double;break;default:l.style=r>2?mXlsx.BorderStyle.Thick:r>1?mXlsx.BorderStyle.Medium:mXlsx.BorderStyle.Thin}l.color=e["border"+o+"Color"]}return l},e._parseBorderStyle=function(e,o,l){var t="border"+o+"Style",r="border"+o+"Width";switch(e){case mXlsx.BorderStyle.Dotted:case mXlsx.BorderStyle.Hair:l[t]="dotted",l[r]="1px";break;case mXlsx.BorderStyle.Dashed:case mXlsx.BorderStyle.ThinDashDotDotted:case mXlsx.BorderStyle.ThinDashDotted:l[t]="dashed",l[r]="1px";break;case mXlsx.BorderStyle.MediumDashed:case mXlsx.BorderStyle.MediumDashDotDotted:case mXlsx.BorderStyle.MediumDashDotted:case mXlsx.BorderStyle.SlantedMediumDashDotted:l[t]="dashed",l[r]="2px";break;case mXlsx.BorderStyle.Double:l[t]="double",l[r]="3px";break;case mXlsx.BorderStyle.Medium:l[t]="solid",l[r]="2px";break;default:l[t]="solid",l[r]="1px"}},e._parseToExcelFontFamily=function(e){var o;return e&&(o=e.split(","))&&o.length>0&&(e=o[0].replace(/\"|\'/g,"")),e},e._parseToExcelFormula=function(e,o){var l,t,r,n,s,i,a,d=/\"?\w+\"?\s*\,\s*\"(\w+)\"/i;if(l=e.match(/(floor|ceiling)\([+-]?\d+\.?\d*\)/gi))for(s=0;s<l.length;s++)a=(i=l[s]).substring(0,i.lastIndexOf(")"))+", 1)",e=e.replace(i,a);if(l=null,l=e.match(/text\(\"?\w+\"?\s*\,\s*\"\w+\"\)/gi))for(s=0;s<l.length;s++)(t=(i=l[s]).match(d))&&2===t.length&&(r=t[1],/^d{1,4}?$/.test(r)||(n=mXlsx.Workbook._parseCellFormat(r,o),a=i.replace(r,n),e=e.replace(i,a)));return e},e._parseToTextRuns=function(e){var o,l,t,r=e.split("<span "),n=[];for(o=0;o<r.length;o++)t=-1!==(l=r[o]).indexOf("</span>")?{text:l.substring(l.indexOf(">")+1,l.indexOf("</span>")),font:this._parseToTextRunFont(l.substring(l.indexOf('style="')+7,l.indexOf(';"')))}:{text:l},n.push(t);return n},e._parseToTextRunFont=function(e){var o,l,t,r,n,s,i,a,d,u=e.split(";");if(u.length>0){for(o=0;o<u.length;o++)if(2===(l=u[o].split(":")).length)switch(l[1]=l[1].trim(),l[0]){case"font-size":s=+l[1].substring(0,l[1].indexOf("px")),isNaN(s)&&(s=null);break;case"font-weight":t="bold"===l[1]||+l[1]>=700;break;case"font-style":r="italic"===l[1];break;case"text-decoration-style":case"text-decoration":n="underline"===l[1];break;case"font-family":i=this._parseToExcelFontFamily(l[1]);break;case"color":a=l[1]}d={bold:t,italic:r,underline:n,family:i,size:s,color:a}}return d},e._getMeasureCell=function(e,o,l,t){var r=t[e.cellType],n=r&&r[o],s=null==n;if(n){if(this.hasCssText){n.style;n.style.cssText="",n.style.visibility="hidden"}}else r||(t[e.cellType]=r=[]),r[o]=n=l.cloneNode();return!s&&n.parentElement||(e.hostElement.children.length>0?e.hostElement.children[0].appendChild(n):e.hostElement.appendChild(n)),n},e._getColumnSetting=function(e,o,l){return null!=e.colspan&&(e=this._getRenderColumn(o,l)),e?{autoWidth:!0,width:e.renderWidth||l.defaultSize,visible:e.visible,style:{format:e.format?mXlsx.Workbook._parseCellFormat(e.format,e.dataType===wijmo_1.DataType.Date):"",hAlign:mXlsx.Workbook._parseStringToHAlign(this._toExcelHAlign(e.getAlignment())),wordWrap:e.wordWrap}}:null},e._toExcelHAlign=function(e){return(e=e?e.trim().toLowerCase():e)?e.indexOf("center")>-1?"center":e.indexOf("right")>-1||e.indexOf("end")>-1?"right":e.indexOf("justify")>-1?"justify":"left":e},e._getColumnCount=function(e){for(var o,l=0,t=0,r=0;r<e.length;r++)(o=e[r]&&e[r].cells?e[r].cells:[])&&o.length>0&&(t=o.length,wijmo_1.isInt(o[t-1].colSpan)&&o[t-1].colSpan>1&&(t=t+o[t-1].colSpan-1),t>l&&(l=t));return l},e._getRowCount=function(e,o){for(var l,t,r=e.length,n=r-1,s=0;s<o;s++)e:for(;n>=0;n--)if((t=((l=e[n])&&l.cells?l.cells:[])[s])&&(null!=t.value&&""!==t.value||wijmo_1.isInt(t.rowSpan)&&t.rowSpan>1)){wijmo_1.isInt(t.rowSpan)&&t.rowSpan>1&&n+t.rowSpan>r&&(r=n+t.rowSpan);break e}return r},e._numAlpha=function(e){var o=Math.floor(e/26)-1;return(o>-1?this._numAlpha(o):"")+String.fromCharCode(65+e%26)},e._getItemType=function(e){return null==e||null==e.value||isNaN(e.value)?null:wijmo_1.getType(e.value)},e._setColumn=function(e,o,l){var t,r,n,s=e[o];s?(t=this._getItemType(l),s.dataType!==t&&s.dataType===wijmo_1.DataType.Boolean&&t!==wijmo_1.DataType.Boolean&&(s.dataType=t),!l||null==l.value||wijmo_1.isString(l.value)&&wijmo_1.isNullOrWhiteSpace(l.value)||(r=mXlsx.Workbook._parseExcelFormat(l))&&s.format!==r&&"General"!==r&&(s.format=r),l&&l.style&&(l.style.hAlign&&(n=mXlsx.Workbook._parseHAlignToString(wijmo_1.asEnum(l.style.hAlign,mXlsx.HAlign))),null==s.wordWrap?s.wordWrap=!!l.style.wordWrap:s.wordWrap=s.wordWrap&&!!l.style.wordWrap),n||t!==wijmo_1.DataType.Number||(n="right"),s.hAlign=n):e[o]={dataType:this._getItemType(l),format:mXlsx.Workbook._parseExcelFormat(l),hAlign:"",wordWrap:null}},e._getItemValue=function(e){if(null==e||null==e.value)return null;var o=e.value;return wijmo_1.isNumber(o)&&isNaN(o)?"":o instanceof Date&&isNaN(o.getTime())?"":o},e._getCellStyle=function(e,o,l,t){try{e.grid.cellFactory.updateCell(e,l,t,o),o.className=o.className.replace("wj-state-selected",""),o.className=o.className.replace("wj-state-multi-selected","")}catch(e){return null}return window.getComputedStyle(o)},e._parseTextRunsToHTML=function(e){var o,l,t,r;for(t="",r=0;r<e.length;r++)t+=(l=(o=e[r]).font)?'<span style="'+(l.bold?"font-weight: bold;":"")+(l.italic?"font-style: italic;":"")+(l.underline?"text-decoration: underline;":"")+(l.family?"font-family: "+l.family+";":"")+(null!=l.size?"font-size: "+l.size+"px;":"")+(l.color?"color: "+l.color+";":"")+'">'+o.text+"</span>":o.text;return t},e._extend=function(e,o){for(var l in o){var t=o[l];wijmo_1.isObject(t)&&e[l]?wijmo_1.copy(e[l],t):e[l]=t}return e},e._checkParentCollapsed=function(e,o){var l=!1;return Object.keys(e).forEach(function(t){!0===e[t]&&!1===l&&!isNaN(o)&&+t<o&&(l=!0)}),l},e._getColSpan=function(e,o,l){for(var t=0,r=o.leftCol;r<=o.rightCol;r++)l&&!l(e.columns[r])||t++;return t},e._getRenderColumn=function(e,o){return e>=o.length?null:o[e]},e._getMergedRange=function(e,o,l){var t,r;for(t=0;t<l.length;t++)if(e>=(r=l[t]).topRow&&e<=r.bottomRow&&o>=r.leftCol&&o<=r.rightCol)return r;return null},e}();exports.FlexGridXlsxConverter=FlexGridXlsxConverter;var XlsxFormatItemEventArgs=function(e){function o(o,l,t,r,n,s){var i=e.call(this,o,l)||this;return i._cell=t,i._patternCell=r,i._xlsxCell=s,i._cellsCache=n,i}return __extends(o,e),Object.defineProperty(o.prototype,"cell",{get:function(){return this._cell},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"xlsxCell",{get:function(){return this._xlsxCell},set:function(e){this._xlsxCell=e},enumerable:!0,configurable:!0}),o.prototype.getFormattedCell=function(){return this._cell||(this._cell=FlexGridXlsxConverter._getMeasureCell(this.panel,this.col,this._patternCell,this._cellsCache),FlexGridXlsxConverter._getCellStyle(this.panel,this._cell,this.row,this.col)),this._cell},o}(wijmo_grid_1.CellRangeEventArgs);exports.XlsxFormatItemEventArgs=XlsxFormatItemEventArgs,wijmo_1._registerModule("wijmo.grid.xlsx",selfModule);

/***/ }),

/***/ "./node_modules/wijmo/wijmo.xlsx.js":
/*!******************************************!*\
  !*** ./node_modules/wijmo/wijmo.xlsx.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
﻿/*!
    *
    * Wijmo Library 5.20191.615
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */

var __extends=this&&this.__extends||function(){var e=function(t,l){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var l in t)t.hasOwnProperty(l)&&(e[l]=t[l])})(t,l)};return function(t,l){function r(){this.constructor=t}e(t,l),t.prototype=null===l?Object.create(l):(r.prototype=l.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_1=__webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js"),JSZipRef=__webpack_require__(/*! jszip */ "./node_modules/jszip/lib/index.js"),selfModule=__webpack_require__(/*! wijmo/wijmo.xlsx */ "./node_modules/wijmo/wijmo.xlsx.js"),Workbook=function(){function e(){}return Object.defineProperty(e.prototype,"sheets",{get:function(){return null==this._sheets&&(this._sheets=[]),this._sheets},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"styles",{get:function(){return null==this._styles&&(this._styles=[]),this._styles},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"definedNames",{get:function(){return null==this._definedNames&&(this._definedNames=[]),this._definedNames},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"colorThemes",{get:function(){return null==this._colorThemes&&(this._colorThemes=[]),this._colorThemes},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reservedContent",{get:function(){return null==this._reservedContent&&(this._reservedContent={}),this._reservedContent},set:function(e){this._reservedContent=e},enumerable:!0,configurable:!0}),e.prototype.save=function(t){var l=_xlsx.save(this),r=!(!this._reservedContent||!this._reservedContent.macros);return t&&e._saveToFile(l.base64,t,r),l.base64},e.prototype.saveAsync=function(t,l,r){var o=this;_xlsx.saveAsync(o,r).then(function(r){if(t){var s=!(!o._reservedContent||!o._reservedContent.macros);e._saveToFile(r,t,s)}l&&l(r)})},e.prototype.load=function(e){var t=_xlsx.load(this._getBase64String(e));this._deserialize(t),t=null},e.prototype.loadAsync=function(e,t,l){var r=this;_xlsx.loadAsync(r._getBase64String(e)).then(function(e){r._deserialize(e),e=null,t(r)}).catch(l)},e.prototype._serialize=function(){var e={sheets:[]};return e.sheets=this._serializeWorkSheets(),this._styles&&this._styles.length>0&&(e.styles=this._serializeWorkbookStyles()),this._reservedContent&&(e.reservedContent=this._reservedContent),null!=this.activeWorksheet&&!isNaN(this.activeWorksheet)&&this.activeWorksheet>=0&&(e.activeWorksheet=this.activeWorksheet),this.application&&(e.application=this.application),this.company&&(e.company=this.company),null!=this.created&&(e.created=this.created),this.creator&&(e.creator=this.creator),this.lastModifiedBy&&(e.lastModifiedBy=this.lastModifiedBy),null!=this.modified&&(e.modified=this.modified),this._definedNames&&this._definedNames.length>0&&(e.definedNames=this._serializeDefinedNames()),this._colorThemes&&this._colorThemes.length>0&&(e.colorThemes=this._colorThemes.slice()),e},e.prototype._deserialize=function(e){this._deserializeWorkSheets(e.sheets),e.styles&&e.styles.length>0&&this._deserializeWorkbookStyles(e.styles),this.activeWorksheet=e.activeWorksheet,this.application=e.application,this.company=e.company,this.created=e.created,this.creator=e.creator,this.lastModifiedBy=e.lastModifiedBy,this.modified=e.modified,this.reservedContent=e.reservedContent,e.definedNames&&e.definedNames.length>0&&this._deserializeDefinedNames(e.definedNames),e.colorThemes&&e.colorThemes.length>0&&(this._colorThemes=e.colorThemes.slice())},e.prototype._addWorkSheet=function(e,t){null==this._sheets&&(this._sheets=[]),null==t||isNaN(t)?this._sheets.push(e):this._sheets[t]=e},e._saveToFile=function(t,l,r){var o,s,i,n,a,h,u=window.document,c=r?"xlsm":"xlsx",f="xlsm"===c?"application/vnd.ms-excel.sheet.macroEnabled.12":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";if((s=l.lastIndexOf("."))<0)l+="."+c;else{if(0===s)throw"Invalid file name.";""===(o=l.substring(s+1))?l+="."+c:o!==c&&(l+="."+c)}i=new Blob([e._base64DecToArr(t)],{type:f}),navigator.msSaveBlob?navigator.msSaveBlob(i,l):URL.createObjectURL?(a=u.createElement("a"),h=function(e){var t=u.createEvent("MouseEvents");t.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(t)},a.download=l,a.href=URL.createObjectURL(i),h(a),a=null):(n=new FileReader,a=u.createElement("a"),h=function(e){var t=u.createEvent("MouseEvents");t.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(t)},n.onload=function(){a.download=l,a.href=n.result,h(a),a=null},n.readAsDataURL(i))},e.prototype._getBase64String=function(e){var t;if(null==e||0===e.length)throw"Invalid xlsx file content.";return-1!==(t=e.search(/base64,/i))&&(e=e.substring(t+7)),e},e.toXlsxDateFormat=function(e){var t;if(1===e.length)switch(e){case"r":case"R":return"ddd, dd MMM yyyy HH:mm:ss &quot;GMT&quot;";case"u":return"yyyy-MM-dd&quot;T&quot;HH:mm:ss&quot;Z&quot;";case"o":case"O":t=(t=wijmo_1.culture.Globalize.calendar.patterns[e]).replace(/f+k/gi,"000");break;default:t=wijmo_1.culture.Globalize.calendar.patterns[e]}return t||(t=e),t=t.replace(/"/g,"").replace(/tt/,"AM/PM").replace(/t/,"A/P").replace(/M+/gi,function(e){return e.toLowerCase()}).replace(/g+y+/gi,function(e){return e.substring(0,e.indexOf("y"))+"e"}),/FY|Q/i.test(t)?"General":t},e.toXlsxNumberFormat=function(e){var t,l,r,o,s,i,n,a=-1,h=e?e.toLowerCase():"",u=[];if(/^[ncpfdg]\d*.*,*$/.test(h)&&(t=h[0],l=this._formatMap[t]),l){if(o=h.split(","),"c"===t&&("​"===(r=(n=e?e.match(/([a-z])(\d*)(,*)(.*)/i):null)&&n[4]?n[4]:wijmo_1.culture.Globalize.numberFormat.currency.symbol)&&(r=""),l=l.replace(/\{1\}/g,r)),h.length>1?a=parseInt(o[0].substr(1)):"d"!==t&&(a=2),!isNaN(a))for(i=0;i<a;i++)u.push(0);for(i=0;i<o.length-1;i++)u.push(",");s=u.length>0?"d"===t?l.replace(/\{0\}/g,u.join("")):l.replace(/\{0\}/g,(!isNaN(a)&&a>0?".":"")+u.join("")):"d"===t?l.replace(/\{0\}/g,"0"):l.replace(/\{0\}/g,"")}else s=h;return s},e.fromXlsxFormat=function(e){var t,l,r,o,s,i,n,a,h,u=[],c=wijmo_1.culture.Globalize.numberFormat.currency.symbol;if(!e||"General"===e)return[""];for(l=(e=e.replace(/;@/g,"").replace(/&quot;?/g,"")).split(";"),o=0;o<l.length;o++){if(r=l[o],/[hsmy\:]/i.test(r))t=r.replace(/\[\$\-.+\]/g,"").replace(/(\\)(.)/g,"$2").replace(/H+/g,function(e){return e.toLowerCase()}).replace(/m+/g,function(e){return e.toUpperCase()}).replace(/S+/g,function(e){return e.toLowerCase()}).replace(/AM\/PM/gi,"tt").replace(/A\/P/gi,"t").replace(/\.000/g,".fff").replace(/\.00/g,".ff").replace(/\.0/g,".f").replace(/\\[\-\s,]/g,function(e){return e.substring(1)}).replace(/Y+/g,function(e){return e.toLowerCase()}).replace(/D+/g,function(e){return e.toLowerCase()}).replace(/M+:?|:?M+/gi,function(e){return e.indexOf(":")>-1?e.toLowerCase():e}).replace(/g+e/gi,function(e){return e.substring(0,e.length-1)+"yy"});else if(i=r.lastIndexOf("."),n=r.lastIndexOf("0"),a=r.lastIndexOf(","),t=r.search(/\[\$([^\-\]]+)[^\]]*\]/)>-1||r.indexOf(c)>-1&&-1===r.search(/\[\$([\-\]]+)[^\]]*\]/)?"c":"%"===r[e.length-1]?"p":"n",t+=i>-1&&i<n?r.substring(i,n).length:"0",/^0+,*$/.test(r)&&(t="d"+((n=r.lastIndexOf("0"))+1)),a>-1&&n>-1&&n<a)for(h=r.substring(n+1,a+1).split(""),s=0;s<h.length;s++)t+=",";u.push(t)}return u},e._parseCellFormat=function(e,t){return t?this.toXlsxDateFormat(e):this.toXlsxNumberFormat(e)},e._parseExcelFormat=function(e){if(void 0!==e&&null!==e&&void 0!==e.value&&null!==e.value&&!isNaN(e.value)){var t=e.style&&e.style.format?e.style.format:"";return e.isDate||wijmo_1.isDate(e.value)?this.fromXlsxFormat(t)[0]:!wijmo_1.isNumber(e.value)||t&&"General"!==t?wijmo_1.isNumber(e.value)||""===e.value?this.fromXlsxFormat(t)[0]:t:wijmo_1.isInt(e.value)?"d":"f2"}},e.xlsxAddress=function(e,t,l,r,o){var s=l?"$":"",i=null==r?s:r?"$":"";return!0===o?"":(isNaN(t)?"":i+this._numAlpha(t))+(!1===o?"":isNaN(e)?"":s+(e+1).toString())},e.tableAddress=function(e){var t=e&&/^((\$?)([A-Za-z]+))?((\$?)(\d+))?$/.exec(e),l={};return t?(t[3]&&(l.col=this._alphaNum(t[3]),l.absCol=!!t[2]),t[6]&&(l.row=+t[6]-1,l.absRow=!!t[5]),l):null},e._parseHAlignToString=function(e){switch(e){case HAlign.Left:return"left";case HAlign.Center:return"center";case HAlign.Right:return"right";case HAlign.Justify:return"justify";default:return"general"}},e._parseStringToHAlign=function(e){var t=e?e.toLowerCase():"";return"left"===t?HAlign.Left:"center"===t?HAlign.Center:"right"===t?HAlign.Right:"justify"===t?HAlign.Justify:HAlign.General},e._parseVAlignToString=function(e){switch(e){case VAlign.Bottom:return"bottom";case VAlign.Center:return"center";case VAlign.Top:return"top";default:return null}},e._parseStringToVAlign=function(e){var t=e?e.toLowerCase():"";return"top"===t?VAlign.Top:"center"===t?VAlign.Center:"bottom"===t?VAlign.Bottom:null},e._parseBorderTypeToString=function(e){switch(e){case BorderStyle.Dashed:return"dashed";case BorderStyle.Dotted:return"dotted";case BorderStyle.Double:return"double";case BorderStyle.Hair:return"hair";case BorderStyle.Medium:return"medium";case BorderStyle.MediumDashDotDotted:return"mediumDashDotDot";case BorderStyle.MediumDashDotted:return"mediumDashDot";case BorderStyle.MediumDashed:return"mediumDashed";case BorderStyle.SlantedMediumDashDotted:return"slantDashDot";case BorderStyle.Thick:return"thick";case BorderStyle.Thin:return"thin";case BorderStyle.ThinDashDotDotted:return"dashDotDot";case BorderStyle.ThinDashDotted:return"dashDot";case BorderStyle.None:default:return"none"}},e._parseStringToBorderType=function(e){return"dashed"===e?BorderStyle.Dashed:"dotted"===e?BorderStyle.Dotted:"double"===e?BorderStyle.Double:"hair"===e?BorderStyle.Hair:"medium"===e?BorderStyle.Medium:"mediumDashDotDot"===e?BorderStyle.MediumDashDotDotted:"mediumDashDot"===e?BorderStyle.MediumDashDotted:"mediumDashed"===e?BorderStyle.MediumDashed:"slantDashDot"===e?BorderStyle.SlantedMediumDashDotted:"thick"===e?BorderStyle.Thick:"thin"===e?BorderStyle.Thin:"dashDotDot"===e?BorderStyle.ThinDashDotDotted:"dashDot"===e?BorderStyle.ThinDashDotted:null},e._escapeXML=function(e){return"string"==typeof e?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""},e._unescapeXML=function(e){return"string"==typeof e?e.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&#x2F;/g,"/"):""},e._numAlpha=function(e){var t=Math.floor(e/26)-1;return(t>-1?this._numAlpha(t):"")+this._alphabet.charAt(e%26)},e._alphaNum=function(e){var t=0;return e&&(e=e.toUpperCase()),2===e.length&&(t=this._alphaNum(e.charAt(0))+1),26*t+this._alphabet.indexOf(e.substr(-1))},e._b64ToUint6=function(e){return e>64&&e<91?e-65:e>96&&e<123?e-71:e>47&&e<58?e+4:43===e?62:47===e?63:0},e._base64DecToArr=function(e,t){for(var l,r,o=e.replace(/[^A-Za-z0-9\+\/]/g,""),s=o.length,i=t?Math.ceil((3*s+1>>2)/t)*t:3*s+1>>2,n=new Uint8Array(i),a=0,h=0,u=0;u<s;u++)if(r=3&u,a|=this._b64ToUint6(o.charCodeAt(u))<<18-6*r,3===r||s-u==1){for(l=0;l<3&&h<i;l++,h++)n[h]=a>>>(16>>>l&24)&255;a=0}return n},e._uint6ToB64=function(e){return e<26?e+65:e<52?e+71:e<62?e-4:62===e?43:63===e?47:65},e._base64EncArr=function(e){for(var t=2,l="",r=e.length,o=0,s=0;s<r;s++)t=s%3,s>0&&4*s/3%76==0&&(l+="\r\n"),o|=e[s]<<(16>>>t&24),2!==t&&e.length-s!=1||(l+=String.fromCharCode(this._uint6ToB64(o>>>18&63),this._uint6ToB64(o>>>12&63),this._uint6ToB64(o>>>6&63),this._uint6ToB64(63&o)),o=0);return l.substr(0,l.length-2+t)+(2===t?"":1===t?"=":"==")},e.prototype._serializeWorkSheets=function(){var e,t,l=[];for(t=0;t<this._sheets.length;t++)(e=this._sheets[t])&&(l[t]=e._serialize());return l},e.prototype._serializeWorkbookStyles=function(){var e,t,l=[];for(t=0;t<this._styles.length;t++)(e=this._styles[t])&&(l[t]=e._serialize());return l},e.prototype._serializeDefinedNames=function(){var e,t,l=[];for(t=0;t<this._definedNames.length;t++)(e=this._definedNames[t])&&(l[t]=e._serialize());return l},e.prototype._serializeTableStyles=function(){var e,t,l=[];for(t=0;t<this._tableStyles.length;t++)(e=this._tableStyles[t])&&(l[t]=e._serialize());return l},e.prototype._deserializeWorkSheets=function(e){var t,l,r;for(this._sheets=[],wijmo_1.assert(null!=e,"workSheets should not be null."),r=0;r<e.length;r++)(l=e[r])&&((t=new WorkSheet)._deserialize(l),this._sheets[r]=t)},e.prototype._deserializeWorkbookStyles=function(e){var t,l,r;for(this._styles=[],r=0;r<e.length;r++)(l=e[r])&&((t=new WorkbookStyle)._deserialize(l),this._styles[r]=t)},e.prototype._deserializeDefinedNames=function(e){var t,l,r;for(this._definedNames=[],r=0;r<e.length;r++)(l=e[r])&&((t=new DefinedName)._deserialize(l),this._definedNames[r]=t)},e.prototype._deserializeTableStyles=function(e){var t,l,r;for(this._tableStyles=[],r=0;r<e.length;r++)(l=e[r])&&((t=new WorkbookTableStyle)._deserialize(l),this._tableStyles[r]=t)},e._alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ",e._formatMap={n:"#,##0{0}",c:"{1}#,##0{0}_);({1}#,##0{0})",p:"#,##0{0}%",f:"0{0}",d:"{0}",g:"0{0}"},e}();exports.Workbook=Workbook;var WorkSheet=function(){function e(){}return Object.defineProperty(e.prototype,"columns",{get:function(){return null==this._columns&&(this._columns=[]),this._columns},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rows",{get:function(){return null==this._rows&&(this._rows=[]),this._rows},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tables",{get:function(){return null==this._tables&&(this._tables=[]),this._tables},enumerable:!0,configurable:!0}),e.prototype._serialize=function(){var e;return this._checkEmptyWorkSheet()?null:(e={},this.style&&(e.style=this.style._serialize()),this._columns&&this._columns.length>0&&(e.columns=this._serializeWorkbookColumns()),this._rows&&this._rows.length>0&&(e.rows=this._serializeWorkbookRows()),this.frozenPane&&(e.frozenPane=this.frozenPane._serialize()),this.name&&(e.name=this.name),null!=this.summaryBelow&&(e.summaryBelow=this.summaryBelow),null!=this.visible&&(e.visible=this.visible),this._tables&&this._tables.length>0&&(e.tables=this._serializeTables()),e)},e.prototype._deserialize=function(e){var t,l;e.style&&((l=new WorkbookStyle)._deserialize(e.style),this.style=l),e.columns&&e.columns.length>0&&this._deserializeWorkbookColumns(e.columns),e.rows&&e.rows.length>0&&this._deserializeWorkbookRows(e.rows),e.frozenPane&&((t=new WorkbookFrozenPane)._deserialize(e.frozenPane),this.frozenPane=t),this.name=e.name,this.summaryBelow=e.summaryBelow,this.visible=e.visible,e.tables&&e.tables.length>0&&this._deserializeTables(e.tables)},e.prototype._addWorkbookColumn=function(e,t){null==this._columns&&(this._columns=[]),null==t||isNaN(t)?this._columns.push(e):this._columns[t]=e},e.prototype._addWorkbookRow=function(e,t){null==this._rows&&(this._rows=[]),null==t||isNaN(t)?this._rows.push(e):this._rows[t]=e},e.prototype._serializeWorkbookColumns=function(){var e,t,l=[];for(t=0;t<this._columns.length;t++)(e=this._columns[t])&&(l[t]=e._serialize());return l},e.prototype._serializeWorkbookRows=function(){var e,t,l=[];for(t=0;t<this._rows.length;t++)(e=this._rows[t])&&(l[t]=e._serialize());return l},e.prototype._serializeTables=function(){var e,t,l=[];for(t=0;t<this._tables.length;t++)(e=this._tables[t])&&(l[t]=e._serialize());return l},e.prototype._deserializeWorkbookColumns=function(e){var t,l,r;for(this._columns=[],r=0;r<e.length;r++)(t=e[r])&&((l=new WorkbookColumn)._deserialize(t),this._columns[r]=l)},e.prototype._deserializeWorkbookRows=function(e){var t,l,r;for(this._rows=[],r=0;r<e.length;r++)(t=e[r])&&((l=new WorkbookRow)._deserialize(t),this._rows[r]=l)},e.prototype._deserializeTables=function(e){var t,l,r;for(this._tables=[],r=0;r<e.length;r++)(l=e[r])&&((t=new WorkbookTable)._deserialize(l),this._tables[r]=t)},e.prototype._checkEmptyWorkSheet=function(){return!(null!=this._rows||null!=this._columns||null!=this.visible||null!=this.summaryBelow||null!=this.frozenPane||null!=this.style||null!=this.name&&""!==this.name||null!=this._tables&&0!=this._tables.length)},e}();exports.WorkSheet=WorkSheet;var WorkbookColumn=function(){function e(){}return e.prototype._serialize=function(){var e;return this._checkEmptyWorkbookColumn()?null:(e={},this.style&&(e.style=this.style._serialize()),null!=this.autoWidth&&(e.autoWidth=this.autoWidth),null!=this.width&&(e.width=this.width),null!=this.visible&&(e.visible=this.visible),e)},e.prototype._deserialize=function(e){var t;e.style&&((t=new WorkbookStyle)._deserialize(e.style),this.style=t),this.autoWidth=e.autoWidth,this.visible=e.visible,this.width=e.width},e.prototype._checkEmptyWorkbookColumn=function(){return null==this.style&&null==this.width&&null==this.autoWidth&&null==this.visible},e}();exports.WorkbookColumn=WorkbookColumn;var WorkbookRow=function(){function e(){}return Object.defineProperty(e.prototype,"cells",{get:function(){return null==this._cells&&(this._cells=[]),this._cells},enumerable:!0,configurable:!0}),e.prototype._serialize=function(){var e;return this._checkEmptyWorkbookRow()?null:(e={},this._cells&&this._cells.length>0&&(e.cells=this._serializeWorkbookCells()),this.style&&(e.style=this.style._serialize()),null!=this.collapsed&&(e.collapsed=this.collapsed),null==this.groupLevel||isNaN(this.groupLevel)||(e.groupLevel=this.groupLevel),null==this.height||isNaN(this.height)||(e.height=this.height),null!=this.visible&&(e.visible=this.visible),e)},e.prototype._deserialize=function(e){var t;e.cells&&e.cells.length>0&&this._deserializeWorkbookCells(e.cells),e.style&&((t=new WorkbookStyle)._deserialize(e.style),this.style=t),this.collapsed=e.collapsed,this.groupLevel=e.groupLevel,this.height=e.height,this.visible=e.visible},e.prototype._addWorkbookCell=function(e,t){null==this._cells&&(this._cells=[]),null==t||isNaN(t)?this._cells.push(e):this._cells[t]=e},e.prototype._serializeWorkbookCells=function(){var e,t,l=[];for(t=0;t<this._cells.length;t++)(e=this._cells[t])&&(l[t]=e._serialize());return l},e.prototype._deserializeWorkbookCells=function(e){var t,l,r;for(this._cells=[],r=0;r<e.length;r++)(t=e[r])&&((l=new WorkbookCell)._deserialize(t),this._cells[r]=l)},e.prototype._checkEmptyWorkbookRow=function(){return null==this._cells&&null==this.style&&null==this.collapsed&&null==this.visible&&(null==this.height||isNaN(this.height))&&(null==this.groupLevel||isNaN(this.groupLevel))},e}();exports.WorkbookRow=WorkbookRow;var WorkbookCell=function(){function e(){}return e.prototype._serialize=function(){var e;return this._checkEmptyWorkbookCell()?null:(e={},this.style&&(e.style=this.style._serialize()),null!=this.value&&(e.value=this.value),this.formula&&(e.formula=this.formula),null!=this.isDate&&(e.isDate=this.isDate),null!=this.colSpan&&!isNaN(this.colSpan)&&this.colSpan>1&&(e.colSpan=this.colSpan),null!=this.rowSpan&&!isNaN(this.rowSpan)&&this.rowSpan>1&&(e.rowSpan=this.rowSpan),this.link&&(e.link=this.link),this.textRuns&&this.textRuns.length>0&&(e.textRuns=this._serializeTextRuns()),e)},e.prototype._deserialize=function(e){var t;e.style&&((t=new WorkbookStyle)._deserialize(e.style),this.style=t),this.value=e.value,this.formula=e.formula,this.isDate=e.isDate,this.colSpan=e.colSpan,this.rowSpan=e.rowSpan,this.link=e.link,e.textRuns&&e.textRuns.length>0&&this._deserializeTextRuns(e.textRuns)},e.prototype._serializeTextRuns=function(){var e,t,l=[];for(t=0;t<this.textRuns.length;t++)e=this.textRuns[t],l.push(e._serialize());return l},e.prototype._deserializeTextRuns=function(e){var t,l,r;for(this.textRuns=[],r=0;r<e.length;r++)l=new WorkbookTextRun,t=e[r],l._deserialize(t),this.textRuns.push(l)},e.prototype._checkEmptyWorkbookCell=function(){return null==this.style&&null==this.value&&null==this.isDate&&(null==this.formula||""===this.formula)&&(null==this.colSpan||isNaN(this.colSpan)||this.colSpan<=1)&&(null==this.rowSpan||isNaN(this.rowSpan)||this.rowSpan<=1)&&(null==this.link||""===this.link)},e}();exports.WorkbookCell=WorkbookCell;var WorkbookFrozenPane=function(){function e(){}return e.prototype._serialize=function(){return null!=this.columns&&!isNaN(this.columns)&&0!==this.columns||null!=this.rows&&!isNaN(this.rows)&&0!==this.rows?{columns:this.columns,rows:this.rows}:null},e.prototype._deserialize=function(e){this.columns=e.columns,this.rows=e.rows},e}();exports.WorkbookFrozenPane=WorkbookFrozenPane;var WorkbookStyle=function(){function e(){}return e.prototype._serialize=function(){var e;return this._checkEmptyWorkbookStyle()?null:(e={},this.basedOn&&(e.basedOn=this.basedOn._serialize()),this.fill&&(e.fill=this.fill._serialize()),this.font&&(e.font=this.font._serialize()),this.borders&&(e.borders=this.borders._serialize()),this.format&&(e.format=this.format),null!=this.hAlign&&(e.hAlign=wijmo_1.asEnum(this.hAlign,HAlign,!1)),null!=this.vAlign&&(e.vAlign=wijmo_1.asEnum(this.vAlign,VAlign,!1)),null==this.indent||isNaN(this.indent)||(e.indent=this.indent),this.wordWrap&&(e.wordWrap=this.wordWrap),e)},e.prototype._deserialize=function(t){var l,r,o,s;t.basedOn&&((l=new e)._deserialize(t.basedOn),this.basedOn=l),t.fill&&((r=new WorkbookFill)._deserialize(t.fill),this.fill=r),t.font&&((o=new WorkbookFont)._deserialize(t.font),this.font=o),t.borders&&((s=new WorkbookBorder)._deserialize(t.borders),this.borders=s),this.format=t.format,null!=t.hAlign&&(this.hAlign=wijmo_1.asEnum(t.hAlign,HAlign,!1)),null!=t.vAlign&&(this.vAlign=wijmo_1.asEnum(t.vAlign,VAlign,!1)),null==t.indent||isNaN(t.indent)||(this.indent=t.indent),t.wordWrap&&(this.wordWrap=t.wordWrap)},e.prototype._checkEmptyWorkbookStyle=function(){return null==this.basedOn&&null==this.fill&&null==this.font&&null==this.borders&&(null==this.format||""===this.format)&&null==this.hAlign&&null==this.vAlign&&null==this.wordWrap},e}();exports.WorkbookStyle=WorkbookStyle;var WorkbookFont=function(){function e(){}return e.prototype._serialize=function(){var e;return this._checkEmptyWorkbookFont()?null:(e={},null!=this.bold&&(e.bold=this.bold),null!=this.italic&&(e.italic=this.italic),null!=this.underline&&(e.underline=this.underline),this.color&&(e.color=this.color),this.family&&(e.family=this.family),null==this.size||isNaN(this.size)||(e.size=this.size),e)},e.prototype._deserialize=function(e){this.bold=e.bold,null!=e.color&&(this.color=e.color),this.family=e.family,this.italic=e.italic,this.size=e.size,this.underline=e.underline},e.prototype._checkEmptyWorkbookFont=function(){return null==this.bold&&null==this.italic&&null==this.underline&&(null==this.color||""===this.color)&&(null==this.family||""===this.family)&&(null==this.size||isNaN(this.size))},e}();exports.WorkbookFont=WorkbookFont;var WorkbookFill=function(){function e(){}return e.prototype._serialize=function(){return this.color?{color:this.color}:null},e.prototype._deserialize=function(e){null!=e.color&&(this.color=e.color)},e}();exports.WorkbookFill=WorkbookFill;var WorkbookBorder=function(){function e(){}return e.prototype._serialize=function(){var e;return this._checkEmptyWorkbookBorder()?null:(e={},this.top&&(e.top=this.top._serialize()),this.bottom&&(e.bottom=this.bottom._serialize()),this.left&&(e.left=this.left._serialize()),this.right&&(e.right=this.right._serialize()),this.diagonal&&(e.diagonal=this.diagonal._serialize()),e)},e.prototype._deserialize=function(e){var t,l,r,o,s;e.top&&((t=new WorkbookBorderSetting)._deserialize(e.top),this.top=t),e.bottom&&((l=new WorkbookBorderSetting)._deserialize(e.bottom),this.bottom=l),e.left&&((r=new WorkbookBorderSetting)._deserialize(e.left),this.left=r),e.right&&((o=new WorkbookBorderSetting)._deserialize(e.right),this.right=o),e.diagonal&&((s=new WorkbookBorderSetting)._deserialize(e.diagonal),this.diagonal=s)},e.prototype._checkEmptyWorkbookBorder=function(){return null==this.top&&null==this.bottom&&null==this.left&&null==this.right&&null==this.diagonal},e}();exports.WorkbookBorder=WorkbookBorder;var WorkbookBorderSetting=function(){function e(){}return e.prototype._serialize=function(){var e;return null!=this.color&&""!==this.color||null!=this.style?(e={},this.color&&(e.color=this.color),null!=this.style&&(e.style=wijmo_1.asEnum(this.style,BorderStyle,!1)),e):null},e.prototype._deserialize=function(e){null!=e.color&&(this.color=e.color,null!=e.style&&(this.style=wijmo_1.asEnum(e.style,BorderStyle,!1)))},e}();exports.WorkbookBorderSetting=WorkbookBorderSetting;var DefinedName=function(){function e(){}return e.prototype._serialize=function(){var e;return null==this.name?null:(e={name:this.name,value:this.value},null!=this.sheetName&&(e.sheetName=this.sheetName),e)},e.prototype._deserialize=function(e){this.name=e.name,this.value=e.value,this.sheetName=e.sheetName},e}();exports.DefinedName=DefinedName;var WorkbookTable=function(){function e(){}return Object.defineProperty(e.prototype,"columns",{get:function(){return null==this._columns&&(this._columns=[]),this._columns},enumerable:!0,configurable:!0}),e.prototype._serialize=function(){var e,t;return null==this.name||null==this.range||null==this._columns?null:(null!=this.style&&(t=this.style._serialize()),(e={name:this.name,range:this.range,showHeaderRow:this.showHeaderRow,showTotalRow:this.showTotalRow,style:t,showBandedColumns:this.showBandedColumns,showBandedRows:this.showBandedRows,alterFirstColumn:this.alterFirstColumn,alterLastColumn:this.alterLastColumn,columns:[]}).columns=this._serializeTableColumns(),e)},e.prototype._deserialize=function(e){var t;this.name=e.name,this.range=e.range,this.showHeaderRow=e.showHeaderRow,this.showTotalRow=e.showTotalRow,null!=e.style&&((t=new WorkbookTableStyle)._deserialize(e.style),this.style=t),this.showBandedColumns=e.showBandedColumns,this.showBandedRows=e.showBandedRows,this.alterFirstColumn=e.alterFirstColumn,this.alterLastColumn=e.alterLastColumn,this._deserializeTableColumns(e.columns)},e.prototype._serializeTableColumns=function(){var e,t,l=[];for(t=0;t<this._columns.length;t++)(e=this._columns[t])&&(l[t]=e._serialize());return l},e.prototype._deserializeTableColumns=function(e){var t,l,r;for(wijmo_1.assert(null!=e,"table Columns should not be null."),this._columns=[],r=0;r<e.length;r++)(l=e[r])&&((t=new WorkbookTableColumn)._deserialize(l),this._columns[r]=t)},e}();exports.WorkbookTable=WorkbookTable;var WorkbookTableColumn=function(){function e(){}return e.prototype._serialize=function(){return null==this.name?null:{name:this.name,totalRowLabel:this.totalRowLabel,totalRowFunction:this.totalRowFunction,showFilterButton:this.showFilterButton}},e.prototype._deserialize=function(e){this.name=e.name,this.totalRowLabel=e.totalRowLabel,this.totalRowFunction=e.totalRowFunction,this.showFilterButton=e.showFilterButton},e}();exports.WorkbookTableColumn=WorkbookTableColumn;var WorkbookTableStyle=function(){function e(){}return e.prototype._serialize=function(){var e;return this._checkEmptyWorkbookTableStyle()?null:(e={name:this.name},this.wholeTableStyle&&(e.wholeTableStyle=this.wholeTableStyle._serialize()),this.firstBandedColumnStyle&&(e.firstBandedColumnStyle=this.firstBandedColumnStyle._serialize()),this.firstBandedRowStyle&&(e.firstBandedRowStyle=this.firstBandedRowStyle._serialize()),this.secondBandedColumnStyle&&(e.secondBandedColumnStyle=this.secondBandedColumnStyle._serialize()),this.secondBandedRowStyle&&(e.secondBandedRowStyle=this.secondBandedRowStyle._serialize()),this.headerRowStyle&&(e.headerRowStyle=this.headerRowStyle._serialize()),this.totalRowStyle&&(e.totalRowStyle=this.totalRowStyle._serialize()),this.firstColumnStyle&&(e.firstColumnStyle=this.firstColumnStyle._serialize()),this.lastColumnStyle&&(e.lastColumnStyle=this.lastColumnStyle._serialize()),this.firstHeaderCellStyle&&(e.firstHeaderCellStyle=this.firstHeaderCellStyle._serialize()),this.lastHeaderCellStyle&&(e.lastHeaderCellStyle=this.lastHeaderCellStyle._serialize()),this.firstTotalCellStyle&&(e.firstTotalCellStyle=this.firstTotalCellStyle._serialize()),this.lastTotalCellStyle&&(e.lastTotalCellStyle=this.lastTotalCellStyle._serialize()),e)},e.prototype._deserialize=function(e){this.name=e.name,e.wholeTableStyle&&(this.wholeTableStyle=new WorkbookTableCommonStyle,this.wholeTableStyle._deserialize(e.wholeTableStyle)),e.firstBandedColumnStyle&&(this.firstBandedColumnStyle=new WorkbookTableBandedStyle,this.firstBandedColumnStyle._deserialize(e.firstBandedColumnStyle)),e.firstBandedRowStyle&&(this.firstBandedRowStyle=new WorkbookTableBandedStyle,this.firstBandedRowStyle._deserialize(e.firstBandedRowStyle)),e.secondBandedColumnStyle&&(this.secondBandedColumnStyle=new WorkbookTableBandedStyle,this.secondBandedColumnStyle._deserialize(e.secondBandedColumnStyle)),e.secondBandedRowStyle&&(this.secondBandedRowStyle=new WorkbookTableBandedStyle,this.secondBandedRowStyle._deserialize(e.secondBandedRowStyle)),e.headerRowStyle&&(this.headerRowStyle=new WorkbookTableCommonStyle,this.headerRowStyle._deserialize(e.headerRowStyle)),e.totalRowStyle&&(this.totalRowStyle=new WorkbookTableCommonStyle,this.totalRowStyle._deserialize(e.totalRowStyle)),e.firstColumnStyle&&(this.firstColumnStyle=new WorkbookTableCommonStyle,this.firstColumnStyle._deserialize(e.firstColumnStyle)),e.lastColumnStyle&&(this.lastColumnStyle=new WorkbookTableCommonStyle,this.lastColumnStyle._deserialize(e.lastColumnStyle)),e.firstHeaderCellStyle&&(this.firstHeaderCellStyle=new WorkbookTableCommonStyle,this.firstHeaderCellStyle._deserialize(e.firstHeaderCellStyle)),e.lastHeaderCellStyle&&(this.lastHeaderCellStyle=new WorkbookTableCommonStyle,this.lastHeaderCellStyle._deserialize(e.lastHeaderCellStyle)),e.firstTotalCellStyle&&(this.firstTotalCellStyle=new WorkbookTableCommonStyle,this.firstTotalCellStyle._deserialize(e.firstTotalCellStyle)),e.lastTotalCellStyle&&(this.lastTotalCellStyle=new WorkbookTableCommonStyle,this.lastTotalCellStyle._deserialize(e.lastTotalCellStyle))},e.prototype._checkEmptyWorkbookTableStyle=function(){return null==this.name||null==this.wholeTableStyle&&null==this.firstBandedColumnStyle&&null==this.firstBandedRowStyle&&null==this.secondBandedColumnStyle&&null==this.secondBandedRowStyle&&null==this.headerRowStyle&&null==this.totalRowStyle&&null==this.firstColumnStyle&&null==this.lastColumnStyle&&null==this.firstHeaderCellStyle&&null==this.lastHeaderCellStyle&&null==this.firstTotalCellStyle&&null==this.lastTotalCellStyle},e}();exports.WorkbookTableStyle=WorkbookTableStyle;var WorkbookTableCommonStyle=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype._deserialize=function(t){var l;e.prototype._deserialize.call(this,t),t.borders&&((l=new WorkbookTableBorder)._deserialize(t.borders),this.borders=l)},t}(WorkbookStyle);exports.WorkbookTableCommonStyle=WorkbookTableCommonStyle;var WorkbookTableBandedStyle=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype._serialize=function(){var t;return(t=e.prototype._serialize.call(this)).size=this.size,t},t.prototype._deserialize=function(t){e.prototype._deserialize.call(this,t),null!=t.size&&(this.size=t.size)},t}(WorkbookTableCommonStyle);exports.WorkbookTableBandedStyle=WorkbookTableBandedStyle;var WorkbookTableBorder=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype._serialize=function(){var t;return null!=(t=e.prototype._serialize.call(this))||this.vertical&&this.horizontal||(t={}),this.vertical&&(t.vertical=this.vertical._serialize()),this.horizontal&&(t.horizontal=this.horizontal._serialize()),t},t.prototype._deserialize=function(t){var l,r;e.prototype._deserialize.call(this,t),t.vertical&&((l=new WorkbookBorderSetting)._deserialize(t.vertical),this.vertical=l),t.horizontal&&((r=new WorkbookBorderSetting)._deserialize(t.horizontal),this.horizontal=r)},t}(WorkbookBorder);exports.WorkbookTableBorder=WorkbookTableBorder;var HAlign,VAlign,BorderStyle,WorkbookTextRun=function(){function e(){}return e.prototype._serialize=function(){var e={text:this.text};return this.font&&(e.font=this.font._serialize()),e},e.prototype._deserialize=function(e){e.font&&(this.font=new WorkbookFont,this.font._deserialize(e.font)),this.text=e.text},e}();exports.WorkbookTextRun=WorkbookTextRun,function(e){e[e.General=0]="General",e[e.Left=1]="Left",e[e.Center=2]="Center",e[e.Right=3]="Right",e[e.Fill=4]="Fill",e[e.Justify=5]="Justify"}(HAlign=exports.HAlign||(exports.HAlign={})),function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Bottom=2]="Bottom",e[e.Justify=3]="Justify"}(VAlign=exports.VAlign||(exports.VAlign={})),function(e){e[e.None=0]="None",e[e.Thin=1]="Thin",e[e.Medium=2]="Medium",e[e.Dashed=3]="Dashed",e[e.Dotted=4]="Dotted",e[e.Thick=5]="Thick",e[e.Double=6]="Double",e[e.Hair=7]="Hair",e[e.MediumDashed=8]="MediumDashed",e[e.ThinDashDotted=9]="ThinDashDotted",e[e.MediumDashDotted=10]="MediumDashDotted",e[e.ThinDashDotDotted=11]="ThinDashDotDotted",e[e.MediumDashDotDotted=12]="MediumDashDotDotted",e[e.SlantedMediumDashDotted=13]="SlantedMediumDashDotted"}(BorderStyle=exports.BorderStyle||(exports.BorderStyle={}));var JSZip=JSZipRef;function useJSZip(e){JSZip=e}exports.useJSZip=useJSZip;var _xlsx=function(){function e(){}return e.load=function(e){var t=new JSZip;wijmo_1.assert(null==t.loadAsync,"Please use JSZip 2.5 to load excel files synchronously.");var l,r=new _JsZipWrapper(t);return this._loadImpl(r,e).then(function(e){return l=e}),l},e.loadAsync=function(e){var t=new JSZip;return wijmo_1.assert(null!=t.loadAsync,"Please use JSZip 3.0 to load excel files asynchrounously."),this._loadImpl(t,e)},e.save=function(e){var t=Date.now(),l=this._saveWorkbookToZip(e);t=Date.now()-t;var r="";r=this._macroEnabled?"application/vnd.ms-excel.sheet.macroEnabled.12;":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;";var o=Date.now(),s=l.generate({compression:"DEFLATE"});return{base64:s,zipTime:Date.now()-o,processTime:t,href:function(){return"data:"+r+"base64,"+s}}},e.saveAsync=function(e,t){var l=this._saveWorkbookToZip(e,!0).generateAsync({type:"base64",compression:"DEFLATE"});return t&&l.catch(t),l},e._loadImpl=function(e,t){var l,r=this,o=Date.now(),s={sheets:[]},i=e.loadAsync(t,{base64:!0}).then(function(e){return l=e});t=null;var n=i.constructor;return(i=(i=(i=(i=(i=(i=i.then(function(){var e=l.file("xl/theme/theme1.xml");if(e)return e.async("string").then(function(e){r._getTheme(e),s.colorThemes=r._colorThemes}).then(function(){var e=n.resolve();return e=r._getZipStyle(l,e,s),e=r._getZipSharedString(l,e,s)});var t=n.resolve();return t=r._getZipStyle(l,t,s),t=r._getZipSharedString(l,t,s)})).then(function(){var e=l.file("xl/workbook.xml");if(e)return e.async("string").then(function(e){r._getWorkbook(e,s)})})).then(function(){r._tables=null;var e=n.resolve();return l.folder("xl/tables").forEach(function(t,l){null==r._tables&&(r._tables=[]),e=e.then(function(){return l.async("string").then(function(e){var t=r._getTable(e);t.fileName=l.name.substring(l.name.lastIndexOf("/")+1),r._tables.push(t)})})}),e})).then(function(){var e=l.file("docProps/core.xml");if(e)return e.async("string").then(function(e){r._getCoreSetting(e,s)})})).then(function(){var e=l.file("xl/vbaProject.bin");if(e)return e.async("uint8array").then(function(e){null==s.reservedContent&&(s.reservedContent={}),s.reservedContent.macros=e})})).then(function(){var e=n.resolve();return l.folder("xl/worksheets").forEach(function(t,o){if(t&&-1===t.indexOf("/")){var i=r._getSheetIndex(o.name);isNaN(i)||(e=e.then(function(){return o.async("string").then(function(e){if(r._getSheet(e,i-1,s),null!=s.sheets[i-1].tableRIds||null!=s.sheets[i-1].hyperlinkRIds){var t=l.file("xl/worksheets/_rels/sheet"+i+".xml.rels");if(t)return t.async("string").then(function(e){for(var t=e.split("<Relationship "),l=t.length;--l;){var o=t[l],n=r._getAttr(o,"Id");s.sheets[i-1].tableRIds&&-1!==s.sheets[i-1].tableRIds.indexOf(n)?(null==s.sheets[i-1].tables&&(s.sheets[i-1].tables=[]),s.sheets[i-1].tables.push(r._getSheetRelatedTable(o))):s.sheets[i-1].hyperlinkRIds&&r._getSheetRelatedHyperlink(o,n,s.sheets[i-1])}})}})}))}}),e})).then(function(){return s.processTime=Date.now()-o,l=null,s})},e._getZipStyle=function(e,t,l){var r=this,o=e.file("xl/styles.xml");return o&&(t=t.then(function(){return o.async("string").then(function(e){r._getStyle(e),l.styles=r._styles,null!=r._tableStyles&&(l.tableStyles=r._tableStyles)})})),t},e._getZipSharedString=function(e,t,l){var r=this,o=e.file("xl/sharedStrings.xml");return o&&t.then(function(){return o.async("string").then(function(e){r._getSharedString(e)})}),t},e._saveWorkbookToZip=function(e,t){void 0===t&&(t=!1);Date.now();var l=new JSZip;t?wijmo_1.assert(null!=l.generateAsync,"Please use JSZip 3.0 to save excel files asynchrounously."):wijmo_1.assert(null==l.generateAsync,"Please use JSZip 2.5 to save excel files synchronously."),l.folder("_rels").file(".rels",this._xmlDescription+this._generateRelsDoc());var r=l.folder("docProps"),o=l.folder("xl");this._colorThemes=e.colorThemes,o.folder("theme").file("theme1.xml",this._xmlDescription+this._generateThemeDoc()),this._macroEnabled=!(!e.reservedContent||!e.reservedContent.macros),this._macroEnabled&&o.file("vbaProject.bin",e.reservedContent.macros);var s=o.folder("worksheets");r.file("core.xml",this._xmlDescription+this._generateCoreDoc(e)),this._sharedStrings=[[],0],this._styles=new Array(1),this._borders=new Array(1),this._fonts=new Array(1),this._fills=new Array(2),this._tableStyles=new Array,this._dxfs=new Array,this._contentTypes=[],this._props=[],this._xlRels=[],this._worksheets=[],this._tables=[],this._tableStyles=[];for(var i,n=e.sheets.length;n--;)if(this._generateWorkSheet(n,e,s),e.sheets[n]&&(e.sheets[n].tables&&e.sheets[n].tables.length>0||e.sheets[n].externalLinks&&e.sheets[n].externalLinks.length>0)){var a=0,h='<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';if(e.sheets[n].externalLinks&&e.sheets[n].externalLinks.length>0&&(h+=this._generateHyperlinkRel(e.sheets[n].externalLinks),a=e.sheets[n].externalLinks.length),e.sheets[n].tables&&e.sheets[n].tables.length>0){null==i&&(i=o.folder("tables"));for(var u=0;u<e.sheets[n].tables.length;u++){var c=e.sheets[n].tables[u];this._generateTable(c,i),h+='<Relationship Target="../tables/'+c.fileName+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/table" Id="rId'+(u+1+a)+'"/>'}}h+="</Relationships>",s.folder("_rels").file("sheet"+(n+1)+".xml.rels",this._xmlDescription+h)}o.file("styles.xml",this._xmlDescription+this._generateStyleDoc()),l.file("[Content_Types].xml",this._xmlDescription+this._generateContentTypesDoc()),r.file("app.xml",this._xmlDescription+this._generateAppDoc(e)),o.folder("_rels").file("workbook.xml.rels",this._xmlDescription+this._generateWorkbookRels());var f=this._xmlDescription+this._generateSharedStringsDoc();return this._sharedStrings=[[],0],o.file("sharedStrings.xml",f),f=null,o.file("workbook.xml",this._xmlDescription+this._generateWorkbook(e)),l},e._getSharedString=function(e){var t,l,r,o,s,i,n,a,h=e.split(/<si.*?>/g),u=h.length;for(this._sharedStrings=[];--u;)for(t=1,o=!1,h[u].search(/<r>/gi)>-1?(o=!0,l=h[u].split(/<r>/g)):(h[u]=h[u].substring(0,h[u].indexOf("</t>")),l=h[u].split(/<t.*?>/g));t<l.length;)i=null,o?(-1!==l[t].indexOf("<rPr>")&&(i=this._getTextRunFont(l[t])),(r=l[t].match(/(<t.*?>)(.*)/))&&3===r.length&&null!=r[2]&&-1!==(a=(n=r[2]).indexOf("</t>"))&&(n=n.substring(0,a)),s={font:i,text:Workbook._unescapeXML(n)},null==this._sharedStrings[u-1]?this._sharedStrings[u-1]=[s]:this._sharedStrings[u-1].push(s)):this._sharedStrings[u-1]=Workbook._unescapeXML(l[t]),t++},e._getInlineString=function(e){for(var t=e.split("<t>"),l=t.length,r="";--l;)r+=t[l].substring(0,t[l].indexOf("</t>"));return r},e._getCoreSetting=function(e,t){var l,r;(r=e.indexOf("<dc:creator>"))>=0&&(l=e.substr(r+12),t.creator=l.substring(0,l.indexOf("</dc:creator>"))),(r=e.indexOf("<cp:lastModifiedBy>"))>=0&&(l=e.substr(r+19),t.lastModifiedBy=l.substring(0,l.indexOf("</cp:lastModifiedBy>"))),(r=e.indexOf('<dcterms:created xsi:type="dcterms:W3CDTF">'))>=0&&(l=e.substr(r+43),t.created=new Date(l.substring(0,l.indexOf("</dcterms:created>")))),(r=e.indexOf('<dcterms:modified xsi:type="dcterms:W3CDTF">'))>=0&&(l=e.substr(r+44),t.modified=new Date(l.substring(0,l.indexOf("</dcterms:modified>"))))},e._getWorkbook=function(e,t){var l,r,o,s,i,n,a,h,u=e.substring(e.indexOf("<bookViews>"),e.indexOf("</bookViews>")),c="",f=e.indexOf("<definedNames>");for(u&&(c=this._getAttr(u,"activeTab")),t.activeWorksheet=+c,n=(i=e.split("<sheet ")).length;--n;)a=this._getAttr(i[n],"name"),h="hidden"!==this._getAttr(i[n],"state"),t.sheets.unshift({name:a,visible:h,columns:[],rows:[]});if(f>-1)for(t.definedNames=[],n=(i=e.substring(f,e.indexOf("</definedNames>")).split("<definedName ")).length;--n;)a=this._getAttr(i[n],"name"),(r=i[n].match(/.*>.+(?=<\/definedName>)/))&&(r=r[0].replace(/(.*>)(.+)/,"$2"),r=isNaN(+r)?r:+r),l={name:a,value:r},""!==(o=this._getAttr(i[n],"localSheetId"))&&(s=t.sheets[+o])&&(l.sheetName=s.name),t.definedNames.unshift(l)},e._getTheme=function(e){e=e.substring(e.indexOf("<a:clrScheme"),e.indexOf("</a:clrScheme>")),this._colorThemes=this._defaultColorThemes.slice(),this._colorThemes[0]=this._getAttr(e.substring(e.indexOf("a:lt1"),e.indexOf("</a:lt1>")),"lastClr")||this._getAttr(e.substring(e.indexOf("a:lt1"),e.indexOf("</a:lt1>")),"val"),this._colorThemes[1]=this._getAttr(e.substring(e.indexOf("a:dk1"),e.indexOf("</a:dk1>")),"lastClr")||this._getAttr(e.substring(e.indexOf("a:dk1"),e.indexOf("</a:dk1>")),"val"),this._colorThemes[2]=this._getAttr(e.substring(e.indexOf("a:lt2"),e.indexOf("</a:lt2>")),"val"),this._colorThemes[3]=this._getAttr(e.substring(e.indexOf("a:dk2"),e.indexOf("</a:dk2>")),"val");for(var t=e.substring(e.indexOf("<a:accent1"),e.indexOf("</a:accent6>")).split("<a:accent"),l=t.length;--l;)this._colorThemes[l+3]=this._getAttr(t[l],"val")},e._getStyle=function(e){var t,l,r,o,s,i=[],n=[],a=[],h=this._numFmts.slice();if(this._styles=[],(r=e.indexOf("<numFmts"))>=0){var u=e.substring(r+8,e.indexOf("</numFmts>")).split("<numFmt");for(t=u.length;--t;)l=u[t],h[+this._getAttr(l,"numFmtId")]=this._getAttr(l,"formatCode")}if((r=e.indexOf("<fonts"))>=0){var c=e.substring(r,e.indexOf("</fonts>")).split("<font>");for(t=c.length;--t;)l=c[t],o=this._getChildNodeValue(l,"sz"),i[t-1]={bold:l.indexOf("<b/>")>=0,italic:l.indexOf("<i/>")>=0,underline:l.indexOf("<u/>")>=0,size:Math.round(o?96*+o/72:14),family:this._getChildNodeValue(l,"name"),color:this._getColor(l,!1)},o=null}if((r=e.indexOf("<fills"))>=0){var f=e.substring(r,e.indexOf("</fills>")).split("<fill>");for(t=f.length;--t;)n[t-1]=this._getColor(f[t],!0)}if((r=e.indexOf("<borders"))>=0){var d=e.substring(r,e.indexOf("</borders>")).split("<border>");for(t=d.length;--t;)l=d[t],a[t-1]={left:this._getEdgeBorder(l,"left"),right:this._getEdgeBorder(l,"right"),top:this._getEdgeBorder(l,"top"),bottom:this._getEdgeBorder(l,"bottom")}}if((r=e.indexOf("<cellXfs"))>=0){var m,p,g,_,y,b,v=e.substring(r,e.indexOf("</cellXfs>")).split("<xf");for(t=v.length;--t;)l=v[t],p=(m=h[g=+this._getAttr(l,"numFmtId")])?/[hsmy\:]/i.test(m)?"date":m.indexOf("0")>-1?"number":"@"===m?"string":"unknown":"unknown",_=(g=+this._getAttr(l,"fontId"))>0?i[g]:null,y=(g=+this._getAttr(l,"fillId"))>1?n[g]:null,b=(g=+this._getAttr(l,"borderId"))>0?a[g]:null,r=l.indexOf("<alignment"),s=+this._getAttr(l,"quotePrefix"),this._styles.unshift({formatCode:m,type:p,font:_,fillColor:y,borders:b,hAlign:r>=0?Workbook._parseStringToHAlign(this._getAttr(l,"horizontal")):null,vAlign:r>=0?Workbook._parseStringToVAlign(this._getAttr(l,"vertical")):null,wordWrap:r>=0?"1"===this._getAttr(l,"wrapText"):null,quotePrefix:1===s})}if(e.indexOf("<tableStyle ")>-1){this._tableStyles=[];var S=e.substring(e.indexOf("<tableStyles "),e.indexOf("</tableStyles>")),w=e.substring(e.indexOf("<dxfs "),e.indexOf("</dxfs>"));this._getTableStyles(S,w.split("<dxf>"))}},e._getEdgeBorder=function(e,t){var l,r,o,s,i=e.indexOf("<"+t),n=e.indexOf("</"+t+">");if(i>=0){r=e.substring(i),r=n>=0?r.substring(0,n):r.substring(0,r.indexOf("/>"));var a=this._getAttr(r,"style");a&&(o=Workbook._parseStringToBorderType(a),s=this._getColor(r,!1),o===BorderStyle.Thin&&s&&"#c6c6c6"===s.toLowerCase()||((l={}).style=o,l.color=s))}return l},e._getSheet=function(e,t,l){var r,o=[];if(e.indexOf("<mergeCells")>-1)for(var s=e.substring(e.indexOf("<mergeCells"),e.indexOf("</mergeCells>")).split("<mergeCell "),i=s.length;--i;)2===(r=this._getAttr(s[i],"ref").split(":")).length&&o.unshift({topRow:+r[0].match(/\d*/g).join("")-1,leftCol:this._alphaNum(r[0].match(/[a-zA-Z]*/g)[0]),bottomRow:+r[1].match(/\d*/g).join("")-1,rightCol:this._alphaNum(r[1].match(/[a-zA-Z]*/g)[0])});this._getsBaseSharedFormulas(e);var n=e.split("<row "),a=l.sheets[t];if(n[0].indexOf("<dimension")>=0){var h=this._getAttr(n[0].substr(n[0].indexOf("<dimension")),"ref");h&&(h=h.substr(h.indexOf(":")+1),a.maxCol=this._alphaNum(h.match(/[a-zA-Z]*/g)[0])+1,a.maxRow=+h.match(/\d*/g).join(""))}var u=e.indexOf("<tableParts");if(u>-1){var c=e.substring(u,e.indexOf("</tableParts>")).split("<tablePart "),f=c.length;for(a.tableRIds=[];--f;)a.tableRIds.unshift(this._getAttr(c[f],"r:id"))}if(n.length>0&&n[0].indexOf("<pane")>-1&&"frozen"===this._getAttr(n[0].substr(n[0].indexOf("<pane")),"state")){var d=this._getAttr(n[0].substr(n[0].indexOf("<pane")),"ySplit"),m=this._getAttr(n[0].substr(n[0].indexOf("<pane")),"xSplit");a.frozenPane={rows:d?+d:NaN,columns:m?+m:NaN}}a.summaryBelow="0"!==this._getAttr(n[0],"summaryBelow"),i=n.length,n.length<=1?(a.maxCol=20,a.maxRow=200):a.maxRow<i-1&&(a.maxRow=i-1);for(var p,g=null,_=null;--i;){var y=a.rows[+this._getAttr(n[i],"r")-1]={visible:!0,groupLevel:NaN,cells:[]};if(n[i].substring(0,n[i].indexOf(">")).indexOf("hidden")>-1&&"1"===this._getAttr(n[i],"hidden")&&(y.visible=!1),"1"===this._getAttr(n[i],"customHeight")){var b=+this._getAttr(n[i].substring(0,n[i].indexOf(">")).replace("customHeight",""),"ht");y.height=96*b/72}g=null,_=null,"1"===this._getAttr(n[i],"customFormat")&&(g=(_=this._styles[+this._getAttr(n[i].substring(n[i].indexOf(" s=")),"s")]||{type:"General",formatCode:null}).font||_.fillColor||_.hAlign||_.vAlign||_.wordWrap||_.borders||_.formatCode&&"General"!==_.formatCode?{format:_.formatCode&&"General"!==_.formatCode?_.formatCode:null,font:_.font,fill:{color:_.fillColor},borders:_.borders,hAlign:_.hAlign,vAlign:_.vAlign,wordWrap:_.wordWrap}:null),y.style=g;var v=this._getAttr(n[i],"outlineLevel");y.groupLevel=v&&""!==v?+v:NaN,y.collapsed="1"===this._getAttr(n[i],"collapsed");var S=n[i].split("<c "),w=S.length;for((null==a.maxCol||a.maxCol<w-1)&&(a.maxCol=w-1);--w;){var x=S[w];g=(_=this._styles[+this._getAttr(x,"s")]||{type:"General",formatCode:null}).font||_.fillColor||_.hAlign||_.vAlign||_.wordWrap||_.borders||_.formatCode&&"General"!==_.formatCode?{format:_.formatCode&&"General"!==_.formatCode?_.formatCode:null,font:_.font,fill:{color:_.fillColor},borders:_.borders,hAlign:_.hAlign,vAlign:_.vAlign,wordWrap:_.wordWrap}:null;var k=this._getAttr(x.substring(0,x.indexOf(">")),"t")||_.type,C=null,T="inlineStr"===k||x.indexOf("<is>")>=0;T?C=this._getInlineString(x):x.indexOf("<v>")>-1&&(C=x.substring(x.indexOf("<v>")+3,x.indexOf("</v>")));var F=null,A=null,z=null;x.indexOf("<f")>-1&&(x.indexOf("</f>")>-1?(F=x.match(/<f.*>.+(?=<\/f>)/))&&(F=F[0].replace(/(\<f.*>)(.+)/,"$2")):(A=this._getAttr(x,"si"))&&(z=this._getAttr(x,"r"),F=this._getSharedFormula(A,z))),null!=F&&(F=F.replace(/\[\#This Row\]\s*,\s*/gi,"@")),"str"===k||"e"===k||T||(C=C?+C:""),p=this._alphaNum(this._getAttr(x,"r").match(/[a-zA-Z]*/g)[0]);var R=null;switch(k){case"s":null!=(C=this._sharedStrings[C])&&(wijmo_1.isString(C)?_&&_.quotePrefix&&"'"!==C[0]&&(C="'"+C):(R=C.slice(),C=this._getTextOfTextRuns(R)));break;case"b":C=1===C;break;case"date":C=C?this._convertDate(C):""}wijmo_1.isNumber(C)&&(null==g&&(g={format:""}),wijmo_1.isInt(C)?g.format=g.format||"#,##0":g.format=g.format||"#,##0.00"),y.cells[p]={value:C,textRuns:R,isDate:"date"===k,formula:Workbook._unescapeXML(F),style:g}}}var W=[],O=[];if(g=null,_=null,n.length>0&&n[0].indexOf("<cols>")>-1)for(var B=(W=n[0].substring(n[0].indexOf("<cols>")+6,n[0].indexOf("</cols>")).split("<col ")).length-1;B>0;B--){var D=this._parseCharWidthToPixel(+this._getAttr(W[B],"width"));for(_=null,W[B].indexOf("style")>-1&&(_=this._styles[+this._getAttr(W[B],"style")]||{type:"General",formatCode:null}),g=null,_&&(_.font||_.fillColor||_.hAlign||_.vAlign||_.wordWrap||_.borders||_.formatCode&&"General"!==_.formatCode)&&(g={format:_.formatCode&&"General"!==_.formatCode?_.formatCode:null,font:_.font,fill:{color:_.fillColor},borders:_.borders,hAlign:_.hAlign,vAlign:_.vAlign,wordWrap:_.wordWrap}),p=+this._getAttr(W[B],"min")-1;p<+this._getAttr(W[B],"max")&&p<a.maxCol;p++)O[p]={visible:"1"!==this._getAttr(W[B],"hidden"),autoWidth:"1"===this._getAttr(W[B],"bestFit"),width:D,style:g}}a.columns=O;var N,P=e.indexOf("<hyperlinks");if(P>-1)for(var M=e.substring(P,e.indexOf("</hyperlinks>")).split("<hyperlink "),j=M.length;--j;)this._getHyperlink(a,M[j]);if(a.frozenPane){if(!isNaN(a.frozenPane.rows))for(i=0;i<a.rows.length&&i<a.frozenPane.rows;i++)a.rows[i]&&!a.rows[i].visible&&a.frozenPane.rows++;if(!isNaN(a.frozenPane.columns))for(i=0;i<O.length&&i<a.frozenPane.columns;i++)O[i]&&!O[i].visible&&a.frozenPane.columns++}for(w=0;w<o.length;w++)N=o[w],a.rows[N.topRow]||(a.rows[N.topRow]={cells:[]}),a.rows[N.topRow].cells||(a.rows[N.topRow].cells=[]),a.rows[N.topRow].cells[N.leftCol]||(a.rows[N.topRow].cells[N.leftCol]={}),a.rows[N.topRow].cells[N.leftCol].rowSpan=N.bottomRow<a.maxRow?N.bottomRow-N.topRow+1:200,a.rows[N.topRow].cells[N.leftCol].colSpan=N.rightCol<a.maxCol?N.rightCol-N.leftCol+1:20},e._getTable=function(e){var t={};t.name=this._getAttr(e,"name"),t.range=this._getAttr(e,"ref");var l=this._getAttr(e,"headerRowCount");t.showHeaderRow=""==l||"1"===l;var r=this._getAttr(e,"totalsRowCount");t.showTotalRow="1"===r;var o=e.substring(e.indexOf("<tableStyleInfo")),s=this._getAttr(o,"name");this._isBuiltInStyleName(s)?t.style={name:s}:t.style=this._getTableStyleByName(s),t.showBandedColumns="1"===this._getAttr(o,"showColumnStripes"),t.showBandedRows="1"===this._getAttr(o,"showRowStripes"),t.alterFirstColumn="1"===this._getAttr(o,"showFirstColumn"),t.alterLastColumn="1"===this._getAttr(o,"showLastColumn");var i=e.split("<tableColumn ");t.columns=[];for(var n=1;n<i.length;n++){var a=i[n];t.columns.push(this._getTableColumn(a))}if(e.indexOf("filterColumn")>-1)for(var h=e.substring(e.indexOf("<autoFilter"),e.indexOf("</autoFilter>")).split("<filterColumn"),u=1;u<h.length;u++){var c=h[u],f=+this._getAttr(c,"colId");t.columns[f].showFilterButton="1"!==this._getAttr(c,"hiddenButton")}return t},e._getTableColumn=function(e){var t={};t.name=this._getAttr(e,"name");var l=this._getAttr(e,"totalsRowLabel");if(l)t.totalRowLabel=l;else{var r=this._getAttr(e,"totalsRowFunction");"custom"===r&&(r=e.substring(e.indexOf("<totalsRowFormula>")+2+"totalsRowFormula".length,e.indexOf("</totalsRowFormula>"))),t.totalRowFunction=r}return t},e._getSheetRelatedTable=function(e){var t=this._getAttr(e,"Target");t=t.substring(t.lastIndexOf("/")+1);for(var l=0;l<this._tables.length;l++){var r=this._tables[l];if(t===r.fileName)return r}return null},e._getSheetRelatedHyperlink=function(e,t,l){for(var r=0;r<l.hyperlinkRIds.length;r++){var o=l.hyperlinkRIds[r];if(o.rId===t){var s=this._getAttr(e,"Target");l.rows[o.ref.row]&&l.rows[o.ref.row].cells[o.ref.col]&&(l.rows[o.ref.row].cells[o.ref.col].link=s)}}},e._getTableStyles=function(e,t){for(var l=e.split("<tableStyle "),r=l.length;--r;){var o={},s=l[r];o.name=this._getAttr(s,"name");for(var i=s.split("<tableStyleElement "),n=i.length;--n;){var a=i[n],h=this._getAttr(a,"type");switch(h){case"firstRowStripe":h="firstBandedRowStyle";break;case"secondRowStripe":h="secondBandedRowStyle";break;case"firstColumnStripe":h="firstBandedColumnStyle";break;case"secondColumnStripe":h="secondBandedColumnStyle";break;default:h+="Style"}var u=this._getAttr(a,"dxfId");""!==u&&(o[h]=this._getTableStyleElement(t[+u+1]));var c=this._getAttr(a,"size");c&&(null==o[h]&&(o[h]={}),o[h].size=+c)}this._tableStyles.push(o)}},e._getTableStyleElement=function(e){var t=null,l=null,r=null,o=null,s=e.indexOf("<font>");if(s>=0){t=e.substring(s,e.indexOf("</font>"));var i=this._getChildNodeValue(t,"sz");l={bold:"1"===this._getChildNodeValue(t,"b"),italic:"1"===this._getChildNodeValue(t,"i"),underline:"1"===this._getChildNodeValue(t,"u"),size:Math.round(i?96*+i/72:14),family:this._getChildNodeValue(t,"name"),color:this._getColor(t,!1)}}return t=null,(s=e.indexOf("<fill>"))>=0&&(t=e.substring(s,e.indexOf("</fill>")),r={color:this._getColor(t,!0)}),t=null,(s=e.indexOf("<border>"))>=0&&(t=e.substring(s,e.indexOf("</border>")),o={left:this._getEdgeBorder(t,"left"),right:this._getEdgeBorder(t,"right"),top:this._getEdgeBorder(t,"top"),bottom:this._getEdgeBorder(t,"bottom"),vertical:this._getEdgeBorder(t,"vertical"),horizontal:this._getEdgeBorder(t,"horizontal")}),{font:l,fill:r,borders:o}},e._getTableStyleByName=function(e){var t,l;if(null==this._tableStyles||0===this._tableStyles.length)return null;for(t=0;t<this._tableStyles.length;t++)if((l=this._tableStyles[t])&&l.name.toLowerCase()===e.toLowerCase())return l;return null},e._getHyperlink=function(e,t){var l,r,o,s,i,n;if(null!=(l=this._getAttr(t,"ref"))){o=l.split(":"),null==(i=this._getAttr(t,"r:id"))&&(n=this._getAttr(t,"location"));for(var a=0;a<o.length;a++)r=o[a],s=Workbook.tableAddress(r),i?(null==e.hyperlinkRIds&&(e.hyperlinkRIds=[]),e.hyperlinkRIds.push({ref:s,rId:i})):n&&e.rows[s.row]&&e.rows[s.row].cells[s.col]&&(e.rows[s.row].cells[s.col].link=n)}},e._getTextRunFont=function(e){var t=this._getChildNodeValue(e,"sz");return{bold:e.indexOf("<b/>")>=0,italic:e.indexOf("<i/>")>=0,underline:e.indexOf("<u/>")>=0,size:Math.round(t?96*+t/72:14),family:this._getChildNodeValue(e,"name"),color:this._getColor(e,!1)}},e._getTextOfTextRuns=function(e){var t,l,r="";for(t=0;t<e.length;t++)(l=e[t])&&(r+=l.text);return r},e._isBuiltInStyleName=function(e){var t;if(0===e.search(/TableStyleLight/i)){if(t=+e.substring(15),!isNaN(t)&&t>=1&&t<=21)return!0}else if(0===e.search(/TableStyleMedium/i)){if(t=+e.substring(16),!isNaN(t)&&t>=1&&t<=28)return!0}else if(0===e.search(/TableStyleDark/i)&&(t=+e.substring(14),!isNaN(t)&&t>=1&&t<=11))return!0;return!1},e._generateRelsDoc=function(){return'<Relationships xmlns="'+this._relationshipsNS+'"><Relationship Target="docProps/app.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Id="rId3"/><Relationship Target="docProps/core.xml" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Id="rId2"/><Relationship Target="xl/workbook.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Id="rId1"/></Relationships>'},e._generateThemeDoc=function(){return'<a:theme name="Office Theme" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:themeElements>'+this._generateClrScheme()+this._generateFontScheme()+this._generateFmtScheme()+"</a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/></a:theme>"},e._generateClrScheme=function(){return null===this._colorThemes&&(this._colorThemes=[]),'<a:clrScheme name="Office"><a:dk1><a:sysClr lastClr="'+(this._colorThemes[1]||"000000")+'" val="windowText"/></a:dk1><a:lt1><a:sysClr lastClr="'+(this._colorThemes[0]||"FFFFFF")+'" val="window"/></a:lt1><a:dk2><a:srgbClr val="'+(this._colorThemes[3]||"1F497D")+'"/></a:dk2><a:lt2><a:srgbClr val="'+(this._colorThemes[2]||"EEECE1")+'"/></a:lt2><a:accent1><a:srgbClr val="'+(this._colorThemes[4]||"4F81BD")+'"/></a:accent1><a:accent2><a:srgbClr val="'+(this._colorThemes[5]||"C0504D")+'"/></a:accent2><a:accent3><a:srgbClr val="'+(this._colorThemes[6]||"9BBB59")+'"/></a:accent3><a:accent4><a:srgbClr val="'+(this._colorThemes[7]||"8064A2")+'"/></a:accent4><a:accent5><a:srgbClr val="'+(this._colorThemes[8]||"4BACC6")+'"/></a:accent5><a:accent6><a:srgbClr val="'+(this._colorThemes[9]||"F79646")+'"/></a:accent6><a:hlink><a:srgbClr val="0000FF"/></a:hlink><a:folHlink><a:srgbClr val="800080"/></a:folHlink></a:clrScheme>'},e._generateFontScheme=function(){return'<a:fontScheme name="Office"><a:majorFont><a:latin typeface="Cambria"/><a:ea typeface=""/><a:cs typeface=""/><a:font typeface="ＭＳ Ｐゴシック" script="Jpan"/><a:font typeface="맑은 고딕" script="Hang"/><a:font typeface="宋体" script="Hans"/><a:font typeface="新細明體" script="Hant"/><a:font typeface="Times New Roman" script="Arab"/><a:font typeface="Times New Roman" script="Hebr"/><a:font typeface="Tahoma" script="Thai"/><a:font typeface="Nyala" script="Ethi"/><a:font typeface="Vrinda" script="Beng"/><a:font typeface="Shruti" script="Gujr"/><a:font typeface="MoolBoran" script="Khmr"/><a:font typeface="Tunga" script="Knda"/><a:font typeface="Raavi" script="Guru"/><a:font typeface="Euphemia" script="Cans"/><a:font typeface="Plantagenet Cherokee" script="Cher"/><a:font typeface="Microsoft Yi Baiti" script="Yiii"/><a:font typeface="Microsoft Himalaya" script="Tibt"/><a:font typeface="MV Boli" script="Thaa"/><a:font typeface="Mangal" script="Deva"/><a:font typeface="Gautami" script="Telu"/><a:font typeface="Latha" script="Taml"/><a:font typeface="Estrangelo Edessa" script="Syrc"/><a:font typeface="Kalinga" script="Orya"/><a:font typeface="Kartika" script="Mlym"/><a:font typeface="DokChampa" script="Laoo"/><a:font typeface="Iskoola Pota" script="Sinh"/><a:font typeface="Mongolian Baiti" script="Mong"/><a:font typeface="Times New Roman" script="Viet"/><a:font typeface="Microsoft Uighur" script="Uigh"/><a:font typeface="Sylfaen" script="Geor"/></a:majorFont><a:minorFont><a:latin typeface="Calibri"/><a:ea typeface=""/><a:cs typeface=""/><a:font typeface="ＭＳ Ｐゴシック" script="Jpan"/><a:font typeface="맑은 고딕" script="Hang"/><a:font typeface="宋体" script="Hans"/><a:font typeface="新細明體" script="Hant"/><a:font typeface="Arial" script="Arab"/><a:font typeface="Arial" script="Hebr"/><a:font typeface="Tahoma" script="Thai"/><a:font typeface="Nyala" script="Ethi"/><a:font typeface="Vrinda" script="Beng"/><a:font typeface="Shruti" script="Gujr"/><a:font typeface="DaunPenh" script="Khmr"/><a:font typeface="Tunga" script="Knda"/><a:font typeface="Raavi" script="Guru"/><a:font typeface="Euphemia" script="Cans"/><a:font typeface="Plantagenet Cherokee" script="Cher"/><a:font typeface="Microsoft Yi Baiti" script="Yiii"/><a:font typeface="Microsoft Himalaya" script="Tibt"/><a:font typeface="MV Boli" script="Thaa"/><a:font typeface="Mangal" script="Deva"/><a:font typeface="Gautami" script="Telu"/><a:font typeface="Latha" script="Taml"/><a:font typeface="Estrangelo Edessa" script="Syrc"/><a:font typeface="Kalinga" script="Orya"/><a:font typeface="Kartika" script="Mlym"/><a:font typeface="DokChampa" script="Laoo"/><a:font typeface="Iskoola Pota" script="Sinh"/><a:font typeface="Mongolian Baiti" script="Mong"/><a:font typeface="Arial" script="Viet"/><a:font typeface="Microsoft Uighur" script="Uigh"/><a:font typeface="Sylfaen" script="Geor"/></a:minorFont></a:fontScheme>'},e._generateFmtScheme=function(){return'<a:fmtScheme name="Office">'+this._generateFillScheme()+this._generateLineStyles()+this._generateEffectScheme()+this._generateBgFillScheme()+"</a:fmtScheme>"},e._generateFillScheme=function(){return'<a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs><a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:satMod val="350000"/></a:schemeClr></a:gs></a:gsLst><a:lin scaled="1" ang="16200000"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="51000"/><a:satMod val="130000"/></a:schemeClr></a:gs><a:gs pos="80000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="130000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="94000"/><a:satMod val="135000"/></a:schemeClr></a:gs></a:gsLst><a:lin scaled="1" ang="16200000"/></a:gradFill></a:fillStyleLst>'},e._generateLineStyles=function(){return'<a:lnStyleLst><a:ln algn="ctr" cmpd="sng" cap="flat" w="9525"><a:solidFill><a:schemeClr val="phClr"><a:shade val="9500"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln><a:ln algn="ctr" cmpd="sng" cap="flat" w="25400"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln><a:ln algn="ctr" cmpd="sng" cap="flat" w="38100"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln></a:lnStyleLst>'},e._generateEffectScheme=function(){return'<a:effectStyleLst><a:effectStyle><a:effectLst><a:outerShdw dir="5400000" rotWithShape="0" dist="23000" blurRad="40000"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw dir="5400000" rotWithShape="0" dist="23000" blurRad="40000"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw dir="5400000" rotWithShape="0" dist="23000" blurRad="40000"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw></a:effectLst><a:scene3d><a:camera prst="orthographicFront"><a:rot rev="0" lon="0" lat="0"/></a:camera><a:lightRig dir="t" rig="threePt"><a:rot rev="1200000" lon="0" lat="0"/></a:lightRig></a:scene3d><a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d></a:effectStyle></a:effectStyleLst>'},e._generateBgFillScheme=function(){return'<a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs><a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs></a:gsLst><a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="300000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="200000"/></a:schemeClr></a:gs></a:gsLst><a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path></a:gradFill></a:bgFillStyleLst>'},e._generateCoreDoc=function(e){var t='<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">';return e.creator?t+="<dc:creator>"+e.creator+"</dc:creator>":t+="<dc:creator/>",e.lastModifiedBy?t+="<cp:lastModifiedBy>"+e.lastModifiedBy+"</cp:lastModifiedBy>":t+="<cp:lastModifiedBy/>",t+='<dcterms:created xsi:type="dcterms:W3CDTF">'+(e.created||new Date).toISOString()+'</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">'+(e.modified||new Date).toISOString()+"</dcterms:modified></cp:coreProperties>"},e._generateSheetGlobalSetting=function(e,t,l){var r=t.rows&&t.rows[0]&&t.rows[0].cells?t.rows[0].cells.length:0,o=' xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">';return o+='<sheetPr><outlinePr summaryBelow="0"/></sheetPr>',o+='<dimension ref="A1'+(r>0?":"+this._numAlpha(r-1)+t.rows.length:"")+'"/>',o+='<sheetViews><sheetView workbookViewId="0"',e===l.activeWorksheet&&(o+=' tabSelected="1"'),!t.frozenPane||0===t.frozenPane.rows&&0===t.frozenPane.columns?o+="/>":(o+=">",o+='<pane state="frozen" activePane="'+(0!==t.frozenPane.rows&&0!==t.frozenPane.columns?"bottomRight":0!==t.frozenPane.rows?"bottomLeft":"topRight")+'" topLeftCell="'+(this._numAlpha(t.frozenPane.columns)+(t.frozenPane.rows+1))+'" ySplit="'+t.frozenPane.rows.toString()+'" xSplit="'+t.frozenPane.columns.toString()+'"/>',o+="</sheetView>"),o+="</sheetViews>",o+='<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>'},e._generateCell=function(e,t,l,r,o,s){var i='<c r="'+this._numAlpha(t)+(e+1)+'" s="'+l.toString()+'"';r&&(i+=' t="'+r+'"');var n="";return s&&("="===s[0]&&(s=s.substring(1)),s=s.replace(/\@\s*/gi,"[#This Row], "),n+="<f>"+Workbook._escapeXML(s)+"</f>"),null!=o&&""!==o&&(n+="<v>"+o+"</v>"),i+(n?">"+n+"</c>":"/>")},e._generateMergeSetting=function(e){for(var t='<mergeCells count="'+e.length.toString()+'">',l=0;l<e.length;l++)t+='<mergeCell ref="'+e[l].join(":")+'"/>';return t+"</mergeCells>"},e._generateStyleDoc=function(){var e='<styleSheet xmlns="'+this._workbookNS+'" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac">',t="",l="",r=[],o=0,s=0,i="",n="";n=this._generateFontStyle({},!0);var a="",h="";h+=this._generateFillStyle("none",null),h+=this._generateFillStyle("gray125",null);var u="",c="";c+=this._generateBorderStyle({});var f="",d="";for(d+=this._generateCellXfs(0,0,0,0,{});o<this._styles.length;){var m=this._styles[o];if(m){var p=0;if((m=JSON.parse(m)).format&&"General"!==m.format&&(p=this._numFmts.indexOf(m.format))<0){var g=r.indexOf(m.format);-1===g?(r.push(m.format),l+='<numFmt numFmtId="'+(p=164+s).toString()+'" formatCode="'+m.format+'"/>',s++):p=164+g}var _=0;if(m.borders){var y=JSON.stringify(m.borders);(_=this._borders.indexOf(y))<0&&(_=this._borders.push(y)-1,c+=this._generateBorderStyle(m.borders))}var b=0;if(m.font){var v=JSON.stringify(m.font);(b=this._fonts.indexOf(v))<0&&(b=this._fonts.push(v)-1,n+=this._generateFontStyle(m.font))}var S=0;if(m.fill&&m.fill.color){var w=JSON.stringify(m.fill);(S=this._fills.indexOf(w))<0&&(S=this._fills.push(w)-1,h+=this._generateFillStyle("solid",m.fill.color))}d+=this._generateCellXfs(p,_,b,S,m)}o++}r=null,s>0?(t='<numFmts count="'+s+'">',t+=l,t+="</numFmts>"):t='<numFmts count="0"/>',e+=t,i='<fonts count="'+this._fonts.length+'" x14ac:knownFonts="1">',i+=n,e+=i+="</fonts>",a='<fills count="'+this._fills.length+'">',a+=h,e+=a+="</fills>",u='<borders count="'+this._borders.length+'">',u+=c,e+=u+="</borders>",e+='<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>',f='<cellXfs count="'+this._styles.length+'">',f+=d,f+="</cellXfs>";var x="",k="";return this._tableStyles.length>0&&(this._getDxfs(),this._dxfs.length>0&&(x=this._generateDxfs()),k=this._generateTableStyles()),e+=f+'<cellStyles count="1"><cellStyle xfId="0" builtinId="0" name="Normal"/></cellStyles>'+(""===x?'<dxfs count="0"/>':x)+(""===k?'<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleLight16"/>':k)+'<extLst><ext uri="{EB79DEF2-80B8-43e5-95BD-54CBDDF9020C}"><x14ac:slicerStyles defaultSlicerStyle="SlicerStyleLight1" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main"/></ext></extLst></styleSheet>'},e._generateBorderStyle=function(e,t){void 0===t&&(t=!1);var l,r,o="<border>";for(var s in{left:0,right:0,top:0,bottom:0,diagonal:0,vertical:0,horizontal:0})(t||"vertical"!==s&&"horizontal"!==s)&&(e[s]?(l="<"+s+' style="'+e[s].style+'">',"",6===(r=(r=e[s].color)?"#"===r[0]?r.substring(1):r:"").length&&(r="FF"+r),r||(r="FF000000"),l+='<color rgb="'+r+'"/>',l+="</"+s+">"):l="<"+s+"/>",o+=l);return o+="</border>"},e._generateFontStyle=function(e,t){void 0===t&&(t=!1);var l="<font>";return e.bold&&(l+="<b/>"),e.italic&&(l+="<i/>"),e.underline&&(l+="<u/>"),l+='<sz val="'+(e.size?Math.round(72*e.size/96):this._defaultFontSize)+'"/>',e.color?l+='<color rgb="FF'+("#"===e.color[0]?e.color.substring(1):e.color)+'"/>':l+='<color theme="1"/>',l+='<name val="'+(e.family||this._defaultFontName)+'"/>',l+='<family val="2"/>',t&&(l+='<scheme val="minor"/>'),l+="</font>"},e._generateFillStyle=function(e,t,l){void 0===l&&(l=!1);var r,o='<fill><patternFill patternType="'+e+'">';return t&&(r=l?"<bgColor ":"<fgColor ",o+=r+='rgb="FF'+("#"===t[0]?t.substring(1):t)+'"/>'),o+="</patternFill></fill>"},e._generateCellXfs=function(e,t,l,r,o){var s='<xf xfId="0" ';if(s+='numFmtId="'+e.toString()+'" ',e>0&&(s+='applyNumberFormat="1" '),s+='borderId="'+t.toString()+'" ',t>0&&(s+='applyBorder="1" '),s+='fontId="'+l.toString()+'" ',l>0&&(s+='applyFont="1" '),s+='fillId="'+r.toString()+'" ',r>0&&(s+='applyFill="1" '),o.quotePrefix&&(s+='quotePrefix="1" '),o.hAlign||o.vAlign||o.indent||o.wordWrap){s+='applyAlignment="1">';var i="<alignment ";o.hAlign&&(i+='horizontal="'+o.hAlign+'" '),o.vAlign&&(i+='vertical="'+o.vAlign+'" '),o.indent&&(i+='indent="'+o.indent+'" '),o.wordWrap&&(i+='wrapText="1"'),s+=i+="/>",s+="</xf>"}else s+="/>";return s},e._generateContentTypesDoc=function(){var e,t='<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">';for(this._macroEnabled&&(t+='<Default ContentType="application/vnd.ms-office.vbaProject" Extension="bin"/>'),t+='<Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/><Default ContentType="application/xml" Extension="xml"/><Override ContentType="'+(this._macroEnabled?"application/vnd.ms-excel.sheet.macroEnabled.main+xml":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml")+'" PartName="/xl/workbook.xml"/>',e=0;e<this._contentTypes.length;e++)t+=this._contentTypes[e];for(t+='<Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml" PartName="/xl/theme/theme1.xml"/><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml"/><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/><Override ContentType="application/vnd.openxmlformats-package.core-properties+xml" PartName="/docProps/core.xml"/><Override ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" PartName="/docProps/app.xml"/>',e=0;e<this._tables.length;e++)t+='<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml" PartName="/xl/tables/'+this._tables[e]+'"/>';return t+="</Types>"},e._generateAppDoc=function(e){for(var t='<Properties xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes" xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"><Application>'+(e.application||"wijmo.xlsx")+'</Application><DocSecurity>0</DocSecurity><ScaleCrop>false</ScaleCrop><HeadingPairs><vt:vector baseType="variant" size="2"><vt:variant><vt:lpstr>Worksheets</vt:lpstr></vt:variant><vt:variant><vt:i4>'+this._props.length+'</vt:i4></vt:variant></vt:vector></HeadingPairs><TitlesOfParts><vt:vector baseType="lpstr" size="'+this._props.length+'">',l=0;l<this._props.length;l++)t+="<vt:lpstr>"+this._props[l]+"</vt:lpstr>";return t+="</vt:vector></TitlesOfParts><Manager/><Company>"+(e.company||"GrapeCity, Inc.")+"</Company><LinksUpToDate>false</LinksUpToDate><SharedDoc>false</SharedDoc><HyperlinksChanged>false</HyperlinksChanged><AppVersion>1.0</AppVersion></Properties>"},e._generateWorkbookRels=function(){for(var e='<Relationships xmlns="'+this._relationshipsNS+'">',t=0;t<this._xlRels.length;t++)e+=this._xlRels[t];return e+='<Relationship Target="sharedStrings.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Id="rId'+(this._xlRels.length+1)+'"/><Relationship Target="styles.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Id="rId'+(this._xlRels.length+2)+'"/><Relationship Target="theme/theme1.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Id="rId'+(this._xlRels.length+3)+'"/>',this._macroEnabled&&(e+='<Relationship Target="vbaProject.bin" Type="http://schemas.microsoft.com/office/2006/relationships/vbaProject" Id="rId'+(this._xlRels.length+4)+'"/>'),e+="</Relationships>"},e._generateWorkbook=function(e){for(var t='<workbook xmlns="'+this._workbookNS+'" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion rupBuild="9303" lowestEdited="5" lastEdited="5" appName="xl"/><workbookPr/><bookViews><workbookView xWindow="480" yWindow="60" windowWidth="18195" windowHeight="8505"'+(null!=e.activeWorksheet?' activeTab="'+e.activeWorksheet.toString()+'"':"")+"/></bookViews><sheets>",l=0;l<this._worksheets.length;l++)t+=this._worksheets[l];if(t+="</sheets>",e.definedNames&&e.definedNames.length>0){for(t+="<definedNames>",l=0;l<e.definedNames.length;l++){var r=-1;e.definedNames[l].sheetName&&(r=this._getSheetIndexBySheetName(e,e.definedNames[l].sheetName)),t+='<definedName name="'+e.definedNames[l].name+'" '+(r>-1?'localSheetId="'+r+'"':"")+">"+e.definedNames[l].value+"</definedName>"}t+="</definedNames>"}return t+='<calcPr fullCalcOnLoad="1"/></workbook>'},e._generateWorkSheet=function(e,t,l){var r,o,s,i,n,a,h,u,c,f,d,m,p,g,_,y,b,v,S,w,x,k,C,T=1;if(r=e+1,s=(o=t.sheets[e]).columns,i=this._cloneColumnsStyle(s),!o)throw"Worksheet should not be empty!";var F='<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"';F+=this._generateSheetGlobalSetting(e,o,t);var A="<sheetData>";for(n=o.style?this._cloneStyle(o.style):null,"",[],h=[],u=-1,c=(a=o.rows)?a.length:0;++u<c;){for(f=-1,d=a[u]&&a[u].cells?a[u].cells.length:0,m=null,A+='<row x14ac:dyDescent="0.25" r="'+(u+1).toString()+'"',a[u]&&(a[u].height&&(A+=' customHeight="1" ht="'+(72*+a[u].height/96).toString()+'"'),a[u].groupLevel&&(A+=' outlineLevel="'+a[u].groupLevel.toString()+'"'),(m=a[u].style?this._cloneStyle(a[u].style):null)&&((m=this._resolveStyleInheritance(m)).font&&m.font.color&&(m.font.color=this._parseColor(m.font.color)),m.fill&&m.fill.color&&(m.fill.color=this._parseColor(m.fill.color)),null==m.hAlign||wijmo_1.isString(m.hAlign)||(m.hAlign=Workbook._parseHAlignToString(wijmo_1.asEnum(m.hAlign,HAlign))),null==m.vAlign||wijmo_1.isString(m.vAlign)||(m.vAlign=Workbook._parseVAlignToString(wijmo_1.asEnum(m.vAlign,VAlign))),p=JSON.stringify(m),(g=this._styles.indexOf(p))<0&&(g=this._styles.push(p)-1),A+=' customFormat="1" s="'+g.toString()+'"')),a[u]&&!1===a[u].visible&&(A+=' hidden="1"'),a[u]&&!0===a[u].collapsed&&(A+=' collapsed="1"'),A+=">";++f<d;){if(y=null,b=null,v="",S=-1,C=(_=a[u].cells[f])?_.textRuns:null,y=_&&_.hasOwnProperty("value")?_.value:_,b=_&&_.style?this._cloneStyle(_.style):{},b=this._resolveStyleInheritance(b),(w=i[f])&&(w=this._resolveStyleInheritance(w),b=this._extend(b,w)),m&&(b=this._extend(b,m)),n&&(n=this._resolveStyleInheritance(n),b=this._extend(b,n)),null==b.hAlign||wijmo_1.isString(b.hAlign)||(b.hAlign=Workbook._parseHAlignToString(wijmo_1.asEnum(b.hAlign,HAlign))),null==b.vAlign||wijmo_1.isString(b.vAlign)||(b.vAlign=Workbook._parseVAlignToString(wijmo_1.asEnum(b.vAlign,VAlign))),b.font&&b.font.color&&(b.font.color=this._parseColor(b.font.color)),b.fill&&b.fill.color&&(b.fill.color=this._parseColor(b.fill.color)),this._applyDefaultBorder(b),b.borders&&(b.borders=this._extend({},b.borders),this._parseBorder(b.borders,!!b.fill&&!!b.fill.color)),_&&_.isDate&&!wijmo_1.isDate(y)){var z=new Date(y);wijmo_1.isDate(z)&&(y=z)}!wijmo_1.isNumber(y)||!isNaN(y)&&isFinite(y)||(y=y.toString()),C||y&&wijmo_1.isString(y)&&("@"===b.format||"General"===b.format||(+y).toString()!==y||!isFinite(+y))?(this._sharedStrings[1]++,"'"===(y=C?"{RichTextMark}"+JSON.stringify(C):Workbook._unescapeXML(y))[0]&&(b.quotePrefix=!0,y=y.substring(1)),(S=this._sharedStrings[0].indexOf(y))<0&&(S=this._sharedStrings[0].push(y)-1),y=S,v="s"):wijmo_1.isBoolean(y)?(y=y?1:0,v="b"):wijmo_1.isDate(y)?(y=this._convertDate(y),b.format=b.format||"mm-dd-yy"):wijmo_1.isObject(y)&&(y=null),b=JSON.stringify(b),(g=this._styles.indexOf(b))<0&&(g=this._styles.push(b)-1),_&&(null!=_.colSpan&&_.colSpan>1||null!=_.rowSpan&&_.rowSpan>1)&&(_.colSpan=_.colSpan||1,_.rowSpan=_.rowSpan||1,this._checkValidMergeCell(h,u,_.rowSpan,f,_.colSpan)&&h.push([this._numAlpha(f)+(u+1),this._numAlpha(f+_.colSpan-1)+(u+_.rowSpan)])),_&&_.link&&(null==k&&(k=[]),k.push({ref:Workbook.xlsxAddress(u,f),value:y,href:_.link})),b=null,A+=this._generateCell(u,f,g,v,y,_&&_.formula?_.formula:null)}A+="</row>"}if(A+="</sheetData>",s&&s.length>0){for(F+="<cols>",u=0;u<s.length;u++)if(g=-1,this._isEmpty(i[u])||(w=i[u])&&((w=this._resolveStyleInheritance(w)).font&&w.font.color&&(w.font.color=this._parseColor(w.font.color)),w.fill&&w.fill.color&&(w.fill.color=this._parseColor(w.fill.color)),null==w.hAlign||wijmo_1.isString(w.hAlign)||(w.hAlign=Workbook._parseHAlignToString(wijmo_1.asEnum(w.hAlign,HAlign))),null==w.vAlign||wijmo_1.isString(w.vAlign)||(w.vAlign=Workbook._parseVAlignToString(wijmo_1.asEnum(w.vAlign,VAlign))),w=JSON.stringify(w),(g=this._styles.indexOf(w))<0&&(g=this._styles.push(w)-1)),!this._isEmpty(s[u])){x=null!=(x=s[u].width)?"string"==typeof x&&x.indexOf("ch")>-1?this._parseCharCountToCharWidth(x.substring(0,x.indexOf("ch"))):this._parsePixelToCharWidth(x):8.43;var R=(u+1).toString();F+='<col min="'+R+'" max="'+R+'"',g>=0&&(F+=' style="'+g.toString()+'"'),x&&(F+=' width="'+x+'" customWidth="1"'),!1!==s[u].autoWidth&&(F+=' bestFit="1"'),!1===s[u].visible&&(F+=' hidden="1"'),F+="/>"}F+="</cols>"}if(F=A=F+A,A=null,h.length>0&&(F+=this._generateMergeSetting(h)),k&&k.length>0){for(F+="<hyperlinks>",u=0;u<k.length;u++)/\'?(\w+)\'?\!\$?[A-Za-z]{1,2}\$?\d+(:\$?[A-Za-z]{1,2}\$?\d+)?/.test(k[u].href)||/^\$?[A-Za-z]{1,2}\$?\d+(:\$?[A-Za-z]{1,2}\$?\d+)?$/.test(k[u].href)?F+='<hyperlink ref="'+k[u].ref+'" display="'+k[u].value+'" location="'+k[u].href+'"/>':(null==o.externalLinks&&(o.externalLinks=[]),o.externalLinks.push(k[u].href),F+='<hyperlink ref="'+k[u].ref+'" r:id="rId'+T+'"/>',T++);F+="</hyperlinks>"}if(F+='<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>',o.tables&&o.tables.length>0){for(F+='<tableParts count="'+o.tables.length+'">',u=0;u<o.tables.length;u++)F+='<tablePart r:id="rId'+T+'"/>',T++;F+="</tableParts>"}F+="</worksheet>",l.file("sheet"+r+".xml",this._xmlDescription+F),F=null;var W='<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet'+r+'.xml"/>';this._contentTypes.unshift(W),this._props.unshift(Workbook._escapeXML(o.name)||"Sheet"+r);var O='<Relationship Target="worksheets/sheet'+r+'.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Id="rId'+r+'"/>';this._xlRels.unshift(O);var B='<sheet r:id="rId'+r+'" sheetId="'+r+'" name="'+(Workbook._escapeXML(o.name)||"Sheet"+r)+'"'+(!1===o.visible?' state="hidden"':"")+"/>";this._worksheets.unshift(B)},e._generateSharedStringsDoc=function(){var e,t='<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="'+this._sharedStrings[1]+'" uniqueCount="'+this._sharedStrings[0].length+'">';for(e=0;e<this._sharedStrings[0].length;e++){t+="<si>";var l=this._sharedStrings[0][e];if(l&&0===l.indexOf("{RichTextMark}"))try{var r=JSON.parse(l.substring(14));if(r&&r.length>0){for(var o=0;o<r.length;o++){t+="<r>";var s=r[o];s.font&&(t+=this._generateFontStyle(s.font,!0).replace(/font/g,"rPr")),t+=this._generatePlainText(s.text),t+="</r>"}t+="</si>"}}catch(e){t+=this._generatePlainText(l)+"</si>"}else t+=this._generatePlainText(l)+"</si>"}return t+"</sst>"},e._generatePlainText=function(e){var t="<t";return(wijmo_1.isNullOrWhiteSpace(e)||/^\s+\w*|\w*\s+$/.test(e))&&(t+=' xml:space="preserve"'),t+=">"+Workbook._escapeXML(e)+"</t>"},e._generateTable=function(e,t){var l=this._tables.length+1,r="table"+l+".xml";e.fileName=r,this._tables.push(r);var o='<table ref="'+e.range+'" displayName="'+e.name+'" name="'+e.name+'" id="'+l+'" '+(!1===e.showHeaderRow?'headerRowCount="0" ':"")+(!0===e.showTotalRow?'totalsRowCount="1" ':'totalsRowShown="0" ')+' xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">';!1!==e.showHeaderRow&&(o+=this._generateTableFilterSetting(e.range,e.showTotalRow,e.columns)),o+='<tableColumns count="'+e.columns.length+'">';for(var s="",i=0;i<e.columns.length;i++){var n=e.columns[i];s+='<tableColumn name="'+n.name+'" id="'+(i+1)+'" ',n.totalRowFunction?this._tableColumnFunctions.indexOf(n.totalRowFunction)>-1?s+='totalsRowFunction="'+n.totalRowFunction+'"/>':s+='totalsRowFunction="custom"><totalsRowFormula>'+n.totalRowFunction+"</totalsRowFormula></tableColumn>":s+=(n.totalRowLabel?'totalsRowLabel="'+n.totalRowLabel+'"':"")+"/>"}if(o+=s+"</tableColumns>",o+='<tableStyleInfo name="'+e.style.name+'" showColumnStripes="'+(e.showBandedColumns?"1":"0")+'" showRowStripes="'+(e.showBandedRows?"1":"0")+'" showLastColumn="'+(e.alterLastColumn?"1":"0")+'" showFirstColumn="'+(e.alterFirstColumn?"1":"0")+'"/></table>',!this._isBuiltInStyleName(e.style.name)){var a=JSON.stringify(e.style);-1===this._tableStyles.indexOf(a)&&this._tableStyles.push(a)}t.file(r,this._xmlDescription+o),o=null},e._generateTableFilterSetting=function(e,t,l){var r=e;if(t){var o=r.indexOf(":")+1,s=Workbook.tableAddress(r.substring(r.indexOf(":")+1));s.row-=1,r=r.substring(0,o)+Workbook.xlsxAddress(s.row,s.col)}for(var i='<autoFilter ref="'+r+'"',n="",a=0;a<l.length;a++)!1===l[a].showFilterButton&&(n+='<filterColumn hiddenButton="1" colId="'+a+'"/>');return i+=""===n?"/>":">"+n+"</autoFilter>"},e._generateHyperlinkRel=function(e){for(var t="",l=0;l<e.length;l++)t+='<Relationship TargetMode="External" Target="'+e[l]+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Id="rId'+(l+1)+'"/>';return t},e._getDxfs=function(){for(var e,t=this,l=0;l<this._tableStyles.length;l++)e=JSON.parse(this._tableStyles[l]),Object.keys(e).forEach(function(l){var r,o,s=e[l];s&&!wijmo_1.isString(s)&&(t._isEmptyStyleEle(s)||(r=JSON.stringify(s),-1===(o=t._dxfs.indexOf(r))&&(o=t._dxfs.push(r)-1,s.styleIndex=o)))}),this._tableStyles[l]=e},e._generateDxfs=function(){for(var e,t='<dxfs count="'+this._dxfs.length+'">',l=0;l<this._dxfs.length;l++)t+="<dxf>",(e=JSON.parse(this._dxfs[l])).font&&(t+=this._generateFontStyle(e.font)),e.fill&&e.fill.color&&(t+=this._generateFillStyle("solid",e.fill.color,!0)),e.borders&&!this._isEmpty(e.borders)&&(e.borders=this._extend({},e.borders),this._parseBorder(e.borders,!1),t+=this._generateBorderStyle(e.borders,!0)),t+="</dxf>";return t+="</dxfs>"},e._generateTableStyles=function(){for(var e,t,l,r,o,s,i='<tableStyles count="'+this._tableStyles.length+'" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleLight16">',n=0;n<this._tableStyles.length;n++){e=this._tableStyles[n],t=Object.keys(e),o="",s=0;for(var a=0;a<t.length;a++)if(r=e[l=t[a]],!wijmo_1.isString(r)){switch(s++,o+="<tableStyleElement",null!=r.styleIndex&&(o+=' dxfId="'+r.styleIndex+'"'),l){case"firstBandedColumnStyle":o+=' type="firstColumnStripe"',null!=r.size&&(o+=' size="'+r.size+'"');break;case"secondBandedColumnStyle":o+=' type="secondColumnStripe"',null!=r.size&&(o+=' size="'+r.size+'"');break;case"firstBandedRowStyle":o+=' type="firstRowStripe"',null!=r.size&&(o+=' size="'+r.size+'"');break;case"secondBandedRowStyle":o+=' type="secondRowStripe"',null!=r.size&&(o+=' size="'+r.size+'"');break;default:o+=' type="'+l.substring(0,l.length-5)+'"'}o+="/>"}s>0&&(i+='<tableStyle count="'+s+'" name="'+e.name+'" pivot="0">',i+=o+"</tableStyle>")}return i+="</tableStyles>"},e._isEmptyStyleEle=function(e){return this._isEmpty(e.borders)&&(this._isEmpty(e.fill)||wijmo_1.isNullOrWhiteSpace(e.fill.color))&&(this._isEmpty(e.font)||!0!==e.font.bold&&wijmo_1.isNullOrWhiteSpace(e.font.color)&&wijmo_1.isNullOrWhiteSpace(e.font.family)&&!0!==e.font.italic&&null==e.font.size&&!0!==e.font.underline)},e._getTableFileName=function(e,t){for(var l="",r=0;r<e.length;r++){var o=e[r];if(o.name===t){l=o.fileName;break}}return l},e._getColor=function(e,t){var l,r,o,s,i;return-1===e.search(/fgcolor/i)&&-1===e.search(/bgcolor/i)&&t||-1===e.search(/color/i)&&!t?null:(-1===(l=e.indexOf("<fgColor"))&&(l=e.indexOf("<bgColor")),-1!==(e=t?e.substring(l,e.indexOf("/>")):e.substring(e.indexOf("<color"))).indexOf("rgb=")?(s=this._getAttr(e,"rgb"))&&8===s.length&&(s=s.substring(2)):-1!==e.indexOf("indexed")?(o=+this._getAttr(e,"indexed"),s=this._indexedColors[o]||""):(r=+this._getAttr(e,"theme"),-1!==e.indexOf("tint")&&(i=+this._getAttr(e,"tint")),s=this._getThemeColor(r,i)),s&&"#"===s[0]?s:"#"+s)},e._getThemeColor=function(e,t){var l,r=this._colorThemes[e];return null!=t?((l=new wijmo_1.Color("#"+r).getHsl())[2]=t<0?l[2]*(1+t):l[2]*(1-t)+(1-1*(1-t)),wijmo_1.Color.fromHsl(l[0],l[1],l[2]).toString().substring(1)):r},e._parseColor=function(e){var t=new wijmo_1.Color(e);return t.a<1&&(t=wijmo_1.Color.toOpaque(t)),t.toString()},e._getsBaseSharedFormulas=function(e){var t,l,r,o=e.match(/\<f[^<]*ref[^<]*>[^<]+(?=\<\/f>)/g);if(this._sharedFormulas=[],o&&o.length>0)for(var s=0;s<o.length;s++)t=o[s],l=this._getAttr(t,"si"),r=(r=this._getAttr(t,"ref"))?r.substring(0,r.indexOf(":")):"",t=t.replace(/(\<f.*>)(.+)/,"$2"),this._sharedFormulas[+l]=this._parseSharedFormulaInfo(r,t)},e._parseSharedFormulaInfo=function(e,t){var l,r,o,s,i,n=t.match(/(\'?\w+\'?\!)?(\$?[A-Za-z]+)(\$?\d+)/g);if(s=Workbook.tableAddress(e),n&&n.length>0){i=[];for(var a=0;a<n.length;a++)l=n[a],t=t.replace(l,"{"+a+"}"),(r=l.indexOf("!"))>0&&(o=l.substring(0,r),l=l.substring(r+1)),i[a]={cellAddress:Workbook.tableAddress(l),sheetRef:o}}return{cellRef:s,formula:t,formulaRefs:i}},e._getSharedFormula=function(e,t){var l,r,o,s,i,n,a,h,u,c,f,d;if(this._sharedFormulas&&this._sharedFormulas.length>0&&(l=this._sharedFormulas[+e])){if(u=l.formula,(c=l.formulaRefs)&&c.length>0){r=Workbook.tableAddress(t),a=l.cellRef?l.cellRef.row:0,h=l.cellRef?l.cellRef.col:0,o=r.row-a,s=r.col-h;for(var m=0;m<c.length;m++)i=(f=c[m]).cellAddress.row+(f.cellAddress.absRow?0:o),n=f.cellAddress.col+(f.cellAddress.absCol?0:s),d=Workbook.xlsxAddress(i,n,f.cellAddress.absRow,f.cellAddress.absCol),null!=f.sheetRef&&""!==f.sheetRef&&(d=f.sheetRef+"!"+d),u=u.replace("{"+m+"}",d)}return u}return""},e._convertDate=function(e){var t,l,r=new Date(1900,0,0),o=Date.UTC(1900,0,0),s="[object Date]"===Object.prototype.toString.call(e),i=6e4*((s?e.getTimezoneOffset():(new Date).getTimezoneOffset())-r.getTimezoneOffset()),n=r.getTime()-o-6e4*r.getTimezoneOffset();return s?(e.getTime()-r.getTime()-i+n)/864e5+1:wijmo_1.isNumber(e)?(t=e>59?1:0,0!==(i=6e4*((l=new Date(1e3*Math.round((+r+864e5*(e-t))/1e3))).getTimezoneOffset()-r.getTimezoneOffset()))?new Date(1e3*Math.round((+r+i-n+864e5*(e-t))/1e3)):l):null},e._parseBorder=function(e,t){for(var l in{left:0,right:0,top:0,bottom:0,diagonal:0}){var r=e[l];r&&(wijmo_1.isString(r.color)&&(r.color=this._parseColor(r.color)),null==r.style||wijmo_1.isString(r.style)||(r.style=Workbook._parseBorderTypeToString(wijmo_1.asEnum(r.style,BorderStyle,!1))),!t&&r.color&&"#c6c6c6"===r.color.toLowerCase()&&"thin"===r.style&&(e[l]=null))}},e._applyDefaultBorder=function(e){if(e.fill&&e.fill.color)for(var t in null==e.borders&&(e.borders={}),{left:0,right:0,top:0,bottom:0})null==e.borders[t]&&(e.borders[t]={style:BorderStyle.Thin,color:"#C6C6C6"})},e._resolveStyleInheritance=function(e){var t;if(!e.basedOn)return e;for(var l in e.basedOn)if("basedOn"===l)for(l in t=this._resolveStyleInheritance(e.basedOn)){var r=t[l];e[l]=null==e[l]?r:this._extend(e[l],r)}else{r=e.basedOn[l];e[l]=null==e[l]?r:this._extend(e[l],r)}return delete e.basedOn,e},e._parsePixelToCharWidth=function(e){return null==e||isNaN(+e)?null:((+e-5)/7*100+.5)/100},e._parseCharWidthToPixel=function(e){return null==e||isNaN(+e)?null:Math.floor((256*+e+128/7)/256*7)+5},e._parseCharCountToCharWidth=function(e){return null==e||isNaN(+e)?null:(7*+e+5)/7*256/256},e._numAlpha=function(e){var t=Math.floor(e/26)-1;return(t>-1?this._numAlpha(t):"")+this._alphabet.charAt(e%26)},e._alphaNum=function(e){return e.length>1?(this._alphabet.indexOf(e[0])+1)*Math.pow(26,e.length-1)+this._alphaNum(e.substring(1)):this._alphabet.indexOf(e)},e._typeOf=function(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()},e._extend=function(e,t){if(wijmo_1.isObject(e)&&wijmo_1.isObject(t)){for(var l in t){var r=t[l];wijmo_1.isObject(r)&&null!=e[l]?this._extend(e[l],r):null!=r&&null==e[l]&&(e[l]=r)}return e}return t},e._isEmpty=function(e){var t=Object.prototype.hasOwnProperty;if(null==e)return!0;if(e.length>0)return!1;if(0===e.length)return!0;for(var l in e)if(t.call(e,l))return!1;return!0},e._cloneStyle=function(e){var t;if(null==e||"object"!=typeof e)return e;for(var l in t={},e)e.hasOwnProperty(l)&&(t[l]=this._cloneStyle(e[l]));return t},e._cloneColumnsStyle=function(e){for(var t,l=[],r=0;r<e.length;r++)(t=e[r])&&t.style&&(l[r]=this._cloneStyle(t.style));return l},e._getSheetIndex=function(e){return+(e=e.substring(0,e.lastIndexOf(".xml"))).substring(e.lastIndexOf("sheet")+5)},e._checkValidMergeCell=function(e,t,l,r,o){for(var s=0;s<e.length;s++){var i=e[s],n=+i[0].match(/\d*/g).join("")-1,a=this._alphaNum(i[0].match(/[a-zA-Z]*/g)[0]),h=+i[1].match(/\d*/g).join("")-1,u=this._alphaNum(i[1].match(/[a-zA-Z]*/g)[0]);if(!(t>h||t+l-1<n||r>u||r+o-1<a))return!1}return!0},e._getAttr=function(e,t){var l=e.indexOf(t+'="');return l>=0?(e=e.substr(l+t.length+2)).substring(0,e.indexOf('"')):""},e._getChildNodeValue=function(e,t){var l=e.indexOf(t+' val="');return l>=0?(e=e.substr(l+t.length+6)).substring(0,e.indexOf('"')):""},e._getSheetIndexBySheetName=function(e,t){for(var l=0;l<e.sheets.length;l++)if(e.sheets[l].name===t)return l;return-1},e._alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ",e._indexedColors=["000000","FFFFFF","FF0000","00FF00","0000FF","FFFF00","FF00FF","00FFFF","000000","FFFFFF","FF0000","00FF00","0000FF","FFFF00","FF00FF","00FFFF","800000","008000","000080","808000","800080","008080","C0C0C0","808080","9999FF","993366","FFFFCC","CCFFFF","660066","FF8080","0066CC","CCCCFF","000080","FF00FF","FFFF00","00FFFF","800080","800000","008080","0000FF","00CCFF","CCFFFF","CCFFCC","FFFF99","99CCFF","FF99CC","CC99FF","FFCC99","3366FF","33CCCC","99CC00","FFCC00","FF9900","FF6600","666699","969696","003366","339966","003300","333300","993300","993366","333399","333333","000000","FFFFFF"],e._numFmts=["General","0","0.00","#,##0","#,##0.00",,,"$#,##0.00_);($#,##0.00)",,"0%","0.00%","0.00E+00","# ?/?","# ??/??","m/d/yyyy","d-mmm-yy","d-mmm","mmm-yy","h:mm AM/PM","h:mm:ss AM/PM","h:mm","h:mm:ss","m/d/yy h:mm",,,,,,,,,,,,,,,"#,##0 ;(#,##0)","#,##0 ;[Red](#,##0)","#,##0.00;(#,##0.00)","#,##0.00;[Red](#,##0.00)",,,,,"mm:ss","[h]:mm:ss","mmss.0","##0.0E+0","@"],e._tableColumnFunctions="average, count, countNums, max, min, stdDev, sum, var",e._xmlDescription='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',e._workbookNS="http://schemas.openxmlformats.org/spreadsheetml/2006/main",e._relationshipsNS="http://schemas.openxmlformats.org/package/2006/relationships",e._defaultFontName="Calibri",e._defaultFontSize=11,e._macroEnabled=!1,e._defaultColorThemes=["FFFFFF","000000","EEECE1","1F497D","4F818D","C0504D","9BBB59","8064A2","4BACC6","F79646"],e}();exports._xlsx=_xlsx;var _SyncPromise=function(){function e(e){this.value=e}return e.prototype.then=function(t,l){return new e(t?t(this.value):null)},e.prototype.catch=function(e){return this.then(null,e)},e.resolve=function(){return new e},e}(),_JsZipWrapper=function(){function e(e){this._obj=e}return e.prototype.loadAsync=function(){for(var e,t=[],l=0;l<arguments.length;l++)t[l]=arguments[l];var r=(e=this._obj).load.apply(e,t);return new _SyncPromise(this._wrapOrNull(r))},e.prototype.file=function(){for(var e,t=[],l=0;l<arguments.length;l++)t[l]=arguments[l];var r=(e=this._obj).file.apply(e,t);return this._wrapOrNull(r)},Object.defineProperty(e.prototype,"name",{get:function(){return this._obj.name},enumerable:!0,configurable:!0}),e.prototype.async=function(){for(var e,t=[],l=0;l<arguments.length;l++)t[l]=arguments[l];return e=t&&t.length>0&&"uint8array"===t[0].toLowerCase()?this._obj.asUint8Array():this._obj.asText(),new _SyncPromise(e)},e.prototype.folder=function(e){var t=this._obj.folder(e);return this._wrapOrNull(t)},e.prototype.forEach=function(t){var l=this._obj.root,r=l.length,o=this._obj.files;for(var s in o)s.length>r&&s.substr(0,r).toLowerCase()===l&&t(s.substr(r),new e(o[s]))},e.prototype._wrapOrNull=function(t){return null!=t?new e(t):null},e}();wijmo_1._registerModule("wijmo.xlsx",selfModule);

/***/ }),

/***/ "./src/app/wijmo/components/chart/chart.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/wijmo/components/chart/chart.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpam1vL2NvbXBvbmVudHMvY2hhcnQvY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/wijmo/components/chart/chart.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/wijmo/components/chart/chart.component.ts ***!
  \***********************************************************/
/*! exports provided: ChartComponent, ChartProperties, example, chartDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartProperties", function() { return ChartProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "example", function() { return example; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartDescriptor", function() { return chartDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");



var ChartComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChartComponent, _super);
    function ChartComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-chart',
            template: __webpack_require__(/*! raw-loader!./chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/wijmo/components/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.scss */ "./src/app/wijmo/components/chart/chart.component.scss")]
        })
    ], ChartComponent);
    return ChartComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["BaseUIComponent"]));

var ChartProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChartProperties, _super);
    function ChartProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Chart header',
            example: 'New chart'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChartProperties.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Chart X axis',
            example: 'propName',
            link: 'https://www.grapecity.com/wijmo/docs/Topics/Chart/Basic/Data-Binding#data-binding-in-flexchart'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChartProperties.prototype, "bindingX", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Selection in Chart',
            example: 'Point|Series|None',
            link: 'https://www.grapecity.com/wijmo/docs/Topics/Chart/Advanced/Selection'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChartProperties.prototype, "selectionMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Legend position',
            example: 'Bottom',
            link: 'https://www.grapecity.com/wijmo/docs/Topics/Chart/Advanced/Legend-Titles#setting-the-legend-title-position'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChartProperties.prototype, "legendPosition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Chart series',
            example: '[{name: "Name", binding: "propName"}]',
            link: 'https://www.grapecity.com/wijmo/docs/Topics/Chart/Advanced/Legend-Titles#setting-the-legend-title-position'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ChartProperties.prototype, "series", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'ChartType Enumeration',
            example: '5',
            link: 'https://www.grapecity.com/wijmo/api/enums/wijmo_chart.charttype.html'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ChartProperties.prototype, "chartType", void 0);
    return ChartProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["DataModelProperties"]));

var example = {
    title: 'Chart example',
    uiModel: {
        type: 'wijmo:chart',
        containerProperties: {},
        itemProperties: {
            dataModelPath: '$.chartData',
            header: 'Countries',
            bindingX: 'country',
            selectionMode: 'Point',
            legendPosition: 'Bottom',
            series: [{ name: '2014', binding: '2014' }, { name: '2015', binding: '2015' }, { name: '2016', binding: '2016' }]
        }
    },
    dataModel: {
        chartData: [
            { country: 'United States', '2014': 17348075, '2015': 18036650, '2016': 18624450 },
            { country: 'China', '2014': 10356508, '2015': 11181556, '2016': 11232110 },
            { country: 'Japan', '2014': 4602367, '2015': 4124211, '2016': 4936540 },
            { country: 'Germany', '2014': 3874437, '2015': 3365293, '2016': 3479230 },
            { country: 'United Kingdom', '2014': 2950039, '2015': 2858482, '2016': 2629190 },
            { country: 'France', '2014': 2833687, '2015': 2420163, '2016': 2466470 },
            { country: 'India', '2014': 2051228, '2015': 2073002, '2016': 2263790 },
            { country: 'Italy', '2014': 2147744, '2015': 1815759, '2016': 1850740 }
        ]
    }
};
var chartDescriptor = {
    name: 'chart',
    packageName: 'wijmo',
    label: 'Chart',
    category: "Data" /* Data */,
    description: 'Chart component',
    itemProperties: ChartProperties,
    component: ChartComponent,
    example: example,
    propertiesDescriptor: [
        ['chartType', { name: 'chartType', label: 'Type', category: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["PropertyCategories"].Main,
                combo: [[
                        { label: 'Area', value: 5 },
                        { label: 'Bar', value: 1 },
                        { label: 'Bubble', value: 6 },
                        { label: 'Candlestick', value: 7 },
                        { label: 'Column', value: 0 },
                        { label: 'Funnel', value: 12 },
                        { label: 'HighLowOpenClose', value: 8 },
                        { label: 'Line', value: 3 },
                        { label: 'LineSymbols', value: 4 },
                        { label: 'Scatter', value: 2 },
                        { label: 'Spline', value: 9 },
                        { label: 'SplineArea', value: 11 },
                        { label: 'SplineSymbols', value: 10 }
                    ]]
            }]
    ]
};


/***/ }),

/***/ "./src/app/wijmo/components/column-editor/column-editor.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/wijmo/components/column-editor/column-editor.component.ts ***!
  \***************************************************************************/
/*! exports provided: ColumnEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnEditorComponent", function() { return ColumnEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__);




var ColumnEditorComponent = /** @class */ (function () {
    function ColumnEditorComponent() {
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.columnInfo = {
            headerText: null,
            width: null,
            dataType: wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["DataType"].String,
            displayFormat: null,
            bindingName: null
        };
        this.dataTypes = [
            { label: 'String', value: wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["DataType"].String },
            { label: 'Number', value: wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["DataType"].Number },
            { label: 'Date', value: wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["DataType"].Date },
            { label: 'Boolean', value: wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["DataType"].Boolean }
        ];
        this.dateFormats = [
            { label: '(dd/MM/yyyy) 24/08/2015', value: 'dd/MM/yyyy' },
            { label: '(MM/dd/yyyy) 08/24/2015', value: 'MM/dd/yyyy' },
            { label: '(yyyy-MM-dd) 2015-08-24', value: 'yyyy-MM-dd' },
            { label: '(dd/MMM/yyyy) 24/Aug/2015', value: 'dd/MMM/yyyy' },
            { label: '(MMM/dd/yyyy) Aug/24/2015', value: 'MMM/dd/yyyy' },
            { label: '(dd/MM/yyyy HH:mm:ss) 24/08/2015 15:28:22', value: 'dd/MM/yyyy HH:mm:ss' },
            { label: '(MM/dd/yyyy HH:mm:ss) 08/24/2015 15:28:22', value: 'MM/dd/yyyy HH:mm:ss' },
            { label: '(yyyy-MM-dd HH:mm:ss) 2015-08-24 15:28:22', value: 'yyyy-MM-dd HH:mm:ss' },
            { label: '(dd/MMM/yyyy HH:mm:ss) 24/Aug/2015 15:28:22', value: 'dd/MMM/yyyy HH:mm:ss' },
            { label: '(MMM/dd/yyyy HH:mm:ss) Aug/24/2015 15:28:22', value: 'MMM/dd/yyyy HH:mm:ss' }
        ];
        this.numberFormats = [
            { label: '12,345', value: 'n0' },
            { label: '12,345.6', value: 'n1' },
            { label: '12,345.67', value: 'n2' },
            { label: '12,345.689', value: 'n3' },
            { label: '12,345.6891', value: 'n4' },
            { label: '12345', value: 'f0' },
            { label: '1234.1', value: 'g1' },
            { label: '1234.12', value: 'g2' },
            { label: '1234.123', value: 'g3' },
            { label: '1234.1234', value: 'g4' },
            { label: '1234.12345', value: 'g5' },
            { label: '1234.123456', value: 'g6' },
        ];
    }
    ColumnEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object.keys(this.columnInfo).forEach(function (key) {
            if (key === 'dataType') {
                _this.columnInfo[key] = Number(_this.config[0][key]);
            }
            else if (key === 'bindingName') {
                _this.columnInfo[key] = _this.config.map(function (c) { return c.bindingName; }).join(', ');
            }
            else {
                _this.columnInfo[key] = _this.config[0][key];
            }
        });
    };
    ColumnEditorComponent.prototype.saveColumn = function () {
        var _this = this;
        this.save.emit(this.config.map(function (v, i) {
            var ci = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.columnInfo, { bindingName: v.bindingName });
            if (i !== 0) {
                delete ci.headerText;
            }
            return ci;
        }));
        this.modalRef.hide();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ColumnEditorComponent.prototype, "save", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ColumnEditorComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ColumnEditorComponent.prototype, "modalRef", void 0);
    ColumnEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-column-editor',
            template: __webpack_require__(/*! raw-loader!./column-editor.component.html */ "./node_modules/raw-loader/index.js!./src/app/wijmo/components/column-editor/column-editor.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColumnEditorComponent);
    return ColumnEditorComponent;
}());



/***/ }),

/***/ "./src/app/wijmo/components/data-grid/data-grid.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/wijmo/components/data-grid/data-grid.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.data-grid {\n  height: calc(100% - 25px);\n}\n\n.data-grid app-filter {\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n}\n\n.data-grid ::ng-deep .wj-cell.wj-header > div {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  max-height: 50px;\n}\n\n.applied-filters-list {\n  list-style-type: none;\n}\n\n.text-normal {\n  white-space: normal;\n  word-break: break-word;\n  width: 100%;\n  padding-right: 5px;\n  max-height: 50px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: center;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC93aWptby9jb21wb25lbnRzL2RhdGEtZ3JpZC9kYXRhLWdyaWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dpam1vL2NvbXBvbmVudHMvZGF0YS1ncmlkL2RhdGEtZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURDRTtFQUNFLDRCQUFBO1VBQUEsUUFBQTtBQ0NKOztBREVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtBQ0FKOztBRElBO0VBQ0UscUJBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvd2lqbW8vY29tcG9uZW50cy9kYXRhLWdyaWQvZGF0YS1ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZGF0YS1ncmlkIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNXB4KTtcblxuICBhcHAtZmlsdGVyIHtcbiAgICBvcmRlcjogMTtcbiAgfVxuXG4gIDo6bmctZGVlcCAud2otY2VsbC53ai1oZWFkZXIgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LWhlaWdodDogNTBweDtcbiAgfVxufVxuXG4uYXBwbGllZC1maWx0ZXJzLWxpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi50ZXh0LW5vcm1hbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG4iLCI6aG9zdCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5kYXRhLWdyaWQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDI1cHgpO1xufVxuLmRhdGEtZ3JpZCBhcHAtZmlsdGVyIHtcbiAgb3JkZXI6IDE7XG59XG4uZGF0YS1ncmlkIDo6bmctZGVlcCAud2otY2VsbC53ai1oZWFkZXIgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG59XG5cbi5hcHBsaWVkLWZpbHRlcnMtbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnRleHQtbm9ybWFsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgbWF4LWhlaWdodDogNTBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/wijmo/components/data-grid/data-grid.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/wijmo/components/data-grid/data-grid.component.ts ***!
  \*******************************************************************/
/*! exports provided: DataGridComponent, DataGridProperties, example, dataGridDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGridComponent", function() { return DataGridComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGridProperties", function() { return DataGridProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "example", function() { return example; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataGridDescriptor", function() { return dataGridDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grid_object_explorer_grid_object_explorer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grid-object-explorer/grid-object-explorer.component */ "./src/app/wijmo/components/grid-object-explorer/grid-object-explorer.component.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./src/app/wijmo/utils/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models */ "./src/app/wijmo/models.ts");
/* harmony import */ var wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wijmo/wijmo.grid */ "./node_modules/wijmo/wijmo.grid.js");
/* harmony import */ var wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_shared_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/models */ "./src/app/shared/models/index.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _column_editor_column_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../column-editor/column-editor.component */ "./src/app/wijmo/components/column-editor/column-editor.component.ts");
/* harmony import */ var _grid_object_explorer_grid_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../grid-object-explorer/grid-config */ "./src/app/wijmo/components/grid-object-explorer/grid-config.ts");














var DataGridComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DataGridComponent, _super);
    function DataGridComponent(fileService, dialogService, sqlService) {
        var _this = _super.call(this, fileService, dialogService) || this;
        _this.fileService = fileService;
        _this.dialogService = dialogService;
        _this.sqlService = sqlService;
        _this.data = [];
        _this.loading = true;
        _this.filters = {};
        return _this;
    }
    Object.defineProperty(DataGridComponent.prototype, "properties", {
        get: function () {
            return this.uiModel.itemProperties;
        },
        enumerable: true,
        configurable: true
    });
    DataGridComponent.prototype.saveData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var connection;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        connection = this.properties.source.connection;
                        return [4 /*yield*/, this.sqlService.saveSqlObjectData(connection, this.dataObject, { tableData: Object(src_app_shared__WEBPACK_IMPORTED_MODULE_10__["mapValuesToTable"])(this.changedData) }).toPromise()];
                    case 1:
                        _a.sent();
                        this.loadData();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataGridComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, connection, owner, name, key;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.properties.source) {
                            return [2 /*return*/];
                        }
                        _a = this.properties.source, connection = _a.connection, owner = _a.owner, name = _a.name;
                        this.dataObject = {
                            objectOwner: owner,
                            objectName: name
                        };
                        key = connection + "-" + owner + "-" + name;
                        this.localGridConfig = new _grid_object_explorer_grid_config__WEBPACK_IMPORTED_MODULE_13__["GrigConfig"](key, this.uiModel.id || 'object-explorer');
                        this.flex = _models__WEBPACK_IMPORTED_MODULE_7__["GridUIState"].show;
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataGridComponent.prototype.getColumns = function (data) {
        var _this = this;
        if (this.properties.columns && Array.isArray(this.properties.columns)) {
            return this.properties.columns.map(function (c) {
                if (!c.headerText) {
                    c.headerText = _this.getColumnHeader(c.bindingName);
                }
                c.dataType = _this.getColumnType(c.bindingName) || wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["DataType"][c.dataType];
                c.width = _this.getColumnWidth(c.bindingName) || c.width;
                if ([wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["DataType"].Date, wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["DataType"].Number].includes(c.dataType)) {
                    c.displayFormat = _this.getColumnDisplayFormat(c.bindingName) || c.displayFormat;
                }
                else {
                    c.displayFormat = null;
                }
                return c;
            });
        }
        return _super.prototype.getColumns.call(this, data);
    };
    DataGridComponent.prototype.getQueryParams = function (item) {
        var _a;
        return _a = {}, _a[this.properties.details.idField] = item[this.properties.details.idField], _a;
    };
    DataGridComponent.prototype.loadData = function () {
        var _this = this;
        this.loading = true;
        var _a = this.properties.source, connection = _a.connection, owner = _a.owner, name = _a.name;
        var query = this.properties.source.query;
        var selectBody = {};
        var filters = Object(src_app_shared__WEBPACK_IMPORTED_MODULE_10__["getFilters"])(this.filters) || [];
        if (query) {
            if (query.filters) {
                filters = filters.concat(query.filters);
            }
            selectBody = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, query, { filters: filters });
        }
        this.sqlService.selectSqlObjectData(connection, owner, name, selectBody).subscribe(function (res) {
            _this.changedData = null;
            if (Array.isArray(_this.properties.columns)) {
                res.dataTypes = _this.properties.columns.map(function (c) { return src_app_shared_models__WEBPACK_IMPORTED_MODULE_9__["WijmoMapToSqlTypes"][c.dataType] || null; });
            }
            _this.renderData(Object(src_app_shared__WEBPACK_IMPORTED_MODULE_10__["mapTableToValues"])(res));
            _this.loading = false;
        });
    };
    Object.defineProperty(DataGridComponent.prototype, "defaultFilters", {
        get: function () {
            var query = this.properties.source.query;
            return query && query.filters;
        },
        enumerable: true,
        configurable: true
    });
    DataGridComponent.prototype.onCtxMenuClicked = function (menu) {
        switch (menu.value) {
            case 'edit-column':
                this.editColumn();
                break;
            case 'fill-all':
                this.fillRows('all');
                break;
            case 'fill-empty':
                this.fillRows('empty');
                break;
        }
    };
    DataGridComponent.prototype.onFiltersChange = function (filters) {
        this.filters = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, filters);
        this.loadData();
    };
    DataGridComponent.prototype.onApply = function (evt, field) {
        var _a;
        this.filters = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.filters, (_a = {}, _a[field.bindingName] = evt, _a));
        this.loadData();
    };
    Object.defineProperty(DataGridComponent.prototype, "filtersList", {
        get: function () {
            var _this = this;
            return Object.entries(this.filters).filter(function (_a) {
                var fieldName = _a[0], value = _a[1];
                return Boolean(value);
            }).map(function (_a) {
                var fieldName = _a[0], value = _a[1];
                return {
                    fieldName: fieldName, value: value.map(function (v) {
                        var type = _this.localGridConfig.getColumn(fieldName).dataType;
                        if (type === wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["DataType"].Date) {
                            var displayFormat = _this.localGridConfig.getColumn(fieldName).displayFormat;
                            return Object(src_app_shared__WEBPACK_IMPORTED_MODULE_10__["formatWijmoDate"])(v, displayFormat);
                        }
                        if (v instanceof Date) {
                            return Object(src_app_shared__WEBPACK_IMPORTED_MODULE_10__["dateToDtoString"])(v);
                        }
                        if (v === null) {
                            return '[NULL]';
                        }
                        return v;
                    }).join(', ')
                };
            });
        },
        enumerable: true,
        configurable: true
    });
    DataGridComponent.prototype.editColumn = function () {
        var _this = this;
        var columnEditDialog = this.dialogService.open(_column_editor_column_editor_component__WEBPACK_IMPORTED_MODULE_12__["ColumnEditorComponent"], { class: 'modal-lg' });
        var columnInfo = this.columnToEdit;
        columnEditDialog.config = [columnInfo];
        columnEditDialog.init.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function () { return columnEditDialog.component.save; })).subscribe(function (columns) {
            columns.forEach(function (c) {
                _this.localGridConfig.saveColumn(c.bindingName, c);
            });
            var column = columns[0];
            var index = _this.columnsList.findIndex(function (f) { return f.bindingName === column.bindingName; });
            _this.columnsList.splice(index, 1, column);
        });
    };
    DataGridComponent.prototype.fillRows = function (key) {
        var _this = this;
        var isUpdated = false;
        this.grid.collectionView.sourceCollection.forEach(function (item) {
            var binding = _this.columnToEdit.bindingName;
            var oldVal = item[binding];
            if (_this.updateCondition(oldVal, key)) {
                item[binding] = _this.contextMenuValue;
                _this.gridContext.setEditValue(item, binding, oldVal, _this.contextMenuValue);
                isUpdated = true;
            }
        });
        if (isUpdated) {
            this.grid.refresh(true);
            this.changeHandler();
        }
    };
    DataGridComponent.prototype.updateCondition = function (oldVal, key) {
        switch (key) {
            case 'all': return oldVal !== this.contextMenuValue;
            case 'empty': return [null, undefined, ''].includes(oldVal);
            default: return true;
        }
    };
    DataGridComponent.prototype.initializedGrid = function (grid) {
        var _this = this;
        this.gridContext = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["initChangesHighlight"])(grid);
        grid.cellEditEnded.addHandler(function () { return _this.changeHandler(); });
        grid.deletedRow.addHandler(function () { return _this.changeHandler(); });
        grid.addEventListener(grid.hostElement, 'contextmenu', function (e) {
            var ht = grid.hitTest(e);
            _this.columnToEdit = _this.columnsList.find(function (v, i) { return ht.col === i; });
            var val = _this.grid.collectionView.items[ht.row][_this.columnToEdit.bindingName];
            _this.contextMenuValue = val;
        });
        var sItemsFormatter = grid.itemFormatter;
        grid.itemFormatter = function (panel, r, c, cell) {
            sItemsFormatter(panel, r, c, cell);
            var binding = panel.columns[c].binding;
            if (panel.cellType === wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_8__["CellType"].ColumnHeader && cell.firstChild instanceof HTMLElement) {
                var sortSpan = cell.firstChild.querySelector('#sort-icon');
                if (sortSpan) {
                    cell.firstChild.removeChild(sortSpan);
                }
                var sortState = grid.collectionView.sortDescriptions[0];
                if (sortState && sortState.property === binding) {
                    var span = document.createElement('SPAN');
                    span.id = 'sort-icon';
                    if (sortState.ascending) {
                        span.className = 'wj-glyph-up';
                    }
                    else {
                        span.className = 'wj-glyph-down';
                    }
                    cell.firstChild.appendChild(span);
                }
            }
        };
        grid.sortingColumn.addHandler(function (s, e) {
            if (e.data.target.classList.contains('fa-filter')) {
                e.cancel = true;
            }
        });
        grid.resizingColumn.addHandler(function (s, evt) {
            if (_this.localGridConfig) {
                _this.localGridConfig.saveColumn(grid.columns[evt.col].binding, {
                    width: grid.columns[evt.col].renderWidth
                });
            }
        });
    };
    DataGridComponent.prototype.changeHandler = function () {
        var _a = this.gridContext.state, added = _a.added, edited = _a.edited;
        var data = [];
        if (edited) {
            data = data.concat(edited);
        }
        if (added) {
            data = data.concat(added);
        }
        this.changedData = data;
    };
    DataGridComponent.ctorParameters = function () { return [
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__["FileManagerService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__["DialogService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__["SqlDbService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["UIModel"])
    ], DataGridComponent.prototype, "uiModel", void 0);
    DataGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-data-grid',
            template: __webpack_require__(/*! raw-loader!./data-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/wijmo/components/data-grid/data-grid.component.html"),
            styles: [__webpack_require__(/*! ./data-grid.component.scss */ "./src/app/wijmo/components/data-grid/data-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__["FileManagerService"], src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__["DialogService"], src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__["SqlDbService"]])
    ], DataGridComponent);
    return DataGridComponent;
}(_grid_object_explorer_grid_object_explorer_component__WEBPACK_IMPORTED_MODULE_3__["GridObjectExplorerComponent"]));

var DataGridProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DataGridProperties, _super);
    function DataGridProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'Source',
            example: '{connection: "conectionName", owner: "OwnerName", name: "TableName"}',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataGridProperties.prototype, "source", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'Specifies list of columns to display.',
            example: "[{\n      headerText: 'Header title',\n      bindingName: 'propName',\n      dataType: 'Number'\n    }]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DataGridProperties.prototype, "columns", void 0);
    return DataGridProperties;
}(_grid_object_explorer_grid_object_explorer_component__WEBPACK_IMPORTED_MODULE_3__["GridObjectExplorerProperties"]));

var example = {
    title: 'Grid example',
    uiModel: {
        type: 'wijmo:grid',
        containerProperties: {
            width: '100%'
        },
        itemProperties: {
            source: {
                connection: 'sql-query',
                owner: 'test1',
                name: 'table1'
            }
        }
    },
    dataModel: null
};
var dataGridDescriptor = {
    name: 'data-grid',
    packageName: 'wijmo',
    label: 'Data grid',
    category: "Data table" /* DataTable */,
    description: 'Data Grid component',
    itemProperties: DataGridProperties,
    component: DataGridComponent,
    example: example
};


/***/ }),

/***/ "./src/app/wijmo/components/grid-object-explorer/grid-config.ts":
/*!**********************************************************************!*\
  !*** ./src/app/wijmo/components/grid-object-explorer/grid-config.ts ***!
  \**********************************************************************/
/*! exports provided: GrigConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrigConfig", function() { return GrigConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");


var GrigConfig = /** @class */ (function () {
    function GrigConfig(dataKey, gridId) {
        this.dataKey = dataKey;
        this.gridId = gridId;
        this.initConfig();
    }
    GrigConfig.prototype.getColumn = function (binding, path) {
        if (path === void 0) { path = 'root'; }
        if (this.gridConfig[path] && this.gridConfig[path][binding]) {
            var column = this.gridConfig[path][binding];
            return {
                header: column.headerText || Object(src_app_shared__WEBPACK_IMPORTED_MODULE_1__["formatCamelStr"])(binding),
                width: column.width,
                dataType: column.dataType ? Number(column.dataType) : null,
                displayFormat: column.displayFormat || null
            };
        }
        return {
            header: Object(src_app_shared__WEBPACK_IMPORTED_MODULE_1__["formatCamelStr"])(binding),
            dataType: null
        };
    };
    GrigConfig.prototype.saveColumn = function (binding, config, path) {
        var _a, _b;
        if (path === void 0) { path = 'root'; }
        if (this.gridConfig[path]) {
            this.gridConfig[path][binding] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.gridConfig[path][binding], config);
        }
        else {
            this.gridConfig[path] = (_a = {}, _a[binding] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, config), _a);
        }
        var gridConfigs = this.getConfigs();
        if (!gridConfigs[this.dataKey]) {
            gridConfigs[this.dataKey] = (_b = {},
                _b[this.gridId] = this.gridConfig,
                _b);
        }
        else {
            gridConfigs[this.dataKey][this.gridId] = this.gridConfig;
        }
        localStorage.setItem('grid-configs', JSON.stringify(gridConfigs));
    };
    GrigConfig.prototype.initConfig = function () {
        var _a;
        var gridConfigs = this.getConfigs();
        if (!gridConfigs[this.dataKey]) {
            gridConfigs[this.dataKey] = (_a = {},
                _a[this.gridId] = {},
                _a);
        }
        else {
            var config = gridConfigs[this.dataKey][this.gridId];
            if (!config) {
                gridConfigs[this.dataKey][this.gridId] = {};
            }
        }
        this.gridConfig = gridConfigs[this.dataKey][this.gridId];
    };
    GrigConfig.prototype.getConfigs = function () {
        var savedData = localStorage.getItem('grid-configs');
        var gridConfigs = {};
        if (savedData) {
            try {
                gridConfigs = JSON.parse(savedData) || {};
            }
            catch (e) {
                gridConfigs = {};
            }
        }
        return gridConfigs;
    };
    GrigConfig.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return GrigConfig;
}());



/***/ }),

/***/ "./src/app/wijmo/components/grid-object-explorer/grid-object-explorer.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/wijmo/components/grid-object-explorer/grid-object-explorer.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ol li.breadcrumb-item:not(:last-child) a,\na.object-type,\na.object-type:hover {\n  color: #20a8d8;\n  cursor: pointer;\n}\n\na.object-type, .value-type {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  display: block;\n}\n\n.export-menu {\n  left: auto !important;\n  right: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC93aWptby9jb21wb25lbnRzL2dyaWQtb2JqZWN0LWV4cGxvcmVyL2dyaWQtb2JqZWN0LWV4cGxvcmVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdmt1a3VyYmEvRGV2ZWxvcG1lbnQvUHJvamVjdHMvdXB3b3JrL3dvcmtzaGVldHMyLWFwcC9zcmMvc3R5bGVzL2NvcmV1aS92YXJpYWJsZXMvX2NvbG9ycy5zY3NzIiwic3JjL2FwcC93aWptby9jb21wb25lbnRzL2dyaWQtb2JqZWN0LWV4cGxvcmVyL2dyaWQtb2JqZWN0LWV4cGxvcmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOzs7RUFHRSxjQzJCVztFRDFCWCxlQUFBO0FFREY7O0FGSUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FFREY7O0FGSUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FFREYiLCJmaWxlIjoic3JjL2FwcC93aWptby9jb21wb25lbnRzL2dyaWQtb2JqZWN0LWV4cGxvcmVyL2dyaWQtb2JqZWN0LWV4cGxvcmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zdHlsZXMvY29yZXVpL3ZhcmlhYmxlcy9fY29sb3JzLnNjc3NcIjtcblxub2wgbGkuYnJlYWRjcnVtYi1pdGVtOm5vdCg6bGFzdC1jaGlsZCkgYSxcbmEub2JqZWN0LXR5cGUsXG5hLm9iamVjdC10eXBlOmhvdmVyIHtcbiAgY29sb3I6ICRwcmltYXJ5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmEub2JqZWN0LXR5cGUsIC52YWx1ZS10eXBlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZXhwb3J0LW1lbnUge1xuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG4iLCIvLyBDb2xvciBzeXN0ZW1cclxuLy8gc3R5bGVsaW50LWRpc2FibGVcclxuXHJcbiR3aGl0ZTogICAgICNmZmYgIWRlZmF1bHQ7XHJcbiRncmF5LWJhc2U6ICMxODFiMWUgIWRlZmF1bHQ7XHJcbiRncmF5LTEwMDogICNmMGYzZjUgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgODUlKTtcclxuJGdyYXktMjAwOiAgI2U0ZTdlYSAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA4MCUpO1xyXG4kZ3JheS0zMDA6ICAjYzhjZWQzICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDcwJSk7XHJcbiRncmF5LTQwMDogICNhY2I0YmMgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgNjAlKTtcclxuJGdyYXktNTAwOiAgIzhmOWJhNiAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA1MCUpO1xyXG4kZ3JheS02MDA6ICAjNzM4MThmICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDQwJSk7XHJcbiRncmF5LTcwMDogICM1YzY4NzMgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMzAlKTtcclxuJGdyYXktODAwOiAgIzJmMzUzYSAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCAxMCUpO1xyXG4kZ3JheS05MDA6ICAjMjMyODJjICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDUlKTtcclxuJGJsYWNrOiAgICAgIzAwMCAhZGVmYXVsdDtcclxuXHJcbiRncmF5czogKCkgIWRlZmF1bHQ7XHJcbiRncmF5czogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcclxuICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcclxuICAgIFwiMzAwXCI6ICRncmF5LTMwMCxcclxuICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcclxuICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcclxuICAgIFwiNjAwXCI6ICRncmF5LTYwMCxcclxuICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcclxuICAgIFwiODAwXCI6ICRncmF5LTgwMCxcclxuICAgIFwiOTAwXCI6ICRncmF5LTkwMFxyXG4gICksXHJcbiAgJGdyYXlzXHJcbik7XHJcblxyXG4kYmx1ZTogICAgICAgIzIwYThkOCAhZGVmYXVsdDtcclxuJGluZGlnbzogICAgICM2NjEwZjIgIWRlZmF1bHQ7XHJcbiRwdXJwbGU6ICAgICAjNmY0MmMxICFkZWZhdWx0O1xyXG4kcGluazogICAgICAgI2U4M2U4YyAhZGVmYXVsdDtcclxuJHJlZDogICAgICAgICNmODZjNmIgIWRlZmF1bHQ7XHJcbiRvcmFuZ2U6ICAgICAjZjhjYjAwICFkZWZhdWx0O1xyXG4keWVsbG93OiAgICAgI2ZmYzEwNyAhZGVmYXVsdDtcclxuJGdyZWVuOiAgICAgICM0ZGJkNzQgIWRlZmF1bHQ7XHJcbiR0ZWFsOiAgICAgICAjMjBjOTk3ICFkZWZhdWx0O1xyXG4kY3lhbjogICAgICAgIzE3YTJiOCAhZGVmYXVsdDtcclxuJGxpZ2h0LWJsdWU6ICM2M2MyZGUgIWRlZmF1bHQ7XHJcblxyXG4kY29sb3JzOiAoKSAhZGVmYXVsdDtcclxuJGNvbG9yczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIFwiYmx1ZVwiOiAgICAgICAkYmx1ZSxcclxuICAgIFwiaW5kaWdvXCI6ICAgICAkaW5kaWdvLFxyXG4gICAgXCJwdXJwbGVcIjogICAgICRwdXJwbGUsXHJcbiAgICBcInBpbmtcIjogICAgICAgJHBpbmssXHJcbiAgICBcInJlZFwiOiAgICAgICAgJHJlZCxcclxuICAgIFwib3JhbmdlXCI6ICAgICAkb3JhbmdlLFxyXG4gICAgXCJ5ZWxsb3dcIjogICAgICR5ZWxsb3csXHJcbiAgICBcImdyZWVuXCI6ICAgICAgJGdyZWVuLFxyXG4gICAgXCJ0ZWFsXCI6ICAgICAgICR0ZWFsLFxyXG4gICAgXCJjeWFuXCI6ICAgICAgICRjeWFuLFxyXG4gICAgXCJsaWdodC1ibHVlXCI6ICRsaWdodC1ibHVlLFxyXG4gICAgXCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSxcclxuICAgIFwiZ3JheVwiOiAgICAgICAkZ3JheS02MDAsXHJcbiAgICBcImdyYXktZGFya1wiOiAgJGdyYXktODAwXHJcbiAgKSxcclxuICAkY29sb3JzXHJcbik7XHJcblxyXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XHJcbiRzZWNvbmRhcnk6ICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzOiAgICAgICAkZ3JlZW4gIWRlZmF1bHQ7XHJcbiRpbmZvOiAgICAgICAgICAkbGlnaHQtYmx1ZSAhZGVmYXVsdDtcclxuJHdhcm5pbmc6ICAgICAgICR5ZWxsb3cgIWRlZmF1bHQ7XHJcbiRkYW5nZXI6ICAgICAgICAkcmVkICFkZWZhdWx0O1xyXG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xyXG4kZGFyazogICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xyXG5cclxuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XHJcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICBcInByaW1hcnlcIjogICAgJHByaW1hcnksXHJcbiAgICBcInNlY29uZGFyeVwiOiAgJHNlY29uZGFyeSxcclxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcclxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcclxuICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcclxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxyXG4gICAgXCJsaWdodFwiOiAgICAgICRsaWdodCxcclxuICAgIFwiZGFya1wiOiAgICAgICAkZGFya1xyXG4gICksXHJcbiAgJHRoZW1lLWNvbG9yc1xyXG4pO1xyXG5cclxuLy8gQnJhbmQgQ29sb3JzXHJcblxyXG4kZmFjZWJvb2s6ICAgICAgICMzYjU5OTggIWRlZmF1bHQ7XHJcbiR0d2l0dGVyOiAgICAgICAgIzAwYWNlZCAhZGVmYXVsdDtcclxuJGxpbmtlZGluOiAgICAgICAjNDg3NWI0ICFkZWZhdWx0O1xyXG4kZ29vZ2xlLXBsdXM6ICAgICNkMzQ4MzYgIWRlZmF1bHQ7XHJcbiRmbGlja3I6ICAgICAgICAgI2ZmMDA4NCAhZGVmYXVsdDtcclxuJHR1bWJscjogICAgICAgICAjMzI1MDZkICFkZWZhdWx0O1xyXG4keGluZzogICAgICAgICAgICMwMjY0NjYgIWRlZmF1bHQ7XHJcbiRnaXRodWI6ICAgICAgICAgIzQxODNjNCAhZGVmYXVsdDtcclxuJGh0bWw1OiAgICAgICAgICAjZTM0ZjI2ICFkZWZhdWx0O1xyXG4kb3BlbmlkOiAgICAgICAgICNmNzhjNDAgIWRlZmF1bHQ7XHJcbiRzdGFjay1vdmVyZmxvdzogI2ZlN2ExNSAhZGVmYXVsdDtcclxuJHlvdXR1YmU6ICAgICAgICAjYjAwICFkZWZhdWx0O1xyXG4kY3NzMzogICAgICAgICAgICMwMTcwYmEgIWRlZmF1bHQ7XHJcbiRkcmliYmJsZTogICAgICAgI2VhNGM4OSAhZGVmYXVsdDtcclxuJGdvb2dsZS1wbHVzOiAgICAjYmI0YjM5ICFkZWZhdWx0O1xyXG4kaW5zdGFncmFtOiAgICAgICM1MTdmYTQgIWRlZmF1bHQ7XHJcbiRwaW50ZXJlc3Q6ICAgICAgI2NiMjAyNyAhZGVmYXVsdDtcclxuJHZrOiAgICAgICAgICAgICAjNDU2NjhlICFkZWZhdWx0O1xyXG4keWFob286ICAgICAgICAgICM0MDAxOTEgIWRlZmF1bHQ7XHJcbiRiZWhhbmNlOiAgICAgICAgIzE3NjlmZiAhZGVmYXVsdDtcclxuJGRyb3Bib3g6ICAgICAgICAjMDA3ZWU1ICFkZWZhdWx0O1xyXG4kcmVkZGl0OiAgICAgICAgICNmZjQ1MDAgIWRlZmF1bHQ7XHJcbiRzcG90aWZ5OiAgICAgICAgIzdhYjgwMCAhZGVmYXVsdDtcclxuJHZpbmU6ICAgICAgICAgICAjMDBiZjhmICFkZWZhdWx0O1xyXG4kZm91cnNxdWFyZTogICAgICMxMDczYWYgIWRlZmF1bHQ7XHJcbiR2aW1lbzogICAgICAgICAgI2FhZDQ1MCAhZGVmYXVsdDtcclxuXHJcbiRicmFuZHMtY29sb3JzOiAoKSAhZGVmYXVsdDtcclxuJGJyYW5kcy1jb2xvcnM6IG1hcC1tZXJnZSgoXHJcbiAgXCJmYWNlYm9va1wiOiAgICAgICAkZmFjZWJvb2ssXHJcbiAgXCJ0d2l0dGVyXCI6ICAgICAgICAkdHdpdHRlcixcclxuICBcImxpbmtlZGluXCI6ICAgICAgICRsaW5rZWRpbixcclxuICBcImdvb2dsZS1wbHVzXCI6ICAgICRnb29nbGUtcGx1cyxcclxuICBcImZsaWNrclwiOiAgICAgICAgICRmbGlja3IsXHJcbiAgXCJ0dW1ibHJcIjogICAgICAgICAkdHVtYmxyLFxyXG4gIFwieGluZ1wiOiAgICAgICAgICAgJHhpbmcsXHJcbiAgXCJnaXRodWJcIjogICAgICAgICAkZ2l0aHViLFxyXG4gIFwiaHRtbDVcIjogICAgICAgICAgJGh0bWw1LFxyXG4gIFwib3BlbmlkXCI6ICAgICAgICAgJG9wZW5pZCxcclxuICBcInN0YWNrLW92ZXJmbG93XCI6ICRzdGFjay1vdmVyZmxvdyxcclxuICBcInlvdXR1YmVcIjogICAgICAgICR5b3V0dWJlLFxyXG4gIFwiY3NzM1wiOiAgICAgICAgICAgJGNzczMsXHJcbiAgXCJkcmliYmJsZVwiOiAgICAgICAkZHJpYmJibGUsXHJcbiAgXCJpbnN0YWdyYW1cIjogICAgICAkaW5zdGFncmFtLFxyXG4gIFwicGludGVyZXN0XCI6ICAgICAgJHBpbnRlcmVzdCxcclxuICBcInZrXCI6ICAgICAgICAgICAgICR2ayxcclxuICBcInlhaG9vXCI6ICAgICAgICAgICR5YWhvbyxcclxuICBcImJlaGFuY2VcIjogICAgICAgICRiZWhhbmNlLFxyXG4gIFwiZHJvcGJveFwiOiAgICAgICAgJGRyb3Bib3gsXHJcbiAgXCJyZWRkaXRcIjogICAgICAgICAkcmVkZGl0LFxyXG4gIFwic3BvdGlmeVwiOiAgICAgICAgJHNwb3RpZnksXHJcbiAgXCJ2aW5lXCI6ICAgICAgICAgICAkdmluZSxcclxuICBcImZvdXJzcXVhcmVcIjogICAgICRmb3Vyc3F1YXJlLFxyXG4gIFwidmltZW9cIjogICAgICAgICAgJHZpbWVvXHJcbiksICRicmFuZHMtY29sb3JzKTtcclxuIiwib2wgbGkuYnJlYWRjcnVtYi1pdGVtOm5vdCg6bGFzdC1jaGlsZCkgYSxcbmEub2JqZWN0LXR5cGUsXG5hLm9iamVjdC10eXBlOmhvdmVyIHtcbiAgY29sb3I6ICMyMGE4ZDg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYS5vYmplY3QtdHlwZSwgLnZhbHVlLXR5cGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5leHBvcnQtbWVudSB7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/wijmo/components/grid-object-explorer/grid-object-explorer.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/wijmo/components/grid-object-explorer/grid-object-explorer.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: GridObjectExplorerComponent, GridObjectExplorerProperties, example, gridObjectExplorerDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridObjectExplorerComponent", function() { return GridObjectExplorerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridObjectExplorerProperties", function() { return GridObjectExplorerProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "example", function() { return example; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridObjectExplorerDescriptor", function() { return gridObjectExplorerDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo.grid */ "./node_modules/wijmo/wijmo.grid.js");
/* harmony import */ var wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var wijmo_wijmo_grid_xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wijmo/wijmo.grid.xlsx */ "./node_modules/wijmo/wijmo.grid.xlsx.js");
/* harmony import */ var wijmo_wijmo_grid_xlsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_grid_xlsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models */ "./src/app/wijmo/models.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var src_app_shared_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/models */ "./src/app/shared/models/index.ts");
/* harmony import */ var _grid_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./grid-config */ "./src/app/wijmo/components/grid-object-explorer/grid-config.ts");
/* harmony import */ var _column_editor_column_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../column-editor/column-editor.component */ "./src/app/wijmo/components/column-editor/column-editor.component.ts");













var GridObjectExplorerComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GridObjectExplorerComponent, _super);
    function GridObjectExplorerComponent(fileService, dialogService) {
        var _this = _super.call(this) || this;
        _this.fileService = fileService;
        _this.dialogService = dialogService;
        _this.flex = _models__WEBPACK_IMPORTED_MODULE_7__["GridUIState"].hide;
        _this.viewData = {};
        _this.isVertical = true;
        _this.objectPath = [];
        _this.collectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["CollectionView"]();
        return _this;
    }
    Object.defineProperty(GridObjectExplorerComponent.prototype, "itemsSource", {
        get: function () {
            var _this = this;
            if (this.componentDataModel !== this.data) {
                this.data = this.componentDataModel;
                this.renderData(this.data);
                window.requestAnimationFrame(function () {
                    _this.grid.selectionMode = wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].CellRange;
                    _this.objectPath = [];
                    var state = _this.data ? _models__WEBPACK_IMPORTED_MODULE_7__["GridUIState"].show : _models__WEBPACK_IMPORTED_MODULE_7__["GridUIState"].hide;
                    if (_this.flex !== state) {
                        _this.flex = state;
                    }
                });
            }
            return this.collectionView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridObjectExplorerComponent.prototype, "fieldsCount", {
        get: function () {
            return this.collectionView.items.length;
        },
        enumerable: true,
        configurable: true
    });
    GridObjectExplorerComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.properties.isReadOnly === undefined) {
                            this.uiModel.itemProperties.isReadOnly = true;
                        }
                        this.gridIdentifier = this.properties.host;
                        if (this.gridIdentifier) {
                            this.localGridConfig = new _grid_config__WEBPACK_IMPORTED_MODULE_11__["GrigConfig"](this.gridIdentifier, this.uiModel.id || 'object-explorer');
                            this.grid.addEventListener(this.grid.hostElement, 'contextmenu', function (e) {
                                var ht = _this.grid.hitTest(e);
                                _this.columnsToEdit = _this.columnsList.filter(function (v, i) {
                                    var _a = _this.grid.selection, col2 = _a.col2, col = _a.col;
                                    if (col2 - col > 0) {
                                        return _this.grid.selection.col2 >= i && _this.grid.selection.col <= i || ht.col === i;
                                    }
                                    return _this.grid.selection.col >= i && _this.grid.selection.col2 <= i || ht.col === i;
                                });
                            });
                        }
                        this.grid.onCellEditEnded = function (e) {
                            var data = _this.data;
                            if (_this.isVertical) {
                                _this.objectPath.forEach(function (o) {
                                    data = data[o.path];
                                });
                                var item = _this.collectionView.sourceCollection[e.row];
                                // Delete if property name was changed
                                if (e.col === 0 && e.data !== item.fieldName) {
                                    delete data[e.data];
                                }
                                data[item.fieldName] = item.row0 === undefined ? '' : item.row0;
                            }
                            else {
                                var dataToSet = _this.collectionView.sourceCollection;
                                if (dataToSet.length && dataToSet[0].valueTypeKey) {
                                    dataToSet = dataToSet.map(function (v) { return v.valueTypeKey; });
                                }
                                _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_9__["JSONUtils"].setValue(_this.data, _this.getJSONUtilsPath(), dataToSet);
                            }
                            _this.changedDataModel.emit(_this.data);
                        };
                        this.grid.onDeletingRow = function (e) {
                            var data = _this.objectPath.reduce(function (prev, prop) {
                                return prev[prop.path];
                            }, _this.data);
                            if (_this.isVertical) {
                                _this.grid.selectedItems.forEach(function (i) {
                                    delete data[i.fieldName];
                                });
                            }
                            else {
                                data.splice(e.row, 1);
                            }
                            _this.changedDataModel.emit(_this.data);
                            return true;
                        };
                        return [4 /*yield*/, _super.prototype.ngOnInit.call(this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GridObjectExplorerComponent.prototype.renderData = function (data) {
        var _this = this;
        var value = data;
        if (!data) {
            value = [];
        }
        if (!Array.isArray(value)) {
            this.isVertical = true;
            this.columnsList = this.getVerticalColumns();
            value = this.formatToArray(value);
        }
        else {
            this.isVertical = false;
            this.columnsList = this.getColumns(value);
            value = this.formatData(value);
        }
        this.grid.selectionMode = wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].None;
        this.viewData = data;
        this.collectionView.sourceCollection = value;
        window.requestAnimationFrame(function () {
            _this.grid.selectionMode = wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].CellRange;
        });
    };
    GridObjectExplorerComponent.prototype.onDataSelect = function (item, column) {
        var data = item[column.bindingName];
        if (data && typeof data === 'object') {
            if (!this.isVertical) {
                this.objectPath.push({
                    path: this.collectionView._idx,
                    dataItem: this.grid.selectedRows[0]
                });
            }
            this.objectPath.push({
                path: this.isVertical ? item.fieldName : column.bindingName,
                dataItem: this.grid.selectedRows[0].dataItem
            });
            this.renderData(data);
        }
    };
    GridObjectExplorerComponent.prototype.onResizedColumn = function (evt) {
        if (this.localGridConfig) {
            this.localGridConfig.saveColumn(this.grid.columns[evt.col].binding, {
                width: this.grid.columns[evt.col].renderWidth
            }, this.getPathStr());
        }
    };
    GridObjectExplorerComponent.prototype.onCtxMenuClicked = function (menu) {
        var _this = this;
        if (!this.localGridConfig) {
            alert('Add host item property to UIModel');
        }
        else {
            var columnEditDialog_1 = this.dialogService.open(_column_editor_column_editor_component__WEBPACK_IMPORTED_MODULE_12__["ColumnEditorComponent"], { class: 'modal-lg' });
            columnEditDialog_1.config = this.columnsToEdit;
            columnEditDialog_1.init.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return columnEditDialog_1.component.save; })).subscribe(function (columns) {
                columns.forEach(function (column) {
                    _this.localGridConfig.saveColumn(column.bindingName, column, _this.getPathStr());
                });
                _this.renderData(_this.viewData);
            });
        }
    };
    GridObjectExplorerComponent.prototype.getDefaultHeader = function (column) {
        return Object(src_app_shared__WEBPACK_IMPORTED_MODULE_6__["formatCamelStr"])(column.bindingName);
    };
    GridObjectExplorerComponent.prototype.getColumns = function (data) {
        var _this = this;
        if (data === void 0) { data = []; }
        if (data.length) {
            var item = data.reduce(function (prev, el) {
                if (typeof el === 'object') {
                    Object.assign(prev, el);
                }
                else {
                    Object.assign(prev, { valueTypeKey: el });
                }
                return prev;
            }, {});
            return Object.keys(item).map(function (prop) {
                if (prop === 'valueTypeKey') {
                    return {
                        headerText: 'Value',
                        bindingName: 'valueTypeKey'
                    };
                }
                return {
                    headerText: _this.getColumnHeader(prop) || prop,
                    bindingName: prop,
                    width: _this.getColumnWidth(prop),
                    dataType: _this.getColumnType(prop),
                    displayFormat: _this.getColumnDisplayFormat(prop)
                };
            });
        }
    };
    GridObjectExplorerComponent.prototype.getVerticalColumns = function () {
        return [{
                headerText: this.getColumnHeader('fieldName'),
                bindingName: 'fieldName',
                width: this.getColumnWidth('fieldName', 220),
                dataType: this.getColumnType('fieldName'),
                displayFormat: this.getColumnDisplayFormat('fieldName')
            }, {
                headerText: 'Field Value',
                bindingName: 'row0',
                width: this.getColumnWidth('row0', '*'),
                dataType: this.getColumnType('row0') || wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["DataType"].String,
                displayFormat: this.getColumnDisplayFormat('row0')
            }];
    };
    GridObjectExplorerComponent.prototype.selectPath = function (index) {
        this.objectPath = this.objectPath.slice(0, index + 1);
        var data = this.objectPath.reduce(function (prev, prop) {
            return prev[prop.path];
        }, this.data);
        if (!data) {
            var last = this.objectPath.slice(-1);
            data = last.length ? last[0].dataItem[last[0].path] : null;
        }
        this.renderData(data);
    };
    GridObjectExplorerComponent.prototype.isObject = function (item) {
        return item && typeof item === 'object' && Object.keys(item).length;
    };
    GridObjectExplorerComponent.prototype.formatToArray = function (data) {
        return Object(src_app_shared__WEBPACK_IMPORTED_MODULE_6__["transposeData"])([Object.entries(data).reduce(function (res, _a) {
                var key = _a[0], val = _a[1];
                res[key] = val;
                return res;
            }, {})]);
    };
    GridObjectExplorerComponent.prototype.formatData = function (data) {
        if (data === void 0) { data = []; }
        if (data.length) {
            return data.map(function (value) {
                if (typeof value !== 'object') {
                    value = { valueTypeKey: value };
                }
                return value;
            });
        }
        return data;
    };
    GridObjectExplorerComponent.prototype.formatToStr = function (item) {
        var str = JSON.stringify(item);
        return str.length > 250 ? str.slice(0, 250) + "..." : str;
    };
    GridObjectExplorerComponent.prototype.formatValue = function (item, column) {
        var dataType = column.dataType, displayFormat = column.displayFormat, bindingName = column.bindingName;
        var val = item[bindingName];
        switch (dataType) {
            case wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["DataType"].Date: {
                if (val === null) {
                    return '';
                }
                return displayFormat ? Object(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["format"])("{val:" + displayFormat + "}", { val: new Date(val) }) : new Date(val).toDateString();
            }
            case wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["DataType"].Number:
                if (isNaN(val) || val === '') {
                    return val;
                }
                return displayFormat ? Object(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["format"])("{val:" + displayFormat + "}", { val: Number(val) }) : Number(val);
            case wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["DataType"].Boolean: return Boolean(val);
        }
        if (typeof val === 'object' && !(val instanceof Date)) {
            if (Array.isArray(val) && !val.length) {
                return '[]'; // '{Empty array}';
            }
            else if (val && Object.keys(val).length) {
                return this.formatToStr(val);
            }
            else if (val) {
                return '{}'; // '{Empty object}';
            }
            else if (val === null) {
                return ''; // '{null}';
            }
        }
        return val;
    };
    GridObjectExplorerComponent.prototype.exportToCSV = function () {
        this.fileService.exportToFile(this.collectionView.sourceCollection, {
            fileType: src_app_shared_models__WEBPACK_IMPORTED_MODULE_10__["FileType"].CSV,
            fileName: this.objectPath.map(function (o) { return o.path; }).join('-') || 'object-explorer'
        });
    };
    GridObjectExplorerComponent.prototype.exportToExcel = function () {
        wijmo_wijmo_grid_xlsx__WEBPACK_IMPORTED_MODULE_5__["FlexGridXlsxConverter"].saveAsync(this.grid, { includeColumnHeaders: true }, 'object-explorer.xlsx');
    };
    GridObjectExplorerComponent.prototype.getColumnWidth = function (binding, defaultWidth) {
        if (defaultWidth === void 0) { defaultWidth = 150; }
        return (this.localGridConfig && this.localGridConfig.getColumn(binding, this.getPathStr()).width) || defaultWidth;
    };
    GridObjectExplorerComponent.prototype.getColumnHeader = function (binding) {
        return (this.localGridConfig && this.localGridConfig.getColumn(binding, this.getPathStr()).header);
    };
    GridObjectExplorerComponent.prototype.getColumnType = function (binding) {
        return (this.localGridConfig && this.localGridConfig.getColumn(binding, this.getPathStr()).dataType);
    };
    GridObjectExplorerComponent.prototype.getColumnDisplayFormat = function (binding) {
        return (this.localGridConfig && this.localGridConfig.getColumn(binding, this.getPathStr()).displayFormat);
    };
    GridObjectExplorerComponent.prototype.getPathStr = function () {
        return this.objectPath.map(function (o) { return o.path; }).join('-') || 'root';
    };
    GridObjectExplorerComponent.prototype.getJSONUtilsPath = function () {
        if (this.objectPath.length === 0) {
            return '$';
        }
        return '$.' + this.objectPath.map(function (o) {
            if (typeof o.path === 'string') {
                return o.path.replace(/\//g, ':');
            }
            return o.path;
        }).join('/');
    };
    GridObjectExplorerComponent.ctorParameters = function () { return [
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_8__["FileManagerService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_3__["FlexGrid"])
    ], GridObjectExplorerComponent.prototype, "grid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GridObjectExplorerComponent.prototype, "flex", void 0);
    GridObjectExplorerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-object-explorer',
            template: __webpack_require__(/*! raw-loader!./grid-object-explorer.component.html */ "./node_modules/raw-loader/index.js!./src/app/wijmo/components/grid-object-explorer/grid-object-explorer.component.html"),
            styles: [__webpack_require__(/*! ./grid-object-explorer.component.scss */ "./src/app/wijmo/components/grid-object-explorer/grid-object-explorer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services__WEBPACK_IMPORTED_MODULE_8__["FileManagerService"], src_app_shared_services__WEBPACK_IMPORTED_MODULE_8__["DialogService"]])
    ], GridObjectExplorerComponent);
    return GridObjectExplorerComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_9__["BaseUIComponent"]));

var GridObjectExplorerProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GridObjectExplorerProperties, _super);
    function GridObjectExplorerProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_9__["propDescription"])({
            description: 'Determines whether the user can modify cell. Default true',
            example: 'true',
            link: 'https://www.grapecity.com/wijmo/api/classes/wijmo_grid.flexgrid.html#isreadonly'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], GridObjectExplorerProperties.prototype, "isReadOnly", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_9__["propDescription"])({
            description: 'Defines identifier for grid',
            example: 'grid-id-1'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GridObjectExplorerProperties.prototype, "host", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_9__["propDescription"])({
            description: 'Specifies constants that define the selection behavior.',
            example: '5',
            link: 'https://www.grapecity.com/wijmo/api/enums/wijmo_grid.selectionmode.html'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], GridObjectExplorerProperties.prototype, "selectionMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_9__["propDescription"])({
            description: 'Specifies if row can be deleted. Default false',
            example: 'true',
            link: 'https://www.grapecity.com/wijmo/api/classes/wijmo_grid.flexgrid.html#allowdelete'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], GridObjectExplorerProperties.prototype, "allowDelete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_9__["propDescription"])({
            description: 'Specifies if new row can be added. Default false',
            example: 'true',
            link: 'https://www.grapecity.com/wijmo/api/classes/wijmo_grid.flexgrid.html#allowaddnew'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], GridObjectExplorerProperties.prototype, "allowAddNew", void 0);
    return GridObjectExplorerProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_9__["DataModelProperties"]));

var example = {
    title: 'Grid Object Explorer example',
    uiModel: {
        type: 'rest-client:grid-object-explorer',
        containerProperties: {},
        itemProperties: {
            dataModelPath: '$.tableData'
        }
    },
    dataModel: {
        tableData: [
            { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
            { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
            { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
            { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
            { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
            { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
            { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
            { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
            { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
            { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        ]
    }
};
var gridObjectExplorerDescriptor = {
    name: 'grid-object-explorer',
    packageName: 'rest-client',
    label: 'Object Explorer',
    category: "Data" /* Data */,
    description: 'Data Grid Object Explorer component',
    itemProperties: GridObjectExplorerProperties,
    component: GridObjectExplorerComponent,
    example: example
};


/***/ }),

/***/ "./src/app/wijmo/components/grid/grid.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/wijmo/components/grid/grid.component.ts ***!
  \*********************************************************/
/*! exports provided: GridComponent, GridProperties, example, gridDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridProperties", function() { return GridProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "example", function() { return example; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridDescriptor", function() { return gridDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var wijmo_wijmo_grid_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wijmo/wijmo.grid.filter */ "./node_modules/wijmo/wijmo.grid.filter.js");
/* harmony import */ var wijmo_wijmo_grid_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_grid_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wijmo/wijmo.grid */ "./node_modules/wijmo/wijmo.grid.js");
/* harmony import */ var wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/utils */ "./src/app/shared/utils.ts");


// import Wijmo components





var GridComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GridComponent, _super);
    function GridComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._dataProperties = [];
        _this._columns = [];
        _this.defaultProperties = {
            allowResizing: wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_5__["AllowResizing"].Both,
            allowMerging: wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_5__["AllowMerging"].All,
            stickyHeaders: false,
            selectionMode: wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_5__["SelectionMode"].Cell
        };
        return _this;
    }
    Object.defineProperty(GridComponent.prototype, "columnsList", {
        get: function () {
            if (this.properties.columns && this.properties.columns.length) {
                return this.properties.columns;
            }
            this.getColumns();
            return this._columns;
        },
        enumerable: true,
        configurable: true
    });
    GridComponent.prototype.getColumns = function () {
        var _this = this;
        if (this.getColumnsKey() !== this._columnsKey) {
            var columns_1 = [];
            if (this.properties.removeColumns && this.properties.removeColumns.length) {
                this._dataProperties = this._dataProperties.filter(function (prop) {
                    return !_this.properties.removeColumns.includes(prop);
                });
            }
            this._dataProperties.forEach(function (prop) {
                var column = (_this.properties.overrideColumns || []).find(function (o) { return o.bindingName === prop; });
                if (column) {
                    columns_1.push(column);
                }
                else {
                    columns_1.push({ headerText: Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_6__["formatCamelStr"])(prop), bindingName: prop });
                }
            });
            this._columnsKey = this.getColumnsKey();
            window.requestAnimationFrame(function () {
                _this._columns = columns_1;
            });
        }
    };
    GridComponent.prototype.getColumnsKey = function () {
        if (this.properties.overrideColumns || this.properties.removeColumns) {
            return JSON.stringify(this.properties.overrideColumns) +
                JSON.stringify(this.properties.removeColumns) +
                JSON.stringify(this._dataProperties);
        }
    };
    Object.defineProperty(GridComponent.prototype, "headersVisibility", {
        get: function () {
            return this.properties.hasOwnProperty('headersVisibility') ? this.properties.headersVisibility : wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_5__["HeadersVisibility"].All;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "itemsSource", {
        get: function () {
            if (this._componentDataModel && this.componentDataModel === this._componentDataModel) {
                return this._collectionView;
            }
            this._componentDataModel = this.componentDataModel;
            var data = this.properties.isVertical ? Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_6__["transposeData"])(this.componentDataModel) : this.componentDataModel;
            if (data && data.length) {
                this._dataProperties = Object.keys(data[0]);
            }
            this._collectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["CollectionView"](data);
            return this._collectionView;
        },
        enumerable: true,
        configurable: true
    });
    GridComponent.prototype.getQueryParams = function (item) {
        var _a;
        return _a = {}, _a[this.properties.details.idField] = item[this.properties.details.idField], _a;
    };
    GridComponent.prototype.getDefaultHeader = function (column) {
        return Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_6__["formatCamelStr"])(column.bindingName);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filter', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", wijmo_wijmo_grid_filter__WEBPACK_IMPORTED_MODULE_4__["FlexGridFilter"])
    ], GridComponent.prototype, "filter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_5__["FlexGrid"])
    ], GridComponent.prototype, "grid", void 0);
    GridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-grid',
            template: "\n    <h3 class=\"h3\" *ngIf=\"properties.title\">{{properties.title}}</h3>\n    <wj-flex-grid #grid [itemsSource]=\"itemsSource\" [ngStyle]=\"itemStyles\"\n      [allowResizing]=\"properties.allowResizing || defaultProperties.allowResizing\"\n      [allowMerging]=\"properties.allowMerging || defaultProperties.allowMerging\"\n      [stickyHeaders]=\"properties.stickyHeaders || defaultProperties.stickyHeaders\"\n      [selectionMode]=\"properties.selectionMode || defaultProperties.selectionMode\"\n      [frozenRows]=\"properties.frozenRows || 0\"\n      [frozenColumns]=\"properties.frozenColumns || 0\"\n      [headersVisibility]=\"headersVisibility\"\n      [allowDelete]=\"properties.allowDelete || false\"\n      [isReadOnly]=\"properties.isReadOnly || false\">\n      <ng-container *ngFor=\"let column of columnsList\">\n        <wj-flex-grid-column *ngIf=\"!column.details\"\n          [header]=\"column.headerText || getDefaultHeader(column)\"\n          [binding]=\"column.bindingName\"\n          [width]=\"column.width || null\"\n          [dataMap]=\"column.dataMap\"\n          [dataType]=\"column.dataType\"\n          [format]=\"column.displayFormat\">\n          </wj-flex-grid-column>\n\n          <wj-flex-grid-column *ngIf=\"column.details\" header=\"Actions\">\n            <ng-template wjFlexGridCellTemplate cellType=\"Cell\" let-item=\"item\">\n              <a [routerLink]=\"['../', properties.details.pageName]\"\n              [queryParams]=\"getQueryParams(item)\">Details</a>\n            </ng-template>\n        </wj-flex-grid-column>\n      </ng-container>\n\n      <wj-flex-grid-filter #filter></wj-flex-grid-filter>\n    </wj-flex-grid>\n  "
        })
    ], GridComponent);
    return GridComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_3__["BaseUIComponent"]));

var GridProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GridProperties, _super);
    function GridProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_3__["propDescription"])({
            description: 'Allow resizing',
            example: '3',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], GridProperties.prototype, "allowResizing", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_3__["propDescription"])({
            description: 'Specifies constants that define the selection behavior.',
            example: '5'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], GridProperties.prototype, "selectionMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_3__["propDescription"])({
            description: 'Specifies constants that define which areas of the grid support cell merging.',
            example: '7'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], GridProperties.prototype, "allowMerging", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_3__["propDescription"])({
            description: 'Property to ensure column headers remain visible when you scroll the document.',
            example: 'true'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], GridProperties.prototype, "stickyHeaders", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_3__["propDescription"])({
            description: 'Specifies list of columns to display.',
            example: "[{\n      headerText: 'Header title',\n      bindingName: 'propName',\n      dataType: 'Number'\n    }]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], GridProperties.prototype, "columns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_3__["propDescription"])({
            description: 'Amount of first frozen rows.',
            example: '3'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GridProperties.prototype, "frozenRows", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_3__["propDescription"])({
            description: 'Amount of first frozen columns.',
            example: '2'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GridProperties.prototype, "frozenColumns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_3__["propDescription"])({
            description: 'Specifies constants that define the visibility of row and column headers.',
            example: '3'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], GridProperties.prototype, "headersVisibility", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_3__["propDescription"])({
            description: 'Specifies if row can be deleted. Default false',
            example: 'true'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], GridProperties.prototype, "allowDelete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_3__["propDescription"])({
            description: 'Determines whether the user can modify cell. Default false',
            example: 'true'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], GridProperties.prototype, "isReadOnly", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_3__["propDescription"])({
            description: 'Specify if grid should render data vertically',
            example: 'true'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], GridProperties.prototype, "isVertical", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_3__["propDescription"])({
            description: 'Specifies list of columns that should be overriden.',
            example: "[{\n      headerText: 'Header title',\n      bindingName: 'propName',\n      dataType: 'Number'\n    }]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], GridProperties.prototype, "overrideColumns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_3__["propDescription"])({
            description: 'Specifies list of columns that should be removed.',
            example: "['prop1', 'prop2']"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], GridProperties.prototype, "removeColumns", void 0);
    return GridProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_3__["DataModelProperties"]));

var example = {
    title: 'Grid example',
    uiModel: {
        type: 'wijmo:grid',
        containerProperties: {
            width: '100%'
        },
        itemProperties: {
            dataModelPath: '$.tableData'
        }
    },
    dataModel: {
        tableData: [
            { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
            { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
            { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
            { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
            { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
            { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
            { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
            { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
            { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
            { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        ]
    }
};
var gridDescriptor = {
    name: 'grid',
    packageName: 'wijmo',
    label: 'DataGrid',
    category: "Data" /* Data */,
    description: 'Data table component',
    itemProperties: GridProperties,
    component: GridComponent,
    example: example
};


/***/ }),

/***/ "./src/app/wijmo/components/register.ts":
/*!**********************************************!*\
  !*** ./src/app/wijmo/components/register.ts ***!
  \**********************************************/
/*! exports provided: COMPONENTS_LIST, registerComponents, getCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS_LIST", function() { return COMPONENTS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerComponents", function() { return registerComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/wijmo/components/grid/grid.component.ts");
/* harmony import */ var _grid_object_explorer_grid_object_explorer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-object-explorer/grid-object-explorer.component */ "./src/app/wijmo/components/grid-object-explorer/grid-object-explorer.component.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/wijmo/components/chart/chart.component.ts");
/* harmony import */ var _data_grid_data_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-grid/data-grid.component */ "./src/app/wijmo/components/data-grid/data-grid.component.ts");





var COMPONENTS_LIST = [
    _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["gridDescriptor"],
    _grid_object_explorer_grid_object_explorer_component__WEBPACK_IMPORTED_MODULE_2__["gridObjectExplorerDescriptor"],
    _chart_chart_component__WEBPACK_IMPORTED_MODULE_3__["chartDescriptor"],
    _data_grid_data_grid_component__WEBPACK_IMPORTED_MODULE_4__["dataGridDescriptor"]
];
// Register components.
function registerComponents() {
    COMPONENTS_LIST.forEach(function (component) { return _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__["CoreService"].registerComponent(component); });
}
function getCategories() {
    var categories = COMPONENTS_LIST.reduce(function (map, desc) {
        map[desc.category] = map[desc.category] || [];
        map[desc.category].push(desc);
        return map;
    }, {});
    return Object.entries(categories).map(function (_a) {
        var key = _a[0], val = _a[1];
        return {
            name: key,
            components: val,
            packageName: 'wijmo'
        };
    });
}


/***/ }),

/***/ "./src/app/wijmo/models.ts":
/*!*********************************!*\
  !*** ./src/app/wijmo/models.ts ***!
  \*********************************/
/*! exports provided: GridUIState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridUIState", function() { return GridUIState; });
var GridUIState;
(function (GridUIState) {
    GridUIState["show"] = "d-flex flex-column h-100 w-100";
    GridUIState["hide"] = "d-none";
})(GridUIState || (GridUIState = {}));


/***/ }),

/***/ "./src/app/wijmo/utils/grid-edit-highlight.ts":
/*!****************************************************!*\
  !*** ./src/app/wijmo/utils/grid-edit-highlight.ts ***!
  \****************************************************/
/*! exports provided: initChangesHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initChangesHighlight", function() { return initChangesHighlight; });
/* harmony import */ var wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wijmo/wijmo.grid */ "./node_modules/wijmo/wijmo.grid.js");
/* harmony import */ var wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Function provides data state changes for grid.
 */
function initChangesHighlight(grid) {
    var addCollectionSet = new Set();
    var editCollectionMap = new Map();
    var deleted = [];
    grid.rowAdded.addHandler(function (g, e) {
        var collection = grid.collectionView;
        addCollectionSet.add(collection.currentAddItem);
        grid.refreshCells(false);
    });
    grid.onPasted = (function (e) {
        var _a = e.range, row = _a.row, row2 = _a.row2;
        var pastedItems = [];
        for (var index = row; index <= row2; index++) {
            pastedItems.push(grid.rows[index].dataItem);
            addCollectionSet.add(grid.rows[index].dataItem);
        }
        grid.refreshCells(false);
    });
    grid.deletingRow.addHandler(function (g, e) {
        var collection = grid.collectionView;
        if (!addCollectionSet.has(collection.currentItem)) {
            deleted.push(collection.currentItem);
        }
        else {
            addCollectionSet.delete(collection.currentItem);
        }
        editCollectionMap.delete(collection.currentItem);
    });
    grid.itemFormatter = function (panel, r, c, cell) {
        var dataItem = panel.rows[r].dataItem;
        var binding = panel.columns[c].binding;
        var initData = editCollectionMap.get(dataItem);
        if (panel.cellType === wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_0__["CellType"].Cell && dataItem) {
            if (addCollectionSet.has(dataItem)) {
                cell.classList.add('added-item');
            }
            else if (initData && initData.hasOwnProperty(binding)) {
                cell.classList.add('edited-item');
            }
            else {
                cell.classList.remove('added-item');
                cell.classList.remove('edited-item');
            }
        }
    };
    function setEditValue(item, binding, initVal, newVal) {
        var initDataItem = editCollectionMap.get(item) || {};
        if (!initDataItem.hasOwnProperty(binding)) {
            initDataItem[binding] = initVal;
        }
        if (areValuesEqual(initDataItem[binding], newVal)) {
            delete initDataItem[binding];
        }
        editCollectionMap.set(item, initDataItem);
    }
    grid.cellEditEnded.addHandler(function (g, e) {
        var item = grid.collectionView.currentEditItem;
        if (!addCollectionSet.has(item)) {
            var binding = grid.columns[e.col].binding;
            var newVal = grid.rows[e.row].dataItem[binding];
            setEditValue(item, binding, e.data, newVal);
        }
        grid.refreshCells(false);
    });
    var gridContext = {
        clear: function () {
            editCollectionMap.clear();
            addCollectionSet.clear();
        },
        get state() {
            return {
                edited: Array.from(editCollectionMap.keys()),
                added: Array.from(addCollectionSet.values()),
                deleted: deleted
            };
        },
        setEditValue: setEditValue
    };
    return gridContext;
}
function areValuesEqual(val1, val2) {
    if (val1 instanceof Date) {
        return val1.getTime() === val2.getTime();
    }
    return val1 === val2;
}


/***/ }),

/***/ "./src/app/wijmo/utils/index.ts":
/*!**************************************!*\
  !*** ./src/app/wijmo/utils/index.ts ***!
  \**************************************/
/*! exports provided: initChangesHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid_edit_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid-edit-highlight */ "./src/app/wijmo/utils/grid-edit-highlight.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initChangesHighlight", function() { return _grid_edit_highlight__WEBPACK_IMPORTED_MODULE_0__["initChangesHighlight"]; });




/***/ }),

/***/ "./src/app/wijmo/wijmo.module.ts":
/*!***************************************!*\
  !*** ./src/app/wijmo/wijmo.module.ts ***!
  \***************************************/
/*! exports provided: WijmoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WijmoModule", function() { return WijmoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid */ "./node_modules/wijmo/wijmo.angular2.grid.js");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wijmo/wijmo.angular2.input */ "./node_modules/wijmo/wijmo.angular2.input.js");
/* harmony import */ var wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid.filter */ "./node_modules/wijmo/wijmo.angular2.grid.filter.js");
/* harmony import */ var wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var wijmo_wijmo_angular2_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wijmo/wijmo.angular2.chart */ "./node_modules/wijmo/wijmo.angular2.chart.js");
/* harmony import */ var wijmo_wijmo_angular2_chart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_chart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var wijmo_wijmo_angular2_chart_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wijmo/wijmo.angular2.chart.animation */ "./node_modules/wijmo/wijmo.angular2.chart.animation.js");
/* harmony import */ var wijmo_wijmo_angular2_chart_animation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_chart_animation__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm5/ngx-bootstrap-popover.js");
/* harmony import */ var _components_register__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register */ "./src/app/wijmo/components/register.ts");
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/grid/grid.component */ "./src/app/wijmo/components/grid/grid.component.ts");
/* harmony import */ var _components_grid_object_explorer_grid_object_explorer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/grid-object-explorer/grid-object-explorer.component */ "./src/app/wijmo/components/grid-object-explorer/grid-object-explorer.component.ts");
/* harmony import */ var _components_data_grid_data_grid_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/data-grid/data-grid.component */ "./src/app/wijmo/components/data-grid/data-grid.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_column_editor_column_editor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/column-editor/column-editor.component */ "./src/app/wijmo/components/column-editor/column-editor.component.ts");
/* harmony import */ var _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/chart/chart.component */ "./src/app/wijmo/components/chart/chart.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");




// import Wijmo modules















var WijmoModule = /** @class */ (function () {
    function WijmoModule() {
        Object(_components_register__WEBPACK_IMPORTED_MODULE_11__["registerComponents"])();
    }
    WijmoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__["GridComponent"], _components_grid_object_explorer_grid_object_explorer_component__WEBPACK_IMPORTED_MODULE_13__["GridObjectExplorerComponent"], _components_column_editor_column_editor_component__WEBPACK_IMPORTED_MODULE_16__["ColumnEditorComponent"], _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_17__["ChartComponent"], _components_data_grid_data_grid_component__WEBPACK_IMPORTED_MODULE_14__["DataGridComponent"]],
            exports: [_components_grid_object_explorer_grid_object_explorer_component__WEBPACK_IMPORTED_MODULE_13__["GridObjectExplorerComponent"], _components_column_editor_column_editor_component__WEBPACK_IMPORTED_MODULE_16__["ColumnEditorComponent"], _components_data_grid_data_grid_component__WEBPACK_IMPORTED_MODULE_14__["DataGridComponent"], _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_17__["ChartComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_4__["WjGridModule"],
                wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_5__["WjInputModule"],
                wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_6__["WjGridFilterModule"],
                wijmo_wijmo_angular2_chart__WEBPACK_IMPORTED_MODULE_7__["WjChartModule"],
                wijmo_wijmo_angular2_chart_animation__WEBPACK_IMPORTED_MODULE_8__["WjChartAnimationModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_10__["PopoverModule"].forRoot()
            ],
            entryComponents: [_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__["GridComponent"], _components_grid_object_explorer_grid_object_explorer_component__WEBPACK_IMPORTED_MODULE_13__["GridObjectExplorerComponent"], _components_column_editor_column_editor_component__WEBPACK_IMPORTED_MODULE_16__["ColumnEditorComponent"], _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_17__["ChartComponent"], _components_data_grid_data_grid_component__WEBPACK_IMPORTED_MODULE_14__["DataGridComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WijmoModule);
    return WijmoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~custom-app-custom-app-module~database-manager-database-manager-module~forms-builder-forms-bu~b460a332.js.map