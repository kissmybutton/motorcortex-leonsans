"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MC = require("@kissmybutton/motorcortex");

var leonSans = require("./src/index");

var cValue = 0;
var PI2 = 2 * Math.PI;

var LeonSans =
/*#__PURE__*/
function (_MC$API$DOMClip) {
  _inherits(LeonSans, _MC$API$DOMClip);

  function LeonSans() {
    _classCallCheck(this, LeonSans);

    return _possibleConstructorReturn(this, _getPrototypeOf(LeonSans).apply(this, arguments));
  }

  _createClass(LeonSans, [{
    key: "onAfterRender",
    value: function onAfterRender() {
      var leon, canvas;
      this.cValue = 0;
      canvas = this.context.getElements("canvas")[0];
      this.sw = this.attrs.sw;
      this.sh = this.attrs.sh;
      var pixelRatio = 2;
      this.ctx = canvas.getContext("2d");
      canvas.width = this.sw * pixelRatio;
      canvas.height = this.sh * pixelRatio;
      canvas.style.width = this.sw + "px";
      canvas.style.height = this.sh + "px";
      this.ctx.scale(pixelRatio, pixelRatio);
      leon = new leonSans({
        text: this.attrs.text,
        color: this.attrs.color,
        weight: this.attrs.weight,
        isPath: true,
        pathGap: this.attrs.pathGap || this.attrs.drowing === "colorPattern" ? -1 : 0,
        isWave: this.attrs.drowing === "wave" ? true : false,
        tracking: this.attrs.tracking,
        leading: this.attrs.leading,
        size: this.attrs.size || 80,
        patternWidth: 10,
        patternHeight: 90,
        colorful: this.attrs.colorful
      }); // leon.grid(this.ctx);

      this.attrs.round ? this.ctx.lineCap = "round" : this.ctx.lineCap = "butt";
      this.attrs.multiply ? this.ctx.globalCompositeOperation = "multiply" : this.ctx.globalCompositeOperation = "source-over";
      this.setCustomEntity(this.attrs.canvasId, {
        leon: leon,
        ctx: this.ctx,
        sw: this.sw,
        sh: this.sh,
        drowing: this.attrs.drowing,
        pathGap: this.attrs.pathGap,
        patternWidth: this.attrs.patternWidth,
        patternHeight: this.attrs.patternHeight
      }); // switch (this.attrs.drowing) {
      //   case "colorful":
      //     leon.drawColorful(this.ctx);
      //     break;
      //   case "pattern":
      //     leon.pattern(
      //       this.ctx,
      //       this.attrs.patternWidth,
      //       this.attrs.patternHeight
      //     );
      //     break;
      //   case "wave":
      //     break;
      //   default:
      //     leon.draw(this.ctx);
      // }

      this.leon = leon;
    }
  }, {
    key: "onAfterProgress",
    value: function onAfterProgress() {
      if (this.attrs.drowing === "colorPattern") {
        this.ctx.clearRect(0, 0, this.sw, this.sh);
        this.ctx.lineWidth = 0.2;
        var w = this.attrs.patternWidth;
        var total = this.leon.data.length;
        var i,
            pos,
            no = 0;
        var d, j, j_total;

        for (i = 0; i < total; i++) {
          d = this.leon.data[i].paths;
          j_total = Math.round(d.length * this.leon.drawing[i].value);

          for (j = 0; j < j_total; j++) {
            pos = d[j];
            this.ctx.fillStyle = this.randomColor(no);
            this.ctx.strokeStyle = this.randomColor(no);
            this.ctx.beginPath();
            this.ctx.arc(pos.x, pos.y, w, 0, PI2);
            this.ctx.stroke();
            no += 1;
          }
        }

        cValue -= this.attrs.speed;
      }
    }
  }, {
    key: "randomColor",
    value: function randomColor(no) {
      return "hsl(" + (no + cValue) + "," + "70%," + "50%)";
    }
  }, {
    key: "html",
    get: function get() {
      return " <canvas> </canvas>";
    }
  }]);

  return LeonSans;
}(MC.API.DOMClip);

module.exports = LeonSans;