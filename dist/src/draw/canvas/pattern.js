"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pattern = Pattern;

var _util = require("../../core/util.js");

function Pattern(ctx, data, w, h) {
  var total = Math.round(data.paths.length * data.drawing.value);
  var w2 = w / 2;
  var w3 = w / 3;
  var h2 = h / 2;
  var i, p;

  for (i = 0; i < total; i++) {
    p = data.paths[i];

    if (p.num == 1) {
      ctx.fillStyle = "#ff00c5";
    } else {
      ctx.fillStyle = "#ff95f8";
    }

    if (p.type == 'a') {
      ctx.beginPath();
      ctx.arc(p.x, p.y, w3, 0, _util.PI2);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillRect(-w2, -h2, w, h);
      ctx.restore();
    }
  }
}