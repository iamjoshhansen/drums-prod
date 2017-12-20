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
var pin_out_1 = __webpack_require__(7);
var pin_in_1 = __webpack_require__(9);
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
/* 1 */
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
/* 2 */
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
var logger_1 = __webpack_require__(1);
var emitter_1 = __webpack_require__(2);
var onoff_1 = __webpack_require__(8);
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
            _this.pin = new onoff_1.Gpio(opts.pin, 'out');
        }
        else {
            _this.pin = new onoff_1.Gpio(opts.pin, 'in', 'both');
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
var condition_1 = __webpack_require__(5);
var logger_1 = __webpack_require__(1);
// Lights!
var pins_1 = __webpack_require__(0);
var pins_2 = __webpack_require__(0);
var pins_3 = __webpack_require__(0);
var pins_4 = __webpack_require__(0);
var log = logger_1.default('app');
var express = __webpack_require__(10);
var app = express();
var server = __webpack_require__(11).createServer(app);
var io = __webpack_require__(12)(server);
app.use(express.static('public'));
var connectedCondition = new condition_1.default('connected', false);
connectedCondition.on('change', function (val) {
    io.emit('set-connection', val);
});
var socket = __webpack_require__(13)('http://localhost:3000');
socket
    .on('connect', function () {
    connectedCondition.set(true);
})
    .on('disconnect', function () {
    connectedCondition.set(false);
})
    .on('note', function (data) {
    switch (data.i) {
        case 46:// Open Hi-hat
            pins_4.ext_bravo_3.pop(200);
            break;
        case 38:// Snare Drum 1
            pins_1.ext_bravo_0.pop(200);
            break;
        case 40:// Snare Drum 2
            // _.pop(200);
            break;
        case 47:// Mid Tom 1
            // _.pop(200);
            break;
        case 45:// Mid Tom 2
            // _.pop(200);
            break;
        case 43:// Low Tom 1
            // _.pop(200);
            break;
        case 36:// Bass Drum 1
            pins_2.ext_bravo_1.pop(200);
            break;
        case 49:// Crash Cymbal 1
            pins_3.ext_bravo_2.pop(200);
            break;
        case 51:// Ride Cymbal 1
            // _.pop(200);
            break;
    }
    io.emit('node', data);
});
var port = 3001;
server.listen(port);
var os = __webpack_require__(14);
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
var emitter_1 = __webpack_require__(2);
var logger_1 = __webpack_require__(1);
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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("dateformat");

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

module.exports = require("onoff");

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ })
/******/ ]);