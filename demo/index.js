import { loadPlugin, HTMLClip, AudioPlayback } from "@kissmybutton/motorcortex";
import Player from "@kissmybutton/motorcortex-player";
import LeonPlugin from "../dist/motorcortex-leonsans.umd";

const LeonSans = loadPlugin(LeonPlugin);

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

const html = `<div class="container"></div>`;

const host = document.getElementById("clip");

const containerParams = {
  width: "800px",
  height: "600px"
};

const clip = new HTMLClip({
  css,
  html,
  host,
  containerParams,
  audioSources: [
    {
      src: "https://kissmybutton.github.io/motorcortex-leonsans/demo/d2.mp3",
      id: "my-wav",
      base64: false
    }
  ]
});

const songPlayback = new AudioPlayback(
  {},
  {
    selector: "~#my-wav",
    startFrom: 0,
    duration: 5600
  }
);

clip.addIncident(songPlayback, 0);

const test = new LeonSans.Clip(
  {
    canvasId: "leonObj",
    sw: 1400 / 2,
    sh: 700 / 2,
    text: "KISSMYBUTTON\nLEON_SANS\nPLUGIN",
    weight: 100,
    round: true,
    // multiply: true,
    drawing: "colorful",
    colorful: ["#64d3ce", "#2a92ce82", "#ff003c", "#2a92ce2e", "#2a92ce00"],
    color: [
      ["rgb(0, 255, 68)", "#2a92ce82", "#2a92ce40", "#2a92ce2e", "#2a92ce00"],
      ["rgb(0, 255, 68)", "#ffe600", "#2a92ce40", "#2a92ce2e", "#2a92ce00"],

      ["#ff00fb", "#2a92ce", "#2a92ce40", "#2a92ce2e", "#2a92ce00"]
    ],
    // pathGap: -1,
    patternWidth: 1,
    patternHeight: 10,
    speed: 1,
    // tracking: 20,
    // leading: 10,
    size: 80
  },
  {
    selector: ".container"
  }
);

const gem = new LeonSans.LeonIncident(
  {
    animatedAttrs: {
      LeonAttrs: {
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
      LeonAttrs: {
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
      LeonAttrs: {
        weight: 900
      }
    },
    initialValues: {
      LeonAttrs: {
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
      LeonAttrs: {
        weight: 100
      }
    },
    initialValues: {
      LeonAttrs: {
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
      LeonAttrs: {
        completion_rate: 0.5
      }
    },
    initialValues: {
      LeonAttrs: {
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
      LeonAttrs: {
        completion_rate: 1
      }
    },
    initialValues: {
      LeonAttrs: {
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
      LeonAttrs: {
        weight: 900,
        leading: 7
      }
    },
    initialValues: {
      LeonAttrs: {
        //weight: 100
      }
    }
  },
  {
    duration: 900,
    selector: "!#leonObj"
  }
);

test.addIncident(gem, 0);
test.addIncident(meg, 900);
test.addIncident(mic, 950);
test.addIncident(gemb, 1100);
test.addIncident(gem2, 2400);
test.addIncident(meg2, 3400);
clip.addIncident(test, 0);

new Player({ clip });
