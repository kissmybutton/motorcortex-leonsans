"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typo = typo;

var _upper = require("./upper.js");

var _lower = require("./lower.js");

var _number = require("./number.js");

var _special = require("./special.js");

var _latin = require("./latin.js");

var _util = require("./util.js");

var DATA = Object.assign({}, _upper.UPPER, _lower.LOWER, _number.NUMBER, _special.SPECIAL, _latin.LATIN);

function typo(v) {
  var t = DATA[v] || DATA[_util.TOFU];
  t.v = v;
  return t;
}