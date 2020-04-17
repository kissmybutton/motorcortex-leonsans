import LeonSans from "./LeonSans";
import LeonIncident from "./LeonIncident";
import compositeAttributes from "./compoAttributes";

export default {
  npm_name: "@kissmybutton/motorcortex-leonsans",
  Clip: LeonSans,
  incidents: [
    {
      exportable: LeonIncident,
      name: "LeonIncident"
    }
  ],
  compositeAttributes
};
