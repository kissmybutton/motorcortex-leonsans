"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vector = Vector;

var _point = require("./point.js");

function Vector(mp) {
  this.type = mp[0];
  this.x = mp[1] || 0;
  this.y = mp[2] || 0;

  if (this.type == 'b') {
    this.x2 = mp[3] || 0;
    this.y2 = mp[4] || 0;
    this.x3 = mp[5] || 0;
    this.y3 = mp[6] || 0;

    if (mp[7] == null) {
      this.ratio = {
        x: 1,
        y: 1,
        r: 0,
        // rotation : if the rotation is ROTATE_NONE, it will hide in the 'pattern' and 'paths'
        p: 0,
        // 1 is hide the point in the pattern paths
        f: 0,
        // 1 is fixed position for wave paths
        c: 0,
        // 1 is close path for PIXI bug - graphics.closePath()
        v: 0 // 1 is vertex, it's only for the vertex shape like V, W, A

      };
    } else {
      this.ratio = {};
      this.ratio.x = mp[7].x == null ? 1 : mp[7].x;
      this.ratio.y = mp[7].y == null ? 1 : mp[7].y;
      this.ratio.r = mp[7].r || 0;
      this.ratio.p = mp[7].p || 0;
      this.ratio.f = mp[7].f || 0;
      this.ratio.c = mp[7].c || 0;
      this.ratio.v = mp[7].v || 0;
    }
  } else {
    if (mp[3] == null) {
      this.ratio = {
        x: 1,
        y: 1,
        r: 0,
        p: 0,
        f: 0,
        c: 0,
        v: 0
      };
    } else {
      this.ratio = {};
      this.ratio.x = mp[3].x == null ? 1 : mp[3].x;
      this.ratio.y = mp[3].y == null ? 1 : mp[3].y;
      this.ratio.r = mp[3].r || 0;
      this.ratio.p = mp[3].p || 0;
      this.ratio.f = mp[3].f || 0;
      this.ratio.c = mp[3].c || 0;
      this.ratio.v = mp[3].v || 0;
    }
  }
}

Object.assign(Vector.prototype, {
  convert: function convert(pos, model) {
    var x = convertX(this.x, pos, this.ratio, model);
    var y = convertY(this.y, pos, this.ratio, model);
    var x2 = convertX(this.x2, pos, this.ratio, model);
    var y2 = convertY(this.y2, pos, this.ratio, model);
    var x3 = convertX(this.x3, pos, this.ratio, model);
    var y3 = convertY(this.y3, pos, this.ratio, model);
    var rd = convertR(this.type, pos, model);
    var vv = new _point.Point(this);
    vv.x = x;
    vv.y = y;
    vv.x2 = x2;
    vv.y2 = y2;
    vv.x3 = x3;
    vv.y3 = y3;
    vv.radius = rd;
    return vv;
  }
});

function convertR(type, pos, model) {
  var rd = 0;
  if (type == 'a') rd = pos.range.cr * model.scale * model.fontRatio;
  return rd;
}

function convertX(x, pos, ratio, model) {
  var rr = pos.range.r * ratio.x;
  var gx = (pos.range.gx2 - pos.range.gx1) * rr + pos.range.gx1;
  var fr = (pos.range.fr2 - pos.range.fr1) * rr + pos.range.fr1;
  return pos.center.x + (x - gx) * model.scale * fr; // + pos.rect.x
}

function convertY(y, pos, ratio, model) {
  var rr = pos.range.r * ratio.y;
  var gy = (pos.range.gy2 - pos.range.gy1) * rr + pos.range.gy1;
  var fr = (pos.range.fr2 - pos.range.fr1) * rr + pos.range.fr1;
  return pos.center.y + (y - gy) * model.scale * fr; // + pos.rect.y
}