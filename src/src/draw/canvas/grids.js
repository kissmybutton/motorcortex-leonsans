export function Grids(ctx, data) {
  ctx.save();

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#aaaaaa";
  const total = data.guide.length;
  let i, grid;
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
