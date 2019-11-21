"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dispatcher = require("./core/dispatcher.js");

var _util = require("./core/util.js");

var _lines = require("./draw/canvas/lines.js");

var _points = require("./draw/canvas/points.js");

var _grids = require("./draw/canvas/grids.js");

var _wave = require("./draw/canvas/wave.js");

var _pattern = require("./draw/canvas/pattern.js");

var _color = require("./draw/canvas/color.js");

var _colorful = require("./draw/canvas/colorful.js");

var _lines2 = require("./draw/pixi/lines.js");

var _color2 = require("./draw/pixi/color.js");

var _model = require("./core/model.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LeonSans =
/*#__PURE__*/
function (_Dispatcher) {
  _inherits(LeonSans, _Dispatcher);

  function LeonSans() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$text = _ref.text,
        text = _ref$text === void 0 ? "" : _ref$text,
        _ref$size = _ref.size,
        size = _ref$size === void 0 ? 500 : _ref$size,
        _ref$weight = _ref.weight,
        weight = _ref$weight === void 0 ? _util.MIN_FONT_WEIGHT : _ref$weight,
        _ref$color = _ref.color,
        color = _ref$color === void 0 ? ["#000000"] : _ref$color,
        _ref$colorful = _ref.colorful,
        colorful = _ref$colorful === void 0 ? ["#c5d73f", "#9d529c", "#49a9db", "#fec330", "#5eb96e", "#fc5356", "#f38f31"] : _ref$colorful,
        _ref$tracking = _ref.tracking,
        tracking = _ref$tracking === void 0 ? 0 : _ref$tracking,
        _ref$leading = _ref.leading,
        leading = _ref$leading === void 0 ? 0 : _ref$leading,
        _ref$align = _ref.align,
        align = _ref$align === void 0 ? "left" : _ref$align,
        _ref$pathGap = _ref.pathGap,
        pathGap = _ref$pathGap === void 0 ? 0.5 : _ref$pathGap,
        _ref$amplitude = _ref.amplitude,
        amplitude = _ref$amplitude === void 0 ? 0.5 : _ref$amplitude,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 0 : _ref$width,
        _ref$breakWord = _ref.breakWord,
        breakWord = _ref$breakWord === void 0 ? false : _ref$breakWord,
        _ref$fps = _ref.fps,
        fps = _ref$fps === void 0 ? 30 : _ref$fps,
        _ref$isPath = _ref.isPath,
        isPath = _ref$isPath === void 0 ? false : _ref$isPath,
        _ref$isWave = _ref.isWave,
        isWave = _ref$isWave === void 0 ? false : _ref$isWave;

    _classCallCheck(this, LeonSans);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LeonSans).call(this));
    _this.size_ = size;
    _this.weight_ = weight;
    _this.color_ = color;
    _this.colorful_ = (0, _util.shuffle)(colorful);
    _this.tracking_ = tracking;
    _this.leading_ = leading;
    _this.pathGap_ = pathGap;
    _this.amplitude_ = amplitude;
    _this.width_ = width;
    _this.breakWord_ = breakWord;
    _this.fps_ = fps;
    _this.fpsTime_ = 1000 / _this.fps_;
    _this.isPath_ = isPath;
    _this.isWave_ = isWave;
    _this.model = new _model.Model();
    _this.str_ = null;
    _this.time_ = null;
    _this.isFps_ = false;
    _this.isForceRander_ = false;
    _this.updateID_ = 0;
    _this.dPathsID_ = null;
    _this.pPathsID_ = null;
    _this.wPathsID_ = null;
    _this.guideID_ = null;
    _this.text = text;
    _this.model.align = align;
    return _this;
  }

  _createClass(LeonSans, [{
    key: "on",
    value: function on(event, callback) {
      _get(_getPrototypeOf(LeonSans.prototype), "on", this).call(this, event, callback);

      this.update();
    }
  }, {
    key: "off",
    value: function off(event, callback) {
      _get(_getPrototypeOf(LeonSans.prototype), "off", this).call(this, event, callback);
    }
  }, {
    key: "position",
    value: function position() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this.model.position(x, y)) {
        this.updateID_++;
        this.updateSignal();
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.updateID_++;
      this.model.update(this.str_, this.width_, this.breakWord_, this.weight_, this.size_, this.tracking_, this.leading_);

      if (this.isPath_ || this.isWave_) {
        this.updatePatternPaths();
        this.updateWavePaths();
      } else {
        this.updateSignal();
      }
    }
  }, {
    key: "updateGuide",
    value: function updateGuide() {
      if (this.guideID_ != this.updateID_) {
        this.guideID_ = this.updateID_;
        this.model.updateGuide();
      }
    }
    /**
     * Update paths for drawing in WebGL (PIXI.js). It's very expensive, only call when it needs.
     */

  }, {
    key: "updateDrawingPaths",
    value: function updateDrawingPaths() {
      if (this.dPathsID_ != this.updateID_) {
        this.dPathsID_ = this.updateID_;
        this.model.updateDrawingPaths();
      }
    }
    /**
     * Update paths for pattern
     * @param {boolean} force - Force execution
     */

  }, {
    key: "updatePatternPaths",
    value: function updatePatternPaths(force) {
      if (this.isPath_ && (force || this.pPathsID_ != this.updateID_)) {
        this.pPathsID_ = this.updateID_;
        this.model.updatePatternPaths(this.pathGap_);
        this.isForceRander_ = true;
        this.updateSignal();
      }
    }
    /**
     * Update paths for wave effect
     * @param {boolean} force - Force execution
     */

  }, {
    key: "updateWavePaths",
    value: function updateWavePaths(force) {
      if (this.isWave_ && (force || this.wPathsID_ != this.updateID_)) {
        this.wPathsID_ = this.updateID_;
        this.model.updateWavePaths(this.pathGap_);
        this.isForceRander_ = true;
        this.updateSignal();
      }
    }
  }, {
    key: "updateSignal",
    value: function updateSignal() {
      this.model.updateLinesForRect();
      this.model.updatePathsForRect();
      this.dispatch("update", this.model);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.size_ = 500;
      this.weight_ = _util.MIN_FONT_WEIGHT;
      this.color_ = ["#000000"];
      this.tracking_ = 0;
      this.leading_ = 0;
      this.pathGap_ = 0.5;
      this.amplitude_ = 0.5;
      this.width_ = 0;
      this.breakWord_ = false;
      this.fps_ = 30;
      this.fpsTime_ = 1000 / this.fps_;
      this.isPath_ = false;
      this.isWave_ = false;
      this.str_ = null;
      this.time_ = null;
      this.isFps_ = false;
      this.isForceRander_ = false;
      this.updateID_ = 0;
      this.dPathsID_ = null;
      this.pPathsID_ = null;
      this.wPathsID_ = null;
      this.guideID_ = null;
      this.model.reset();
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.reset();
      this.model = null;
    }
    /**
     * Draw text in WebGL with PIXI.js
     * @param {PIXI.Graphics} graphics
     */

  }, {
    key: "drawPixi",
    value: function drawPixi(graphics) {
      var total = this.model.data.length;
      var i, d, color;

      for (i = 0; i < total; i++) {
        d = this.model.data[i];
        color = (0, _color2.PixiColor)(i, d, this.color_);
        (0, _lines2.PixiLines)(graphics, d, this.lineWidth, color);
      }
    }
    /**
     * Draw text in the Canvas element.
     * @param {CanvasRenderingContext2D} ctx
     */

  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.lineWidth = this.lineWidth;
      var total = this.model.data.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.model.data[i];
        (0, _color.Color)(ctx, i, d, this.color_);
        (0, _lines.Lines)(ctx, d);
      }
    }
    /**
     * Draw the colorful effect.
     * @param {CanvasRenderingContext2D} ctx
     */

  }, {
    key: "drawColorful",
    value: function drawColorful(ctx) {
      ctx.lineWidth = this.lineWidth;
      (0, _colorful.Colorful)(ctx, this.model, this.colorful_);
    }
    /**
     * Draw the wave effect.
     * @param {CanvasRenderingContext2D} ctx
     * @param {DOMHighResTimeStamp} t time stemp from requestAnimationFrame()
     */

  }, {
    key: "wave",
    value: function wave(ctx, t) {
      ctx.lineWidth = this.lineWidth;

      if (t) {
        if (!this.time_) this.time_ = t;
        var p = t - this.time_;

        if (p > this.fpsTime_ || this.isForceRander_) {
          this.time_ = t;
          this.isFps_ = true;
        } else {
          this.isFps_ = false;
        }
      }

      this.isForceRander_ = false;
      var total = this.model.data.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.model.data[i];
        (0, _color.Color)(ctx, i, d, this.color_);
        (0, _wave.Wave)(ctx, d, this.model.scale, this.amplitude_, this.weight_, this.isFps_);
      }
    }
    /**
     * Draw rectangle shapes at each path point.
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} w pattern width
     * @param {number} h pattern height
     */

  }, {
    key: "pattern",
    value: function pattern(ctx, w, h) {
      var tw = w * this.model.scale;
      var th = h * this.model.scale;
      var total = this.model.data.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.model.data[i];
        (0, _pattern.Pattern)(ctx, d, tw, th);
      }
    }
    /**
     * Draw grid for each type.
     * @param {CanvasRenderingContext2D} ctx
     */

  }, {
    key: "grid",
    value: function grid(ctx) {
      this.updateGuide();
      var total = this.model.data.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.model.data[i];
        (0, _grids.Grids)(ctx, d);
      }
    }
    /**
     * Draw circles at each drawing point and lines for each type.
     * @param {CanvasRenderingContext2D} ctx
     */

  }, {
    key: "point",
    value: function point(ctx) {
      var total = this.model.data.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.model.data[i];
        (0, _points.Points)(ctx, d);
      }
    }
    /**
     * Draw outline box for the text.
     * @param {CanvasRenderingContext2D} ctx
     * @private
     */

  }, {
    key: "box",
    value: function box(ctx) {
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.strokeStyle = "#0b90dc";
      ctx.rect(this.model.rect.x, this.model.rect.y, this.model.rect.w, this.model.rect.h);
      ctx.stroke();
    }
  }, {
    key: "text",
    get: function get() {
      return this.str_;
    },
    set: function set(str) {
      if (this.str_ == str) return;
      this.str_ = str;
      this.update();
    }
  }, {
    key: "size",
    get: function get() {
      return this.size_;
    },
    set: function set(v) {
      if (this.size_ == v) return;
      this.size_ = v;
      this.update();
      this.isForceRander_ = true;
    }
  }, {
    key: "weight",
    get: function get() {
      return this.weight_;
    },
    set: function set(v) {
      if (v < _util.MIN_FONT_WEIGHT) {
        v = _util.MIN_FONT_WEIGHT;
      } else if (v > _util.MAX_FONT_WEIGHT) {
        v = _util.MAX_FONT_WEIGHT;
      }

      if (this.weight_ == v) return;
      this.weight_ = v;
      this.update();
      this.isForceRander_ = true;
    }
  }, {
    key: "color",
    get: function get() {
      return this.color_;
    },
    set: function set(v) {
      if (this.color_ == v) return;
      this.color_ = v;
    }
  }, {
    key: "tracking",
    get: function get() {
      return this.tracking_;
    },
    set: function set(v) {
      if (this.tracking_ == v) return;
      this.tracking_ = v;
      this.update();
      this.isForceRander_ = true;
    }
  }, {
    key: "leading",
    get: function get() {
      return this.leading_;
    },
    set: function set(v) {
      if (this.leading_ == v) return;
      this.leading_ = v;
      this.update();
      this.isForceRander_ = true;
    }
  }, {
    key: "align",
    get: function get() {
      return this.model.align;
    },
    set: function set(v) {
      if (this.model.align != v) {
        this.model.align = v;
        this.updateID_++;
        this.updateSignal();
      }
    }
  }, {
    key: "pathGap",
    get: function get() {
      return this.pathGap_;
    },
    set: function set(v) {
      if (this.pathGap_ != v) {
        this.pathGap_ = v;
        this.updatePatternPaths(true);
        this.updateWavePaths(true);
        this.isForceRander_ = true;
      }
    }
  }, {
    key: "amplitude",
    get: function get() {
      return this.amplitude_;
    },
    set: function set(v) {
      this.amplitude_ = v;
    }
  }, {
    key: "rect",
    get: function get() {
      return this.model.rect;
    }
  }, {
    key: "maxWidth",
    set: function set(v) {
      if (this.width_ == v) return;
      this.width_ = v;
      this.update();
    },
    get: function get() {
      return this.width_;
    }
  }, {
    key: "breakWord",
    set: function set(v) {
      if (this.breakWord_ == v) return;
      this.breakWord_ = v;
      this.update();
    },
    get: function get() {
      return this.breakWord_;
    }
  }, {
    key: "isPath",
    get: function get() {
      return this.isPath_;
    },
    set: function set(v) {
      this.isPath_ = v;
      this.updatePatternPaths(true);
    }
  }, {
    key: "isWave",
    get: function get() {
      return this.isWave_;
    },
    set: function set(v) {
      this.isWave_ = v;
      this.updateWavePaths(true);
    }
  }, {
    key: "fps",
    get: function get() {
      return this.fps_;
    },
    set: function set(v) {
      this.fps_ = v;
      this.fpsTime_ = 1000 / this.fps_;
    }
  }, {
    key: "lineWidth",
    get: function get() {
      return this.model.lineWidth;
    }
  }, {
    key: "scale",
    get: function get() {
      return this.model.scale;
    }
  }, {
    key: "drawing",
    get: function get() {
      return this.model.drawing;
    }
  }, {
    key: "data",
    get: function get() {
      return this.model.data;
    }
  }, {
    key: "paths",
    get: function get() {
      return this.model.paths;
    }
  }, {
    key: "drawingPaths",
    get: function get() {
      return this.model.drawingPaths;
    }
  }, {
    key: "wavePaths",
    get: function get() {
      return this.model.wavePaths;
    }
  }]);

  return LeonSans;
}(_dispatcher.Dispatcher);

exports["default"] = LeonSans;