"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLatin1 = getLatin1;
exports.getLatin2 = getLatin2;
exports.getLatin3 = getLatin3;
exports.getLatin4 = getLatin4;
exports.getLatin5 = getLatin5;
exports.getLatin6 = getLatin6;
exports.getLatin7 = getLatin7;
exports.getLatin8 = getLatin8;
exports.getLatin9 = getLatin9;
exports.getLatin10 = getLatin10;
exports.getLatin11 = getLatin11;
exports.getLatin12 = getLatin12;
exports.getLatin13 = getLatin13;
exports.getLatin14 = getLatin14;

var _util = require("./util.js");

//À
function getLatin1(x, y) {
  var tx = x;
  var ty = -60 + y;
  return [{
    d: -1,
    v: [["m", -40 + tx, ty, {
      x: 0,
      y: 0,
      r: (0, _util.getR)(-40 + tx, ty, 0 + tx, 60 + ty)
    }], ["l", 0 + tx, 60 + ty, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }];
} //Á


function getLatin2(x, y) {
  var tx = x;
  var ty = -60 + y;
  return [{
    d: -1,
    v: [["m", 40 + tx, ty, {
      x: 0,
      y: 0,
      r: (0, _util.getR)(40 + tx, ty, 0 + tx, 60 + ty)
    }], ["l", 0 + tx, 60 + ty, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }];
} //Â


function getLatin3(x, y) {
  var tx = -68 + x;
  var ty = 0 + y;
  return [{
    d: -1,
    v: [["m", 0 + tx, 50 + ty, {
      r: (0, _util.getR)(0 + tx, 50 + ty, 68 - _util.VERTEX_GAP2 + tx, 0 + ty),
      y: 0,
      x: 0
    }], ["l", 68 - _util.VERTEX_GAP2 + tx, 0 + ty, {
      r: (0, _util.getR)(0 + tx, 50 + ty, 68 - _util.VERTEX_GAP2 + tx, 0 + ty),
      y: 0,
      x: 0,
      f: 1
    }], ["l", 68 + _util.VERTEX_GAP2 + tx, 0 + ty, {
      r: (0, _util.getR)(68 + _util.VERTEX_GAP2 + tx, 0 + ty, 68 + 68 + tx, 50 + ty),
      y: 0,
      x: 0,
      f: 1,
      v: 1
    }], ["l", 68 + 68 + tx, 50 + ty, {
      y: 0,
      x: 0,
      f: 1
    }]]
  }];
} //Ã


function getLatin4(x, y) {
  var tx = x - 76.24;
  var ty = y;
  return [{
    d: 1,
    v: [["m", 159.52 + tx, 16.56 + ty, {
      x: -1,
      y: -0.2,
      r: (0, _util.getCurveR)(159.52 + tx, 16.56 + ty, 150.08 + tx, 29.28 + ty, 134.56 + tx, 37.68 + ty, 118.56 + tx, 37.68 + ty, 0),
      f: 1
    }], ["b", 150.08 + tx, 29.28 + ty, 134.56 + tx, 37.68 + ty, 118.56 + tx, 37.68 + ty, {
      x: -1,
      y: -0.2,
      r: _util.ROTATE_VERTICAL
    }], ["b", 103.28 + tx, 37.68 + ty, 89.68 + tx, 29.28 + ty, 76.24 + tx, 20.4 + ty, {
      x: -1,
      y: -0.2
    }], ["b", 61.44 + tx, 10.56 + ty, 47.28 + tx, 0 + ty, 31.68 + tx, 0 + ty, {
      x: -1,
      y: -0.2,
      r: _util.ROTATE_VERTICAL
    }], ["b", 17.84 + tx, 0 + ty, 8.72 + tx, 7.12 + ty, 0 + tx, 16 + ty, {
      x: -1,
      y: -0.2
    }]]
  }];
} //Ä


function getLatin5(x, y) {
  return [{
    d: 1,
    v: [["a", -50 + x, y, {
      x: 0,
      y: 0
    }]]
  }, {
    d: 1,
    v: [["a", 50 + x, y, {
      x: 0,
      y: 0
    }]]
  }];
} //Ŭ


function getLatin6(x, y) {
  var tx = x - 57;
  var ty = y;
  return [{
    d: 1,
    v: [["m", 112.7 + tx, 0.0 + ty, {
      r: (0, _util.getCurveR)(112.7 + tx, 0.0 + ty + tx, 10.1 + ty, 110.1 + tx, 19.3 + ty, 105.0 + tx, 27.7 + ty, 0),
      x: 0,
      y: 0,
      f: 1
    }], ["b", 112.7 + tx, 10.1 + ty, 110.1 + tx, 19.3 + ty, 105.0 + tx, 27.7 + ty, {
      x: 0,
      y: 0
    }], ["b", 99.8 + tx, 36.1 + ty, 92.9 + tx, 42.8 + ty, 84.3 + tx, 47.7 + ty, {
      x: 0,
      y: 0
    }], ["b", 75.7 + tx, 52.6 + ty, 66.7 + tx, 55.0 + ty, 57.3 + tx, 55.0 + ty, {
      x: 0,
      y: 0
    }], ["b", 47.5 + tx, 55.0 + ty, 38.3 + tx, 52.6 + ty, 29.6 + tx, 47.7 + ty, {
      x: 0,
      y: 0
    }], ["b", 20.8 + tx, 42.8 + ty, 13.8 + tx, 36.1 + ty, 8.5 + tx, 27.7 + ty, {
      x: 0,
      y: 0
    }], ["b", 3.2 + tx, 19.3 + ty, 0.5 + tx, 10.1 + ty, 0.5 + tx, 0.0 + ty, {
      x: 0,
      y: 0
    }]]
  }];
} //Å


function getLatin7(x, y) {
  var tx = 88 + x;
  var ty = -116 + y;
  var scale = 0.5;
  return [{
    d: 1,
    v: [["m", 232 * scale + tx, 116 * scale + ty, {
      r: _util.ROTATE_HORIZONTAL,
      p: 1,
      f: 1
    }], ["b", 232 * scale + tx, 180.1 * scale + ty, 180.1 * scale + tx, 232 * scale + ty, 116 * scale + tx, 232 * scale + ty, {
      r: _util.ROTATE_VERTICAL
    }], ["b", 51.9 * scale + tx, 232 * scale + ty, 0 * scale + tx, 180.1 * scale + ty, 0 * scale + tx, 116 * scale + ty, {
      r: _util.ROTATE_HORIZONTAL
    }], ["b", 0 * scale + tx, 51.9 * scale + ty, 51.9 * scale + tx, 0 * scale + ty, 116 * scale + tx, 0 * scale + ty, {
      r: _util.ROTATE_VERTICAL
    }], ["b", 180.1 * scale + tx, 0 * scale + ty, 232 * scale + tx, 51.9 * scale + ty, 232 * scale + tx, 116 * scale + ty, {
      r: _util.ROTATE_HORIZONTAL,
      c: 1
    }]]
  }];
} //Ð


function getLatin8(x, y) {
  return [{
    d: 1,
    v: [["m", x - 40, y, {
      x: 0,
      y: 1,
      r: _util.ROTATE_VERTICAL
    }], ["l", 100 + x, y, {
      x: 0,
      y: 1,
      f: 1
    }]]
  }];
} //Ç


function getLatin9(x, y) {
  return [{
    d: -1,
    v: [["m", x, y, {
      p: 1
    }], ["b", 9.3 + x, 11.6 + y, 15.6 + x, 27.1 + y, 15.6 + x, 40.9 + y], ["b", 15.6 + x, 83.3 + y, -18.2 + x, 107.8 + y, -59.5 + x, 107.8 + y], ["b", -70.9 + x, 107.8 + y, -82.9 + x, 106.2 + y, -93.7 + x, 102.7 + y, {
      x: 0.5,
      f: 1
    }]]
  }];
} //Ą


function getLatin10(x, y) {
  return [{
    d: -1,
    v: [["m", x, y, {
      p: 1
    }], ["b", 22.6 - 42.2 + x, 14.8 + y, -42.2 + x, 37.9 + y, -42.2 + x, 64.1 + y], ["b", -42.2 + x, 100.3 + y, 30.2 - 42.2 + x, 118.8 + y, 63.6 - 42.2 + x, 118.8 + y], ["b", 68.3 - 42.2 + x, 118.8 + y, 72.9 - 42.2 + x, 118.4 + y, 77.4 - 42.2 + x, 117.6 + y, {
      x: 0.5,
      f: 1
    }]]
  }];
} //Ċ


function getLatin11(x, y) {
  return [{
    d: 1,
    v: [["a", x, y, {
      x: 0,
      y: 0
    }]]
  }];
} //Č


function getLatin12(x, y) {
  var tx = -68 + x;
  var ty = y;
  return [{
    d: -1,
    v: [["m", 0 + tx, ty, {
      r: (0, _util.getR)(0 + tx, ty, 68 - _util.VERTEX_GAP2 + tx, 50 + ty),
      y: 0,
      x: 0
    }], ["l", 68 - _util.VERTEX_GAP2 + tx, 50 + ty, {
      r: (0, _util.getR)(0 + tx, ty, 68 - _util.VERTEX_GAP2 + tx, 50 + ty),
      y: 0,
      x: 0,
      f: 1
    }], ["l", 68 + _util.VERTEX_GAP2 + tx, 50 + ty, {
      r: (0, _util.getR)(68 + _util.VERTEX_GAP2 + tx, 50 + ty, 68 + 68 + tx, ty),
      y: 0,
      x: 0,
      f: 1,
      v: 1
    }], ["l", 68 + 68 + tx, ty, {
      y: 0,
      x: 0,
      f: 1
    }]]
  }];
} //ď


function getLatin13(x, y) {
  return [{
    d: -1,
    v: [["m", x, y, {
      x: 0,
      y: 0
    }], ["l", x, 80 + y, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }];
} //Ē


function getLatin14(x, y) {
  return [{
    d: 1,
    v: [["m", x - 50, y, {
      x: 0,
      y: 0
    }], ["l", x + 50, y, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }];
}