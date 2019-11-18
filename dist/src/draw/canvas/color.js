"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = Color;

function Color(ctx, no, data, color) {
  var c_total = color.length;
  var cur = (no + c_total * (Math.abs(no / 10 | 0) + 1)) % c_total;

  if (Array.isArray(color[cur])) {
    c_total = color[cur].length;
    var vv = 1 / (c_total + 1);
    var g = ctx.createLinearGradient(data.rect.x, data.rect.y, data.rect.x, data.rect.y + data.rect.h);
    var i;
    g.addColorStop(vv, color[cur][0]);

    for (i = 0; i < c_total; i++) {
      g.addColorStop(vv * (i + 1), color[cur][i]);
    }

    g.addColorStop(vv * (c_total + 1), color[cur][c_total - 1]);
    ctx.strokeStyle = g;
    ctx.fillStyle = g;
  } else {
    ctx.strokeStyle = color[cur];
    ctx.fillStyle = color[cur];
  }
}