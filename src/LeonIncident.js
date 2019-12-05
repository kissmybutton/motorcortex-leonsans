const MC = require("@kissmybutton/motorcortex");
const compAtrrs = require("./compoAttributes");
let dont = false;
class testIn extends MC.API.MonoIncident {
  getScratchValue() {
    if (this.attributeKey === "LeonAtrs") {
      const obj = {};
      const LeonAtrs = compAtrrs[this.attributeKey];
      const currentLeonAtrs = this.element.entity.leon;

      for (let i = 0; i < LeonAtrs.length; i++) {
        obj[LeonAtrs[i]] = currentLeonAtrs[LeonAtrs[i]];
      }

      return obj;
    }
  }

  onProgress(f) {
    const drawning = () => {
      switch (this.element.entity.drawing) {
        case "colorful":
          this.element.entity.leon.drawColorful(this.element.entity.ctx);
          break;
        case "pattern":
          //this.element.entity.ctx.fillStyle = "#32a852";
          // console.log(this.element.entity.ctx.fillStyle);
          this.element.entity.leon.pattern(
            this.element.entity.ctx,
            this.element.entity.leon.patternWidth
              ? this.element.entity.leon.patternWidth
              : this.element.entity.patternWidth,
            this.element.entity.leon.patternHeight
              ? this.element.entity.leon.patternHeight
              : this.element.entity.patternHeight
          );
          break;
        case "wave":
          break;
        case "colorPattern":
          break;
        default:
          if (!dont) {
            this.element.entity.leon.draw(this.element.entity.ctx);
          }
      }
    };

    const clearRect = () => {
      this.element.entity.ctx.clearRect(
        0,
        0,
        this.element.entity.sw,
        this.element.entity.sh
      );
    };

    const animate = () => {
      for (let j = 0; j < compAtrrs.LeonAtrs.length; j++) {
        const t = compAtrrs.LeonAtrs[j];

        if (this.targetValue.hasOwnProperty("completion_rate")) {
          dont = false;
        }
        this.element.entity.leon[t] =
          f * (this.targetValue[t] - this.initialValue[t]) +
          this.initialValue[t];

        if (t === "completion_rate") {
          let i;
          const total = this.element.entity.leon.drawing.length;
          for (i = 0; i < total; i++) {
            this.element.entity.leon.drawing[i].value =
              f * (this.targetValue[t] - this.initialValue[t]) +
              this.initialValue[t];
          }
          dont = true;
        }
      }
    };

    for (let j = 0; j < compAtrrs.LeonAtrs.length; j++) {
      const t = compAtrrs.LeonAtrs[j];
      if (this.initialValue[t] !== this.targetValue[t]) {
        if (this.targetValue.hasOwnProperty("completion_rate")) {
          dont = false;
        } else {
          dont = true;
        }
        this.element.entity.leon[t] =
          f * (this.targetValue[t] - this.initialValue[t]) +
          this.initialValue[t];
      }
    }

    clearRect();
    // console.log("initial", this.initialValue, "target", this.targetValue);
    if (!dont) {
      animate();
      drawning();
    }
  }
}

module.exports = testIn;
