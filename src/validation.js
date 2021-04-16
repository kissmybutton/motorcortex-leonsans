const _COLOR = "color";
export const animatedAttrs = {
  type: "object",
  // strict : true,
  props: {
    LeonAttrs: {
      optional: false,
      type: "object",
      props: {
        completion_rate: {
          type: "number",
          integer: false,
          optional: true,
          max: 1,
          min: 0
        },
        weight: {
          type: "number",
          optional: true,
          min: 0
        },
        pathGap: {
          type: "number",
          optional: true
        },
        patternWidth: {
          type: "number",
          optional: true
        },
        patternHeight: {
          type: "number",
          optional: true
        },
        tracking: {
          type: "number",
          optional: true
        },
        leading: {
          type: "number",
          optional: true
        },
        size: {
          type: "number",
          optional: true
        },
        selector: {
          type: "number",
          optional: true
        }
      }
    }
  }
};

export const clipValidationRules = {
  canvasId: {
    type: "string",
    optional: false
  },
  sw: {
    type: "number",
    optional: true,
    min: 0
  },
  sh: {
    type: "number",
    optional: true,
    min: 0
  },
  text: {
    type: "string",
    optional: false
  },
  weight: {
    type: "number",
    optional: true,
    min: 0
  },
  round: {
    type: "boolean",
    optional: true
  },
  multiply: {
    type: "boolean",
    optional: true
  },
  drawing: {
    type: "enum",
    values: ["drawing", "pattern", "colorful", "colorPattern"],
    optional: true
  },
  color: {
    optional: true,
    type: "array",
    items: {
      optional: true,
      type: "array",
      items: {
        type: _COLOR,
        optional: true
      }
    }
  },
  colorful: {
    optional: true,
    type: "array",
    items: {
      type: _COLOR,
      optional: true
    }
  },
  pathGap: {
    type: "number",
    optional: true
  },
  patternWidth: {
    type: "number",
    optional: true
  },
  patternHeight: {
    type: "number",
    optional: true
  },
  speed: {
    type: "number",
    optional: true
  },
  tracking: {
    type: "number",
    optional: true
  },
  leading: {
    type: "number",
    optional: true
  },
  size: {
    type: "number",
    optional: true
  }
};
