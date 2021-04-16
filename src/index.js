import LeonSans from "./LeonSans";
import LeonIncident from "./LeonIncident";
import compositeAttributes from "./compoAttributes";
import { animatedAttrs, clipValidationRules } from "./validation";

import { name, version } from "../package.json";

export default {
  npm_name: name,
  version: version,
  Clip: {
    exportable: LeonSans,
    attributesValidationRules: { ...clipValidationRules }
  },
  incidents: [
    {
      exportable: LeonIncident,
      name: "LeonIncident",
      attributesValidationRules: { ...animatedAttrs }
    }
  ],
  compositeAttributes
};
