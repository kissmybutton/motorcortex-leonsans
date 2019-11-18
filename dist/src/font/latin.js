"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LATIN = void 0;

var _util = require("./util.js");

var _latinutil = require("./latinutil.js");

var _upper = require("./upper.js");

var _lower = require("./lower.js");

var DATA_LI = [{
  d: 1,
  v: [['m', 0, 352, {
    y: 0,
    f: 1
  }], ['l', 0, 130, {
    y: -3
  }]]
}];
var DATA_LJ = [{
  d: 1,
  v: [['m', 0 - 115.9, 317 + 127, {
    x: 0.4,
    y: 0.63,
    r: (0, _util.getCurveR)(0 - 115.9, 317 + 127, 12.6 - 115.9, 327.4 + 127, 29.6 - 115.9, 333.2 + 127, 45.9 - 115.9, 334.2 + 127, 0),
    f: 1
  }], ['b', 12.6 - 115.9, 327.4 + 127, 29.6 - 115.9, 333.2 + 127, 45.9 - 115.9, 334.2 + 127, {
    x: 0.4,
    y: 0.63,
    r: _util.ROTATE_VERTICAL
  }], ['b', 84.5 - 115.9, 336.5 + 127, 0, 308.1 + 127, 0, 269.4 + 127, {
    x: 0.4,
    y: 0.63,
    r: _util.ROTATE_HORIZONTAL
  }], ['l', 0, 0 + 127 + 3, {
    y: -3
  }]]
}];
var LATIN = {
  'Æ': (0, _util.generateFontData)(996, 426, 352, 0, 0, 0, 0, [{
    d: -1,
    v: [['m', 426.0, 0.0, {
      x: 0,
      r: _util.ROTATE_VERTICAL
    }], ['l', 234.0, 0.0, {
      x: 0.5,
      f: 1,
      r: (0, _util.getR)(234.0, 0.0, .0, 352.0)
    }], ['l', 0.0, 352.0, {
      x: 0.5,
      y: 0.5,
      f: 1
    }]]
  }, {
    d: -1,
    v: [['m', 234.0, 0.0, {
      x: 0.5,
      p: 1
    }], ['l', 234.0, 352.0, {
      f: 1,
      x: 0.5
    }], ['l', 426.0, 352.0, {
      f: 1,
      x: 0
    }]]
  }, {
    d: -1,
    v: [['m', 76.4, 237.0, {
      r: _util.ROTATE_VERTICAL,
      p: 1
    }], ['l', 234.0, 237.0, {
      f: 1,
      r: _util.ROTATE_VERTICAL,
      p: 1
    }]]
  }, {
    d: -1,
    v: [['m', 234.0, 164.0, {
      r: _util.ROTATE_VERTICAL,
      p: 1,
      x: 0.5
    }], ['l', 414.0, 164.0, {
      f: 1,
      x: 0
    }]]
  }]),
  'æ': (0, _util.generateFontData)(1000, 232 + 225.5, 232, 0, 0, -64, -64, [{
    d: -1,
    v: [['m', 232, 8, {
      y: -3.4,
      r: _util.ROTATE_HORIZONTAL
    }], ['l', 232, 116, {
      r: _util.ROTATE_NONE
    }], ['b', 232, 180.1, 180.1, 232, 116, 232, {
      r: _util.ROTATE_VERTICAL
    }], ['b', 51.9, 232, 0, 180.1, 0, 116, {
      r: _util.ROTATE_HORIZONTAL
    }], ['b', 0, 51.9, 51.9, 0, 116, 0, {
      r: _util.ROTATE_VERTICAL
    }], ['b', 180.1, 0, 232, 51.9, 232, 116, {
      r: _util.ROTATE_HORIZONTAL
    }], ['l', 232, 224, {
      y: -0.1,
      r: _util.ROTATE_HORIZONTAL,
      f: 1
    }]]
  }, {
    d: 1,
    v: [['m', 211.6 + 232, 182.9, {
      r: (0, _util.getCurveR)(211.6 + 232, 182.9, 191.1 + 232, 213.2, 156.1 + 232, 233.1, 116.5 + 232, 233.1, 0),
      f: 1
    }], ['b', 191.1 + 232, 213.2, 156.1 + 232, 233.1, 116.5 + 232, 233.1, {
      r: _util.ROTATE_VERTICAL
    }], ['b', 52.4 + 232, 233.1, 0.5 + 232, 181.2, 0.5 + 232, 117.1, {
      r: _util.ROTATE_HORIZONTAL
    }], ['b', 0.5 + 232, 53, 52.4 + 232, 1.1, 116.5 + 232, 1.1, {
      r: _util.ROTATE_VERTICAL
    }], ['b', 176.4 + 232, 1.1, 224.9 + 232, 47.2, 225.5 + 232, 106.1, {
      r: _util.ROTATE_HORIZONTAL
    }], ['l', 0.5 + 232, 106.1, {
      r: _util.ROTATE_HORIZONTAL,
      p: 1
    }]]
  }]),
  'À': (0, _util.generateFontData)(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UA)).concat((0, _latinutil.getLatin1)(145, -50))),
  'Á': (0, _util.generateFontData)(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UA)).concat((0, _latinutil.getLatin2)(145, -50))),
  'Â': (0, _util.generateFontData)(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UA)).concat((0, _latinutil.getLatin3)(145, -100))),
  'Ã': (0, _util.generateFontData)(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UA)).concat((0, _latinutil.getLatin4)(145, -90))),
  'Ä': (0, _util.generateFontData)(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UA)).concat((0, _latinutil.getLatin5)(145, -70))),
  'Å': (0, _util.generateFontData)(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UA)).concat((0, _latinutil.getLatin7)(0, 0))),
  'Ă': (0, _util.generateFontData)(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UA)).concat((0, _latinutil.getLatin6)(145, -110))),
  'Ą': (0, _util.generateFontData)(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UA)).concat((0, _latinutil.getLatin10)(290, 352))),
  'à': (0, _util.generateFontData)(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LA)).concat((0, _latinutil.getLatin1)(116, -60))),
  'á': (0, _util.generateFontData)(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LA)).concat((0, _latinutil.getLatin2)(116, -60))),
  'â': (0, _util.generateFontData)(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LA)).concat((0, _latinutil.getLatin3)(116, -110))),
  'ã': (0, _util.generateFontData)(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LA)).concat((0, _latinutil.getLatin4)(116, -100))),
  'ä': (0, _util.generateFontData)(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LA)).concat((0, _latinutil.getLatin5)(116, -80))),
  'å': (0, _util.generateFontData)(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LA)).concat((0, _latinutil.getLatin7)(-30, 0))),
  'ă': (0, _util.generateFontData)(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LA)).concat((0, _latinutil.getLatin6)(116, -120))),
  'ą': (0, _util.generateFontData)(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LA)).concat((0, _latinutil.getLatin10)(232, 224))),
  'Ć': (0, _util.generateFontData)(700, 293.1, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UC)).concat((0, _latinutil.getLatin1)(180, -60))),
  'Ĉ': (0, _util.generateFontData)(700, 293.1, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UC)).concat((0, _latinutil.getLatin3)(180, -110))),
  'Ċ': (0, _util.generateFontData)(700, 293.1, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UC)).concat((0, _latinutil.getLatin11)(180, -80))),
  'Č': (0, _util.generateFontData)(700, 293.1, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UC)).concat((0, _latinutil.getLatin12)(180, -110))),
  'Ç': (0, _util.generateFontData)(700, 293.1, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UC)).concat((0, _latinutil.getLatin9)(180, 360))),
  'ć': (0, _util.generateFontData)(520, 212.1, 233.1, 2, -10, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LC)).concat((0, _latinutil.getLatin1)(116.5, 1.1 - 70))),
  'ĉ': (0, _util.generateFontData)(520, 212.1, 233.1, 2, -10, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LC)).concat((0, _latinutil.getLatin3)(116.5, 1.1 - 120))),
  'ċ': (0, _util.generateFontData)(520, 212.1, 233.1, 2, -10, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LC)).concat((0, _latinutil.getLatin11)(116.5, 1.1 - 90))),
  'č': (0, _util.generateFontData)(520, 212.1, 233.1, 2, -10, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LC)).concat((0, _latinutil.getLatin12)(116.5, 1.1 - 120))),
  'ç': (0, _util.generateFontData)(520, 212.1, 233.1, 2, -10, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LC)).concat((0, _latinutil.getLatin9)(116.5, 233.1))),
  'Đ': (0, _util.generateFontData)(721, 270, 352, -10, -10, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UD)).concat((0, _latinutil.getLatin8)(0, 352 / 2))),
  'Ď': (0, _util.generateFontData)(721, 270, 352, -10, -10, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UD)).concat((0, _latinutil.getLatin12)(100, -110))),
  'ď': (0, _util.generateFontData)(600, 232, 352, 10, 2, 0, 0, JSON.parse(JSON.stringify(_lower.DATA_LD)).concat((0, _latinutil.getLatin13)(300, 0))),
  'đ': (0, _util.generateFontData)(600, 232, 352, 10, 2, 0, 0, JSON.parse(JSON.stringify(_lower.DATA_LD)).concat((0, _latinutil.getLatin8)(180, 40))),
  'È': (0, _util.generateFontData)(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UE)).concat((0, _latinutil.getLatin1)(96, -60))),
  'É': (0, _util.generateFontData)(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UE)).concat((0, _latinutil.getLatin2)(96, -60))),
  'Ê': (0, _util.generateFontData)(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UE)).concat((0, _latinutil.getLatin3)(96, -110))),
  'Ë': (0, _util.generateFontData)(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UE)).concat((0, _latinutil.getLatin5)(96, -80))),
  'Ē': (0, _util.generateFontData)(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UE)).concat((0, _latinutil.getLatin14)(96, -80))),
  'Ĕ': (0, _util.generateFontData)(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UE)).concat((0, _latinutil.getLatin6)(96, -120))),
  'Ė': (0, _util.generateFontData)(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UE)).concat((0, _latinutil.getLatin11)(96, -80))),
  'Ě': (0, _util.generateFontData)(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UE)).concat((0, _latinutil.getLatin12)(96, -110))),
  'è': (0, _util.generateFontData)(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LE)).concat((0, _latinutil.getLatin1)(112, -60))),
  'é': (0, _util.generateFontData)(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LE)).concat((0, _latinutil.getLatin2)(112, -60))),
  'ê': (0, _util.generateFontData)(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LE)).concat((0, _latinutil.getLatin3)(112, -110))),
  'ë': (0, _util.generateFontData)(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LE)).concat((0, _latinutil.getLatin5)(112, -80))),
  'ē': (0, _util.generateFontData)(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LE)).concat((0, _latinutil.getLatin14)(112, -80))),
  'ĕ': (0, _util.generateFontData)(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LE)).concat((0, _latinutil.getLatin6)(112, -120))),
  'ė': (0, _util.generateFontData)(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LE)).concat((0, _latinutil.getLatin11)(112, -90))),
  'ě': (0, _util.generateFontData)(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LE)).concat((0, _latinutil.getLatin12)(112, -120))),
  'Ĝ': (0, _util.generateFontData)(840, 352, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UG)).concat((0, _latinutil.getLatin3)(180, -110))),
  'Ğ': (0, _util.generateFontData)(840, 352, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UG)).concat((0, _latinutil.getLatin6)(180, -120))),
  'Ġ': (0, _util.generateFontData)(840, 352, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UG)).concat((0, _latinutil.getLatin11)(180, -80))),
  'Ģ': (0, _util.generateFontData)(840, 352, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UG)).concat((0, _latinutil.getLatin9)(180, 360))),
  'ĝ': (0, _util.generateFontData)(600, 232, 338, 10, 2, -117, -117, JSON.parse(JSON.stringify(_lower.DATA_LG)).concat((0, _latinutil.getLatin3)(116, 1.1 - 120))),
  'ğ': (0, _util.generateFontData)(600, 232, 338, 10, 2, -117, -117, JSON.parse(JSON.stringify(_lower.DATA_LG)).concat((0, _latinutil.getLatin6)(116, -120))),
  'ġ': (0, _util.generateFontData)(600, 232, 338, 10, 2, -117, -117, JSON.parse(JSON.stringify(_lower.DATA_LG)).concat((0, _latinutil.getLatin11)(116, -90))),
  'ģ': (0, _util.generateFontData)(600, 232, 338, 10, 2, -117, -117, JSON.parse(JSON.stringify(_lower.DATA_LG)).concat((0, _latinutil.getLatin2)(116, -70))),
  'Ĥ': (0, _util.generateFontData)(684, 232, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UH)).concat((0, _latinutil.getLatin3)(232 / 2, -110))),
  'ĥ': (0, _util.generateFontData)(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_lower.DATA_LH)).concat((0, _latinutil.getLatin3)(182 / 2, -110))),
  'Ì': (0, _util.generateFontData)(249, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UI)).concat((0, _latinutil.getLatin1)(0, -60))),
  'Í': (0, _util.generateFontData)(249, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UI)).concat((0, _latinutil.getLatin2)(0, -60))),
  'Î': (0, _util.generateFontData)(249, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UI)).concat((0, _latinutil.getLatin3)(0, -110))),
  'Ï': (0, _util.generateFontData)(249, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UI)).concat((0, _latinutil.getLatin5)(0, -80))),
  'ì': (0, _util.generateFontData)(200, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_LI)).concat((0, _latinutil.getLatin1)(0, -60 + 130))),
  'í': (0, _util.generateFontData)(200, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_LI)).concat((0, _latinutil.getLatin2)(0, -60 + 130))),
  'î': (0, _util.generateFontData)(200, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_LI)).concat((0, _latinutil.getLatin3)(0, -120 + 130))),
  'ï': (0, _util.generateFontData)(200, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_LI)).concat((0, _latinutil.getLatin5)(0, -80 + 130))),
  'Ĵ': (0, _util.generateFontData)(472, 172.5, 355.5, 10, 20, -2, -2, JSON.parse(JSON.stringify(_upper.DATA_UJ)).concat((0, _latinutil.getLatin3)(172.5, -110))),
  'ĵ': (0, _util.generateFontData)(220, 115.9, 352, -60, -60, 0, 0, JSON.parse(JSON.stringify(DATA_LJ)).concat((0, _latinutil.getLatin3)(0, -110 + 130))),
  'Ñ': (0, _util.generateFontData)(721, 250, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UN)).concat((0, _latinutil.getLatin4)(250 / 2, -100))),
  'ñ': (0, _util.generateFontData)(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_lower.DATA_LN)).concat((0, _latinutil.getLatin4)(182 / 2, -100 + 130))),
  'Ò': (0, _util.generateFontData)(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UO)).concat((0, _latinutil.getLatin1)(180, -60))),
  'Ó': (0, _util.generateFontData)(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UO)).concat((0, _latinutil.getLatin2)(180, -60))),
  'Ô': (0, _util.generateFontData)(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UO)).concat((0, _latinutil.getLatin3)(180, -110))),
  'Õ': (0, _util.generateFontData)(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UO)).concat((0, _latinutil.getLatin4)(180, -100))),
  'Ö': (0, _util.generateFontData)(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UO)).concat((0, _latinutil.getLatin5)(180, -80))),
  'Ø': (0, _util.generateFontData)(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UO)).concat([{
    d: 1,
    v: [['m', 0, 360, {
      r: (0, _util.getR)(0, 360, 360, 0),
      f: 1,
      x: 0,
      y: 1
    }], ['l', 360, 0, {
      x: 0,
      y: 1
    }]]
  }])),
  'ò': (0, _util.generateFontData)(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LO)).concat((0, _latinutil.getLatin1)(116, -60))),
  'ó': (0, _util.generateFontData)(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LO)).concat((0, _latinutil.getLatin2)(116, -60))),
  'ô': (0, _util.generateFontData)(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LO)).concat((0, _latinutil.getLatin3)(116, -110))),
  'õ': (0, _util.generateFontData)(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LO)).concat((0, _latinutil.getLatin4)(116, -100))),
  'ö': (0, _util.generateFontData)(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LO)).concat((0, _latinutil.getLatin5)(116, -80))),
  'ø': (0, _util.generateFontData)(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LO)).concat([{
    d: 1,
    v: [['m', 0, 232, {
      r: (0, _util.getR)(0, 232, 232, 0),
      f: 1,
      x: 0,
      y: 1
    }], ['l', 232, 0, {
      x: 0,
      y: 1
    }]]
  }])),
  'Ŝ': (0, _util.generateFontData)(560, 224, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_US)).concat((0, _latinutil.getLatin3)(112.4, -110))),
  'ŝ': (0, _util.generateFontData)(400, 224 * 0.642, 360 * 0.642, 0, 0, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LS)).concat((0, _latinutil.getLatin3)(112.4 * 0.642, -110))),
  'Ş': (0, _util.generateFontData)(560, 224, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_US)).concat((0, _latinutil.getLatin9)(110.3, 360))),
  'ş': (0, _util.generateFontData)(400, 224 * 0.642, 360 * 0.642, 0, 0, -64, -64, JSON.parse(JSON.stringify(_lower.DATA_LS)).concat((0, _latinutil.getLatin9)(110.3 * 0.642, 360 * 0.642))),
  'Ù': (0, _util.generateFontData)(712, 250, 355, 0, 0, -0.5, -0.5, JSON.parse(JSON.stringify(_upper.DATA_UU)).concat((0, _latinutil.getLatin1)(125, -50))),
  'Ú': (0, _util.generateFontData)(712, 250, 355, 0, 0, -0.5, -0.5, JSON.parse(JSON.stringify(_upper.DATA_UU)).concat((0, _latinutil.getLatin2)(125, -50))),
  'Û': (0, _util.generateFontData)(712, 250, 355, 0, 0, -0.5, -0.5, JSON.parse(JSON.stringify(_upper.DATA_UU)).concat((0, _latinutil.getLatin3)(125, -100))),
  'Ŭ': (0, _util.generateFontData)(712, 250, 355, 0, 0, -0.5, -0.5, JSON.parse(JSON.stringify(_upper.DATA_UU)).concat((0, _latinutil.getLatin6)(125, -110))),
  'Ü': (0, _util.generateFontData)(712, 250, 355, 0, 0, -0.5, -0.5, JSON.parse(JSON.stringify(_upper.DATA_UU)).concat((0, _latinutil.getLatin5)(125, -70))),
  'ù': (0, _util.generateFontData)(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_lower.DATA_LU)).concat((0, _latinutil.getLatin1)(91, -60 + 130))),
  'ú': (0, _util.generateFontData)(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_lower.DATA_LU)).concat((0, _latinutil.getLatin2)(91, -60 + 130))),
  'û': (0, _util.generateFontData)(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_lower.DATA_LU)).concat((0, _latinutil.getLatin3)(91, -110 + 130))),
  'ŭ': (0, _util.generateFontData)(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_lower.DATA_LU)).concat((0, _latinutil.getLatin6)(91, -120 + 130))),
  'ü': (0, _util.generateFontData)(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_lower.DATA_LU)).concat((0, _latinutil.getLatin5)(91, -80 + 130))),
  'Ý': (0, _util.generateFontData)(673, 270, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_upper.DATA_UY)).concat((0, _latinutil.getLatin2)(135, -60))),
  'ý': (0, _util.generateFontData)(500, 225.5, 331.5, 10, 10, -119, -119, JSON.parse(JSON.stringify(_lower.DATA_LY)).concat((0, _latinutil.getLatin2)(116.3, -60))),
  'ÿ': (0, _util.generateFontData)(500, 225.5, 331.5, 10, 10, -119, -119, JSON.parse(JSON.stringify(_lower.DATA_LY)).concat((0, _latinutil.getLatin5)(116.3, -90)))
};
exports.LATIN = LATIN;