import LeonSans from "./LeonSans";
import LeonIncident from "./LeonIncident";
import compositeAttributes from "./compoAttributes";
import { animatedAttrs } from "./validation";
export default {
  npm_name: "@kissmybutton/motorcortex-leonsans",
  Clip: LeonSans,
  incidents: [
    {
      exportable: LeonIncident,
      name: "LeonIncident",
      attributesValidationRules: { animatedAttrs }
    }
  ],
  compositeAttributes
};
