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
