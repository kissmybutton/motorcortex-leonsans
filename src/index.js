import LeonSans from "./LeonSans";
import LeonIncident from "./LeonIncident";
import compositeAttributes from "./compoAttributes";
import { animatedAttrs, clipValidationRules } from "./validation";
export default {
  npm_name: "@kissmybutton/motorcortex-leonsans",
  Clip: {
    exportable: LeonSans,
    attributesValidationRules: { ...clipValidationRules }
  },
  incidents: [
    {
      exportable: LeonIncident,
      name: "LeonIncident",
      attributesValidationRules: { animatedAttrs }
    }
  ],
  compositeAttributes
};
