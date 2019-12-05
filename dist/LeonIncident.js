"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MC = require("@kissmybutton/motorcortex");

var compAtrrs = require("./compoAttributes");

var dont = false;

var testIn =
/*#__PURE__*/
function (_MC$API$MonoIncident) {
  _inherits(testIn, _MC$API$MonoIncident);

  function testIn() {
    _classCallCheck(this, testIn);

    return _possibleConstructorReturn(this, _getPrototypeOf(testIn).apply(this, arguments));
  }

  _createClass(testIn, [{
    key: "getScratchValue",
    value: function getScratchValue() {
      if (this.attributeKey === "LeonAtrs") {
        var obj = {};
        var LeonAtrs = compAtrrs[this.attributeKey];
        var currentLeonAtrs = this.element.entity.leon;

        for (var i = 0; i < LeonAtrs.length; i++) {
          obj[LeonAtrs[i]] = currentLeonAtrs[LeonAtrs[i]];
        }

        return obj;
      }
    }
  }, {
    key: "onProgress",
    value: function onProgress(f, m) {
      var _this = this;

      var drawning = function drawning() {
        switch (_this.element.entity.drawing) {
          case "colorful":
            _this.element.entity.leon.drawColorful(_this.element.entity.ctx);

            break;

          case "pattern":
            //this.element.entity.ctx.fillStyle = "#32a852";
            // console.log(this.element.entity.ctx.fillStyle);
            _this.element.entity.leon.pattern(_this.element.entity.ctx, _this.element.entity.leon.patternWidth ? _this.element.entity.leon.patternWidth : _this.element.entity.patternWidth, _this.element.entity.leon.patternHeight ? _this.element.entity.leon.patternHeight : _this.element.entity.patternHeight);

            break;

          case "wave":
            break;

          case "colorPattern":
            break;

          default:
            if (!dont) {
              _this.element.entity.leon.draw(_this.element.entity.ctx);
            }

        }
      };

      var clearRect = function clearRect() {
        _this.element.entity.ctx.clearRect(0, 0, _this.element.entity.sw, _this.element.entity.sh);
      };

      var animate = function animate() {
        for (var j = 0; j < compAtrrs.LeonAtrs.length; j++) {
          var t = compAtrrs.LeonAtrs[j];

          if (_this.targetValue.hasOwnProperty("completion_rate")) {
            dont = false;
          }

          _this.element.entity.leon[t] = f * (_this.targetValue[t] - _this.initialValue[t]) + _this.initialValue[t];

          if (t === "completion_rate") {
            var i = void 0,
                total = _this.element.entity.leon.drawing.length;

            for (i = 0; i < total; i++) {
              _this.element.entity.leon.drawing[i].value = f * (_this.targetValue[t] - _this.initialValue[t]) + _this.initialValue[t];
            }

            dont = true;
          }
        }
      };

      for (var j = 0; j < compAtrrs.LeonAtrs.length; j++) {
        var t = compAtrrs.LeonAtrs[j];

        if (this.initialValue[t] !== this.targetValue[t]) {
          if (this.targetValue.hasOwnProperty("completion_rate")) {
            dont = false;
          } else {
            dont = true;
          }

          this.element.entity.leon[t] = f * (this.targetValue[t] - this.initialValue[t]) + this.initialValue[t];
        }
      }

      clearRect(); // console.log("initial", this.initialValue, "target", this.targetValue);

      if (!dont) {
        animate();
        drawning();
      }
    }
  }]);

  return testIn;
}(MC.API.MonoIncident);

module.exports = testIn;