"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = void 0;

var _util = require("./util.js");

var _guide = require("./guide.js");

var _group = require("./group.js");

var _align = require("./align.js");

var _index = require("../font/index.js");

var _length = require("./length.js");

var _paths = require("./paths.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Model =
/*#__PURE__*/
function () {
  function Model() {
    _classCallCheck(this, Model);

    this.lineWidth_ = 1;
    this.drawing_ = [];
    this.data_ = null;
    this.paths_ = null;
    this.lines_ = null;
    this.rect_ = {
      x: 0,
      y: 0,
      w: 0,
      h: 0
    };
    this.align_ = "left";
    this.scale_ = 1;
    this.fontRatio_ = 1;
  }

  _createClass(Model, [{
    key: "position",
    value: function position(x, y) {
      if (this.rect_.x != x || this.rect_.y != y) {
        this.rect_.x = x;
        this.rect_.y = y;
        this.setPosition();
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "setPosition",
    value: function setPosition() {
      var total = this.data_.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.data_[i];
        d.rect.x = d.originPos.x + this.rect_.x + (0, _align.getAlignGapX)(this.align_, d.alignGapX);
        d.rect.y = d.originPos.y + this.rect_.y;
      }
    }
  }, {
    key: "updateDrawingPaths",
    value: function updateDrawingPaths() {
      var total = this.data_.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.data_[i];
        d.drawingPaths = (0, _util.addRectToPaths)((0, _paths.getPaths)(this, d, -1, false), d);
      }
    }
  }, {
    key: "updatePatternPaths",
    value: function updatePatternPaths(pathGap) {
      var total = this.data_.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.data_[i];
        d.rawPaths = (0, _paths.getPaths)(this, d, pathGap, true);
      }
    }
  }, {
    key: "updateWavePaths",
    value: function updateWavePaths(pathGap) {
      var total = this.data_.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.data_[i];
        d.rawWavePaths = (0, _paths.getPaths)(this, d, pathGap, false);
      }
    }
  }, {
    key: "updateGuide",
    value: function updateGuide() {
      var total = this.data_.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.data_[i];
        d.guide = (0, _guide.getGuide)(d.typo, this.scale);
        d.grid = (0, _guide.getGrid)(d.typo, this.scale);
      }
    }
  }, {
    key: "update",
    value: function update(text, width, breakWord, weight, size, tracking, leading) {
      var fontW = (0, _util.getFontW)(weight);
      var weightRatio = (0, _util.getWeightRatio)(fontW);
      var circleRound = (0, _util.getCircleRound)(fontW);
      var scale = (0, _util.getScale)(size);
      var m_tracking = (0, _util.getTracking)(tracking, scale);
      var m_leading = (0, _util.getLeading)(leading, scale);
      var fontRatio = (0, _util.getFontRatio)(weightRatio);
      this.fontRatio_ = fontRatio;
      this.scale_ = scale;
      this.lineWidth_ = (0, _util.getLineW)(fontW, scale);
      var textGroup = (0, _group.getTextGroup)(text, scale, width, breakWord);
      var total = textGroup.length;
      var total2 = total - 1;
      var i,
          j,
          j_total,
          j_total2,
          gt,
          t,
          str,
          m_rect,
          s_pos,
          tw = 0,
          th = 0,
          tx = 0,
          ty = 0,
          maxW = 0,
          maxH = 0,
          tmp = [];

      for (i = 0; i < total; i++) {
        gt = textGroup[i];
        j_total = gt.length;
        j_total2 = j_total - 1;
        tw = 0;
        tx = 0;
        tmp[i] = {
          tw: 0,
          arr: []
        };

        for (j = 0; j < j_total; j++) {
          str = gt[j];
          t = (0, _index.typo)(str);
          m_rect = (0, _util.getRect)(t, scale);
          tw += m_rect.w;
          th = m_rect.h;

          if (j < j_total2) {
            tw += m_tracking;
          }

          if (i < total2) {
            th += m_leading;
          }

          m_rect.x = tx;
          m_rect.y = ty;
          s_pos = {
            x: tx,
            y: ty
          };
          tmp[i].arr[j] = {
            str: str,
            typo: t,
            rect: m_rect,
            originPos: s_pos,
            center: (0, _util.getCenter)(m_rect.w, m_rect.h, scale),
            range: (0, _util.getRange)(t, weightRatio, circleRound)
          };
          tx = tw;
        }

        ty += th;
        tmp[i].tw = tw;
        maxW = Math.max(maxW, tw);
        maxH += th;
      }

      this.rect_.w = maxW;
      this.rect_.h = maxH;
      this.drawing_ = [];
      var arr = [];
      var aGapX, drawing;

      for (var _i = 0, _tmp = tmp; _i < _tmp.length; _i++) {
        var a = _tmp[_i];
        aGapX = (0, _align.setAlignGapX)(maxW, a.tw);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = a.arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var b = _step.value;
            b.alignGapX = aGapX;
            b.pointsLength = (0, _length.getLengths)(b, this);
            arr.push(b);
            drawing = {
              value: 1
            };
            this.drawing_.push(drawing);
            b.drawing = drawing; // add converted Vector

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = b.typo.p[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var c = _step2.value;
                c.cv = [];
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                  for (var _iterator3 = c.v[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var d = _step3.value;
                    c.cv.push(d.convert(b, this));
                  }
                } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                      _iterator3["return"]();
                    }
                  } finally {
                    if (_didIteratorError3) {
                      throw _iteratorError3;
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      this.data_ = arr;
      this.setPosition();
    }
  }, {
    key: "updatePathsForRect",
    value: function updatePathsForRect() {
      var total = this.data_.length;
      var paths = [];
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.data_[i];

        if (d.rawWavePaths) {
          d.wavePaths = (0, _util.addRectToPaths)(d.rawWavePaths, d);
        }

        if (d.rawPaths) {
          d.paths = (0, _util.addRectToPaths)(d.rawPaths, d);
          Array.prototype.push.apply(paths, d.paths);
        }
      }

      this.paths_ = paths;
    }
  }, {
    key: "updateLinesForRect",
    value: function updateLinesForRect() {
      var total = this.data_.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.data_[i];
        d.lines = (0, _util.getLines)(d);
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.lineWidth_ = 1;
      this.drawing_ = [];
      this.data_ = null;
      this.paths_ = null;
      this.lines_ = null;
      this.rect_ = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      };
      this.align_ = "left";
      this.scale_ = 1;
      this.fontRatio_ = 1;
    }
  }, {
    key: "data",
    get: function get() {
      return this.data_;
    }
  }, {
    key: "paths",
    get: function get() {
      return this.paths_;
    }
  }, {
    key: "lines",
    get: function get() {
      return this.lines_;
    },
    set: function set(v) {
      this.lines_ = v;
    }
  }, {
    key: "lineWidth",
    get: function get() {
      return this.lineWidth_;
    }
  }, {
    key: "fontRatio",
    get: function get() {
      return this.fontRatio_;
    }
  }, {
    key: "scale",
    get: function get() {
      return this.scale_;
    }
  }, {
    key: "rect",
    get: function get() {
      return this.rect_;
    }
  }, {
    key: "drawing",
    get: function get() {
      return this.drawing_;
    }
  }, {
    key: "align",
    set: function set(v) {
      if (this.align_ != v) {
        this.align_ = v;
        this.setPosition();
      }
    },
    get: function get() {
      return this.align_;
    }
  }]);

  return Model;
}();

exports.Model = Model;