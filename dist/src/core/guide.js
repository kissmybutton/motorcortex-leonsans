"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGuide = getGuide;
exports.getGrid = getGrid;

var _util = require("./util.js");

/**
 * @name getGuide
 * @property {Object} - typo data object from 'font/index.js'
 * @property {Number} - scale
 * @returns {Object} the guide pos array
 * @description get a guide pos
 */
function getGuide(d, scale) {
  var guide = [],
      ggap = 10,
      i,
      gvx,
      gvy;

  for (i = 0; i < 6; i++) {
    gvx = ggap * i + 20;
    gvy = ggap * i + 90;
    guide[i] = {
      x1: gvx * _util.RECT_RATIO * scale,
      x2: (d.rect.w - gvx * 2) * _util.RECT_RATIO * scale,
      y1: gvy * _util.RECT_RATIO * scale,
      y2: (d.rect.h - gvy) * _util.RECT_RATIO * scale - i * ggap * _util.RECT_RATIO * scale
    };
  }

  return guide;
}
/**
 * @name getGuide
 * @property {Object} - typo data object from 'font/index.js'
 * @property {Number} - scale
 * @returns {Object} the guide pos array
 * @description get a guide pos
 */


function getGrid(d, scale) {
  var grid = [],
      i,
      gvy = [98, 340, 815];

  for (i = 0; i < 3; i++) {
    grid[i] = gvy[i] * _util.RECT_RATIO * scale;
  }

  return grid;
}