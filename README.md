# motorcortex-LeonSans

## [Demo](https://kissmybutton.github.io/motorcortex-leonsans/demo/)


## Installation

```bash
$ npm install --save @kissmybutton/motorcortex-LeonSans
# OR
$ yarn add @kissmybutton/motorcortex-LeonSans
```

## Loading

```javascript
const MotorCortex = require("@kissmybutton/motorcortex/");
const LeonPlugin = require("@kissmybutton/motorcortex-LeonSans");
const LeonSans = MotorCortex.loadPlugin(LeonPlugin);
```

# Create Clip

## LeonSans

```javascript
const clipName = new LeonSans.Clip(
  {
    canvasId: "leonObj",
    sw: 800,
    sh: 600,
    text: "abcdefghijklmn\nopqrstuvwxyz",
    weight: 100,
    round: true,
    multiply: true,
    drawing: "colorful",
    color: [["#64d3ce", "#2a92ce82", "#2a92ce40", "#2a92ce2e", "#2a92ce00"]],
    colorful: ["#64d3ce", "#2a92ce82", "#2a92ce40", "#2a92ce2e", "#2a92ce00"],
    pathGap: -1,
    patternWidth: 1,
    patternHeight: 10,
    speed: 1,
    tracking: 20,
    leading: 10,
    size: 80
  },
  {
    selector: ".test",
   
  }
);
```

### Clip Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| sw      | width of clip canvas (how many pixels) | all positive numbers |
| sh      | height of clip canvas (how many pixels) | all positive numbers |
| text |  the text to display |  string  |
| weight |  The weight of the font | number 1 - 900   |
| round |  round the corners of font if they are not path | boolean |
| multiply |  applying multiply effect when the font has more then 1 colors |  boolean  |
| drawing |  type of the font efect |  one of: drawing, pattern, colorful, colorPattern  |
| color |  The colors of the characters  |  either a color string or a color strings' array   |
| colorful |  The list of colors of each character. Only applicable in "drawing" property "colorfull"   |  either a color string or a color strings' array   |
| pathGap |  The gap between each coordinate of the points on a line of each character |  numbers |
| patternWidth: |  is the width of the lines wen drawing property is pattern  |  numbers    |
| patternHeight |  is the Height of the lines wen drawing property is pattern   |  numbers  |
| speed |  speed of color changing  wen drawing property is colorPattern  |  numbers   |
| tracking |  The spacing between the characters of a block of text   |  numbers    |
| leading |  The distance between each line of text  |  numbers    |
| size |  size of text   |  numbers |





# Create Incident

## LeonIncident

```javascript
const nameOfIncident = new LeonSans.LeonIncident(
  {
    animatedAttrs: {
      LeonAtrs: {
        completion_rate: 1,
        weight: 600,
        // tracking: 20,
        leading: 10,
        // size: 90,
        // pathGap: 1,
        patternWidth: 100
        // patternHeight: 90
      }
    },
    initialValues: {
      LeonAtrs: {
        completion_rate: 0,
        weight: 100,
        // tracking: 10,
        // leading: 1,
        size: 80,
        // pathGap: 0,
        patternWidth: 1
        // patternHeight: 10
      }
    }
  },
  {
    duration: 2000,
    selector: "!#leonObj"
  }
);
```

### Incident Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| completion_rate |  The rate of text complition |  num from 0 to 1  |
| weight |  The weight of the font: 1 - 900 |  all positive numbers  |
| pathGap |  The gap between each coordinate of the points on a line of each character |  numbers |
| patternWidth: |  is the width of the lines wen drawing property is pattern  |  numbers    |
| patternHeight |  is the Height of the lines wen drawing property is pattern   |  numbers  |
| tracking |  The spacing between the characters of a block of text   |  numbers    |
| leading |  The distance between each line of text  |  numbers    |
| size |  size of text   |  numbers |
| selector |  sekector of insident sould be  the same with  canvasId and ! infront of it|  numbers |


# Add incident to your clip

```javascript
clipName.addIncident(nameOfIncident, 0);

```











