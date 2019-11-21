"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lines = Lines;

var _util = require("../../core/util.js");

function Lines(ctx, data) {
  var total = data.lines.length;
  var i, d, pos;

  for (i = 0; i < total; i++) {
    d = data.lines[i];
    pos = d.pos;

    if (pos.type == "a") {
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, pos.radius * d.drawing.value, 0, _util.PI2);
      ctx.fill();
      ctx.closePath();
    } else if (pos.type == "m") {
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    } else if (pos.type == "l") {
      ctx.lineTo(pos.x, pos.y);
    } else if (pos.type == "b") {
      ctx.bezierCurveTo(pos.x, pos.y, pos.x2, pos.y2, pos.x3, pos.y3);
    }

    d.stroke(ctx, d);
  }
}