"use strict";

var LeonSans = require("./LeonSans");

var LeonIncident = require("./LeonIncident");

var compositeAttributes = require("./compoAttributes");

module.exports = {
  npm_name: "@kissmybutton/motorcortex-LeonSans",
  Clip: LeonSans,
  incidents: [{
    exportable: LeonIncident,
    name: "LeonIncident"
  }],
  compositeAttributes: compositeAttributes
};