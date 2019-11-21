"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAlignGapX = setAlignGapX;
exports.getAlignGapX = getAlignGapX;

function setAlignGapX(sw, tw) {
  return {
    c: (sw - tw) / 2,
    r: sw - tw,
    l: 0
  };
}

function getAlignGapX(align, alignGapX) {
  if (align == "center") {
    return alignGapX.c;
  } else if (align == "right") {
    return alignGapX.r;
  } else {
    return alignGapX.l;
  }
}