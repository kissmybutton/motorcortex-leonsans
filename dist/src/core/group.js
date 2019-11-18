"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextGroup = getTextGroup;

var _util = require("./util.js");

var _index = require("../font/index.js");

function getTextGroup(text, scale, width, isBreakAll) {
  var group;

  if (text.indexOf('\n') > 0) {
    group = text.split('\n');
  } else if (text.indexOf('\\n') > 0) {
    group = text.split('\\n');
  } else {
    group = [text];
  }

  if (width == 0) return keepAll(group);else if (isBreakAll) return breakAll(group, scale, width);else return breakWord(group, scale, width);
}

function keepAll(group) {
  var textGroup = [];
  var total = group.length;
  var i;

  for (i = 0; i < total; i++) {
    textGroup[i] = group[i].split('');
  }

  return textGroup;
}

function breakWord(group, scale, width) {
  var g2,
      g3,
      t,
      m_rect,
      tw = 0,
      tw2 = 0,
      i,
      j,
      k,
      total,
      j_total,
      k_total,
      index = 0;
  var tg = [];
  total = group.length;

  for (i = 0; i < total; i++) {
    g2 = group[i].split(' ');
    tg[index] = [];
    j_total = g2.length;

    for (j = 0; j < j_total; j++) {
      tw2 = 0;
      g3 = g2[j];
      k_total = g3.length;

      for (k = 0; k < k_total; k++) {
        t = (0, _index.typo)(g3[k]);
        m_rect = (0, _util.getRect)(t, scale);
        tw2 += m_rect.w;
      }

      t = (0, _index.typo)(' ');
      m_rect = (0, _util.getRect)(t, scale);
      tw2 += m_rect.w;
      tw += tw2;

      if (tw > width) {
        index += 1;
        tw = tw2;
        tg[index] = [];
      }

      tg[index].push(g3);
    }

    index += 1;
    tw = 0;
  }

  total = tg.length;
  var textGroup = [];

  for (i = 0; i < total; i++) {
    t = tg[i].join(' ').split('');

    if (t.length > 0) {
      textGroup.push(t);
    }
  }

  return textGroup;
}

function breakAll(group, scale, width) {
  var t,
      i,
      total,
      j,
      j_total,
      m_rect,
      g2,
      g3,
      tw = 0,
      index = 0,
      tx = 0;
  var tg = [];
  total = group.length;

  for (i = 0; i < total; i++) {
    g2 = group[i];
    tw = 0;
    tx = 0;
    tg[index] = [];
    j_total = g2.length;

    for (j = 0; j < j_total; j++) {
      g3 = g2[j];
      t = (0, _index.typo)(g3);
      m_rect = (0, _util.getRect)(t, scale);
      tw += m_rect.w;
      tg[index].push(g3);

      if (tw >= width) {
        index += 1;
        tw = m_rect.w;
        tg[index] = [];
      }
    }

    index += 1;
  }

  var textGroup = [];
  total = tg.length;

  for (i = 0; i < total; i++) {
    t = tg[i];

    if (t.length > 0) {
      if (t[0] == ' ') t.shift();
      if (t[t.length - 1] == ' ') t.pop();
      if (t.length > 0) textGroup.push(t);
    }
  }

  return textGroup;
}