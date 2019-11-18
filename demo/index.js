const MotorCortex = require("@kissmybutton/motorcortex/");
const Player = require("@kissmybutton/motorcortex-player/");
const LeonPlugin = require("../src/main");
const LeonSans = MotorCortex.loadPlugin(LeonPlugin);

const css = `.container {
  position: relative;
  background:linear-gradient(141deg, #000 25%, #000 40%, #000 55%);
  height:100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
 }
 .row{
  display: flex;
  justify-content: space-around;
  align-items: center;

 }
 .cel{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
 }`;

const html = `<div class="container">

<div class="row" >
  <div class="cel"><div class="test"></div> </div>
</div>

</div>`;

const host = document.getElementById("clip");

const containerParams = {
  width: "90%",
  height: "90%"
};

const clip = new MotorCortex.Clip({
  css,
  html,
  host,
  containerParams,
  audioSources: [
    {
      src: "./d2.wav",
      id: "my-wav",
      base64: false,
      startValues: {
        pan: 0,
        gain: 1
      }
    }
  ]
});

const songPlayback = new MotorCortex.AudioPlayback(
  {},
  {
    selector: "~#my-wav",
    startFrom: 10000,
    duration: 5600
  }
);

clip.addIncident(songPlayback, 0);

const test = new LeonSans.Clip(
  {
    canvasId: "leonObj",
    sw: 800,
    sh: 600,
    text: "abcdefghijklmn\nopqrstuvwxyz",
    weight: 100,
    round: true,
    // multiply: true,
    drowing: "colorPatter",
    colorful: ["#64d3ce", "#2a92ce82", "#2a92ce40", "#2a92ce2e", "#2a92ce00"],
    color: [["#64d3ce", "#2a92ce82", "#2a92ce40", "#2a92ce2e", "#2a92ce00"]],
    // pathGap: -1,
    patternWidth: 1,
    patternHeight: 10,
    speed: 1,
    // tracking: 20,
    // leading: 10,
    size: 80
  },
  {
    selector: ".test"
  }
);

const gem = new LeonSans.LeonIncident(
  {
    animatedAttrs: {
      LeonAtrs: {
        completion_rate: 1,
        weight: 100
        // tracking: 20,
        // leading: 10,
        // size: 90,
        // pathGap: 1,
        // patternWidth: 100
        // patternHeight: 90
      }
    },
    initialValues: {
      LeonAtrs: {
        completion_rate: 0,
        weight: 100
        // tracking: 10,
        // leading: 1,
        // size: 80,
        // pathGap: 0,
        // patternWidth: 1
        // patternHeight: 10
      }
    }
  },
  {
    duration: 900,
    selector: "!#leonObj"
  }
);

const meg = new LeonSans.LeonIncident(
  {
    animatedAttrs: {
      LeonAtrs: {
        weight: 900
      }
    },
    initialValues: {
      LeonAtrs: {
        //weight: 100
      }
    }
  },
  {
    duration: 50,
    selector: "!#leonObj"
  }
);

const mic = new LeonSans.LeonIncident(
  {
    animatedAttrs: {
      LeonAtrs: {
        weight: 100
      }
    },
    initialValues: {
      LeonAtrs: {
        //weight: 100
      }
    }
  },
  {
    duration: 50,
    selector: "!#leonObj"
  }
);

const gemb = new LeonSans.LeonIncident(
  {
    animatedAttrs: {
      LeonAtrs: {
        completion_rate: 0.5
      }
    },
    initialValues: {
      LeonAtrs: {
        completion_rate: 1
      }
    }
  },
  {
    duration: 1000,
    selector: "!#leonObj"
  }
);
const gem2 = new LeonSans.LeonIncident(
  {
    animatedAttrs: {
      LeonAtrs: {
        completion_rate: 1
      }
    },
    initialValues: {
      LeonAtrs: {
        completion_rate: 0.5
      }
    }
  },
  {
    duration: 1000,
    selector: "!#leonObj"
  }
);

const meg2 = new LeonSans.LeonIncident(
  {
    animatedAttrs: {
      LeonAtrs: {
        weight: 900,
        leading: 10
      }
    },
    initialValues: {
      LeonAtrs: {
        //weight: 100
      }
    }
  },
  {
    duration: 900,
    selector: "!#leonObj"
  }
);

const trak = new LeonSans.LeonIncident(
  {
    animatedAttrs: {
      LeonAtrs: {
        tracking: 10
      }
    },
    initialValues: {
      LeonAtrs: {
        //weight: 100
      }
    }
  },
  {
    duration: 1300,
    selector: "!#leonObj"
  }
);

test.addIncident(gem, 0);
test.addIncident(meg, 900);
test.addIncident(mic, 950);
test.addIncident(gemb, 1100);
test.addIncident(gem2, 2400);
test.addIncident(meg2, 3400);
test.addIncident(trak, 4300);
clip.addIncident(test, 0);

new Player({ clip });
