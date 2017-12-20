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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pin_out_1 = __webpack_require__(21);
var pin_in_1 = __webpack_require__(25);
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
var condition_socket_1 = __webpack_require__(31);
var io_1 = __webpack_require__(4);
// Direct
exports.path_lights = new condition_socket_1.default('path_lights', io_1.default);
exports.salt_lamp = new condition_socket_1.default('salt_lamp', io_1.default);
// Extansion Chord Alpha (4 Piece)
exports.ext_alpha_0 = new condition_socket_1.default('ext_alpha_0', io_1.default);
exports.ext_alpha_1 = new condition_socket_1.default('ext_alpha_1', io_1.default);
// Extension Chord Bravo (Blue Box)
exports.ext_bravo_0 = new condition_socket_1.default('ext_bravo_0', io_1.default);
exports.ext_bravo_1 = new condition_socket_1.default('ext_bravo_1', io_1.default);
exports.ext_bravo_2 = new condition_socket_1.default('ext_bravo_2', io_1.default);
exports.ext_bravo_3 = new condition_socket_1.default('ext_bravo_3', io_1.default);
// Sprinkler System
exports.sprinkler_front_near = new condition_socket_1.default('sprinkler_front_near', io_1.default);
exports.sprinkler_front_far = new condition_socket_1.default('sprinkler_front_far', io_1.default);
exports.drip_front = new condition_socket_1.default('drip_front', io_1.default);
exports.sprinkler_back_near = new condition_socket_1.default('sprinkler_back_near', io_1.default);
exports.sprinkler_back_far = new condition_socket_1.default('sprinkler_back_far', io_1.default);
exports.drip_back_1 = new condition_socket_1.default('drip_back_1', io_1.default);
exports.drip_back_2 = new condition_socket_1.default('drip_back_2', io_1.default);
exports.drip_back_3 = new condition_socket_1.default('drip_back_3', io_1.default);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dateFormat = __webpack_require__(16);
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.webhookKey = 'f3HqyRey51BeJWWjrq4I-AP9hy_IosZZ3IZfDR5lGya';
exports.coords = {
    lat: 40.038152,
    lng: -105.0382077,
};
exports.weatherAppId = '1a384f81c4c9a93880f3360a63df1c24';
exports.socketPort = 2031;
exports.socketAddressStore = 'http://iamjoshhansen.com/pi-ip/';


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(3);
var config_2 = __webpack_require__(3);
var logger_1 = __webpack_require__(2);
var amount_1 = __webpack_require__(12);
var condition_1 = __webpack_require__(7);
var node_fetch_1 = __webpack_require__(5);
var io = __webpack_require__(22)();
var log = logger_1.default('io');
exports.connectionCount = new amount_1.default('io-connectionCount');
exports.isConnected = new condition_1.default('io-connection', exports.connectionCount.amount > 0, function (condition) {
    exports.connectionCount.on('change', function (count) {
        condition.set(count > 0);
    });
});
exports.default = io;
var connectionId = 0;
io.on('connection', function (socket) {
    socket.setMaxListeners(100);
    var connectionLog = logger_1.default("app.connection." + connectionId++);
    connectionLog('We have a connection!');
    // postMetric('new connection');
    exports.connectionCount.amount++;
    // postMetric('connection total', connectionCount.amount);
    socket.on('read:connection-count', function (callback) {
        callback(exports.connectionCount.amount);
    });
    exports.connectionCount.on('change', function () {
        io.emit('update:connection-count', exports.connectionCount.amount);
    });
    socket.on('disconnect', function () {
        connectionLog('..disconnected');
        exports.connectionCount.amount--;
        // postMetric('connection total', connectionCount.amount);
    });
});
var os = __webpack_require__(23);
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
var platform = os.platform();
if (platform === 'darwin') {
    log('NOT posting address.');
}
else {
    node_fetch_1.default(config_2.socketAddressStore, {
        method: 'POST',
        body: JSON.stringify({
            ip: addresses[0],
            port: config_1.socketPort,
        }),
    })
        .then(function (response) {
        return response.json()
            .then(function (json) {
            if (json.success) {
                log('Successfully posted the address of the Socket');
            }
            else {
                throw new Error('Failed to post address of the Socket');
            }
        });
    })
        .catch(function (er) {
        console.log();
        console.log('!! error: ', er);
        console.log();
    });
}
io.listen(config_1.socketPort);
log("Listening on http://" + addresses[0] + ":" + config_1.socketPort + "/");


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 6 */
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
        if (ev in this._callbacks) {
            delete this._callbacks[ev];
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
var emitter_1 = __webpack_require__(6);
var logger_1 = __webpack_require__(2);
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var datestamp_1 = __webpack_require__(17);
var timestamp_1 = __webpack_require__(10);
exports.default = function (date) {
    return datestamp_1.default(date) + " " + timestamp_1.default(date);
};


/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pad_1 = __webpack_require__(9);
exports.default = function (date) {
    var isAm = date.getHours() < 12;
    var hours = pad_1.padLeft((date.getHours() - (isAm ? 0 : 12)).toString(), 2, '0');
    var minutes = pad_1.padLeft((date.getMinutes()).toString(), 2, '0');
    var seconds = pad_1.padLeft((date.getSeconds()).toString(), 2, '0');
    return hours + ":" + minutes + ":" + seconds + " " + (isAm ? 'am' : 'pm');
};


/***/ }),
/* 11 */
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
var logger_1 = __webpack_require__(2);
var emitter_1 = __webpack_require__(6);
var io_1 = __webpack_require__(4);
var onoff_1 = __webpack_require__(24);
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
        io_1.default.on('connection', function (socket) {
            socket.setMaxListeners(100);
            _this.log("listending to 'ping:pin:" + _this.id + "'");
            socket.on("ping:pin:" + _this.id, function () {
                _this.log("emitting update:pin:" + _this.id, _this.state);
                socket.emit("update:pin:" + _this.id, _this.state);
            });
        });
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
/* 12 */
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
var emitter_1 = __webpack_require__(6);
var Amount = /** @class */ (function (_super) {
    __extends(Amount, _super);
    function Amount(label, amount) {
        if (amount === void 0) { amount = 0; }
        var _this = _super.call(this) || this;
        _this.label = label;
        var _amount = amount;
        Object.defineProperty(_this, 'amount', {
            get: function () {
                return _amount;
            },
            set: function (newAmount) {
                if (_amount !== newAmount) {
                    var oldAmount = _amount;
                    _amount = newAmount;
                    _this.emit('change', newAmount, oldAmount);
                }
            }
        });
        return _this;
    }
    Amount.prototype.on = function (event, cb) {
        return _super.prototype.on.call(this, event, cb);
    };
    Amount.prototype.off = function (event) {
        return _super.prototype.off.call(this, event);
    };
    return Amount;
}(emitter_1.default));
exports.default = Amount;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
;
var Deferred = /** @class */ (function () {
    function Deferred() {
        this._callbacks = [];
        this.args = [];
        this.state = 'pending';
    }
    Deferred.prototype.resolve = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.state == 'pending') {
            this.state = 'resolved';
            this.args = args;
            this._callbacks.forEach(function (callback) {
                if (callback.type !== 'fail') {
                    callback.fn.apply(_this, _this.args);
                }
            });
            this._callbacks = null;
        }
        return this;
    };
    Deferred.prototype.reject = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.state == 'pending') {
            this.state = 'rejected';
            this.args = args;
            this._callbacks.forEach(function (callback) {
                if (callback.type !== 'done') {
                    callback.fn.apply(_this, _this.args);
                }
            });
            this._callbacks = null;
        }
        return this;
    };
    Deferred.prototype.done = function (callback) {
        switch (this.state) {
            case 'pending':
                this._callbacks.push({
                    fn: callback,
                    type: 'done',
                });
                break;
            case 'resolved':
                callback.apply(this, this.args);
                break;
        }
        return this;
    };
    Deferred.prototype.fail = function (callback) {
        switch (this.state) {
            case 'pending':
                this._callbacks.push({
                    fn: callback,
                    type: 'fail',
                });
                break;
            case 'rejected':
                callback.apply(this, this.args);
                break;
        }
        return this;
    };
    Deferred.prototype.always = function (callback) {
        switch (this.state) {
            case 'pending':
                this._callbacks.push({
                    fn: callback,
                    type: 'always',
                });
                break;
            default:
                callback.apply(this, this.args);
        }
        return this;
    };
    return Deferred;
}());
exports.default = Deferred;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MILLISECOND = 1;
var SECOND = MILLISECOND * 1000;
var MINUTE = SECOND * 60;
var HOUR = MINUTE * 60;
var DAY = HOUR * 24;
var WEEK = DAY * 7;
var YEAR = DAY * 365;
exports.default = function (duration) {
    var ret = [];
    var left = duration;
    // Years
    var years = Math.floor(left / YEAR);
    if (years > 0) {
        ret.push(years + "y");
        left -= (years * YEAR);
    }
    // Weeks
    var weeks = Math.floor(left / WEEK);
    if (weeks > 0) {
        ret.push(weeks + "w");
        left -= (weeks * WEEK);
    }
    // Days
    var days = Math.floor(left / DAY);
    if (days > 0) {
        ret.push(days + "d");
        left -= (days * DAY);
    }
    // Hours
    var hours = Math.floor(left / HOUR);
    if (hours > 0) {
        ret.push(hours + "h");
        left -= (hours * HOUR);
    }
    // minutes
    var minutes = Math.floor(left / MINUTE);
    if (minutes > 0) {
        ret.push(minutes + "m");
        left -= (minutes * MINUTE);
    }
    // seconds
    var seconds = Math.floor(left / SECOND);
    if (seconds > 0) {
        ret.push(seconds + "s");
        left -= (seconds * SECOND);
    }
    // milliseconds
    var milliseconds = Math.floor(left / MILLISECOND);
    if (milliseconds > 0) {
        ret.push(milliseconds + "i");
        left -= (milliseconds * MILLISECOND);
    }
    if (duration < 0) {
        ret.push('ago');
    }
    return ret.join(' ');
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
console.log("\n\n\n\n88  88  dP\"Yb  8b    d8 888888        db    88   88 888888  dP\"Yb  8b    d8    db    888888 88  dP\"Yb  88b 88      dP\"\"b8  dP\"Yb  88b 88 888888 88\"\"Yb  dP\"Yb  88         88  dP 888888 88\"\"Yb 88b 88 888888 88\n88  88 dP   Yb 88b  d88 88__         dPYb   88   88   88   dP   Yb 88b  d88   dPYb     88   88 dP   Yb 88Yb88     dP   '\" dP   Yb 88Yb88   88   88__dP dP   Yb 88         88odP  88__   88__dP 88Yb88 88__   88\n888888 Yb   dP 88YbdP88 88\"\"        dP__Yb  Y8   8P   88   Yb   dP 88YbdP88  dP__Yb    88   88 Yb   dP 88 Y88     Yb      Yb   dP 88 Y88   88   88\"Yb  Yb   dP 88  .o     88\"Yb  88\"\"   88\"Yb  88 Y88 88\"\"   88  .o\n88  88  YbodP  88 YY 88 888888     dP\"\"\"\"Yb 'YbodP'   88    YbodP  88 YY 88 dP\"\"\"\"Yb   88   88  YbodP  88  Y8      YboodP  YbodP  88  Y8   88   88  Yb  YbodP  88ood8     88  Yb 888888 88  Yb 88  Y8 888888 88ood8\n\n\n");
var logger_1 = __webpack_require__(2);
var date_and_time_stamp_1 = __webpack_require__(8);
var notifier_1 = __webpack_require__(18);
// Pins
var pins_1 = __webpack_require__(0);
var pins_2 = __webpack_require__(0);
// Relay: Direct Pins
var pins_3 = __webpack_require__(0);
var pins_4 = __webpack_require__(0);
// Relay: Extension Chord Alpha
var pins_5 = __webpack_require__(0);
var pins_6 = __webpack_require__(0);
// Relay: Extension Chord Bravo
var pins_7 = __webpack_require__(0);
var pins_8 = __webpack_require__(0);
var pins_9 = __webpack_require__(0);
var pins_10 = __webpack_require__(0);
// Conditions & Values
var daytime_1 = __webpack_require__(26);
var weather_1 = __webpack_require__(27);
var io_1 = __webpack_require__(4);
// App Directive Conditions
var pins_11 = __webpack_require__(1);
var pins_12 = __webpack_require__(1);
var pins_13 = __webpack_require__(1);
var pins_14 = __webpack_require__(1);
var pins_15 = __webpack_require__(1);
var pins_16 = __webpack_require__(1);
var pins_17 = __webpack_require__(1);
var pins_18 = __webpack_require__(1);
// import postMetric from './metrics';
var now = new Date();
var log = logger_1.default('app');
log('Running Version: 3.0.1');
log(date_and_time_stamp_1.default(now));
/*  Front Path Lights
--------------------------------------------------------*/
log(pins_3.front_path_lights.label + " are currently " + (pins_3.front_path_lights.state ? 'on' : 'off'));
pins_3.front_path_lights
    .followCondition(daytime_1.default, true)
    .followCondition(pins_13.path_lights);
/*  Salt Lamp
--------------------------------------------------------*/
pins_4.salt_lamp
    .followCondition(daytime_1.default, true)
    .followCondition(pins_14.salt_lamp);
/*  Sunrise/set Notifications
--------------------------------------------------------*/
daytime_1.default
    .on('change', function (state) {
    notifier_1.default(state ? 'Sunrise' : 'Sunset');
});
/*  Active Connection Light
--------------------------------------------------------*/
pins_1.green_led
    .followCondition(io_1.isConnected);
/*  Extension Chord Alpha
--------------------------------------------------------*/
pins_5.ext_alpha_0.followCondition(pins_11.ext_alpha_0);
pins_6.ext_alpha_1.followCondition(pins_12.ext_alpha_1);
/*  Extension Chord Bravo
--------------------------------------------------------*/
pins_7.ext_bravo_0
    .followCondition(daytime_1.default, true)
    .followCondition(pins_15.ext_bravo_0);
pins_8.ext_bravo_1
    .followCondition(daytime_1.default, true)
    .followCondition(pins_16.ext_bravo_1);
pins_9.ext_bravo_2
    .followCondition(daytime_1.default, true)
    .followCondition(pins_17.ext_bravo_2);
pins_10.ext_bravo_3
    .followCondition(daytime_1.default, true)
    .followCondition(pins_18.ext_bravo_3);
/*  Circle Button
--------------------------------------------------------*/
pins_2.circle_button.on('activate', function () {
    // Direct
    pins_4.salt_lamp.deactivate();
    pins_3.front_path_lights.deactivate();
    // Alpha
    pins_5.ext_alpha_0.deactivate();
    pins_6.ext_alpha_1.deactivate();
    // Bravo
    pins_7.ext_bravo_0.deactivate();
    pins_8.ext_bravo_1.deactivate();
    pins_9.ext_bravo_2.deactivate();
    pins_10.ext_bravo_3.deactivate();
});
/*  Log the Weather
--------------------------------------------------------*/
log('weather temp', weather_1.temperature.amount);
weather_1.temperature.on('change', function (amount) {
    log('weather temperature:', amount);
    // postMetric('temperature', amount);
});


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("dateformat");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pad_1 = __webpack_require__(9);
exports.default = function (date) {
    var year = date.getFullYear().toString();
    var month = pad_1.padLeft((date.getMonth() + 1).toString(), 2, '0');
    var day = pad_1.padLeft((date.getDate()).toString(), 2, '0');
    return year + "-" + month + "-" + day;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ifttt_webhook_1 = __webpack_require__(19);
var config_1 = __webpack_require__(3);
var event = 'reminder';
var post = ifttt_webhook_1.default('notification', event, config_1.webhookKey);
exports.default = function (msg) {
    return post(msg);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var json_1 = __webpack_require__(20);
var logger_1 = __webpack_require__(2);
exports.default = function (name, ev, key) {
    var log = logger_1.default("app.webhook." + name);
    return function (v1, v2, v3) {
        var endpoint = "https://maker.ifttt.com/trigger/" + ev + "/with/key/" + key;
        if (v3 !== undefined) {
            log(v1 + "\t" + v2 + "\t" + v3);
            return json_1.post(endpoint, {
                value1: v1,
                value2: v2,
                value3: v3,
            });
        }
        if (v2 !== undefined) {
            log(v1 + "\t" + v2);
            return json_1.post(endpoint, {
                value1: v1,
                value2: v2,
            });
        }
        log(v1);
        return json_1.post(endpoint, {
            value1: v1,
        });
    };
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = __webpack_require__(5);
exports.post = function (url, data) {
    return node_fetch_1.default(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then(function (response) { return response.text(); });
};
exports.get = function (url) {
    return node_fetch_1.default(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
        .then(function (response) { return response.json(); });
};


/***/ }),
/* 21 */
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
var pin_1 = __webpack_require__(11);
var io_1 = __webpack_require__(4);
var PinOut = /** @class */ (function (_super) {
    __extends(PinOut, _super);
    function PinOut(params) {
        var _this = _super.call(this, {
            id: params.id,
            label: params.label,
            pin: params.pin,
            mode: 'out',
        }) || this;
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
            io_1.default.emit("update:pin:" + this.id, state);
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
    return PinOut;
}(pin_1.default));
exports.default = PinOut;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("onoff");

/***/ }),
/* 25 */
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
var pin_1 = __webpack_require__(11);
var io_1 = __webpack_require__(4);
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
            io_1.default.emit("update:pin:" + _this.id, value === 1);
        });
        return _this;
    }
    return PinIn;
}(pin_1.default));
exports.default = PinIn;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = __webpack_require__(5);
var condition_1 = __webpack_require__(7);
var deferred_1 = __webpack_require__(13);
var config_1 = __webpack_require__(3);
var readable_duration_1 = __webpack_require__(14);
var timestamp_1 = __webpack_require__(10);
var date_and_time_stamp_1 = __webpack_require__(8);
;
;
var endpoint = "https://api.sunrise-sunset.org/json?lat=" + config_1.coords.lat + "&lng=" + config_1.coords.lng + "&formatted=0";
var fullDay = 1000 * 60 * 60 * 24;
// based on time of day.. just a guess for initial state
var guess = Math.abs(new Date().getHours() - 12) < 6;
exports.default = new condition_1.default('daytime', guess, function (self) {
    function getTimes() {
        var now = new Date();
        var today = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
        self.log("Getting times for " + today + "...");
        var url = endpoint + "&date=" + today;
        var dfr = new deferred_1.default();
        node_fetch_1.default(url)
            .then(function (response) {
            return response.json();
        })
            .then(function (json) {
            /* SAMPLE RESPONSE DATA
            {
              results: {
                sunrise: '1:12:46 PM',
                sunset: '12:18:14 AM',
                solar_noon: '6:45:30 PM',
                day_length: '11:05:28',
                civil_twilight_begin: '12:45:30 PM',
                civil_twilight_end: '12:45:30 AM',
                nautical_twilight_begin: '12:14:02 PM',
                nautical_twilight_end: '1:16:58 AM',
                astronomical_twilight_begin: '11:42:40 AM',
                astronomical_twilight_end: '1:48:19 AM'
              },
              status: 'OK'
            }
            */
            // console.log('json: ', json);
            var resolution = {
                rise: new Date("" + json.results.sunrise),
                set: new Date("" + json.results.sunset),
            };
            dfr.resolve(resolution);
        })
            .catch(function (err) {
            console.warn('Condition Daytime Lookup Error');
            console.error(err);
            dfr.reject(err);
        });
        return dfr;
    }
    function getAndHandleTimes() {
        getTimes()
            .done(function (sun) {
            var now = new Date();
            // console.log('now: ', now.toString());
            // console.log('sun.rise: ', sun.rise.toString());
            // console.log('sun.set: ', sun.set.toString());
            var timeUntilSunrise = sun.rise.getTime() - now.getTime();
            // console.log('timeUntilSunrise: ', timeUntilSunrise);
            var hasRisen = timeUntilSunrise < 0;
            // console.log('hasRisen: ', hasRisen);
            var timeUntilSunset = sun.set.getTime() - now.getTime();
            // console.log('timeUntilSunset: ', timeUntilSunset);
            var hasSet = timeUntilSunset < 0;
            // console.log('hasSet: ', hasSet);
            var isDaytime = hasRisen && !hasSet;
            // console.log('isDaytime: ', isDaytime);
            self.set(isDaytime);
            // if the sun has not risen, set a timeout for that event
            if (!hasRisen) {
                self.log("Sunrise: " + timestamp_1.default(sun.rise) + " -- " + readable_duration_1.default(timeUntilSunrise));
                setTimeout(function () {
                    self.set(true);
                }, timeUntilSunrise);
            }
            else {
                self.log("Sun rose this morning at " + timestamp_1.default(sun.rise));
            }
            // if the sun has not set, set a timeout for that event
            if (!hasSet) {
                self.log("Sunset: " + timestamp_1.default(sun.set) + " -- " + readable_duration_1.default(timeUntilSunset));
                setTimeout(function () {
                    self.set(false);
                }, timeUntilSunset);
            }
            else {
                self.log("Sun set this evening at " + timestamp_1.default(sun.set));
            }
        })
            .fail(function (er) {
            console.warn('Failed to get sunrise times');
            console.error(er);
        });
    }
    getAndHandleTimes();
    // Create daily interval, starting tomorrow
    var tomorrow_2am = new Date();
    tomorrow_2am.setDate(tomorrow_2am.getDate() + 1);
    tomorrow_2am.setHours(2);
    tomorrow_2am.setMinutes(0);
    tomorrow_2am.setSeconds(0);
    tomorrow_2am.setMilliseconds(0);
    var now = new Date();
    var timeUntil_2am = tomorrow_2am.getTime() - now.getTime();
    self.log("Time Until 2am: " + readable_duration_1.default(timeUntil_2am) + " at " + date_and_time_stamp_1.default(tomorrow_2am));
    setTimeout(function () {
        getAndHandleTimes();
        setInterval(getAndHandleTimes, fullDay);
    }, timeUntil_2am);
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __webpack_require__(28);
var node_fetch_1 = __webpack_require__(5);
var config_1 = __webpack_require__(3);
var amount_1 = __webpack_require__(12);
var value_1 = __webpack_require__(29);
var deferred_1 = __webpack_require__(13);
var duration_1 = __webpack_require__(30);
var logger_1 = __webpack_require__(2);
var readable_duration_1 = __webpack_require__(14);
exports.state = new value_1.default('Current Weather State');
exports.description = new value_1.default('Current Weather Description');
exports.temperature = new amount_1.default('Current Temperature');
exports.pressure = new amount_1.default('Current Pressure');
exports.humidity = new amount_1.default('Current Humidity');
exports.minTemperature = new amount_1.default('Today\'s Min Temperature');
exports.maxTemperature = new amount_1.default('Today\'s Max Temperature');
exports.windSpeed = new amount_1.default('Current Wind Speed');
exports.windDirection = new amount_1.default('Current Wind Direction');
exports.clouds = new amount_1.default('Current Clouds');
exports.rain = new amount_1.default('Last 3h of Rain');
exports.snow = new amount_1.default('Last 3h of Snow');
var log = logger_1.default('weather api');
var weatherEndpoint = "http://api.openweathermap.org/data/2.5/weather?lat=" + config_1.coords.lat + "&lon=" + config_1.coords.lng + "&appid=" + config_1.weatherAppId;
function k2F(kelvin) {
    return Math.round((kelvin * (9 / 5)) - 459.67);
}
function fetchWeather() {
    var now = new Date();
    var dataDfr = new deferred_1.default();
    var cacheFilename = './weather-cache.json';
    var exists = fs_1.existsSync(cacheFilename);
    var shouldMakeRequest = false;
    if (exists) {
        var stats = fs_1.statSync(cacheFilename);
        var delta = now.getTime() - stats.mtime.getTime();
        var isOld = delta > duration_1.default('10m');
        log('cache file was updated last: ', readable_duration_1.default(delta));
        if (isOld) {
            shouldMakeRequest = true;
        }
    }
    else {
        shouldMakeRequest = true;
    }
    log("Fetching weather data from " + (shouldMakeRequest ? 'the network' : 'cache'));
    if (shouldMakeRequest) {
        node_fetch_1.default(weatherEndpoint)
            .then(function (response) {
            return response.json();
        })
            .then(function (data) {
            // update cache
            fs_1.writeFileSync(cacheFilename, JSON.stringify(data, null, 4));
            // resolve dfr
            dataDfr.resolve(data);
        })
            .catch(function (er) {
            dataDfr.reject(er);
        });
    }
    else {
        var json = fs_1.readFileSync(cacheFilename).toString();
        var data = JSON.parse(json);
        dataDfr.resolve(data);
    }
    dataDfr
        .done(function (data) {
        exports.state.value = data.weather[0].main;
        exports.description.value = data.weather[0].description;
        exports.temperature.amount = k2F(data.main.temp);
        exports.pressure.amount = data.main.pressure;
        exports.humidity.amount = data.main.humidity;
        exports.minTemperature.amount = k2F(data.main.temp_min);
        exports.maxTemperature.amount = k2F(data.main.temp_max);
        exports.windSpeed.amount = data.wind.speed;
        exports.windDirection.amount = data.wind.deg;
        exports.clouds.amount = data.clouds.all;
        if ('rain' in data) {
            exports.rain.amount = data.rain['3h'];
        }
        if ('snow' in data) {
            exports.snow.amount = data.snow['3h'];
        }
        log('...done');
    })
        .fail(function (er) {
        log('ERROR');
    });
}
fetchWeather();
setInterval(fetchWeather, duration_1.default('15m'));


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 29 */
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
var emitter_1 = __webpack_require__(6);
var Value = /** @class */ (function (_super) {
    __extends(Value, _super);
    function Value(label, value) {
        if (value === void 0) { value = ''; }
        var _this = _super.call(this) || this;
        _this.label = label;
        var _value = value;
        Object.defineProperty(_this, 'value', {
            get: function () {
                return _value;
            },
            set: function (newValue) {
                if (_value !== newValue) {
                    var oldValue = _value;
                    _value = newValue;
                    _this.emit('change', newValue, oldValue);
                }
            }
        });
        return _this;
    }
    return Value;
}(emitter_1.default));
exports.default = Value;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var map = {
    'y': 1000 * 60 * 60 * 24 * 365,
    'w': 1000 * 60 * 60 * 24 * 7,
    'd': 1000 * 60 * 60 * 24,
    'h': 1000 * 60 * 60,
    'm': 1000 * 60,
    's': 1000,
    'i': 1
};
exports.default = function (amount) {
    amount = amount.replace(/ /g, '');
    var segments = [];
    var digit = '';
    var value = '';
    var mode = 'd';
    amount.split('').forEach(function (c) {
        if (('0123456789.').indexOf(c) > -1) {
            if (mode == 'v') {
                segments.push(digit + value);
                digit = '';
                value = '';
                mode = 'd';
            }
            digit += c;
        }
        else {
            value += c;
            if (mode == 'd') {
                mode = 'v';
            }
        }
    });
    segments.push(digit + value);
    var total = 0;
    segments.forEach(function (segment) {
        var numbers = parseFloat(segment.match(/\d/g).join(''));
        var letters = segment.match(/\D/g).join('');
        total += numbers * map[letters];
    });
    return total;
};


/***/ }),
/* 31 */
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
var condition_1 = __webpack_require__(7);
var SocketCondition = /** @class */ (function (_super) {
    __extends(SocketCondition, _super);
    function SocketCondition(id, io) {
        var _this = _super.call(this, "socket:" + id, false, function (condition) {
            io.on('connection', function (socket) {
                socket.setMaxListeners(100);
                socket.on("update:condition-" + id, function (val) {
                    condition.set(val);
                });
                socket.on("ping:condition-" + id, function () {
                    socket.emit("update:condition-" + id, condition.get());
                });
                _this.on('change', function () {
                    socket.emit("update:condition-" + id, condition.get());
                });
            });
        }) || this;
        _this.id = id;
        return _this;
    }
    return SocketCondition;
}(condition_1.default));
exports.default = SocketCondition;


/***/ })
/******/ ]);