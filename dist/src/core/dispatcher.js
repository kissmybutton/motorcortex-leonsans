"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dispatcher = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dispatcher =
/*#__PURE__*/
function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    this.handlers_ = {
      update: {
        listeners: []
      }
    };
  }

  _createClass(Dispatcher, [{
    key: "on",
    value: function on(event, callback) {
      if (typeof callback !== "function") {
        console.error("The listener callback must be a function, the given type is ".concat(_typeof(callback)));
        return false;
      }

      if (typeof event !== "string") {
        console.error("The event name must be a string, the given type is ".concat(_typeof(event)));
        return false;
      }

      if (this.handlers_[event] === undefined) {
        this.handlers_[event] = {
          listeners: []
        };
      }

      this.handlers_[event].listeners.push(callback);
    }
  }, {
    key: "off",
    value: function off(event, callback) {
      if (this.handlers_[event] === undefined) {
        console.error("This event: ".concat(event, " does not exist"));
        return false;
      }

      this.handlers_[event].listeners = this.handlers_[event].listeners.filter(function (listener) {
        return listener.toString() !== callback.toString();
      });
    }
  }, {
    key: "dispatch",
    value: function dispatch(event, data) {
      this.handlers_[event].listeners.forEach(function (listener) {
        listener(data);
      });
    }
  }]);

  return Dispatcher;
}();

exports.Dispatcher = Dispatcher;