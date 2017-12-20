/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dateFormat = __webpack_require__(6);
// https://coderwall.com/p/yphywg/printing-colorful-text-in-terminal-when-run-node-js-script
var reset = '\x1b[0m';
var colorCursor = 1;
var colors = [
    "\x1b[31m",
    "\x1b[32m",
    "\x1b[33m",
    "\x1b[34m",
    "\x1b[35m",
    "\x1b[36m",
    "\x1b[37m",
];
function debug(namespace) {
    var ns = namespace;
    while (ns.length < 30) {
        ns = ' ' + ns;
    }
    var color = colors[colorCursor++ % colors.length];
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var now = new Date();
        var date = dateFormat(now, 'yyyy-mm-dd hh:MM:ss TT l');
        var consoleArgs = ['\x1b[2m', date, reset, color, ns, reset];
        consoleArgs = consoleArgs.concat(args);
        console.log.apply(null, consoleArgs);
    };
}
exports.default = function (namespace) {
    return debug(namespace);
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Emiter = /** @class */ (function () {
    function Emiter() {
        this._callbacks = {};
    }
    Emiter.prototype.on = function (ev, cb) {
        if (!(ev in this._callbacks)) {
            this._callbacks[ev] = [];
        }
        this._callbacks[ev].push(cb);
        return this;
    };
    Emiter.prototype.off = function (ev) {
        if (ev === undefined) {
            this._callbacks = {};
        }
        else {
            if (ev in this._callbacks) {
                delete this._callbacks[ev];
            }
        }
        return this;
    };
    Emiter.prototype.emit = function (ev) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (ev in this._callbacks) {
            this._callbacks[ev].forEach(function (cb) {
                cb.apply(_this, args);
            });
        }
        return this;
    };
    return Emiter;
}());
exports.default = Emiter;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.chars = function (count, character) {
    if (character === void 0) { character = ' '; }
    var ret = '';
    var len = character.length;
    for (var i = 0; i < count; i++) {
        ret += character.charAt(i % len);
    }
    return ret;
};
exports.padLeft = function (str, size, character) {
    if (character === void 0) { character = ' '; }
    var padding = exports.chars(size - str.length, character);
    return "" + padding + str;
};
exports.padCenter = function (str, size, character) {
    if (character === void 0) { character = ' '; }
    var padLeft = exports.chars(Math.floor((size - str.length) / 2), character);
    var padRight = exports.chars(Math.ceil((size - str.length) / 2), character);
    return "" + padLeft + str + padRight;
};
exports.padRight = function (str, size, character) {
    if (character === void 0) { character = ' '; }
    var padding = exports.chars(size - str.length, character);
    return "" + str + padding;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(0);
var emitter_1 = __webpack_require__(1);
/*
import { Gpio } from 'onoff';
*/
var onoff_1 = __webpack_require__(17);
console.log('\x1b[31m%s\x1b[0m', '!!!!!!!!!!!!!!!!!!!!!!!!!');
console.log('\x1b[35m%s\x1b[0m', '     Using Fake Pins     ');
console.log('\x1b[31m%s\x1b[0m', '!!!!!!!!!!!!!!!!!!!!!!!!!');
console.log('');
var declaredPins = {};
var Pin = /** @class */ (function (_super) {
    __extends(Pin, _super);
    function Pin(opts) {
        var _this = _super.call(this) || this;
        _this.log = logger_1.default("app.pin." + opts.id);
        if (opts.pin in declaredPins) {
            throw new Error("Pin ID already taken: " + opts.pin + " is being requested from both '" + opts.label + "' and '" + declaredPins[opts.pin] + "'");
        }
        declaredPins[opts.pin] = opts.label;
        _this.id = opts.id;
        _this.label = opts.label;
        _this.state = false;
        if (opts.mode == 'out') {
            _this.pin = new onoff_1.default(opts.pin, 'out');
        }
        else {
            _this.pin = new onoff_1.default(opts.pin, 'in', 'both');
        }
        return _this;
    }
    Pin.prototype.read = function () {
        return this.pin.readSync() === 1;
    };
    Pin.prototype.on = function (event, cb) {
        return _super.prototype.on.call(this, event, cb);
    };
    Pin.prototype.off = function (event) {
        return _super.prototype.off.call(this, event);
    };
    return Pin;
}(emitter_1.default));
exports.default = Pin;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var midi_1 = __webpack_require__(5);
var condition_1 = __webpack_require__(8);
var file_buffer_1 = __webpack_require__(9);
var date_and_time_stamp_1 = __webpack_require__(11);
var logger_1 = __webpack_require__(0);
var midi_drum_map_1 = __webpack_require__(14);
// Lights!
var pins_1 = __webpack_require__(15);
var log = logger_1.default('app');
var fileBuffer = new file_buffer_1.default();
var fileBufferStartTimestamp = 0;
var express = __webpack_require__(19);
var app = express();
var server = __webpack_require__(20).createServer(app);
var io = __webpack_require__(21)(server);
app.use(express.static('public'));
var recording = new condition_1.default('recording', false);
recording.on('change', function (val) {
    io.emit('set-recording', val);
    if (val) {
        var now = new Date();
        fileBufferStartTimestamp = now.getTime();
        var date = date_and_time_stamp_1.default(now);
        fileBuffer.setFilename("./recordings/" + date + ".tsv");
    }
});
var instrument = new midi_1.default(0);
instrument.on('note', function (data) {
    switch (data.channel) {
        case 38:// snare
            pins_1.ext_bravo_0.pop(200);
    }
    if (recording.get()) {
        fileBuffer.push(data.date - fileBufferStartTimestamp + "\t" + data.channel + "\t" + data.velocity + "\t" + midi_drum_map_1.default[data.channel]);
    }
});
io.on('connection', function (socket) {
    log("We have a connection! ID: " + socket.id);
    socket.emit('msg', 'This is your first message from the server');
    socket.on('disconnect', function () {
        log("Disconnected: " + socket.id);
    });
    socket
        .on('toggle-recording', function () {
        recording.toggle();
    });
    socket.on('msg', function (data) {
        log("Client (" + socket.id + ") said: " + data);
        socket.broadcast.emit('msg', data);
    });
    socket.on('note', function (note, velocity) {
        if (recording.get()) {
            var time = new Date().getTime();
            fileBuffer.push(time - fileBufferStartTimestamp + "\t" + note + "\t" + velocity + "\t" + midi_drum_map_1.default[note]);
        }
        instrument.emit('note', {
            type: 1,
            channel: note,
            velocity: velocity,
        });
    });
    instrument.on('note', function (data) {
        socket.emit('note', {
            id: data.channel,
            name: midi_drum_map_1.default[data.channel],
            velocity: data.velocity,
        });
    });
});
var port = 3000;
server.listen(port);
var os = __webpack_require__(22);
var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}
var ip = addresses[0];
log("Listening on http://" + ip + ":" + port);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var emitter_1 = __webpack_require__(1);
var logger_1 = __webpack_require__(0);
var midi = __webpack_require__(7);
;
var Midi = /** @class */ (function (_super) {
    __extends(Midi, _super);
    function Midi(port) {
        var _this = _super.call(this) || this;
        _this.log = logger_1.default('midi');
        _this.port = port;
        // Set up a new input.
        _this.input = new midi.input;
        // Configure a callback.
        _this.input.on('message', function (deltaTime, message) {
            // The message is an array of numbers corresponding to the MIDI bytes:
            //   [status, data1, data2]
            // https://www.cs.cf.ac.uk/Dave/Multimedia/node158.html has some helpful
            // information interpreting the messages.
            var data = {
                type: message[0],
                channel: message[1],
                velocity: message[2],
                date: new Date().getTime(),
            };
            _this.emit('note', data);
            _this.log(data.type + "\t" + data.channel + "\t" + data.velocity + "\t" + data.date);
        });
        // Open the first available input port.
        _this.open();
        return _this;
    }
    Midi.prototype.open = function () {
        var _this = this;
        try {
            this.input.openPort(this.port);
            this.log("Opened port " + this.port);
        }
        catch (er) {
            this.log("Failed to open port " + this.port + ". Trying again in 5 seconds...");
            setTimeout(function () {
                _this.open();
            }, 5000);
        }
    };
    Midi.prototype.on = function (event, cb) {
        return _super.prototype.on.call(this, event, cb);
    };
    return Midi;
}(emitter_1.default));
exports.default = Midi;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("dateformat");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("midi");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var emitter_1 = __webpack_require__(1);
var logger_1 = __webpack_require__(0);
var Condition = /** @class */ (function (_super) {
    __extends(Condition, _super);
    function Condition(label, initialState, rules) {
        var _this = _super.call(this) || this;
        _this.label = label;
        _this.state = initialState;
        _this.log = logger_1.default("app.condition." + label);
        _this.log('initial: ', _this.state);
        _this.on('change', function (state) {
            _this.log("changed to " + state);
        });
        if (rules !== undefined) {
            rules.call(null, _this);
        }
        return _this;
    }
    Condition.prototype.set = function (state) {
        if (state !== this.state) {
            this.state = state;
            this.emit('change', this.state);
            this.emit(this.state ? 'activate' : 'deactivate');
        }
        return this;
    };
    Condition.prototype.get = function () {
        return this.state;
    };
    Condition.prototype.toggle = function () {
        return this.set(!this.state);
    };
    Condition.prototype.on = function (event, cb) {
        return _super.prototype.on.call(this, event, cb);
    };
    Condition.prototype.off = function (event) {
        return _super.prototype.off.call(this, event);
    };
    return Condition;
}(emitter_1.default));
exports.default = Condition;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(0);
var fs = __webpack_require__(10);
var FileBuffer = /** @class */ (function () {
    function FileBuffer(filename) {
        this.filename = filename || null;
        this.bufferA = [];
        this.bufferB = [];
        this.log = logger_1.default('FileBuffer');
    }
    FileBuffer.prototype.setFilename = function (filename) {
        this.log("filename: " + filename);
        this.filename = filename;
        this.bufferA = [];
        this.bufferB = [];
        return this;
    };
    FileBuffer.prototype.push = function (line) {
        var _this = this;
        if (this.filename === null) {
            throw new Error('Cannot push to FileBuffer with undefinde filename.');
        }
        if (this.mode) {
            this.bufferA.push(line);
            this.log('pushed [A]:', line);
        }
        else {
            this.bufferB.push(line);
            this.log('pushed [B]:', line);
        }
        setTimeout(function () {
            if (!_this.flushing) {
                _this.flush();
            }
        }, 500);
        return this;
    };
    FileBuffer.prototype.flush = function () {
        var _this = this;
        if ((this.mode && this.bufferA.length > 0) || !this.mode && this.bufferB.length > 0) {
            this.mode = !this.mode;
            this.flushing = true;
            if (this.mode) {
                this.log("flushing B, " + this.bufferB.length + " line" + ((this.bufferB.length === 1) ? 's' : 's'));
                var addition = this.bufferB.join('\n') + '\n';
                this.bufferB = [];
                fs.appendFile(this.filename, addition, function (er) {
                    if (er) {
                        _this.log("FileBuffer failed: " + _this.filename);
                        throw er;
                    }
                    _this.flushing = false;
                    if (_this.bufferA.length > 0) {
                        _this.log('Flush [B] complete. Buffer [A] is waiting. Calling flush()');
                        _this.flush();
                    }
                });
            }
            else {
                this.log("flushing A, " + this.bufferA.length + " line" + ((this.bufferA.length === 1) ? 's' : 's'));
                var addition = this.bufferA.join('\n') + '\n';
                this.bufferA = [];
                fs.appendFile(this.filename, addition, function (er) {
                    if (er) {
                        _this.log("FileBuffer failed: " + _this.filename);
                        throw er;
                    }
                    _this.flushing = false;
                    if (_this.bufferB.length > 0) {
                        _this.log('Flush [A] complete. Buffer [B] is waiting. Calling flush()');
                        _this.flush();
                    }
                });
            }
        }
    };
    return FileBuffer;
}());
exports.default = FileBuffer;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var datestamp_1 = __webpack_require__(12);
var timestamp_1 = __webpack_require__(13);
exports.default = function (date) {
    return datestamp_1.default(date) + " " + timestamp_1.default(date);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pad_1 = __webpack_require__(2);
exports.default = function (date) {
    var year = date.getFullYear().toString();
    var month = pad_1.padLeft((date.getMonth() + 1).toString(), 2, '0');
    var day = pad_1.padLeft((date.getDate()).toString(), 2, '0');
    return year + "-" + month + "-" + day;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pad_1 = __webpack_require__(2);
exports.default = function (date) {
    var isAm = date.getHours() < 12;
    var hours = pad_1.padLeft((date.getHours() - (isAm ? 0 : 12)).toString(), 2, '0');
    var minutes = pad_1.padLeft((date.getMinutes()).toString(), 2, '0');
    var seconds = pad_1.padLeft((date.getSeconds()).toString(), 2, '0');
    return hours + ":" + minutes + ":" + seconds + " " + (isAm ? 'am' : 'pm');
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var map = {
    27: 'High Q (GM2)',
    28: 'Slap (GM2)',
    29: 'Scratch Push (GM2)',
    30: 'Scratch Pull (GM2)',
    31: 'Sticks (GM2)',
    32: 'Square Click (GM2)',
    33: 'Metronome Click (GM2)',
    34: 'Metronome Bell (GM2)',
    35: 'Bass Drum 2',
    36: 'Bass Drum 1',
    37: 'Side Stick',
    38: 'Snare Drum 1',
    39: 'Hand Clap',
    40: 'Snare Drum 2',
    41: 'Low Tom 2',
    42: 'Closed Hi-hat',
    43: 'Low Tom 1',
    44: 'Pedal Hi-hat',
    45: 'Mid Tom 2',
    46: 'Open Hi-hat',
    47: 'Mid Tom 1',
    48: 'High Tom 2',
    49: 'Crash Cymbal 1',
    50: 'High Tom 1',
    51: 'Ride Cymbal 1',
    52: 'Chinese Cymbal',
    53: 'Ride Bell',
    54: 'Tambourine',
    55: 'Splash Cymbal',
    56: 'Cowbell',
    57: 'Crash Cymbal 2',
    58: 'Vibra Slap',
    59: 'Ride Cymbal 2',
    60: 'High Bongo',
    61: 'Low Bongo',
    62: 'Mute High Conga',
    63: 'Open High Conga',
    64: 'Low Conga',
    65: 'High Timbale',
    66: 'Low Timbale',
    67: 'High Agogo',
    68: 'Low Agogo',
    69: 'Cabasa',
    70: 'Maracas',
    71: 'Short Whistle',
    72: 'Long Whistle',
    73: 'Short Guiro',
    74: 'Long Guiro',
    75: 'Claves',
    76: 'High Wood Block',
    77: 'Low Wood Block',
    78: 'Mute Cuica',
    79: 'Open Cuica',
    80: 'Mute Triangle',
    81: 'Open Triangle',
    82: 'Shaker (GM2)',
    83: 'Jingle Bell (GM2)',
    84: 'Belltree (GM2)',
    85: 'Castanets (GM2)',
    86: 'Mute Surdo (GM2)',
    87: 'Open Surdo (GM2)',
};
exports.default = map;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pin_out_1 = __webpack_require__(16);
var pin_in_1 = __webpack_require__(18);
exports.sprinkler_front_near = new pin_out_1.default({
    id: "sprinkler_front_near",
    label: "Sprinkler: Front",
    pin: 4,
});
exports.sprinkler_front_far = new pin_out_1.default({
    id: "sprinkler_front_far",
    label: "Sprinkler: Sidewalk",
    pin: 14,
});
exports.drip_front = new pin_out_1.default({
    id: "drip_front",
    label: "Drip: Front",
    pin: 17,
});
exports.sprinkler_back_near = new pin_out_1.default({
    id: "sprinkler_back_near",
    label: "Sprinkler: Near Back",
    pin: 15,
});
exports.sprinkler_back_far = new pin_out_1.default({
    id: "sprinkler_back_far",
    label: "Sprinkler: Far Back",
    pin: 27,
});
exports.drip_back_1 = new pin_out_1.default({
    id: "drip_back_1",
    label: "Drip: Back 1",
    pin: 18,
});
exports.drip_back_2 = new pin_out_1.default({
    id: "drip_back_2",
    label: "Drip: Back 2",
    pin: 22,
});
exports.drip_back_3 = new pin_out_1.default({
    id: "drip_back_3",
    label: "Drip: Back 2",
    pin: 23,
});
exports.front_path_lights = new pin_out_1.default({
    id: "front_path_lights",
    label: "Front Path Lights",
    pin: 10,
    channel: 9,
});
exports.salt_lamp = new pin_out_1.default({
    id: "salt_lamp",
    label: "Salt Lamp",
    pin: 24,
    channel: 10,
});
exports.ext_alpha_0 = new pin_out_1.default({
    id: "ext_alpha_0",
    label: "Extension Chord Alpha 0",
    pin: 9,
    channel: 11,
});
exports.ext_alpha_1 = new pin_out_1.default({
    id: "ext_alpha_1",
    label: "Extension Chord Alpha 1",
    pin: 25,
    channel: 12,
});
exports.ext_bravo_0 = new pin_out_1.default({
    id: "ext_bravo_0",
    label: "BlueBox [TL]",
    pin: 11,
    channel: 13,
});
exports.ext_bravo_1 = new pin_out_1.default({
    id: "ext_bravo_1",
    label: "BlueBox [BL]",
    pin: 8,
    channel: 14,
});
exports.ext_bravo_2 = new pin_out_1.default({
    id: "ext_bravo_2",
    label: "BlueBox [TR]",
    pin: 5,
    channel: 15,
});
exports.ext_bravo_3 = new pin_out_1.default({
    id: "ext_bravo_3",
    label: "BlueBox [BR]",
    pin: 7,
    channel: 16,
});
exports.green_led = new pin_out_1.default({
    id: "green_led",
    label: "Green Circle LED",
    pin: 21,
});
exports.circle_button = new pin_in_1.default({
    id: "circle_button",
    label: "Green Circle Button",
    pin: 20,
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pin_1 = __webpack_require__(3);
var PinOut = /** @class */ (function (_super) {
    __extends(PinOut, _super);
    function PinOut(params) {
        var _this = _super.call(this, {
            id: params.id,
            label: params.label,
            pin: params.pin,
            mode: 'out',
        }) || this;
        _this.popTimeout = null;
        _this.pin.writeSync(1);
        return _this;
    }
    PinOut.prototype.write = function (state) {
        var _this = this;
        if (this.state !== state) {
            this.state = state;
            this.log(state ? 'on' : 'off');
            this.pin.write(state ? 0 : 1, function (err) {
                _this.emit('error', err);
            });
            this.emit('change', state);
            this.emit(state ? 'activate' : 'deactivate');
            this.log("emitting 'update:pin:" + this.id + ", " + state + "'");
        }
        return this;
    };
    PinOut.prototype.activate = function () {
        return this.write(true);
    };
    PinOut.prototype.deactivate = function () {
        return this.write(false);
    };
    PinOut.prototype.toggle = function () {
        return this.write(!this.state);
    };
    PinOut.prototype.followPin = function (input, invert) {
        var _this = this;
        if (invert === void 0) { invert = false; }
        input.on('change', function (state) {
            _this.write(state !== invert);
        });
        return this;
    };
    PinOut.prototype.followCondition = function (condition, invert) {
        var _this = this;
        if (invert === void 0) { invert = false; }
        this.write(condition.get() !== invert);
        condition.on('change', function (state) {
            _this.write(state !== invert);
        });
        return this;
    };
    PinOut.prototype.pop = function (duration) {
        var _this = this;
        this.write(true);
        clearTimeout(this.popTimeout);
        this.popTimeout = setTimeout(function () {
            _this.write(false);
        }, duration);
    };
    return PinOut;
}(pin_1.default));
exports.default = PinOut;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(0);
var emitter_1 = __webpack_require__(1);
var Gpio = /** @class */ (function () {
    function Gpio(pin, mode, type) {
        this.id = pin;
        this.val = 0;
        this.ev = new emitter_1.default();
        this.log = logger_1.default("pi.pin." + pin);
    }
    Gpio.prototype.write = function (val, callback) {
        if (this.val !== val) {
            this.val = val;
            // this.log((this.val == 1) ? 'on' : 'off');
            this.ev.emit('change', this.val);
            setTimeout(function () {
                callback.call(null, null, val);
            }, 1);
        }
    };
    Gpio.prototype.writeSync = function (val) {
        if (this.val !== val) {
            this.val = val;
            // this.log((this.val == 1) ? 'off' : 'on');
            this.ev.emit('change', this.val);
        }
    };
    Gpio.prototype.readSync = function () {
        return this.val;
    };
    Gpio.prototype.watch = function (callback) {
        this.ev.on('change', function (val) {
            callback.call(null, null, val);
        });
    };
    return Gpio;
}());
exports.default = Gpio;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pin_1 = __webpack_require__(3);
var PinIn = /** @class */ (function (_super) {
    __extends(PinIn, _super);
    function PinIn(params) {
        var _this = _super.call(this, {
            id: params.id,
            label: params.label,
            pin: params.pin,
            mode: 'in',
        }) || this;
        _this.pin.watch(function (err, value) {
            if (err) {
                _this.log('error', err);
                _this.emit('error', err);
            }
            _this.log((value === 1) ? 'on' : 'off');
            _this.emit('change', value === 1);
            _this.emit((value === 1) ? 'activate' : 'deactivate');
        });
        return _this;
    }
    return PinIn;
}(pin_1.default));
exports.default = PinIn;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ })
/******/ ]);