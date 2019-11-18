"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grids = Grids;

function Grids(ctx, data) {
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#aaaaaa";
  var i,
      total = data.guide.length,
      grid;

  for (i = 0; i < total; i++) {
    grid = data.rect.y + data.grid[i];
    ctx.moveTo(data.rect.x, grid);
    ctx.lineTo(data.rect.x + data.rect.w, grid);
  }

  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.strokeStyle = "#aaaaaa";
  ctx.rect(data.rect.x, data.rect.y, data.rect.w, data.rect.h);
  ctx.stroke();
  ctx.restore();
}