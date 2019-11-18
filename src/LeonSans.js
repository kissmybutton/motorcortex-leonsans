const MC = require("@kissmybutton/motorcortex");
const leonSans = require("./src/index");
let cValue = 0;
const PI2 = 2 * Math.PI;

class LeonSans extends MC.API.DOMClip {
  get html() {
    return ` <canvas> </canvas>`;
  }
  onAfterRender() {
    let leon, canvas;
    this.cValue = 0;
    canvas = this.context.getElements("canvas")[0];
    this.sw = this.attrs.sw;
    this.sh = this.attrs.sh;
    const pixelRatio = 2;

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
      pathGap:
        this.attrs.pathGap || this.attrs.drowing === "colorPattern" ? -1 : 0,
      isWave: this.attrs.drowing === "wave" ? true : false,
      tracking: this.attrs.tracking,
      leading: this.attrs.leading,
      size: this.attrs.size || 80,
      patternWidth: 10,
      patternHeight: 90,
      colorful: this.attrs.colorful
    });

    // leon.grid(this.ctx);

    this.attrs.round
      ? (this.ctx.lineCap = "round")
      : (this.ctx.lineCap = "butt");

    this.attrs.multiply
      ? (this.ctx.globalCompositeOperation = "multiply")
      : (this.ctx.globalCompositeOperation = "source-over");

    this.setCustomEntity(this.attrs.canvasId, {
      leon: leon,
      ctx: this.ctx,
      sw: this.sw,
      sh: this.sh,
      drowing: this.attrs.drowing,
      pathGap: this.attrs.pathGap,
      patternWidth: this.attrs.patternWidth,
      patternHeight: this.attrs.patternHeight
    });

    // switch (this.attrs.drowing) {
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
  onAfterProgress(f, m) {
    if (this.attrs.drowing === "colorPattern") {
      this.ctx.clearRect(0, 0, this.sw, this.sh);
      this.ctx.lineWidth = 0.2;
      const w = this.attrs.patternWidth;
      const total = this.leon.data.length;
      let i,
        p,
        pos,
        no = 0;
      let d, j, j_total;
      for (i = 0; i < total; i++) {
        d = this.leon.data[i].paths;
        j_total = Math.round(d.length * this.leon.drawing[i].value);
        for (j = 0; j < j_total; j++) {
          pos = d[j];
          this.ctx.fillStyle = randomColor(no);
          this.ctx.strokeStyle = randomColor(no);
          this.ctx.beginPath();
          this.ctx.arc(pos.x, pos.y, w, 0, PI2);
          this.ctx.stroke();
          no += 1;
        }
      }

      cValue -= this.attrs.speed;

      function randomColor(no) {
        return "hsl(" + (no + cValue) + "," + "70%," + "50%)";
      }
    }
  }
}

module.exports = LeonSans;
