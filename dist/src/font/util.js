"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateFontData = generateFontData;
exports.getR = getR;
exports.getCurveR = getCurveR;
exports.TOFU = exports.VERTEX_GAP2 = exports.VERTEX_GAP = exports.ROTATE_NONE = exports.ROTATE_VERTICAL = exports.ROTATE_HORIZONTAL = void 0;

var _vector = require("../core/vector.js");

var _paths = require("../core/paths.js");

var ROTATE_HORIZONTAL = 180 * (Math.PI / 180);
exports.ROTATE_HORIZONTAL = ROTATE_HORIZONTAL;
var ROTATE_VERTICAL = 90 * (Math.PI / 180);
exports.ROTATE_VERTICAL = ROTATE_VERTICAL;
var ROTATE_NONE = -100;
exports.ROTATE_NONE = ROTATE_NONE;
var VERTEX_GAP = 3;
exports.VERTEX_GAP = VERTEX_GAP;
var VERTEX_GAP2 = VERTEX_GAP / 2;
exports.VERTEX_GAP2 = VERTEX_GAP2;
var TOFU = "tofu";
exports.TOFU = TOFU;
var FONT_HEIGHT = 824;

function generateFontData(w, fw, fh, x1, x2, y1, y2, path) {
  var arr = [];
  var total = path.length;
  var i;

  for (i = 0; i < total; i++) {
    arr.push({
      d: path[i].d,
      v: setCenter(path[i].v, fw, fh)
    });
  }

  return {
    rect: {
      w: w,
      h: FONT_HEIGHT,
      fw: fw,
      fh: fh
    },
    ratio: {
      x1: x1,
      x2: x2,
      y1: y1,
      y2: y2
    },
    p: arr
  };
}

function setCenter(arr, fw, fh) {
  var total = arr.length;
  var cx = fw / 2;
  var cy = fh / 2;
  var mp,
      i,
      ct = [];

  for (i = 0; i < total; i++) {
    mp = arr[i];
    mp[1] -= cx;
    mp[2] -= cy;

    if (mp[0] == "b") {
      mp[3] -= cx;
      mp[4] -= cy;
      mp[5] -= cx;
      mp[6] -= cy;
    }

    ct.push(new _vector.Vector(mp));
  }

  return ct;
}

function getR(x1, y1, x2, y2) {
  var x = x1 - x2;
  var y = y1 - y2;
  return -Math.atan2(x, y);
}

function getCurveR(x1, y1, x2, y2, x3, y3, x4, y4, t) {
  var x = (0, _paths.bezierTangent)(x1, x2, x3, x4, t);
  var y = (0, _paths.bezierTangent)(y1, y2, y3, y4, t);
  return -Math.atan2(x, y);
}