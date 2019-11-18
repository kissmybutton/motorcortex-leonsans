const LeonSans = require("./LeonSans");
const LeonIncident = require("./LeonIncident");
const compositeAttributes = require("./compoAttributes");

module.exports = {
  npm_name: "@kissmybutton/motorcortex-LeonSans",
  Clip: LeonSans,
  incidents: [
    {
      exportable: LeonIncident,
      name: "LeonIncident"
    }
  ],
  compositeAttributes: compositeAttributes
};
