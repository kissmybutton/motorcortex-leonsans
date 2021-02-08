import LeonSans from "./LeonSans";
import LeonIncident from "./LeonIncident";
import compositeAttributes from "./compoAttributes";
import { animatedAttrs, clipValidationRules } from "./validation";

const pkg = require("../package.json");

export default {
  npm_name: pkg.name,
  version: pkg.version,
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
